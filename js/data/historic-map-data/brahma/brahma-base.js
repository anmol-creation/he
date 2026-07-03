export const brahmaBaseData = [
    { id: 'sanak', name: 'सनक', subtitle: 'सनत कुमार', color: '#FFFF99', parent: 'brahma', yug: 'satya' },
    { id: 'sanandan', name: 'सनन्दन', subtitle: 'सनत कुमार', color: '#FFFF99', parent: 'brahma', yug: 'satya' },
    { id: 'sanatan', name: 'सनातन', subtitle: 'सनत कुमार', color: '#FFFF99', parent: 'brahma', yug: 'satya' },
    { id: 'sanatkumar', name: 'सनत्कुमार', subtitle: 'सनत कुमार', color: '#FFFF99', parent: 'brahma', yug: 'satya' },
    { id: 'narada', name: 'नारद', subtitle: 'मानस पुत्र / देवर्षि', color: '#FFD700', parent: 'brahma', yug: 'satya' , parichay: 'देवर्षि नारद, ब्रह्मा के मानस पुत्र।', events: ['वाल्मीकि को राम कथा संक्षेप में सुनाई (बालकाण्ड, सर्ग 1)'] },
    { id: 'jambavan', name: 'जाम्बवान', subtitle: 'ब्रह्मा की जम्हाई से', color: '#A0522D', parent: 'brahma', yug: 'satya' },
    { id: 'chitragupta', name: 'चित्रगुप्त', subtitle: 'ब्रह्मा की काया से', color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'marichi', name: 'मरीचि', subtitle: 'सप्तर्षि / मानस पुत्र', color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'angiras', name: 'अंगिरस', subtitle: 'सप्तर्षि / मानस पुत्र', color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'pulastya', name: 'पुलस्त्य', subtitle: 'सप्तर्षि / मानस पुत्र', color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'pulaha', name: 'पुलह', subtitle: 'सप्तर्षि / मानस पुत्र', color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'kratu', name: 'क्रतु', subtitle: 'सप्तर्षि / मानस पुत्र', color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'bhrigu', name: 'भृगु', subtitle: 'मानस पुत्र', color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'vashistha', name: 'वशिष्ठ', subtitle: 'सप्तर्षि / मानस पुत्र', color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'atri', name: 'अत्रि', subtitle: 'सप्तर्षि / मानस पुत्र', color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'daksha', name: 'दक्ष प्रजापति', subtitle: 'अंगूठे से उत्पन्न', color: '#FFD700', parent: 'brahma', yug: 'satya' },
    { id: 'svayambhuva_manu', name: 'स्वायंभुव मनु', subtitle: 'प्रथम पुरुष', color: '#FF9900', parent: 'brahma', yug: 'satya' },
    { id: 'shatarupa', name: 'शतरूपा', subtitle: 'प्रथम स्त्री', color: '#ff99cc', parent: 'brahma', spouseOf: 'svayambhuva_manu', yug: 'satya' },
    { id: 'uttanapada', name: 'उत्तानपाद', subtitle: 'मनु के पुत्र', color: '#FF9900', parent: 'svayambhuva_manu', yug: 'satya' },
    { id: 'priyavrata', name: 'प्रियव्रत', subtitle: 'मनु के पुत्र', color: '#FF9900', parent: 'svayambhuva_manu', yug: 'satya' },
    { id: 'dhruva', name: 'ध्रुव', subtitle: 'परम भक्त / ध्रुव तारा', color: '#FF9900', parent: 'uttanapada', yug: 'satya' },
    { id: 'vena', name: 'वेन', subtitle: 'अधर्मी राजा', color: '#FF9900', parent: 'dhruva', yug: 'satya' },
    { id: 'prithu', name: 'पृथु', subtitle: 'जिनके नाम पर पृथ्वी', color: '#FF9900', parent: 'vena', yug: 'satya' },
    { id: 'shraddha', name: 'श्रद्धा', subtitle: 'अंगिरस की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'angiras', yug: 'satya' },
    { id: 'brihaspati', name: 'बृहस्पति', subtitle: 'देवताओं के गुरु', color: '#FFD700', parent: 'angiras', mother: 'shraddha', yug: 'satya' },
    { id: 'bharadwaja', name: 'भारद्वाज', subtitle: 'सप्तर्षि / अंगिरस वंश', color: '#FFD700', parent: 'angiras', yug: 'treta' },
    { id: 'kacha', name: 'कच', subtitle: 'बृहस्पति के पुत्र', color: '#FFD700', parent: 'brihaspati', yug: 'satya' },
    { id: 'drona', name: 'द्रोणाचार्य', subtitle: 'कौरवों के गुरु', color: '#FFD700', parent: 'bharadwaja', yug: 'dwapar' },
    { id: 'ashwatthama', name: 'अश्वत्थामा', subtitle: 'द्रोण पुत्र / चिरंजीवी', color: '#FFD700', parent: 'drona', yug: 'dwapar' },
    { id: 'vishrava', name: 'विश्रवा', subtitle: 'पुलस्त्य पुत्र', color: '#FFD700', parent: 'pulastya', yug: 'treta' },
    { id: 'kuber', name: 'कुबेर', subtitle: 'यक्षराज', color: '#FFD700', parent: 'vishrava', yug: 'treta' },
    { id: 'ravana', name: 'रावण', subtitle: 'लंकेश', color: '#4B0082', parent: 'vishrava', yug: 'treta',
      events: [
        'मारीच की सहायता से राम-लक्ष्मण को आश्रम से दूर कर सीता का अपहरण किया और जटायु का वध किया। (बालकाण्ड, सर्ग 1, श्लोक 49-52)',
        'राम द्वारा युद्ध में मारे गए। (बालकाण्ड, सर्ग 1, श्लोक 81)'
      ]
    },
    { id: 'kumbhakarna', name: 'कुम्भकर्ण', subtitle: 'राक्षस', color: '#4B0082', parent: 'vishrava', yug: 'treta' },
    { id: 'vibhishana', name: 'विभीषण', subtitle: 'राम भक्त', color: '#4B0082', parent: 'vishrava', yug: 'treta',
      events: [
        'राम द्वारा लंका के राज्य पर अभिषिक्त किए गए। (बालकाण्ड, सर्ग 1, श्लोक 84)'
      ]
    },
    { id: 'meghnad', name: 'इंद्रजीत (मेघनाद)', subtitle: 'रावण पुत्र', color: '#4B0082', parent: 'ravana', yug: 'treta' },
    { id: 'khyati', name: 'ख्याति', subtitle: 'दक्ष पुत्री', color: '#ff99cc', parent: 'daksha', spouseOf: 'bhrigu', yug: 'satya' },
    { id: 'chyavana', name: 'च्यवन', subtitle: 'भृगु पुत्र', color: '#FFD700', parent: 'bhrigu', mother: 'khyati', yug: 'satya' },
    { id: 'shukracharya', name: 'शुक्राचार्य', subtitle: 'दैत्यों के गुरु', color: '#FFD700', parent: 'bhrigu', mother: 'khyati', yug: 'satya' },
    { id: 'aurva', name: 'और्व', subtitle: 'भृगु वंश', color: '#FFD700', parent: 'chyavana', yug: 'treta' },
    { id: 'ruchika', name: 'ऋचीक', subtitle: 'भृगु वंश', color: '#FFD700', parent: 'aurva', yug: 'treta' },
    { id: 'jamadagni', name: 'जमदग्नि', subtitle: 'सप्तर्षि', color: '#FFD700', parent: 'ruchika', yug: 'treta' },
    { id: 'parashurama', name: 'परशुराम', subtitle: 'विष्णु अवतार', color: '#FFD700', parent: 'jamadagni', yug: 'treta' },
    { id: 'arundhati', name: 'अरुंधती', subtitle: 'वशिष्ठ पत्नी', color: '#ff99cc', parent: '', spouseOf: 'vashistha', yug: 'satya' },
    { id: 'shakti', name: 'शक्ति', subtitle: 'वशिष्ठ पुत्र', color: '#FFD700', parent: 'vashistha', mother: 'arundhati', yug: 'satya' },
    { id: 'parashar', name: 'पराशर', subtitle: 'महान ऋषि', color: '#FFD700', parent: 'shakti', yug: 'treta' },
    { id: 'vyasa', name: 'वेद व्यास', subtitle: 'महाभारत रचयिता', color: '#FFD700', parent: 'parashar', yug: 'dwapar' },
    { id: 'shuka', name: 'शुकदेव', subtitle: 'व्यास पुत्र', color: '#FFD700', parent: 'vyasa', yug: 'dwapar' },

    // --- CHITRAGUPTA WIVES ---
    { id: 'nandini_chitragupta', name: 'नंदिनी', subtitle: 'सूर्यदक्षिणा / चित्रगुप्त की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'chitragupta', yug: 'satya' },
    { id: 'iravati_chitragupta', name: 'इरावती', subtitle: 'शोभावती / चित्रगुप्त की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'chitragupta', yug: 'satya' },

    // --- SONS OF NANDINI ---
    { id: 'bhanu', name: 'भानु', subtitle: 'श्रीवास्तव कायस्थ वंश', color: '#FFD700', parent: 'chitragupta', mother: 'nandini_chitragupta', yug: 'satya', parichay: 'इनके द्वारा श्रीवास्तव कायस्थ वंश की स्थापना हुई। श्रीवास्तव वंश आगे चलकर 2 वर्गों (खरे और दूसर) में विभाजित हुआ और इनकी कई अल (उप-शाखाएं/उपनाम) हैं, जैसे- वर्मा, सिन्हा, रायजादा, कानूनगो आदि।' },
    { id: 'padmini_bhanu', name: 'पद्मिनी', subtitle: 'भानु की पत्नी (वासुकी की पुत्री)', color: '#ff99cc', parent: '', spouseOf: 'bhanu', yug: 'satya' },

    { id: 'vibhanu', name: 'विभानु', subtitle: 'सूर्यध्वज कायस्थ वंश', color: '#FFD700', parent: 'chitragupta', mother: 'nandini_chitragupta', yug: 'satya', parichay: 'इनके द्वारा सूर्यध्वज कायस्थ वंश की स्थापना हुई। चूँकि इनकी माता सूर्यदेव की पुत्री थीं, इसलिए इनके वंशज सूर्यध्वज नाम से जाने गए।' },
    { id: 'malati_vibhanu', name: 'मालती', subtitle: 'विभानु की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'vibhanu', yug: 'satya' },

    { id: 'vishvabhanu', name: 'विश्वभानु', subtitle: 'वाल्मीकि कायस्थ वंश', color: '#FFD700', parent: 'chitragupta', mother: 'nandini_chitragupta', yug: 'satya', parichay: 'इनके द्वारा वाल्मीकि कायस्थ वंश की स्थापना हुई। इन्होने वाल्मीकि क्षेत्र में राज्य स्थापित किया।' },
    { id: 'bimbvati_vishvabhanu', name: 'बिम्बवती', subtitle: 'विश्वभानु की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'vishvabhanu', yug: 'satya' },

    { id: 'veeryabhanu', name: 'वीर्यभानु', subtitle: 'अस्थाना कायस्थ वंश', color: '#FFD700', parent: 'chitragupta', mother: 'nandini_chitragupta', yug: 'satya', parichay: 'इनके द्वारा अस्थाना कायस्थ वंश की स्थापना हुई।' },
    { id: 'singhadhwani_veeryabhanu', name: 'सिंघध्वनि', subtitle: 'वीर्यभानु की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'veeryabhanu', yug: 'satya' },

    // --- SONS OF IRAVATI ---
    { id: 'charu', name: 'चारु', subtitle: 'माथुर कायस्थ वंश', color: '#FFD700', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा माथुर कायस्थ वंश की स्थापना हुई। माथुर वंश 3 वर्गों (देहलवी, खचौली, कच्छी) और 84 अल (उप-शाखाओं) में विभाजित हुआ, जिनमें कटारिया, सहरिया, ककरानिया आदि प्रमुख हैं।' },
    { id: 'pankajakshi_charu', name: 'पंकजाक्षी', subtitle: 'चारु की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'charu', yug: 'satya' },

    { id: 'sucharu', name: 'सुचारु', subtitle: 'गौड़ कायस्थ वंश', color: '#FFD700', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा गौड़ कायस्थ वंश की स्थापना हुई। गौड़ वंश 5 वर्गों और 32 अल (उप-शाखाओं) में विभाजित हुआ, जिनमें खरे, दुसरे, बंगाली आदि प्रमुख हैं।' },
    { id: 'mandhiya_sucharu', name: 'मंधिया', subtitle: 'सुचारु की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'sucharu', yug: 'satya' },

    { id: 'chitra_son', name: 'चित्र', subtitle: 'भटनागर कायस्थ वंश', color: '#FFD700', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा भटनागर कायस्थ वंश की स्थापना हुई। भटनागर वंश 84 अल (उप-शाखाओं) में विभाजित हुआ।' },
    { id: 'bhadrakalini_chitra', name: 'भद्रकालिनी', subtitle: 'चित्र की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'chitra_son', yug: 'satya' },

    { id: 'matibhan', name: 'मतिभान', subtitle: 'सक्सेना कायस्थ वंश', color: '#FFD700', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा सक्सेना कायस्थ वंश की स्थापना हुई। सक्सेना वंश खरे और दूसर वर्गों में और 106 अल (उप-शाखाओं) में विभाजित हुआ, जिनमें जोहरी, हजेला, रायजादा, कानूनगो आदि प्रमुख हैं।' },
    { id: 'kokalesh_matibhan', name: 'कोकलेश', subtitle: 'मतिभान की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'matibhan', yug: 'satya' },

    { id: 'himavan', name: 'हिमवान', subtitle: 'अम्बष्ठ कायस्थ वंश', color: '#FFD700', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा अम्बष्ठ कायस्थ वंश की स्थापना हुई। इनके पांच प्रमुख पुत्र हुए (नागसेन, गयासेन, गयादत्त, रतनमूल और देवधर) जिनसे क्रमशः 24, 35, 85, 25 और 21 अल (उप-शाखाएं) चलीं।' },
    { id: 'bhujangakshi_himavan', name: 'भुजंगाक्षी', subtitle: 'हिमवान की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'himavan', yug: 'satya' },

    { id: 'chitracharu', name: 'चित्रचारु', subtitle: 'निगम कायस्थ वंश', color: '#FFD700', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा निगम कायस्थ वंश की स्थापना हुई।' },
    { id: 'ashagandhamati_chitracharu', name: 'अशगंधमति', subtitle: 'चित्रचारु की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'chitracharu', yug: 'satya' },

    { id: 'chitracharan', name: 'चित्रचरण', subtitle: 'कर्ण कायस्थ वंश', color: '#FFD700', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा कर्ण कायस्थ वंश की स्थापना हुई।' },
    { id: 'kokalasuta_chitracharan', name: 'कोकलसुता', subtitle: 'चित्रचरण की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'chitracharan', yug: 'satya' },

    { id: 'charun', name: 'चारुण', subtitle: 'कुलश्रेष्ठ कायस्थ वंश', color: '#FFD700', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा कुलश्रेष्ठ कायस्थ वंश की स्थापना हुई।' },
    { id: 'manjubhashini_charun', name: 'मंजुभाषिणी', subtitle: 'चारुण की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'charun', yug: 'satya' },

    // --- GRANDSONS (Specific children mentioned in history) ---
    // Bhanu's children
    { id: 'devadatt', name: 'देवदत्त', subtitle: 'भानु के पुत्र (कश्मीर राज्य)', color: '#FFD700', parent: 'bhanu', mother: 'padmini_bhanu', yug: 'satya' },
    { id: 'ghanshyam', name: 'घनश्याम', subtitle: 'भानु के पुत्र (सिन्धु राज्य)', color: '#FFD700', parent: 'bhanu', mother: 'padmini_bhanu', yug: 'satya' },

    // Vishvabhanu's children
    { id: 'chandrakant', name: 'चंद्रकांत', subtitle: 'विश्वभानु के पुत्र (गुजरात)', color: '#FFD700', parent: 'vishvabhanu', mother: 'bimbvati_vishvabhanu', yug: 'satya' },

    // Himavan's children
    { id: 'nagasen', name: 'नागसेन', subtitle: 'हिमवान के पुत्र', color: '#FFD700', parent: 'himavan', mother: 'bhujangakshi_himavan', yug: 'satya' },
    { id: 'gayasen', name: 'गयासेन', subtitle: 'हिमवान के पुत्र', color: '#FFD700', parent: 'himavan', mother: 'bhujangakshi_himavan', yug: 'satya' },
    { id: 'gayadatt', name: 'गयादत्त', subtitle: 'हिमवान के पुत्र', color: '#FFD700', parent: 'himavan', mother: 'bhujangakshi_himavan', yug: 'satya' },
    { id: 'ratanmool', name: 'रतनमूल', subtitle: 'हिमवान के पुत्र', color: '#FFD700', parent: 'himavan', mother: 'bhujangakshi_himavan', yug: 'satya' },
    { id: 'devadhar', name: 'देवधर', subtitle: 'हिमवान के पुत्र', color: '#FFD700', parent: 'himavan', mother: 'bhujangakshi_himavan', yug: 'satya' },

];
