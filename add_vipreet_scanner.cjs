const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

const insertionPoint = `                    else if (cond.type === 'exact_parivartan') {`;

const newCode = `                    else if (cond.type === 'vipreet_rajyoga') {
                        // Vipreet Rajyoga: Lord of 'lord' house in 'in_houses'
                        let targetHouse = cond.lord;
                        let targetSign = (ascendantSign + targetHouse - 1) % 12;
                        let targetLordName = RASHI_LORDS[targetSign];
                        let targetLord = pMap[targetLordName];

                        // Lagnesh Check
                        let lagneshName = RASHI_LORDS[ascendantSign];
                        let lagnesh = pMap[lagneshName];

                        if (targetLord && cond.in_houses.includes(targetLord.house)) {
                            isMatch = true;
                            matchedConditions.push(cond);

                            let bhangaReason = null;
                            let multiplier = 1;

                            // Parihar (Cancellation) Rule 1: The planet forming the yoga must not be combust or mrit
                            if (targetLord.isCombust || targetLord.dignity === 'Asta' || targetLord.dignity === 'Mrit') {
                                bhangaReason = \`योग बनाने वाला ग्रह (\${targetLordName}) अस्त या मृत है। बुराई को काटने की शक्ति नहीं है।\`;
                            }
                            // Parihar (Cancellation) Rule 2: Lagnesh must be strong enough to handle the crisis
                            else if (!lagnesh) {
                                bhangaReason = \`लग्नेश का डेटा उपलब्ध नहीं है।\`;
                            } else if (lagnesh.isCombust || lagnesh.dignity === 'Asta' || lagnesh.dignity === 'Neecha' || lagnesh.dignity === 'Mrit' || [6, 8, 12].includes(lagnesh.house)) {
                                bhangaReason = \`लग्नेश (\${lagneshName}) बहुत कमजोर/अस्त/नीच है या त्रिक भाव में है। जातक संकटों से लड़ने में सक्षम नहीं है।\`;
                            }

                            if (bhangaReason) {
                                cond.cancelReason = bhangaReason;
                            } else {
                                // Multiplier Logic: If Lagnesh is in Kendra/Trikona or Exalted/Own sign, double the power!
                                if ([1, 4, 5, 7, 9, 10].includes(lagnesh.house) || lagnesh.dignity === 'Uccha' || lagnesh.dignity === 'Swarashi' || lagnesh.dignity === 'Mooltrikona') {
                                    cond.powerMultiplier = 2;
                                }
                            }
                        }
                    }
                    else if (cond.type === 'exact_parivartan') {`;

content = content.replace(insertionPoint, newCode);
fs.writeFileSync(filepath, content);
console.log('Vipreet scanner logic added.');
