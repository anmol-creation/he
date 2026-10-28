const fs = require('fs');
let content = fs.readFileSync('kundali-engine/yoga-detector.js', 'utf8');

const debugCode = `                    else if (cond.type === 'vipreet_rajyoga') {
                        let targetHouse = cond.lord;
                        let targetSign = (ascendantSign + targetHouse - 1) % 12;
                        let targetLordName = RASHI_LORDS[targetSign];
                        let targetLord = pMap[targetLordName];

                        console.log("VIPREET CHECK: id=", rule.id, "targetHouse=", targetHouse, "targetSign=", targetSign, "targetLord=", targetLordName, "house=", targetLord ? targetLord.house : 'null');

                        let lagneshName = RASHI_LORDS[ascendantSign];
                        let lagnesh = pMap[lagneshName];`;

content = content.replace(/else if \(cond\.type === 'vipreet_rajyoga'\) \{[\s\S]*?let lagnesh = pMap\[lagneshName\];/, debugCode);
fs.writeFileSync('kundali-engine/yoga-detector.js', content);
