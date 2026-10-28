const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

const insertionPoint = `                    else if (cond.type === 'nabhasa_yoga') {`;

const newCode = `                    else if (cond.type === 'special_yoga') {
                        let subtype = cond.subtype;

                        const isPowerless = (p) => !p || p.isCombust || p.dignity === 'Asta' || p.dignity === 'Neecha' || p.dignity === 'Mrit';

                        let ju = pMap['Jupiter'];
                        let me = pMap['Mercury'];
                        let ve = pMap['Venus'];

                        if (subtype === 'saraswati') {
                            if (ju && me && ve) {
                                let validHouses = [1, 2, 4, 5, 7, 9, 10];
                                if (validHouses.includes(ju.house) && validHouses.includes(me.house) && validHouses.includes(ve.house)) {
                                    isMatch = true;
                                    let matchedCond = { ...cond };

                                    if (isPowerless(ju) || isPowerless(me) || isPowerless(ve)) {
                                        matchedCond.cancelReason = 'सरस्वती योग भंग: विद्या और कला के कारक ग्रह अस्त/नीच हैं। शिक्षा में भयंकर बाधा आएगी।';
                                    } else {
                                        let hCount = new Set([ju.house, me.house, ve.house]).size;
                                        if (hCount === 1) matchedCond.powerMultiplier = 2; // All 3 in one valid house = Super Saraswati
                                    }
                                    matchedConditions.push(matchedCond);
                                }
                            }
                        }
                        else if (subtype === 'kalanidhi') {
                            if (ju && (ju.house === 2 || ju.house === 5)) {
                                if (me || ve) {
                                    let aspectMe = me && ((me.house === ju.house) || (me.aspects && me.aspects.includes(ju.house)));
                                    let aspectVe = ve && ((ve.house === ju.house) || (ve.aspects && ve.aspects.includes(ju.house)));

                                    if (aspectMe || aspectVe) {
                                        isMatch = true;
                                        let matchedCond = { ...cond };
                                        if (isPowerless(ju)) {
                                            matchedCond.cancelReason = 'कलानिधि भंग: गुरु अस्त या नीच है, कला का विकास नहीं हो पाएगा।';
                                        } else if (aspectMe && aspectVe) {
                                            matchedCond.powerMultiplier = 2;
                                        }
                                        matchedConditions.push(matchedCond);
                                    }
                                }
                            }
                        }
                        else if (subtype === 'chamara') {
                            let lagneshName = RASHI_LORDS[ascendantSign];
                            let lagnesh = pMap[lagneshName];

                            if (lagnesh && lagnesh.dignity === 'Uccha') {
                                if (ju && ((ju.house === lagnesh.house) || (ju.aspects && ju.aspects.includes(lagnesh.house)))) {
                                    isMatch = true;
                                    let matchedCond = { ...cond };
                                    if (isPowerless(ju)) {
                                        matchedCond.cancelReason = 'चामर योग भंग: दृष्टि डालने वाला गुरु शक्तिहीन है।';
                                    }
                                    matchedConditions.push(matchedCond);
                                }
                            }
                        }
                        else if (subtype === 'vasumathi') {
                            let moon = pMap['Moon'];
                            if (ju && me && ve) {
                                let upachayaAsc = [3, 6, 10, 11];

                                let checkUpachaya = (refHouse) => {
                                    let uH = [(refHouse+2)%12 || 12, (refHouse+5)%12 || 12, (refHouse+9)%12 || 12, (refHouse+10)%12 || 12];
                                    return uH.includes(ju.house) && uH.includes(me.house) && uH.includes(ve.house);
                                };

                                let fromAsc = upachayaAsc.includes(ju.house) && upachayaAsc.includes(me.house) && upachayaAsc.includes(ve.house);
                                let fromMoon = moon ? checkUpachaya(moon.house) : false;

                                if (fromAsc || fromMoon) {
                                    isMatch = true;
                                    let matchedCond = { ...cond };
                                    if (fromAsc && fromMoon) matchedCond.powerMultiplier = 2; // Super wealth

                                    if (isPowerless(ju) || isPowerless(me) || isPowerless(ve)) {
                                        matchedCond.cancelReason = 'वसुमति योग भंग: शुभ ग्रह अस्त/नीच हैं। धन संचय में भारी दिक्कत।';
                                    }
                                    matchedConditions.push(matchedCond);
                                }
                            }
                        }
                        else if (subtype === 'akhand_samrajya') {
                            let moon = pMap['Moon'];
                            if (moon) {
                                let getLordOfHouse = (h) => pMap[RASHI_LORDS[(ascendantSign + h - 1) % 12]];
                                let l2 = getLordOfHouse(2);
                                let l9 = getLordOfHouse(9);
                                let l11 = getLordOfHouse(11);

                                let moonKendras = [moon.house, (moon.house+3)%12 || 12, (moon.house+6)%12 || 12, (moon.house+9)%12 || 12];

                                let hits = 0;
                                if (l2 && moonKendras.includes(l2.house) && !isPowerless(l2)) hits++;
                                if (l9 && moonKendras.includes(l9.house) && !isPowerless(l9)) hits++;
                                if (l11 && moonKendras.includes(l11.house) && !isPowerless(l11)) hits++;

                                let lagneshName = RASHI_LORDS[ascendantSign];
                                let lagnesh = pMap[lagneshName];

                                if (hits > 0 && lagnesh && !isPowerless(lagnesh)) {
                                    isMatch = true;
                                    let matchedCond = { ...cond, powerMultiplier: hits };
                                    matchedConditions.push(matchedCond);
                                }
                            }
                        }
                    }
                    else if (cond.type === 'nabhasa_yoga') {`;

content = content.replace(insertionPoint, newCode);
fs.writeFileSync(filepath, content);
console.log('Special Yogas scanner logic added.');
