const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

const insertionPoint = `                    else if (cond.type === 'vipreet_rajyoga') {`;

const newCode = `                    else if (cond.type === 'solar_yoga') {
                        let sun = pMap['Sun'];
                        if (sun) {
                            let sunHouse = sun.house;
                            let subtype = cond.subtype;

                            // Helper for checking adjacent houses and returning number of valid planets (multiplier logic)
                            const checkHouseForPlanets = (h) => {
                                let validPlanetsCount = 0;
                                for (let pName in pMap) {
                                    if (pName !== 'Sun' && pName !== 'Moon' && pName !== 'Rahu' && pName !== 'Ketu') {
                                        if (pMap[pName].house === h) {
                                            validPlanetsCount++;
                                        }
                                    }
                                }
                                return validPlanetsCount;
                            };

                            let house2 = (sunHouse) % 12 + 1; // 2nd from Sun
                            let house12 = (sunHouse + 10) % 12 + 1; // 12th from Sun

                            let pCount2nd = checkHouseForPlanets(house2);
                            let pCount12th = checkHouseForPlanets(house12);

                            if (subtype === 'budhaditya') {
                                let mercury = pMap['Mercury'];
                                if (mercury && mercury.house === sunHouse) {
                                    isMatch = true;
                                    matchedConditions.push(cond);

                                    // Bhanga: Mercury is Combust (Ast)
                                    // Normally Mercury is always near Sun. Deep combustion (Ast) reduces power.
                                    if (mercury.isCombust || mercury.dignity === 'Asta' || mercury.dignity === 'Mrit') {
                                        cond.cancelReason = 'बुध अस्त या मृत है। योग का फल आंशिक रह गया है।';
                                        cond.powerMultiplier = 0.5; // Reduces score to half instead of outright 0
                                    } else if (mercury.dignity === 'Uccha' || mercury.dignity === 'Swarashi') {
                                        cond.powerMultiplier = 2; // Super Budhaditya
                                    }
                                }
                            }
                            else if (subtype === 'vesi') {
                                if (pCount2nd > 0 && pCount12th === 0) {
                                    isMatch = true;
                                    cond.powerMultiplier = pCount2nd; // More planets = More Power
                                    matchedConditions.push(cond);
                                }
                            }
                            else if (subtype === 'vosi') {
                                if (pCount12th > 0 && pCount2nd === 0) {
                                    isMatch = true;
                                    cond.powerMultiplier = pCount12th;
                                    matchedConditions.push(cond);
                                }
                            }
                            else if (subtype === 'ubhayachari') {
                                if (pCount2nd > 0 && pCount12th > 0) {
                                    isMatch = true;
                                    cond.powerMultiplier = (pCount2nd + pCount12th);
                                    matchedConditions.push(cond);
                                }
                            }
                        }
                    }
                    else if (cond.type === 'vipreet_rajyoga') {`;

content = content.replace(insertionPoint, newCode);
fs.writeFileSync(filepath, content);
console.log('Solar scanner logic added.');
