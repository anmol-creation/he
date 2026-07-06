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
        // Only auto-duplicate if BOTH the parent and the spouse actually exist in the data
        if (node.parent && node.spouseOf && nodeExists(node.parent) && nodeExists(node.spouseOf)) {
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

    // 2. Build relationships
    nodesMap.forEach(node => {
        if (node.spouseOf && nodesMap.has(node.spouseOf)) {
            const partner = nodesMap.get(node.spouseOf);
            if (partner) {
                // Put in spouses array, not children array
                partner.spouses.push(node.id);
            }
        } else if (node.parent && nodesMap.has(node.parent) && !node.spouseOf) {
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
        }
    });

    return nodesMap;
}
