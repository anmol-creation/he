const fs = require('fs');
let js = fs.readFileSync('js/historic-map.js', 'utf8');

js = js.replace('let translateX = -4500;', 'let translateX = -4500;');
js = js.replace('let translateY = 1500;', 'let translateY = 500;'); // Adjust Y because our nodes start at Y=0 now, not -1000

fs.writeFileSync('js/historic-map.js', js);
