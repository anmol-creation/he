const detector = require('./kundali-engine/yoga-detector.js');
let mockPArrayVipreetStrong = [
    { name: 'Venus', house: 1, sign: 1, dignity: 'Swarashi', aspects: [] }, // Ascendant Taurus (1)
    { name: 'Jupiter', house: 12, sign: 0, dignity: 'Friendly', aspects: [] }, // 8th Lord in 12
    { name: 'Mars', house: 1, sign: 1, dignity: 'Enemy', aspects: [] }, // 12th Lord (Aries/0) is Mars. So let's put it NOT in 6,8,12
];
let result = detector.detectYogas(mockPArrayVipreetStrong, 1, 1);
let vipreet = result.yogas.filter(y => y.id.includes('vipreet_rajyoga'));
console.log(JSON.stringify(vipreet, null, 2));
