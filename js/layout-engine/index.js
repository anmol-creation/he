import { buildTree } from './tree-builder.js';
import { calculateDepths } from './position-calculator.js';
import { runHierarchicalLayout } from './hierarchical-layout.js';
import { assignLineageColors } from './color-assigner.js';
import { NODE_HEIGHT, MIN_GAP_Y } from './constants.js';

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

        // Assign static Y coordinates based on depth
        this.nodesMap.forEach(node => {
             node.y = 1000 + (node.depth * (NODE_HEIGHT + MIN_GAP_Y));
        });

        // Run Hierarchical Layout Engine to assign X coordinates (Sugiyama)
        runHierarchicalLayout(this.nodesMap, rootNodes);

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
