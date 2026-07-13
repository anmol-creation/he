import { buildTree } from './tree-builder.js';
import { calculateDepths, calculateAbsolutePositions } from './position-calculator.js';
import { calculateIntrinsicWidths, calculateSubtreeLayout } from './contour-calculator.js';
import { runHierarchicalLayout } from './hierarchical-layout.js';
import { assignLineageColors } from './color-assigner.js';
import { NODE_HEIGHT, MIN_GAP_Y, MIN_GAP_X } from './constants.js';

class LayoutEngine {
    constructor(data) {
        this.rawData = data;
        this.nodesMap = new Map();
        this.rootId = 'brahman'; // Default root
        this.transitionWires = [];
    }

    process() {
        buildTree(this.rawData, this.nodesMap, this.transitionWires);

        // Find root nodes (nodes without parents)
        const rootNodes = [];
        this.nodesMap.forEach(node => {
            if (!node.parent && !node.spouseOf) {
                rootNodes.push(node.id);
            }
        });

        // Calculate depths (Y-axis Hierarchy remains strictly tied to lineage depth)
        rootNodes.forEach(rootId => calculateDepths(this.nodesMap, rootId, 0));

        const mode = window.MapState ? window.MapState.layoutMode : 'autoslip';

        if (mode === 'hierarchical') {
            // Assign static Y coordinates based on depth
            this.nodesMap.forEach(node => {
                 let timeZonePadding = 0;
                 if (node.depth >= 1) timeZonePadding += 200;
                 if (node.depth >= 2) timeZonePadding += 200;
                 if (node.depth >= 3) timeZonePadding += 250;

                 node.y = 300 + (node.depth * (NODE_HEIGHT + MIN_GAP_Y)) + timeZonePadding; // Start closer to 0 for Sanatan
            });

            // Run Hierarchical Layout Engine to assign X coordinates (Sugiyama)
            runHierarchicalLayout(this.nodesMap, rootNodes);
        } else {
            // Run Original Auto-Slip Layout
            calculateIntrinsicWidths(this.nodesMap);
            let currentRootX = 5000;
            let globalContour = { min: [], max: [] };

            rootNodes.forEach((rootId, index) => {
                calculateSubtreeLayout(this.nodesMap, rootId);
                const rootNode = this.nodesMap.get(rootId);

                if (index > 0) {
                    let maxRequiredShift = 0;
                    for (let i = 0; i < rootNode.layout.contours.min.length; i++) {
                        if (globalContour.max[i] !== undefined) {
                            const shift = (globalContour.max[i] + MIN_GAP_X) - rootNode.layout.contours.min[i];
                            if (shift > maxRequiredShift) maxRequiredShift = shift;
                        }
                    }
                    currentRootX += maxRequiredShift;
                }

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

                calculateAbsolutePositions(this.nodesMap, rootId, currentRootX, 300); // Start closer to 0 for Sanatan
            });
        }

        assignLineageColors(this.nodesMap);

        // Extract the updated data
        const finalNodes = Array.from(this.nodesMap.values()).map(node => {
            const { layout, children, spouses, depth, contours, ...originalNode } = node;
            return originalNode;
        });

        return {
            nodes: finalNodes,
            transitionWires: this.transitionWires,
            pathFinder: new window.PathFinder(finalNodes) // we will make PathFinder global
        };
    }
}

// Export for usage
if (typeof window !== 'undefined') window.LayoutEngine = LayoutEngine;
