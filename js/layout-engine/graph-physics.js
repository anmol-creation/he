import { NODE_WIDTH, NODE_HEIGHT, MIN_GAP_X, MIN_GAP_Y } from './constants.js';

export function runGraphPhysics(nodesMap, rootNodes, iterations = 200) {
    const nodes = Array.from(nodesMap.values());
    const k = NODE_WIDTH + MIN_GAP_X; // Optimal horizontal distance
    const temp = k * 10; // Initial temperature for simulated annealing

    // Initialize positions relative to parents to avoid explosion
    // Assume Y is already set based on depth.
    nodes.forEach(node => {
        if (node.x === undefined) {
             if (node.parent && nodesMap.has(node.parent)) {
                 node.x = nodesMap.get(node.parent).x + (Math.random() - 0.5) * k;
             } else if (node.spouseOf && nodesMap.has(node.spouseOf)) {
                 node.x = nodesMap.get(node.spouseOf).x + k;
             } else {
                 node.x = 5000 + (Math.random() - 0.5) * 5000;
             }
        }
        node.dx = 0;
        node.dy = 0;
    });

    // 1. Force calculation (Fruchterman-Reingold inspired)
    for (let i = 0; i < iterations; i++) {
        // Calculate repulsive forces between all pairs of nodes
        for (let v = 0; v < nodes.length; v++) {
            const nodeV = nodes[v];
            nodeV.dx = 0;
            nodeV.dy = 0;
            for (let u = 0; u < nodes.length; u++) {
                if (u !== v) {
                    const nodeU = nodes[u];
                    const deltaX = nodeV.x - nodeU.x;

                    // We primarily care about X repulsion since Y is locked.
                    // If they are on different Y levels, repulsion is much weaker.
                    const yDist = Math.abs(nodeV.y - nodeU.y);
                    if (yDist > NODE_HEIGHT * 2) continue; // Too far vertically to care

                    // Add slight random noise to prevent exact overlap stagnation
                    const effDeltaX = deltaX === 0 ? (Math.random() - 0.5) : deltaX;
                    const dist = Math.abs(effDeltaX);

                    if (dist > 0 && dist < k * 5) {
                        const force = (k * k) / dist;
                        nodeV.dx += (effDeltaX / dist) * force;
                    }
                }
            }
        }

        // Calculate attractive forces for edges (parent-child, husband-wife)
        nodes.forEach(nodeV => {
            nodeV.children.forEach(childId => {
                const nodeU = nodesMap.get(childId);
                if (nodeU) {
                    const deltaX = nodeV.x - nodeU.x;
                    const dist = Math.abs(deltaX);
                    if (dist > 0) {
                        const force = (dist * dist) / k;
                        const dispX = (deltaX / dist) * force;

                        nodeV.dx -= dispX;
                        nodeU.dx += dispX;
                    }
                }
            });

            nodeV.spouses.forEach(spouseId => {
                const nodeU = nodesMap.get(spouseId);
                if (nodeU) {
                    const deltaX = nodeV.x - nodeU.x;
                    const dist = Math.abs(deltaX);
                    if (dist > 0) {
                        // Spouses should be attracted strongly on X axis
                        const force = (dist * dist) / (k * 0.2); // Stronger attraction to keep wives close
                        const dispX = (deltaX / dist) * force;

                        nodeV.dx -= dispX;
                        nodeU.dx += dispX;
                    }
                }
            });
        });

        // Limit maximum displacement to the temperature t and apply it
        const currentTemp = temp * (1 - i / iterations);
        nodes.forEach(node => {
            const dist = Math.abs(node.dx);
            if (dist > 0) {
                node.x += (node.dx / dist) * Math.min(dist, currentTemp);
            }
        });
    }

    // 2. Strict Overlap Resolution Pass (Sweep-line logic for same Y level)
    // Group nodes by depth
    const depths = new Map();
    nodes.forEach(node => {
        if (!depths.has(node.depth)) depths.set(node.depth, []);
        depths.get(node.depth).push(node);
    });

    depths.forEach((levelNodes) => {
        // Run multiple passes to gently resolve overlaps without breaking order
        for (let pass = 0; pass < 5; pass++) {
            // Sort by X
            levelNodes.sort((a, b) => a.x - b.x);

            for (let i = 1; i < levelNodes.length; i++) {
                const prev = levelNodes[i - 1];
                const curr = levelNodes[i];

                const reqDist = NODE_WIDTH + MIN_GAP_X;
                if (curr.x - prev.x < reqDist) {
                    const shift = (reqDist - (curr.x - prev.x)) / 2;
                    // Push both nodes away from each other evenly
                    curr.x += shift;
                    prev.x -= shift;
                }
            }
        }
    });
}
