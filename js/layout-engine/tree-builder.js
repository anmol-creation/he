/**
 * Data preprocessing and Tree building logic.
 * Parses raw nodes, handles auto-duplication of daughters/wives, and sets up children/spouse arrays.
 */

export function buildTree(rawData, nodesMap, transitionWires) {
    // Pre-process: Auto-duplicate female nodes with BOTH parent and spouseOf
    const processedData = [];

    // Helper to check if a node exists in rawData
    const nodeExists = (id) => rawData.some(d => d.id === id);

    rawData.forEach(node => {
        if (node.parent && node.spouseOf) {
            const parentFound = nodeExists(node.parent);
            const spouseFound = nodeExists(node.spouseOf);

            if (parentFound && spouseFound) {
                // Rule 4: Auto Duplication

                // Node A: Daughter Node (in father's tree)
                const daughterNode = {
                    ...node,
                    id: `${node.id}_daughter`,
                    spouseOf: null, // Remove husband link
                    subtitle: `${node.subtitle || ''} (Daughter)`.trim()
                };

                // Node B: Wife Node (next to husband)
                const wifeNode = {
                    ...node,
                    parent: null, // Remove father link
                    subtitle: `${node.subtitle || ''} (Wife)`.trim()
                };

                processedData.push(daughterNode, wifeNode);

                // Track for drawing dashed line from Daughter -> Wife
                transitionWires.push({
                    from: daughterNode.id,
                    to: wifeNode.id
                });
            } else if (spouseFound) {
                // Parent missing, but spouse exists: treat purely as wife
                console.warn(`[TreeBuilder Warning]: Female node '${node.id}' has a parent '${node.parent}' that does not exist in data. Defaulting to Wife-only node.`);
                const wifeNode = {
                    ...node,
                    parent: null // Strip invalid parent
                };
                processedData.push(wifeNode);
            } else if (parentFound) {
                 // Spouse missing, but parent exists: treat purely as daughter
                 console.warn(`[TreeBuilder Warning]: Female node '${node.id}' has a spouse '${node.spouseOf}' that does not exist in data. Defaulting to Daughter-only node.`);
                 const daughterNode = {
                     ...node,
                     spouseOf: null // Strip invalid spouse
                 };
                 processedData.push(daughterNode);
            } else {
                // Both missing
                console.warn(`[TreeBuilder Warning]: Node '${node.id}' has an invalid parent and spouse. Adding to raw list to be caught by orphan logic.`);
                processedData.push(node);
            }
        } else {
            processedData.push(node);
        }
    });

    // 1. Initialize nodes map using processed data
    processedData.forEach(node => {
        nodesMap.set(node.id, {
            ...node,
            children: [],
            spouses: [],
            depth: 0,
            layout: {
                x: 0,
                width: 200, // NODE_WIDTH
                contours: { min: [], max: [] },
                isSpouse: !!node.spouseOf
            }
        });
    });

    // Ensure "Unknown Origin" root node exists to catch orphans
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

    // 2. Build relationships
    nodesMap.forEach(node => {
        if (node.id === 'unknown_origin') return; // Skip dummy node

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
                 // Re-route to Unknown Origin bucket
                 node.parent = 'unknown_origin';
                 nodesMap.get('unknown_origin').children.push(node.id);
             }
        }
    });

    // Cleanup: If the unknown_origin bucket is empty, remove it to save space
    if (nodesMap.get('unknown_origin').children.length === 0) {
        nodesMap.delete('unknown_origin');
    }

    return nodesMap;
}
