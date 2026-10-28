const fs = require('fs');
let content = fs.readFileSync('kundali-engine/yoga-detector.js', 'utf8');

// The issue might be `p.name` vs `pName` in yogakarakaCheck.
// Also `matches++` might be hitting but we need to debug. Let's add console logs directly into the scanner.
const debugCode = `
                            // Special case: Single planet ruling both Kendra and Trikona
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
                                // wait, pMap objects have \`name\` inside? Yes, but maybe it's missing in my mock?
                                p.name = p.name || pName; // Ensure name exists
                                if (yogakarakaCheck(p) && [1,4,5,7,9,10].includes(p.house)) {
                                    if (isPowerless(p)) cancelledMatches++;
                                    else matches++;
                                }
                            }
`;

content = content.replace(/\/\/ Special case: Single planet ruling both Kendra and Trikona[\s\S]*?\/\/ console\.log\("KT matches:", matches, "cancelled:", cancelledMatches\);/, debugCode);
fs.writeFileSync('kundali-engine/yoga-detector.js', content);
