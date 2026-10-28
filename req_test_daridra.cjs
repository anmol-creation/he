const detector = require('./kundali-engine/yoga-detector.js');

// Test 1: Weak Lagnesh (Aries Ascendant, Mars in 8th house, Enemy sign)
let mockWeakLagnesh = [
    { name: 'Mars', house: 8, sign: 7, dignity: 'Enemy', aspects: [] }, // Lagnesh Mars in 8th
];
let yogas = detector.detectYogas(mockWeakLagnesh, 0, 1);
let daridra = yogas.doshas ? yogas.doshas.filter(y => y.id.includes('daridra')) : yogas.yogas.filter(y => y.id.includes('daridra'));
console.log("TEST 1: Weak Lagnesh", JSON.stringify(daridra, null, 2));

// Test 2: Dhan Nash Cancelled (Aries Ascendant, 2nd Lord Venus in 12th house, but Exalted in Pisces)
let mockDhanNashCancel = [
    { name: 'Venus', house: 12, sign: 11, dignity: 'Uccha', aspects: [] }, // 2nd Lord Venus in 12th (Pisces) -> Exalted
];
yogas = detector.detectYogas(mockDhanNashCancel, 0, 1);
daridra = yogas.doshas ? yogas.doshas.filter(y => y.id.includes('daridra')) : yogas.yogas.filter(y => y.id.includes('daridra'));
console.log("\nTEST 2: Dhan Nash Cancelled", JSON.stringify(daridra, null, 2));

// Test 3: Severe Labh Nash (Aries Asc, 11th Lord Saturn in 6th house, Debilitated in Aries)
let mockLabhNashSevere = [
    { name: 'Saturn', house: 6, sign: 0, dignity: 'Neecha', aspects: [] }, // 11th Lord Saturn in 6th (Aries) -> Debilitated
];
yogas = detector.detectYogas(mockLabhNashSevere, 0, 1);
daridra = yogas.doshas ? yogas.doshas.filter(y => y.id.includes('daridra')) : yogas.yogas.filter(y => y.id.includes('daridra'));
console.log("\nTEST 3: Severe Labh Nash", JSON.stringify(daridra, null, 2));
