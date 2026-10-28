const detector = require('./kundali-engine/yoga-detector.js');

// Test 2: Maha Dhana Yoga (Ascendant Taurus = 1)
let mockMahaDhana = [
    { name: 'Mercury', house: 5, sign: 5, dignity: 'Uccha', aspects: [] }, // 2nd/5th lord
    { name: 'Saturn', house: 5, sign: 5, dignity: 'Friendly', aspects: [] }, // 9th lord
];
let yogas = detector.detectYogas(mockMahaDhana, 1 * 30, 1);
let dhana = yogas.yogas.filter(y => y.id.includes('dhana'));
console.log("\nTEST 2: Maha Dhana Yoga", JSON.stringify(dhana, null, 2));

// Test 3: Mahabhagya Yoga (Aries Ascendant = 0, Sun in Leo = 4, Moon in Sagittarius = 8)
let mockMahabhagya = [
    { name: 'Mars', house: 1, sign: 0, dignity: 'Swarashi', aspects: [] },
    { name: 'Sun', house: 5, sign: 4, dignity: 'Swarashi', aspects: [] },
    { name: 'Moon', house: 9, sign: 8, dignity: 'Friendly', aspects: [] }
];
yogas = detector.detectYogas(mockMahabhagya, 0, 1);
dhana = yogas.yogas.filter(y => y.id.includes('dhana'));
console.log("\nTEST 3: Mahabhagya Yoga", JSON.stringify(dhana, null, 2));
