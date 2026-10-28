const fs = require('fs');
let content = fs.readFileSync('kundali-engine/yoga-detector.js', 'utf8');

// I found the bug! In `lunar_yoga`, `checkHouseForPlanets` returns a boolean (`found = true`), NOT a count!
// In `solar_yoga`, `checkHouseForPlanets` returns `validPlanetsCount`.
// So `count = true + true = 2`!
// Let's fix `checkHouseForPlanets` in `lunar_yoga` to return a count as well.

const oldFunc = `                            const checkHouseForPlanets = (h) => {
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
                            };`;

const newFunc = `                            const checkHouseForPlanetsCount = (h) => {
                                let count = 0;
                                for (let pName in pMap) {
                                    if (pName !== 'Moon' && pName !== 'Sun' && pName !== 'Rahu' && pName !== 'Ketu') {
                                        if (pMap[pName].house === h) count++;
                                    }
                                }
                                return count;
                            };
                            const checkHouseForPlanets = (h) => checkHouseForPlanetsCount(h) > 0;`;

content = content.replace(oldFunc, newFunc);

// Also replace `checkHouseForPlanets` with `checkHouseForPlanetsCount` in the Durudhara/Sunapha/Anapha multipliers.
const oldDurudhara = `let count = checkHouseForPlanets(house2) + checkHouseForPlanets(house12);`;
const newDurudhara = `let count = checkHouseForPlanetsCount(house2) + checkHouseForPlanetsCount(house12);`;
content = content.replace(oldDurudhara, newDurudhara);

const oldSunapha = `let count = checkHouseForPlanets(house2);`;
const newSunapha = `let count = checkHouseForPlanetsCount(house2);`;
content = content.replace(oldSunapha, newSunapha);

const oldAnapha = `let count = checkHouseForPlanets(house12);`;
const newAnapha = `let count = checkHouseForPlanetsCount(house12);`;
content = content.replace(oldAnapha, newAnapha);

fs.writeFileSync('kundali-engine/yoga-detector.js', content);
