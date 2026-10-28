const fs = require('fs');

const solarYogas = [
    {
        id: "solar_budhaditya",
        name: "बुधादित्य राजयोग (Budhaditya Yoga)",
        type: "राजयोग",
        description: "सूर्य और बुध की युति। यह व्यक्ति को अत्यंत कुशाग्र बुद्धि, राजा का सलाहकार, टॉप का मैनेजमेंट स्किल, और पढ़ाई/करियर में भयंकर सफलता देता है।",
        combinations: [{ type: "solar_yoga", subtype: "budhaditya" }],
        cancellations: [],
        score: 30,
        frequency_multiplier: 1
    },
    {
        id: "solar_vesi",
        name: "वेशि योग (Vesi Yoga)",
        type: "राजयोग",
        description: "सूर्य से दूसरे भाव में ग्रहों का होना (चंद्र/राहु/केतु को छोड़कर)। व्यक्ति साहसी, सच्चा और अपनी मेहनत से असीम धन और संपत्ति बनाने वाला होता है।",
        combinations: [{ type: "solar_yoga", subtype: "vesi" }],
        cancellations: [],
        score: 25,
        frequency_multiplier: 1
    },
    {
        id: "solar_vosi",
        name: "वाशि योग (Vosi Yoga)",
        type: "राजयोग",
        description: "सूर्य से 12वें भाव में ग्रहों का होना (चंद्र/राहु/केतु को छोड़कर)। व्यक्ति आकर्षक, दयालु, और विदेशी मामलों/संगठनों से राजा के समान लाभ कमाने वाला होता है।",
        combinations: [{ type: "solar_yoga", subtype: "vosi" }],
        cancellations: [],
        score: 25,
        frequency_multiplier: 1
    },
    {
        id: "solar_ubhayachari",
        name: "उभयचारी योग (Ubhayachari Yoga)",
        type: "राजयोग",
        description: "सूर्य के दोनों तरफ (2nd और 12th भाव में) ग्रहों का होना। अत्यंत भाग्यशाली, प्रशासन/लीडरशिप में शिखर पर बैठने वाला और अपार संपत्ति व सेवकों वाला।",
        combinations: [{ type: "solar_yoga", subtype: "ubhayachari" }],
        cancellations: [],
        score: 40,
        frequency_multiplier: 1
    }
];

fs.writeFileSync('kundali-engine/data/rules/solar_yogas.json', JSON.stringify(solarYogas, null, 2));
console.log('solar_yogas.json generated successfully.');
