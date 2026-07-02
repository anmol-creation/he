/**
 * Auto-Slip Tree Layout Engine
 *
 * Calculates dynamic X-coordinates for a hierarchical tree structure to prevent overlaps
 * while maintaining strict spacing and centering rules.
 */

const NODE_WIDTH = 200;
const MIN_GAP = 100;
const STEP_DISTANCE = NODE_WIDTH + MIN_GAP;

class LayoutEngine {
    constructor(data) {
        this.rawData = data;
        this.nodesMap = new Map();
        this.rootId = 'brahman'; // Default root
    }

    buildTree() {
        // 1. Initialize nodes map
        this.rawData.forEach(node => {
            this.nodesMap.set(node.id, {
                ...node,
                children: [],
                spouses: [],
                layout: {
                    x: 0, // Local X relative to parent initially, absolute later
                    width: NODE_WIDTH,
                    subtreeWidth: NODE_WIDTH,
                    subtreeLeft: 0,
                    subtreeRight: NODE_WIDTH,
                    isSpouse: !!node.spouseOf
                }
            });
        });

        // 2. Build relationships
        this.nodesMap.forEach(node => {
            if (node.spouseOf && this.nodesMap.has(node.spouseOf)) {
                const partner = this.nodesMap.get(node.spouseOf);
                if (partner) partner.spouses.push(node.id);
            } else if (node.parent && this.nodesMap.has(node.parent) && !node.spouseOf) {
                const parentNode = this.nodesMap.get(node.parent);
                if (parentNode) parentNode.children.push(node.id);
            }
        });

        return this.nodesMap;
    }

    calculateIntrinsicWidths() {
        this.nodesMap.forEach(node => {
            if (!node.layout.isSpouse) {
                // Main node width (200px) + (spouse width (200px) + gap (100px)) per spouse
                const spouseCount = node.spouses.length;
                const totalWidth = NODE_WIDTH + (spouseCount * STEP_DISTANCE);
                node.layout.width = totalWidth;

                // Position spouses relative to main node
                node.spouses.forEach((spouseId, index) => {
                    const spouseNode = this.nodesMap.get(spouseId);
                    if (spouseNode) {
                        // Spouses are placed to the right of the main node
                        spouseNode.layout.x = (index + 1) * STEP_DISTANCE;
                    }
                });
            }
        });
    }

    calculateSubtreeWidths(nodeId) {
        const node = this.nodesMap.get(nodeId);
        if (!node) return;

        // Leaf node or node without children
        if (node.children.length === 0) {
            node.layout.subtreeWidth = node.layout.width;
            node.layout.subtreeLeft = 0;
            node.layout.subtreeRight = node.layout.width;
            return;
        }

        // Post-order traversal: calculate children first
        node.children.forEach(childId => {
            this.calculateSubtreeWidths(childId);
        });

        // Auto-slip layout for children
        let minLeft = 0;
        let maxRight = 0;

        node.children.forEach((childId, index) => {
            const childNode = this.nodesMap.get(childId);

            if (index === 0) {
                // First child starts at 0
                childNode.layout.x = 0;
                minLeft = childNode.layout.subtreeLeft;
                maxRight = childNode.layout.subtreeRight;
            } else {
                // Auto-slip: Next child must slip to the right of the entire previous subtree's max right + MIN_GAP
                // Calculate required shift
                const requiredStart = maxRight + MIN_GAP;
                const shift = requiredStart - childNode.layout.subtreeLeft;

                childNode.layout.x = shift;
                maxRight = shift + childNode.layout.subtreeRight;
            }
        });

        // Center parent above children
        const firstChild = this.nodesMap.get(node.children[0]);
        const lastChild = this.nodesMap.get(node.children[node.children.length - 1]);

        // Center relative to the full bounds of the children
        const firstChildCenter = firstChild.layout.x + (firstChild.layout.width / 2);
        const lastChildCenter = lastChild.layout.x + (lastChild.layout.width / 2);
        const childrenCenter = (firstChildCenter + lastChildCenter) / 2;

        // Make the parent exactly at x = 0 (relative to itself).
        // We shift all children so they are centered under the parent (where parent is 0).
        const parentShift = (node.layout.width / 2) - childrenCenter;

        node.children.forEach(childId => {
            const childNode = this.nodesMap.get(childId);
            childNode.layout.x += parentShift;
        });

        // Recalculate minLeft and maxRight with the shift
        minLeft = minLeft + parentShift;
        maxRight = maxRight + parentShift;

        // Parent's bounding box might be wider than the children's span
        minLeft = Math.min(0, minLeft);
        maxRight = Math.max(node.layout.width, maxRight);

        node.layout.subtreeLeft = minLeft;
        node.layout.subtreeRight = maxRight;
        node.layout.subtreeWidth = maxRight - minLeft;
    }

    calculateAbsolutePositions(nodeId, absoluteX = 5000) {
        const node = this.nodesMap.get(nodeId);
        if (!node) return;

        // Set the absolute X
        // The root is given a starting absoluteX.
        // For other nodes, absoluteX is passed down from the parent calculation.
        node.x = absoluteX;

        // Spouses absolute position
        node.spouses.forEach(spouseId => {
            const spouseNode = this.nodesMap.get(spouseId);
            if (spouseNode) {
                // spouse layout.x is relative to the main node
                spouseNode.x = node.x + spouseNode.layout.x;
            }
        });

        // Children absolute position
        node.children.forEach(childId => {
            const childNode = this.nodesMap.get(childId);
            // child layout.x is relative to the parent
            this.calculateAbsolutePositions(childId, node.x + childNode.layout.x);
        });
    }

    // Main orchestrator method
    process() {
        this.buildTree();
        this.calculateIntrinsicWidths();

        // Find root nodes (nodes without parents)
        const rootNodes = [];
        this.nodesMap.forEach(node => {
            if (!node.parent && !node.spouseOf) {
                rootNodes.push(node.id);
            }
        });

        let currentRootX = 5000; // Starting point for the first root
        let lastMaxRight = null;

        rootNodes.forEach((rootId, index) => {
            this.calculateSubtreeWidths(rootId);

            const rootNode = this.nodesMap.get(rootId);

            // If it's not the first root, auto-slip it next to previous root
            if (index > 0 && lastMaxRight !== null) {
                const shift = (lastMaxRight + MIN_GAP) - rootNode.layout.subtreeLeft;
                currentRootX += shift;
            }

            this.calculateAbsolutePositions(rootId, currentRootX);
            lastMaxRight = currentRootX + rootNode.layout.subtreeRight;
        });

        // Extract the updated data
        return Array.from(this.nodesMap.values()).map(node => {
            // Return original properties with updated X
            const { layout, children, spouses, ...originalNode } = node;
            return originalNode;
        });
    }
}

// Export for usage
if (typeof window !== 'undefined') window.LayoutEngine = LayoutEngine;
