const fs = require('fs');
let js = fs.readFileSync('js/historic-map.js', 'utf8');

js = js.replace("let translateY = 200;", "let translateY = 200;\nconsole.log('INIT SCRIPT');");
js = js.replace("console.log('Running LayoutEngine');", "console.log('Running LayoutEngine');\nconsole.log(window.HistoricDB.getAll()[0]);");
fs.writeFileSync('js/historic-map.js', js);
