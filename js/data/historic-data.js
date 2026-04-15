// js/data/historic-data.js

// This file acts as the primary database index.
// In the future, this can be split into multiple files (suryavansh.js, chandravansh.js)
// and merged here if the dataset becomes too massive.

const historicData = [
    { id: 'brahma', name: 'ब्रह्मा', subtitle: 'सृष्टि रचयिता', x: 5000, y: 1000, color: '#FFD700', type: 'root', yug: 'satya' },

    // ==========================================
    // BRAHMA'S DIRECT DESCENDANTS (Satya Yug)
    // ==========================================

    // 1. Sanat Kumaras (Eternally young sages)
    { id: 'sanak', name: 'सनक', subtitle: 'सनत कुमार', x: 2000, y: 1500, color: '#FFFF99', parent: 'brahma', yug: 'satya' },
    { id: 'sanandan', name: 'सनन्दन', subtitle: 'सनत कुमार', x: 2200, y: 1500, color: '#FFFF99', parent: 'brahma', yug: 'satya' },
    { id: 'sanatan', name: 'सनातन', subtitle: 'सनत कुमार', x: 2400, y: 1500, color: '#FFFF99', parent: 'brahma', yug: 'satya' },
    { id: 'sanatkumar', name: 'सनत्कुमार', subtitle: 'सनत कुमार', x: 2600, y: 1500, color: '#FFFF99', parent: 'brahma', yug: 'satya' },

    // 2. Physical/Other Creations
    { id: 'rudra_shiva', name: 'रुद्र', subtitle: 'ब्रह्मा की भृकुटी से', x: 2900, y: 1500, color: '#FF3333', parent: 'brahma', yug: 'satya' },
    { id: 'narada', name: 'नारद', subtitle: 'मानस पुत्र / देवर्षि', x: 3100, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'kamadeva', name: 'कामदेव', subtitle: 'ब्रह्मा के हृदय से', x: 3300, y: 1500, color: '#FF66B2', parent: 'brahma', yug: 'satya' },
    { id: 'jambavan', name: 'जाम्बवान', subtitle: 'ब्रह्मा की जम्हाई से', x: 3500, y: 1500, color: '#A0522D', parent: 'brahma', yug: 'satya' },
    { id: 'chitragupta', name: 'चित्रगुप्त', subtitle: 'ब्रह्मा की काया से', x: 3700, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },

    // 3. Manas Putras (The Prajapatis & Sages)
    { id: 'marichi', name: 'मरीचि', subtitle: 'सप्तर्षि / मानस पुत्र', x: 2500, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'angiras', name: 'अंगिरस', subtitle: 'सप्तर्षि / मानस पुत्र', x: 3000, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'pulastya', name: 'पुलस्त्य', subtitle: 'सप्तर्षि / मानस पुत्र', x: 3500, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'pulaha', name: 'पुलह', subtitle: 'सप्तर्षि / मानस पुत्र', x: 4000, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'kratu', name: 'क्रतु', subtitle: 'सप्तर्षि / मानस पुत्र', x: 4500, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'bhrigu', name: 'भृगु', subtitle: 'मानस पुत्र', x: 5000, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'vashistha', name: 'वशिष्ठ', subtitle: 'सप्तर्षि / मानस पुत्र', x: 5500, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'atri', name: 'अत्रि', subtitle: 'सप्तर्षि / मानस पुत्र', x: 6100, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'daksha', name: 'दक्ष प्रजापति', subtitle: 'अंगूठे से उत्पन्न', x: 6700, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },

    // 4. The First Humans
    { id: 'svayambhuva_manu', name: 'स्वायंभुव मनु', subtitle: 'प्रथम पुरुष', x: 7500, y: 1500, color: '#FF9900', parent: 'brahma', yug: 'satya' },
    // Shatarupa is Manu's wife (and also created by Brahma, but we'll list her as spouse for layout)
    { id: 'shatarupa', name: 'शतरूपा', subtitle: 'प्रथम स्त्री', x: 0, y: 0, color: '#ff99cc', parent: 'brahma', spouseOf: 'svayambhuva_manu', yug: 'satya' },

    // ==========================================
    // MANU'S DESCENDANTS
    // ==========================================
    { id: 'uttanapada', name: 'उत्तानपाद', subtitle: 'मनु के पुत्र', x: 7400, y: 2000, color: '#FF9900', parent: 'svayambhuva_manu', yug: 'satya' },
    { id: 'priyavrata', name: 'प्रियव्रत', subtitle: 'मनु के पुत्र', x: 7700, y: 2000, color: '#FF9900', parent: 'svayambhuva_manu', yug: 'satya' },
    { id: 'dhruva', name: 'ध्रुव', subtitle: 'परम भक्त / ध्रुव तारा', x: 7400, y: 2500, color: '#FF9900', parent: 'uttanapada', yug: 'satya' },
    { id: 'vena', name: 'वेन', subtitle: 'अधर्मी राजा', x: 7400, y: 3000, color: '#FF9900', parent: 'dhruva', yug: 'satya' },
    { id: 'prithu', name: 'पृथु', subtitle: 'जिनके नाम पर पृथ्वी', x: 7400, y: 3500, color: '#FF9900', parent: 'vena', yug: 'satya' },

    // ==========================================
    // KASHYAP'S WIVES (Daughters of Daksha) AND DESCENDANTS
    // ==========================================
    { id: 'kashyap', name: 'कश्यप', subtitle: 'महान ऋषि', x: 2500, y: 2500, color: '#FFD700', parent: 'marichi', yug: 'satya' },

    // Wives of Kashyap
    { id: 'aditi', name: 'अदिति', subtitle: 'देवताओं की माता', x: 0, y: 0, color: '#ff99cc', parent: 'daksha', spouseOf: 'kashyap', yug: 'satya' },
    { id: 'diti', name: 'दिति', subtitle: 'दैत्यों की माता', x: 0, y: 0, color: '#ff99cc', parent: 'daksha', spouseOf: 'kashyap', yug: 'satya' },
    { id: 'kadru', name: 'कद्रू', subtitle: 'नागों की माता', x: 0, y: 0, color: '#ff99cc', parent: 'daksha', spouseOf: 'kashyap', yug: 'satya' },
    { id: 'vinata', name: 'विनता', subtitle: 'गरुड़ की माता', x: 0, y: 0, color: '#ff99cc', parent: 'daksha', spouseOf: 'kashyap', yug: 'satya' },
    { id: 'danu', name: 'दनु', subtitle: 'दानवों की माता', x: 0, y: 0, color: '#ff99cc', parent: 'daksha', spouseOf: 'kashyap', yug: 'satya' },

    // Offspring of Kashyap (from Aditi) -> Devas / Suryavansh
    { id: 'surya', name: 'विवस्वान (सूर्य)', subtitle: 'सूर्य देव (अदिति पुत्र)', x: 2500, y: 3000, color: '#FF9900', parent: 'kashyap', motherColor: '#ff99cc', yug: 'satya' },
    { id: 'indra', name: 'इंद्र', subtitle: 'देवराज (अदिति पुत्र)', x: 2200, y: 3000, color: '#FFD700', parent: 'kashyap', yug: 'satya' },

    // Offspring of Kashyap (from Diti) -> Daityas
    { id: 'hiranyakashipu', name: 'हिरण्यकशिपु', subtitle: 'दैत्यराज (दिति पुत्र)', x: 2800, y: 3000, color: '#8B0000', parent: 'kashyap', yug: 'satya' },
    { id: 'hiranyaksha', name: 'हिरण्याक्ष', subtitle: 'दैत्य (दिति पुत्र)', x: 3000, y: 3000, color: '#8B0000', parent: 'kashyap', yug: 'satya' },
    { id: 'prahlada', name: 'प्रह्लाद', subtitle: 'विष्णु भक्त', x: 2800, y: 3500, color: '#8B0000', parent: 'hiranyakashipu', yug: 'satya' },
    { id: 'vairochana', name: 'विरोचन', subtitle: 'प्रह्लाद पुत्र', x: 2800, y: 4000, color: '#8B0000', parent: 'prahlada', yug: 'treta' },
    { id: 'bali', name: 'बलि', subtitle: 'महान दैत्यराज', x: 2800, y: 4500, color: '#8B0000', parent: 'vairochana', yug: 'treta' },

    // Offspring of Kashyap (from Kadru & Vinata)
    { id: 'shesha', name: 'शेषनाग', subtitle: 'नाग (कद्रू पुत्र)', x: 1800, y: 3000, color: '#2E8B57', parent: 'kashyap', yug: 'satya' },
    { id: 'vasuki', name: 'वासुकी', subtitle: 'नागराज (कद्रू पुत्र)', x: 1600, y: 3000, color: '#2E8B57', parent: 'kashyap', yug: 'satya' },
    { id: 'garuda', name: 'गरुड़', subtitle: 'पक्षीराज (विनता पुत्र)', x: 1400, y: 3000, color: '#DAA520', parent: 'kashyap', yug: 'satya' },

    // ==========================================
    // PULASTYA'S DESCENDANTS (Yakshas & Rakshasas)
    // ==========================================
    { id: 'vishrava', name: 'विश्रवा', subtitle: 'पुलस्त्य पुत्र', x: 3500, y: 3000, color: '#FFD700', parent: 'pulastya', yug: 'treta' },
    { id: 'kuber', name: 'कुबेर', subtitle: 'यक्षराज', x: 3300, y: 3500, color: '#FFD700', parent: 'vishrava', yug: 'treta' },
    { id: 'ravana', name: 'रावण', subtitle: 'लंकेश', x: 3500, y: 3500, color: '#4B0082', parent: 'vishrava', yug: 'treta' },
    { id: 'kumbhakarna', name: 'कुम्भकर्ण', subtitle: 'राक्षस', x: 3700, y: 3500, color: '#4B0082', parent: 'vishrava', yug: 'treta' },
    { id: 'vibhishana', name: 'विभीषण', subtitle: 'राम भक्त', x: 3900, y: 3500, color: '#4B0082', parent: 'vishrava', yug: 'treta' },
    { id: 'meghnad', name: 'इंद्रजीत (मेघनाद)', subtitle: 'रावण पुत्र', x: 3500, y: 4000, color: '#4B0082', parent: 'ravana', yug: 'treta' },

    // ==========================================
    // BHRIGU'S DESCENDANTS (Bhargavas)
    // ==========================================
    { id: 'chyavana', name: 'च्यवन', subtitle: 'भृगु पुत्र', x: 5000, y: 2500, color: '#FFD700', parent: 'bhrigu', yug: 'satya' },
    { id: 'shukracharya', name: 'शुक्राचार्य', subtitle: 'दैत्यों के गुरु', x: 4800, y: 2500, color: '#FFD700', parent: 'bhrigu', yug: 'satya' },
    { id: 'aurva', name: 'और्व', subtitle: 'भृगु वंश', x: 5000, y: 3000, color: '#FFD700', parent: 'chyavana', yug: 'treta' },
    { id: 'ruchika', name: 'ऋचीक', subtitle: 'भृगु वंश', x: 5000, y: 3500, color: '#FFD700', parent: 'aurva', yug: 'treta' },
    { id: 'jamadagni', name: 'जमदग्नि', subtitle: 'सप्तर्षि', x: 5000, y: 4000, color: '#FFD700', parent: 'ruchika', yug: 'treta' },
    { id: 'parashurama', name: 'परशुराम', subtitle: 'विष्णु अवतार', x: 5000, y: 4500, color: '#FFD700', parent: 'jamadagni', yug: 'treta' },

    // ==========================================
    // VASHISTHA'S DESCENDANTS
    // ==========================================
    { id: 'shakti', name: 'शक्ति', subtitle: 'वशिष्ठ पुत्र', x: 5500, y: 2500, color: '#FFD700', parent: 'vashistha', yug: 'satya' },
    { id: 'parashar', name: 'पराशर', subtitle: 'महान ऋषि', x: 5500, y: 3000, color: '#FFD700', parent: 'shakti', yug: 'treta' },
    { id: 'vyasa', name: 'वेद व्यास', subtitle: 'महाभारत रचयिता', x: 5500, y: 3500, color: '#FFD700', parent: 'parashar', yug: 'dwapar' },
    { id: 'shuka', name: 'शुकदेव', subtitle: 'व्यास पुत्र', x: 5500, y: 4000, color: '#FFD700', parent: 'vyasa', yug: 'dwapar' },

    // ==========================================
    // SURYAVANSH (Continued)
    // ==========================================
    { id: 'vaivasvata_manu', name: 'वैवस्वत मनु', subtitle: 'वर्तमान मनु', x: 2500, y: 3500, color: '#FF9900', parent: 'surya', yug: 'satya' },
    { id: 'ikshvaku', name: 'इक्ष्वाकु', subtitle: 'सूर्यवंश के संस्थापक', x: 2500, y: 4000, color: '#FF9900', parent: 'vaivasvata_manu', yug: 'satya' },

    { id: 'harishchandra', name: 'हरिश्चंद्र', subtitle: 'सत्यवादी', x: 2500, y: 4500, color: '#FF9900', parent: 'ikshvaku', yug: 'treta' },
    { id: 'bhagirath', name: 'भगीरथ', subtitle: 'गंगा को लाने वाले', x: 2500, y: 5000, color: '#FF9900', parent: 'harishchandra', yug: 'treta' },
    { id: 'raghu', name: 'रघु', subtitle: 'रघुवंश के संस्थापक', x: 2500, y: 5500, color: '#FF9900', parent: 'bhagirath', yug: 'treta' },
    { id: 'aja', name: 'अज', subtitle: 'रघु के पुत्र', x: 2500, y: 6000, color: '#FF9900', parent: 'raghu', yug: 'treta' },
    { id: 'dasharath', name: 'दशरथ', subtitle: 'अयोध्या के चक्रवर्ती सम्राट', x: 2500, y: 6500, color: '#FF9900', parent: 'aja', yug: 'treta' },

    // Dasharath's Wives
    { id: 'kaushalya', name: 'कौशल्या', subtitle: 'राम की माता', x: 0, y: 0, color: '#ff99cc', parent: '', spouseOf: 'dasharath', yug: 'treta' },

    // Ramayana Siblings
    { id: 'ram', name: 'राम', subtitle: 'मर्यादा पुरुषोत्तम', x: 2200, y: 7000, color: '#FF9900', parent: 'dasharath', yug: 'treta', motherColor: '#FFD700' },
    { id: 'bharat', name: 'भरत', subtitle: 'आदर्श भ्राता', x: 2400, y: 7000, color: '#FF9900', parent: 'dasharath', yug: 'treta' },
    { id: 'lakshman', name: 'लक्ष्मण', subtitle: 'शेषनाग अवतार', x: 2600, y: 7000, color: '#FF9900', parent: 'dasharath', yug: 'treta' },
    { id: 'shatrughna', name: 'शत्रुघ्न', subtitle: 'राम के अनुज', x: 2800, y: 7000, color: '#FF9900', parent: 'dasharath', yug: 'treta' },

    // Ram's Wife
    { id: 'sita', name: 'सीता', subtitle: 'जनक नंदिनी', x: 0, y: 0, color: '#ff99cc', parent: '', spouseOf: 'ram', yug: 'treta' },

    { id: 'luv', name: 'लव', subtitle: 'राम के पुत्र', x: 2100, y: 7500, color: '#FF9900', parent: 'ram', yug: 'treta' },
    { id: 'kush', name: 'कुश', subtitle: 'राम के पुत्र', x: 2300, y: 7500, color: '#FF9900', parent: 'ram', yug: 'treta' },

    // Chandravansh (Blue) - Connected from Atri
    { id: 'chandra', name: 'चंद्र', subtitle: 'चंद्र देव', x: 6100, y: 2000, color: '#3399FF', parent: 'atri', yug: 'satya' },
    { id: 'budh', name: 'बुध', subtitle: 'चंद्र के पुत्र', x: 6100, y: 2500, color: '#3399FF', parent: 'chandra', yug: 'satya' },
    { id: 'pururava', name: 'पुरुरवा', subtitle: 'चंद्रवंश के प्रथम राजा', x: 6100, y: 3000, color: '#3399FF', parent: 'budh', yug: 'satya' },
    { id: 'yayati', name: 'ययाति', subtitle: 'महान सम्राट', x: 6100, y: 4000, color: '#3399FF', parent: 'pururava', yug: 'satya' },

    // Branching: Yadu and Puru
    { id: 'yadu', name: 'यदु', subtitle: 'यदुवंश के संस्थापक', x: 5500, y: 4500, color: '#9933CC', parent: 'yayati', yug: 'treta' }, // Purple
    { id: 'puru', name: 'पुरु', subtitle: 'पौरव/कुरुवंश', x: 6500, y: 4500, color: '#3399FF', parent: 'yayati', yug: 'treta' }, // Keeps blue

    // Yaduvansh Line
    { id: 'shurasen', name: 'शूरसेन', subtitle: 'मथुरा नरेश', x: 5500, y: 7500, color: '#9933CC', parent: 'yadu', yug: 'dwapar' },
    { id: 'vasudev', name: 'वसुदेव', subtitle: 'कृष्ण के पिता', x: 5400, y: 8000, color: '#9933CC', parent: 'shurasen', yug: 'dwapar' },
    { id: 'nanda', name: 'नंद बाबा', subtitle: 'पालक पिता', x: 5600, y: 8000, color: '#FFD700', parent: 'shurasen', yug: 'dwapar' }, // Simplified connection
    { id: 'krishna', name: 'कृष्ण', subtitle: 'पूर्णावतार', x: 5500, y: 8500, color: '#9933CC', parent: 'vasudev', yug: 'dwapar' },
    { id: 'balram', name: 'बलराम', subtitle: 'शेषनाग अवतार', x: 5300, y: 8500, color: '#9933CC', parent: 'vasudev', yug: 'dwapar' },

    // Kuruvansh Line
    { id: 'dushyant', name: 'दुष्यंत', subtitle: 'पुरु वंश', x: 6500, y: 5500, color: '#3399FF', parent: 'puru', yug: 'treta' },
    { id: 'bharat_kuru', name: 'भरत', subtitle: 'चक्रवर्ती सम्राट', x: 6500, y: 6000, color: '#3399FF', parent: 'dushyant', yug: 'treta' },
    { id: 'kuru', name: 'कुरु', subtitle: 'कुरुवंश के संस्थापक', x: 6500, y: 6500, color: '#00CC66', parent: 'bharat_kuru', yug: 'dwapar' }, // Green
    { id: 'shantanu', name: 'शांतनु', subtitle: 'कुरुवंश', x: 6500, y: 7500, color: '#00CC66', parent: 'kuru', yug: 'dwapar' },
    { id: 'bhishma', name: 'भीष्म', subtitle: 'गंगा पुत्र', x: 6300, y: 8000, color: '#00CC66', parent: 'shantanu', yug: 'dwapar', motherColor: '#99CCFF' },
    { id: 'vichitravirya', name: 'विचित्रवीर्य', subtitle: 'सत्यवती पुत्र', x: 6700, y: 8000, color: '#00CC66', parent: 'shantanu', yug: 'dwapar' },

    { id: 'dhritarashtra', name: 'धृतराष्ट्र', subtitle: 'हस्तिनापुर नरेश', x: 6500, y: 8500, color: '#00CC66', parent: 'vichitravirya', yug: 'dwapar' },
    { id: 'pandu', name: 'पांडु', subtitle: 'पांडवों के पिता', x: 6900, y: 8500, color: '#00CC66', parent: 'vichitravirya', yug: 'dwapar' },

    // Kauravas
    { id: 'duryodhan', name: 'दुर्योधन', subtitle: 'कौरव ज्येष्ठ', x: 6500, y: 9000, color: '#00CC66', parent: 'dhritarashtra', yug: 'dwapar' },

    // Pandavas
    { id: 'yudhishthir', name: 'युधिष्ठिर', subtitle: 'धर्मराज', x: 6700, y: 9000, color: '#00CC66', parent: 'pandu', yug: 'dwapar' },
    { id: 'bhim', name: 'भीम', subtitle: 'पवन पुत्र', x: 6800, y: 9000, color: '#00CC66', parent: 'pandu', yug: 'dwapar' },
    { id: 'arjun', name: 'अर्जुन', subtitle: 'इंद्र पुत्र', x: 6900, y: 9000, color: '#00CC66', parent: 'pandu', yug: 'dwapar' },
    { id: 'nakul', name: 'नकुल', subtitle: 'अश्विनी कुमार पुत्र', x: 7000, y: 9000, color: '#00CC66', parent: 'pandu', yug: 'dwapar' },
    { id: 'sahadev', name: 'सहदेव', subtitle: 'अश्विनी कुमार पुत्र', x: 7100, y: 9000, color: '#00CC66', parent: 'pandu', yug: 'dwapar' },

    { id: 'abhimanyu', name: 'अभिमन्यु', subtitle: 'अर्जुन पुत्र', x: 6900, y: 9500, color: '#00CC66', parent: 'arjun', yug: 'dwapar' },
    { id: 'parikshit', name: 'परीक्षित', subtitle: 'अभिमन्यु पुत्र', x: 6900, y: 10000, color: '#00CC66', parent: 'abhimanyu', yug: 'kali' }
];

// Helper functions for data access can go here in the future
window.HistoricDB = {
    getAll: () => historicData,
    getNode: (id) => historicData.find(d => d.id === id),
    getChildren: (id) => historicData.filter(d => d.parent === id),
    getSiblings: (id) => {
        const node = historicData.find(d => d.id === id);
        if (!node || !node.parent) return [];
        return historicData.filter(d => d.parent === node.parent);
    }
};
