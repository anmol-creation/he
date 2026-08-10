export function buildTree(rawData, nodesMap, transitionWires) {
    const processedData = [];
    const expandedClusters = window.MapState ? window.MapState.expandedClusters : new Set();

    const nodeExists = (id) => rawData.some(d => d.id === id);

    // Filter by Kalpa and Manvantara
    const activeKalpa = window.MapState ? window.MapState.activeKalpa : 'shveta_varaha';
    const activeManv = window.MapState ? window.MapState.activeManvantara : 7;

    // Group clusters
    const clusterMap = new Map();

    rawData.forEach(originalNode => {
        const node = { ...originalNode };

        // Define Visual Attributes (Backward Compatible)
        const visualParent = node.parent_id_a || node.parent;
        const visualSpouse = node.gender === 'male' ? null : node.spouseOf;

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
                  clusterMap.set(node.clusterName, {
                       id: `cluster_${node.clusterName.replace(/\s+/g, '_')}`,
                       name: `${node.clusterName} ⊞`,
                       subtitle: 'Click to expand',
                       parent: visualParent, // Assume all items in cluster share the same parent/spouse origin logically
                       spouseOf: node.spouseOf, // Keep original data
                       visualSpouse: visualSpouse, // For layout engine
                       isCluster: true,
                       clusterName: node.clusterName,
                       nodes: []
                  });

                  // For a spouse cluster proxy to attach correctly to husband, we need to treat it similar to a wife node
                  // if it has both parent and spouse. If it only has spouse, it naturally attaches.
                  // But we don't want to auto-duplicate the proxy node visually because it represents a group.
                  // So we will just strip its parent if it has a spouse, to force it into the husband's line as a block.
                  const proxyNode = clusterMap.get(node.clusterName);
                  if (proxyNode.visualSpouse && proxyNode.parent) {
                      proxyNode.parent = null; // Forces it to render on husband's line
                  }

                  processedData.push(proxyNode);
             }
             clusterMap.get(node.clusterName).nodes.push(node);
             return; // Skip adding the actual node to processedData
        }

        // AUTO-DUPLICATION LOGIC for FEMALES ONLY
        if (visualParent && visualSpouse && node.gender !== 'male') {
            // When cluster is expanded, we still process the individual females so they might split into daughter/wife.
            const parentFound = nodeExists(visualParent);
            const spouseFound = nodeExists(visualSpouse);

            if (parentFound && spouseFound) {
                const daughterNode = {
                    ...node,
                    id: `${node.id}_daughter`,
                    spouseOf: null, // Strip visual spouse so she stays a daughter
                    parent_id_a: visualParent, // Ensure visual parent is set explicitly
                    parent: visualParent,
                    subtitle: `${node.subtitle || ''} (Daughter)`.trim()
                };

                const wifeNode = {
                    ...node,
                    parent: null, // Strip visual parent so she stays a wife
                    parent_id_a: null,
                    spouseOf: visualSpouse,
                    subtitle: `${node.subtitle || ''} (Wife)`.trim()
                };

                processedData.push(daughterNode, wifeNode);

                transitionWires.push({
                    from: daughterNode.id,
                    to: wifeNode.id
                });
            } else if (spouseFound) {
                console.warn(`[TreeBuilder Warning]: Female node '${node.id}' has a parent '${visualParent}' that does not exist in data. Defaulting to Wife-only node.`);
                const wifeNode = {
                    ...node,
                    parent: null,
                    parent_id_a: null,
                    spouseOf: visualSpouse
                };
                processedData.push(wifeNode);
            } else if (parentFound) {
                 console.warn(`[TreeBuilder Warning]: Female node '${node.id}' has a spouse '${visualSpouse}' that does not exist in data. Defaulting to Daughter-only node.`);
                 const daughterNode = {
                     ...node,
                     spouseOf: null,
                     parent: visualParent,
                     parent_id_a: visualParent
                 };
                 processedData.push(daughterNode);
            } else {
                console.warn(`[TreeBuilder Warning]: Node '${node.id}' has an invalid parent and spouse. Adding to raw list to be caught by orphan logic.`);
                node.parent = visualParent;
                node.spouseOf = visualSpouse;
                processedData.push(node);
            }
        } else {
            // NORMAL NODE (Male, or Unmarried Female, or Wife without Father)
            node.parent = visualParent;
            // node.spouseOf remains intact for data/Info Box, but we add visualSpouse for rendering checks if needed.
            node.visualSpouse = visualSpouse;
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
                isSpouse: !!node.visualSpouse
            }
        });
    });

    // Pre-populate spouses so we know exactly how many wives a husband has before assigning children
    processedData.forEach(node => {
        if (node.visualSpouse && nodesMap.has(node.visualSpouse)) {
            const partner = nodesMap.get(node.visualSpouse);
            if (!partner.spouses.includes(node.id)) {
                partner.spouses.push(node.id);
            }
        }
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

        if (node.visualSpouse) {
             if (!nodesMap.has(node.visualSpouse)) {
                console.warn(`[TreeBuilder Warning]: Node '${node.id}' refers to missing spouse '${node.visualSpouse}'.`);
             }
        }

        // Routing Children Vertically
        if (node.parent && (!node.visualSpouse || node.isCluster)) {
             if (nodesMap.has(node.parent)) {
                const parentNode = nodesMap.get(node.parent);
                let pushedToAlternativeParent = false;

                // DYNAMIC EDGE ROUTING RULE:
                // Use parent_id_b (or fallback to 'mother') if >1 wives AND alternative parent is visible
                const visualAltParent = node.parent_id_b || node.mother;
                const hasMultipleWives = parentNode.spouses && parentNode.spouses.length > 1;

                if (visualAltParent && nodesMap.has(visualAltParent) && hasMultipleWives) {
                    const altNodeRaw = rawData.find(d => d.id === visualAltParent);

                    if (altNodeRaw) {
                        // Check if the alt parent (mother) is part of a collapsed cluster.
                        const isAltClustered = altNodeRaw.clusterName && !expandedClusters.has(altNodeRaw.clusterName);

                        if (!isAltClustered && nodesMap.has(visualAltParent)) {
                            // Alt Parent is physically rendered on canvas -> Route from her
                            nodesMap.get(visualAltParent).children.push(node.id);
                            node.renderParent = visualAltParent;
                            pushedToAlternativeParent = true;
                        }
                    }
                }

                if (!pushedToAlternativeParent) {
                    if (parentNode) {
                        parentNode.children.push(node.id);
                        node.renderParent = node.parent;
                    }
                }
             } else {
                 console.warn(`[TreeBuilder Warning]: Node '${node.id}' refers to missing parent '${node.parent}'. Catching in Unknown Origin.`);
                 node.parent = 'unknown_origin';
                 node.renderParent = 'unknown_origin';
                 nodesMap.get('unknown_origin').children.push(node.id);
             }
        }
    });

    if (nodesMap.get('unknown_origin').children.length === 0) {
        nodesMap.delete('unknown_origin');
    }

    return nodesMap;
}
