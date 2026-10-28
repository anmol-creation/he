const detector = require('./kundali-engine/yoga-detector.js');

let mockPArray = [
    { name: 'Mercury', house: 1, sign: 11, dignity: 'Neecha', aspects: [] }, // We remove aspect from Jupiter below to isolate Moon-Only
    { name: 'Jupiter', house: 5, sign: 3, dignity: 'Friendly', aspects: [9, 11] }, // Aspecting 9 and 11, NOT 1
    { name: 'Venus', house: 3, sign: 0, dignity: 'Enemy', aspects: [] }, // House 3 is NOT in Asc Kendra (1,4,7,10) and NOT in Moon Kendra (2,5,8,11)
    { name: 'Moon', house: 2, sign: 1, dignity: 'Mooltrikona', aspects: [] }
];
let result = detector.detectYogas(mockPArray, 1, 1);
let nb = result.yogas.filter(y => y.id.includes('general_neechbhanga'));
console.log(JSON.stringify(nb, null, 2));
