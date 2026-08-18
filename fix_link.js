const fs = require('fs');

// In pages/itihas-puran.html, the user has a banner linking to the old historic map.
// We should update it to point to react-historic-map.html.

let itihasPuran = fs.readFileSync('pages/itihas-puran.html', 'utf8');
itihasPuran = itihasPuran.replace('href="historic-map.html"', 'href="react-historic-map.html"');
fs.writeFileSync('pages/itihas-puran.html', itihasPuran);

console.log("Updated link in pages/itihas-puran.html");
