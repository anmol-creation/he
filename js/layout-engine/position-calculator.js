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
                let childDepth = currentDepth + 1;
                if (currentDepth === 1) childDepth = 2; // Force to Kalpa if parent in Mahakalp
                const childNode = nodesMap.get(childId);
                if (childNode && currentDepth === 2 && childNode.timeScale !== 'kalpa') childDepth = 3;
                calculateDepths(nodesMap, childId, childDepth);
            });
        }
    } else if (node.spouses.length > 1) {
        node.spouses.forEach(spouseId => {
            const spouseNode = nodesMap.get(spouseId);
            if (spouseNode) {
                spouseNode.depth = currentDepth + 0.5; // Custom half-depth flag
                spouseNode.children.forEach(childId => {
                    let childDepth = currentDepth + 1;
                    if (currentDepth === 1) childDepth = 2;
                    const childNode = nodesMap.get(childId);
                    if (childNode && currentDepth === 2 && childNode.timeScale !== 'kalpa') childDepth = 3;
                    calculateDepths(nodesMap, childId, childDepth);
                });
            }
        });
    }

    // True Children are one full depth lower (if they belong to the father directly)
    node.children.forEach(childId => {
        let childDepth = currentDepth + 1;
        if (currentDepth === 1) childDepth = 2; // Force to Kalpa if parent in Mahakalp

        // Similarly, ensure that Manvantara-specific lineages are pushed to depth 3 if they are directly connected to Kalpa entities
        const childNode = nodesMap.get(childId);
        if (childNode && currentDepth === 2 && childNode.timeScale !== 'kalpa') {
             // If a child is NOT explicitly tagged as 'kalpa' (like eternal Manas Putras),
             // but their parent is at depth 2 (Kalpa), they belong in a Manvantara (depth 3+)
             childDepth = 3;
        }

        calculateDepths(nodesMap, childId, childDepth);
    });
}

export function calculateAbsolutePositions(nodesMap, nodeId, absoluteX = 5000, startY = 1000) {
    const node = nodesMap.get(nodeId);
    if (!node) return;

    node.x = absoluteX;

    // Add extra vertical padding specifically between the Time Zones (Sanatan -> Mahakalp -> Kalpa)
    // depth 0 is Sanatan (Parabrahman)
    // depth 1 is Mahakalp (Trimurti)
    // depth 2 is Kalpa (Narada, Sanatkumar, etc. who span entire Kalpas)
    // depth 3+ is Manvantara
    let timeZonePadding = 0;
    if (node.depth >= 1) timeZonePadding += 200; // Gap between Sanatan and Mahakalp
    if (node.depth >= 2) timeZonePadding += 200; // Gap between Mahakalp and Kalpa
    if (node.depth >= 3) timeZonePadding += 250; // Gap between Kalpa and Manvantara

    // Calculate Y strictly based on depth: startY + (depth * spacing) + extra padding
        // AUTO-POSITIONING BASED ON KALIYUG RULER
    if (node.kali_year !== undefined) {
        const KALIYUG_ZERO_Y = 36800;

        let calculatedY = KALIYUG_ZERO_Y;
        let remainingYears = Math.abs(node.kali_year);

        // Positive kali_year (Kaliyug)
        if (node.kali_year >= 0) {
            calculatedY = KALIYUG_ZERO_Y + (node.kali_year * 3);
        } else {
            // Negative kali_year (Pre-Kaliyug)
            // Use the strict Yuga scale defined by generational density
            if (remainingYears <= 864000) {
                // Dvapara Yuga: 864,000 years fits in 10,500px => ~82.285 years/px
                calculatedY = KALIYUG_ZERO_Y - (remainingYears / (864000 / 10500));
            } else if (remainingYears <= 2160000) { // 864k + 1296k
                // Treta Yuga: 1,296,000 years fits in 18,600px => ~69.677 years/px
                const dwaparPx = 10500;
                const tretaYears = remainingYears - 864000;
                calculatedY = KALIYUG_ZERO_Y - dwaparPx - (tretaYears / (1296000 / 18600));
            } else {
                // Satya Yuga: 1,728,000 years fits in 1200px => 1440 years/px
                const dwaparPx = 10500;
                const tretaPx = 18600;
                const satyaYears = remainingYears - 2160000;
                calculatedY = KALIYUG_ZERO_Y - dwaparPx - tretaPx - (satyaYears / (1728000 / 1200));
            }
        }

        node.y = calculatedY;

        // Sync downstream depth-based nodes by updating startY for its children
        // We calculate an artificial "depth Y" to reset the baseline for children without kali_year
        startY = node.y - (node.depth * (NODE_HEIGHT + MIN_GAP_Y)) - timeZonePadding;
    } else {
        node.y = startY + (node.depth * (NODE_HEIGHT + MIN_GAP_Y)) + timeZonePadding;
    }

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
        // Multiple spouses: Below husband
        // We use a small offset so they sit below the husband, but clearly ABOVE the children's depth.
        // NODE_HEIGHT + MIN_GAP_Y is typically 300px total jump for children.
        // 100px places them exactly mid-way as intended.
        node.spouses.forEach((spouseId) => {
            const spouseNode = nodesMap.get(spouseId);
            if (spouseNode) {
                // Use the relative x calculated by the true auto-slip contour in contour-calculator.js
                spouseNode.x = node.x + spouseNode.layout.x;
                spouseNode.y = node.y + 100; // Y + 100px (wives row)

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
