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
    { id: 'marichi', name: 'मरीचि', subtitle: 'सप्तर्षि / मानस पुत्र', x: 4000, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'angiras', name: 'अंगिरस', subtitle: 'सप्तर्षि / मानस पुत्र', x: 4300, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'pulastya', name: 'पुलस्त्य', subtitle: 'सप्तर्षि / मानस पुत्र', x: 4600, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'pulaha', name: 'पुलह', subtitle: 'सप्तर्षि / मानस पुत्र', x: 4900, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'kratu', name: 'क्रतु', subtitle: 'सप्तर्षि / मानस पुत्र', x: 5200, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'bhrigu', name: 'भृगु', subtitle: 'मानस पुत्र', x: 5500, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'vashistha', name: 'वशिष्ठ', subtitle: 'सप्तर्षि / मानस पुत्र', x: 5800, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'atri', name: 'अत्रि', subtitle: 'सप्तर्षि / मानस पुत्र', x: 6100, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'daksha', name: 'दक्ष प्रजापति', subtitle: 'अंगूठे से उत्पन्न', x: 6400, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },

    // 4. The First Humans
    { id: 'svayambhuva_manu', name: 'स्वायंभुव मनु', subtitle: 'प्रथम पुरुष', x: 6800, y: 1500, color: '#FF9900', parent: 'brahma', yug: 'satya' },
    { id: 'shatarupa', name: 'शतरूपा', subtitle: 'प्रथम स्त्री', x: 7100, y: 1500, color: '#FF9900', parent: 'brahma', yug: 'satya' },

    // ==========================================
    // EXTENDED LINEAGES
    // ==========================================

    // Suryavansh (Orange) - Connected from Marichi
    { id: 'kashyap', name: 'कश्यप', subtitle: 'महान ऋषि', x: 4000, y: 2000, color: '#FFD700', parent: 'marichi', yug: 'satya' },
    { id: 'surya', name: 'विवस्वान (सूर्य)', subtitle: 'सूर्य देव', x: 4000, y: 2500, color: '#FF9900', parent: 'kashyap', yug: 'satya' },
    { id: 'manu', name: 'वैवस्वत मनु', subtitle: 'प्रथम पुरुष', x: 4000, y: 3000, color: '#FF9900', parent: 'surya', yug: 'satya' },
    { id: 'ikshvaku', name: 'इक्ष्वाकु', subtitle: 'सूर्यवंश के संस्थापक', x: 4000, y: 3500, color: '#FF9900', parent: 'manu', yug: 'satya' },

    { id: 'harishchandra', name: 'हरिश्चंद्र', subtitle: 'सत्यवादी', x: 4000, y: 4500, color: '#FF9900', parent: 'ikshvaku', yug: 'treta' },
    { id: 'bhagirath', name: 'भगीरथ', subtitle: 'गंगा को लाने वाले', x: 4000, y: 5000, color: '#FF9900', parent: 'harishchandra', yug: 'treta' },
    { id: 'raghu', name: 'रघु', subtitle: 'रघुवंश के संस्थापक', x: 4000, y: 5500, color: '#FF9900', parent: 'bhagirath', yug: 'treta' },
    { id: 'aja', name: 'अज', subtitle: 'रघु के पुत्र', x: 4000, y: 6000, color: '#FF9900', parent: 'raghu', yug: 'treta' },
    { id: 'dasharath', name: 'दशरथ', subtitle: 'अयोध्या के चक्रवर्ती सम्राट', x: 4000, y: 6500, color: '#FF9900', parent: 'aja', yug: 'treta' },

    // Ramayana Siblings
    { id: 'ram', name: 'राम', subtitle: 'मर्यादा पुरुषोत्तम', x: 3700, y: 7000, color: '#FF9900', parent: 'dasharath', yug: 'treta', motherColor: '#FFD700' },
    { id: 'bharat', name: 'भरत', subtitle: 'आदर्श भ्राता', x: 3900, y: 7000, color: '#FF9900', parent: 'dasharath', yug: 'treta' },
    { id: 'lakshman', name: 'लक्ष्मण', subtitle: 'शेषनाग अवतार', x: 4100, y: 7000, color: '#FF9900', parent: 'dasharath', yug: 'treta' },
    { id: 'shatrughna', name: 'शत्रुघ्न', subtitle: 'राम के अनुज', x: 4300, y: 7000, color: '#FF9900', parent: 'dasharath', yug: 'treta' },

    { id: 'luv', name: 'लव', subtitle: 'राम के पुत्र', x: 3600, y: 7500, color: '#FF9900', parent: 'ram', yug: 'treta' },
    { id: 'kush', name: 'कुश', subtitle: 'राम के पुत्र', x: 3800, y: 7500, color: '#FF9900', parent: 'ram', yug: 'treta' },

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
