const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

const insertionPoint = `                    else if (cond.type === 'vipreet_rajyoga') {`;

const newCode = `                    else if (cond.type === 'dhana_yoga') {
                        let subtype = cond.subtype;
                        let lagneshName = RASHI_LORDS[ascendantSign];
                        let lagnesh = pMap[lagneshName];

                        const isPowerless = (p) => !p || p.isCombust || p.dignity === 'Asta' || p.dignity === 'Neecha' || p.dignity === 'Mrit';
                        const isStrong = (p) => p && !isPowerless(p) && (p.dignity === 'Uccha' || p.dignity === 'Swarashi' || p.dignity === 'Mooltrikona');

                        // Helper to get lord of a specific house relative to Ascendant
                        const getLordOfHouse = (h) => {
                            let sign = (ascendantSign + h - 1) % 12;
                            return pMap[RASHI_LORDS[sign]];
                        };

                        if (subtype === 'kendra_trikona') {
                            // Kendra Lords: 1, 4, 7, 10
                            // Trikona Lords: 1, 5, 9
                            let kendraLords = [getLordOfHouse(1), getLordOfHouse(4), getLordOfHouse(7), getLordOfHouse(10)].filter(Boolean);
                            let trikonaLords = [getLordOfHouse(1), getLordOfHouse(5), getLordOfHouse(9)].filter(Boolean);

                            let matches = 0;
                            let cancelledMatches = 0;

                            kendraLords.forEach(kl => {
                                trikonaLords.forEach(tl => {
                                    if (kl.name !== tl.name) { // Ignore if the same planet rules both (e.g. Mars for Aries rules 1 and 8, not a pure KT unless it's like Saturn ruling 9,10 for Taurus)
                                        // Relation: Conjunction or Mutual Aspect
                                        let conjunct = (kl.house === tl.house);
                                        let mutualAspect = (kl.aspects && tl.aspects && kl.aspects.includes(tl.house) && tl.aspects.includes(kl.house));

                                        if (conjunct || mutualAspect) {
                                            if (isPowerless(kl) || isPowerless(tl)) {
                                                cancelledMatches++;
                                            } else {
                                                matches++;
                                            }
                                        }
                                    }
                                });
                            });

                            // Special case: Single planet ruling both Kendra and Trikona (Yogakaraka like Saturn for Taurus/Libra, Mars for Cancer/Leo)
                            // If they are in Kendra/Trikona, they form Rajyoga alone.
                            const yogakarakaCheck = (lord) => {
                                let rulesKendra = false;
                                let rulesTrikona = false;
                                for(let i=1; i<=12; i++) {
                                    let sign = (ascendantSign + i - 1) % 12;
                                    if (RASHI_LORDS[sign] === lord.name) {
                                        if ([1,4,7,10].includes(i)) rulesKendra = true;
                                        if ([1,5,9].includes(i)) rulesTrikona = true;
                                    }
                                }
                                return rulesKendra && rulesTrikona;
                            };

                            for(let pName in pMap) {
                                let p = pMap[pName];
                                if (yogakarakaCheck(p) && [1,4,5,7,9,10].includes(p.house)) {
                                    if (isPowerless(p)) cancelledMatches++;
                                    else matches++;
                                }
                            }

                            if (matches > 0) {
                                isMatch = true;
                                cond.powerMultiplier = matches; // 2 relations = 2x power
                                matchedConditions.push(cond);
                            } else if (cancelledMatches > 0) {
                                isMatch = true;
                                cond.cancelReason = 'केंद्र-त्रिकोण राजयोग बनाने वाले ग्रह अस्त या नीच हैं। राजयोग भंग हो गया है।';
                                matchedConditions.push(cond);
                            }
                        }
                        else if (subtype === 'lakshmi') {
                            let lord9 = getLordOfHouse(9);
                            if (lord9 && lagnesh) {
                                let lord9InKendra = [1,4,7,10].includes(lord9.house);
                                let lord9Strong = isStrong(lord9);
                                let lagneshStrong = isStrong(lagnesh) || [1,4,5,7,9,10].includes(lagnesh.house);

                                if (lord9InKendra && lord9Strong && lagneshStrong) {
                                    if (isPowerless(lord9) || isPowerless(lagnesh)) {
                                        isMatch = true;
                                        cond.cancelReason = 'महालक्ष्मी योग बनाने वाले ग्रह (लग्नेश या भाग्येश) शक्तिहीन हैं।';
                                        matchedConditions.push(cond);
                                    } else {
                                        isMatch = true;
                                        matchedConditions.push(cond);
                                    }
                                }
                            }
                        }
                        else if (subtype === 'maha_dhana') {
                            // 2nd, 11th lords connecting with 1st, 5th, 9th lords
                            let wealthLords = [getLordOfHouse(2), getLordOfHouse(11)].filter(Boolean);
                            let trikonaLords = [getLordOfHouse(1), getLordOfHouse(5), getLordOfHouse(9)].filter(Boolean);

                            let matches = 0;
                            let cancelledMatches = 0;

                            wealthLords.forEach(wl => {
                                trikonaLords.forEach(tl => {
                                    if (wl.name !== tl.name) {
                                        let conjunct = (wl.house === tl.house);
                                        let mutualAspect = (wl.aspects && tl.aspects && wl.aspects.includes(tl.house) && tl.aspects.includes(wl.house));

                                        if (conjunct || mutualAspect) {
                                            if (isPowerless(wl) || isPowerless(tl)) {
                                                cancelledMatches++;
                                            } else {
                                                matches++;
                                            }
                                        }
                                    }
                                });
                            });

                            if (matches > 0) {
                                isMatch = true;
                                cond.powerMultiplier = matches;
                                matchedConditions.push(cond);
                            } else if (cancelledMatches > 0) {
                                isMatch = true;
                                cond.cancelReason = 'धन योग बनाने वाले ग्रह अस्त या मृत हैं। धन प्राप्ति में भयंकर बाधाएं।';
                                matchedConditions.push(cond);
                            }
                        }
                        else if (subtype === 'mahabhagya') {
                            // Mahabhagya Yoga
                            // Male: Born in Day (Sun in 7-12), Sun, Moon, Lagna all in Odd signs (0, 2, 4, 6, 8, 10).
                            // Female: Born in Night (Sun in 1-6), Sun, Moon, Lagna all in Even signs (1, 3, 5, 7, 9, 11).
                            // Since we don't have gender data directly in detector, we check for the pure astronomical alignment:
                            // We will check for the pure Male condition for now, or just if Sun, Moon, Lagna are in identical sign parity and strong.
                            let sun = pMap['Sun'];
                            let moon = pMap['Moon'];
                            if (sun && moon) {
                                let allOdd = (sun.sign % 2 === 0) && (moon.sign % 2 === 0) && (ascendantSign % 2 === 0);
                                let allEven = (sun.sign % 2 !== 0) && (moon.sign % 2 !== 0) && (ascendantSign % 2 !== 0);

                                if (allOdd || allEven) {
                                    // Make sure they are not severely debilitated
                                    if (!isPowerless(sun) && !isPowerless(moon) && lagnesh && !isPowerless(lagnesh)) {
                                        isMatch = true;
                                        matchedConditions.push(cond);
                                    }
                                }
                            }
                        }
                    }
                    else if (cond.type === 'vipreet_rajyoga') {`;

content = content.replace(insertionPoint, newCode);
fs.writeFileSync(filepath, content);
console.log('Dhana Yoga scanner logic added.');
