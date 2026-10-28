const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

// I'll change the `exact_parivartan` block so it marks `isMatch = true` EVEN IF it's cancelled, but sets `isCancelled = true` and `modifierNote = "..."`. Wait, `isCancelled` is evaluated at the bottom!
// Ah, `let isCancelled = false;` is at the top of the loop (line 138), but wait!
// At line 685: `let isCancelled = false;` is redeclared inside `if (matchedCombinationsCount > 0 && !isCancelled) {`... wait what?

// For Parivartan, if it's combust, I should just set `isMatch = true` and `isCancelled = true` at the outer loop, and attach the reason.

const fixStr = `
                    else if (cond.type === 'exact_parivartan') {
                        let hA = cond.houseA;
                        let hB = cond.houseB;
                        let signA = (ascendantSign + hA - 1) % 12;
                        let signB = (ascendantSign + hB - 1) % 12;
                        let lordA_Name = RASHI_LORDS[signA];
                        let lordB_Name = RASHI_LORDS[signB];
                        let lordA = pMap[lordA_Name];
                        let lordB = pMap[lordB_Name];

                        if (lordA && lordB && lordA.house === hB && lordB.house === hA) {
                            isMatch = true;
                            matchedConditions.push(cond);

                            const isPowerless = (p) => p.isCombust || p.dignity === 'Asta' || p.dignity === 'Mrit';
                            if (isPowerless(lordA) || isPowerless(lordB)) {
                                cond.cancelReason = \`परिवर्तन करने वाला ग्रह (\${isPowerless(lordA) ? lordA_Name : lordB_Name}) शक्तिहीन (अस्त/मृत) है।\`;
                            }
                        }
                    }
`;

const regex = /else if \(cond.type === 'exact_parivartan'\) \{[\s\S]*?else if \(cond.type === 'single_planet'\) \{/;
content = content.replace(regex, fixStr.trim() + "\n                    else if (cond.type === 'single_planet') {");
fs.writeFileSync(filepath, content);
console.log("Fixed parivartan cancel reason injection.");
