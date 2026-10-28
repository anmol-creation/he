const detector = require('./kundali-engine/yoga-detector.js');

// Test Ascendant in Aries (0). House 1 is Aries (Lord Mars). House 9 is Sagittarius (Lord Jupiter).
// So Mars in House 9, Jupiter in House 1. (Maha Parivartan 1 & 9)
let mockPArrayMaha = [
    { name: 'Mars', house: 9, sign: 8, dignity: 'Friendly', aspects: [] }, // Mars (Lord of 1) in 9
    { name: 'Jupiter', house: 1, sign: 0, dignity: 'Friendly', aspects: [] }, // Jupiter (Lord of 9) in 1
    { name: 'Venus', house: 2, sign: 1, dignity: 'Enemy', aspects: [] }
];
let yogas = detector.detectYogas(mockPArrayMaha, 0, 1);
let parivartan = yogas.yogas.filter(y => y.id.includes('parivartan'));
console.log("TEST 1: Maha Yoga", JSON.stringify(parivartan, null, 2));

// Test Ascendant Aries (0). House 6 (Lord Mercury), House 8 (Lord Mars).
// Mercury in 8, Mars in 6 (Vipreet Rajyoga 6 & 8)
let mockPArrayVipreet = [
    { name: 'Mercury', house: 8, sign: 7, dignity: 'Enemy', aspects: [] }, // Mercury (Lord of 3 and 6, but acts as 6 here) in 8
    { name: 'Mars', house: 6, sign: 5, dignity: 'Enemy', aspects: [] }, // Mars (Lord of 1 and 8, acts as 8) in 6
];
yogas = detector.detectYogas(mockPArrayVipreet, 0, 1);
parivartan = yogas.yogas.filter(y => y.id.includes('parivartan'));
console.log("\nTEST 2: Vipreet Rajyoga", JSON.stringify(parivartan, null, 2));

// Test Dainya with Combustion Cancel
let mockPArrayDainyaCancel = [
    { name: 'Mercury', house: 8, sign: 7, dignity: 'Asta', isCombust: true, aspects: [] },
    { name: 'Mars', house: 6, sign: 5, dignity: 'Enemy', aspects: [] },
];
yogas = detector.detectYogas(mockPArrayDainyaCancel, 0, 1);
parivartan = yogas.yogas.filter(y => y.id.includes('parivartan'));
console.log("\nTEST 3: Cancelled Vipreet", JSON.stringify(parivartan, null, 2));
