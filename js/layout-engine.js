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
    constructor(data, expandedGroups = new Set()) {
        this.rawData = data;
        this.expandedGroups = expandedGroups;
        this.nodesMap = new Map();
        this.rootId = 'brahman'; // Default root
    }

    buildTree() {
        // 1. Find explicit groups and handle their members if collapsed
        const explicitGroupIds = new Set();
        this.rawData.forEach(node => {
            if (node.type === 'group') {
                explicitGroupIds.add(node.id);
            }
        });

        const activeNodes = [];
        // console.log("expandedGroups in buildTree:", Array.from(this.expandedGroups));
        const membershipMap = new Map(); // childId -> groupId

        // Map members to their unexpanded groups
        // console.log("expandedGroups in buildTree:", Array.from(this.expandedGroups));
        this.rawData.forEach(node => {
            if (node.type === 'group' && !this.expandedGroups.has(node.id)) {
                if (node.members && Array.isArray(node.members)) {
                    node.members.forEach(m => membershipMap.set(m, node.id));
                }
            }
        });

        // Filter out nodes that are hidden inside collapsed groups
        this.rawData.forEach(node => {
            if (!membershipMap.has(node.id)) {
                activeNodes.push(node);
            } else {
                // console.log("Hiding node:", node.id);
            }
        });
        // console.log("Active nodes count:", activeNodes.length);

        // 2. Auto-grouping for Wives
        const husbandWivesMap = new Map(); // husbandId -> array of wife nodes
        activeNodes.forEach(node => {
            if (node.spouseOf) {
                if (!husbandWivesMap.has(node.spouseOf)) {
                    husbandWivesMap.set(node.spouseOf, []);
                }
                husbandWivesMap.get(node.spouseOf).push(node);
            }
        });

        const autoGroupIds = new Set();
        husbandWivesMap.forEach((wives, husbandId) => {
            if (wives.length > 1) {
                const groupId = `${husbandId}_wives_group`;
                if (!this.expandedGroups.has(groupId)) {
                    // Create auto group node
                    const husband = activeNodes.find(n => n.id === husbandId);
                    if (husband) {
                        const groupNode = {
                            id: groupId,
                            name: `पत्नियाँ (${wives.length})`, // "Wives (N)"
                            subtitle: `${husband.name} की पत्नियाँ`,
                            type: 'group',
                            isAutoGroup: true,
                            members: wives.map(w => w.id),
                            spouseOf: husbandId,
                            color: '#ff99cc' // default wife color
                        };
                        activeNodes.push(groupNode);
                        autoGroupIds.add(groupId);

                        // Map wives to this group
                        wives.forEach(w => membershipMap.set(w.id, groupId));
                    }
                }
            }
        });

        // Refilter active nodes to remove wives now hidden in auto-groups
        const finalActiveNodes = activeNodes.filter(node => !membershipMap.has(node.id));

        // 3. Initialize nodes map
        finalActiveNodes.forEach(node => {
            this.nodesMap.set(node.id, {
                ...node,
                children: [],
                spouses: [],
                depth: 0,
                layout: {
                    x: 0,
                    width: NODE_WIDTH,
                    contours: { min: [], max: [] },
                    isSpouse: !!node.spouseOf
                }
            });
        });

        // 4. Build relationships
        this.nodesMap.forEach(node => {
            // Re-map parents/mothers to groups if the parent/mother is hidden inside a collapsed group
            let effectiveParent = node.parent;
            if (effectiveParent && membershipMap.has(effectiveParent)) {
                effectiveParent = membershipMap.get(effectiveParent);
            }

            let effectiveMother = node.mother;
            if (effectiveMother && membershipMap.has(effectiveMother)) {
                effectiveMother = membershipMap.get(effectiveMother);
            }

            // If the node itself is a group, and it's an auto-wife-group, treat it as a spouse
            let effectiveSpouseOf = node.spouseOf;
            if (node.isAutoGroup && node.spouseOf) {
                 effectiveSpouseOf = node.spouseOf;
            }

            if (effectiveSpouseOf && this.nodesMap.has(effectiveSpouseOf)) {
                const partner = this.nodesMap.get(effectiveSpouseOf);
                if (partner) {
                    partner.children.push(node.id);
                }
            } else if (effectiveParent && this.nodesMap.has(effectiveParent) && !effectiveSpouseOf) {
                let pushedToMother = false;
                if (effectiveMother && this.nodesMap.has(effectiveMother)) {
                    const motherNode = this.nodesMap.get(effectiveMother);
                    if (motherNode) {
                        motherNode.children.push(node.id);
                        pushedToMother = true;
                    }
                }

                if (!pushedToMother) {
                    const parentNode = this.nodesMap.get(effectiveParent);
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
        // console.log("NodesMap size:", this.nodesMap.size);
        this.nodesMap.forEach((node, id) => {
            let isChild = false;
            let isSpouse = false;
            this.nodesMap.forEach((otherNode) => {
                if (otherNode.children && otherNode.children.includes(id)) isChild = true;
                if (otherNode.spouses && otherNode.spouses.includes(id)) isSpouse = true;
            });
            if (!isChild && !isSpouse) {
                rootNodes.push(id);
            }
        });


        if (rootNodes.length === 0) {
            console.log("No root nodes found! Printing sample nodes to see what's wrong:");
            let i = 0;
            this.nodesMap.forEach((node, id) => {
                if (i++ < 5) console.log(id, "-> parent:", node.parent, "children:", node.children, "spouses:", node.spouses);
            });
            console.log("brahman ->", this.nodesMap.get("brahman"));
        }

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


        // Check for disconnected nodes (no layout calculated)
        this.nodesMap.forEach((node, id) => {
            if (isNaN(node.layout.x)) console.log("NaN layout X for:", id);
            if (isNaN(node.depth)) console.log("NaN depth for:", id);
        });

        // Extract the updated data
        return Array.from(this.nodesMap.values()).map(node => {
            const { layout, children, spouses, depth, contours, ...originalNode } = node;
            if (node.type === 'group' || node.isAutoGroup) {
                originalNode.isExpanded = this.expandedGroups.has(node.id);
            }
            return originalNode;
        });
    }
}

// Export for usage
if (typeof window !== 'undefined') window.LayoutEngine = LayoutEngine;
