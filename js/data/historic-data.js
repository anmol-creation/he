// js/data/historic-data.js

// This file acts as the primary database index.
// In the future, this can be split into multiple files (suryavansh.js, chandravansh.js)
// and merged here if the dataset becomes too massive.

const historicData = [
    // ==========================================
    // TRIMURTI (The Ultimate Roots) - Anadi (Before current Kalpa)
    // ==========================================
    { id: 'brahma', name: 'ब्रह्मा', subtitle: 'सृष्टि रचयिता', x: 5000, y: -2000, color: '#FFD700', type: 'root', yug: 'pre-kalpa' },
    { id: 'vishnu', name: 'विष्णु', subtitle: 'पालनकर्ता', x: 3000, y: -2000, color: '#3399FF', type: 'root', yug: 'pre-kalpa' },
    { id: 'shiva', name: 'महेश (शिव)', subtitle: 'संहारकर्ता', x: 7000, y: -2000, color: '#FF3333', type: 'root', yug: 'pre-kalpa' },

    // ==========================================
    // VISHNU'S CREATIONS & AVATARS
    // ==========================================
    { id: 'kamadeva', name: 'कामदेव', subtitle: 'विष्णु के पुत्र', x: 3000, y: -1000, color: '#FF66B2', parent: 'vishnu', yug: 'pre-kalpa' },
    { id: 'rati', name: 'रति', subtitle: 'कामदेव की पत्नी', x: 0, y: 0, color: '#ff99cc', parent: '', spouseOf: 'kamadeva', yug: 'pre-kalpa' },

    // ==========================================
    // BRAHMA'S DIRECT DESCENDANTS (Satya Yug)
    // ==========================================

    // 1. Sanat Kumaras (Eternally young sages)
    { id: 'sanak', name: 'सनक', subtitle: 'सनत कुमार', x: 3800, y: 1500, color: '#FFFF99', parent: 'brahma', yug: 'satya' },
    { id: 'sanandan', name: 'सनन्दन', subtitle: 'सनत कुमार', x: 4000, y: 1500, color: '#FFFF99', parent: 'brahma', yug: 'satya' },
    { id: 'sanatan', name: 'सनातन', subtitle: 'सनत कुमार', x: 4200, y: 1500, color: '#FFFF99', parent: 'brahma', yug: 'satya' },
    { id: 'sanatkumar', name: 'सनत्कुमार', subtitle: 'सनत कुमार', x: 4400, y: 1500, color: '#FFFF99', parent: 'brahma', yug: 'satya' },

    // 2. Physical/Other Creations
    { id: 'narada', name: 'नारद', subtitle: 'मानस पुत्र / देवर्षि', x: 4600, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'jambavan', name: 'जाम्बवान', subtitle: 'ब्रह्मा की जम्हाई से', x: 4800, y: 1500, color: '#A0522D', parent: 'brahma', yug: 'satya' },
    { id: 'chitragupta', name: 'चित्रगुप्त', subtitle: 'ब्रह्मा की काया से', x: 8000, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },

    // 3. Manas Putras (The Prajapatis & Sages)
    { id: 'marichi', name: 'मरीचि', subtitle: 'सप्तर्षि / मानस पुत्र', x: 1000, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'angiras', name: 'अंगिरस', subtitle: 'सप्तर्षि / मानस पुत्र', x: 1500, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'pulastya', name: 'पुलस्त्य', subtitle: 'सप्तर्षि / मानस पुत्र', x: 2000, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'pulaha', name: 'पुलह', subtitle: 'सप्तर्षि / मानस पुत्र', x: 2500, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'kratu', name: 'क्रतु', subtitle: 'सप्तर्षि / मानस पुत्र', x: 5000, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'bhrigu', name: 'भृगु', subtitle: 'मानस पुत्र', x: 5500, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'vashistha', name: 'वशिष्ठ', subtitle: 'सप्तर्षि / मानस पुत्र', x: 6000, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'atri', name: 'अत्रि', subtitle: 'सप्तर्षि / मानस पुत्र', x: 6500, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'daksha', name: 'दक्ष प्रजापति', subtitle: 'अंगूठे से उत्पन्न', x: 8500, y: 1500, color: '#FFD700', parent: 'brahma', yug: 'satya' },

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
    // SHIVA'S DESCENDANTS
    // ==========================================
    { id: 'sati', name: 'सती', subtitle: 'दक्ष पुत्री', x: 0, y: 0, color: '#ff99cc', parent: 'daksha', spouseOf: 'shiva', yug: 'satya' },
    { id: 'parvati', name: 'पार्वती', subtitle: 'शैलपुत्री / शक्ति', x: 0, y: 0, color: '#ff99cc', parent: '', spouseOf: 'shiva', yug: 'satya' },

    { id: 'kartikeya', name: 'कार्तिकेय', subtitle: 'देव सेनापति', x: 6800, y: 1500, color: '#FF3333', parent: 'shiva', mother: 'parvati', yug: 'satya' },
    { id: 'ganesha', name: 'गणेश', subtitle: 'प्रथम पूज्य', x: 7200, y: 1500, color: '#FF3333', parent: 'shiva', mother: 'parvati', yug: 'satya' },


    // ==========================================
    // ANGIRAS'S DESCENDANTS
    // ==========================================
    { id: 'shraddha', name: 'श्रद्धा', subtitle: 'अंगिरस की पत्नी', x: 0, y: 0, color: '#ff99cc', parent: '', spouseOf: 'angiras', yug: 'satya' },
    { id: 'brihaspati', name: 'बृहस्पति', subtitle: 'देवताओं के गुरु', x: 1400, y: 2500, color: '#FFD700', parent: 'angiras', mother: 'shraddha', yug: 'satya' },
    { id: 'bharadwaja', name: 'भारद्वाज', subtitle: 'सप्तर्षि / अंगिरस वंश', x: 1600, y: 3000, color: '#FFD700', parent: 'angiras', yug: 'treta' },
    { id: 'kacha', name: 'कच', subtitle: 'बृहस्पति के पुत्र', x: 1400, y: 3000, color: '#FFD700', parent: 'brihaspati', yug: 'satya' },
    { id: 'drona', name: 'द्रोणाचार्य', subtitle: 'कौरवों के गुरु', x: 1600, y: 8500, color: '#FFD700', parent: 'bharadwaja', yug: 'dwapar' },
    { id: 'ashwatthama', name: 'अश्वत्थामा', subtitle: 'द्रोण पुत्र / चिरंजीवी', x: 1600, y: 9000, color: '#FFD700', parent: 'drona', yug: 'dwapar' },

    // ==========================================
    // KASHYAP'S WIVES (Daughters of Daksha) AND DESCENDANTS
    // ==========================================
    { id: 'kashyap', name: 'कश्यप', subtitle: 'महान ऋषि', x: 1000, y: 2500, color: '#FFD700', parent: 'marichi', yug: 'satya' },

    // Wives of Kashyap
    { id: 'aditi', name: 'अदिति', subtitle: 'देवताओं की माता', x: 0, y: 0, color: '#ff99cc', parent: 'daksha', spouseOf: 'kashyap', yug: 'satya' },
    { id: 'diti', name: 'दिति', subtitle: 'दैत्यों की माता', x: 0, y: 0, color: '#ff99cc', parent: 'daksha', spouseOf: 'kashyap', yug: 'satya' },
    { id: 'kadru', name: 'कद्रू', subtitle: 'नागों की माता', x: 0, y: 0, color: '#ff99cc', parent: 'daksha', spouseOf: 'kashyap', yug: 'satya' },
    { id: 'vinata', name: 'विनता', subtitle: 'गरुड़ की माता', x: 0, y: 0, color: '#ff99cc', parent: 'daksha', spouseOf: 'kashyap', yug: 'satya' },
    { id: 'danu', name: 'दनु', subtitle: 'दानवों की माता', x: 0, y: 0, color: '#ff99cc', parent: 'daksha', spouseOf: 'kashyap', yug: 'satya' },

    // Offspring of Kashyap (from Aditi) -> Devas / Suryavansh
    { id: 'surya', name: 'विवस्वान (सूर्य)', subtitle: 'सूर्य देव (अदिति पुत्र)', x: 1000, y: 3500, color: '#FF9900', parent: 'kashyap', mother: 'aditi', motherColor: '#ff99cc', yug: 'satya' },
    { id: 'indra', name: 'इंद्र', subtitle: 'देवराज (अदिति पुत्र)', x: 1200, y: 3500, color: '#FFD700', parent: 'kashyap', mother: 'aditi', yug: 'satya' },

    // Offspring of Kashyap (from Diti) -> Daityas
    { id: 'hiranyakashipu', name: 'हिरण्यकशिपु', subtitle: 'दैत्यराज (दिति पुत्र)', x: 600, y: 3500, color: '#8B0000', parent: 'kashyap', mother: 'diti', yug: 'satya' },
    { id: 'hiranyaksha', name: 'हिरण्याक्ष', subtitle: 'दैत्य (दिति पुत्र)', x: 800, y: 3500, color: '#8B0000', parent: 'kashyap', mother: 'diti', yug: 'satya' },
    { id: 'prahlada', name: 'प्रह्लाद', subtitle: 'विष्णु भक्त', x: 600, y: 4000, color: '#8B0000', parent: 'hiranyakashipu', yug: 'satya' },
    { id: 'vairochana', name: 'विरोचन', subtitle: 'प्रह्लाद पुत्र', x: 600, y: 4500, color: '#8B0000', parent: 'prahlada', yug: 'treta' },
    { id: 'bali', name: 'बलि', subtitle: 'महान दैत्यराज', x: 600, y: 5000, color: '#8B0000', parent: 'vairochana', yug: 'treta' },

    // Offspring of Kashyap (from Kadru & Vinata)
    { id: 'shesha', name: 'शेषनाग', subtitle: 'नाग (कद्रू पुत्र)', x: 1400, y: 3500, color: '#2E8B57', parent: 'kashyap', mother: 'kadru', yug: 'satya' },
    { id: 'vasuki', name: 'वासुकी', subtitle: 'नागराज (कद्रू पुत्र)', x: 1600, y: 3500, color: '#2E8B57', parent: 'kashyap', mother: 'kadru', yug: 'satya' },
    { id: 'garuda', name: 'गरुड़', subtitle: 'पक्षीराज (विनता पुत्र)', x: 1800, y: 3500, color: '#DAA520', parent: 'kashyap', mother: 'vinata', yug: 'satya' },

    // ==========================================
    // PULASTYA'S DESCENDANTS (Yakshas & Rakshasas)
    // ==========================================
    { id: 'vishrava', name: 'विश्रवा', subtitle: 'पुलस्त्य पुत्र', x: 2000, y: 3000, color: '#FFD700', parent: 'pulastya', yug: 'treta' },
    { id: 'kuber', name: 'कुबेर', subtitle: 'यक्षराज', x: 1800, y: 3500, color: '#FFD700', parent: 'vishrava', yug: 'treta' },
    { id: 'ravana', name: 'रावण', subtitle: 'लंकेश', x: 2000, y: 3500, color: '#4B0082', parent: 'vishrava', yug: 'treta' },
    { id: 'kumbhakarna', name: 'कुम्भकर्ण', subtitle: 'राक्षस', x: 2200, y: 3500, color: '#4B0082', parent: 'vishrava', yug: 'treta' },
    { id: 'vibhishana', name: 'विभीषण', subtitle: 'राम भक्त', x: 2400, y: 3500, color: '#4B0082', parent: 'vishrava', yug: 'treta' },
    { id: 'meghnad', name: 'इंद्रजीत (मेघनाद)', subtitle: 'रावण पुत्र', x: 2000, y: 4000, color: '#4B0082', parent: 'ravana', yug: 'treta' },

    // ==========================================
    // BHRIGU'S DESCENDANTS (Bhargavas)
    // ==========================================
    { id: 'khyati', name: 'ख्याति', subtitle: 'दक्ष पुत्री', x: 0, y: 0, color: '#ff99cc', parent: 'daksha', spouseOf: 'bhrigu', yug: 'satya' },
    { id: 'chyavana', name: 'च्यवन', subtitle: 'भृगु पुत्र', x: 5500, y: 2500, color: '#FFD700', parent: 'bhrigu', mother: 'khyati', yug: 'satya' },
    { id: 'shukracharya', name: 'शुक्राचार्य', subtitle: 'दैत्यों के गुरु', x: 5300, y: 2500, color: '#FFD700', parent: 'bhrigu', mother: 'khyati', yug: 'satya' },
    { id: 'aurva', name: 'और्व', subtitle: 'भृगु वंश', x: 5500, y: 3000, color: '#FFD700', parent: 'chyavana', yug: 'treta' },
    { id: 'ruchika', name: 'ऋचीक', subtitle: 'भृगु वंश', x: 5500, y: 3500, color: '#FFD700', parent: 'aurva', yug: 'treta' },
    { id: 'jamadagni', name: 'जमदग्नि', subtitle: 'सप्तर्षि', x: 5500, y: 4000, color: '#FFD700', parent: 'ruchika', yug: 'treta' },
    { id: 'parashurama', name: 'परशुराम', subtitle: 'विष्णु अवतार', x: 5500, y: 4500, color: '#FFD700', parent: 'jamadagni', yug: 'treta' },

    // ==========================================
    // VASHISTHA'S DESCENDANTS
    // ==========================================
    { id: 'arundhati', name: 'अरुंधती', subtitle: 'वशिष्ठ पत्नी', x: 0, y: 0, color: '#ff99cc', parent: '', spouseOf: 'vashistha', yug: 'satya' },
    { id: 'shakti', name: 'शक्ति', subtitle: 'वशिष्ठ पुत्र', x: 6000, y: 2500, color: '#FFD700', parent: 'vashistha', mother: 'arundhati', yug: 'satya' },
    { id: 'parashar', name: 'पराशर', subtitle: 'महान ऋषि', x: 6000, y: 3000, color: '#FFD700', parent: 'shakti', yug: 'treta' },
    { id: 'vyasa', name: 'वेद व्यास', subtitle: 'महाभारत रचयिता', x: 6000, y: 3500, color: '#FFD700', parent: 'parashar', yug: 'dwapar' },
    { id: 'shuka', name: 'शुकदेव', subtitle: 'व्यास पुत्र', x: 6000, y: 4000, color: '#FFD700', parent: 'vyasa', yug: 'dwapar' },

    // ==========================================
    // CHITRAGUPTA'S DESCENDANTS (Kayastha Gotras)
    // ==========================================
    { id: 'shobhavati', name: 'शोभावती', subtitle: 'चित्रगुप्त की पत्नी', x: 0, y: 0, color: '#ff99cc', parent: '', spouseOf: 'chitragupta', yug: 'satya' },
    { id: 'nandini', name: 'नंदिनी', subtitle: 'चित्रगुप्त की पत्नी', x: 0, y: 0, color: '#ff99cc', parent: '', spouseOf: 'chitragupta', yug: 'satya' },

    // Sons from Shobhavati
    { id: 'bhanu', name: 'भानु', subtitle: 'कायस्थ गोत्र', x: 7400, y: 2500, color: '#FFD700', parent: 'chitragupta', mother: 'shobhavati', yug: 'satya' },
    { id: 'bhatnagar', name: 'भटनागर', subtitle: 'कायस्थ गोत्र', x: 7600, y: 2500, color: '#FFD700', parent: 'chitragupta', mother: 'shobhavati', yug: 'satya' },
    { id: 'saxena', name: 'सक्सेना', subtitle: 'कायस्थ गोत्र', x: 7800, y: 2500, color: '#FFD700', parent: 'chitragupta', mother: 'shobhavati', yug: 'satya' },
    { id: 'srivastava', name: 'श्रीवास्तव', subtitle: 'कायस्थ गोत्र', x: 8000, y: 2500, color: '#FFD700', parent: 'chitragupta', mother: 'shobhavati', yug: 'satya' },
    { id: 'mathur', name: 'माथुर', subtitle: 'कायस्थ गोत्र', x: 8200, y: 2500, color: '#FFD700', parent: 'chitragupta', mother: 'shobhavati', yug: 'satya' },
    { id: 'suryadhwaj', name: 'सूर्यध्वज', subtitle: 'कायस्थ गोत्र', x: 8400, y: 2500, color: '#FFD700', parent: 'chitragupta', mother: 'shobhavati', yug: 'satya' },

    // Sons from Nandini
    { id: 'ambashtha', name: 'अम्बष्ठ', subtitle: 'कायस्थ गोत्र', x: 7400, y: 3000, color: '#FFD700', parent: 'chitragupta', mother: 'nandini', yug: 'satya' },
    { id: 'gaur', name: 'गौड़', subtitle: 'कायस्थ गोत्र', x: 7600, y: 3000, color: '#FFD700', parent: 'chitragupta', mother: 'nandini', yug: 'satya' },
    { id: 'nigam', name: 'निगम', subtitle: 'कायस्थ गोत्र', x: 7800, y: 3000, color: '#FFD700', parent: 'chitragupta', mother: 'nandini', yug: 'satya' },
    { id: 'valmiki_k', name: 'वाल्मीकि', subtitle: 'कायस्थ गोत्र', x: 8000, y: 3000, color: '#FFD700', parent: 'chitragupta', mother: 'nandini', yug: 'satya' },
    { id: 'asthana', name: 'अस्थाना', subtitle: 'कायस्थ गोत्र', x: 8200, y: 3000, color: '#FFD700', parent: 'chitragupta', mother: 'nandini', yug: 'satya' },
    { id: 'kulshreshtha', name: 'कुलश्रेष्ठ', subtitle: 'कायस्थ गोत्र', x: 8400, y: 3000, color: '#FFD700', parent: 'chitragupta', mother: 'nandini', yug: 'satya' },


    // ==========================================
    // SURYAVANSH (Continued)
    // ==========================================
    { id: 'vaivasvata_manu', name: 'वैवस्वत मनु', subtitle: 'वर्तमान मनु', x: 1000, y: 4000, color: '#FF9900', parent: 'surya', yug: 'satya' },
    { id: 'ikshvaku', name: 'इक्ष्वाकु', subtitle: 'सूर्यवंश के संस्थापक', x: 1000, y: 4500, color: '#FF9900', parent: 'vaivasvata_manu', yug: 'satya' },

    { id: 'harishchandra', name: 'हरिश्चंद्र', subtitle: 'सत्यवादी', x: 1000, y: 5000, color: '#FF9900', parent: 'ikshvaku', yug: 'treta' },
    { id: 'bhagirath', name: 'भगीरथ', subtitle: 'गंगा को लाने वाले', x: 1000, y: 5500, color: '#FF9900', parent: 'harishchandra', yug: 'treta' },
    { id: 'raghu', name: 'रघु', subtitle: 'रघुवंश के संस्थापक', x: 1000, y: 6000, color: '#FF9900', parent: 'bhagirath', yug: 'treta' },
    { id: 'aja', name: 'अज', subtitle: 'रघु के पुत्र', x: 1000, y: 6500, color: '#FF9900', parent: 'raghu', yug: 'treta' },
    { id: 'dasharath', name: 'दशरथ', subtitle: 'अयोध्या के चक्रवर्ती सम्राट', x: 1000, y: 7000, color: '#FF9900', parent: 'aja', yug: 'treta' },

    // Dasharath's Wives
    { id: 'kaushalya', name: 'कौशल्या', subtitle: 'राम की माता', x: 0, y: 0, color: '#ff99cc', parent: '', spouseOf: 'dasharath', yug: 'treta' },
    { id: 'kaikeyi', name: 'कैकेयी', subtitle: 'भरत की माता', x: 0, y: 0, color: '#ff99cc', parent: '', spouseOf: 'dasharath', yug: 'treta' },
    { id: 'sumitra', name: 'सुमित्रा', subtitle: 'लक्ष्मण/शत्रुघ्न की माता', x: 0, y: 0, color: '#ff99cc', parent: '', spouseOf: 'dasharath', yug: 'treta' },

    // Ramayana Siblings
    { id: 'ram', name: 'राम', subtitle: 'मर्यादा पुरुषोत्तम', x: 700, y: 7500, color: '#FF9900', parent: 'dasharath', mother: 'kaushalya', yug: 'treta', motherColor: '#FFD700' },
    { id: 'bharat', name: 'भरत', subtitle: 'आदर्श भ्राता', x: 900, y: 7500, color: '#FF9900', parent: 'dasharath', mother: 'kaikeyi', yug: 'treta' },
    { id: 'lakshman', name: 'लक्ष्मण', subtitle: 'शेषनाग अवतार', x: 1100, y: 7500, color: '#FF9900', parent: 'dasharath', mother: 'sumitra', yug: 'treta' },
    { id: 'shatrughna', name: 'शत्रुघ्न', subtitle: 'राम के अनुज', x: 1300, y: 7500, color: '#FF9900', parent: 'dasharath', mother: 'sumitra', yug: 'treta' },

    // Ram's Wife
    { id: 'sita', name: 'सीता', subtitle: 'जनक नंदिनी', x: 0, y: 0, color: '#ff99cc', parent: '', spouseOf: 'ram', yug: 'treta' },

    { id: 'luv', name: 'लव', subtitle: 'राम के पुत्र', x: 600, y: 8000, color: '#FF9900', parent: 'ram', mother: 'sita', yug: 'treta' },
    { id: 'kush', name: 'कुश', subtitle: 'राम के पुत्र', x: 800, y: 8000, color: '#FF9900', parent: 'ram', mother: 'sita', yug: 'treta' },

    // Chandravansh (Blue) - Connected from Atri
    { id: 'anasuya', name: 'अनुसूया', subtitle: 'अत्रि पत्नी', x: 0, y: 0, color: '#ff99cc', parent: '', spouseOf: 'atri', yug: 'satya' },

    { id: 'dattatreya', name: 'दत्तात्रेय', subtitle: 'विष्णु अंश', x: 6300, y: 2000, color: '#3399FF', parent: 'atri', mother: 'anasuya', yug: 'satya' },
    { id: 'durvasa', name: 'दुर्वासा', subtitle: 'शिव अंश', x: 6700, y: 2000, color: '#3399FF', parent: 'atri', mother: 'anasuya', yug: 'satya' },
    { id: 'chandra', name: 'चंद्र', subtitle: 'चंद्र देव', x: 6500, y: 2000, color: '#3399FF', parent: 'atri', mother: 'anasuya', yug: 'satya' },

    { id: 'budh', name: 'बुध', subtitle: 'चंद्र के पुत्र', x: 6500, y: 2500, color: '#3399FF', parent: 'chandra', yug: 'satya' },
    { id: 'pururava', name: 'पुरुरवा', subtitle: 'चंद्रवंश के प्रथम राजा', x: 6500, y: 3000, color: '#3399FF', parent: 'budh', yug: 'satya' },
    { id: 'yayati', name: 'ययाति', subtitle: 'महान सम्राट', x: 6500, y: 4000, color: '#3399FF', parent: 'pururava', yug: 'satya' },

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
