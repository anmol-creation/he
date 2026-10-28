const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

const insertionPoint = `                    else if (cond.type === 'nabhasa_yoga') {`;

const newCode = `                    else if (cond.type === 'sanyasa_yoga') {
                        let subtype = cond.subtype;

                        if (subtype === 'pravrajya') {
                            // Find any house that has 4 or more planets (Usually excludes Rahu/Ketu, but some classics include them if they eclipse the ascendant. We'll stick to the 7 physical planets for pure asceticism, but count nodes if they participate in the cluster).
                            // Actually, Brihat Jataka strictly speaks of 4+ out of the 7 physical planets.
                            let houseCounts = {};
                            for (let i = 1; i <= 12; i++) houseCounts[i] = [];

                            for (let pName in pMap) {
                                if (!['Rahu', 'Ketu'].includes(pName)) {
                                    houseCounts[pMap[pName].house].push(pMap[pName]);
                                }
                            }

                            for (let h = 1; h <= 12; h++) {
                                if (houseCounts[h].length >= 4) {
                                    isMatch = true;
                                    let matchedCond = { ...cond, powerMultiplier: houseCounts[h].length - 3 }; // 4 planets = 1x, 5 planets = 2x power

                                    // Sanyasa Bhanga: If the strongest planet in the cluster is combust, or if the dispositor of this house is defeated/combust, it becomes a "Fake Ascetic" (Kapat Sanyasi)
                                    let isAnyCombust = houseCounts[h].some(p => p.isCombust || p.dignity === 'Asta');
                                    if (isAnyCombust) {
                                        matchedCond.cancelReason = 'संन्यास भंग: युति में शामिल ग्रह अस्त (Combust) हैं। व्यक्ति संन्यास तो लेगा, पर सच्चा वैराग्य नहीं होगा (कपट संन्यासी)।';
                                    }

                                    matchedConditions.push(matchedCond);
                                    break; // Only need to detect one such house
                                }
                            }
                        }
                        else if (subtype === 'shani_lagnesh') {
                            let lagneshName = RASHI_LORDS[ascendantSign];
                            let lagnesh = pMap[lagneshName];
                            let saturn = pMap['Saturn'];

                            if (lagnesh && saturn && lagneshName !== 'Saturn') {
                                // Lagnesh is in Saturn's signs (Capricorn=9, Aquarius=10)
                                if (lagnesh.sign === 9 || lagnesh.sign === 10) {
                                    // Saturn aspects Lagnesh OR conjuncts Lagnesh
                                    let saAspect = (saturn.aspects && saturn.aspects.includes(lagnesh.house)) || (saturn.house === lagnesh.house);
                                    if (saAspect) {
                                        isMatch = true;
                                        let matchedCond = { ...cond };

                                        // Bhanga: If Saturn is Combust or Debilitated (Aries), the vairagya is forced by poverty, not spiritual enlightenment.
                                        if (saturn.isCombust || saturn.dignity === 'Asta' || saturn.dignity === 'Neecha') {
                                            matchedCond.cancelReason = 'वैराग्य भंग: शनि अस्त या नीच का है। व्यक्ति आध्यात्मिक ज्ञान के कारण नहीं, बल्कि गरीबी या दुखों के कारण दुनिया छोड़ेगा।';
                                        }

                                        matchedConditions.push(matchedCond);
                                    }
                                }
                            }
                        }
                    }
                    else if (cond.type === 'nabhasa_yoga') {`;

content = content.replace(insertionPoint, newCode);

const regex = /else if \(cond\.type === 'daridra_yoga'\) modifierNote = \`Lord is debilitated\/combust \(\\\${cond.powerMultiplier}x severity\)\.\`;/;
const replacement = `else if (cond.type === 'daridra_yoga') modifierNote = \`Lord is debilitated/combust (\${cond.powerMultiplier}x severity).\`;
                        else if (cond.type === 'sanyasa_yoga') modifierNote = \`Massive planetary cluster (\${cond.powerMultiplier + 3} planets involved).\`;`;

content = content.replace(regex, replacement);

fs.writeFileSync(filepath, content);
console.log('Sanyasa Yoga scanner logic added.');
