export const brahmaBaseData = [
    // Wives of Brahma
    { id: 'saraswati', name: 'सरस्वती', subtitle: 'ब्रह्मा की पत्नी / वाग्देवी', spouseOf: 'brahma', yug: 'mahakalp', timeScale: 'mahakalp', clusterName: 'पत्नियाँ' },
    { id: 'savitri', name: 'सावित्री', subtitle: 'ब्रह्मा की पत्नी', spouseOf: 'brahma', yug: 'mahakalp', timeScale: 'mahakalp', clusterName: 'पत्नियाँ' },
    { id: 'gayatri', name: 'गायत्री', subtitle: 'ब्रह्मा की पत्नी', spouseOf: 'brahma', yug: 'mahakalp', timeScale: 'mahakalp', clusterName: 'पत्नियाँ' },

    // Mind/Body-born creations
    { id: 'ribhu', name: 'ऋभु', subtitle: 'मानस पुत्र', parent: 'brahma', yug: 'satya' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'hansa', name: 'हंस', subtitle: 'मानस पुत्र', parent: 'brahma', yug: 'satya' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'atharva', name: 'अथर्वा', subtitle: 'ज्येष्ठ मानस पुत्र', parent: 'brahma', yug: 'satya' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'dharma_deva', name: 'धर्म', subtitle: 'वक्षस्थल से उत्पन्न', parent: 'brahma', yug: 'satya' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'kamadeva', name: 'कामदेव', subtitle: 'हृदय से उत्पन्न', parent: 'brahma', yug: 'satya' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'rudra_ekadash', name: 'रुद्र', subtitle: 'ललाट से उत्पन्न', parent: 'brahma', yug: 'satya' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'adharma', name: 'अधर्म', subtitle: 'पीठ से उत्पन्न', parent: 'brahma', yug: 'satya' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'lobha', name: 'लोभ', subtitle: 'निचले होंठ से उत्पन्न', parent: 'brahma', yug: 'satya' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'krodha', name: 'क्रोध', subtitle: 'भौहों से उत्पन्न', parent: 'brahma', yug: 'satya' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'moha', name: 'मोह', subtitle: 'बुद्धि से उत्पन्न', parent: 'brahma', yug: 'satya' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'ahamkara', name: 'अहंकार', subtitle: 'अहंकार से उत्पन्न', parent: 'brahma', yug: 'satya' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'pramada', name: 'प्रमाद', subtitle: 'कंठ से उत्पन्न', parent: 'brahma', yug: 'satya' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'mrityu', name: 'मृत्यु', subtitle: 'आँखों से उत्पन्न', parent: 'brahma', yug: 'satya' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'bhaya', name: 'भय', subtitle: 'नाभि से उत्पन्न', parent: 'brahma', yug: 'satya' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'nirriti', name: 'निरृति', subtitle: 'मलद्वार से उत्पन्न', parent: 'brahma', yug: 'satya' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'sankalpa', name: 'संकल्प', subtitle: 'इच्छा से उत्पन्न', parent: 'brahma', yug: 'satya' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },

    // Personifications / Veda
        { id: 'char_veda_proxy', name: 'चार वेद', subtitle: 'ब्रह्मा के मुखों से उत्पन्न', parent: 'brahma', yug: 'satya', clusterName: 'चार वेद', isProxy: true },
    { id: 'rigveda', name: 'ऋग्वेद', subtitle: 'पूर्व मुख से', parent: 'brahma', yug: 'satya', clusterName: 'चार वेद' },
    { id: 'yajurveda', name: 'यजुर्वेद', subtitle: 'दक्षिण मुख से', parent: 'brahma', yug: 'satya', clusterName: 'चार वेद' },
    { id: 'samaveda', name: 'सामवेद', subtitle: 'पश्चिम मुख से', parent: 'brahma', yug: 'satya', clusterName: 'चार वेद' },
    { id: 'atharvaveda', name: 'अथर्ववेद', subtitle: 'उत्तर मुख से', parent: 'brahma', yug: 'satya', clusterName: 'चार वेद' },

        { id: 'char_kumar_proxy', name: 'चार कुमार', subtitle: 'ब्रह्मा के मानस पुत्र', parent: 'brahma', yug: 'satya', timeScale: 'kalpa', clusterName: 'चार कुमार', isProxy: true },
    { id: 'sanak', name: 'सनक', subtitle: 'सनत कुमार', parent: 'brahma', yug: 'satya', timeScale: 'kalpa', clusterName: 'चार कुमार' },
    { id: 'sanandan', name: 'सनन्दन', subtitle: 'सनत कुमार', parent: 'brahma', yug: 'satya', timeScale: 'kalpa', clusterName: 'चार कुमार' },
    { id: 'sanatan', name: 'सनातन', subtitle: 'सनत कुमार', parent: 'brahma', yug: 'satya', timeScale: 'kalpa', clusterName: 'चार कुमार' },
    { id: 'sanatkumar', name: 'सनत्कुमार', subtitle: 'सनत कुमार', parent: 'brahma', yug: 'satya', timeScale: 'kalpa', clusterName: 'चार कुमार' },
    {
        id: 'narada',
        name: 'नारद',
        subtitle: 'मानस पुत्र / देवर्षि',
        parent: 'brahma',
        mother: 'मानस पुत्र',
        yug: 'satya',
        parichay: 'देवर्षि नारद, ब्रह्मा के मानस पुत्र।',
        events: ['वाल्मीकि को राम कथा संक्षेप में सुनाई (बालकाण्ड, सर्ग 1)'],
        timeScale: 'kalpa',
        tags: ['सतयुग', 'देवर्षि', 'मानस पुत्र', 'ब्रह्म वंश'],
        aliases: ['त्रिलोक यात्री', 'मुनि'],
        weapons: ['वीणा (महती)', 'करताल'],
        mount: 'खड़ाऊं (इच्छाधारी)',
        abode: 'त्रिलोक (भ्रमणशील)',
        source_texts: ['श्रीमद्भागवत पुराण', 'नारद पुराण', 'महाभारत']
    },
    { id: 'jambavan', name: 'जाम्बवान', subtitle: 'ब्रह्मा की जम्हाई से', parent: 'brahma', yug: 'satya', timeScale: 'kalpa' },
    { id: 'sukumaran', name: 'सुकुमारन', subtitle: 'जाम्बवान के पुत्र', parent: 'jambavan', yug: 'dwapar', timeScale: 'kalpa' },
    { id: 'chitragupta', name: 'चित्रगुप्त', subtitle: 'ब्रह्मा की काया से', parent: 'brahma', yug: 'satya', timeScale: 'kalpa' },
    { id: 'kayastha_vansh', name: 'कायस्थ वंश', subtitle: 'चित्रगुप्त का वंश', parent: 'chitragupta', yug: 'satya', clusterName: 'चित्रगुप्त (कायस्थ) वंश', isProxy: true },
    { id: 'marichi', name: 'मरीचि', subtitle: 'सप्तर्षि / मानस पुत्र', parent: 'brahma', yug: 'satya', timeScale: 'kalpa' },
    { id: 'angiras', name: 'अंगिरस', subtitle: 'सप्तर्षि / मानस पुत्र', parent: 'brahma', yug: 'satya', timeScale: 'kalpa' },
    { id: 'pulastya', name: 'पुलस्त्य', subtitle: 'सप्तर्षि / मानस पुत्र', parent: 'brahma', yug: 'satya', timeScale: 'kalpa' },
    { id: 'pulaha', name: 'पुलह', subtitle: 'सप्तर्षि / मानस पुत्र', parent: 'brahma', yug: 'satya', timeScale: 'kalpa' },
    { id: 'kratu', name: 'क्रतु', subtitle: 'सप्तर्षि / मानस पुत्र', parent: 'brahma', yug: 'satya', timeScale: 'kalpa' },
    { id: 'bhrigu', name: 'भृगु', subtitle: 'मानस पुत्र', parent: 'brahma', yug: 'satya', timeScale: 'kalpa' },
    { id: 'vashistha', name: 'वशिष्ठ', subtitle: 'सप्तर्षि / मानस पुत्र', parent: 'brahma', yug: 'satya', timeScale: 'kalpa' },
    { id: 'atri', name: 'अत्रि', subtitle: 'सप्तर्षि / मानस पुत्र', parent: 'brahma', yug: 'satya', timeScale: 'kalpa' },
    { id: 'daksha', name: 'दक्ष प्रजापति', subtitle: 'अंगूठे से उत्पन्न', parent: 'brahma', yug: 'satya', timeScale: 'kalpa' },
    { id: 'svayambhuva_manu_brahma', name: 'स्वायंभुव मनु', subtitle: 'प्रथम पुरुष', parent: 'brahma', yug: 'satya', manvantara: 1 },
    { id: 'shatarupa_brahma', name: 'शतरूपा', subtitle: 'प्रथम स्त्री', parent: 'brahma', spouseOf: 'svayambhuva_manu_brahma', yug: 'satya' },

    { id: 'akuti', name: 'आकूति', subtitle: 'मनु पुत्री', parent: 'svayambhuva_manu_brahma', mother: 'shatarupa_brahma', yug: 'satya' },
    { id: 'ruci_prajapati', name: 'रुचि', subtitle: 'प्रजापति', parent: 'brahma', spouseOf: 'akuti', yug: 'satya' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'yajna_avatar', name: 'यज्ञ', subtitle: 'विष्णु अवतार', parent: 'ruci_prajapati', mother: 'akuti', yug: 'satya' },
    { id: 'dakshina', name: 'दक्षिणा', subtitle: 'यज्ञ की पत्नी', parent: 'ruci_prajapati', mother: 'akuti', spouseOf: 'yajna_avatar', yug: 'satya' },

    { id: 'devahuti', name: 'देवहूति', subtitle: 'मनु पुत्री', parent: 'svayambhuva_manu_brahma', mother: 'shatarupa_brahma', yug: 'satya' },
    { id: 'kardama_prajapati', name: 'कर्दम (प्रजापति)', subtitle: 'ब्रह्मा की छाया से', parent: 'brahma', spouseOf: 'devahuti', yug: 'satya' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'kapila_avatar', name: 'कपिल मुनि', subtitle: 'विष्णु अवतार', parent: 'kardama_prajapati', mother: 'devahuti', yug: 'satya', parichay: 'सांख्य दर्शन के प्रणेता महान मुनि और विष्णु के अवतार।' },

    // --- MARICHI LINEAGE ---
        { id: 'marichi_wives_proxy', name: 'मरीचि की पत्नियाँ', subtitle: 'कला, सम्भूति व उर्णा', parent: '', spouseOf: 'marichi', yug: 'satya', clusterName: 'मरीचि की पत्नियाँ', isProxy: true },
    { id: 'kala', name: 'कला', subtitle: 'कर्दम पुत्री / मरीचि पत्नी', parent: 'kardama_prajapati', mother: 'devahuti', spouseOf: 'marichi', yug: 'satya', clusterName: 'मरीचि की पत्नियाँ' },
    { id: 'sambhuti_marichi', name: 'सम्भूति', subtitle: 'दक्ष पुत्री / मरीचि पत्नी', parent: 'daksha', spouseOf: 'marichi', yug: 'satya', clusterName: 'मरीचि की पत्नियाँ' },
    { id: 'urna_marichi', name: 'उर्णा', subtitle: 'मरीचि की पत्नी', spouseOf: 'marichi', yug: 'satya', clusterName: 'मरीचि की पत्नियाँ' },

    // Marichi's children from Kala
    { id: 'purnima_marichi', name: 'पूर्णिमा', subtitle: 'मरीचि पुत्र', parent: 'marichi', mother: 'kala', yug: 'satya' , clusterName: 'मरीचि वंश' },
    { id: 'viraja_purnima', name: 'विरज', subtitle: 'पूर्णिमा पुत्र', parent: 'purnima_marichi', yug: 'satya' , clusterName: 'मरीचि वंश' },
    { id: 'vishvaga_purnima', name: 'विश्वग', subtitle: 'पूर्णिमा पुत्र', parent: 'purnima_marichi', yug: 'satya' , clusterName: 'मरीचि वंश' },
    { id: 'devakulya_purnima', name: 'देवकुल्या', subtitle: 'पूर्णिमा पुत्री', parent: 'purnima_marichi', yug: 'satya', parichay: 'पूर्णिमा की पुत्री जो बाद में नदी रूप (गंगा) में परिणत हुईं।' , clusterName: 'मरीचि वंश' },

    // Marichi's child from Sambhuti
    { id: 'paurnamasa_marichi', name: 'पौर्णमास', subtitle: 'मरीचि पुत्र', parent: 'marichi', mother: 'sambhuti_marichi', yug: 'satya' , clusterName: 'मरीचि वंश' },

    // Marichi's Apsara Daughters
    { id: 'sulochna_apsara', name: 'सुलोचना', subtitle: 'मरीचि पुत्री (अप्सरा)', parent: 'marichi', yug: 'satya' , clusterName: 'मरीचि वंश' },
    { id: 'vishalakshi_apsara', name: 'विशालाक्षी', subtitle: 'मरीचि पुत्री (अप्सरा)', parent: 'marichi', yug: 'satya' , clusterName: 'मरीचि वंश' },
    { id: 'suvarna_apsara', name: 'सुवर्णा', subtitle: 'मरीचि पुत्री (अप्सरा)', parent: 'marichi', yug: 'satya' , clusterName: 'मरीचि वंश' },
    { id: 'bhadraka_apsara', name: 'भद्रका', subtitle: 'मरीचि पुत्री (अप्सरा)', parent: 'marichi', yug: 'satya' , clusterName: 'मरीचि वंश' },
    // ----------------------

    { id: 'anusuya', name: 'अनुसूया', subtitle: 'कर्दम पुत्री / अत्रि पत्नी', parent: 'kardama_prajapati', mother: 'devahuti', spouseOf: 'atri', yug: 'satya', parichay: 'सती अनुसूया, जिन्होंने त्रिदेवों को बालक बना दिया था।', clusterName: 'अत्रि की पत्नियाँ' },
    { id: 'shanti', name: 'शांति', subtitle: 'कर्दम पुत्री / अथर्वा पत्नी', parent: 'kardama_prajapati', mother: 'devahuti', yug: 'satya' },

    { id: 'prasuti_daughter', name: 'प्रसूति', subtitle: 'मनु पुत्री', parent: 'svayambhuva_manu_brahma', mother: 'shatarupa_brahma', spouseOf: 'daksha', yug: 'satya' },

    { id: 'uttanapada', name: 'उत्तानपाद', subtitle: 'मनु के पुत्र', parent: 'svayambhuva_manu_brahma', mother: 'shatarupa_brahma', yug: 'satya' },
    { id: 'suniti', name: 'सुनीति', subtitle: 'उत्तानपाद पत्नी', parent: '', spouseOf: 'uttanapada', yug: 'satya', clusterName: 'उत्तानपाद की 2 पत्नियाँ' },
    { id: 'suruchi', name: 'सुरुचि', subtitle: 'उत्तानपाद पत्नी', parent: '', spouseOf: 'uttanapada', yug: 'satya', clusterName: 'उत्तानपाद की 2 पत्नियाँ' },
    { id: 'uttama', name: 'उत्तम', subtitle: 'उत्तानपाद पुत्र', parent: 'uttanapada', mother: 'suruchi', yug: 'satya' },
    { id: 'dhruva', name: 'ध्रुव', subtitle: 'परम भक्त / ध्रुव तारा', parent: 'uttanapada', mother: 'suniti', yug: 'satya' },
    { id: 'shlishti', name: 'श्लिष्टि', subtitle: 'ध्रुव पुत्र', parent: 'dhruva', yug: 'satya' },
    { id: 'ripu', name: 'रिपु', subtitle: 'श्लिष्टि पुत्र', parent: 'shlishti', yug: 'satya' },
    { id: 'chakshusha_manu', name: 'चाक्षुष मनु', subtitle: 'रिपु पुत्र', parent: 'ripu', yug: 'satya', parichay: 'छठे मन्वंतर के अधिपति चाक्षुष मनु।', manvantara: 6 },
    { id: 'uru', name: 'उरु', subtitle: 'मनु पुत्र', parent: 'chakshusha_manu', yug: 'satya' },
    { id: 'anga_king', name: 'अंग (वेन के पिता)', subtitle: 'उरु पुत्र', parent: 'uru', yug: 'satya' },
    { id: 'vena', name: 'वेन', subtitle: 'अधर्मी राजा', parent: 'anga_king', yug: 'satya' },
    { id: 'prithu', name: 'पृथु', subtitle: 'जिनके नाम पर पृथ्वी', parent: 'vena', yug: 'satya' },
    { id: 'vijitashva', name: 'विजिताश्व', subtitle: 'पृथु पुत्र', parent: 'prithu', yug: 'satya' },
    { id: 'haryashva', name: 'हर्यश्व', subtitle: 'विजिताश्व पुत्र', parent: 'vijitashva', yug: 'satya' },
    { id: 'prachinabarhi', name: 'प्राचीनबर्हि', subtitle: 'हर्यश्व पुत्र', parent: 'haryashva', yug: 'satya' },
    { id: 'pracetas', name: 'प्रचेतागण (10)', subtitle: 'प्राचीनबर्हि पुत्र', parent: 'prachinabarhi', yug: 'satya', parichay: 'प्राचीनबर्हि के 10 पुत्र जिन्होंने 10,000 वर्ष समुद्र में तपस्या की।' },

    { id: 'priyavrata', name: 'प्रियव्रत', subtitle: 'मनु के पुत्र', parent: 'svayambhuva_manu_brahma', mother: 'shatarupa_brahma', yug: 'satya' },
    { id: 'agnidhra', name: 'आग्नीध्र', subtitle: 'प्रियव्रत पुत्र', parent: 'priyavrata', yug: 'satya', parichay: 'जम्बूद्वीप (एशिया) के प्रथम शासक।' },
    { id: 'nabhi', name: 'नाभि', subtitle: 'आग्नीध्र पुत्र', parent: 'agnidhra', yug: 'satya' },
    { id: 'merudevi', name: 'मेरुदेवी', subtitle: 'नाभि पत्नी', parent: '', spouseOf: 'nabhi', yug: 'satya' },
    { id: 'rishabhdev', name: 'ऋषभदेव', subtitle: 'तीर्थंकर / विष्णु अवतार', parent: 'nabhi', mother: 'merudevi', yug: 'satya', parichay: 'भगवान विष्णु के अंशावतार और जैन धर्म के प्रथम तीर्थंकर (आदिनाथ)।' },
    { id: 'jayanti_rishabha', name: 'जयन्ती', subtitle: 'इंद्र पुत्री / ऋषभ पत्नी', parent: 'indra', spouseOf: 'rishabhdev', yug: 'satya' },
    { id: 'bharata_jada', name: 'भरत (जड़ भरत)', subtitle: 'चक्रवर्ती सम्राट', parent: 'rishabhdev', mother: 'jayanti_rishabha', yug: 'satya', parichay: 'महान चक्रवर्ती सम्राट, जिनके नाम पर हमारे देश का नाम भारतवर्ष पड़ा।' },

    // Deeper Lineage of Bharata
    { id: 'sumati_bharata', name: 'सुमति', subtitle: 'भरत पुत्र', parent: 'bharata_jada', yug: 'satya' },
    { id: 'devatajit', name: 'देवतजित', subtitle: 'सुमति पुत्र', parent: 'sumati_bharata', yug: 'satya' },
    { id: 'devadyumna', name: 'देवद्युम्न', subtitle: 'देवतजित पुत्र', parent: 'devatajit', yug: 'satya' },
    { id: 'parameshthi', name: 'परमेष्ठी', subtitle: 'देवद्युम्न पुत्र', parent: 'devadyumna', yug: 'satya' },
    { id: 'pratiha', name: 'प्रतीह', subtitle: 'परमेष्ठी पुत्र', parent: 'parameshthi', yug: 'satya' },
    { id: 'pratihartri', name: 'प्रतिहर्त्री', subtitle: 'प्रतीह पुत्र', parent: 'pratiha', yug: 'satya' },
    { id: 'bhumana', name: 'भूमन', subtitle: 'प्रतिहर्त्री पुत्र', parent: 'pratihartri', yug: 'satya' },
    { id: 'udgitha', name: 'उद्गीथ', subtitle: 'भूमन पुत्र', parent: 'bhumana', yug: 'satya' },
    { id: 'prastota', name: 'प्रस्तोता', subtitle: 'उद्गीथ पुत्र', parent: 'udgitha', yug: 'satya' },
    { id: 'vibhu', name: 'विभु', subtitle: 'प्रस्तोता पुत्र', parent: 'prastota', yug: 'satya' },
    { id: 'prithushena', name: 'पृथुषेण', subtitle: 'विभु पुत्र', parent: 'vibhu', yug: 'satya' },
    { id: 'nakta', name: 'नक्त', subtitle: 'पृथुषेण पुत्र', parent: 'prithushena', yug: 'satya' },
    { id: 'gaya', name: 'गया (राजर्षि)', subtitle: 'नक्त पुत्र', parent: 'nakta', yug: 'satya', parichay: 'विष्णु के अंशावतार और एक अत्यंत महान और न्यायप्रिय राजर्षि। विष्णु पुराण और भागवत के अनुसार ये बहुत बड़े सिद्ध राजा थे।' },
        { id: 'angiras_vansh_proxy', name: 'अंगिरस वंश', subtitle: 'अंगिरस के वंशज', parent: 'angiras', yug: 'satya', clusterName: 'अंगिरस वंश', isProxy: true },
    { id: 'shraddha', name: 'श्रद्धा (स्मृति)', subtitle: 'अंगिरस की पत्नी', parent: '', spouseOf: 'angiras', yug: 'satya', parichay: 'सप्तर्षि अंगिरस की प्रमुख पत्नी। विभिन्न पुराणों में इन्हें श्रद्धा (कर्दम पुत्री) और स्मृति (दक्ष पुत्री) कहा गया है।', clusterName: 'अंगिरस वंश' },
    { id: 'sinivali', name: 'सिनीवाली', subtitle: 'अंगिरस पुत्री', parent: 'angiras', mother: 'shraddha', yug: 'satya', parichay: 'अमावस्या की पहली तिथि का मूर्तरूप।', clusterName: 'अंगिरस वंश' },
    { id: 'kuhu', name: 'कुहू', subtitle: 'अंगिरस पुत्री', parent: 'angiras', mother: 'shraddha', yug: 'satya', parichay: 'अमावस्या की दूसरी तिथि।', clusterName: 'अंगिरस वंश' },
    { id: 'raka', name: 'राका', subtitle: 'अंगिरस पुत्री', parent: 'angiras', mother: 'shraddha', yug: 'satya', parichay: 'पूर्णिमा की पहली तिथि।', clusterName: 'अंगिरस वंश' },
    { id: 'anumati', name: 'अनुमति', subtitle: 'अंगिरस पुत्री', parent: 'angiras', mother: 'shraddha', yug: 'satya', parichay: 'पूर्णिमा की दूसरी तिथि।', clusterName: 'अंगिरस वंश' },
    { id: 'utathya', name: 'उतथ्य', subtitle: 'अंगिरस के बड़े पुत्र', parent: 'angiras', mother: 'shraddha', yug: 'satya', clusterName: 'अंगिरस वंश' },
    { id: 'samvarta', name: 'संवर्त', subtitle: 'अवधूत ऋषि', parent: 'angiras', mother: 'shraddha', yug: 'satya', parichay: 'संवर्त एक महान अवधूत और दिगंबर सन्यासी थे, जिन्होंने राजा मरुत्त का स्वर्ण यज्ञ करवाया था।', clusterName: 'अंगिरस वंश' },
    { id: 'brihaspati', name: 'बृहस्पति', subtitle: 'देवताओं के गुरु', parent: 'angiras', mother: 'shraddha', yug: 'satya', clusterName: 'अंगिरस वंश' },
    { id: 'mamata', name: 'ममता', subtitle: 'उतथ्य की पत्नी', parent: '', spouseOf: 'utathya', yug: 'satya', clusterName: 'अंगिरस वंश' },
    { id: 'dirghatamas', name: 'दीर्घतमस', subtitle: 'अंधे महर्षि', parent: 'utathya', mother: 'mamata', yug: 'treta', parichay: 'बृहस्पति के शाप के कारण ये जन्म से अंधे थे। बाद में इन्होने राजा बलि की पत्नी सुदेष्णा के गर्भ से ५ पुत्रों को जन्म दिया।', clusterName: 'अंगिरस वंश' },
    { id: 'pradveshi', name: 'प्रद्वेषी', subtitle: 'दीर्घतमस की प्रथम पत्नी', parent: '', spouseOf: 'dirghatamas', yug: 'treta', clusterName: 'अंगिरस वंश' },
    { id: 'gautama', name: 'गौतम', subtitle: 'सप्तर्षि', parent: 'dirghatamas', mother: 'pradveshi', yug: 'treta', clusterName: 'अंगिरस वंश' },
    { id: 'ahalya', name: 'अहल्या', subtitle: 'गौतम की पत्नी', parent: '', spouseOf: 'gautama', yug: 'treta', clusterName: 'अंगिरस वंश' },
    { id: 'shatananda', name: 'शतानन्द', subtitle: 'गौतम-अहल्या पुत्र', parent: 'gautama', mother: 'ahalya', yug: 'treta', parichay: 'राजा जनक के राजपुरोहित।', clusterName: 'अंगिरस वंश' },
    { id: 'nodha', name: 'नोधा', subtitle: 'गौतम-अहल्या पुत्र', parent: 'gautama', mother: 'ahalya', yug: 'treta', parichay: 'ऋग्वेद के मंत्रद्रष्टा।', clusterName: 'अंगिरस वंश' },
    { id: 'vamadeva', name: 'वामदेव', subtitle: 'गौतम-अहल्या पुत्र', parent: 'gautama', mother: 'ahalya', yug: 'treta', parichay: 'ऋग्वेद के मंत्रद्रष्टा।', clusterName: 'अंगिरस वंश' },
    { id: 'sharadvan', name: 'शरद्वान', subtitle: 'शतानन्द के पुत्र', parent: 'shatananda', yug: 'treta', clusterName: 'अंगिरस वंश' },
    { id: 'kripacharya', name: 'कृपाचार्य', subtitle: 'कौरव कुलगुरु / चिरंजीवी', parent: 'sharadvan', yug: 'dwapar', clusterName: 'अंगिरस वंश' },
    { id: 'tara_brihaspati', name: 'तारा', subtitle: 'बृहस्पति की पत्नी', parent: '', spouseOf: 'brihaspati', yug: 'satya', clusterName: 'अंगिरस वंश' },
    { id: 'kacha', name: 'कच', subtitle: 'बृहस्पति के पुत्र', parent: 'brihaspati', mother: 'tara_brihaspati', yug: 'satya', parichay: 'इन्होंने शुक्राचार्य से मृत-संजीवनी विद्या प्राप्त की थी।', clusterName: 'अंगिरस वंश' },
    { id: 'bharadwaja', name: 'भारद्वाज', subtitle: 'सप्तर्षि / अंगिरस वंश', parent: 'brihaspati', mother: 'mamata', yug: 'treta', parichay: 'बृहस्पति और ममता के मिलन से उत्पन्न। बाद में राजा भरत ने इन्हें गोद लिया था।', clusterName: 'अंगिरस वंश' },
    { id: 'usij', name: 'उशिज', subtitle: 'दासी', parent: '', spouseOf: 'dirghatamas', yug: 'treta', clusterName: 'अंगिरस वंश' },
    { id: 'kakshivan', name: 'कक्षीवान', subtitle: 'दीर्घतमस पुत्र', parent: 'dirghatamas', mother: 'usij', yug: 'treta', clusterName: 'अंगिरस वंश' },
    { id: 'kakshivan_patni', name: 'राजा स्वनय की पुत्रियां', subtitle: 'कक्षीवान की पत्नियाँ', parent: '', spouseOf: 'kakshivan', yug: 'treta', clusterName: 'अंगिरस वंश' },
    { id: 'ghosha', name: 'घोषाल / घोषा', subtitle: 'कक्षीवान पुत्री', parent: 'kakshivan', mother: 'kakshivan_patni', yug: 'treta', parichay: 'ऋग्वेद की ऋषिका। अश्विनी कुमारों ने इनका कुष्ठ रोग ठीक किया था।', clusterName: 'अंगिरस वंश' },
    { id: 'sukirti', name: 'सुकीर्ति', subtitle: 'कक्षीवान पुत्र', parent: 'kakshivan', mother: 'kakshivan_patni', yug: 'treta', clusterName: 'अंगिरस वंश' },
    { id: 'sabara', name: 'शबर', subtitle: 'कक्षीवान पुत्र', parent: 'kakshivan', mother: 'kakshivan_patni', yug: 'treta', clusterName: 'अंगिरस वंश' },
    { id: 'garga', name: 'गर्ग', subtitle: 'भारद्वाज पुत्र', parent: 'bharadwaja', yug: 'dwapar', parichay: 'यादवों के कुलगुरु।', clusterName: 'अंगिरस वंश' },
    { id: 'ilavida', name: 'इड़विड़ा', subtitle: 'भारद्वाज पुत्री', parent: 'bharadwaja', spouseOf: 'vishrava', yug: 'treta', parichay: 'विश्रवा की पत्नी और कुबेर की माता।', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)' },
    { id: 'drona', name: 'द्रोणाचार्य', subtitle: 'कौरवों के गुरु', parent: 'bharadwaja', yug: 'dwapar', clusterName: 'अंगिरस वंश' },
    { id: 'kripi', name: 'कृपी', subtitle: 'द्रोणाचार्य की पत्नी', parent: 'sharadvan', spouseOf: 'drona', yug: 'dwapar', parichay: 'शतानन्द के पुत्र शरद्वान की पुत्री और कृपाचार्य की जुड़वाँ बहन।', clusterName: 'अंगिरस वंश' },
    { id: 'ashwatthama', name: 'अश्वत्थामा', subtitle: 'द्रोण पुत्र / चिरंजीवी', parent: 'drona', mother: 'kripi', yug: 'dwapar', clusterName: 'अंगिरस वंश' },

    // --- PULASTYA LINEAGE ---
    { id: 'pulastya_vansh_proxy', name: 'पुलस्त्य वंश', subtitle: 'कुबेर, रावण आदि', parent: '', spouseOf: 'pulastya', yug: 'treta', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)', isProxy: true },
    { id: 'havirbhu', name: 'हविर्भू', subtitle: 'कर्दम ऋषि पुत्री', parent: '', spouseOf: 'pulastya', yug: 'satya', parichay: 'पुलस्त्य ऋषि की पत्नी और विश्रवा की माता।', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)'  },
    { id: 'vishrava', name: 'विश्रवा', subtitle: 'पुलस्त्य पुत्र', parent: 'pulastya', mother: 'havirbhu', yug: 'treta', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)'  },
    { id: 'kaikesi', name: 'कैकेसी', subtitle: 'सुमाली की पुत्री', parent: '', spouseOf: 'vishrava', yug: 'treta', parichay: 'राक्षस राज सुमाली की पुत्री और रावण, कुम्भकर्ण, विभीषण व शूर्पणखा की माता।', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)' },
    { id: 'pushpotkata', name: 'पुष्पोत्कटा', subtitle: 'विश्रवा की पत्नी', parent: '', spouseOf: 'vishrava', yug: 'treta', parichay: 'विश्रवा की पत्नी और खर की माता।', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)' },
    { id: 'malini', name: 'मालिनी', subtitle: 'विश्रवा की पत्नी', parent: '', spouseOf: 'vishrava', yug: 'treta', parichay: 'विश्रवा की पत्नी और दूषण की माता।', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)' },

    // Kuber's family
    { id: 'kuber', name: 'कुबेर', subtitle: 'यक्षराज', parent: 'vishrava', mother: 'ilavida', yug: 'treta', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)'  },
    { id: 'bhadra', name: 'भद्रा', subtitle: 'कुबेर की पत्नी', parent: '', spouseOf: 'kuber', yug: 'treta', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)'  },
    { id: 'nalakubara', name: 'नलकूबर', subtitle: 'कुबेर पुत्र', parent: 'kuber', mother: 'bhadra', yug: 'treta', parichay: 'नारद शाप से यमलार्जुन वृक्ष बना था।', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)'  },
    { id: 'manigriva', name: 'मणिग्रीव', subtitle: 'कुबेर पुत्र', parent: 'kuber', mother: 'bhadra', yug: 'treta', parichay: 'नारद शाप से यमलार्जुन वृक्ष बना था।', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)'  },

    // Siblings of Ravan
    { id: 'shurpanakha', name: 'शूर्पणखा', subtitle: 'रावण की बहन', parent: 'vishrava', mother: 'kaikesi', yug: 'treta', parichay: 'रावण की दुष्ट बहन जिसने राम-लक्ष्मण को उकसाया।', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)'  },
    { id: 'khara', name: 'खर', subtitle: 'रावण का भाई', parent: 'vishrava', mother: 'pushpotkata', yug: 'treta', parichay: 'रावण का सौतेला भाई, जो दंडकारण्य में राक्षसों का सेनापति था।', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)'  },
    { id: 'dushana', name: 'दूषण', subtitle: 'रावण का भाई', parent: 'vishrava', mother: 'malini', yug: 'treta', parichay: 'खर का भाई, राम द्वारा वध किया गया।', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)'  },

    // Ravan and his family
    { id: 'ravana', name: 'रावण', subtitle: 'लंकेश', parent: 'vishrava', mother: 'kaikesi', yug: 'treta',
      events: [
        'मारीच की सहायता से राम-लक्ष्मण को आश्रम से दूर कर सीता का अपहरण किया और जटायु का वध किया। (बालकाण्ड, सर्ग 1, श्लोक 49-52)',
        'राम द्वारा युद्ध में मारे गए। (बालकाण्ड, सर्ग 1, श्लोक 81)'
      ],
      clusterName: 'पुलस्त्य वंश (रावण/कुबेर)'
    },
    { id: 'mandodari', name: 'मंदोदरी', subtitle: 'मयासुर पुत्री / पञ्चकन्या', parent: '', spouseOf: 'ravana', yug: 'treta', parichay: 'रावण की प्रधान रानी और मेघनाद की माता।', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)' },
    { id: 'dhanyamalini', name: 'धन्यमालिनी', subtitle: 'रावण की पत्नी', parent: '', spouseOf: 'ravana', yug: 'treta', parichay: 'रावण की दूसरी पत्नी और अतिकाय की माता।', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)' },
    { id: 'meghnad', name: 'इंद्रजीत (मेघनाद)', subtitle: 'रावण पुत्र', parent: 'ravana', mother: 'mandodari', yug: 'treta', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)'  },
    { id: 'akshayakumara', name: 'अक्षयकुमार', subtitle: 'रावण का पुत्र', parent: 'ravana', mother: 'mandodari', yug: 'treta', parichay: 'अशोक वाटिका में हनुमान जी द्वारा वध किया गया।', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)' },
    { id: 'atikaya', name: 'अतिकाय', subtitle: 'रावण का पुत्र', parent: 'ravana', mother: 'dhanyamalini', yug: 'treta', parichay: 'रावण का बलवान पुत्र जिसे लक्ष्मण ने मारा।', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)'  },
    { id: 'trishira', name: 'त्रिशिरा', subtitle: 'रावण का पुत्र', parent: 'ravana', mother: 'dhanyamalini', yug: 'treta', parichay: 'रावण का एक और पुत्र। (खर-दूषण का सेनापति त्रिशिरा अलग था)', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)'  },
    { id: 'narantaka', name: 'नरान्तक', subtitle: 'रावण का पुत्र', parent: 'ravana', yug: 'treta', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)'  },
    { id: 'devantaka', name: 'देवान्तक', subtitle: 'रावण का पुत्र', parent: 'ravana', yug: 'treta', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)'  },

    // Kumbhakarna and his family
    { id: 'kumbhakarna', name: 'कुम्भकर्ण', subtitle: 'राक्षस', parent: 'vishrava', mother: 'kaikesi', yug: 'treta', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)'  },
    { id: 'kumbha', name: 'कुम्भ', subtitle: 'कुम्भकर्ण पुत्र', parent: 'kumbhakarna', yug: 'treta', parichay: 'सुग्रीव द्वारा मारा गया।', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)'  },
    { id: 'nikumbha', name: 'निकुम्भ', subtitle: 'कुम्भकर्ण पुत्र', parent: 'kumbhakarna', yug: 'treta', parichay: 'हनुमान जी द्वारा मारा गया।', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)'  },

    // Vibhishana and his family
    { id: 'vibhishana', name: 'विभीषण', subtitle: 'राम भक्त', parent: 'vishrava', mother: 'kaikesi', yug: 'treta',
      events: [
        'राम द्वारा लंका के राज्य पर अभिषिक्त किए गए। (बालकाण्ड, सर्ग 1, श्लोक 84)'
      ]
    },
    { id: 'sarama', name: 'सरमा', subtitle: 'विभीषण की पत्नी', parent: '', spouseOf: 'vibhishana', yug: 'treta', parichay: 'विभीषण की धार्मिक पत्नी।', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)'  },
    { id: 'trijata', name: 'त्रिजटा', subtitle: 'विभीषण की पुत्री', parent: 'vibhishana', mother: 'sarama', yug: 'treta', parichay: 'अशोक वाटिका में माता सीता की स्नेही रक्षक।', clusterName: 'पुलस्त्य वंश (रावण/कुबेर)'  },
    { id: 'taranisen', name: 'तरणीसेन', subtitle: 'विभीषण पुत्र', parent: 'vibhishana', mother: 'sarama', yug: 'treta', parichay: 'बांग्ला रामायण के अनुसार विभीषण का वीर और रामभक्त पुत्र।' },
    { id: 'khyati', name: 'ख्याति', subtitle: 'दक्ष पुत्री', parent: 'daksha', spouseOf: 'bhrigu', yug: 'satya', clusterName: 'भृगु की 2 पत्नियाँ' },
    { id: 'paulomi', name: 'पुलोमा', subtitle: 'भृगु पत्नी', parent: '', spouseOf: 'bhrigu', yug: 'satya', parichay: 'महर्षि भृगु की पत्नी और च्यवन ऋषि की माता।', clusterName: 'भृगु की 2 पत्नियाँ' },
        { id: 'bhrigu_dynasty_proxy', name: 'भार्गव (भृगु) वंश', subtitle: 'भृगु के वंशज', parent: 'bhrigu', yug: 'satya', clusterName: 'भार्गव (भृगु) वंश', isProxy: true },
    { id: 'dhata', name: 'धाता', subtitle: 'भृगु पुत्र', parent: 'bhrigu_dynasty_proxy', clusterName: 'भार्गव (भृगु) वंश', mother: 'khyati', yug: 'satya' },
    { id: 'vidhata', name: 'विधाता', subtitle: 'भृगु पुत्र', parent: 'bhrigu_dynasty_proxy', clusterName: 'भार्गव (भृगु) वंश', mother: 'khyati', yug: 'satya' },

    // Markandeya's Lineage
    { id: 'ayati', name: 'आयति', subtitle: 'धाता पत्नी', parent: '', spouseOf: 'dhata', yug: 'satya' },
    { id: 'niyati', name: 'नियति', subtitle: 'विधाता पत्नी', parent: '', spouseOf: 'vidhata', yug: 'satya' },
    { id: 'mrikanda', name: 'मृकंड', subtitle: 'विधाता पुत्र', parent: 'vidhata', mother: 'niyati', yug: 'satya' },
    { id: 'markandeya', name: 'मार्कण्डेय', subtitle: 'चिरंजीवी ऋषि', parent: 'mrikanda', yug: 'satya', parichay: 'मृकंड के पुत्र, भगवान शिव के परम भक्त जिन्हें अजर-अमर (चिरंजीवी) होने का वरदान मिला।' },
    { id: 'vedashira', name: 'वेदशिरा', subtitle: 'मार्कण्डेय पुत्र', parent: 'markandeya', yug: 'treta', parichay: 'चिरंजीवी मार्कण्डेय मुनि के पुत्र और महान तपस्वी।' },

    // Dhata's deeper line
    { id: 'prana_rishi', name: 'प्राण', subtitle: 'धाता पुत्र', parent: 'dhata', mother: 'ayati', yug: 'satya' },
    { id: 'dyutiman', name: 'द्युतिमान', subtitle: 'प्राण पुत्र', parent: 'prana_rishi', yug: 'satya' },
    { id: 'rajavan', name: 'राजवान', subtitle: 'द्युतिमान पुत्र', parent: 'dyutiman', yug: 'satya' },

    // Dadhichi
    { id: 'dadhichi', name: 'दधीचि', subtitle: 'भृगु पुत्र', parent: 'bhrigu_dynasty_proxy', clusterName: 'भार्गव (भृगु) वंश', yug: 'satya', parichay: 'महान शिव भक्त ऋषि जिन्होंने वृत्रासुर के वध हेतु वज्र बनाने के लिए अपनी अस्थियों का दान किया था।' },
    { id: 'pippalada', name: 'पिप्पलाद', subtitle: 'दधीचि पुत्र', parent: 'dadhichi', yug: 'satya', parichay: 'दधीचि के पुत्र और प्रश्न उपनिषद के मुख्य ऋषि। इन्होने ही नवग्रहों में शनि देव को दंडित किया था।' },
    { id: 'padma_pippalada', name: 'पद्मा', subtitle: 'अनरण्य पुत्री', parent: '', spouseOf: 'pippalada', yug: 'satya', parichay: 'इक्ष्वाकु वंशी राजा अनरण्य की पुत्री और महर्षि पिप्पलाद की पत्नी।' },

    // Shukracharya & his family
    { id: 'shukracharya', name: 'शुक्राचार्य', subtitle: 'दैत्यों के गुरु', parent: 'bhrigu_dynasty_proxy', clusterName: 'भार्गव (भृगु) वंश', mother: 'khyati', yug: 'satya' },
    { id: 'jayanti', name: 'जयन्ती', subtitle: 'इंद्र पुत्री / शुक्र पत्नी', parent: 'indra', spouseOf: 'shukracharya', yug: 'satya' },
    { id: 'devayani', name: 'देवयानी', subtitle: 'शुक्राचार्य पुत्री', parent: 'shukracharya', mother: 'jayanti', yug: 'satya', parichay: 'शुक्राचार्य की पुत्री, जिनका विवाह राजा ययाति से हुआ।' },
    { id: 'araj', name: 'अरज', subtitle: 'शुक्राचार्य पुत्री', parent: 'shukracharya', yug: 'satya', parichay: 'शुक्राचार्य की पुत्री जिसे राजा दंड ने अपमानित किया था, जिसके कारण दंडकारण्य वन बना।' },
    { id: 'shanda', name: 'शण्ड', subtitle: 'शुक्राचार्य पुत्र', parent: 'shukracharya', yug: 'satya', parichay: 'हिरण्यकशिपु के गुरु-पुत्र, जो प्रह्लाद को पढ़ाते थे।' },
    { id: 'marka', name: 'मर्क', subtitle: 'शुक्राचार्य पुत्र', parent: 'shukracharya', yug: 'satya', parichay: 'हिरण्यकशिपु के गुरु-पुत्र, जो प्रह्लाद को पढ़ाते थे।' },

    // Chyavana & his family
    { id: 'chyavana', name: 'च्यवन', subtitle: 'भृगु पुत्र', parent: 'bhrigu_dynasty_proxy', clusterName: 'भार्गव (भृगु) वंश', mother: 'paulomi', yug: 'satya', parichay: 'च्यवनप्राश के आविष्कारक और महान ऋषि।' },
    { id: 'sukanya', name: 'सुकन्या', subtitle: 'शर्याति पुत्री', parent: '', spouseOf: 'chyavana', yug: 'satya', parichay: 'राजा शर्याति की पुत्री और च्यवन ऋषि की परम पतिव्रता पत्नी।' },
    { id: 'pramati', name: 'प्रमति', subtitle: 'च्यवन पुत्र', parent: 'chyavana', mother: 'sukanya', yug: 'satya' },

    // Deeper Chyavana line (Shaunaka)
    { id: 'apnavana', name: 'अप्नवान', subtitle: 'च्यवन वंश', parent: 'chyavana', yug: 'treta', parichay: 'भृगु वंश के ऋषि, जो महाभारत के अनुसार च्यवन के पुत्र और और्व के पिता थे।' },
    { id: 'ruru', name: 'रुरु', subtitle: 'प्रमति पुत्र', parent: 'pramati', yug: 'treta', parichay: 'च्यवन के पौत्र। इन्होने अपनी आधी आयु देकर अपनी पत्नी प्रमद्वरा को जीवित किया था।' },
    { id: 'pramadvara', name: 'प्रमद्वरा', subtitle: 'रुरु पत्नी', parent: '', spouseOf: 'ruru', yug: 'treta', parichay: 'मेनका अप्सरा की पुत्री और रुरु की पत्नी।' },
    { id: 'shunaka', name: 'शुनक', subtitle: 'रुरु पुत्र', parent: 'ruru', mother: 'pramadvara', yug: 'treta' },
    { id: 'shaunaka', name: 'शौनक', subtitle: 'महान कुलपति ऋषि', parent: 'shunaka', yug: 'dwapar', parichay: 'नैमिषारण्य के महान कुलपति। इन्हीं के आश्रम में सूत जी ने 18 पुराणों और महाभारत की कथा सुनाई थी।' },

    // Aurva line
    { id: 'aurva', name: 'और्व', subtitle: 'भृगु वंश', parent: 'pramati', yug: 'treta', parichay: 'भृगु वंश के महान ऋषि, जो अपनी माता की जांघ (ऊरु) से प्रकट हुए थे।' },
    { id: 'ruchika', name: 'ऋचीक', subtitle: 'भृगु वंश', parent: 'aurva', yug: 'treta' },
    { id: 'jamadagni', name: 'जमदग्नि', subtitle: 'सप्तर्षि', parent: 'ruchika', yug: 'treta' },
    { id: 'rumanvan', name: 'रुमण्वान', subtitle: 'जमदग्नि पुत्र', parent: 'jamadagni', yug: 'treta' },
    { id: 'sushena_rishi', name: 'सुषेण', subtitle: 'जमदग्नि पुत्र', parent: 'jamadagni', yug: 'treta' },
    { id: 'vasu_rishi', name: 'वसु', subtitle: 'जमदग्नि पुत्र', parent: 'jamadagni', yug: 'treta' },
    { id: 'vishwavasu', name: 'विश्वावसु', subtitle: 'जमदग्नि पुत्र', parent: 'jamadagni', yug: 'treta' },
    { id: 'parashurama', name: 'परशुराम', subtitle: 'विष्णु अवतार', parent: 'jamadagni', yug: 'treta' },

    // --- VASHISTHA LINEAGE ---
    { id: 'vashistha_vansh_proxy', name: 'वशिष्ठ वंश', subtitle: 'अरुंधती, व्यास आदि', parent: 'vashistha', yug: 'treta', clusterName: 'वशिष्ठ वंश', isProxy: true },
{ id: 'arundhati', name: 'अरुंधती', subtitle: 'वशिष्ठ पत्नी', parent: '', spouseOf: 'vashistha', yug: 'satya', clusterName: 'वशिष्ठ वंश' },
    { id: 'shakti', name: 'शक्ति', subtitle: 'वशिष्ठ पुत्र', parent: 'vashistha', mother: 'arundhati', yug: 'satya', clusterName: 'वशिष्ठ वंश' },
    { id: 'adrishyanti', name: 'अदृश्यन्ती', subtitle: 'शक्ति पत्नी', parent: '', spouseOf: 'shakti', yug: 'satya', parichay: 'महर्षि शक्ति की पत्नी और पराशर की माता।', clusterName: 'वशिष्ठ वंश' },
    { id: 'parashar', name: 'पराशर', subtitle: 'महान ऋषि', parent: 'shakti', mother: 'adrishyanti', yug: 'treta', clusterName: 'वशिष्ठ वंश' },
    { id: 'satyavati', name: 'सत्यवती', subtitle: 'मत्स्यगंधा', parent: '', spouseOf: 'parashar', yug: 'treta', parichay: 'निषादराज की पुत्री। पराशर ऋषि के आशीर्वाद से इन्होने वेद व्यास को जन्म दिया। बाद में शांतनु से विवाह किया।', clusterName: 'वशिष्ठ वंश' },
    { id: 'vyasa', name: 'वेद व्यास', subtitle: 'महाभारत रचयिता', parent: 'parashar', mother: 'satyavati', yug: 'dwapar', clusterName: 'वशिष्ठ वंश' },
    { id: 'shuka', name: 'शुकदेव', subtitle: 'व्यास पुत्र', parent: 'vyasa', yug: 'dwapar', clusterName: 'वशिष्ठ वंश' },
    { id: 'pivari', name: 'पिबरी', subtitle: 'शुकदेव पत्नी', parent: '', spouseOf: 'shuka', yug: 'dwapar', parichay: 'शुकदेव मुनि की पत्नी और पितरों की मानसी पुत्री।', clusterName: 'वशिष्ठ वंश' },
    { id: 'krishna_shuka', name: 'कृष्ण (शुक पुत्र)', subtitle: 'शुकदेव पुत्र', parent: 'shuka', mother: 'pivari', yug: 'dwapar', clusterName: 'वशिष्ठ वंश' },
    { id: 'gaura', name: 'गौर', subtitle: 'शुकदेव पुत्र', parent: 'shuka', mother: 'pivari', yug: 'dwapar', clusterName: 'वशिष्ठ वंश' },
    { id: 'prabhu', name: 'प्रभु', subtitle: 'शुकदेव पुत्र', parent: 'shuka', mother: 'pivari', yug: 'dwapar', clusterName: 'वशिष्ठ वंश' },
    { id: 'shambhu_shuka', name: 'शम्भु (शुक पुत्र)', subtitle: 'शुकदेव पुत्र', parent: 'shuka', mother: 'pivari', yug: 'dwapar', clusterName: 'वशिष्ठ वंश' },
    { id: 'bhurishrava_shuka', name: 'भूरिश्रवा (शुक पुत्र)', subtitle: 'शुकदेव पुत्र', parent: 'shuka', mother: 'pivari', yug: 'dwapar' },
    { id: 'kirtimati', name: 'कीर्तिमती', subtitle: 'शुकदेव पुत्री', parent: 'shuka', mother: 'pivari', yug: 'dwapar', parichay: 'शुकदेव की पुत्री जिसका विवाह राजा अणुह से हुआ।' },

    // --- CHITRAGUPTA WIVES ---
    { id: 'nandini_chitragupta', name: 'नंदिनी', subtitle: 'सूर्यदक्षिणा / चित्रगुप्त की पत्नी', parent: '', spouseOf: 'chitragupta', yug: 'satya', clusterName: 'चित्रगुप्त की 2 पत्नियाँ' },
    { id: 'iravati_chitragupta', name: 'इरावती', subtitle: 'शोभावती / चित्रगुप्त की पत्नी', parent: '', spouseOf: 'chitragupta', yug: 'satya', clusterName: 'चित्रगुप्त की 2 पत्नियाँ' },

    // --- SONS OF NANDINI ---
    { id: 'bhanu', name: 'भानु', subtitle: 'श्रीवास्तव कायस्थ वंश', parent: 'chitragupta', mother: 'nandini_chitragupta', yug: 'satya', parichay: 'इनके द्वारा श्रीवास्तव कायस्थ वंश की स्थापना हुई। श्रीवास्तव वंश आगे चलकर 2 वर्गों (खरे और दूसर) में विभाजित हुआ और इनकी कई अल (उप-शाखाएं/उपनाम) हैं, जैसे- वर्मा, सिन्हा, रायजादा, कानूनगो आदि।', clusterName: 'चित्रगुप्त (कायस्थ) वंश' },
    { id: 'padmini_bhanu', name: 'पद्मिनी', subtitle: 'भानु की पत्नी (वासुकी की पुत्री)', parent: '', spouseOf: 'bhanu', yug: 'satya' },

    { id: 'vibhanu', name: 'विभानु', subtitle: 'सूर्यध्वज कायस्थ वंश', parent: 'chitragupta', mother: 'nandini_chitragupta', yug: 'satya', parichay: 'इनके द्वारा सूर्यध्वज कायस्थ वंश की स्थापना हुई। चूँकि इनकी माता सूर्यदेव की पुत्री थीं, इसलिए इनके वंशज सूर्यध्वज नाम से जाने गए।', clusterName: 'चित्रगुप्त (कायस्थ) वंश' },
    { id: 'malati_vibhanu', name: 'मालती', subtitle: 'विभानु की पत्नी', parent: '', spouseOf: 'vibhanu', yug: 'satya', clusterName: 'चित्रगुप्त (कायस्थ) वंश' },

    { id: 'vishvabhanu', name: 'विश्वभानु', subtitle: 'वाल्मीकि कायस्थ वंश', parent: 'chitragupta', mother: 'nandini_chitragupta', yug: 'satya', parichay: 'इनके द्वारा वाल्मीकि कायस्थ वंश की स्थापना हुई। इन्होने वाल्मीकि क्षेत्र में राज्य स्थापित किया।', clusterName: 'चित्रगुप्त (कायस्थ) वंश' },
    { id: 'bimbvati_vishvabhanu', name: 'बिम्बवती', subtitle: 'विश्वभानु की पत्नी', parent: '', spouseOf: 'vishvabhanu', yug: 'satya' },

    { id: 'veeryabhanu', name: 'वीर्यभानु', subtitle: 'अस्थाना कायस्थ वंश', parent: 'chitragupta', mother: 'nandini_chitragupta', yug: 'satya', parichay: 'इनके द्वारा अस्थाना कायस्थ वंश की स्थापना हुई।', clusterName: 'चित्रगुप्त (कायस्थ) वंश' },
    { id: 'singhadhwani_veeryabhanu', name: 'सिंघध्वनि', subtitle: 'वीर्यभानु की पत्नी', parent: '', spouseOf: 'veeryabhanu', yug: 'satya', clusterName: 'चित्रगुप्त (कायस्थ) वंश' },

    // --- SONS OF IRAVATI ---
    { id: 'charu', name: 'चारु', subtitle: 'माथुर कायस्थ वंश', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा माथुर कायस्थ वंश की स्थापना हुई। माथुर वंश 3 वर्गों (देहलवी, खचौली, कच्छी) और 84 अल (उप-शाखाओं) में विभाजित हुआ, जिनमें कटारिया, सहरिया, ककरानिया आदि प्रमुख हैं।', clusterName: 'चित्रगुप्त (कायस्थ) वंश' },
    { id: 'pankajakshi_charu', name: 'पंकजाक्षी', subtitle: 'चारु की पत्नी', parent: '', spouseOf: 'charu', yug: 'satya', clusterName: 'चित्रगुप्त (कायस्थ) वंश' },

    { id: 'sucharu', name: 'सुचारु', subtitle: 'गौड़ कायस्थ वंश', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा गौड़ कायस्थ वंश की स्थापना हुई। गौड़ वंश 5 वर्गों और 32 अल (उप-शाखाओं) में विभाजित हुआ, जिनमें खरे, दुसरे, बंगाली आदि प्रमुख हैं।', clusterName: 'चित्रगुप्त (कायस्थ) वंश' },
    { id: 'mandhiya_sucharu', name: 'मंधिया', subtitle: 'सुचारु की पत्नी', parent: '', spouseOf: 'sucharu', yug: 'satya', clusterName: 'चित्रगुप्त (कायस्थ) वंश' },

    { id: 'chitra_son', name: 'चित्र', subtitle: 'भटनागर कायस्थ वंश', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा भटनागर कायस्थ वंश की स्थापना हुई। भटनागर वंश 84 अल (उप-शाखाओं) में विभाजित हुआ।', clusterName: 'चित्रगुप्त (कायस्थ) वंश' },
    { id: 'bhadrakalini_chitra', name: 'भद्रकालिनी', subtitle: 'चित्र की पत्नी', parent: '', spouseOf: 'chitra_son', yug: 'satya' },

    { id: 'matibhan', name: 'मतिभान', subtitle: 'सक्सेना कायस्थ वंश', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा सक्सेना कायस्थ वंश की स्थापना हुई। सक्सेना वंश खरे और दूसर वर्गों में और 106 अल (उप-शाखाओं) में विभाजित हुआ, जिनमें जोहरी, हजेला, रायजादा, कानूनगो आदि प्रमुख हैं।', clusterName: 'चित्रगुप्त (कायस्थ) वंश' },
    { id: 'kokalesh_matibhan', name: 'कोकलेश', subtitle: 'मतिभान की पत्नी', parent: '', spouseOf: 'matibhan', yug: 'satya' },

    { id: 'himavan', name: 'हिमवान', subtitle: 'अम्बष्ठ कायस्थ वंश', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा अम्बष्ठ कायस्थ वंश की स्थापना हुई। इनके पांच प्रमुख पुत्र हुए (नागसेन, गयासेन, गयादत्त, रतनमूल और देवधर) जिनसे क्रमशः 24, 35, 85, 25 और 21 अल (उप-शाखाएं) चलीं।', clusterName: 'चित्रगुप्त (कायस्थ) वंश' },
    { id: 'bhujangakshi_himavan', name: 'भुजंगाक्षी', subtitle: 'हिमवान की पत्नी', parent: '', spouseOf: 'himavan', yug: 'satya' },

    { id: 'chitracharu', name: 'चित्रचारु', subtitle: 'निगम कायस्थ वंश', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा निगम कायस्थ वंश की स्थापना हुई।', clusterName: 'चित्रगुप्त (कायस्थ) वंश' },
    { id: 'ashagandhamati_chitracharu', name: 'अशगंधमति', subtitle: 'चित्रचारु की पत्नी', parent: '', spouseOf: 'chitracharu', yug: 'satya' },

    { id: 'chitracharan', name: 'चित्रचरण', subtitle: 'कर्ण कायस्थ वंश', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा कर्ण कायस्थ वंश की स्थापना हुई।', clusterName: 'चित्रगुप्त (कायस्थ) वंश' },
    { id: 'kokalasuta_chitracharan', name: 'कोकलसुता', subtitle: 'चित्रचरण की पत्नी', parent: '', spouseOf: 'chitracharan', yug: 'satya' },

    { id: 'charun', name: 'चारुण', subtitle: 'कुलश्रेष्ठ कायस्थ वंश', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा कुलश्रेष्ठ कायस्थ वंश की स्थापना हुई।', clusterName: 'चित्रगुप्त (कायस्थ) वंश' },
    { id: 'manjubhashini_charun', name: 'मंजुभाषिणी', subtitle: 'चारुण की पत्नी', parent: '', spouseOf: 'charun', yug: 'satya', clusterName: 'चित्रगुप्त (कायस्थ) वंश' },

    // --- GRANDSONS (Specific children mentioned in history) ---
    // Bhanu's children
    { id: 'devadatt', name: 'देवदत्त', subtitle: 'भानु के पुत्र (कश्मीर राज्य)', parent: 'bhanu', mother: 'padmini_bhanu', yug: 'satya' },
    { id: 'ghanshyam', name: 'घनश्याम', subtitle: 'भानु के पुत्र (सिन्धु राज्य)', parent: 'bhanu', mother: 'padmini_bhanu', yug: 'satya' },

    // Vishvabhanu's children
    { id: 'chandrakant', name: 'चंद्रकांत', subtitle: 'विश्वभानु के पुत्र (गुजरात)', parent: 'vishvabhanu', mother: 'bimbvati_vishvabhanu', yug: 'satya' },

    // Himavan's children
    { id: 'nagasen', name: 'नागसेन', subtitle: 'हिमवान के पुत्र', parent: 'himavan', mother: 'bhujangakshi_himavan', yug: 'satya' },
    { id: 'gayasen', name: 'गयासेन', subtitle: 'हिमवान के पुत्र', parent: 'himavan', mother: 'bhujangakshi_himavan', yug: 'satya' },
    { id: 'gayadatt', name: 'गयादत्त', subtitle: 'हिमवान के पुत्र', parent: 'himavan', mother: 'bhujangakshi_himavan', yug: 'satya' },
    { id: 'ratanmool', name: 'रतनमूल', subtitle: 'हिमवान के पुत्र', parent: 'himavan', mother: 'bhujangakshi_himavan', yug: 'satya' },
    { id: 'devadhar', name: 'देवधर', subtitle: 'हिमवान के पुत्र', parent: 'himavan', mother: 'bhujangakshi_himavan', yug: 'satya' },

    // --- PULAHA LINEAGE ---
        { id: 'pulaha_vansh_proxy', name: 'पुलह वंश', subtitle: 'पुलह के वंशज', parent: 'pulaha', yug: 'satya', clusterName: 'पुलह वंश', isProxy: true },
    { id: 'kshama_pulaha', name: 'क्षमा', subtitle: 'दक्ष पुत्री / पुलह पत्नी', parent: 'daksha', spouseOf: 'pulaha', yug: 'satya', parichay: 'दक्ष प्रजापति की पुत्री और महर्षि पुलह की मुख्य पत्नी।', clusterName: 'पुलह वंश' },
    { id: 'gati_pulaha', name: 'गति', subtitle: 'कर्दम पुत्री / पुलह पत्नी', parent: '', spouseOf: 'pulaha', yug: 'satya', parichay: 'कर्दम ऋषि की पुत्री और महर्षि पुलह की पत्नी।', clusterName: 'पुलह वंश' },
    { id: 'kardama_pulaha_son', name: 'कर्दम (पुलह पुत्र)', subtitle: 'पुलह और क्षमा के पुत्र', parent: 'pulaha', mother: 'kshama_pulaha', yug: 'satya', parichay: 'विष्णु पुराण के अनुसार क्षमा और पुलह के पुत्र। (यह कर्दम प्रजापति से भिन्न हैं)' , clusterName: 'पुलह वंश' },
    { id: 'arvarivat', name: 'अर्वरिवत', subtitle: 'पुलह पुत्र', parent: 'pulaha', mother: 'kshama_pulaha', yug: 'satya' , clusterName: 'पुलह वंश' },
    { id: 'sahishnu', name: 'सहिष्णु', subtitle: 'पुलह पुत्र', parent: 'pulaha', yug: 'satya' , clusterName: 'पुलह वंश' },
    { id: 'karmashreshtha', name: 'कर्मश्रेष्ठ', subtitle: 'पुलह पुत्र', parent: 'pulaha', mother: 'gati_pulaha', yug: 'satya' , clusterName: 'पुलह वंश' },
    { id: 'variyan', name: 'वरीयां', subtitle: 'पुलह पुत्र', parent: 'pulaha', mother: 'gati_pulaha', yug: 'satya' , clusterName: 'पुलह वंश' },

    // --- DHARMA DEVA LINEAGE (Sons of Brahma) ---
        { id: 'dharma_vansh_proxy', name: 'धर्म वंश', subtitle: 'धर्म के वंशज', parent: 'dharma_deva', yug: 'satya', clusterName: 'धर्म वंश', isProxy: true },
    { id: 'murti_dharma', name: 'मूर्ति', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya', clusterName: 'धर्म वंश' },
    { id: 'shraddha_dharma', name: 'श्रद्धा', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya', clusterName: 'धर्म वंश' },
    { id: 'maitri_dharma', name: 'मैत्री', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya', clusterName: 'धर्म वंश' },
    { id: 'daya_dharma', name: 'दया', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya', clusterName: 'धर्म वंश' },
    { id: 'shanti_dharma', name: 'शान्ति', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya', clusterName: 'धर्म वंश' },
    { id: 'tushti_dharma', name: 'तुष्टि', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya', clusterName: 'धर्म वंश' },
    { id: 'pushti_dharma', name: 'पुष्टि', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya', clusterName: 'धर्म वंश' },
    { id: 'kriya_dharma', name: 'क्रिया', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya', clusterName: 'धर्म वंश' },
    { id: 'unnati_dharma', name: 'उन्नति', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya', clusterName: 'धर्म वंश' },
    { id: 'buddhi_dharma', name: 'बुद्धि', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya', clusterName: 'धर्म वंश' },
    { id: 'medha_dharma', name: 'मेधा', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya', clusterName: 'धर्म वंश' },
    { id: 'titiksha_dharma', name: 'तितिक्षा', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya', clusterName: 'धर्म वंश' },
    { id: 'hri_dharma', name: 'ह्री (लज्जा)', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya', clusterName: 'धर्म वंश' },

    { id: 'nara_narayana', name: 'नर-नारायण', subtitle: 'मूर्ति के पुत्र', parent: 'dharma_deva', mother: 'murti_dharma', yug: 'satya' , clusterName: 'धर्म वंश' },
    { id: 'shubha', name: 'शुभ', subtitle: 'श्रद्धा के पुत्र', parent: 'dharma_deva', mother: 'shraddha_dharma', yug: 'satya' , clusterName: 'धर्म वंश' },
    { id: 'prasada', name: 'प्रसाद', subtitle: 'मैत्री के पुत्र', parent: 'dharma_deva', mother: 'maitri_dharma', yug: 'satya' , clusterName: 'धर्म वंश' },
    { id: 'abhaya', name: 'अभय', subtitle: 'दया के पुत्र', parent: 'dharma_deva', mother: 'daya_dharma', yug: 'satya' , clusterName: 'धर्म वंश' },
    { id: 'sukha', name: 'सुख', subtitle: 'शान्ति के पुत्र', parent: 'dharma_deva', mother: 'shanti_dharma', yug: 'satya' , clusterName: 'धर्म वंश' },
    { id: 'muda', name: 'मुद', subtitle: 'तुष्टि के पुत्र', parent: 'dharma_deva', mother: 'tushti_dharma', yug: 'satya' , clusterName: 'धर्म वंश' },
    { id: 'smaya', name: 'स्मय', subtitle: 'पुष्टि के पुत्र', parent: 'dharma_deva', mother: 'pushti_dharma', yug: 'satya' , clusterName: 'धर्म वंश' },
    { id: 'yoga', name: 'योग', subtitle: 'क्रिया के पुत्र', parent: 'dharma_deva', mother: 'kriya_dharma', yug: 'satya' , clusterName: 'धर्म वंश' },
    { id: 'darpa', name: 'दर्प', subtitle: 'उन्नति के पुत्र', parent: 'dharma_deva', mother: 'unnati_dharma', yug: 'satya' , clusterName: 'धर्म वंश' },
    { id: 'artha', name: 'अर्थ', subtitle: 'बुद्धि के पुत्र', parent: 'dharma_deva', mother: 'buddhi_dharma', yug: 'satya' , clusterName: 'धर्म वंश' },
    { id: 'smriti', name: 'स्मृति', subtitle: 'मेधा के पुत्र', parent: 'dharma_deva', mother: 'medha_dharma', yug: 'satya' , clusterName: 'धर्म वंश' },
    { id: 'kshema', name: 'क्षेम', subtitle: 'तितिक्षा के पुत्र', parent: 'dharma_deva', mother: 'titiksha_dharma', yug: 'satya' , clusterName: 'धर्म वंश' },
    { id: 'prashraya', name: 'प्रश्रय', subtitle: 'ह्री के पुत्र', parent: 'dharma_deva', mother: 'hri_dharma', yug: 'satya' , clusterName: 'धर्म वंश' },

    // --- ADHARMA LINEAGE ---
        { id: 'adharma_dynasty_proxy', name: 'अधर्म वंश', subtitle: 'अधर्म के वंशज', parent: 'adharma', yug: 'satya', clusterName: 'अधर्म वंश', isProxy: true },
    { id: 'mrisha_adharma', name: 'मृषा', subtitle: 'अधर्म की पत्नी', spouseOf: 'adharma', yug: 'satya' , clusterName: 'अधर्म वंश' },
    { id: 'dambha', name: 'दम्भ', subtitle: 'अधर्म पुत्र',parent: 'adharma_dynasty_proxy', mother: 'mrisha_adharma', yug: 'satya' , clusterName: 'अधर्म वंश' },
    { id: 'maya_adharma', name: 'माया', subtitle: 'अधर्म पुत्री',parent: 'adharma_dynasty_proxy', mother: 'mrisha_adharma', yug: 'satya' , clusterName: 'अधर्म वंश' },
    { id: 'maya_spouse', name: 'माया', subtitle: 'दम्भ की पत्नी', spouseOf: 'dambha', yug: 'satya' }, // incest representation
    { id: 'lobha_adharma', name: 'लोभ', subtitle: 'दम्भ पुत्र', parent: 'dambha', mother: 'maya_spouse', yug: 'satya' , clusterName: 'अधर्म वंश' },
    { id: 'nikriti', name: 'निकृति', subtitle: 'दम्भ पुत्री', parent: 'dambha', mother: 'maya_spouse', yug: 'satya' },
    { id: 'nikriti_spouse', name: 'निकृति', subtitle: 'लोभ की पत्नी', spouseOf: 'lobha_adharma', yug: 'satya' , clusterName: 'अधर्म वंश' },
    { id: 'krodha_adharma', name: 'क्रोध', subtitle: 'लोभ पुत्र', parent: 'lobha_adharma', mother: 'nikriti_spouse', yug: 'satya' , clusterName: 'अधर्म वंश' },
    { id: 'hinsa', name: 'हिंसा', subtitle: 'लोभ पुत्री', parent: 'lobha_adharma', mother: 'nikriti_spouse', yug: 'satya' , clusterName: 'अधर्म वंश' },
    { id: 'hinsa_spouse', name: 'हिंसा', subtitle: 'क्रोध की पत्नी', spouseOf: 'krodha_adharma', yug: 'satya' , clusterName: 'अधर्म वंश' },
    { id: 'kali', name: 'कलि', subtitle: 'क्रोध पुत्र', parent: 'krodha_adharma', mother: 'hinsa_spouse', yug: 'satya' , clusterName: 'अधर्म वंश' },
    { id: 'durukti', name: 'दुरुक्ति', subtitle: 'क्रोध पुत्री', parent: 'krodha_adharma', mother: 'hinsa_spouse', yug: 'satya' , clusterName: 'अधर्म वंश' },
    { id: 'durukti_spouse', name: 'दुरुक्ति', subtitle: 'कलि की पत्नी', spouseOf: 'kali', yug: 'satya' },
    { id: 'mrityu_adharma', name: 'मृत्यु', subtitle: 'कलि पुत्र', parent: 'kali', mother: 'durukti_spouse', yug: 'satya' , clusterName: 'अधर्म वंश' },
    { id: 'bhiti', name: 'भीति', subtitle: 'कलि पुत्री', parent: 'kali', mother: 'durukti_spouse', yug: 'satya' },
    { id: 'bhiti_spouse', name: 'भीति', subtitle: 'मृत्यु की पत्नी', spouseOf: 'mrityu_adharma', yug: 'satya' , clusterName: 'अधर्म वंश' },
    { id: 'niraya', name: 'निरय', subtitle: 'मृत्यु पुत्र', parent: 'mrityu_adharma', mother: 'bhiti_spouse', yug: 'satya' , clusterName: 'अधर्म वंश' },
    { id: 'yatana', name: 'यातना', subtitle: 'मृत्यु पुत्री', parent: 'mrityu_adharma', mother: 'bhiti_spouse', yug: 'satya' , clusterName: 'अधर्म वंश' },

    // --- KAMADEVA LINEAGE (Son of Brahma) ---
    { id: 'rati', name: 'रति', subtitle: 'कामदेव पत्नी / दक्ष पुत्री', parent: 'daksha', spouseOf: 'kamadeva', yug: 'satya' },
    { id: 'harsha', name: 'हर्ष', subtitle: 'कामदेव पुत्र', parent: 'kamadeva', mother: 'rati', yug: 'satya' },
    { id: 'yash_kamadeva', name: 'यश', subtitle: 'कामदेव पुत्र', parent: 'kamadeva', mother: 'rati', yug: 'satya' },

    // --- PULAHA'S FURTHER DESCENDANTS & SPECIES ---
    { id: 'kamadeva_rishi', name: 'कामदेव (ऋषि)', subtitle: 'सहिष्णु के पुत्र', parent: 'sahishnu', yug: 'satya', parichay: 'ऋषि सहिष्णु के पुत्र। (ये रति-पति कामदेव से अलग हैं)।' , clusterName: 'पुलह वंश' },

    // प्रजातियां (Species born from Pulaha)
    { id: 'simha_species', name: 'सिंह (Lions)', subtitle: 'पुलह वंश / प्रजाति', parent: 'pulaha', yug: 'satya', parichay: 'पुराणों के अनुसार शेर (Lions) प्रजाति की उत्पत्ति महर्षि पुलह से मानी गई है।' , clusterName: 'पुलह वंश' },
    { id: 'vyaghra_species', name: 'व्याघ्र (Tigers)', subtitle: 'पुलह वंश / प्रजाति', parent: 'pulaha', yug: 'satya', parichay: 'बाघ प्रजाति के मूल जनक महर्षि पुलह माने जाते हैं।' , clusterName: 'पुलह वंश' },
    { id: 'vrika_species', name: 'वृक (Wolves)', subtitle: 'पुलह वंश / प्रजाति', parent: 'pulaha', yug: 'satya', parichay: 'भेड़िये और कुछ हिंसक पशुओं की उत्पत्ति महर्षि पुलह से हुई।' , clusterName: 'पुलह वंश' },
    { id: 'kimpurusha_species', name: 'किंपुरुष', subtitle: 'देव-योनि प्राणी', parent: 'pulaha', yug: 'satya', parichay: 'आधे मनुष्य और आधे पशु के रूप वाले रहस्यमयी देव-योनि प्राणी।' , clusterName: 'पुलह वंश' },
    { id: 'shalabha_species', name: 'शलभ (Locusts)', subtitle: 'कीट प्रजाति', parent: 'pulaha', yug: 'satya', parichay: 'टिड्डियों और इसी प्रकार के कीटों की उत्पत्ति भी पुलह वंश से मानी गई है।' , clusterName: 'पुलह वंश' },

    // --- KRATU LINEAGE ---
    { id: 'sannati_kratu', name: 'सन्नति', subtitle: 'दक्ष पुत्री / क्रतु पत्नी', parent: 'daksha', spouseOf: 'kratu', yug: 'satya', parichay: 'दक्ष प्रजापति की पुत्री और महर्षि क्रतु की पत्नी (विष्णु पुराण)।', clusterName: 'क्रतु की 2 पत्नियाँ' },
    { id: 'kriya_kratu', name: 'क्रिया', subtitle: 'कर्दम पुत्री / क्रतु पत्नी', parent: '', spouseOf: 'kratu', yug: 'satya', parichay: 'कर्दम ऋषि की पुत्री और महर्षि क्रतु की पत्नी (श्रीमद्भागवत)।', clusterName: 'क्रतु की 2 पत्नियाँ' },
    { id: 'valakhilya_rishis', name: 'बालखिल्य ऋषि (60,000)', subtitle: 'क्रतु पुत्र', parent: 'kratu', mother: 'sannati_kratu', yug: 'satya', parichay: 'महर्षि क्रतु के 60,000 पुत्र। ये आकार में अंगूठे के पोर जितने होते हैं और सदैव सूर्य देव के रथ के साथ चलते हुए उनकी स्तुति करते हैं।' },

    // --- OTHER BRAHMA CREATIONS ---
    { id: 'ahalya_creation', name: 'अहल्या', subtitle: 'ब्रह्मा की रचना', parent: 'brahma', yug: 'satya', parichay: 'ब्रह्मा जी द्वारा रची गई ब्रह्मांड की सबसे सुंदर स्त्री (बाद में महर्षि गौतम की पत्नी)।' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'agnishvatta_pitri', name: 'अग्निष्वात्त', subtitle: 'पितृगण', parent: 'brahma', yug: 'satya' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'barhishad_pitri', name: 'बर्हिषद', subtitle: 'पितृगण', parent: 'brahma', yug: 'satya' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'swaha', name: 'स्वाहा', subtitle: 'ब्रह्मा की मानस पुत्री', parent: 'brahma', yug: 'satya', parichay: 'अग्नि की पत्नी, देवताओं तक आहुति पहुँचाने वाली।' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'swadha', name: 'स्वधा', subtitle: 'ब्रह्मा की मानस पुत्री', parent: 'brahma', yug: 'satya', parichay: 'पितरों की पत्नी, पितरों तक तर्पण पहुँचाने वाली।' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'agni_abhimani', name: 'अग्नि (अभिमानी)', subtitle: 'मुख से उत्पन्न', parent: 'brahma', yug: 'satya' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'nidra', name: 'निद्रा (योगनिद्रा)', subtitle: 'ब्रह्मा की रचना', parent: 'brahma', yug: 'satya' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },
    { id: 'apantaratamas', name: 'अपान्तरतमा', subtitle: 'वाणी से उत्पन्न मानस पुत्र', parent: 'brahma', yug: 'satya', parichay: 'ब्रह्मा जी की वाणी से उत्पन्न मानस पुत्र (बाद में वेदव्यास बने)।' , clusterName: 'ब्रह्मा की अन्य सृष्टियाँ' },


    { id: 'brahma_other_creations_proxy', name: 'ब्रह्मा की अन्य सृष्टियाँ', subtitle: 'मानस एवं वैचारिक सृष्टियाँ', isProxy: true, parent: 'brahma', clusterName: 'ब्रह्मा की अन्य सृष्टियाँ', timeScale: 'kalpa', yug: 'satya' },
    { id: 'char_varna_proxy', name: 'चार वर्ण', subtitle: 'ब्रह्मा द्वारा उत्पन्न', parent: 'brahma', yug: 'satya', clusterName: 'चार वर्ण', isProxy: true },
    { id: 'brahmana_varna', name: 'ब्राह्मण (वर्ण)', subtitle: 'मुख से उत्पन्न', parent: 'brahma', yug: 'satya', clusterName: 'चार वर्ण' },
    { id: 'kshatriya_varna', name: 'क्षत्रिय (वर्ण)', subtitle: 'भुजाओं से उत्पन्न', parent: 'brahma', yug: 'satya', clusterName: 'चार वर्ण' },
    { id: 'vaishya_varna', name: 'वैश्य (वर्ण)', subtitle: 'जंघाओं से उत्पन्न', parent: 'brahma', yug: 'satya', clusterName: 'चार वर्ण' },
    { id: 'shudra_varna', name: 'शूद्र (वर्ण)', subtitle: 'पैरों से उत्पन्न', parent: 'brahma', yug: 'satya', clusterName: 'चार वर्ण' },
];
