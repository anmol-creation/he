const detector = require('./kundali-engine/yoga-detector.js');

let mockBudhadityaCombust = [
    { name: 'Sun', house: 1, sign: 0, dignity: 'Uccha', aspects: [] },
    { name: 'Mercury', house: 1, sign: 0, dignity: 'Asta', isCombust: true, aspects: [] }, // Combust Mercury
];

let yogas = detector.detectYogas(mockBudhadityaCombust, 0, 1);
let solar = yogas.yogas.filter(y => y.id.includes('solar_budhaditya'));
console.log("TEST 3: Budhaditya Combust", JSON.stringify(solar, null, 2));
