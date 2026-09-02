import { supremeData } from './js/data/historic-map-data/supreme.js';
import { brahmaBaseData } from './js/data/historic-map-data/brahma/brahma-base.js';
import { suryavanshData } from './js/data/historic-map-data/brahma/suryavansh.js';
import { chandravanshData } from './js/data/historic-map-data/brahma/chandravansh.js';
import { kashyapData } from './js/data/historic-map-data/brahma/kashyap.js';
import { agnivanshData } from './js/data/historic-map-data/brahma/agnivansh.js';
import { jhansiNewalkarData } from './js/data/historic-map-data/brahma/jhansi-newalkar.js';

const allData = [
    ...supremeData,
    ...brahmaBaseData,
    ...suryavanshData,
    ...chandravanshData,
    ...kashyapData,
    ...agnivanshData,
    ...jhansiNewalkarData
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

    if (node.depth === undefined || currentDepth > node.depth) {
        node.depth = currentDepth;
    }

    node.children.forEach(childId => {
        calculateDepths(childId, currentDepth + 1);
    });
}

allData.forEach(d => {
    if (!d.parent || d.parent === '') {
        calculateDepths(d.id);
    }
});

let maxSatyaDepth = -1;
let deepestSatyaNode = null;

for (const [id, node] of nodesMap.entries()) {
    if (node.depth === undefined) continue;
    if (node.yug === 'satya' && node.depth > maxSatyaDepth) {
        maxSatyaDepth = node.depth;
        deepestSatyaNode = node;
    }
}

console.log('Deepest Satya Node:', deepestSatyaNode.name, '(', deepestSatyaNode.id, ')');
console.log('Depth:', maxSatyaDepth);

// Trace path back to root
let path = [];
let current = deepestSatyaNode;
while (current) {
    path.push(`${current.name} (${current.yug || 'no-yug'})`);
    current = nodesMap.get(current.parent);
}
console.log(path.reverse().join(' -> '));
