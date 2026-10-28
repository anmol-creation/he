const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

// Why did weak lagnesh fail to cancel?
// `lagneshName` is RASHI_LORDS[ascendantSign]. For Taurus (1), it's Venus.
// `lagnesh = pMap['Venus']`. Venus is in House 8.
// `if ([6, 8, 12].includes(lagnesh.house))`
// But wait, the test returned `isCancelled: false` and `modifier_note: "Strong Lagnesh boosts power (2x)."`
// How did it get power (2x)?
// `if ([1, 4, 5, 7, 9, 10].includes(lagnesh.house) || lagnesh.dignity === 'Uccha' || lagnesh.dignity === 'Swarashi' || lagnesh.dignity === 'Mooltrikona') { cond.powerMultiplier = 2; }`
// In test weak, I passed `dignity: 'Enemy'`. So it's not Swarashi. House is 8, which is not in [1, 4, 5, 7, 9, 10].
// Wait, is it matching a different condition?
// Ah! In `vipreet.json`, I have `vipreet_rajyoga_harsha`, `sarala`, `vimala`. But they ALL have `lord: 6`, `lord: 8`, `lord: 12`.
// In my mock, `Mars` is the 12th lord for Taurus (Taurus is 1, Aries is 12, Aries lord is Mars).
// Mars is in House 10. House 10 is NOT in [6, 8, 12]. So Vimala shouldn't match!
// But the output says `"id": "vipreet_rajyoga_vimala"`.
// Let's check `targetLordName` for Vimala. Vimala is `lord: 12`.
// targetSign = (1 + 12 - 1) % 12 = 12 % 12 = 0.
// RASHI_LORDS[0] is Mars. Mars is in house 10. `[6,8,12].includes(10)` is FALSE.
// Why did Vimala match?!
// Wait. 12th house from Taurus (1) is Aries (0). Mars is 12th lord.
// Is `detectYogas` running `vipreet_rajyoga_vimala`? Yes.
// Is it possible `targetLord` for Vimala is NOT Mars?
// `targetHouse = cond.lord`. `cond.lord` is 12.
// `let targetSign = (ascendantSign + targetHouse - 1) % 12;` => (1 + 12 - 1) % 12 = 0.
// `RASHI_LORDS[0] = 'Mars'`.
