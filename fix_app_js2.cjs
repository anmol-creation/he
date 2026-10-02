const fs = require('fs');
let appCode = fs.readFileSync('kundali-engine/app.js', 'utf8');

appCode = appCode.replace(
    /output \+= `Tithi \(Lunar Day\): \$\{data\.tithi\.name\} \(\$\{\(data\.tithi\.percentage \* 100\)\.toFixed\(2\)\}% complete\)\\n\\n`;/g,
    'output += `तिथि (Tithi): ${data.tithi.name} (${(data.tithi.percentage * 100).toFixed(2)}% पूर्ण)\\n\\n`;'
);

appCode = appCode.replace(
    /output \+= `ASCENDANT \(LAGNA\): \$\{signNames\[ascSign\]\} \(\$\{ascDegree\.toFixed\(2\)\}°\)\\n\\n`;/g,
    'output += `लग्न (Ascendant): ${signNames[ascSign]} (${ascDegree.toFixed(2)}°)\\n\\n`;'
);

appCode = appCode.replace(
    /output \+= `PLANETARY POSITIONS \(Lahiri Ayanamsa\):\\n`;/g,
    'output += `ग्रह स्थिति (Planetary Positions - Lahiri Ayanamsa):\\n`;'
);

appCode = appCode.replace(
    /output \+= `Planet\s+\| Sign\s+\| Degree\s+\| Speed \/ State\\n`;/g,
    'output += `ग्रह (Planet)   | राशि (Sign)       | अंश (Degree)| अवस्था (State)\\n`;'
);

fs.writeFileSync('kundali-engine/app.js', appCode);
