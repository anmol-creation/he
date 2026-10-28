const detector = require('./kundali-engine/yoga-detector.js');

let mockPArrayVipreetStrong = [
    { name: 'Venus', house: 1, sign: 1, dignity: 'Swarashi', aspects: [] }, // Ascendant Taurus (1)
    { name: 'Jupiter', house: 12, sign: 0, dignity: 'Friendly', aspects: [] }, // 8th Lord in 12
    { name: 'Mars', house: 10, sign: 10, dignity: 'Enemy', aspects: [] }, // We need to mock Mars because RASHI_LORDS[0] is Mars (Asc=0, Aries) if I passed 0.
];
let result = detector.detectYogas(mockPArrayVipreetStrong, 1, 1);
let vipreet = result.yogas.filter(y => y.id.includes('vipreet_rajyoga'));
console.log(JSON.stringify(vipreet, null, 2));
