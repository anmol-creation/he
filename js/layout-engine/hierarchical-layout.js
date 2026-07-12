import { NODE_WIDTH, MIN_GAP_X, NODE_HEIGHT, MIN_GAP_Y } from './constants.js';

export function runHierarchicalLayout(nodesMap, rootNodes) {
    const nodes = Array.from(nodesMap.values());

    // 1. Layer Assignment (Ranking)
    // We assume node.depth is already calculated correctly by position-calculator.js
    const layers = new Map();
    let maxDepth = 0;

    nodes.forEach(node => {
        const depth = Math.floor(node.depth); // Group wives (x.5) into the same logical processing layer or keep them separate
        if (!layers.has(node.depth)) {
            layers.set(node.depth, []);
        }
        layers.get(node.depth).push(node);
        if (node.depth > maxDepth) maxDepth = node.depth;
    });

    // 2. Crossing Minimization (Barycenter Heuristic)
    // We sort nodes in layer i based on the average X position of their parents in layer i-1
    // For the first layer (roots), we sort by id or predefined order
    const sortedDepths = Array.from(layers.keys()).sort((a, b) => a - b);

    sortedDepths.forEach((depth, idx) => {
        const currentLayer = layers.get(depth);

        if (idx === 0) {
             // Roots layer: Just space them out
             // Sort alphabetically or keep original order
        } else {
             // For each node, calculate the average X position of its incoming edges (parents/spouses)
             currentLayer.forEach(node => {
                 let sumX = 0;
                 let count = 0;

                 // Look at parents
                 if (node.parent && nodesMap.has(node.parent)) {
                     const pNode = nodesMap.get(node.parent);
                     if (pNode.x !== undefined) {
                         sumX += pNode.x;
                         count++;
                     }
                 }
                 if (node.mother && nodesMap.has(node.mother)) {
                     const mNode = nodesMap.get(node.mother);
                     if (mNode.x !== undefined) {
                         sumX += mNode.x;
                         count++;
                     }
                 }
                 // Look at spouse if it's a wife node
                 if (node.spouseOf && nodesMap.has(node.spouseOf)) {
                     const sNode = nodesMap.get(node.spouseOf);
                     if (sNode.x !== undefined) {
                         // Pull wives slightly to the right of the husband
                         sumX += sNode.x + NODE_WIDTH + MIN_GAP_X;
                         count++;
                     }
                 }

                 node.barycenter = count > 0 ? sumX / count : 0;
             });

             // Sort current layer by barycenter
             currentLayer.sort((a, b) => {
                 if (a.barycenter === b.barycenter) {
                     // Fallback to cluster or id to keep groups together
                     const aGroup = a.clusterName || a.id;
                     const bGroup = b.clusterName || b.id;
                     return aGroup.localeCompare(bGroup);
                 }
                 return a.barycenter - b.barycenter;
             });
        }

        // 3. Coordinate Assignment (X-axis)
        // Space them out strictly ensuring MIN_GAP_X
        // For the root layer, we center them around 0
        let currentX = 0;

        // Try to respect the barycenter if it doesn't cause overlap
        currentLayer.forEach((node, nodeIdx) => {
             // Calculate ideal X based on parents
             let idealX = node.barycenter || currentX;

             // If we are a spouse, we MUST be next to the husband (if same depth) or below him
             // Actually, depth + 0.5 puts wives on a separate visual level in Y, so they don't overlap with husbands horizontally here
             // But let's enforce minimum gap from the previous node
             if (idealX < currentX) {
                 idealX = currentX;
             }

             node.x = idealX;

             // Next node must be at least this far away
             currentX = node.x + (node.spouseOf ? 120 : NODE_WIDTH) + MIN_GAP_X;
        });

        // Center the entire layer under its parents if possible, or just shift it
        if (currentLayer.length > 0 && idx > 0) {
             const firstNode = currentLayer[0];
             const lastNode = currentLayer[currentLayer.length - 1];
             const layerWidth = lastNode.x - firstNode.x;
             const layerCenter = firstNode.x + (layerWidth / 2);

             // Find average barycenter of the whole layer
             let totalBary = 0;
             let bCount = 0;
             currentLayer.forEach(n => {
                 if (n.barycenter) { totalBary += n.barycenter; bCount++; }
             });

             if (bCount > 0) {
                 const targetCenter = totalBary / bCount;
                 const shift = targetCenter - layerCenter;
                 // Only shift if it doesn't push us into negative territory unnecessarily, but coordinate space is infinite
                 currentLayer.forEach(n => n.x += shift);
             }
        }
    });
}
