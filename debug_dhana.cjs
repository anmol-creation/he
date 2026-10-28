const detector = require('./kundali-engine/yoga-detector.js');

let mockDhanaKT = [
    { name: 'Saturn', house: 4, sign: 4, dignity: 'Friendly', aspects: [] }, // Yogakaraka Saturn in Kendra
];
let yogas = detector.detectYogas(mockDhanaKT, 30, 1);
// Wait, `pMap` in `yoga-detector.js` relies on `planetsData` which filters for `name.match(/\((.*?)\)/)`!
// Ah! `p.name` in my mock is "Saturn". But in the engine it does:
// `let match = p.name.match(/\((.*?)\)/); if (match) { pName = match[1]; } else { pName = p.name; }`
// Actually, `const RASHI_LORDS = { 0: 'Mars', 1: 'Venus', ... }`
// Wait, if it didn't match `pMap['Saturn']`, why did Mahabhagya work? Mahabhagya uses `pMap['Sun']` and `pMap['Moon']`.
// Let's check KT logic.
