const fs = require('fs');
const file = 'js/data/historic-map-data/brahma/suryavansh/core.js';
let data = fs.readFileSync(file, 'utf8');

// Find shraddha node and update it
const shraddhaRegex = /id:\s*'shraddha_manu_wife'[\s\S]*?parent:\s*'',/;
data = data.replace(shraddhaRegex, "id: 'shraddha_manu_wife',\n        name: 'श्रद्धा',\n        subtitle: 'मनु पत्नी',\n        parent: 'kashyapa_rishi',");

fs.writeFileSync(file, data);
