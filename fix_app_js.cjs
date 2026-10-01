const fs = require('fs');

let appCode = fs.readFileSync('kundali-engine/app.js', 'utf8');
appCode = appCode.replace(
    /innerHTML = `Lagna \\(Ascendant\\): \$\{ascSignName\} \\(\$\{data\\.ascendant\\.toFixed\\(2\\)\\}°\\)`/g,
    'innerHTML = `लग्न (Ascendant): ${ascSignName} (${data.ascendant.toFixed(2)}°)`'
);
appCode = appCode.replace(
    /innerHTML = `Tithi: \$\{data\\.tithi\\.name\} \\(\\$\\{\\(data\\.tithi\\.percentage \\* 100\\)\\.toFixed\\(1\\)\\}% complete\\)`/g,
    'innerHTML = `तिथि: ${data.tithi.name} (${(data.tithi.percentage * 100).toFixed(1)}% पूर्ण)`'
);

fs.writeFileSync('kundali-engine/app.js', appCode);
