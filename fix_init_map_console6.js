const fs = require('fs');
let js = fs.readFileSync('js/historic-map.js', 'utf8');

js = js.replace('let translateX = 0;', 'let translateX = -4500;'); // X was calculated as ~5000 for root
fs.writeFileSync('js/historic-map.js', js);
