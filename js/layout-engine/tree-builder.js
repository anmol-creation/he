export function buildTree(rawData, nodesMap, transitionWires) {
    const processedData = [];
    const expandedClusters = window.MapState ? window.MapState.expandedClusters : new Set();
    const expandedBranches = window.MapState ? window.MapState.expandedBranches : new Set();

    const nodeExists = (id) => rawData.some(d => d.id === id);

    // Filter by Kalpa and Manvantara
    const activeKalpa = window.MapState ? window.MapState.activeKalpa : 'shveta_varaha';
    const activeManv = window.MapState ? window.MapState.activeManvantara : 7;

    // Group clusters
    const clusterMap = new Map();


    // Optimize parent lookup to O(1)
    const rawLookup = new Map();
    rawData.forEach(d => rawLookup.set(d.id, d));

    // Dynamically assign clusterName to top-level families to collapse them
    rawData.forEach(node => {
        if (!node.clusterName) {
            let currentAnchor = node.parent || node.spouseOf;
            while(currentAnchor) {
                if (currentAnchor === 'brahma') { node.clusterName = 'संपूर्ण संसार (Brahma Lineage)'; break; }
                if (currentAnchor === 'vishnu') { node.clusterName = 'विष्णु परिवार (Vishnu Lineage)'; break; }
                if (currentAnchor === 'shiva') { node.clusterName = 'शिव परिवार (Shiva Lineage)'; break; }
                const pData = rawLookup.get(currentAnchor);
                currentAnchor = pData ? (pData.parent || pData.spouseOf) : null;
            }
        }
    });

    rawData.forEach(node => {
        // Evaluate Kalpa Filter
        const timeScale = node.timeScale || '';
        const nodeKalpa = node.kalpa || 'shveta_varaha'; // Default normal nodes to current kalpa
        const nodeManv = node.manvantara || 7; // Default unspecified normal lineages to 7th

        // Always show Sanatan and Mahakalp nodes. Otherwise, must match active Kalpa.
        if (timeScale !== 'sanatan' && timeScale !== 'mahakalp') {
            if (nodeKalpa !== activeKalpa) {
                return; // Skip this node entirely from the layout
            }

            // If it belongs to this Kalpa, but is not cross-Manvantara (timeScale: kalpa), evaluate Manvantara
            if (timeScale !== 'kalpa') {
                if (nodeManv !== activeManv) {
                    return; // Skip nodes that don't belong to the active Manvantara
                }
            }
        }



        // If node belongs to a cluster and it is NOT expanded, squash it
        if (node.clusterName && !expandedClusters.has(node.clusterName)) {
             if (!clusterMap.has(node.clusterName)) {

                  // Determine root anchor for the dynamic proxy so it attaches to Brahma/Vishnu/Shiva
                  let proxyParent = node.parent;
                  let proxySpouse = node.spouseOf;
                  let isProminent = false;
                  if (node.clusterName.includes('Brahma Lineage')) { proxyParent = 'brahma'; proxySpouse = null; isProminent = true; }
                  else if (node.clusterName.includes('Vishnu Lineage')) { proxyParent = 'vishnu'; proxySpouse = null; isProminent = true; }
                  else if (node.clusterName.includes('Shiva Lineage')) { proxyParent = 'shiva'; proxySpouse = null; isProminent = true; }

                  clusterMap.set(node.clusterName, {
                       id: `cluster_${node.clusterName.replace(/\s+/g, '_')}`,
                       name: `${node.clusterName} ⊞`,
                       subtitle: 'Click to expand',
                       parent: proxyParent,
                       spouseOf: proxySpouse,
                       isCluster: true,
                       isProminent: isProminent,
                       inheritedColor: proxyParent === 'brahma' ? '#F7931E' : (proxyParent === 'vishnu' ? '#3399FF' : (proxyParent === 'shiva' ? '#9933FF' : '#FF6B35')),
                       clusterName: node.clusterName,
                       nodes: []
                  });

                  // For a spouse cluster proxy to attach correctly to husband, we need to treat it similar to a wife node
                  // if it has both parent and spouse. If it only has spouse, it naturally attaches.
                  // But we don't want to auto-duplicate the proxy node visually because it represents a group.
                  // So we will just strip its parent if it has a spouse, to force it into the husband's line as a block.
                  const proxyNode = clusterMap.get(node.clusterName);
                  if (proxyNode.spouseOf && proxyNode.parent) {
                      proxyNode.parent = null; // Forces it to render on husband's line
                  }

                  processedData.push(proxyNode);
             }
             clusterMap.get(node.clusterName).nodes.push(node);
             return; // Skip adding the actual node to processedData
        }

        if (node.parent && node.spouseOf) {
            // When cluster is expanded, we still process the individual females so they might split into daughter/wife.
            const parentFound = nodeExists(node.parent);
            const spouseFound = nodeExists(node.spouseOf);

            if (parentFound && spouseFound) {
                const daughterNode = {
                    ...node,
                    id: `${node.id}_daughter`,
                    spouseOf: null,
                    subtitle: `${node.subtitle || ''} (Daughter)`.trim()
                };

                const wifeNode = {
                    ...node,
                    parent: null,
                    subtitle: `${node.subtitle || ''} (Wife)`.trim()
                };

                processedData.push(daughterNode, wifeNode);

                transitionWires.push({
                    from: daughterNode.id,
                    to: wifeNode.id
                });
            } else if (spouseFound) {
                console.warn(`[TreeBuilder Warning]: Female node '${node.id}' has a parent '${node.parent}' that does not exist in data. Defaulting to Wife-only node.`);
                const wifeNode = {
                    ...node,
                    parent: null
                };
                processedData.push(wifeNode);
            } else if (parentFound) {
                 console.warn(`[TreeBuilder Warning]: Female node '${node.id}' has a spouse '${node.spouseOf}' that does not exist in data. Defaulting to Daughter-only node.`);
                 const daughterNode = {
                     ...node,
                     spouseOf: null
                 };
                 processedData.push(daughterNode);
            } else {
                console.warn(`[TreeBuilder Warning]: Node '${node.id}' has an invalid parent and spouse. Adding to raw list to be caught by orphan logic.`);
                processedData.push(node);
            }
        } else {
            processedData.push(node);
        }
    });

    processedData.forEach(node => {
        nodesMap.set(node.id, {
            ...node,
            children: [],
            spouses: [],
            depth: 0,
            layout: {
                x: 0,
                width: 200,
                contours: { min: [], max: [] },
                isSpouse: !!node.spouseOf
            }
        });
    });

    if (!nodesMap.has('unknown_origin')) {
        nodesMap.set('unknown_origin', {
            id: 'unknown_origin',
            name: 'Unknown Origin (Orphans)',
            subtitle: 'Nodes with missing parents',
            children: [],
            spouses: [],
            depth: 0,
            inheritedColor: '#FF0000',
            layout: {
                x: 0,
                width: 200,
                contours: { min: [], max: [] },
                isSpouse: false
            }
        });
    }

    nodesMap.forEach(node => {
        if (node.id === 'unknown_origin') return;

        // Important: A cluster node can have BOTH parent and spouseOf (unlike individual females which are duplicated).
        // We must process both relationships for the proxy cluster node so it connects to the father and the husband simultaneously.

        let hasParentProcessed = false;

        if (node.spouseOf) {
             if (nodesMap.has(node.spouseOf)) {
                const partner = nodesMap.get(node.spouseOf);
                partner.spouses.push(node.id);
             } else {
                console.warn(`[TreeBuilder Warning]: Node '${node.id}' refers to missing spouse '${node.spouseOf}'.`);
             }
        }

        // Use standard "if" instead of "else if" for clusters so they can link to both sides.
        // For normal nodes, they should only link to ONE side to maintain tree topology (unless duplicated).
        // Since we explicitly nulled the parent of a spousal proxy node above, it will safely skip this and only render as a spouse.
        if (node.parent && (!node.spouseOf || node.isCluster)) {
             if (nodesMap.has(node.parent)) {
                let pushedToMother = false;
                if (node.mother && nodesMap.has(node.mother)) {
                    const motherNode = nodesMap.get(node.mother);
                    if (motherNode) {
                        motherNode.children.push(node.id);
                        pushedToMother = true;
                    }
                }
                if (!pushedToMother) {
                    const parentNode = nodesMap.get(node.parent);
                    if (parentNode) {
                        parentNode.children.push(node.id);
                    }
                }
             } else {
                 console.warn(`[TreeBuilder Warning]: Node '${node.id}' refers to missing parent '${node.parent}'. Catching in Unknown Origin.`);
                 node.parent = 'unknown_origin';
                 nodesMap.get('unknown_origin').children.push(node.id);
             }
        }
    });

    if (nodesMap.get('unknown_origin').children.length === 0) {
        nodesMap.delete('unknown_origin');
    }

    return nodesMap;
}
