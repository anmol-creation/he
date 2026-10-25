export const vishnuBaseData = [
    // Wives of Vishnu
    // Note: Lakshmi is now defined in supreme.js at the Mahakalp level.
    { id: 'lakshmi', name: 'लक्ष्मी', subtitle: 'धन/समृद्धि की देवी', spouseOf: 'vishnu', yug: 'mahakalp', timeScale: 'mahakalp', clusterName: 'विष्णु की पत्नियाँ' },
    { id: 'bhoodevi', name: 'भूदेवी', subtitle: 'पृथ्वी की देवी', spouseOf: 'vishnu', yug: 'mahakalp', timeScale: 'mahakalp', clusterName: 'विष्णु की पत्नियाँ' },
    { id: 'nila_devi', name: 'नीला देवी', subtitle: 'विष्णु की तीसरी पत्नी (दक्षिण परंपरा)', spouseOf: 'vishnu', yug: 'mahakalp', timeScale: 'mahakalp', clusterName: 'विष्णु की पत्नियाँ' },

    // Example Padma Kalpa Data
    { id: 'madhu_asura', name: 'मधु (असुर)', subtitle: 'विष्णु के कर्णमल से उत्पन्न', gender: 'male', parent: 'vishnu', yug: 'pre-kalpa', kalpa: 'padma', parichay: 'सृष्टि के आरंभ में भगवान विष्णु के कानों के मैल से कैटभ के साथ उत्पन्न हुआ आदि-दैत्य।' },
    { id: 'kaitabha_asura', name: 'कैटभ (असुर)', subtitle: 'विष्णु के कर्णमल से उत्पन्न', gender: 'male', parent: 'vishnu', yug: 'pre-kalpa', kalpa: 'padma', parichay: 'सृष्टि के आरंभ में भगवान विष्णु के कानों के मैल से मधु के साथ उत्पन्न हुआ आदि-दैत्य।' },
    { id: 'dhundhu_asura', name: 'धुन्धु (असुर)', subtitle: 'मधु-कैटभ का पुत्र', gender: 'male', parent: 'madhu_asura', yug: 'treta', kalpa: 'padma', parichay: 'मधु और कैटभ का महाभयंकर पुत्र जो मरुभूमि के नीचे छिपकर रहता था। सूर्यवंशी राजा कुवलयाश्व ने अपने 21,000 पुत्रों की सहायता से इसका वध किया था।' },

    // Female Avatar
    { id: 'mohini', name: 'मोहिनी', subtitle: 'विष्णु का स्त्री अवतार', parent: 'vishnu', yug: 'pre-kalpa' },

    // Direct Sons / Forms (Ayyappan is son of Shiva and Mohini)
    { id: 'ayyappan', name: 'अय्यप्पन', subtitle: 'हरिहरपुत्र', parent: 'shiva', mother: 'mohini', yug: 'pre-kalpa' },

];
