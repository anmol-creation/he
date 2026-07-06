/**
 * Contour calculations (Auto-Slip Logic) for X-axis spacing to prevent overlap.
 */

import { NODE_WIDTH, MIN_GAP_X } from './constants.js';

export function calculateIntrinsicWidths(nodesMap) {
    nodesMap.forEach(node => {
        node.layout.width = NODE_WIDTH; // All nodes are standard width now
    });
}

// Merges child contours into parent contours with an offset
export function mergeContours(parentContours, childContours, shiftX) {
    for (let i = 0; i < childContours.min.length; i++) {
        const childMin = childContours.min[i] + shiftX;
        const childMax = childContours.max[i] + shiftX;
        // The child's depth 'i' corresponds to parent's depth 'i+1'
        const depthIndex = i + 1;

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

    // Post-order traversal: calculate spouses and children first
    node.spouses.forEach(spouseId => {
        calculateSubtreeLayout(nodesMap, spouseId);
    });
    node.children.forEach(childId => {
        calculateSubtreeLayout(nodesMap, childId);
    });

    // Initialize node's own contour (depth 0 relative to itself)
    node.layout.contours = {
        min: [0], // Local X is 0
        max: [node.layout.width]
    };

    // If it's a single spouse, its width conceptually extends the husband's width
    if (node.spouses.length === 1) {
        node.layout.contours.max[0] = NODE_WIDTH + 50 + NODE_WIDTH; // husband + gap + wife
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

    // Auto-slip logic using contours to prevent deep branch overlaps
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

        // Merge this child's shifted contour into the parent's contour
        mergeContours(node.layout.contours, childNode.layout.contours, childNode.layout.x);
    });

    // --- New Wives Contour Merging Logic ---
    // Wives also have contours (especially if they have children directly attached to them).
    // We must merge their contours into the husband's global contour array so they take up space.
    if (node.spouses.length > 0) {
        let currentSpouseX = 0;

        if (node.spouses.length === 1) {
            // Single spouse is offset by a fixed amount initially (since she's adjacent)
            // But we must also ensure her children don't overlap the husband's direct children
            currentSpouseX = NODE_WIDTH + MIN_GAP_X;
            const spouseNode = nodesMap.get(node.spouses[0]);
            spouseNode.layout.x = currentSpouseX; // Set local relative X
            mergeContours(node.layout.contours, spouseNode.layout.contours, currentSpouseX);
        } else {
            // Multiple spouses use true auto-slip against each other
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

                mergeContours(spousesContour, spouseNode.layout.contours, spouseNode.layout.x);
                lastSpX = spouseNode.layout.x;
            });

            // Center the husband over the block of spouses
            const totalSpousesWidth = (lastSpX + NODE_WIDTH); // roughly
            const husbandCenterOffset = -(totalSpousesWidth / 2) + (NODE_WIDTH / 2);

            // Shift all spouses to center them under the husband's relative 0, and merge into husband
            node.spouses.forEach(spouseId => {
                const spouseNode = nodesMap.get(spouseId);
                spouseNode.layout.x += husbandCenterOffset;
                mergeContours(node.layout.contours, spouseNode.layout.contours, spouseNode.layout.x);
            });
        }
    }


    // Center parent above children
    if (node.children.length > 0) {
        const firstChild = nodesMap.get(node.children[0]);
        const lastChild = nodesMap.get(node.children[node.children.length - 1]);

        const firstChildCenter = firstChild.layout.x + (firstChild.layout.width / 2);
        const lastChildCenter = lastChild.layout.x + (lastChild.layout.width / 2);
        const childrenCenter = (firstChildCenter + lastChildCenter) / 2;

        // Shift all children to center them under the parent (parent remains at relative x=0)
        const parentShift = (node.layout.width / 2) - childrenCenter;

        node.children.forEach(childId => {
            const childNode = nodesMap.get(childId);
            childNode.layout.x += parentShift;
        });

        // We must also shift the merged child contours in the parent's contour array
        for(let d=1; d < node.layout.contours.min.length; d++) {
            if(node.layout.contours.min[d] !== undefined) {
                node.layout.contours.min[d] += parentShift;
                node.layout.contours.max[d] += parentShift;
            }
        }
    }
}
