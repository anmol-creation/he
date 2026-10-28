const detector = require('./kundali-engine/yoga-detector.js');

let mockPArrayVipreetWeakLagnesh = [
    { name: 'Venus', house: 8, sign: 8, dignity: 'Enemy', aspects: [] }, // Lagnesh in 8th house -> Weak
    { name: 'Jupiter', house: 12, sign: 0, dignity: 'Friendly', aspects: [] }, // 8th Lord in 12th house -> Sarala Yoga!
    { name: 'Mars', house: 10, sign: 10, dignity: 'Enemy', aspects: [] },
];
let result = detector.detectYogas(mockPArrayVipreetWeakLagnesh, 1, 1);
let vipreet = result.yogas.filter(y => y.id.includes('vipreet_rajyoga'));
console.log(JSON.stringify(vipreet, null, 2));
