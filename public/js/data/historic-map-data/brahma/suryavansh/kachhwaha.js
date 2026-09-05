export const kachhwahaData = [

    // Kachhwaha Dynasty (Descendants of Sumitra/Kusha in Kali Yuga)
    {
        id: 'sodh_dev',
        name: 'सोढ़ देव',
        subtitle: 'नरवर के कच्छपघात राजा',
        parent: 'sumitra_king',
        yug: 'kali',
        parichay: 'सुमित्र के वंशजों ने कालान्तर में ग्वालियर और नरवर में कच्छपघात (कछवाहा) राज्य स्थापित किया। सोढ़ देव नरवर के शासक थे और इन्हीं के पुत्र ने राजस्थान में कछवाहा वंश की नींव रखी।'
    },
    {
        id: 'dulha_rai',
        name: 'दुल्हराय (तेजकरण)',
        subtitle: 'कछवाहा वंश के संस्थापक',
        parent: 'sodh_dev',
        yug: 'kali',
        parichay: 'इन्होंने 1028 ई. के आसपास ढूँढाड़ क्षेत्र (दौसा) में कछवाहा वंश (आमेर) की स्थापना की।'
    },
    {
        id: 'kakil_deo',
        name: 'काकिल देव',
        subtitle: 'दुल्हराय पुत्र',
        parent: 'dulha_rai',
        yug: 'kali'
    },
    {
        id: 'hanu_deo',
        name: 'हनु देव',
        subtitle: 'काकिल देव पुत्र',
        parent: 'kakil_deo',
        yug: 'kali'
    },
    {
        id: 'janad_deo',
        name: 'जान्हड़ देव',
        subtitle: 'हनु देव पुत्र',
        parent: 'hanu_deo',
        yug: 'kali'
    },
    {
        id: 'pajawan',
        name: 'पजवन (प्रद्युम्न)',
        subtitle: 'आमेर के प्रतापी शासक',
        parent: 'janad_deo',
        yug: 'kali',
        parichay: 'ये पृथ्वीराज चौहान के समकालीन थे और उनके बहनोई थे। इन्होंने तराइन के युद्ध और संयोगिता हरण में पृथ्वीराज का साथ दिया था।'
    },
    {
        id: 'malesi',
        name: 'मलेसी',
        subtitle: 'पजवन पुत्र',
        parent: 'pajawan',
        yug: 'kali'
    },
    {
        id: 'bijal_deo',
        name: 'बीजल देव',
        subtitle: 'मलेसी पुत्र',
        parent: 'malesi',
        yug: 'kali'
    },
    {
        id: 'rajdeo',
        name: 'राजदेव',
        subtitle: 'बीजल देव पुत्र',
        parent: 'bijal_deo',
        yug: 'kali'
    },
    {
        id: 'kilhan',
        name: 'किल्हण',
        subtitle: 'राजदेव पुत्र',
        parent: 'rajdeo',
        yug: 'kali'
    },
    {
        id: 'kuntal',
        name: 'कुंतल',
        subtitle: 'किल्हण पुत्र',
        parent: 'kilhan',
        yug: 'kali'
    },
    {
        id: 'junsi',
        name: 'जुंसी',
        subtitle: 'कुंतल पुत्र',
        parent: 'kuntal',
        yug: 'kali'
    },
    {
        id: 'udayakarna',
        name: 'उदयकर्ण',
        subtitle: 'जुंसी पुत्र',
        parent: 'junsi',
        yug: 'kali'
    },

    // Udayakarna's descendants forming sub-clans
    {
        id: 'bar_singh_amer',
        name: 'बर सिंह',
        subtitle: 'उदयकर्ण पुत्र',
        parent: 'udayakarna',
        yug: 'kali'
    },
    {
        id: 'naruka_dynasty_proxy',
        name: 'नरूका वंश',
        subtitle: 'राव नरू के वंशज',
        parent: 'bar_singh_amer',
        yug: 'kali',
        clusterName: 'नरूका वंश',
        isProxy: true
    },
    {
        id: 'naru_singh',
        name: 'राव नरू',
        subtitle: 'नरूका वंश के संस्थापक',
        parent: 'naruka_dynasty_proxy',
        clusterName: 'नरूका वंश',
        yug: 'kali',
        parichay: 'इनके वंशज "नरूका" (Naruka) कहलाए। अलवर का राजघराना नरूका कछवाहों का ही है।'
    },

    {
        id: 'baloji',
        name: 'बालाजी (राव बाला)',
        subtitle: 'उदयकर्ण पुत्र',
        parent: 'udayakarna',
        yug: 'kali'
    },
    {
        id: 'mokal_singh',
        name: 'मोकल सिंह',
        subtitle: 'बालाजी पुत्र',
        parent: 'baloji',
        yug: 'kali'
    },
    {
        id: 'shekhawat_dynasty_proxy',
        name: 'शेखावत वंश',
        subtitle: 'राव शेखा के वंशज',
        parent: 'mokal_singh',
        yug: 'kali',
        parichay: 'कछवाहा राजपूतों की सबसे बड़ी शाखाओं में से एक।',
        isProxy: true,
        clusterName: 'शेखावत वंश'
    },
    {
        id: 'rao_shekha_proxy',
        name: 'राव शेखा',
        subtitle: 'शेखावत वंश के संस्थापक',
        parent: 'shekhawat_dynasty_proxy',
        yug: 'kali',
        parichay: 'इनके नाम पर शेखावाटी क्षेत्र का नाम पड़ा और इनके वंशज "शेखावत" (Shekhawat) कहलाये, जो राजस्थान का एक बहुत बड़ा और वीर राजपूत समाज है।',
        clusterName: 'शेखावत वंश'
    },

    {
        id: 'banbir_singh',
        name: 'बनवीर सिंह',
        subtitle: 'उदयकर्ण पुत्र',
        parent: 'udayakarna',
        yug: 'kali'
    },
    {
        id: 'uddharan_1',
        name: 'उद्धरण',
        subtitle: 'बनवीर पुत्र',
        parent: 'banbir_singh',
        yug: 'kali'
    },
    {
        id: 'chandrasen_amer',
        name: 'चन्द्रसेन',
        subtitle: 'उद्धरण पुत्र',
        parent: 'uddharan_1',
        yug: 'kali'
    },
    {
        id: 'prithviraj_amer',
        name: 'राजा पृथ्वीराज सिंह',
        subtitle: 'आमेर नरेश',
        parent: 'chandrasen_amer',
        yug: 'kali',
        parichay: 'ये राणा सांगा के समकालीन थे और खानवा के युद्ध में उनकी ओर से लड़े थे। इनके 12 पुत्रों से आमेर के "बारह कोटड़ी" (12 Kotri) सामंत व्यवस्था की शुरुआत हुई।'
    },

    // Prithviraj's descendants (12 Kotri branches)
    {
        id: 'bharmal_amer_dup',
        name: 'राजा भारमल',
        subtitle: 'आमेर नरेश',
        parent: 'prithviraj_amer',
        yug: 'kali'
    },
    {
        id: 'bhagwant_das_amer_dup',
        name: 'राजा भगवंत दास',
        subtitle: 'भारमल पुत्र',
        parent: 'bharmal_amer_dup',
        yug: 'kali'
    },
    {
        id: 'man_singh_i_amer_dup',
        name: 'राजा मान सिंह प्रथम',
        subtitle: 'राजावत वंश के संस्थापक',
        parent: 'bhagwant_das_amer_dup',
        yug: 'kali',
        parichay: 'ये अकबर के प्रमुख सेनापति और नवरत्नों में से एक थे। इनके वंशज मुख्य रूप से "राजावत" (Rajawat) कहलाते हैं, जो जयपुर राजघराने का मुख्य गोत्र है।'
    },

    {
        id: 'gopal_singh',
        name: 'गोपाल सिंह',
        subtitle: 'पृथ्वीराज पुत्र',
        parent: 'prithviraj_amer',
        yug: 'kali'
    },
    {
        id: 'nathawat_dynasty_proxy',
        name: 'नाथावत वंश',
        subtitle: 'नाथा जी के वंशज',
        parent: 'gopal_singh',
        yug: 'kali',
        parichay: 'कछवाहा राजपूतों की एक प्रमुख शाखा।',
        isProxy: true,
        clusterName: 'नाथावत वंश'
    },
    {
        id: 'nathaji',
        name: 'नाथा जी',
        subtitle: 'नाथावत वंश के संस्थापक',
        parent: 'nathawat_dynasty_proxy',
        yug: 'kali',
        parichay: 'इनके वंशज "नाथावत" (Nathawat) कहलाये, जो कछवाहों की एक प्रमुख शाखा है।',
        clusterName: 'नाथावत वंश'
    },

    {
        id: 'jagmal_singh',
        name: 'जगमाल सिंह',
        subtitle: 'पृथ्वीराज पुत्र',
        parent: 'prithviraj_amer',
        yug: 'kali'
    },
    {
        id: 'khangarot_dynasty_proxy',
        name: 'खंगारोत वंश',
        subtitle: 'खंगार जी के वंशज',
        parent: 'jagmal_singh',
        yug: 'kali',
        isProxy: true,
        clusterName: 'खंगारोत वंश'
    },
    {
        id: 'khangarji',
        name: 'खंगार जी',
        subtitle: 'खंगारोत वंश के संस्थापक',
        parent: 'khangarot_dynasty_proxy',
        yug: 'kali',
        parichay: 'इनके वंशज "खंगारोत" (Khangarot) कहलाये।',
        clusterName: 'खंगारोत वंश'
    },
    {
        id: 'narsingh_deo',
        name: 'नरसिंह',
        subtitle: 'उदयकर्ण पुत्र (मुख्य धारा)',
        parent: 'udayakarna',
        yug: 'kali'
    },
    {
        id: 'rao_balaji',
        name: 'राव बालाजी',
        subtitle: 'उदयकर्ण पुत्र',
        parent: 'udayakarna',
        yug: 'kali',
        parichay: 'आमेर नरेश उदयकर्ण के पुत्र। इनके वंशज "बालापोता" कहलाये।'
    },
    {
        id: 'rao_mokal',
        name: 'राव मोकल',
        subtitle: 'राव बालाजी पुत्र',
        parent: 'rao_balaji',
        yug: 'kali'
    },
    {
        id: 'rao_shekha',
        name: 'राव शेखा',
        subtitle: 'शेखावत वंश के संस्थापक',
        parent: 'rao_mokal',
        yug: 'kali',
        parichay: 'इन्होंने 15वीं शताब्दी में आमेर से स्वतंत्र होकर अमरसर में अपना राज्य स्थापित किया। इन्हीं के नाम पर शेखावाटी क्षेत्र और "शेखावत" सरनेम/शाखा की शुरुआत हुई।'
    },

    {
        id: 'rao_bar_singh',
        name: 'राव बार सिंह',
        subtitle: 'उदयकर्ण पुत्र',
        parent: 'udayakarna',
        yug: 'kali'
    },
    {
        id: 'rao_naru',
        name: 'राव नरू',
        subtitle: 'नरूका वंश के संस्थापक',
        parent: 'rao_bar_singh',
        yug: 'kali',
        parichay: 'राव बार सिंह के वंशज। इन्हीं के नाम से "नरूका" सरनेम/शाखा की शुरुआत हुई। अलवर का राजघराना नरूका शाखा से ही है।'
    },

    {
        id: 'banbir',
        name: 'बनबीर',
        subtitle: 'नरसिंह पुत्र',
        parent: 'narsingh_deo',
        yug: 'kali'
    },
    {
        id: 'uddharan_2',
        name: 'उद्धरण',
        subtitle: 'बनबीर पुत्र',
        parent: 'banbir',
        yug: 'kali'
    },
    {
        id: 'chandrasen_amber',
        name: 'चंद्रसेन',
        subtitle: 'उद्धरण पुत्र',
        parent: 'uddharan_2',
        yug: 'kali'
    },
    {
        id: 'prithviraj_singh_i',
        name: 'पृथ्वीराज सिंह प्रथम',
        subtitle: 'आमेर नरेश',
        parent: 'chandrasen_amber',
        yug: 'kali',
        parichay: 'इन्होंने राणा सांगा के साथ खानवा के युद्ध (1527) में बाबर के खिलाफ भाग लिया था। इन्हीं के समय में कछवाहा वंश कई मुख्य शाखाओं में विभाजित हुआ जिन्हें "बारां कोठड़ी" कहा गया।'
    },

    // Prithviraj Singh I's descendants forming sub-clans
    {
        id: 'puranmal',
        name: 'पूरनमल',
        subtitle: 'पृथ्वीराज पुत्र',
        parent: 'prithviraj_singh_i',
        yug: 'kali'
    },
    {
        id: 'bhim_singh',
        name: 'भीम सिंह',
        subtitle: 'पूरनमल भ्राता',
        parent: 'prithviraj_singh_i',
        yug: 'kali'
    },
    {
        id: 'ratan_singh',
        name: 'रतन सिंह',
        subtitle: 'भीम सिंह पुत्र',
        parent: 'bhim_singh',
        yug: 'kali'
    },
    {
        id: 'bharmal',
        name: 'राजा भारमल',
        subtitle: 'पृथ्वीराज पुत्र (मुख्य धारा)',
        parent: 'prithviraj_singh_i',
        yug: 'kali',
        parichay: 'ये मुगलों (अकबर) के साथ संधि करने वाले पहले राजपूत शासक थे। इन्होंने अपनी पुत्री जोधा बाई (हरका बाई) का विवाह अकबर से किया था। इनके वंशज आगे चलकर "राजावत" कहलाये।'
    },

    {
        id: 'rao_gopal',
        name: 'राव गोपाल',
        subtitle: 'पृथ्वीराज पुत्र',
        parent: 'prithviraj_singh_i',
        yug: 'kali'
    },
    {
        id: 'rao_natha',
        name: 'राव नाथा',
        subtitle: 'नाथावत वंश के संस्थापक',
        parent: 'rao_gopal',
        yug: 'kali',
        parichay: 'इन्हीं के नाम से "नाथावत" सरनेम/शाखा की शुरुआत हुई। चौमूं के ठाकुर इसी वंश से हैं।'
    },

    {
        id: 'rao_jagmal',
        name: 'राव जगमाल',
        subtitle: 'पृथ्वीराज पुत्र',
        parent: 'prithviraj_singh_i',
        yug: 'kali'
    },
    {
        id: 'rajawat_dynasty_proxy',
        name: 'राजावत वंश',
        subtitle: 'जयपुर राजवंश',
        parent: 'prithviraj_singh_i',
        yug: 'kali',
        clusterName: 'राजावत (कछवाहा) वंश',
        isProxy: true
    },
    {
        id: 'bharmal_kachhwaha',
        name: 'राजा भारमल',
        subtitle: 'पृथ्वीराज पुत्र (मुख्य धारा)',
        parent: 'rajawat_dynasty_proxy',
        yug: 'kali',
        parichay: 'ये मुगलों (अकबर) के साथ संधि करने वाले पहले राजपूत शासक थे। इन्होंने अपनी पुत्री जोधा बाई (हरका बाई) का विवाह अकबर से किया था। इनके वंशज आगे चलकर \"राजावत\" कहलाये।',
        clusterName: 'राजावत (कछवाहा) वंश'
    },
    {
        id: 'rajawat_dynasty',
        name: 'राजावत वंश',
        subtitle: 'जयपुर राजवंश',
        parent: 'bharmal_kachhwaha',
        yug: 'kali',
        clusterName: 'राजावत (कछवाहा) वंश'
    },
    {
        id: 'bhagwant_das_kachhwaha',
        name: 'भगवंत दास',
        subtitle: 'भारमल पुत्र',
        parent: 'bharmal_kachhwaha',
        yug: 'kali',
        clusterName: 'राजावत (कछवाहा) वंश'
    },
    {
        id: 'man_singh_i_kachhwaha',
        name: 'मान सिंह प्रथम',
        subtitle: 'अकबर के सेनापति',
        parent: 'bhagwant_das_kachhwaha',
        yug: 'kali',
        parichay: 'ये मुग़ल साम्राज्य के सबसे प्रमुख सेनापतियों (नवरत्नों) में से एक थे। इन्होंने हल्दीघाटी के युद्ध में महाराणा प्रताप के खिलाफ मुग़ल सेना का नेतृत्व किया था।',
        clusterName: 'राजावत (कछवाहा) वंश'
    },
    {
        id: 'bhao_singh',
        name: 'भाव सिंह',
        subtitle: 'मान सिंह पुत्र',
        parent: 'man_singh_i_kachhwaha',
        yug: 'kali',
        clusterName: 'राजावत (कछवाहा) वंश'
    },
    {
        id: 'maha_singh',
        name: 'महा सिंह',
        subtitle: 'मान सिंह पौत्र',
        parent: 'man_singh_i_kachhwaha',
        yug: 'kali',
        clusterName: 'राजावत (कछवाहा) वंश'
    },
    {
        id: 'jai_singh_i',
        name: 'मिर्ज़ा राजा जय सिंह',
        subtitle: 'महा सिंह पुत्र',
        parent: 'maha_singh',
        yug: 'kali',
        parichay: 'इन्होंने मुग़ल बादशाहों (जहाँगीर, शाहजहां, औरंगज़ेब) के लिए कई युद्ध लड़े और छत्रपति शिवाजी महाराज के साथ पुरंदर की संधि की।',
        clusterName: 'राजावत (कछवाहा) वंश'
    },
    {
        id: 'ram_singh_i',
        name: 'राम सिंह प्रथम',
        subtitle: 'जय सिंह पुत्र',
        parent: 'jai_singh_i',
        yug: 'kali',
        clusterName: 'राजावत (कछवाहा) वंश'
    },
    {
        id: 'bishan_singh',
        name: 'बिशन सिंह',
        subtitle: 'राम सिंह पौत्र',
        parent: 'ram_singh_i',
        yug: 'kali',
        clusterName: 'राजावत (कछवाहा) वंश'
    },
    {
        id: 'sawai_jai_singh_ii',
        name: 'सवाई जय सिंह (द्वितीय)',
        subtitle: 'जयपुर के संस्थापक',
        parent: 'bishan_singh',
        yug: 'kali',
        parichay: 'ये एक महान खगोलशास्त्री और वास्तुकार थे। इन्होंने 1727 में जयपुर शहर बसाया और भारत में 5 जंतर मंतर (वेधशालाएं) बनवाईं।'
    },
    {
        id: 'ishwari_singh',
        name: 'ईश्वरी सिंह',
        subtitle: 'सवाई जय सिंह पुत्र',
        parent: 'sawai_jai_singh_ii',
        yug: 'kali' ,
        clusterName: 'राजावत (कछवाहा) वंश'
    },
    {
        id: 'madho_singh_i',
        name: 'माधो सिंह प्रथम',
        subtitle: 'सवाई जय सिंह पुत्र',
        parent: 'sawai_jai_singh_ii',
        yug: 'kali' ,
        clusterName: 'राजावत (कछवाहा) वंश'
    },
    {
        id: 'prithvi_singh_ii',
        name: 'पृथ्वी सिंह द्वितीय',
        subtitle: 'माधो सिंह पुत्र',
        parent: 'madho_singh_i',
        yug: 'kali' ,
        clusterName: 'राजावत (कछवाहा) वंश'
    },
    {
        id: 'pratap_singh_jaipur',
        name: 'प्रताप सिंह',
        subtitle: 'हवा महल के निर्माता',
        parent: 'madho_singh_i',
        yug: 'kali',
        parichay: 'इन्होंने 1799 में जयपुर का प्रसिद्ध "हवा महल" बनवाया था।'
    },
    {
        id: 'jagat_singh_ii',
        name: 'जगत सिंह द्वितीय',
        subtitle: 'प्रताप सिंह पुत्र',
        parent: 'pratap_singh_jaipur',
        yug: 'kali' ,
        clusterName: 'राजावत (कछवाहा) वंश'
    },
    {
        id: 'ram_singh_ii',
        name: 'राम सिंह द्वितीय',
        subtitle: 'जयपुर नरेश',
        parent: 'jagat_singh_ii',
        yug: 'kali' ,
        clusterName: 'राजावत (कछवाहा) वंश'
    },
    {
        id: 'madho_singh_ii',
        name: 'माधो सिंह द्वितीय',
        subtitle: 'जयपुर नरेश',
        parent: 'ram_singh_ii',
        yug: 'kali' ,
        clusterName: 'राजावत (कछवाहा) वंश'
    },
    {
        id: 'man_singh_ii',
        name: 'सवाई मान सिंह (द्वितीय)',
        subtitle: 'जयपुर के अंतिम शासक',
        parent: 'madho_singh_ii',
        yug: 'kali',
        parichay: 'ये जयपुर रियासत के अंतिम शासक थे (1922-1947), जिनके बाद राजशाही का भारत संघ में विलय हो गया। ये एक प्रसिद्ध पोलो खिलाड़ी भी थे।' ,
        clusterName: 'राजावत (कछवाहा) वंश'
    },
];
