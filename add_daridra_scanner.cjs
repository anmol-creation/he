const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

const insertionPoint = `                    else if (cond.type === 'major_dosha') {`;

const newCode = `                    else if (cond.type === 'daridra_yoga') {
                        let subtype = cond.subtype;

                        const getLordOfHouse = (h) => {
                            let sign = (ascendantSign + h - 1) % 12;
                            return pMap[RASHI_LORDS[sign]];
                        };

                        let lagnesh = getLordOfHouse(1);
                        let lord2 = getLordOfHouse(2);
                        let lord11 = getLordOfHouse(11);

                        // Cancellation logic: If the lord is Exalted (Uccha) or Swarashi (Own Sign), the Daridra Yoga is cancelled (Neechbhanga/Vipreet effect)
                        const isCancelledDignity = (p) => p && (p.dignity === 'Uccha' || p.dignity === 'Swarashi' || p.dignity === 'Mooltrikona');

                        if (subtype === 'weak_lagnesh' && lagnesh) {
                            if ([6, 8, 12].includes(lagnesh.house)) {
                                let matchedCond = { ...cond };
                                if (isCancelledDignity(lagnesh)) {
                                    isMatch = true;
                                    matchedCond.cancelReason = 'लग्नेश त्रिक भाव में है, लेकिन उच्च/स्वराशि का होने के कारण व्यक्ति अपने संघर्षों से राजा बनेगा (दारिद्र्य भंग)।';
                                } else {
                                    isMatch = true;
                                    if (lagnesh.isCombust || lagnesh.dignity === 'Neecha' || lagnesh.dignity === 'Asta') {
                                        matchedCond.powerMultiplier = 1.5; // Severe penalty if also debilitated/combust
                                    }
                                }
                                matchedConditions.push(matchedCond);
                            }
                        }
                        else if (subtype === 'dhan_nash' && lord2) {
                            if ([6, 8, 12].includes(lord2.house)) {
                                let matchedCond = { ...cond };
                                if (isCancelledDignity(lord2)) {
                                    isMatch = true;
                                    matchedCond.cancelReason = 'धन भाव का स्वामी त्रिक में है, लेकिन अत्यंत बलवान है। धन का नाश नहीं, बल्कि विदेशी/गुप्त स्रोतों से धन आएगा।';
                                } else {
                                    isMatch = true;
                                    if (lord2.isCombust || lord2.dignity === 'Neecha') matchedCond.powerMultiplier = 1.5;
                                }
                                matchedConditions.push(matchedCond);
                            }
                        }
                        else if (subtype === 'labh_nash' && lord11) {
                            if ([6, 8, 12].includes(lord11.house)) {
                                let matchedCond = { ...cond };
                                if (isCancelledDignity(lord11)) {
                                    isMatch = true;
                                    matchedCond.cancelReason = 'लाभ भाव का स्वामी त्रिक में है, लेकिन अत्यंत बलवान है। लाभ में देरी होगी, पर नाश नहीं होगा।';
                                } else {
                                    isMatch = true;
                                    if (lord11.isCombust || lord11.dignity === 'Neecha') matchedCond.powerMultiplier = 1.5;
                                }
                                matchedConditions.push(matchedCond);
                            }
                        }
                    }
                    else if (cond.type === 'major_dosha') {`;

content = content.replace(insertionPoint, newCode);

const regex = /else if \(cond\.type === 'major_dosha'\) modifierNote = \`Multiple eclipses detected \(\\\${cond\.powerMultiplier}x severity\)\.\`;/;
const replacement = `else if (cond.type === 'major_dosha') modifierNote = \`Multiple eclipses detected (\${cond.powerMultiplier}x severity).\`;
                        else if (cond.type === 'daridra_yoga') modifierNote = \`Lord is debilitated/combust (\${cond.powerMultiplier}x severity).\`;`;

content = content.replace(regex, replacement);

fs.writeFileSync(filepath, content);
console.log('Daridra Yoga scanner logic added.');
