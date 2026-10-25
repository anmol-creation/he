const fs = require('fs');
const file = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(file, 'utf8');

const search = `                    if (primaryPlanet !== 'Jupiter' && pMap['Jupiter'] && pMap['Jupiter'].aspects.includes(p.house)) {
                        powerMultiplier++;
                        mahapurushLabels.push("👁️ गुरु की अमृत दृष्टि");
                    }`;

const replace = `                    if (primaryPlanet !== 'Jupiter' && pMap['Jupiter'] && pMap['Jupiter'].aspects.includes(p.house)) {
                        let jupiter = pMap['Jupiter'];
                        // 1. If Jupiter is Combust (Asta), his aspect is blind/powerless.
                        if (!jupiter.isCombust) {
                            // 2. If Jupiter is Debilitated (Neecha), he gives strict/harsh saving aspect.
                            if (jupiter.dignity === 'Neecha') {
                                powerMultiplier++;
                                mahapurushLabels.push("👁️ गुरु की कठोर दृष्टि (Neecha)");
                            }
                            // 3. If Jupiter is Exalted, Vargottam, Swarashi, or Mooltrikona, his aspect is a massive Shield (+2 Power).
                            else if (jupiter.dignity === 'Uccha' || jupiter.dignity === 'Swarashi' || jupiter.dignity === 'Mooltrikona' || jupiter.isVargottam) {
                                powerMultiplier += 2;
                                mahapurushLabels.push("🛡️ गुरु की सुपर-अमृत दृष्टि");
                            }
                            // 4. Default aspect
                            else {
                                powerMultiplier++;
                                mahapurushLabels.push("👁️ गुरु की अमृत दृष्टि");
                            }
                        }
                    }`;

content = content.replace(search, replace);
fs.writeFileSync(file, content);
console.log("Patched Guru Drishti logic.");
