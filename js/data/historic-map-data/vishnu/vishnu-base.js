export const vishnuBaseData = [
    // Wives of Vishnu
    // Note: Lakshmi is now defined in supreme.js at the Mahakalp level.
    { id: 'lakshmi', name: 'लक्ष्मी', subtitle: 'धन/समृद्धि की देवी', spouseOf: 'vishnu', yug: 'mahakalp', timeScale: 'mahakalp', clusterName: 'विष्णु की पत्नियाँ' },
    { id: 'bhoodevi', name: 'भूदेवी', subtitle: 'पृथ्वी की देवी', spouseOf: 'vishnu', yug: 'mahakalp', timeScale: 'mahakalp', clusterName: 'विष्णु की पत्नियाँ' },
    { id: 'nila_devi', name: 'नीला देवी', subtitle: 'विष्णु की तीसरी पत्नी (दक्षिण परंपरा)', spouseOf: 'vishnu', yug: 'mahakalp', timeScale: 'mahakalp', clusterName: 'विष्णु की पत्नियाँ' },

    // Example Padma Kalpa Data
    { id: 'madhu_asura', name: 'मधु (असुर)', subtitle: 'विष्णु के कर्णमल से उत्पन्न', parent: 'vishnu', yug: 'pre-kalpa', kalpa: 'padma' },
    { id: 'kaitabha_asura', name: 'कैटभ (असुर)', subtitle: 'विष्णु के कर्णमल से उत्पन्न', parent: 'vishnu', yug: 'pre-kalpa', kalpa: 'padma' },

    // Female Avatar
    { id: 'mohini', name: 'मोहिनी', subtitle: 'विष्णु का स्त्री अवतार', parent: 'vishnu', yug: 'pre-kalpa' },

    // Direct Sons / Forms (Ayyappan is son of Shiva and Mohini)
    { id: 'ayyappan', name: 'अय्यप्पन', subtitle: 'हरिहरपुत्र', parent: 'shiva', mother: 'mohini', yug: 'pre-kalpa' },

];
