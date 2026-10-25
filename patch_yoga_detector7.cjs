const fs = require('fs');
const file = 'kundali-engine/yoga-detector.js';
let content = fs.readFileSync(file, 'utf8');

// I need to add an avastha calculator function and then use it in the Rajyoga evaluation block.
const avasthaFunc = `
function getAvasthaAndPower(sign, degree) {
    const isOdd = sign % 2 === 0; // Aries=0 (Odd), Taurus=1 (Even). Oh wait, 0 is Aries (1st sign). So if sign % 2 === 0, it's an Odd sign in Vedic numbering (1, 3, 5).
    // Let's be explicit:
    // Aries(0), Gemini(2), Leo(4), Libra(6), Sagittarius(8), Aquarius(10) are ODD signs.
    const oddSign = (sign % 2 === 0);

    if (oddSign) {
        if (degree <= 6) return { name: "बाल अवस्था (Infant)", power: 25 };
        if (degree <= 12) return { name: "कुमार अवस्था (Adolescent)", power: 50 };
        if (degree <= 18) return { name: "युवा अवस्था (Youth)", power: 100 };
        if (degree <= 24) return { name: "वृद्ध अवस्था (Old)", power: 10 };
        return { name: "मृत अवस्था (Dead)", power: 0 };
    } else {
        if (degree <= 6) return { name: "मृत अवस्था (Dead)", power: 0 };
        if (degree <= 12) return { name: "वृद्ध अवस्था (Old)", power: 10 };
        if (degree <= 18) return { name: "युवा अवस्था (Youth)", power: 100 };
        if (degree <= 24) return { name: "कुमार अवस्था (Adolescent)", power: 50 };
        return { name: "बाल अवस्था (Infant)", power: 25 };
    }
}
`;

// Insert the function at the top
content = content.replace("const RASHI_LORDS = {", avasthaFunc + "\nconst RASHI_LORDS = {");

// Now update the Mahapurush labels logic
const search = `                    if (primaryPlanet !== 'Jupiter' && pMap['Jupiter'] && pMap['Jupiter'].aspects.includes(p.house)) {
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
                    }

                    finalName = \`\${rule.name} (\${powerMultiplier}x Power)\`;
                    finalScore = baseScore * powerMultiplier;

                    const debSigns = { 'Sun': 6, 'Moon': 7, 'Mars': 3, 'Mercury': 11, 'Jupiter': 9, 'Venus': 5, 'Saturn': 0 };
                    if (p.d9Sign === debSigns[primaryPlanet]) {
                        mahapurushLabels.push("⚠️ Hollow Empire (D-9 Neecha)");
                    }`;

const replace = `                    if (primaryPlanet !== 'Jupiter' && pMap['Jupiter'] && pMap['Jupiter'].aspects.includes(p.house)) {
                        let jupiter = pMap['Jupiter'];
                        if (!jupiter.isCombust) {
                            if (jupiter.dignity === 'Neecha') {
                                powerMultiplier++;
                                mahapurushLabels.push("👁️ गुरु की कठोर दृष्टि (Neecha)");
                            } else if (jupiter.dignity === 'Uccha' || jupiter.dignity === 'Swarashi' || jupiter.dignity === 'Mooltrikona' || jupiter.isVargottam) {
                                powerMultiplier += 2;
                                mahapurushLabels.push("🛡️ गुरु की सुपर-अमृत दृष्टि");
                            } else {
                                powerMultiplier++;
                                mahapurushLabels.push("👁️ गुरु की अमृत दृष्टि");
                            }
                        }
                    }

                    // Lagnesh (CEO) Strength Check
                    const lagneshKey = houseLords[1];
                    const lagneshData = pMap[lagneshKey];
                    if (lagneshData) {
                        if (lagneshData.dignity === 'Neecha' || lagneshData.isCombust || [6, 8, 12].includes(lagneshData.house)) {
                            mahapurushLabels.push("⚠️ CEO Weak (Hard to Sustain Empire)");
                            // Drastically reduce effective score if CEO is dying
                            powerMultiplier = Math.max(1, powerMultiplier - 2);
                        }
                    }

                    // Avastha / Battery Check
                    const avastha = getAvasthaAndPower(p.sign, p.degreeInSign);
                    mahapurushLabels.push(\`🔋 \${avastha.name} (\${avastha.power}% Power)\`);

                    // Multiply score by the battery percentage (so a dead planet gives 0 score logically, but we keep a base so it shows up)
                    finalName = \`\${rule.name} (\${powerMultiplier}x Power)\`;
                    finalScore = (baseScore * powerMultiplier) * (avastha.power > 0 ? (avastha.power / 100) : 0.1);

                    const debSigns = { 'Sun': 6, 'Moon': 7, 'Mars': 3, 'Mercury': 11, 'Jupiter': 9, 'Venus': 5, 'Saturn': 0 };
                    if (p.d9Sign === debSigns[primaryPlanet]) {
                        mahapurushLabels.push("⚠️ Hollow Empire (D-9 Neecha)");
                    }`;

content = content.replace(search, replace);
fs.writeFileSync(file, content);
console.log("Patched avastha and CEO logic");
