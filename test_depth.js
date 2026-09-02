import { supremeData } from './js/data/historic-map-data/supreme.js';
import { brahmaBaseData } from './js/data/historic-map-data/brahma/brahma-base.js';
import { suryavanshData } from './js/data/historic-map-data/brahma/suryavansh.js';
import { chandravanshData } from './js/data/historic-map-data/brahma/chandravansh.js';
import { kashyapData } from './js/data/historic-map-data/brahma/kashyap.js';
import { agnivanshData } from './js/data/historic-map-data/brahma/agnivansh.js';
import { jhansiNewalkarData } from './js/data/historic-map-data/brahma/jhansi-newalkar.js';
import { maheshBaseData } from './js/data/historic-map-data/mahesh/mahesh-base.js';
import { vishnuBaseData } from './js/data/historic-map-data/vishnu/vishnu-base.js';

const allData = [
    ...supremeData,
    ...brahmaBaseData,
    ...suryavanshData,
    ...chandravanshData,
    ...kashyapData,
    ...agnivanshData,
    ...jhansiNewalkarData,
    ...maheshBaseData,
    ...vishnuBaseData
];

const nodesMap = new Map();
allData.forEach(d => {
    nodesMap.set(d.id, { ...d, children: [] });
});

allData.forEach(d => {
    if (d.parent && nodesMap.has(d.parent)) {
        nodesMap.get(d.parent).children.push(d.id);
    }
});

function calculateDepths(nodeId, currentDepth = 0) {
    const node = nodesMap.get(nodeId);
    if (!node) return;

    // Simple max depth if visited via multiple paths
    if (node.depth === undefined || currentDepth > node.depth) {
        node.depth = currentDepth;
    }

    node.children.forEach(childId => {
        calculateDepths(childId, currentDepth + 1);
    });
}

// Find all root nodes and calculate depths
allData.forEach(d => {
    if (!d.parent || d.parent === '') {
        calculateDepths(d.id);
    }
});

let maxDepth = -1;
let deepestNode = null;

for (const [id, node] of nodesMap.entries()) {
    if (node.depth !== undefined && node.depth > maxDepth) {
        maxDepth = node.depth;
        deepestNode = node;
    }
}

console.log('Deepest Node:', deepestNode.name, '(', deepestNode.id, ')');
console.log('Depth:', maxDepth);
const NODE_HEIGHT = 100;
const MIN_GAP_Y = 200;
const startY = 1000;
console.log('Total Y using strict depth calculation (without custom kali_year logic):', startY + (maxDepth * (NODE_HEIGHT + MIN_GAP_Y)));
