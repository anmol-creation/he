const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

const insertionPoint = `                    else if (cond.type === 'dhana_yoga') {`;

const newCode = `                    else if (cond.type === 'major_dosha') {
                        let subtype = cond.subtype;

                        if (subtype === 'kaal_sarp') {
                            let rahu = pMap['Rahu'];
                            let ketu = pMap['Ketu'];
                            if (rahu && ketu) {
                                let rHouse = rahu.house;
                                let kHouse = ketu.house;

                                let countSide1 = 0;
                                let countSide2 = 0;

                                for (let pName in pMap) {
                                    if (!['Rahu', 'Ketu'].includes(pName)) {
                                        let h = pMap[pName].house;
                                        let diff1 = (kHouse - rHouse + 12) % 12;
                                        let pDiff1 = (h - rHouse + 12) % 12;
                                        if (pDiff1 <= diff1 && pDiff1 > 0 && diff1 > 0) countSide1++;
                                        else if (h === rHouse || h === kHouse) countSide1++;

                                        let diff2 = (rHouse - kHouse + 12) % 12;
                                        let pDiff2 = (h - kHouse + 12) % 12;
                                        if (pDiff2 <= diff2 && pDiff2 > 0 && diff2 > 0) countSide2++;
                                        else if (h === rHouse || h === kHouse) countSide2++;
                                    }
                                }

                                if (countSide1 === 7 || countSide2 === 7) {
                                    isMatch = true;
                                    matchedConditions.push(cond);
                                }
                            }
                        }
                        else if (subtype === 'mangalik') {
                            let mars = pMap['Mars'];
                            if (mars) {
                                if ([1, 4, 7, 8, 12].includes(mars.house)) {
                                    let jupiter = pMap['Jupiter'];
                                    let juAspect = false;
                                    if (jupiter) {
                                        juAspect = (jupiter.house === mars.house) || (jupiter.aspects && jupiter.aspects.includes(mars.house));
                                    }

                                    let matchedCond = { ...cond };
                                    if (mars.dignity === 'Uccha' || mars.dignity === 'Swarashi' || mars.dignity === 'Mooltrikona') {
                                        isMatch = true;
                                        matchedCond.cancelReason = 'मांगलिक परिहार: मंगल अपनी ही राशि या उच्च राशि में है। दोष का प्रभाव खत्म हो गया है।';
                                        matchedConditions.push(matchedCond);
                                    } else if (juAspect) {
                                        isMatch = true;
                                        matchedCond.cancelReason = 'मांगलिक परिहार: गुरु की दृष्टि या युति ने मंगल के उग्र दोष को शांत कर दिया है।';
                                        matchedConditions.push(matchedCond);
                                    } else {
                                        isMatch = true;
                                        matchedConditions.push(matchedCond);
                                    }
                                }
                            }
                        }
                        else if (subtype === 'guru_chandal') {
                            let ju = pMap['Jupiter'];
                            let ra = pMap['Rahu'];
                            if (ju && ra && ju.house === ra.house) {
                                isMatch = true;
                                matchedConditions.push(cond);
                            }
                        }
                        else if (subtype === 'shrapit') {
                            let sa = pMap['Saturn'];
                            let ra = pMap['Rahu'];
                            if (sa && ra && sa.house === ra.house) {
                                isMatch = true;
                                matchedConditions.push(cond);
                            }
                        }
                        else if (subtype === 'angarak') {
                            let ma = pMap['Mars'];
                            let ra = pMap['Rahu'];
                            let ke = pMap['Ketu'];
                            if (ma && ((ra && ma.house === ra.house) || (ke && ma.house === ke.house))) {
                                isMatch = true;
                                matchedConditions.push(cond);
                            }
                        }
                        else if (subtype === 'grahan') {
                            let su = pMap['Sun'];
                            let mo = pMap['Moon'];
                            let ra = pMap['Rahu'];
                            let ke = pMap['Ketu'];

                            let hits = 0;
                            if (su && ((ra && su.house === ra.house) || (ke && su.house === ke.house))) hits++;
                            if (mo && ((ra && mo.house === ra.house) || (ke && mo.house === ke.house))) hits++;

                            if (hits > 0) {
                                isMatch = true;
                                let matchedCond = { ...cond, powerMultiplier: hits };
                                matchedConditions.push(matchedCond);
                            }
                        }
                    }
                    else if (cond.type === 'dhana_yoga') {`;

content = content.replace(insertionPoint, newCode);

const regex = /if \(\!modifierNote && cond\.powerMultiplier > 1\) \{[\s\S]*?else modifierNote = \`Multi-planet amplification \(\\\${cond.powerMultiplier}x power\)\.\`;\s+\}\s+\}/;

const replacement = `if (!modifierNote && cond.powerMultiplier > 1) {
                        if (cond.type === 'vipreet_rajyoga') modifierNote = \`Strong Lagnesh boosts power (\${cond.powerMultiplier}x).\`;
                        else if (cond.type === 'major_dosha') modifierNote = \`Multiple eclipses detected (\${cond.powerMultiplier}x severity).\`;
                        else modifierNote = \`Multi-planet amplification (\${cond.powerMultiplier}x power).\`;
                    }`;

content = content.replace(regex, replacement);

fs.writeFileSync(filepath, content);
console.log('Major Doshas scanner logic added safely using cloned objects.');
