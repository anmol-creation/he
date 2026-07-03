/**
 * Auto-Slip Tree Layout Engine
 *
 * Calculates dynamic X and Y coordinates for a hierarchical tree structure to prevent overlaps
 * while maintaining strict spacing and centering rules.
 */

const NODE_WIDTH = 200;
const NODE_HEIGHT = 100; // assumed physical height of a node for y-spacing calculations
const MIN_GAP_X = 100;
const STEP_DISTANCE_X = NODE_WIDTH + MIN_GAP_X;
const MIN_GAP_Y = 200; // Vertical generational spacing (200px as requested)

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
                depth: 0,
                layout: {
                    x: 0, // Local X relative to parent initially, absolute later
                    width: NODE_WIDTH,
                    // We will maintain left and right contours (arrays of relative x offsets per depth level)
                    // For simplicity, bounding box per depth level or just a broad bounding box might work.
                    // To be safe and robust, let's track the min/max X at *each* relative depth.
                    contours: { min: [], max: [] },
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

    calculateDepths(nodeId, currentDepth = 0) {
        const node = this.nodesMap.get(nodeId);
        if (!node) return;

        node.depth = currentDepth;

        // Spouses share the same depth
        node.spouses.forEach(spouseId => {
            const spouseNode = this.nodesMap.get(spouseId);
            if(spouseNode) spouseNode.depth = currentDepth;
        });

        node.children.forEach(childId => {
            this.calculateDepths(childId, currentDepth + 1);
        });
    }

    calculateIntrinsicWidths() {
        this.nodesMap.forEach(node => {
            if (!node.layout.isSpouse) {
                // Main node width (200px) + (spouse width (200px) + gap (100px)) per spouse
                const spouseCount = node.spouses.length;
                const totalWidth = NODE_WIDTH + (spouseCount * STEP_DISTANCE_X);
                node.layout.width = totalWidth;

                // Position spouses relative to main node
                node.spouses.forEach((spouseId, index) => {
                    const spouseNode = this.nodesMap.get(spouseId);
                    if (spouseNode) {
                        // Spouses are placed to the right of the main node
                        spouseNode.layout.x = (index + 1) * STEP_DISTANCE_X;
                    }
                });
            }
        });
    }

    // Merges child contours into parent contours with an offset
    mergeContours(parentContours, childContours, shiftX) {
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

    calculateSubtreeLayout(nodeId) {
        const node = this.nodesMap.get(nodeId);
        if (!node) return;

        // Post-order traversal: calculate children first
        node.children.forEach(childId => {
            this.calculateSubtreeLayout(childId);
        });

        // Initialize node's own contour (depth 0 relative to itself)
        node.layout.contours = {
            min: [0], // Local X is 0
            max: [node.layout.width]
        };

        if (node.children.length === 0) {
            return;
        }

        // Auto-slip logic using contours to prevent deep branch overlaps
        node.children.forEach((childId, index) => {
            const childNode = this.nodesMap.get(childId);

            if (index === 0) {
                childNode.layout.x = 0;
            } else {
                // Find required shift by comparing current accumulated parent contours vs this child's contours
                // We want: parent_max[d] + MIN_GAP_X <= child_min[d-1] + shift
                // so: shift = max(parent_max[d] + MIN_GAP_X - child_min[d-1]) across all overlapping depths
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

                // If there's no depth overlap (rare, maybe empty levels?), we just fallback to placing it next to the last child's root level
                if (maxRequiredShift === 0) {
                    const prevChildNode = this.nodesMap.get(node.children[index-1]);
                    maxRequiredShift = prevChildNode.layout.x + prevChildNode.layout.width + MIN_GAP_X;
                }

                childNode.layout.x = maxRequiredShift;
            }

            // Merge this child's shifted contour into the parent's contour
            this.mergeContours(node.layout.contours, childNode.layout.contours, childNode.layout.x);
        });

        // Center parent above children
        const firstChild = this.nodesMap.get(node.children[0]);
        const lastChild = this.nodesMap.get(node.children[node.children.length - 1]);

        const firstChildCenter = firstChild.layout.x + (firstChild.layout.width / 2);
        const lastChildCenter = lastChild.layout.x + (lastChild.layout.width / 2);
        const childrenCenter = (firstChildCenter + lastChildCenter) / 2;

        // Shift all children to center them under the parent (parent remains at relative x=0)
        const parentShift = (node.layout.width / 2) - childrenCenter;

        node.children.forEach(childId => {
            const childNode = this.nodesMap.get(childId);
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

    calculateAbsolutePositions(nodeId, absoluteX = 5000, startY = 1000) {
        const node = this.nodesMap.get(nodeId);
        if (!node) return;

        node.x = absoluteX;
        // Calculate Y strictly based on depth: startY + (depth * spacing)
        node.y = startY + (node.depth * (NODE_HEIGHT + MIN_GAP_Y));

        // Spouses absolute position
        node.spouses.forEach(spouseId => {
            const spouseNode = this.nodesMap.get(spouseId);
            if (spouseNode) {
                spouseNode.x = node.x + spouseNode.layout.x;
                spouseNode.y = node.y; // Spouses share same Y
            }
        });

        // Children absolute position
        node.children.forEach(childId => {
            const childNode = this.nodesMap.get(childId);
            this.calculateAbsolutePositions(childId, node.x + childNode.layout.x, startY);
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

        // Calculate depths starting from roots
        rootNodes.forEach(rootId => this.calculateDepths(rootId, 0));

        let currentRootX = 5000; // Starting point for the first root
        let globalContour = { min: [], max: [] };

        rootNodes.forEach((rootId, index) => {
            this.calculateSubtreeLayout(rootId);
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
            this.calculateAbsolutePositions(rootId, currentRootX, 0);
        });

        // Extract the updated data
        return Array.from(this.nodesMap.values()).map(node => {
            const { layout, children, spouses, depth, contours, ...originalNode } = node;
            return originalNode;
        });
    }
}

// Export for usage
if (typeof window !== 'undefined') window.LayoutEngine = LayoutEngine;
