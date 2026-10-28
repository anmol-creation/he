const detector = require('./kundali-engine/yoga-detector.js');

let mockKaalSarp = [
    { name: 'Rahu', house: 1, sign: 0, dignity: 'Neutral', aspects: [] },
    { name: 'Ketu', house: 7, sign: 6, dignity: 'Neutral', aspects: [] },
    { name: 'Sun', house: 2, sign: 1, dignity: 'Neutral', aspects: [] },
    { name: 'Moon', house: 3, sign: 2, dignity: 'Neutral', aspects: [] },
    { name: 'Mars', house: 4, sign: 3, dignity: 'Neutral', aspects: [] },
    { name: 'Mercury', house: 5, sign: 4, dignity: 'Neutral', aspects: [] },
    { name: 'Jupiter', house: 6, sign: 5, dignity: 'Neutral', aspects: [] },
    { name: 'Venus', house: 7, sign: 6, dignity: 'Neutral', aspects: [] },
    { name: 'Saturn', house: 1, sign: 0, dignity: 'Neutral', aspects: [] },
];
let yogas = detector.detectYogas(mockKaalSarp, 0, 1);
let doshas = yogas.doshas ? yogas.doshas.filter(y => y.id.includes('dosha_kaal_sarp')) : yogas.yogas.filter(y => y.id.includes('dosha_kaal_sarp'));
console.log("TEST 1: Kaal Sarp", JSON.stringify(doshas, null, 2));

let mockMangalik = [
    { name: 'Mars', house: 7, sign: 6, dignity: 'Enemy', aspects: [] },
];
yogas = detector.detectYogas(mockMangalik, 0, 1);
doshas = yogas.doshas ? yogas.doshas.filter(y => y.id.includes('dosha_mangalik')) : yogas.yogas.filter(y => y.id.includes('dosha_mangalik'));
console.log("\nTEST 2: Mangalik", JSON.stringify(doshas, null, 2));

let mockMangalikParihar = [
    { name: 'Mars', house: 7, sign: 6, dignity: 'Enemy', aspects: [] },
    { name: 'Jupiter', house: 7, sign: 6, dignity: 'Friendly', aspects: [] },
];
yogas = detector.detectYogas(mockMangalikParihar, 0, 1);
doshas = yogas.doshas ? yogas.doshas.filter(y => y.id.includes('dosha_mangalik')) : yogas.yogas.filter(y => y.id.includes('dosha_mangalik'));
console.log("\nTEST 3: Mangalik Parihar", JSON.stringify(doshas, null, 2));

let mockGrahan = [
    { name: 'Rahu', house: 1, sign: 0, dignity: 'Neutral', aspects: [] },
    { name: 'Sun', house: 1, sign: 0, dignity: 'Enemy', aspects: [] },
    { name: 'Moon', house: 1, sign: 0, dignity: 'Enemy', aspects: [] },
];
yogas = detector.detectYogas(mockGrahan, 0, 1);
doshas = yogas.doshas ? yogas.doshas.filter(y => y.id.includes('dosha_grahan')) : yogas.yogas.filter(y => y.id.includes('dosha_grahan'));
console.log("\nTEST 4: Double Grahan Dosha", JSON.stringify(doshas, null, 2));
