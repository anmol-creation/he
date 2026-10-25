const fs = require('fs');
const file = 'kundali-engine/app.js';
let content = fs.readFileSync(file, 'utf8');

const search = `            }

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
            \`;`;

const replace = `            }

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
            \`;`;
if(content.includes(search)) {
    content = content.replace(search, replace);
} else {
    console.log("NOT FOUND");
}
fs.writeFileSync(file, content);
