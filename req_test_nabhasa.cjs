const detector = require('./kundali-engine/yoga-detector.js');

// Test 1: Rajju Yoga (All planets in Movable Signs: 0, 3, 6, 9)
let mockRajju = [
    { name: 'Sun', house: 1, sign: 0, dignity: 'Neutral', aspects: [] },
    { name: 'Moon', house: 1, sign: 0, dignity: 'Neutral', aspects: [] },
    { name: 'Mars', house: 4, sign: 3, dignity: 'Neutral', aspects: [] },
    { name: 'Mercury', house: 4, sign: 3, dignity: 'Neutral', aspects: [] },
    { name: 'Jupiter', house: 7, sign: 6, dignity: 'Neutral', aspects: [] },
    { name: 'Venus', house: 10, sign: 9, dignity: 'Neutral', aspects: [] },
    { name: 'Saturn', house: 10, sign: 9, dignity: 'Neutral', aspects: [] },
];
let yogas = detector.detectYogas(mockRajju, 0, 1);
let nabhasa = yogas.yogas.filter(y => y.id.includes('nabhasa'));
console.log("TEST 1: Rajju Yoga (Movable Signs)", JSON.stringify(nabhasa, null, 2));

// Test 2: Sankhya Yoga - Kedar (4 houses occupied)
// Above, planets are in 1, 4, 7, 10 (which is exactly 4 houses!)
// So the above array should trigger Kedar Yoga as well.
console.log("\nTEST 2: Kedara Yoga (4 houses occupied, same array)", JSON.stringify(nabhasa, null, 2));

// Test 3: Sankhya Yoga - Veena (7 houses occupied)
let mockVeena = [
    { name: 'Sun', house: 1, sign: 1, dignity: 'Neutral', aspects: [] },
    { name: 'Moon', house: 2, sign: 2, dignity: 'Neutral', aspects: [] },
    { name: 'Mars', house: 3, sign: 3, dignity: 'Neutral', aspects: [] },
    { name: 'Mercury', house: 4, sign: 4, dignity: 'Neutral', aspects: [] },
    { name: 'Jupiter', house: 5, sign: 5, dignity: 'Neutral', aspects: [] },
    { name: 'Venus', house: 6, sign: 6, dignity: 'Neutral', aspects: [] },
    { name: 'Saturn', house: 7, sign: 7, dignity: 'Neutral', aspects: [] },
];
yogas = detector.detectYogas(mockVeena, 0, 1);
nabhasa = yogas.yogas.filter(y => y.id.includes('nabhasa'));
console.log("\nTEST 3: Veena Yoga (7 houses occupied)", JSON.stringify(nabhasa, null, 2));
