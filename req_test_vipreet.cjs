const detector = require('./kundali-engine/yoga-detector.js');

// Test 1: Strong Vipreet Rajyoga (Sarala)
// Ascendant = Aries (0). Lagnesh = Mars. 8th Lord = Mars (Scorpio).
// Wait, if Mars is Lagnesh AND 8th Lord, and Mars is in 6th house, it fails the Parihar (Lagnesh in 6).
// Let's use Ascendant = Taurus (1). Lagnesh = Venus. 8th Lord = Jupiter (Sagittarius).
// If Jupiter is in 12th House (Aries, Sign 0). Jupiter in Aries is Friendly.
// Lagnesh Venus is in 1st House (Taurus, Sign 1) -> Strong!
let mockPArrayVipreetStrong = [
    { name: 'Venus', house: 1, sign: 1, dignity: 'Swarashi', aspects: [] }, // Lagnesh in Kendra, strong
    { name: 'Jupiter', house: 12, sign: 0, dignity: 'Friendly', aspects: [] }, // 8th Lord in 12th house -> Sarala Yoga!
];
let result = detector.detectYogas(mockPArrayVipreetStrong, 1, 1);
let vipreet = result.yogas.filter(y => y.id.includes('vipreet_rajyoga'));
console.log("TEST 1: Strong Vipreet", JSON.stringify(vipreet, null, 2));

// Test 2: Cancelled Vipreet (Lagnesh Weak)
// Ascendant = Taurus (1). Lagnesh Venus is in 6th House (Libra, Sign 6 - wait, 6th from Taurus is Libra, Venus is Swarashi in 6th, still in Trik house).
// Let's put Venus in 8th house (Sagittarius).
let mockPArrayVipreetWeakLagnesh = [
    { name: 'Venus', house: 8, sign: 8, dignity: 'Enemy', aspects: [] }, // Lagnesh in 8th house -> Weak
    { name: 'Jupiter', house: 12, sign: 0, dignity: 'Friendly', aspects: [] }, // 8th Lord in 12th house -> Sarala Yoga!
];
result = detector.detectYogas(mockPArrayVipreetWeakLagnesh, 1, 1);
vipreet = result.yogas.filter(y => y.id.includes('vipreet_rajyoga'));
console.log("\nTEST 2: Cancelled Vipreet (Lagnesh Weak)", JSON.stringify(vipreet, null, 2));

// Test 3: Cancelled Vipreet (Yoga planet Combust)
let mockPArrayVipreetCombust = [
    { name: 'Venus', house: 1, sign: 1, dignity: 'Swarashi', aspects: [] }, // Lagnesh Strong
    { name: 'Jupiter', house: 12, sign: 0, dignity: 'Asta', isCombust: true, aspects: [] }, // 8th Lord is Combust
];
result = detector.detectYogas(mockPArrayVipreetCombust, 1, 1);
vipreet = result.yogas.filter(y => y.id.includes('vipreet_rajyoga'));
console.log("\nTEST 3: Cancelled Vipreet (Yoga Planet Combust)", JSON.stringify(vipreet, null, 2));
