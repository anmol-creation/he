/**
 * Layout calculations for depth (Y-axis progression) and absolute positions.
 */

import { NODE_WIDTH, NODE_HEIGHT, MIN_GAP_Y } from './constants.js';

export function calculateDepths(nodesMap, nodeId, currentDepth = 0) {
    const node = nodesMap.get(nodeId);
    if (!node) return;

    node.depth = currentDepth;

    // Handle spouses:
    if (node.spouses.length === 1) {
        const spouseNode = nodesMap.get(node.spouses[0]);
        if (spouseNode) {
            spouseNode.depth = currentDepth; // Same depth level visually initially
            spouseNode.children.forEach(childId => {
                calculateDepths(nodesMap, childId, currentDepth + 1);
            });
        }
    } else if (node.spouses.length > 1) {
        node.spouses.forEach(spouseId => {
            const spouseNode = nodesMap.get(spouseId);
            if (spouseNode) {
                spouseNode.depth = currentDepth + 0.5; // Custom half-depth flag
                spouseNode.children.forEach(childId => {
                    calculateDepths(nodesMap, childId, currentDepth + 1);
                });
            }
        });
    }

    // True Children are one full depth lower (if they belong to the father directly)
    node.children.forEach(childId => {
        // If a child has a mother, it will also be processed through the mother's sub-tree
        // if she is handled as a single wife. However, for multiple wives, their
        // children need to sit below their respective mother's Y level.
        // We'll manage actual vertical spacing via calculateAbsolutePositions, but keep depth base logic.
        calculateDepths(nodesMap, childId, currentDepth + 1);
    });
}

export function calculateAbsolutePositions(nodesMap, nodeId, absoluteX = 5000, startY = 1000) {
    const node = nodesMap.get(nodeId);
    if (!node) return;

    node.x = absoluteX;
    // Calculate Y strictly based on depth: startY + (depth * spacing)
    node.y = startY + (node.depth * (NODE_HEIGHT + MIN_GAP_Y));

    // Spouses absolute position
    if (node.spouses.length === 1) {
        const spouseNode = nodesMap.get(node.spouses[0]);
        if (spouseNode) {
            // Single spouse: Same Y as husband, shifted by the layout engine's contour calculation
            spouseNode.x = node.x + spouseNode.layout.x;
            spouseNode.y = node.y;
            // Position spouse's children (if directly attached to her)
            spouseNode.children.forEach(childId => {
                const childNode = nodesMap.get(childId);
                // Child positions are relative to their parent
                calculateAbsolutePositions(nodesMap, childId, spouseNode.x + childNode.layout.x, startY);
            });
        }
    } else if (node.spouses.length > 1) {
        // Multiple spouses: Below husband (depth + 0.5 roughly translated to Y offset)
        node.spouses.forEach((spouseId) => {
            const spouseNode = nodesMap.get(spouseId);
            if (spouseNode) {
                // Use the relative x calculated by the true auto-slip contour in contour-calculator.js
                spouseNode.x = node.x + spouseNode.layout.x;
                spouseNode.y = node.y + 150; // Y + 150px

                spouseNode.children.forEach(childId => {
                    const childNode = nodesMap.get(childId);
                    calculateAbsolutePositions(nodesMap, childId, spouseNode.x + childNode.layout.x, startY);
                });
            }
        });
    }

    // True Children absolute position (Children of Husband directly)
    node.children.forEach(childId => {
        const childNode = nodesMap.get(childId);
        // Children of multiple wives are already positioned recursively within the 'if (node.spouses.length > 1)' block
        // Wait, the tree-builder pushes ALL children to the father if no mother is found, OR to the mother if found.
        // If they are attached to the father directly (manas putra or no mother specified):
        calculateAbsolutePositions(nodesMap, childId, node.x + childNode.layout.x, startY);
    });
}
