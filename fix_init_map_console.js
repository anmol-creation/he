const fs = require('fs');
let js = fs.readFileSync('js/historic-map.js', 'utf8');

js = js.replace('let translateX = -4500;', 'let translateX = -4500;');
js = js.replace('let translateY = 500;', 'let translateY = 50;'); // Try 50

fs.writeFileSync('js/historic-map.js', js);
