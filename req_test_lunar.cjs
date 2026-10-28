const detector = require('./kundali-engine/yoga-detector.js');

// Test 1: Kemadruma Dosha (No planets in 2nd or 12th from Moon, no planets in Asc Kendra)
let mockKemadruma = [
    { name: 'Moon', house: 2, sign: 1, dignity: 'Mooltrikona', aspects: [] }, // Moon in 2
    { name: 'Mars', house: 5, sign: 4, dignity: 'Enemy', aspects: [] },
    { name: 'Saturn', house: 6, sign: 5, dignity: 'Enemy', aspects: [] }
];
let yogas = detector.detectYogas(mockKemadruma, 0, 1);
let lunar = yogas.yogas.filter(y => y.id.includes('lunar'));
console.log("TEST 1: Pure Kemadruma", JSON.stringify(lunar, null, 2));

// Test 2: Kemadruma Bhanga (Planet in Ascendant Kendra)
let mockKemadrumaBhanga = [
    { name: 'Moon', house: 2, sign: 1, dignity: 'Mooltrikona', aspects: [] },
    { name: 'Mars', house: 4, sign: 3, dignity: 'Enemy', aspects: [] } // Mars in Kendra (4)
];
yogas = detector.detectYogas(mockKemadrumaBhanga, 0, 1);
lunar = yogas.yogas.filter(y => y.id.includes('lunar'));
console.log("\nTEST 2: Kemadruma Bhanga", JSON.stringify(lunar, null, 2));

// Test 3: Gajakesari Yoga (Jupiter in Kendra from Moon)
let mockGajakesari = [
    { name: 'Moon', house: 1, sign: 0, dignity: 'Enemy', aspects: [] },
    { name: 'Jupiter', house: 4, sign: 3, dignity: 'Uccha', aspects: [] } // Jupiter in 4th from Moon
];
yogas = detector.detectYogas(mockGajakesari, 0, 1);
lunar = yogas.yogas.filter(y => y.id.includes('lunar'));
console.log("\nTEST 3: Gajakesari", JSON.stringify(lunar, null, 2));

// Test 4: Sunapha Yoga (Planet in 2nd from Moon)
let mockSunapha = [
    { name: 'Moon', house: 1, sign: 0, dignity: 'Enemy', aspects: [] },
    { name: 'Venus', house: 2, sign: 1, dignity: 'Swarashi', aspects: [] } // Venus in 2nd
];
yogas = detector.detectYogas(mockSunapha, 0, 1);
lunar = yogas.yogas.filter(y => y.id.includes('lunar'));
console.log("\nTEST 4: Sunapha", JSON.stringify(lunar, null, 2));
