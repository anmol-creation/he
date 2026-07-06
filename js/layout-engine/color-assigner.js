/**
 * Lineage Color assignment.
 * Recursively applies inherited colors from roots down to children and spouses.
 */

const rootColors = {
    'brahma': '#F7931E', // Base Saffron for Brahma
    'vishnu': '#3399FF', // Blue for Vishnu
    'mahesh': '#9933FF', // Purple for Mahesh
    'suryavansh_root': '#FF9900',
    'ikshvaku': '#FF9900',
    'vaivasvata_manu': '#FF9900',
    'chandra': '#4169E1',
    'pururava': '#4169E1', // Example specific roots if they exist
    'chandravansh_root': '#4169E1'
};

const defaultColor = '#FF6B35';

export function assignLineageColors(nodesMap) {
    // 1. Assign colors to root nodes explicitly if defined
    nodesMap.forEach((node, id) => {
        if (rootColors[id]) {
            node.inheritedColor = rootColors[id];
        } else if (!node.parent && !node.spouseOf) {
            node.inheritedColor = defaultColor;
        }
    });

    // 2. Cascade colors down the tree (DFS)
    const traverseAndColor = (nodeId, colorToPass) => {
        const node = nodesMap.get(nodeId);
        if (!node) return;

        // If the node has a specifically mapped root color, use it, else inherit
        const nodeColor = rootColors[nodeId] || colorToPass || defaultColor;
        node.inheritedColor = nodeColor;

        node.spouses.forEach(spouseId => {
            const spouse = nodesMap.get(spouseId);
            if (spouse) {
                spouse.inheritedColor = nodeColor;
            }
        });

        node.children.forEach(childId => {
            const child = nodesMap.get(childId);
            if (child) {
                traverseAndColor(childId, nodeColor);
            }
        });
    };

    // Start coloring from absolute roots
    nodesMap.forEach(node => {
        if (!node.parent && !node.spouseOf) {
            traverseAndColor(node.id, rootColors[node.id] || defaultColor);
        }
    });
}
