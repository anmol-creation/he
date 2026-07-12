import { NODE_WIDTH, MIN_GAP_X } from './constants.js';

export function calculateIntrinsicWidths(nodesMap) {
    nodesMap.forEach(node => {
        node.layout.width = NODE_WIDTH; // All nodes are standard width now
    });
}

// Merges child contours into parent contours with an offset
export function mergeContours(parentContours, childContours, shiftX, depthOffset = 1) {
    for (let i = 0; i < childContours.min.length; i++) {
        const childMin = childContours.min[i] + shiftX;
        const childMax = childContours.max[i] + shiftX;
        const depthIndex = i + depthOffset;

        if (parentContours.min[depthIndex] === undefined) {
            parentContours.min[depthIndex] = childMin;
            parentContours.max[depthIndex] = childMax;
        } else {
            parentContours.min[depthIndex] = Math.min(parentContours.min[depthIndex], childMin);
            parentContours.max[depthIndex] = Math.max(parentContours.max[depthIndex], childMax);
        }
    }
}

export function calculateSubtreeLayout(nodesMap, nodeId) {
    const node = nodesMap.get(nodeId);
    if (!node) return;

    node.spouses.forEach(spouseId => {
        calculateSubtreeLayout(nodesMap, spouseId);
    });
    node.children.forEach(childId => {
        calculateSubtreeLayout(nodesMap, childId);
    });

    node.layout.contours = {
        min: [0],
        max: [node.layout.width]
    };

    if (node.spouses.length === 1) {
        node.layout.contours.max[0] = NODE_WIDTH + 50 + NODE_WIDTH;
    } else if (node.spouses.length > 1) {
        const totalSpousesWidth = node.spouses.length * NODE_WIDTH + (node.spouses.length - 1) * 50;
        const halfSpouses = totalSpousesWidth / 2;
        const husbandCenter = NODE_WIDTH / 2;
        node.layout.contours.min[0] = Math.min(0, husbandCenter - halfSpouses);
        node.layout.contours.max[0] = Math.max(NODE_WIDTH, husbandCenter + halfSpouses);
    }

    if (node.children.length === 0 && node.spouses.length === 0) {
        return;
    }

    node.children.forEach((childId, index) => {
        const childNode = nodesMap.get(childId);

        if (index === 0) {
            childNode.layout.x = 0;
        } else {
            let maxRequiredShift = 0;

            for(let i=0; i<childNode.layout.contours.min.length; i++) {
                const depthInParent = i + 1;
                if(node.layout.contours.max[depthInParent] !== undefined) {
                    const requiredStart = node.layout.contours.max[depthInParent] + MIN_GAP_X;
                    const shift = requiredStart - childNode.layout.contours.min[i];
                    if (shift > maxRequiredShift) {
                        maxRequiredShift = shift;
                    }
                }
            }

            if (maxRequiredShift === 0) {
                const prevChildNode = nodesMap.get(node.children[index-1]);
                maxRequiredShift = prevChildNode.layout.x + prevChildNode.layout.width + MIN_GAP_X;
            }

            childNode.layout.x = maxRequiredShift;
        }

        mergeContours(node.layout.contours, childNode.layout.contours, childNode.layout.x, 1);
    });

    if (node.spouses.length > 0) {
        let currentSpouseX = 0;

        if (node.spouses.length === 1) {
            currentSpouseX = NODE_WIDTH + MIN_GAP_X;
            const spouseNode = nodesMap.get(node.spouses[0]);
            spouseNode.layout.x = currentSpouseX;
            mergeContours(node.layout.contours, spouseNode.layout.contours, currentSpouseX, 0);
        } else {
            let spousesContour = { min: [], max: [] };
            let lastSpX = 0;

            node.spouses.forEach((spouseId, idx) => {
                const spouseNode = nodesMap.get(spouseId);

                if (idx === 0) {
                    spouseNode.layout.x = 0;
                } else {
                    let maxRequiredShift = 0;
                    for (let i = 0; i < spouseNode.layout.contours.min.length; i++) {
                        if (spousesContour.max[i] !== undefined) {
                            const shift = (spousesContour.max[i] + MIN_GAP_X) - spouseNode.layout.contours.min[i];
                            if (shift > maxRequiredShift) {
                                maxRequiredShift = shift;
                            }
                        }
                    }
                    if (maxRequiredShift === 0) {
                        const prevSpouseNode = nodesMap.get(node.spouses[idx-1]);
                        maxRequiredShift = prevSpouseNode.layout.x + prevSpouseNode.layout.width + MIN_GAP_X;
                    }
                    spouseNode.layout.x = maxRequiredShift;
                }

                mergeContours(spousesContour, spouseNode.layout.contours, spouseNode.layout.x, 0);
                lastSpX = spouseNode.layout.x;
            });

            const totalSpousesWidth = (lastSpX + NODE_WIDTH);
            const husbandCenterOffset = -(totalSpousesWidth / 2) + (NODE_WIDTH / 2);

            node.spouses.forEach(spouseId => {
                const spouseNode = nodesMap.get(spouseId);
                spouseNode.layout.x += husbandCenterOffset;
                mergeContours(node.layout.contours, spouseNode.layout.contours, spouseNode.layout.x, 0);
            });
        }
    }

    if (node.children.length > 0) {
        const firstChild = nodesMap.get(node.children[0]);
        const lastChild = nodesMap.get(node.children[node.children.length - 1]);

        const firstChildCenter = firstChild.layout.x + (firstChild.layout.width / 2);
        const lastChildCenter = lastChild.layout.x + (lastChild.layout.width / 2);
        const childrenCenter = (firstChildCenter + lastChildCenter) / 2;

        const parentShift = (node.layout.width / 2) - childrenCenter;

        node.children.forEach(childId => {
            const childNode = nodesMap.get(childId);
            childNode.layout.x += parentShift;
        });

        for(let d=1; d < node.layout.contours.min.length; d++) {
            if(node.layout.contours.min[d] !== undefined) {
                node.layout.contours.min[d] += parentShift;
                node.layout.contours.max[d] += parentShift;
            }
        }
    }

    let globalMin = 0;
    let globalMax = 0;
    for (let i = 0; i < node.layout.contours.min.length; i++) {
        if (node.layout.contours.min[i] !== undefined) {
            globalMin = Math.min(globalMin, node.layout.contours.min[i]);
            globalMax = Math.max(globalMax, node.layout.contours.max[i]);
        }
    }
    for (let i = 0; i < node.layout.contours.min.length; i++) {
        if (node.layout.contours.min[i] !== undefined) {
            node.layout.contours.min[i] = globalMin;
            node.layout.contours.max[i] = globalMax;
        }
    }
}
