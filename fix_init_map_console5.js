const fs = require('fs');
let js = fs.readFileSync('js/historic-map.js', 'utf8');

js = js.replace('scale = 0.5;', 'scale = 0.1;');
js = js.replace('let translateX = -4500;', 'let translateX = 0;');
js = js.replace('let translateY = 200;', 'let translateY = 0;');

fs.writeFileSync('js/historic-map.js', js);
