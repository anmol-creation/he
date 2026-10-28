const detector = require('./kundali-engine/yoga-detector.js');
let pMap = detector.detectYogas([
    { name: 'Venus', house: 8, sign: 8, dignity: 'Enemy', aspects: [] },
    { name: 'Jupiter', house: 12, sign: 0, dignity: 'Friendly', aspects: [] },
    { name: 'Mars', house: 10, sign: 10, dignity: 'Enemy', aspects: [] }
], 1, 1).yogas.filter(y => y.id.includes('vipreet'));
console.log(JSON.stringify(pMap, null, 2));
