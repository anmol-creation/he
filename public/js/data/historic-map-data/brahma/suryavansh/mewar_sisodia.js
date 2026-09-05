export const mewar_sisodiaData = [

    // Luv's descendants (Leva Patidar, Lohana, Sodhi Khatri)
    {
        id: 'luv_descendants_proxy',
        name: 'लव के वंशज',
        subtitle: 'कुर्मी, लोहाणा',
        parent: 'luv',
        yug: 'kali',
        clusterName: 'लव के वंशज (सूर्यवंशी)',
        isProxy: true
    },
    {
        id: 'leva_patidar',
        name: 'लेवा पाटीदार / कुर्मी',
        subtitle: 'लव के वंशज',
        parent: 'luv_descendants_proxy',
        clusterName: 'लव के वंशज (सूर्यवंशी)',
        yug: 'kali',
        parichay: 'लव की राजधानी लवपुरी (लाहौर) से पलायन कर गुजरात व भारत के अन्य हिस्सों में बसे लेवा पाटीदार (पटेल) और कुर्मी समाज स्वयं को लव का वंशज मानते हैं।'
    },
    {
        id: 'lohana_rajput',
        name: 'लोहाणा समाज',
        subtitle: 'सिंध-गुजरात के क्षत्रिय/वैश्य',
        parent: 'luv_descendants_proxy',
        clusterName: 'लव के वंशज (सूर्यवंशी)',
        yug: 'kali',
        parichay: 'लोहाणा समाज लवपुरी (लाहौर) के पतन के बाद सिंध और गुजरात में बसा। वे स्वयं को लव का वंशज मानते हैं।'
    },

    // Bappa Rawal and Descendants (Guhil/Gehlot dynasty continuation)

    {
        id: 'bhoj_mewar',
        name: 'रावल भोज',
        subtitle: 'मेवाड़ नरेश',
        parent: 'guhadatta_mewar',
        yug: 'kali',
        kali_year: 3688,
        parichay: 'गुहादित्य के उत्तराधिकारी।'
    },
    {
        id: 'mahendra_1_mewar',
        name: 'रावल महेन्द्र (प्रथम)',
        subtitle: 'मेवाड़ नरेश',
        parent: 'bhoj_mewar',
        yug: 'kali',
        kali_year: 3708
    },
    {
        id: 'nagaditya_mewar',
        name: 'रावल नागादित्य',
        subtitle: 'मेवाड़ नरेश',
        parent: 'mahendra_1_mewar',
        yug: 'kali',
        kali_year: 3728,
        parichay: 'इनके शासनकाल में भीलों ने आक्रमण कर ईडर पर अधिकार कर लिया था।'
    },
    {
        id: 'shiladitya_mewar',
        name: 'रावल शीलादित्य',
        subtitle: 'मेवाड़ नरेश',
        parent: 'nagaditya_mewar',
        yug: 'kali',
        kali_year: 3748
    },
    {
        id: 'aparajit_mewar',
        name: 'रावल अपराजित',
        subtitle: 'मेवाड़ नरेश',
        parent: 'shiladitya_mewar',
        yug: 'kali',
        kali_year: 3763
    },
    {
        id: 'mahendra_2_mewar',
        name: 'रावल महेन्द्र (द्वितीय)',
        subtitle: 'मेवाड़ नरेश',
        parent: 'aparajit_mewar',
        yug: 'kali',
        kali_year: 3790,
        parichay: 'ये बप्पा रावल के पिता थे। भीलों के आक्रमण में इनकी मृत्यु हो गई थी।'
    },
    {
        id: 'bappa_rawal',
        name: 'बप्पा रावल (कालभोज)',
        subtitle: 'मेवाड़ राज्य के वास्तविक संस्थापक',
        parent: 'mahendra_2_mewar',
        kali_year: 3836,
        yug: 'kali',
        parichay: 'इन्होंने 8वीं शताब्दी में अरब आक्रमणकारियों को खदेड़ा, चित्तौड़ पर अधिकार किया और भगवान एकलिंग जी के महान मंदिर का निर्माण करवाया।'
    },

    {
        id: 'khuman_1_mewar',
        name: 'रावल खुमाण (प्रथम)',
        subtitle: 'मेवाड़ नरेश',
        parent: 'bappa_rawal',
        yug: 'kali',
        kali_year: 3855,
        parichay: 'बप्पा रावल के उत्तराधिकारी।'
    },
    {
        id: 'mattat_mewar',
        name: 'रावल मत्तट',
        subtitle: 'मेवाड़ नरेश',
        parent: 'khuman_1_mewar',
        yug: 'kali',
        kali_year: 3875
    },
    {
        id: 'bhartripat_1_mewar',
        name: 'भर्तृभट (प्रथम)',
        subtitle: 'मेवाड़ नरेश',
        parent: 'mattat_mewar',
        yug: 'kali',
        kali_year: 3895
    },
    {
        id: 'singh_mewar',
        name: 'रावल सिंह',
        subtitle: 'मेवाड़ नरेश',
        parent: 'bhartripat_1_mewar',
        yug: 'kali',
        kali_year: 3915
    },
    {
        id: 'khuman_2_mewar',
        name: 'रावल खुमाण (द्वितीय)',
        subtitle: 'मेवाड़ नरेश',
        parent: 'singh_mewar',
        yug: 'kali',
        kali_year: 3935
    },
    {
        id: 'mahayaka_mewar',
        name: 'महायाक',
        subtitle: 'मेवाड़ नरेश',
        parent: 'khuman_2_mewar',
        yug: 'kali',
        kali_year: 3955
    },
    {
        id: 'khuman_3_mewar',
        name: 'रावल खुमाण (तृतीय)',
        subtitle: 'मेवाड़ नरेश',
        parent: 'mahayaka_mewar',
        yug: 'kali',
        kali_year: 3975
    },
    {
        id: 'bhartripat_2_mewar',
        name: 'भर्तृभट (द्वितीय)',
        subtitle: 'मेवाड़ नरेश',
        parent: 'khuman_3_mewar',
        yug: 'kali',
        kali_year: 4045
    },
    {
        id: 'allat_mewar',
        name: 'रावल अल्लट (आलू रावल)',
        subtitle: 'मेवाड़ नरेश',
        parent: 'bhartripat_2_mewar',
        yug: 'kali',
        kali_year: 4053,
        parichay: 'इन्होंने आहड़ (Ahar) को मेवाड़ की नई राजधानी बनाया और हूण राजकुमारी हरियादेवी से विवाह किया।'
    },
    {
        id: 'naravahana_mewar',
        name: 'नरवाहन',
        subtitle: 'मेवाड़ नरेश',
        parent: 'allat_mewar',
        yug: 'kali',
        kali_year: 4073
    },
    {
        id: 'shaktikumar_mewar',
        name: 'शक्त कुमार',
        subtitle: 'मेवाड़ नरेश',
        parent: 'naravahana_mewar',
        yug: 'kali',
        kali_year: 4079
    },
    {
        id: 'amraprasad_mewar',
        name: 'आम्रप्रसाद',
        subtitle: 'मेवाड़ नरेश',
        parent: 'shaktikumar_mewar',
        yug: 'kali',
        kali_year: 4095
    },
    {
        id: 'shuchivarma_mewar',
        name: 'शुचिवर्मा',
        subtitle: 'मेवाड़ नरेश',
        parent: 'amraprasad_mewar',
        yug: 'kali',
        kali_year: 4110
    },
    {
        id: 'naravarma_mewar',
        name: 'नरवर्मा',
        subtitle: 'मेवाड़ नरेश',
        parent: 'shuchivarma_mewar',
        yug: 'kali',
        kali_year: 4125
    },
    {
        id: 'kirtivarma_mewar',
        name: 'कीर्तिवर्मा',
        subtitle: 'मेवाड़ नरेश',
        parent: 'naravarma_mewar',
        yug: 'kali',
        kali_year: 4140
    },
    {
        id: 'yograj_mewar',
        name: 'योगराज',
        subtitle: 'मेवाड़ नरेश',
        parent: 'kirtivarma_mewar',
        yug: 'kali',
        kali_year: 4155
    },
    {
        id: 'vairat_mewar',
        name: 'वैराट',
        subtitle: 'मेवाड़ नरेश',
        parent: 'yograj_mewar',
        yug: 'kali',
        kali_year: 4170
    },
    {
        id: 'hanspal_mewar',
        name: 'हंसपाल',
        subtitle: 'मेवाड़ नरेश',
        parent: 'vairat_mewar',
        yug: 'kali',
        kali_year: 4185
    },
    {
        id: 'vairisingh_mewar',
        name: 'वैरीसिंह',
        subtitle: 'मेवाड़ नरेश',
        parent: 'hanspal_mewar',
        yug: 'kali',
        kali_year: 4200
    },
    {
        id: 'vijaysingh_mewar',
        name: 'विजयसिंह',
        subtitle: 'मेवाड़ नरेश',
        parent: 'vairisingh_mewar',
        yug: 'kali',
        kali_year: 4215
    },
    {
        id: 'arisinha_1_mewar',
        name: 'अरिसिंह (प्रथम)',
        subtitle: 'मेवाड़ नरेश',
        parent: 'vijaysingh_mewar',
        yug: 'kali',
        kali_year: 4230
    },
    {
        id: 'chaud_singh_mewar',
        name: 'चौड़ सिंह',
        subtitle: 'मेवाड़ नरेश',
        parent: 'arisinha_1_mewar',
        yug: 'kali',
        kali_year: 4245
    },
    {
        id: 'vikramsingh_mewar',
        name: 'विक्रमसिंह',
        subtitle: 'मेवाड़ नरेश',
        parent: 'chaud_singh_mewar',
        yug: 'kali',
        kali_year: 4255
    },
    {
        id: 'rana_ranasimha',
        name: 'रावल रणसिंह (कर्ण सिंह)',
        subtitle: 'शाखाओं का विभाजन',
        parent: 'vikramsingh_mewar',
        kali_year: 4260,
        yug: 'kali',
        parichay: 'इनके समय में गुहिल वंश दो शाखाओं में बंट गया: 1. रावल शाखा (क्षेमसिंह) और 2. राणा/सिसोदिया शाखा (राहप)।'
    },
    {
        id: 'mewar_dynasty',
        name: 'गुहिल / सिसोदिया वंश',
        subtitle: 'मेवाड़ राजवंश',
        parent: 'rana_ranasimha',
        yug: 'kali',
        clusterName: 'गुहिल (सिसोदिया) वंश',
        isProxy: true
    },

    // Rawal Branch
    {
        id: 'kshem_singh',
        name: 'रावल क्षेमसिंह',
        subtitle: 'रावल शाखा',
        parent: 'rana_ranasimha',
        yug: 'kali',
        clusterName: 'गुहिल (सिसोदिया) वंश'
    },
    {
        id: 'rawal_ratan_singh',
        name: 'रावल रतन सिंह',
        subtitle: 'चित्तौड़ के रावल',
        parent: 'kshem_singh',
        yug: 'kali',
        parichay: 'ये गुहिल वंश की रावल शाखा के अंतिम शासक थे। इन्होने अलाउद्दीन खिलजी के आक्रमण (1303 ई.) का डटकर सामना किया था। रानी पद्मिनी इन्ही की पत्नी थीं, जिन्होंने जौहर किया था।',
        clusterName: 'गुहिल (सिसोदिया) वंश'
    },

    // Sisodia Branch (Rana Branch)

    {
        id: 'khemsingh_mewar',
        name: 'रावल क्षेमसिंह',
        subtitle: 'मेवाड़ (रावल शाखा)',
        parent: 'rana_ranasimha',
        yug: 'kali',
        kali_year: 4270,
        parichay: 'इन्होंने रावल शाखा को आगे बढ़ाया।'
    },
    {
        id: 'samantsingh_mewar',
        name: 'रावल सामंतसिंह',
        subtitle: 'मेवाड़ (रावल शाखा)',
        parent: 'khemsingh_mewar',
        yug: 'kali',
        kali_year: 4275
    },
    {
        id: 'kumarsingh_mewar',
        name: 'रावल कुमारसिंह',
        subtitle: 'मेवाड़ (रावल शाखा)',
        parent: 'khemsingh_mewar',
        yug: 'kali',
        kali_year: 4280
    },
    {
        id: 'mathansingh_mewar',
        name: 'रावल मथनसिंह',
        subtitle: 'मेवाड़ (रावल शाखा)',
        parent: 'kumarsingh_mewar',
        yug: 'kali',
        kali_year: 4290
    },
    {
        id: 'padmasingh_mewar',
        name: 'रावल पद्मसिंह',
        subtitle: 'मेवाड़ (रावल शाखा)',
        parent: 'mathansingh_mewar',
        yug: 'kali',
        kali_year: 4300
    },
    {
        id: 'jaitrasingh_mewar',
        name: 'रावल जैत्रसिंह',
        subtitle: 'मेवाड़ (रावल शाखा)',
        parent: 'padmasingh_mewar',
        yug: 'kali',
        kali_year: 4315,
        parichay: 'इन्होंने भूताला के युद्ध में दिल्ली सुल्तान इल्तुतमिश को पराजित किया था।'
    },
    {
        id: 'tejsingh_mewar',
        name: 'रावल तेजसिंह',
        subtitle: 'मेवाड़ (रावल शाखा)',
        parent: 'jaitrasingh_mewar',
        yug: 'kali',
        kali_year: 4355
    },
    {
        id: 'samarsingh_mewar',
        name: 'रावल समरसिंह',
        subtitle: 'मेवाड़ (रावल शाखा)',
        parent: 'tejsingh_mewar',
        yug: 'kali',
        kali_year: 4375,
        parichay: 'इन्होंने गुजरात जाने वाले अलाउद्दीन खिलजी की सेना से कर (Tax) वसूला था।'
    },
    {
        id: 'ratansingh_mewar',
        name: 'रावल रतनसिंह',
        subtitle: 'मेवाड़ के अंतिम रावल',
        parent: 'samarsingh_mewar',
        yug: 'kali',
        kali_year: 4404,
        parichay: 'चित्तौड़ के शासक और रानी पद्मिनी के पति। 1303 ई. में अलाउद्दीन खिलजी के आक्रमण में वीरगति को प्राप्त हुए। इनके साथ रावल शाखा समाप्त हो गई।'
    },
    {
        id: 'mahap_sisodia',
        name: 'राणा महप',
        subtitle: 'सिसोदिया शाखा',
        parent: 'rahapa',
        yug: 'kali',
        kali_year: 4290
    },
    {
        id: 'bhuvansingh_sisodia',
        name: 'राणा भुवनसिंह',
        subtitle: 'सिसोदिया शाखा',
        parent: 'mahap_sisodia',
        yug: 'kali',
        kali_year: 4310
    },
    {
        id: 'bhimsingh_sisodia',
        name: 'राणा भीमसिंह',
        subtitle: 'सिसोदिया शाखा',
        parent: 'bhuvansingh_sisodia',
        yug: 'kali',
        kali_year: 4330
    },
    {
        id: 'jaysingh_sisodia',
        name: 'राणा जयसिंह',
        subtitle: 'सिसोदिया शाखा',
        parent: 'bhimsingh_sisodia',
        yug: 'kali',
        kali_year: 4350
    },
    {
        id: 'rahapa',
        name: 'राहप',
        subtitle: 'राणा/सिसोदिया शाखा के संस्थापक',
        parent: 'rana_ranasimha',
        yug: 'kali',
        kali_year: 4270,
        parichay: 'इन्होंने सिसोदा ग्राम में जागीर स्थापित की, जिससे इनके वंशज "सिसोदिया" कहलाए और इन्होने "राणा" की उपाधि धारण की।'
    },
    {
        id: 'lakshman_singh_sisodia',
        name: 'राणा लक्ष्मण सिंह',
        subtitle: 'सिसोदा के राणा',
        parent: 'jaysingh_sisodia',
        yug: 'kali',
        kali_year: 4370,
        parichay: '1303 ई. में अलाउद्दीन खिलजी के खिलाफ चित्तौड़ की रक्षा करते हुए अपने 7 पुत्रों सहित वीरगति को प्राप्त हुए।'
    },
    {
        id: 'ari_singh_mewar',
        name: 'अरि सिंह',
        subtitle: 'लक्ष्मण सिंह के पुत्र',
        parent: 'lakshman_singh_sisodia',
        yug: 'kali',
        kali_year: 4390,
        parichay: '1303 ई. में पिता लक्ष्मण सिंह के साथ चित्तौड़ की रक्षा करते हुए वीरगति को प्राप्त हुए।'
    },
    {
        id: 'rana_hammir_sisodia',
        name: 'राणा हम्मीर',
        subtitle: 'सिसोदिया वंश के संस्थापक',
        parent: 'ari_singh_mewar',
        yug: 'kali',
        kali_year: 4428,
        parichay: 'इन्होने 1326 ई. में चित्तौड़ को तुर्कों से वापस छीना और "सिसोदिया" शाखा की पुनर्स्थापना की। इन्हें "विषम घाटी पंचानन" भी कहा जाता है।'
    },

    // Descendants of Sumitra leading to Mewar (According to Raj Prashasti)

    {
        id: 'missing_generations_mewar',
        name: 'ऐतिहासिक अंतराल',
        subtitle: 'अज्ञात पीढ़ियाँ',
        parent: 'sumitra_king',
        yug: 'kali',
        kali_year: 2300,
        isProxy: true,
        clusterName: 'मेवाड़ वंश',
        parichay: 'सुमित्र (नंद काल) और कनकसेन (दूसरी शताब्दी) के मध्य लगभग 1700 वर्षों का अंतराल है। चारण/भाट वंशावलियों में कुछ गिने-चुने नाम मिलते हैं (जैसे वज्रनाभ), लेकिन स्पष्ट है कि यहाँ अनेक पीढ़ियाँ विलुप्त या अज्ञात हैं।'
    },
    {
        id: 'vajranabh',
        name: 'वज्रनाभ',
        subtitle: 'सुमित्र पुत्र',
        parent: 'missing_generations_mewar',
        yug: 'kali',
        kali_year: 3086,
    },
    {
        id: 'maharathi',
        name: 'महारथी',
        subtitle: 'वज्रनाभ पुत्र',
        parent: 'vajranabh',
        yug: 'kali',
        kali_year: 3126,
    },
    {
        id: 'atirathi',
        name: 'अतिरथी',
        subtitle: 'महारथी पुत्र',
        parent: 'maharathi',
        yug: 'kali',
        kali_year: 3166,
    },
    {
        id: 'achalasen',
        name: 'अचलसेन',
        subtitle: 'अतिरथी पुत्र',
        parent: 'atirathi',
        yug: 'kali',
        kali_year: 3206,
    },

    // Guhila / Sisodia Dynasty of Mewar (Origin Debate: Luv vs Kusha)
    {
        id: 'kanaksen',
        name: 'कनकसेन',
        subtitle: 'वल्लभी के संस्थापक',
        parent: 'achalasen',
        yug: 'kali',
        kali_year: 3246,
        parichay: 'ऐतिहासिक डिबेट: कर्नल टॉड के अनुसार कनकसेन लव के वंशज थे जो लाहौर से गुजरात आये। लेकिन मेवाड़ के आधिकारिक "राज प्रशस्ति" शिलालेख के अनुसार, कनकसेन कुश के वंशज राजा सुमित्र की लाइन (सुमित्र -> वज्रनाभ -> महारथी -> अतिरथी -> अचलसेन -> कनकसेन) से आते हैं। इन्होंने सौराष्ट्र में वल्लभी (Vallabhi) राज्य की स्थापना की।'
    },
    {
        id: 'shiladitya_vallabhi',
        name: 'शीलादित्य',
        subtitle: 'वल्लभी के अंतिम शासक',
        parent: 'kanaksen',
        yug: 'kali',
        parichay: 'ये वल्लभी के अंतिम राजा थे। अरब आक्रमण के समय वल्लभी के पतन के बाद इनकी रानी पुष्पावती ने एक गुफा में पुत्र को जन्म दिया।'
    },
    {
        id: 'guhadatta_mewar',
        name: 'गुहादित्य (गुहिल)',
        subtitle: 'गुहिल वंश के संस्थापक',
        parent: 'shiladitya_vallabhi',
        yug: 'kali',
        kali_year: 3668,
        parichay: 'ये वल्लभी के अंतिम राजा शीलादित्य और रानी पुष्पावती के पुत्र थे। गुफा में जन्म लेने के कारण इनका नाम गुहादित्य पड़ा। इन्होने ईडर (मेवाड़) में गुहिल (गहलोत) राजवंश की नींव रखी। इनके वंशज आगे चलकर गुहिल या गहलोत कहलाए।'
    },
];
