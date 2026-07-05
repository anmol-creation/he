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
        this.transitionWires = []; // Track pairs for dashed lines

        // Pre-process: Auto-duplicate female nodes with BOTH parent and spouseOf
        const processedData = [];
        this.rawData.forEach(node => {
            if (node.parent && node.spouseOf) {
                // Rule 4: Auto Duplication

                // Node A: Daughter Node (in father's tree)
                const daughterNode = {
                    ...node,
                    id: `${node.id}_daughter`,
                    spouseOf: null, // Remove husband link
                    subtitle: `${node.subtitle || ''} (Daughter)`.trim()
                };

                // Node B: Wife Node (next to husband)
                const wifeNode = {
                    ...node,
                    parent: null, // Remove father link
                    subtitle: `${node.subtitle || ''} (Wife)`.trim()
                };

                processedData.push(daughterNode, wifeNode);

                // Track for drawing dashed line from Daughter -> Wife
                this.transitionWires.push({
                    from: daughterNode.id,
                    to: wifeNode.id
                });
            } else {
                processedData.push(node);
            }
        });

        // 1. Initialize nodes map using processed data
        processedData.forEach(node => {
            this.nodesMap.set(node.id, {
                ...node,
                children: [],
                spouses: [],
                depth: 0,
                layout: {
                    x: 0,
                    width: 200, // NODE_WIDTH
                    contours: { min: [], max: [] },
                    isSpouse: !!node.spouseOf
                }
            });
        });

        // 2. Build relationships
        this.nodesMap.forEach(node => {
            if (node.spouseOf && this.nodesMap.has(node.spouseOf)) {
                const partner = this.nodesMap.get(node.spouseOf);
                if (partner) {
                    partner.children.push(node.id);
                }
            } else if (node.parent && this.nodesMap.has(node.parent) && !node.spouseOf) {
                let pushedToMother = false;
                if (node.mother && this.nodesMap.has(node.mother)) {
                    const motherNode = this.nodesMap.get(node.mother);
                    if (motherNode) {
                        motherNode.children.push(node.id);
                        pushedToMother = true;
                    }
                }
                if (!pushedToMother) {
                    const parentNode = this.nodesMap.get(node.parent);
                    if (parentNode) {
                        parentNode.children.push(node.id);
                    }
                }
            }
        });

        return this.nodesMap;
    }

    calculateDepths(nodeId, currentDepth = 0) {
        const node = this.nodesMap.get(nodeId);
        if (!node) return;

        node.depth = currentDepth;

        // Children (which includes spouses now) are one depth lower
        node.children.forEach(childId => {
            this.calculateDepths(childId, currentDepth + 1);
        });
    }


    assignLineageColors() {
        // Base lineage color mappings
        const rootColors = {
            'brahma': '#F7931E', // Base Saffron for Brahma
            'vishnu': '#3399FF', // Blue for Vishnu
            'mahesh': '#9933FF', // Purple for Mahesh
            'suryavansh_root': '#FF9900',
            'ikshvaku': '#FF9900',
            'vaivasvata_manu': '#FF9900',
            'chandra': '#4169E1',
            'pururava': '#4169E1', // Example specific roots if they exist
            'chandravansh_root': '#4169E1'
        };

        const defaultColor = '#FF6B35';

        // 1. Assign colors to root nodes explicitly if defined
        this.nodesMap.forEach((node, id) => {
            if (rootColors[id]) {
                node.inheritedColor = rootColors[id];
            } else if (!node.parent && !node.spouseOf) {
                node.inheritedColor = defaultColor;
            }
        });

        // 2. Cascade colors down the tree (BFS or DFS)
        // We use a DFS approach
        const traverseAndColor = (nodeId, colorToPass) => {
            const node = this.nodesMap.get(nodeId);
            if (!node) return;

            // If the node has a specifically mapped root color, use it, else inherit
            const nodeColor = rootColors[nodeId] || colorToPass || defaultColor;
            node.inheritedColor = nodeColor;

            node.children.forEach(childId => {
                const child = this.nodesMap.get(childId);
                if (child) {
                    if (child.spouseOf === nodeId) {
                        // It's a wife node logically structured as a child, wives don't inherit lineage color for their own children usually, but they are pink anyway.
                        child.inheritedColor = nodeColor;
                    } else {
                        // True child, inherits father's color
                        traverseAndColor(childId, nodeColor);
                    }
                }
            });
        };

        // Start coloring from absolute roots
        this.nodesMap.forEach(node => {
            if (!node.parent && !node.spouseOf) {
                traverseAndColor(node.id, rootColors[node.id] || defaultColor);
            }
        });
    }

    calculateIntrinsicWidths() {
        this.nodesMap.forEach(node => {
            node.layout.width = NODE_WIDTH; // All nodes are standard width now
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

        this.assignLineageColors();

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
