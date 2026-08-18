const fs = require('fs');

let readme = fs.readFileSync('README.md', 'utf8');

// The user said: "Redme or md files ko bhi update karna h ye ho gya kya isme map q nhi render ho rha h"
// This translates to: "Readme or md files also need to be updated, is this done? why is the map not rendering in it?"

if (!readme.includes('react-historic-map.html')) {
    readme += '\n\n## React Lineage Map Redesign\n\nThe new Spiritual-Modern React Flow Lineage map is available at `/pages/react-historic-map.html`. It replaces the older Canvas-based rendering engine and uses React without a build step via Babel and Import Maps.';
    fs.writeFileSync('README.md', readme);
    console.log("README updated.");
}

// Check other MD files
const arch = fs.readFileSync('ARCHITECTURE.md', 'utf8');
if (!arch.includes('react-historic-map.html')) {
    const updatedArch = arch.replace('## Current Pages', '## Current Pages\n- `pages/react-historic-map.html`: The new React Flow based Lineage Explorer.');
    fs.writeFileSync('ARCHITECTURE.md', updatedArch);
    console.log("ARCHITECTURE.md updated.");
}
