const fs = require('fs');
const file = 'kundali-engine/app.js';
let content = fs.readFileSync(file, 'utf8');

const search = `        // 1. Lagnesh (CEO) Anchor
        if (data.ceoStatus) {
            const ceo = data.ceoStatus;
            const isHi = currentLang === 'hi';

            let dignityText = ceo.dignity;
            if (isHi) {
                const digMap = { 'Vargottam': 'वर्गोत्तम', 'Uccha': 'उच्च', 'Mooltrikona': 'मूलत्रिकोण', 'Swarashi': 'स्वराशि', 'Friendly': 'मित्र', 'Neutral': 'सम', 'Enemy': 'शत्रु', 'Combust': 'अस्त', 'Neecha': 'नीच' };
                dignityText = digMap[ceo.dignity] || ceo.dignity;
            }

            // Determine Brutal Reality text based on placement
            let brutalText = "";
            let brutalTextHi = "";
            let ceoColor = "var(--vault-text)";

            // Kendra/Trikona (Good)
            if ([1, 4, 5, 7, 9, 10].includes(ceo.house)) {
                brutalText = \`The CEO (\${ceo.key}) is placed in a strong foundation house (\${ceo.house}). It has the capacity to execute ideas, provided you put in the work.\`;
                brutalTextHi = \`लग्नेश (\${ceo.key}) मजबूत भाव (\${ceo.house}) में है। इसमें विचारों को क्रियान्वित करने की क्षमता है, बशर्ते आप मेहनत करें।\`;
                ceoColor = "var(--vault-accent)";
            }
            // Trik Houses (Struggle)
            else if ([6, 8, 12].includes(ceo.house)) {
                brutalText = \`The CEO (\${ceo.key}) is struggling in the \${ceo.house}th house. The foundation is weak. Any Rajyogas in the chart will require 3x more hustle to manifest because you have to fix the foundation first. Stop relying on luck.\`;
                brutalTextHi = \`लग्नेश (\${ceo.key}) संघर्षपूर्ण \${ceo.house}वें भाव में है। नींव कमजोर है। कुंडली में कोई भी राजयोग फलीभूत होने के लिए 3 गुना अधिक संघर्ष मांगेगा, क्योंकि आपको पहले अपनी नींव ठीक करनी होगी। भाग्य पर निर्भर रहना छोड़ दें।\`;
                ceoColor = "#cc3333";
            }
            // Others (2, 3, 11)
            else {
                brutalText = \`The CEO (\${ceo.key}) is in the \${ceo.house}th house. Focus is directed heavily towards wealth, network, or daily grind. Effort equals reward.\`;
                brutalTextHi = \`लग्नेश (\${ceo.key}) \${ceo.house}वें भाव में है। आपका ध्यान धन, नेटवर्क या दैनिक संघर्ष की ओर है। प्रयास से ही फल मिलेगा।\`;
                ceoColor = "#ffcc00";
            }

            // Adjust for dignity
            if (ceo.dignity === 'Neecha' || ceo.dignity === 'Enemy' || ceo.isCombust) {
                brutalText += \` However, the CEO is currently weak (\${dignityText}). Confidence and execution power are fundamentally compromised.\`;
                brutalTextHi += \` हालाँकि, लग्नेश वर्तमान में कमजोर (\${dignityText}) है। आत्मविश्वास और कार्य क्षमता मूल रूप से प्रभावित है.\`;
                ceoColor = "#cc3333";
            } else if (ceo.dignity === 'Uccha' || ceo.dignity === 'Swarashi' || ceo.dignity === 'Mooltrikona') {
                brutalText += \` The CEO is in a powerful state (\${dignityText}), granting strong willpower and self-reliance.\`;
                brutalTextHi += \` लग्नेश शक्तिशाली अवस्था (\${dignityText}) में है, जो दृढ़ इच्छाशक्ति और आत्मनिर्भरता प्रदान करता है।\`;
            }

            const pName = isHi ? ceo.name.split(' (')[0] : ceo.name;

            outputHTML += \`
                <div style="background: rgba(0, 0, 0, 0.5); border: 1px solid \${ceoColor}; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
                    <h3 style="color: \${ceoColor}; font-family: 'EB Garamond', serif; margin-top: 0; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.8rem; font-size: 1.5rem;">
                        <i class="fa-solid fa-chess-king"></i> Anchor 1: Lagnesh (The CEO)
                    </h3>
                    <div style="margin-bottom: 1rem;">
                        <span style="font-weight: bold; color: var(--vault-text);">\${pName}</span> - \${isHi ? 'भाव' : 'House'}: \${ceo.house} | \${dignityText}
                    </div>
                    <div style="color: var(--vault-text-muted); line-height: 1.6; font-style: italic;">
                        "\${isHi ? brutalTextHi : brutalText}"
                    </div>
                </div>
            \`;
        }`;

const replace = `        // 1. Lagnesh (CEO) Anchor
        if (data.ceoStatus) {
            const ceo = data.ceoStatus;
            const isHi = currentLang === 'hi';

            let dignityText = ceo.dignity;
            if (isHi) {
                const digMap = { 'Vargottam': 'वर्गोत्तम', 'Uccha': 'उच्च', 'Mooltrikona': 'मूलत्रिकोण', 'Swarashi': 'स्वराशि', 'Friendly': 'मित्र', 'Neutral': 'सम', 'Enemy': 'शत्रु', 'Combust': 'अस्त', 'Neecha': 'नीच' };
                dignityText = digMap[ceo.dignity] || ceo.dignity;
            }

            // Determine Brutal Reality text based on placement
            let brutalText = "";
            let brutalTextHi = "";
            let ceoColor = "var(--vault-text)";

            // Kendra/Trikona (Good)
            if ([1, 4, 5, 7, 9, 10].includes(ceo.house)) {
                brutalText = \`The CEO (\${ceo.key}) is placed in a strong foundation house (\${ceo.house}). It has the capacity to execute ideas, provided you put in the work.\`;
                brutalTextHi = \`लग्नेश (\${ceo.key}) मजबूत भाव (\${ceo.house}) में है। इसमें विचारों को क्रियान्वित करने की क्षमता है, बशर्ते आप मेहनत करें।\`;
                ceoColor = "var(--vault-accent)";
            }
            // Trik Houses (Struggle)
            else if ([6, 8, 12].includes(ceo.house)) {
                brutalText = \`The CEO (\${ceo.key}) is struggling in the \${ceo.house}th house. The foundation is weak. Any Rajyogas in the chart will require 3x more hustle to manifest because you have to fix the foundation first. Stop relying on luck.\`;
                brutalTextHi = \`लग्नेश (\${ceo.key}) संघर्षपूर्ण \${ceo.house}वें भाव में है। नींव कमजोर है। कुंडली में कोई भी राजयोग फलीभूत होने के लिए 3 गुना अधिक संघर्ष मांगेगा, क्योंकि आपको पहले अपनी नींव ठीक करनी होगी। भाग्य पर निर्भर रहना छोड़ दें।\`;
                ceoColor = "#cc3333";
            }
            // Others (2, 3, 11)
            else {
                brutalText = \`The CEO (\${ceo.key}) is in the \${ceo.house}th house. Focus is directed heavily towards wealth, network, or daily grind. Effort equals reward.\`;
                brutalTextHi = \`लग्नेश (\${ceo.key}) \${ceo.house}वें भाव में है। आपका ध्यान धन, नेटवर्क या दैनिक संघर्ष की ओर है। प्रयास से ही फल मिलेगा।\`;
                ceoColor = "#ffcc00";
            }

            const pName = isHi ? ceo.name.split(' (')[0] : ceo.name;

            let condHTML = '';
            if (ceo.conditions && ceo.conditions.length > 0) {
                ceo.conditions.forEach(cond => {
                    let color = cond.type === 'danger' ? '#ef4444' : cond.type === 'success' ? '#22c55e' : cond.type === 'warning' ? '#f59e0b' : '#3b82f6';
                    let icon = cond.type === 'danger' ? 'fa-skull' : cond.type === 'success' ? 'fa-shield-halved' : cond.type === 'warning' ? 'fa-radiation' : 'fa-info-circle';
                    condHTML += \`<div style="margin-top: 0.5rem; padding: 0.5rem; background: rgba(255,255,255,0.05); border-left: 3px solid \${color}; color: \${color}; font-size: 0.9rem;">
                        <i class="fa-solid \${icon}" style="margin-right: 0.4rem;"></i> \${cond.text}
                    </div>\`;
                });
            }

            outputHTML += \`
                <div style="background: rgba(0, 0, 0, 0.5); border: 1px solid \${ceoColor}; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
                    <h3 style="color: \${ceoColor}; font-family: 'EB Garamond', serif; margin-top: 0; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.8rem; font-size: 1.5rem;">
                        <i class="fa-solid fa-chess-king"></i> Anchor 1: Lagnesh (The CEO)
                    </h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; margin-bottom: 1rem;">
                        <span style="font-weight: bold; color: var(--vault-text); font-size: 1.1rem;">\${pName}</span>
                        <span style="background: rgba(255,255,255,0.1); padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.85rem;">\${isHi ? 'भाव' : 'House'}: \${ceo.house}</span>
                        <span style="background: rgba(255,255,255,0.1); padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.85rem;">\${dignityText}</span>
                        \${ceo.avastha ? \`<span style="background: rgba(255,255,255,0.1); padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.85rem;">🔋 \${ceo.avastha.name} - \${ceo.avastha.power}%</span>\` : ''}
                    </div>
                    <div style="color: var(--vault-text-muted); line-height: 1.6; font-style: italic; margin-bottom: 1rem;">
                        "\${isHi ? brutalTextHi : brutalText}"
                    </div>
                    \${condHTML}
                </div>
            \`;
        }`;

content = content.replace(search, replace);
fs.writeFileSync(file, content);
console.log("Patched app.js CEO logic");
