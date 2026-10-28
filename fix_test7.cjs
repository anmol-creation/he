// Ah! RASHI_LORDS[11] is Jupiter!
// Taurus Ascendant = 1.
// 12th house = targetHouse 12.
// targetSign = (1 + 12 - 1) % 12 = 12 % 12 = 0.
// BUT 12 % 12 in JS is 0!
// Wait! targetSign = 11? How?
// 1 + 12 - 1 = 12. 12 % 12 = 0.
// Let me look at the debug output again:
// targetHouse= 12 targetSign= 11
// How is (1 + 12 - 1) % 12 == 11 ???
// OH! Ascendant is passed as 0-indexed in JS often?
// What did I pass to detectYogas(mockPArrayVipreetWeakLagnesh, 1, 1)?
// I passed `1` for `ascendantSign`.
// Wait, why did 1 + 12 - 1 result in 11?
// Ah! If `ascendantSign` in `yoga-detector.js` is 0-indexed, and it was 1, then (1 + 12 - 1) % 12 = 0. But the console says targetSign = 11.
