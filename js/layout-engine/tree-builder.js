export function buildTree(rawData, nodesMap, transitionWires) {
    const processedData = [];
    const expandedClusters = window.MapState ? window.MapState.expandedClusters : new Set();

    const nodeExists = (id) => rawData.some(d => d.id === id);

    // Group clusters
    const clusterMap = new Map();

    rawData.forEach(node => {
        // If node belongs to a cluster and it is NOT expanded, squash it
        if (node.clusterName && !expandedClusters.has(node.clusterName)) {
             if (!clusterMap.has(node.clusterName)) {
                  clusterMap.set(node.clusterName, {
                       id: `cluster_${node.clusterName.replace(/\s+/g, '_')}`,
                       name: `${node.clusterName} ⊞`,
                       subtitle: 'Click to expand',
                       parent: node.parent, // Assume all items in cluster share the same parent/spouse origin logically
                       spouseOf: node.spouseOf,
                       isCluster: true,
                       clusterName: node.clusterName,
                       nodes: []
                  });
                  processedData.push(clusterMap.get(node.clusterName));
             }
             clusterMap.get(node.clusterName).nodes.push(node);
             return; // Skip adding the actual node to processedData
        }

        if (node.parent && node.spouseOf) {
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

        if (node.spouseOf) {
             if (nodesMap.has(node.spouseOf)) {
                const partner = nodesMap.get(node.spouseOf);
                partner.spouses.push(node.id);
             } else {
                console.warn(`[TreeBuilder Warning]: Node '${node.id}' refers to missing spouse '${node.spouseOf}'.`);
             }
        } else if (node.parent) {
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
