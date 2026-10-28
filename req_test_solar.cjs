const detector = require('./kundali-engine/yoga-detector.js');

let mockSolar = [
    { name: 'Sun', house: 1, sign: 0, dignity: 'Uccha', aspects: [] },
    { name: 'Mercury', house: 1, sign: 0, dignity: 'Neutral', aspects: [] }, // Budhaditya
    { name: 'Mars', house: 2, sign: 1, dignity: 'Neutral', aspects: [] }, // 2nd from Sun (Vesi)
    { name: 'Venus', house: 2, sign: 1, dignity: 'Swarashi', aspects: [] }, // 2 planets in 2nd
];

let yogas = detector.detectYogas(mockSolar, 0, 1);
let solar = yogas.yogas.filter(y => y.id.includes('solar'));
console.log("TEST 1: Budhaditya & Vesi", JSON.stringify(solar, null, 2));

let mockUbhayachari = [
    { name: 'Sun', house: 1, sign: 0, dignity: 'Uccha', aspects: [] },
    { name: 'Mars', house: 2, sign: 1, dignity: 'Neutral', aspects: [] }, // 2nd
    { name: 'Saturn', house: 12, sign: 11, dignity: 'Neutral', aspects: [] }, // 12th
];
yogas = detector.detectYogas(mockUbhayachari, 0, 1);
solar = yogas.yogas.filter(y => y.id.includes('solar'));
console.log("\nTEST 2: Ubhayachari", JSON.stringify(solar, null, 2));
