const detector = require('./kundali-engine/yoga-detector.js');

let mockPravrajya5 = [
    { name: 'Sun', house: 10, sign: 9, dignity: 'Neutral', aspects: [] },
    { name: 'Moon', house: 10, sign: 9, dignity: 'Neutral', aspects: [] },
    { name: 'Mars', house: 10, sign: 9, dignity: 'Neutral', aspects: [] },
    { name: 'Mercury', house: 10, sign: 9, dignity: 'Neutral', aspects: [] },
    { name: 'Jupiter', house: 10, sign: 9, dignity: 'Neutral', aspects: [] },
];
let yogas = detector.detectYogas(mockPravrajya5, 0, 1);
let sanyasa = yogas.yogas.filter(y => y.id.includes('sanyasa'));
console.log("TEST 4: Pravrajya Yoga (5 Planets)", JSON.stringify(sanyasa, null, 2));

// Ah, wait! `subtype === 'pravrajya'` is in `special_yoga` maybe? No, `type === 'sanyasa_yoga'`.
// But wait, the `cond.powerMultiplier` is 2. `2 > 1` is true.
// The `else if (cond.type === 'sanyasa_yoga')` is inside `if (!modifierNote && cond.powerMultiplier > 1)`
// Oh!! In `sanyasa_yogas.json`, the TYPE is `"विशेष योग"`, not `"राजयोग"` or `"दोष"`.
// `cond.type` is `"sanyasa_yoga"` in `combinations: [{ type: "sanyasa_yoga" }]`.
// Wait. Why is `modifierNote` STILL "Multi-planet amplification"?
// Let me look at the code!
