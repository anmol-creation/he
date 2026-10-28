const fs = require('fs');
const filepath = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(filepath, 'utf8');

const insertionPoint = `                    else if (cond.type === 'daridra_yoga') {`;

const newCode = `                    else if (cond.type === 'nabhasa_yoga') {
                        let subtype = cond.subtype;

                        // Gather all 7 physical planets
                        let physicalPlanets = [];
                        for (let pName in pMap) {
                            if (!['Rahu', 'Ketu'].includes(pName)) {
                                physicalPlanets.push(pMap[pName]);
                            }
                        }

                        // We can only evaluate Nabhasa yogas if we have all 7 planets
                        if (physicalPlanets.length === 7) {

                            // Ashraya Yogas: Modality Check
                            if (['rajju', 'musala', 'nala'].includes(subtype)) {
                                let isAllMovable = true;
                                let isAllFixed = true;
                                let isAllDual = true;

                                physicalPlanets.forEach(p => {
                                    let mod = p.sign % 3; // 0: Movable (1,4,7,10), 1: Fixed (2,5,8,11), 2: Dual (3,6,9,12)
                                    if (mod !== 0) isAllMovable = false;
                                    if (mod !== 1) isAllFixed = false;
                                    if (mod !== 2) isAllDual = false;
                                });

                                if (subtype === 'rajju' && isAllMovable) {
                                    isMatch = true;
                                    matchedConditions.push({ ...cond });
                                } else if (subtype === 'musala' && isAllFixed) {
                                    isMatch = true;
                                    matchedConditions.push({ ...cond });
                                } else if (subtype === 'nala' && isAllDual) {
                                    isMatch = true;
                                    matchedConditions.push({ ...cond });
                                }
                            }

                            // Sankhya Yogas: Occupied Houses Count
                            if (subtype.startsWith('sankhya_')) {
                                let targetCount = parseInt(subtype.split('_')[1]);

                                let occupiedHouses = new Set();
                                physicalPlanets.forEach(p => occupiedHouses.add(p.house));

                                // In classical texts, Sankhya yogas only apply if NO OTHER Nabhasa yoga (like Akriti/Ashraya) applies.
                                // However, for simplicity and modularity, we just trigger the shape match.
                                if (occupiedHouses.size === targetCount) {
                                    isMatch = true;
                                    matchedConditions.push({ ...cond });
                                }
                            }
                        }
                    }
                    else if (cond.type === 'daridra_yoga') {`;

content = content.replace(insertionPoint, newCode);
fs.writeFileSync(filepath, content);
console.log('Nabhasa Yoga scanner logic added.');
