const detector = require('./kundali-engine/yoga-detector.js');

let mockVish = [
    { name: 'Moon', house: 1, sign: 0, dignity: 'Neutral', aspects: [] },
    { name: 'Saturn', house: 1, sign: 0, dignity: 'Neutral', aspects: [] },
];
let yogas = detector.detectYogas(mockVish, 0, 1);
let arishta = yogas.doshas ? yogas.doshas.filter(y => y.id.includes('arishta_vish')) : yogas.yogas.filter(y => y.id.includes('arishta_vish'));
console.log("TEST 1: Vish Dosha", JSON.stringify(arishta, null, 2));

let mockPitra = [
    { name: 'Sun', house: 1, sign: 0, dignity: 'Neutral', aspects: [] },
    { name: 'Rahu', house: 1, sign: 0, dignity: 'Neutral', aspects: [] },
    { name: 'Jupiter', house: 7, sign: 6, dignity: 'Neutral', aspects: [] },
    { name: 'Ketu', house: 7, sign: 6, dignity: 'Neutral', aspects: [] },
];
yogas = detector.detectYogas(mockPitra, 0, 1);
arishta = yogas.doshas ? yogas.doshas.filter(y => y.id.includes('arishta_pitra')) : yogas.yogas.filter(y => y.id.includes('arishta_pitra'));
console.log("\nTEST 2: Pitra Dosha (2x severity)", JSON.stringify(arishta, null, 2));

let mockBalarishtaCancel = [
    { name: 'Moon', house: 8, sign: 7, dignity: 'Neecha', aspects: [] },
    { name: 'Mars', house: 8, sign: 7, dignity: 'Swarashi', aspects: [] },
    { name: 'Jupiter', house: 2, sign: 1, dignity: 'Neutral', aspects: [8] },
];
yogas = detector.detectYogas(mockBalarishtaCancel, 0, 1);
arishta = yogas.doshas ? yogas.doshas.filter(y => y.id.includes('arishta_balarishta')) : yogas.yogas.filter(y => y.id.includes('arishta_balarishta'));
console.log("\nTEST 3: Balarishta Cancelled", JSON.stringify(arishta, null, 2));
