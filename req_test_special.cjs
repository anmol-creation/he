const detector = require('./kundali-engine/yoga-detector.js');

// Test 1: Saraswati Yoga (Mercury, Jupiter, Venus in Kendra 1, 4, 7)
let mockSaraswati = [
    { name: 'Mercury', house: 1, sign: 0, dignity: 'Neutral', aspects: [] },
    { name: 'Jupiter', house: 4, sign: 3, dignity: 'Uccha', aspects: [] },
    { name: 'Venus', house: 7, sign: 6, dignity: 'Swarashi', aspects: [] },
];
let yogas = detector.detectYogas(mockSaraswati, 0, 1);
let special = yogas.yogas.filter(y => y.id.includes('special_saraswati'));
console.log("TEST 1: Saraswati Yoga", JSON.stringify(special, null, 2));

// Test 2: Kalanidhi Yoga (Jupiter in 2, conjunct Mercury and Venus)
let mockKalanidhi = [
    { name: 'Jupiter', house: 2, sign: 1, dignity: 'Neutral', aspects: [] },
    { name: 'Mercury', house: 2, sign: 1, dignity: 'Neutral', aspects: [] },
    { name: 'Venus', house: 2, sign: 1, dignity: 'Swarashi', aspects: [] },
];
yogas = detector.detectYogas(mockKalanidhi, 0, 1);
special = yogas.yogas.filter(y => y.id.includes('special_kalanidhi'));
console.log("\nTEST 2: Kalanidhi Yoga (2x Power)", JSON.stringify(special, null, 2));

// Test 3: Chamara Yoga Cancelled (Lagnesh Exalted, but Jupiter Combust)
let mockChamaraCancel = [
    { name: 'Mars', house: 10, sign: 9, dignity: 'Uccha', aspects: [] }, // Lagnesh Mars exalted in 10
    { name: 'Jupiter', house: 10, sign: 9, dignity: 'Asta', isCombust: true, aspects: [] }, // Jupiter conjunct, but combust
];
yogas = detector.detectYogas(mockChamaraCancel, 0, 1);
special = yogas.yogas.filter(y => y.id.includes('special_chamara'));
console.log("\nTEST 3: Chamara Cancelled", JSON.stringify(special, null, 2));

// Test 4: Akhand Samrajya (Aries Ascendant, Moon in 1st. 2nd lord Venus, 9th lord Jupiter, 11th lord Saturn. All in Kendra from Moon (which is Kendra from Ascendant))
let mockAkhand = [
    { name: 'Mars', house: 1, sign: 0, dignity: 'Swarashi', aspects: [] }, // Strong Lagnesh
    { name: 'Moon', house: 1, sign: 0, dignity: 'Neutral', aspects: [] },
    { name: 'Venus', house: 4, sign: 3, dignity: 'Neutral', aspects: [] }, // 2nd Lord in 4 (Kendra)
    { name: 'Jupiter', house: 7, sign: 6, dignity: 'Neutral', aspects: [] }, // 9th Lord in 7 (Kendra)
    { name: 'Saturn', house: 10, sign: 9, dignity: 'Neutral', aspects: [] }, // 11th Lord in 10 (Kendra)
];
yogas = detector.detectYogas(mockAkhand, 0, 1);
special = yogas.yogas.filter(y => y.id.includes('special_akhand'));
console.log("\nTEST 4: Akhand Samrajya (3x Power)", JSON.stringify(special, null, 2));
