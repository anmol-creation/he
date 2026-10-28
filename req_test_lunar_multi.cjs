const detector = require('./kundali-engine/yoga-detector.js');
let yogas = detector.detectYogas([
    { name: 'Moon', house: 1, sign: 0, dignity: 'Uccha', aspects: [] },
    { name: 'Mars', house: 2, sign: 1, dignity: 'Neutral', aspects: [] },
    { name: 'Saturn', house: 12, sign: 11, dignity: 'Neutral', aspects: [] },
    { name: 'Venus', house: 12, sign: 11, dignity: 'Neutral', aspects: [] },
], 0, 1);
console.log(JSON.stringify(yogas.yogas.filter(y => y.id.includes('durudhara')), null, 2));
