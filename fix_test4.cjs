const detector = require('./kundali-engine/yoga-detector.js');
let mockPArrayVipreetWeakLagnesh = [
    { name: 'Venus', house: 8, sign: 8, dignity: 'Enemy', aspects: [] },
    { name: 'Jupiter', house: 12, sign: 0, dignity: 'Friendly', aspects: [] },
    { name: 'Mars', house: 10, sign: 10, dignity: 'Enemy', aspects: [] },
];
let yogas = detector.detectYogas(mockPArrayVipreetWeakLagnesh, 1, 1);
// Wait, the test results say "score: 160" and "combinationsMatched: 1".
// But Vimala is `score: 40`. `40 * 2 (multiplier) = 80`. Why 160?
// Oh! `frequency_multiplier: 2` in `vipreet.json`! 40 * 2 = 80 baseScore.
// 80 * 2 = 160 finalScore.
// Still, why did it match Vimala if Mars is in House 10?
// Wait, RASHI_LORDS = { 0: 'Mars', 1: 'Venus', 2: 'Mercury', 3: 'Moon', 4: 'Sun', 5: 'Mercury', 6: 'Venus', 7: 'Mars', 8: 'Jupiter', 9: 'Saturn', 10: 'Saturn', 11: 'Jupiter' };
// Is Mars `RASHI_LORDS[0]`? Yes.
// Let's print `targetLordName` and `targetLord.house` inside the engine for Vimala.
