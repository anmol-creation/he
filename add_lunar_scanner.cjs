const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

const insertionPoint = `                    else if (cond.type === 'vipreet_rajyoga') {`;

const newCode = `                    else if (cond.type === 'lunar_yoga') {
                        let moon = pMap['Moon'];
                        if (moon) {
                            let moonHouse = moon.house;
                            let subtype = cond.subtype;

                            // Helper for checking adjacent houses (ignoring Sun, Rahu, Ketu)
                            const checkHouseForPlanets = (h) => {
                                let found = false;
                                for (let pName in pMap) {
                                    if (pName !== 'Moon' && pName !== 'Sun' && pName !== 'Rahu' && pName !== 'Ketu') {
                                        if (pMap[pName].house === h) {
                                            found = true;
                                            break;
                                        }
                                    }
                                }
                                return found;
                            };

                            let house2 = (moonHouse) % 12 + 1; // 2nd from moon
                            let house12 = (moonHouse + 10) % 12 + 1; // 12th from moon
                            let house10_from_moon = (moonHouse + 8) % 12 + 1;

                            let hasPlanet2nd = checkHouseForPlanets(house2);
                            let hasPlanet12th = checkHouseForPlanets(house12);
                            let hasPlanetWithMoon = checkHouseForPlanets(moonHouse);

                            if (subtype === 'gajakesari') {
                                let jupiter = pMap['Jupiter'];
                                if (jupiter) {
                                    let distance = (jupiter.house - moonHouse + 12) % 12;
                                    if (distance === 0 || distance === 3 || distance === 6 || distance === 9) {
                                        isMatch = true;
                                        matchedConditions.push(cond);
                                        // Bhanga for Gajakesari
                                        if (jupiter.isCombust || jupiter.dignity === 'Asta' || jupiter.dignity === 'Neecha' || jupiter.dignity === 'Mrit') {
                                            cond.cancelReason = 'गुरु (Jupiter) अस्त, नीच या मृत है। योग की शुभता नष्ट हो गई।';
                                        }
                                    }
                                }
                            }
                            else if (subtype === 'chandra_mangal') {
                                let mars = pMap['Mars'];
                                if (mars) {
                                    // Conjunction or Mutual Aspect
                                    let isConjunct = (mars.house === moonHouse);
                                    let isAspecting = (moon.aspects && moon.aspects.includes(mars.house)) || (mars.aspects && mars.aspects.includes(moonHouse));
                                    if (isConjunct || isAspecting) {
                                        isMatch = true;
                                        matchedConditions.push(cond);
                                    }
                                }
                            }
                            else if (subtype === 'amala') {
                                // 10th from Moon or Ascendant has Benefic (Jupiter, Venus, Mercury) and NO Malefic
                                let checkAmala = (h) => {
                                    let hasBenefic = false;
                                    let hasMalefic = false;
                                    for (let pName in pMap) {
                                        if (pMap[pName].house === h) {
                                            if (['Jupiter', 'Venus', 'Mercury'].includes(pName)) hasBenefic = true;
                                            if (['Sun', 'Mars', 'Saturn', 'Rahu', 'Ketu'].includes(pName)) hasMalefic = true;
                                        }
                                    }
                                    return hasBenefic && !hasMalefic;
                                };

                                if (checkAmala(house10_from_moon) || checkAmala(10)) {
                                    isMatch = true;
                                    matchedConditions.push(cond);
                                }
                            }
                            else if (subtype === 'sunapha') {
                                // 2nd has planets, 12th empty
                                if (hasPlanet2nd && !hasPlanet12th && !hasPlanetWithMoon) {
                                    isMatch = true;
                                    matchedConditions.push(cond);
                                }
                            }
                            else if (subtype === 'anapha') {
                                // 12th has planets, 2nd empty
                                if (hasPlanet12th && !hasPlanet2nd && !hasPlanetWithMoon) {
                                    isMatch = true;
                                    matchedConditions.push(cond);
                                }
                            }
                            else if (subtype === 'durudhara') {
                                // Both 2nd and 12th have planets
                                if (hasPlanet2nd && hasPlanet12th) {
                                    isMatch = true;
                                    matchedConditions.push(cond);
                                }
                            }
                            else if (subtype === 'kemadruma') {
                                // No planets in 2nd, 12th, or conjunct with Moon
                                if (!hasPlanet2nd && !hasPlanet12th && !hasPlanetWithMoon) {
                                    isMatch = true;
                                    matchedConditions.push(cond);

                                    // Kemadruma Bhanga (Cancellation)
                                    // 1. Jupiter aspects Moon
                                    // 2. Planets in Kendra from Ascendant (1, 4, 7, 10)
                                    let jupiter = pMap['Jupiter'];
                                    let juAspect = (jupiter && jupiter.aspects && jupiter.aspects.includes(moonHouse));

                                    let planetsInKendra = false;
                                    for (let pName in pMap) {
                                        if (pName !== 'Sun' && pName !== 'Rahu' && pName !== 'Ketu' && pName !== 'Moon') {
                                            if ([1, 4, 7, 10].includes(pMap[pName].house)) {
                                                planetsInKendra = true;
                                                break;
                                            }
                                        }
                                    }

                                    if (juAspect || planetsInKendra) {
                                        cond.cancelReason = 'केमद्रुम भंग: गुरु की दृष्टि या केंद्र में ग्रहों के होने से यह भयंकर दोष कट गया है!';
                                    }
                                }
                            }
                        }
                    }
                    else if (cond.type === 'vipreet_rajyoga') {`;

content = content.replace(insertionPoint, newCode);
fs.writeFileSync(filepath, content);
console.log('Lunar Yogas scanner logic added.');
