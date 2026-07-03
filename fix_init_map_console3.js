const fs = require('fs');
let js = fs.readFileSync('js/historic-map.js', 'utf8');

js = js.replace('scale = 1;', 'scale = 0.5;'); // Zoom out to see where the nodes are
fs.writeFileSync('js/historic-map.js', js);
