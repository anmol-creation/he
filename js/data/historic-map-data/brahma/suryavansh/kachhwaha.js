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
        yug: 'kali',
        gender: 'male',
        kali_year: 4468, // Roughly 1366 AD
        parichay: 'आमेर के राजा (1366-1388 AD)।'
    },

    // Udayakarna's descendants forming sub-clans
    {
        id: 'bar_singh_amer',
        name: 'बर सिंह',
        subtitle: 'उदयकर्ण पुत्र',
        parent: 'udayakarna',
        yug: 'kali',
        gender: 'male',
        kali_year: 4493
    },
    {
        id: 'naru_singh',
        name: 'राव नरू',
        subtitle: 'नरूका वंश के संस्थापक',
        parent: 'bar_singh_amer',
        clusterName: 'नरूका वंश',
        lineLabel: 'नरूका वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4518,
        parichay: 'मोजद (मोजमाबाद) के महाराव नरू सिंह। इनके वंशज "नरूका" (Naruka) कहलाए और इनके अधीन क्षेत्र को "नरूखंड" कहा गया। अलवर का राजघराना नरूका कछवाहों का ही है।'
    },

    // Sons of Rao Naru Singh (Naruka Clan Branches)
    {
        id: 'dasa_naruka',
        name: 'दासा',
        subtitle: 'राव नरू पुत्र',
        parent: 'naru_singh',
        clusterName: 'नरूका वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4543,
        parichay: 'इनके वंशज दासावत नरूका (Dasawat Naruka) कहलाये। लावा (Lawa) और लडाना ठिकाने के शासक इन्हीं के वंशज हैं।'
    },
    {
        id: 'pratap_singh_naruka',
        name: 'राव प्रताप सिंह',
        subtitle: 'अलवर के संस्थापक',
        parent: 'naru_singh',
        clusterName: 'नरूका वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4877, // Roughly 1775 AD
        parichay: 'इन्होंने 1775 में अलवर (Alwar) रियासत की स्थापना की थी। ये राव नरू के वंशजों में से थे।'
    },
    {
        id: 'nahar_singh_lawa',
        name: 'ठाकुर नाहर सिंह',
        subtitle: 'लावा के संस्थापक',
        parent: 'dasa_naruka',
        clusterName: 'नरूका वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4824, // Roughly 1722 AD
        parichay: 'दासा जी के वंशज। इन्हें जयपुर नरेश ने 1722 ई. में लावा (Lawa) ठिकाने की जागीर दी थी।'
    },
    {
        id: 'lala_naruka',
        name: 'लाला',
        subtitle: 'राव नरू पुत्र',
        parent: 'naru_singh',
        clusterName: 'नरूका वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4544
    },
    {
        id: 'teja_naruka',
        name: 'तेजा',
        subtitle: 'राव नरू पुत्र',
        parent: 'naru_singh',
        clusterName: 'नरूका वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4545
    },
    {
        id: 'jeta_naruka',
        name: 'जेता',
        subtitle: 'राव नरू पुत्र',
        parent: 'naru_singh',
        clusterName: 'नरूका वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4546
    },
    {
        id: 'chitar_naruka',
        name: 'चीतर',
        subtitle: 'राव नरू पुत्र',
        parent: 'naru_singh',
        clusterName: 'नरूका वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4547
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
    {
        id: 'karam_chand_uniara',
        name: 'राव करमचंद',
        subtitle: 'मोजमाबाद के शासक',
        parent: 'dasa_naruka',
        clusterName: 'दासावत (उनियारा) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4627,
        parichay: 'दासा के वंशज। इन्होंने मोजमाबाद पर शासन किया। 1525 ई. के आसपास इनकी मृत्यु हुई।'
    },
    {
        id: 'singhji_uniara',
        name: 'राव सिंह जी',
        subtitle: 'राव करमचंद पुत्र',
        parent: 'karam_chand_uniara',
        clusterName: 'दासावत (उनियारा) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4652
    },
    {
        id: 'jiatsiji_uniara',
        name: 'राव जैतसी जी',
        subtitle: 'राव सिंह जी पुत्र',
        parent: 'singhji_uniara',
        clusterName: 'दासावत (उनियारा) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4677
    },
    {
        id: 'chandrabhan_uniara',
        name: 'राव चंद्रभान',
        subtitle: 'उनियारा के पहले राव',
        parent: 'jiatsiji_uniara',
        clusterName: 'दासावत (उनियारा) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4740,
        parichay: 'मुगल बादशाह शाहजहां से 1638 ई. में उनियारा (Uniara) की जागीर प्राप्त की।'
    },
    {
        id: 'daulat_singh_uniara',
        name: 'राव राजा दौलत सिंह',
        subtitle: 'उनियारा नरेश',
        parent: 'chandrabhan_uniara',
        clusterName: 'दासावत (उनियारा) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4800
    },
    {
        id: 'sangram_singh_i_uniara',
        name: 'राव राजा संग्राम सिंह (प्रथम)',
        subtitle: 'उनियारा नरेश',
        parent: 'daulat_singh_uniara',
        clusterName: 'दासावत (उनियारा) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4838
    },
    {
        id: 'sardar_singh_uniara',
        name: 'राव राजा सरदार सिंह',
        subtitle: 'उनियारा नरेश (1740-1778)',
        parent: 'sangram_singh_i_uniara',
        clusterName: 'दासावत (उनियारा) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4842
    },
    {
        id: 'bhim_singh_uniara',
        name: 'राव राजा भीम सिंह',
        subtitle: 'उनियारा नरेश',
        parent: 'sardar_singh_uniara',
        clusterName: 'दासावत (उनियारा) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4880
    },
    {
        id: 'chandan_kanwar_uniara',
        name: 'रानी चन्दन कंवर',
        subtitle: 'भीम सिंह की पत्नी',
        parent: '',
        spouseOf: 'bhim_singh_uniara',
        clusterName: 'राव भीम सिंह पत्नी',
        gender: 'female',
        yug: 'kali',
        parichay: 'गीजगढ़ के ठाकुर श्याम सिंह की पुत्री।'
    },
    {
        id: 'kirat_singh_uniara',
        name: 'राव राजा कीरत सिंह',
        subtitle: 'उनियारा नरेश',
        parent: 'bhim_singh_uniara',
        clusterName: 'दासावत (उनियारा) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4905
    },
    {
        id: 'fateh_singh_uniara',
        name: 'राव राजा फतेह सिंह',
        subtitle: 'उनियारा नरेश',
        parent: 'kirat_singh_uniara',
        clusterName: 'दासावत (उनियारा) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4930
    },
    {
        id: 'sangram_singh_ii_uniara',
        name: 'राव राजा संग्राम सिंह (द्वितीय)',
        subtitle: 'उनियारा नरेश',
        parent: 'fateh_singh_uniara',
        clusterName: 'दासावत (उनियारा) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4955
    },
    {
        id: 'guman_singh_uniara',
        name: 'राव राजा गुमान सिंह',
        subtitle: 'उनियारा नरेश',
        parent: 'sangram_singh_ii_uniara',
        clusterName: 'दासावत (उनियारा) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4987
    },
    {
        id: 'dashrath_kumari_uniara',
        name: 'रानी दशरथ कुमारी',
        subtitle: 'गुमान सिंह की प्रथम पत्नी',
        parent: '',
        spouseOf: 'guman_singh_uniara',
        clusterName: 'राव गुमान सिंह पत्नी',
        gender: 'female',
        yug: 'kali',
        parichay: 'बनेड़ा के राजा अक्षय सिंह की पुत्री।'
    },
    {
        id: 'mertaniji_uniara',
        name: 'रानी मेड़तनी जी',
        subtitle: 'गुमान सिंह की द्वितीय पत्नी',
        parent: '',
        spouseOf: 'guman_singh_uniara',
        clusterName: 'राव गुमान सिंह पत्नी',
        gender: 'female',
        yug: 'kali'
    },
    {
        id: 'sardar_singh_ii_uniara',
        name: 'राव राजा सरदार सिंह जी',
        subtitle: 'उनियारा नरेश',
        parent: 'guman_singh_uniara',
        mother: 'dashrath_kumari_uniara',
        clusterName: 'दासावत (उनियारा) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4996
    },
    {
        id: 'rajendra_singh_uniara',
        name: 'राव राजा राजेन्द्र सिंह जी',
        subtitle: 'उनियारा नरेश',
        parent: 'sardar_singh_ii_uniara',
        clusterName: 'दासावत (उनियारा) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 5025
    },
    {
        id: 'princess_tout_uniara',
        name: 'रानी (Princess Tout)',
        subtitle: 'राजेन्द्र सिंह पत्नी',
        parent: '',
        spouseOf: 'rajendra_singh_uniara',
        clusterName: 'राव राजेन्द्र सिंह पत्नी',
        gender: 'female',
        yug: 'kali',
        parichay: 'जोधपुर के महाराज श्री अजीत सिंह जी साहिब की पुत्री।'
    },
    {
        id: 'dalpat_singh_uniara',
        name: 'राव राजा दलपत सिंह जी',
        subtitle: 'वर्तमान उनियारा नरेश',
        parent: 'rajendra_singh_uniara',
        mother: 'princess_tout_uniara',
        clusterName: 'दासावत (उनियारा) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 5060
    },
    {
        id: 'jyoti_kumari_uniara',
        name: 'रानी सा ज्योति कुमारी',
        subtitle: 'दलपत सिंह पत्नी',
        parent: '',
        spouseOf: 'dalpat_singh_uniara',
        clusterName: 'राव दलपत सिंह पत्नी',
        gender: 'female',
        yug: 'kali',
        parichay: 'गहनोली के महाराज रघुवीर सिंह की पुत्री।'
    },
    {
        id: 'chandan_das_lawa',
        name: 'राव चन्दन दास',
        subtitle: 'दासा जी पुत्र',
        parent: 'dasa_naruka',
        clusterName: 'लावा ठिकाना (दासावत)',
        gender: 'male',
        yug: 'kali',
        kali_year: 4568
    },
    {
        id: 'kesri_singh_ladana',
        name: 'ठाकुर केसरी सिंह',
        subtitle: 'लडाना के जागीरदार',
        parent: 'chandan_das_lawa',
        clusterName: 'लावा ठिकाना (दासावत)',
        gender: 'male',
        yug: 'kali',
        kali_year: 4768,
        parichay: 'दासा जी की 8वीं पीढ़ी। इन्हें लडाना की जागीर मिली थी।'
    },
    {
        id: 'sawant_singh_ladana',
        name: 'ठाकुर सावंत सिंह',
        subtitle: 'लडाना के जागीरदार',
        parent: 'kesri_singh_ladana',
        clusterName: 'लावा ठिकाना (दासावत)',
        gender: 'male',
        yug: 'kali',
        kali_year: 4793
    },
    {
        id: 'nahar_singh_lawa',
        name: 'ठाकुर नाहर सिंह',
        subtitle: 'लावा के संस्थापक',
        parent: 'sawant_singh_ladana',
        clusterName: 'लावा ठिकाना (दासावत)',
        gender: 'male',
        yug: 'kali',
        kali_year: 4824,
        parichay: 'इन्हें जयपुर नरेश ने 1722 ई. में लावा (Lawa) ठिकाने की जागीर दी थी।'
    },
    {
        id: 'udai_singh_alwar',
        name: 'राव उदय सिंह',
        subtitle: 'राव लाला पुत्र',
        parent: 'lala_naruka',
        clusterName: 'लालावत (अलवर) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4569
    },
    {
        id: 'kalyan_singh_alwar',
        name: 'राव कल्याण सिंह',
        subtitle: 'माचेड़ी के जागीरदार',
        parent: 'udai_singh_alwar',
        clusterName: 'लालावत (अलवर) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4773,
        parichay: 'इन्हें 1671 के आसपास आमेर के मिर्ज़ा राजा जय सिंह से माचेड़ी (Macheri) की जागीर मिली थी।'
    },
    {
        id: 'agar_singh_alwar',
        name: 'राव अगर सिंह',
        subtitle: 'कल्याण सिंह पुत्र',
        parent: 'kalyan_singh_alwar',
        clusterName: 'लालावत (अलवर) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4798
    },
    {
        id: 'hathi_singh_alwar',
        name: 'राव हाथी सिंह',
        subtitle: 'अगर सिंह पुत्र',
        parent: 'agar_singh_alwar',
        clusterName: 'लालावत (अलवर) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4823
    },
    {
        id: 'mukund_singh_alwar',
        name: 'राव मुकुंद सिंह',
        subtitle: 'हाथी सिंह पुत्र',
        parent: 'hathi_singh_alwar',
        clusterName: 'लालावत (अलवर) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4848
    },
    {
        id: 'tej_singh_m_alwar',
        name: 'राव तेज सिंह',
        subtitle: 'मुकुंद सिंह पुत्र',
        parent: 'mukund_singh_alwar',
        clusterName: 'लालावत (अलवर) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4873
    },
    {
        id: 'zorawar_singh_alwar',
        name: 'राव जोरावर सिंह',
        subtitle: 'तेज सिंह पुत्र',
        parent: 'tej_singh_m_alwar',
        clusterName: 'लालावत (अलवर) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4898
    },
    {
        id: 'mohabat_singh_alwar',
        name: 'राव मोहबत सिंह',
        subtitle: 'जोरावर सिंह पुत्र',
        parent: 'zorawar_singh_alwar',
        clusterName: 'लालावत (अलवर) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4923
    },
    {
        id: 'pratap_singh_alwar',
        name: 'राव राजा प्रताप सिंह',
        subtitle: 'अलवर के संस्थापक',
        parent: 'mohabat_singh_alwar',
        clusterName: 'लालावत (अलवर) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4842,
        parichay: 'इन्होंने 1775 में अलवर (Alwar) रियासत की स्थापना की थी।'
    },
    {
        id: 'shyam_singh_thana',
        name: 'राव श्याम सिंह',
        subtitle: 'कल्याण सिंह पुत्र',
        parent: 'kalyan_singh_alwar',
        clusterName: 'थाना ठिकाना',
        gender: 'male',
        yug: 'kali',
        kali_year: 4799
    },
    {
        id: 'madho_singh_thana',
        name: 'राव माधो सिंह',
        subtitle: 'थाना के शासक',
        parent: 'shyam_singh_thana',
        clusterName: 'थाना ठिकाना',
        gender: 'male',
        yug: 'kali',
        kali_year: 4824
    },
    {
        id: 'bridh_singh_thana',
        name: 'राव ब्रिध सिंह',
        subtitle: 'थाना के शासक',
        parent: 'madho_singh_thana',
        clusterName: 'थाना ठिकाना',
        gender: 'male',
        yug: 'kali',
        kali_year: 4849
    },
    {
        id: 'dhir_singh_thana',
        name: 'राव धीर सिंह',
        subtitle: 'थाना के शासक',
        parent: 'bridh_singh_thana',
        clusterName: 'थाना ठिकाना',
        gender: 'male',
        yug: 'kali',
        kali_year: 4874
    },
    {
        id: 'bakhtawar_singh_alwar',
        name: 'राव राजा बख्तावर सिंह',
        subtitle: 'अलवर नरेश',
        parent: 'dhir_singh_thana',
        clusterName: 'लालावत (अलवर) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4881,
        parichay: 'अलवर के दूसरे शासक (1791-1815)। प्रताप सिंह ने इन्हें थाना ठिकाने से गोद लिया था। 1803 में इन्होंने अंग्रेजों से संधि की।'
    },
    {
        id: 'moosi_maharani_alwar',
        name: 'महारानी मूसी',
        subtitle: 'बख्तावर सिंह की पत्नी',
        parent: '',
        spouseOf: 'bakhtawar_singh_alwar',
        clusterName: 'राव बख्तावर सिंह पत्नी',
        gender: 'female',
        yug: 'kali',
        parichay: 'इनके सती होने पर अलवर में प्रसिद्ध \'मूसी महारानी की छतरी\' बनवाई गई।'
    },
    {
        id: 'balwant_singh_alwar',
        name: 'राव राजा बलवंत सिंह',
        subtitle: 'अलवर नरेश',
        parent: 'bakhtawar_singh_alwar',
        mother: 'moosi_maharani_alwar',
        clusterName: 'लालावत (अलवर) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4917
    },
    {
        id: 'salah_singh_thana',
        name: 'राव सलाह सिंह',
        subtitle: 'धीर सिंह पुत्र',
        parent: 'dhir_singh_thana',
        clusterName: 'थाना ठिकाना',
        gender: 'male',
        yug: 'kali',
        kali_year: 4899
    },
    {
        id: 'bane_singh_alwar',
        name: 'राव राजा बन्ने (विनय) सिंह',
        subtitle: 'अलवर नरेश',
        parent: 'salah_singh_thana',
        clusterName: 'लालावत (अलवर) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4918,
        parichay: 'बख्तावर सिंह के भतीजे। इनके समय अलवर सिटी पैलेस (विनय विलास महल) और सिलीसेढ़ लेक पैलेस का निर्माण हुआ।'
    },
    {
        id: 'sujan_kanwarji_alwar',
        name: 'रानी सुजान कंवर जी',
        subtitle: 'बन्ने सिंह की पत्नी',
        parent: '',
        spouseOf: 'bane_singh_alwar',
        clusterName: 'राव बन्ने सिंह पत्नी',
        gender: 'female',
        yug: 'kali'
    },
    {
        id: 'shiv_kanwarji_alwar',
        name: 'रानी शिव कंवर जी',
        subtitle: 'बन्ने सिंह की पत्नी',
        parent: '',
        spouseOf: 'bane_singh_alwar',
        clusterName: 'राव बन्ने सिंह पत्नी',
        gender: 'female',
        yug: 'kali',
        parichay: 'राठौड़ (बीकावत)। बीकानेर राजघराने से।'
    },
    {
        id: 'bhoor_kanwarji_alwar',
        name: 'राजकुमारी भूर कंवर जी',
        subtitle: 'बन्ने सिंह पुत्री',
        parent: 'bane_singh_alwar',
        clusterName: 'लालावत (अलवर) वंश',
        gender: 'female',
        yug: 'kali',
        parichay: 'इनका विवाह बीकानेर के महाराजा सरदार सिंह जी से हुआ था।'
    },
    {
        id: 'shivdan_singh_alwar',
        name: 'राव राजा शिवदान सिंह',
        subtitle: 'अलवर नरेश',
        parent: 'bane_singh_alwar',
        clusterName: 'लालावत (अलवर) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4947
    },
    {
        id: 'roop_kanwarji_alwar',
        name: 'रानी रूप कंवर जी',
        subtitle: 'शिवदान सिंह पत्नी',
        parent: '',
        spouseOf: 'shivdan_singh_alwar',
        clusterName: 'राव शिवदान सिंह पत्नी',
        gender: 'female',
        yug: 'kali',
        parichay: 'झालावाड़ के महाराज राणा पृथ्वी सिंह जी की पुत्री।'
    },
    {
        id: 'surtan_singh_thana',
        name: 'ठाकुर सुरतान सिंह',
        subtitle: 'थाना के ठाकुर',
        parent: 'salah_singh_thana',
        clusterName: 'थाना ठिकाना',
        gender: 'male',
        yug: 'kali',
        kali_year: 4974
    },
    {
        id: 'mangal_singh_alwar',
        name: 'महाराजा मंगल सिंह',
        subtitle: 'अलवर नरेश',
        parent: 'surtan_singh_thana',
        clusterName: 'लालावत (अलवर) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4961,
        parichay: 'थाना ठिकाने से गोद लिए गए। इन्होंने 1889 में \'महाराजा\' की उपाधि प्राप्त की और मेयो कॉलेज से शिक्षा ली।'
    },
    {
        id: 'rajeshree_kishankunwar_alwar',
        name: 'महारानी राजश्री किशनकुंवर जी',
        subtitle: 'मंगल सिंह पत्नी',
        parent: '',
        spouseOf: 'mangal_singh_alwar',
        clusterName: 'महाराजा मंगल सिंह पत्नी',
        gender: 'female',
        yug: 'kali',
        parichay: 'रतलाम के राजा भैरों सिंह जी की पुत्री।'
    },
    {
        id: 'jai_singh_alwar',
        name: 'महाराजा जय सिंह',
        subtitle: 'अलवर नरेश',
        parent: 'mangal_singh_alwar',
        mother: 'rajeshree_kishankunwar_alwar',
        clusterName: 'लालावत (अलवर) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 4984,
        parichay: 'एक महान राष्ट्रवादी और वक्ता। इन्होंने 1933 तक राज किया, जिसके बाद अंग्रेजों ने इन्हें निर्वासित (exile) कर दिया।'
    },
    {
        id: 'tej_singh_alwar',
        name: 'महाराजा तेज सिंह',
        subtitle: 'अलवर के अंतिम शासक',
        parent: 'surtan_singh_thana',
        clusterName: 'लालावत (अलवर) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 5013,
        parichay: 'अलवर के अंतिम महाराजा। 1947 में इन्होंने भारत संघ में विलय के पत्र पर हस्ताक्षर किए।'
    },
    {
        id: 'chand_kumari_alwar',
        name: 'महारानी चाँद कुमारी',
        subtitle: 'तेज सिंह पत्नी',
        parent: '',
        spouseOf: 'tej_singh_alwar',
        clusterName: 'महाराजा तेज सिंह पत्नी',
        gender: 'female',
        yug: 'kali',
        parichay: 'जोधपुर के रावटी ठिकाने से।'
    },
    {
        id: 'pratap_singh_yuvraj_alwar',
        name: 'युवराज प्रताप सिंह',
        subtitle: 'तेज सिंह पुत्र',
        parent: 'tej_singh_alwar',
        mother: 'chand_kumari_alwar',
        clusterName: 'लालावत (अलवर) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 5040
    },
    {
        id: 'jitendra_singh_alwar',
        name: 'महाराजा जितेन्द्र सिंह',
        subtitle: 'वर्तमान अलवर नरेश',
        parent: 'pratap_singh_yuvraj_alwar',
        clusterName: 'लालावत (अलवर) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 5073,
        parichay: 'अलवर राजघराने के वर्तमान प्रमुख।'
    },
    {
        id: 'ambika_devi_alwar',
        name: 'महारानी अम्बिका देवी',
        subtitle: 'जितेन्द्र सिंह पत्नी',
        parent: '',
        spouseOf: 'jitendra_singh_alwar',
        clusterName: 'महाराजा जितेन्द्र सिंह पत्नी',
        gender: 'female',
        yug: 'kali',
        parichay: 'दादा-सीबा (Dada-Siba) राजघराने से।'
    },
    {
        id: 'manavika_kumari_alwar',
        name: 'महाराजकुमारी मानविका कुमारी',
        subtitle: 'जितेन्द्र सिंह पुत्री',
        parent: 'jitendra_singh_alwar',
        mother: 'ambika_devi_alwar',
        clusterName: 'लालावत (अलवर) वंश',
        gender: 'female',
        yug: 'kali',
        kali_year: 5098
    },
    {
        id: 'janaki_kumari_alwar',
        name: 'महाराजकुमारी जानकी कुमारी',
        subtitle: 'जितेन्द्र सिंह पुत्री',
        parent: 'jitendra_singh_alwar',
        mother: 'ambika_devi_alwar',
        clusterName: 'लालावत (अलवर) वंश',
        gender: 'female',
        yug: 'kali',
        kali_year: 5100
    },
    {
        id: 'manavendra_pratap_singh_alwar',
        name: 'युवराज मानवेन्द्र प्रताप सिंह',
        subtitle: 'जितेन्द्र सिंह पुत्र',
        parent: 'jitendra_singh_alwar',
        mother: 'ambika_devi_alwar',
        clusterName: 'लालावत (अलवर) वंश',
        gender: 'male',
        yug: 'kali',
        kali_year: 5103
    },
];
