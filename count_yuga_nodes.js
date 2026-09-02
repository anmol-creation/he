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

let satyaNodes = [];
let tretaNodes = [];
let dwaparNodes = [];

for (const [id, node] of nodesMap.entries()) {
    if (node.depth === undefined) continue;
    if (node.yug === 'satya') satyaNodes.push(node);
    if (node.yug === 'treta') tretaNodes.push(node);
    if (node.yug === 'dwapar') dwaparNodes.push(node);
}

function getMaxDepthInRange(nodesList) {
    if(nodesList.length === 0) return 0;
    const minD = Math.min(...nodesList.map(n => n.depth));
    const maxD = Math.max(...nodesList.map(n => n.depth));
    return maxD - minD + 1;
}

console.log('Satya Yuga Nodes Depth Span:', getMaxDepthInRange(satyaNodes));
console.log('Treta Yuga Nodes Depth Span:', getMaxDepthInRange(tretaNodes));
console.log('Dwapar Yuga Nodes Depth Span:', getMaxDepthInRange(dwaparNodes));
