const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

// Insert exact_parivartan into the rule processing loop
const insertionPoint = `                    else if (cond.type === 'single_planet') {`;

const newCode = `                    else if (cond.type === 'exact_parivartan') {
                        let hA = cond.houseA;
                        let hB = cond.houseB;

                        // Find lords of House A and House B
                        let lordA_Name = null;
                        let lordB_Name = null;

                        // We need to map which sign is in House A and House B to find their lords
                        // Let's assume ascendantSign is passed.
                        // The sign in house N is (ascendantSign + N - 1) % 12
                        let signA = (ascendantSign + hA - 1) % 12;
                        let signB = (ascendantSign + hB - 1) % 12;

                        lordA_Name = RASHI_LORDS[signA];
                        lordB_Name = RASHI_LORDS[signB];

                        let lordA = pMap[lordA_Name];
                        let lordB = pMap[lordB_Name];

                        // Exact Parivartan: Lord A is in House B, AND Lord B is in House A
                        if (lordA && lordB && lordA.house === hB && lordB.house === hA) {
                            // Check Bhanga (Combust, Mrit)
                            const isPowerless = (p) => p.isCombust || p.dignity === 'Asta' || p.dignity === 'Mrit';

                            if (isPowerless(lordA) || isPowerless(lordB)) {
                                isCancelled = true;
                                cancelReason = \`परिवर्तन करने वाला ग्रह (\${isPowerless(lordA) ? lordA_Name : lordB_Name}) शक्तिहीन (अस्त/मृत) है।\`;
                            } else {
                                isMatch = true;
                            }
                        }
                    }
                    else if (cond.type === 'single_planet') {`;

content = content.replace(insertionPoint, newCode);
fs.writeFileSync(filepath, content);
console.log('Parivartan scanner logic added.');
