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

function getPathDistance(startId, endId) {
    if (!nodesMap.has(startId)) { console.log('Missing start:', startId); return 0; }
    if (!nodesMap.has(endId)) { console.log('Missing end:', endId); return 0; }

    let current = nodesMap.get(endId);
    let distance = 0;

    while (current && current.id !== startId) {
        distance++;
        if(!current.parent) break;
        current = nodesMap.get(current.parent);
        if(!current) break;
    }

    if (current && current.id === startId) {
        return distance + 1; // +1 to include both start and end nodes in the count
    }
    return 0; // Not in the same path
}

// SATYA YUGA
const satyaSurya = getPathDistance('vaivasvata_manu', 'vikukshi');
const satyaChandra = getPathDistance('vaivasvata_manu', 'pururava_chandra');
const maxSatya = Math.max(satyaSurya, satyaChandra);

// TRETA YUGA
const tretaSurya = getPathDistance('puranjaya', 'kush');
const tretaChandra = getPathDistance('ayu_chandra', 'dushyant_chandra');
const maxTreta = Math.max(tretaSurya, tretaChandra);

// DVAPARA YUGA
const dwaparSurya = getPathDistance('atithi', 'brihadbala'); // Using brihadbala as end of dwapar for Surya
const dwaparChandraKuru = getPathDistance('bharat_kuru', 'yudhishthira_chandra');
const dwaparChandraYadu = getPathDistance('bharat_kuru', 'krishna_chandra'); // krishna is in yadu, bharat is kuru, won't work
// let's use the actual root of Yadu vansh in dwapara if we needed to, but Kuru is longest.

const maxDwapar = Math.max(dwaparSurya, dwaparChandraKuru);

console.log('--- Generations Count Based on Strict Boundaries ---');
console.log('Satya Yuga (Manu to Vikukshi/Pururava):', maxSatya);
console.log('  -> Suryavansh (Manu to Vikukshi):', satyaSurya);
console.log('  -> Chandravansh (Manu to Pururava):', satyaChandra);

console.log('Treta Yuga (Puranjaya/Ayu to Kush/Dushyant):', maxTreta);
console.log('  -> Suryavansh (Puranjaya to Kush):', tretaSurya);
console.log('  -> Chandravansh (Ayu to Dushyant):', tretaChandra);

console.log('Dvapara Yuga (Atithi/Bharat to Brihadbala/Yudhishthira):', maxDwapar);
console.log('  -> Suryavansh (Atithi to Brihadbala):', dwaparSurya);
console.log('  -> Chandravansh (Bharat to Yudhishthira):', dwaparChandraKuru);
