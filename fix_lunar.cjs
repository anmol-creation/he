const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

// I need to add powerMultiplier for Lunar yogas as well.
// Let's modify the lunar scanner section.

const regex = /else if \(subtype === 'sunapha'\) \{[\s\S]*?else if \(subtype === 'kemadruma'\) \{/;
const replacement = `else if (subtype === 'sunapha') {
                                // 2nd has planets, 12th empty
                                if (hasPlanet2nd && !hasPlanet12th && !hasPlanetWithMoon) {
                                    isMatch = true;
                                    let count = checkHouseForPlanets(house2);
                                    if(count > 0) cond.powerMultiplier = count;
                                    matchedConditions.push(cond);
                                }
                            }
                            else if (subtype === 'anapha') {
                                // 12th has planets, 2nd empty
                                if (hasPlanet12th && !hasPlanet2nd && !hasPlanetWithMoon) {
                                    isMatch = true;
                                    let count = checkHouseForPlanets(house12);
                                    if(count > 0) cond.powerMultiplier = count;
                                    matchedConditions.push(cond);
                                }
                            }
                            else if (subtype === 'durudhara') {
                                // Both 2nd and 12th have planets
                                if (hasPlanet2nd && hasPlanet12th) {
                                    isMatch = true;
                                    let count = checkHouseForPlanets(house2) + checkHouseForPlanets(house12);
                                    if(count > 0) cond.powerMultiplier = count;
                                    matchedConditions.push(cond);
                                }
                            }
                            else if (subtype === 'kemadruma') {`;

content = content.replace(regex, replacement);
fs.writeFileSync(filepath, content);
