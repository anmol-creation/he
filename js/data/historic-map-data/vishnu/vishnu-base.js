export const vishnuBaseData = [
    // Wives of Vishnu
    // Note: Lakshmi is now defined in supreme.js at the Mahakalp level.
    { id: 'lakshmi', name: 'लक्ष्मी', subtitle: 'धन/समृद्धि की देवी', spouseOf: 'vishnu', yug: 'mahakalp', timeScale: 'mahakalp', clusterName: 'विष्णु की पत्नियाँ' },
    { id: 'bhoodevi', name: 'भूदेवी', subtitle: 'पृथ्वी की देवी', spouseOf: 'vishnu', yug: 'mahakalp', timeScale: 'mahakalp', clusterName: 'विष्णु की पत्नियाँ' },
    { id: 'nila_devi', name: 'नीला देवी', subtitle: 'विष्णु की तीसरी पत्नी (दक्षिण परंपरा)', spouseOf: 'vishnu', yug: 'mahakalp', timeScale: 'mahakalp', clusterName: 'विष्णु की पत्नियाँ' },

    // Example Padma Kalpa Data
    { id: 'madhu_asura', name: 'मधु (असुर)', subtitle: 'विष्णु के कर्णमल से उत्पन्न', parent: 'vishnu', yug: 'pre-kalpa', kalpa: 'padma' },
    { id: 'kaitabha_asura', name: 'कैटभ (असुर)', subtitle: 'विष्णु के कर्णमल से उत्पन्न', parent: 'vishnu', yug: 'pre-kalpa', kalpa: 'padma' },
    { id: 'hayagriva_danava', name: 'हयग्रीव (दानव)', subtitle: 'पद्म कल्प का असुर', parent: 'brahma', yug: 'pre-kalpa', kalpa: 'padma' },

    // Female Avatar
    { id: 'mohini', name: 'मोहिनी', subtitle: 'विष्णु का स्त्री अवतार', parent: 'vishnu', yug: 'satya' },

    // Direct Sons / Forms (Ayyappan is son of Shiva and Mohini)
    { id: 'ayyappan', name: 'अय्यप्पन', subtitle: 'हरिहरपुत्र', parent: 'shiva', mother: 'mohini', yug: 'pre-kalpa' },
    { id: 'kama_pradyumna', name: 'कामदेव / प्रद्युम्न', subtitle: 'विष्णु/कृष्ण पुत्र', parent: 'vishnu', mother: 'lakshmi', yug: 'pre-kalpa', parichay: 'विष्णु और लक्ष्मी के पुत्र रूप में कामदेव। (द्वापर में यही प्रद्युम्न बने)।' },

    // Dashavatara (The 10 Primary Avatars)
    { id: 'matsya_avatar', name: 'मत्स्य', subtitle: 'प्रथम अवतार (मछली)', parent: 'vishnu', yug: 'satya' },
    { id: 'kurma_avatar', name: 'कूर्म', subtitle: 'द्वितीय अवतार (कछुआ)', parent: 'vishnu', yug: 'satya' },
    { id: 'varaha_avatar', name: 'वराह', subtitle: 'तृतीय अवतार (सूअर)', parent: 'vishnu', yug: 'satya' },
    { id: 'narasimha_avatar', name: 'नरसिंह', subtitle: 'चतुर्थ अवतार', parent: 'vishnu', yug: 'satya' },
    { id: 'vamana_avatar', name: 'वामन', subtitle: 'पंचम अवतार', parent: 'vishnu', yug: 'treta' },
    { id: 'parashurama_avatar', name: 'परशुराम', subtitle: 'षष्ठ अवतार', parent: 'vishnu', yug: 'treta' },
    { id: 'rama_avatar', name: 'राम', subtitle: 'सप्तम अवतार', parent: 'vishnu', yug: 'treta' },
    { id: 'krishna_avatar', name: 'कृष्ण', subtitle: 'अष्टम अवतार', parent: 'vishnu', yug: 'dwapar' },
    { id: 'buddha_avatar', name: 'बुद्ध', subtitle: 'नवम अवतार', parent: 'vishnu', yug: 'kali' },
    { id: 'kalki_avatar', name: 'कल्कि', subtitle: 'दशम अवतार (भविष्य)', parent: 'vishnu', yug: 'kali' },
];
