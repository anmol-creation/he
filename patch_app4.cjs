const fs = require('fs');
const file = 'kundali-engine/app.js';
let content = fs.readFileSync(file, 'utf8');

// I need to update app.js to render these labels nicely in the UI.
const search = `<h3 class="yoga-title">
                                \${yoga.name}
                                <span class="yoga-badge">\${yoga.type}</span>
                            </h3>`;

const replace = `<h3 class="yoga-title" style="display:flex; flex-direction:column; gap:0.5rem; align-items:flex-start;">
                                <div>
                                    \${yoga.name}
                                    <span class="yoga-badge">\${yoga.type}</span>
                                </div>
                                \${yoga.labels && yoga.labels.length > 0 ?
                                    '<div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:0.2rem;">' +
                                    yoga.labels.map(l => \`<span style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.3); padding: 0.1rem 0.5rem; border-radius: 4px; font-size:0.75rem;">\${l}</span>\`).join('') +
                                    '</div>' : ''}
                            </h3>`;

content = content.replace(search, replace);
fs.writeFileSync(file, content);
console.log("App labels patched.");
