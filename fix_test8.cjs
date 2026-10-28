// Ah! detectYogas signature is `detectYogas(planetsData, ascendantDegree)`.
// I passed `detectYogas(..., 1, 1)`. So ascendantDegree was 1!
// Math.floor(1 / 30) = 0! (Aries Ascendant).
// That's why it was treating it as Aries Ascendant!
// For Aries (0), 12th house is Pisces (11). Lord is Jupiter. Jupiter is in House 12! That perfectly matched Vimala!
// And Lagnesh was Mars (0). Mars was in house 10!
// Is House 10 in [1, 4, 5, 7, 9, 10]? Yes!
// So Lagnesh (Mars) was in a Kendra! That's why it said "Strong Lagnesh boosts power (2x)."
// The logic is completely flawless! My test case was just using `ascendantDegree = 1` instead of `ascendantDegree = 35` (Taurus).
