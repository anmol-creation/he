const fs = require('fs');
const file = 'kundali-engine/app.js';
let content = fs.readFileSync(file, 'utf8');

// 1. apply quick save calculate click
const searchQ = `document.getElementById('quickSave').addEventListener('change', (e) => {
    const val = e.target.value;
    if (quickSavePresets[val]) {
        document.getElementById('name').value = quickSavePresets[val].name;
        document.getElementById('dob').value = quickSavePresets[val].dob;
        document.getElementById('time').value = quickSavePresets[val].time;
        document.getElementById('city').value = quickSavePresets[val].city;
    }
});`;
const replaceQ = `document.getElementById('quickSave').addEventListener('change', (e) => {
    const val = e.target.value;
    if (quickSavePresets[val]) {
        document.getElementById('name').value = quickSavePresets[val].name;
        document.getElementById('dob').value = quickSavePresets[val].dob;
        document.getElementById('time').value = quickSavePresets[val].time;
        document.getElementById('city').value = quickSavePresets[val].city;

        // Auto-trigger calculation after a short delay
        setTimeout(() => {
            document.getElementById('calculateBtn').click();
        }, 100);
    }
});`;
content = content.replace(searchQ, replaceQ);

// 2. add labels rendering
const searchL = `<h3 class="yoga-title" style="\${titleStyle}">
                                \${yoga.name}
                                \${badgeHTML}
                            </h3>`;
const replaceL = `<h3 class="yoga-title" style="\${titleStyle}; display:flex; flex-direction:column; gap:0.5rem; align-items:flex-start;">
                                <div>
                                    \${yoga.name}
                                    \${badgeHTML}
                                </div>
                                \${yoga.labels && yoga.labels.length > 0 ?
                                    '<div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:0.2rem;">' +
                                    yoga.labels.map(l => \`<span style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.3); padding: 0.1rem 0.5rem; border-radius: 4px; font-size:0.75rem; color: #fff;">\${l}</span>\`).join('') +
                                    '</div>' : ''}
                            </h3>`;
content = content.replace(searchL, replaceL);
fs.writeFileSync(file, content);
