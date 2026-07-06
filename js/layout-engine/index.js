import { buildTree } from './tree-builder.js';
import { calculateDepths, calculateAbsolutePositions } from './position-calculator.js';
import { calculateIntrinsicWidths, calculateSubtreeLayout } from './contour-calculator.js';
import { assignLineageColors } from './color-assigner.js';
import { MIN_GAP_X } from './constants.js';

class LayoutEngine {
    constructor(data) {
        this.rawData = data;
        this.nodesMap = new Map();
        this.rootId = 'brahman'; // Default root
        this.transitionWires = [];
    }

    process() {
        buildTree(this.rawData, this.nodesMap, this.transitionWires);
        calculateIntrinsicWidths(this.nodesMap);

        // Find root nodes (nodes without parents)
        const rootNodes = [];
        this.nodesMap.forEach(node => {
            if (!node.parent && !node.spouseOf) {
                rootNodes.push(node.id);
            }
        });

        // Calculate depths starting from roots
        rootNodes.forEach(rootId => calculateDepths(this.nodesMap, rootId, 0));

        let currentRootX = 5000; // Starting point for the first root
        let globalContour = { min: [], max: [] };

        rootNodes.forEach((rootId, index) => {
            calculateSubtreeLayout(this.nodesMap, rootId);
            const rootNode = this.nodesMap.get(rootId);

            if (index > 0) {
                // Auto-slip roots against each other
                let maxRequiredShift = 0;
                for (let i = 0; i < rootNode.layout.contours.min.length; i++) {
                    if (globalContour.max[i] !== undefined) {
                        const shift = (globalContour.max[i] + MIN_GAP_X) - rootNode.layout.contours.min[i];
                        if (shift > maxRequiredShift) maxRequiredShift = shift;
                    }
                }
                currentRootX += maxRequiredShift;
            }

            // Merge root contour into global contour
            for (let i = 0; i < rootNode.layout.contours.min.length; i++) {
                const rMin = rootNode.layout.contours.min[i] + currentRootX;
                const rMax = rootNode.layout.contours.max[i] + currentRootX;
                if (globalContour.min[i] === undefined) {
                    globalContour.min[i] = rMin;
                    globalContour.max[i] = rMax;
                } else {
                    globalContour.min[i] = Math.min(globalContour.min[i], rMin);
                    globalContour.max[i] = Math.max(globalContour.max[i], rMax);
                }
            }

            // Calculate final absolute positions.
            // We give startY = 0 for the absolute root to make rendering cleaner
            calculateAbsolutePositions(this.nodesMap, rootId, currentRootX, 0);
        });

        assignLineageColors(this.nodesMap);

        // Extract the updated data
        const finalNodes = Array.from(this.nodesMap.values()).map(node => {
            const { layout, children, spouses, depth, contours, ...originalNode } = node;
            return originalNode;
        });

        return {
            nodes: finalNodes,
            transitionWires: this.transitionWires
        };
    }
}

// Export for usage
if (typeof window !== 'undefined') window.LayoutEngine = LayoutEngine;
