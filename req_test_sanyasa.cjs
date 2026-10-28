const detector = require('./kundali-engine/yoga-detector.js');

// Test 1: Pravrajya Yoga (4 planets in 10th house)
let mockPravrajya = [
    { name: 'Sun', house: 10, sign: 9, dignity: 'Neutral', aspects: [] },
    { name: 'Moon', house: 10, sign: 9, dignity: 'Neutral', aspects: [] },
    { name: 'Mars', house: 10, sign: 9, dignity: 'Neutral', aspects: [] },
    { name: 'Mercury', house: 10, sign: 9, dignity: 'Neutral', aspects: [] },
];
let yogas = detector.detectYogas(mockPravrajya, 0, 1);
let sanyasa = yogas.yogas.filter(y => y.id.includes('sanyasa'));
console.log("TEST 1: Pravrajya Yoga (4 Planets)", JSON.stringify(sanyasa, null, 2));

// Test 2: Kapat Sanyasi (Combust planet in the cluster)
let mockKapat = [
    { name: 'Sun', house: 10, sign: 9, dignity: 'Neutral', aspects: [] },
    { name: 'Moon', house: 10, sign: 9, dignity: 'Neutral', aspects: [] },
    { name: 'Mars', house: 10, sign: 9, dignity: 'Neutral', aspects: [] },
    { name: 'Mercury', house: 10, sign: 9, dignity: 'Asta', isCombust: true, aspects: [] },
];
yogas = detector.detectYogas(mockKapat, 0, 1);
sanyasa = yogas.yogas.filter(y => y.id.includes('sanyasa'));
console.log("\nTEST 2: Fake Ascetic (Combust)", JSON.stringify(sanyasa, null, 2));

// Test 3: Shani Lagnesh Vairagya (Ascendant Aries=0, Mars in Capricorn=9, Saturn aspects 9th house)
let mockVairagya = [
    { name: 'Mars', house: 10, sign: 9, dignity: 'Uccha', aspects: [] }, // Lagnesh Mars in Capricorn (Sign 9)
    { name: 'Saturn', house: 8, sign: 7, dignity: 'Enemy', aspects: [10] }, // Saturn aspects house 10
];
yogas = detector.detectYogas(mockVairagya, 0, 1); // 0 = Aries
sanyasa = yogas.yogas.filter(y => y.id.includes('sanyasa'));
console.log("\nTEST 3: Saturn-Lagnesh Asceticism", JSON.stringify(sanyasa, null, 2));
