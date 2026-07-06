export const brahmaBaseData = [
    // Wives of Brahma
    { id: 'saraswati', name: 'सरस्वती', subtitle: 'ब्रह्मा की पत्नी / वाग्देवी', spouseOf: 'brahma', yug: 'satya' },
    { id: 'savitri', name: 'सावित्री', subtitle: 'ब्रह्मा की पत्नी', spouseOf: 'brahma', yug: 'satya' },
    { id: 'gayatri', name: 'गायत्री', subtitle: 'ब्रह्मा की पत्नी', spouseOf: 'brahma', yug: 'satya' },

    // Mind/Body-born creations
    { id: 'ribhu', name: 'ऋभु', subtitle: 'मानस पुत्र', parent: 'brahma', yug: 'satya' },
    { id: 'hansa', name: 'हंस', subtitle: 'मानस पुत्र', parent: 'brahma', yug: 'satya' },
    { id: 'atharva', name: 'अथर्वा', subtitle: 'ज्येष्ठ मानस पुत्र', parent: 'brahma', yug: 'satya' },
    { id: 'dharma_deva', name: 'धर्म', subtitle: 'वक्षस्थल से उत्पन्न', parent: 'brahma', yug: 'satya' },
    { id: 'kamadeva', name: 'कामदेव', subtitle: 'हृदय से उत्पन्न', parent: 'brahma', yug: 'satya' },
    { id: 'rudra_ekadash', name: 'रुद्र', subtitle: 'ललाट से उत्पन्न', parent: 'brahma', yug: 'satya' },
    { id: 'adharma', name: 'अधर्म', subtitle: 'पीठ से उत्पन्न', parent: 'brahma', yug: 'satya' },
    { id: 'lobha', name: 'लोभ', subtitle: 'निचले होंठ से उत्पन्न', parent: 'brahma', yug: 'satya' },
    { id: 'krodha', name: 'क्रोध', subtitle: 'भौहों से उत्पन्न', parent: 'brahma', yug: 'satya' },
    { id: 'moha', name: 'मोह', subtitle: 'बुद्धि से उत्पन्न', parent: 'brahma', yug: 'satya' },
    { id: 'ahamkara', name: 'अहंकार', subtitle: 'अहंकार से उत्पन्न', parent: 'brahma', yug: 'satya' },
    { id: 'pramada', name: 'प्रमाद', subtitle: 'कंठ से उत्पन्न', parent: 'brahma', yug: 'satya' },
    { id: 'mrityu', name: 'मृत्यु', subtitle: 'आँखों से उत्पन्न', parent: 'brahma', yug: 'satya' },
    { id: 'bhaya', name: 'भय', subtitle: 'नाभि से उत्पन्न', parent: 'brahma', yug: 'satya' },
    { id: 'nirriti', name: 'निरृति', subtitle: 'मलद्वार से उत्पन्न', parent: 'brahma', yug: 'satya' },
    { id: 'sankalpa', name: 'संकल्प', subtitle: 'इच्छा से उत्पन्न', parent: 'brahma', yug: 'satya' },

    // Personifications / Veda
    { id: 'rigveda', name: 'ऋग्वेद', subtitle: 'पूर्व मुख से', parent: 'brahma', yug: 'satya' },
    { id: 'yajurveda', name: 'यजुर्वेद', subtitle: 'दक्षिण मुख से', parent: 'brahma', yug: 'satya' },
    { id: 'samaveda', name: 'सामवेद', subtitle: 'पश्चिम मुख से', parent: 'brahma', yug: 'satya' },
    { id: 'atharvaveda', name: 'अथर्ववेद', subtitle: 'उत्तर मुख से', parent: 'brahma', yug: 'satya' },

    { id: 'sanak', name: 'सनक', subtitle: 'सनत कुमार', parent: 'brahma', yug: 'satya' },
    { id: 'sanandan', name: 'सनन्दन', subtitle: 'सनत कुमार', parent: 'brahma', yug: 'satya' },
    { id: 'sanatan', name: 'सनातन', subtitle: 'सनत कुमार', parent: 'brahma', yug: 'satya' },
    { id: 'sanatkumar', name: 'सनत्कुमार', subtitle: 'सनत कुमार', parent: 'brahma', yug: 'satya' },
    { id: 'narada', name: 'नारद', subtitle: 'मानस पुत्र / देवर्षि', parent: 'brahma', yug: 'satya' , parichay: 'देवर्षि नारद, ब्रह्मा के मानस पुत्र।', events: ['वाल्मीकि को राम कथा संक्षेप में सुनाई (बालकाण्ड, सर्ग 1)'] },
    { id: 'jambavan', name: 'जाम्बवान', subtitle: 'ब्रह्मा की जम्हाई से', parent: 'brahma', yug: 'satya' },
    { id: 'sukumaran', name: 'सुकुमारन', subtitle: 'जाम्बवान के पुत्र', parent: 'jambavan', yug: 'dwapar' },
    { id: 'chitragupta', name: 'चित्रगुप्त', subtitle: 'ब्रह्मा की काया से', parent: 'brahma', yug: 'satya' },
    { id: 'marichi', name: 'मरीचि', subtitle: 'सप्तर्षि / मानस पुत्र', parent: 'brahma', yug: 'satya' },
    { id: 'angiras', name: 'अंगिरस', subtitle: 'सप्तर्षि / मानस पुत्र', parent: 'brahma', yug: 'satya' },
    { id: 'pulastya', name: 'पुलस्त्य', subtitle: 'सप्तर्षि / मानस पुत्र', parent: 'brahma', yug: 'satya' },
    { id: 'pulaha', name: 'पुलह', subtitle: 'सप्तर्षि / मानस पुत्र', parent: 'brahma', yug: 'satya' },
    { id: 'kratu', name: 'क्रतु', subtitle: 'सप्तर्षि / मानस पुत्र', parent: 'brahma', yug: 'satya' },
    { id: 'bhrigu', name: 'भृगु', subtitle: 'मानस पुत्र', parent: 'brahma', yug: 'satya' },
    { id: 'vashistha', name: 'वशिष्ठ', subtitle: 'सप्तर्षि / मानस पुत्र', parent: 'brahma', yug: 'satya' },
    { id: 'atri', name: 'अत्रि', subtitle: 'सप्तर्षि / मानस पुत्र', parent: 'brahma', yug: 'satya' },
    { id: 'daksha', name: 'दक्ष प्रजापति', subtitle: 'अंगूठे से उत्पन्न', parent: 'brahma', yug: 'satya' },
    { id: 'svayambhuva_manu', name: 'स्वायंभुव मनु', subtitle: 'प्रथम पुरुष', parent: 'brahma', yug: 'satya' },
    { id: 'shatarupa', name: 'शतरूपा', subtitle: 'प्रथम स्त्री', parent: 'brahma', spouseOf: 'svayambhuva_manu', yug: 'satya' },

    { id: 'akuti', name: 'आकूति', subtitle: 'मनु पुत्री', parent: 'svayambhuva_manu', mother: 'shatarupa', yug: 'satya' },
    { id: 'ruci_prajapati', name: 'रुचि', subtitle: 'प्रजापति', parent: 'brahma', spouseOf: 'akuti', yug: 'satya' },
    { id: 'yajna_avatar', name: 'यज्ञ', subtitle: 'विष्णु अवतार', parent: 'ruci_prajapati', mother: 'akuti', yug: 'satya' },
    { id: 'dakshina', name: 'दक्षिणा', subtitle: 'यज्ञ की पत्नी', parent: 'ruci_prajapati', mother: 'akuti', spouseOf: 'yajna_avatar', yug: 'satya' },

    { id: 'devahuti', name: 'देवहूति', subtitle: 'मनु पुत्री', parent: 'svayambhuva_manu', mother: 'shatarupa', yug: 'satya' },
    { id: 'kardama_prajapati', name: 'कर्दम (प्रजापति)', subtitle: 'ब्रह्मा की छाया से', parent: 'brahma', spouseOf: 'devahuti', yug: 'satya' },
    { id: 'kapila_avatar', name: 'कपिल मुनि', subtitle: 'विष्णु अवतार', parent: 'kardama_prajapati', mother: 'devahuti', yug: 'satya', parichay: 'सांख्य दर्शन के प्रणेता महान मुनि और विष्णु के अवतार।' },
    { id: 'kala', name: 'कला', subtitle: 'कर्दम पुत्री', parent: 'kardama_prajapati', mother: 'devahuti', spouseOf: 'marichi', yug: 'satya' },
    { id: 'anusuya', name: 'अनुसूया', subtitle: 'कर्दम पुत्री / अत्रि पत्नी', parent: 'kardama_prajapati', mother: 'devahuti', spouseOf: 'atri', yug: 'satya', parichay: 'सती अनुसूया, जिन्होंने त्रिदेवों को बालक बना दिया था।' },
    { id: 'shanti', name: 'शांति', subtitle: 'कर्दम पुत्री / अथर्वा पत्नी', parent: 'kardama_prajapati', mother: 'devahuti', yug: 'satya' },

    { id: 'prasuti', name: 'प्रसूति', subtitle: 'मनु पुत्री', parent: 'svayambhuva_manu', mother: 'shatarupa', spouseOf: 'daksha', yug: 'satya' },

    { id: 'uttanapada', name: 'उत्तानपाद', subtitle: 'मनु के पुत्र', parent: 'svayambhuva_manu', mother: 'shatarupa', yug: 'satya' },
    { id: 'suniti', name: 'सुनीति', subtitle: 'उत्तानपाद पत्नी', parent: '', spouseOf: 'uttanapada', yug: 'satya' },
    { id: 'suruchi', name: 'सुरुचि', subtitle: 'उत्तानपाद पत्नी', parent: '', spouseOf: 'uttanapada', yug: 'satya' },
    { id: 'uttama', name: 'उत्तम', subtitle: 'उत्तानपाद पुत्र', parent: 'uttanapada', mother: 'suruchi', yug: 'satya' },
    { id: 'dhruva', name: 'ध्रुव', subtitle: 'परम भक्त / ध्रुव तारा', parent: 'uttanapada', mother: 'suniti', yug: 'satya' },
    { id: 'shlishti', name: 'श्लिष्टि', subtitle: 'ध्रुव पुत्र', parent: 'dhruva', yug: 'satya' },
    { id: 'ripu', name: 'रिपु', subtitle: 'श्लिष्टि पुत्र', parent: 'shlishti', yug: 'satya' },
    { id: 'chakshusha_manu', name: 'चाक्षुष मनु', subtitle: 'रिपु पुत्र', parent: 'ripu', yug: 'satya', parichay: 'छठे मन्वंतर के अधिपति चाक्षुष मनु।' },
    { id: 'uru', name: 'उरु', subtitle: 'मनु पुत्र', parent: 'chakshusha_manu', yug: 'satya' },
    { id: 'anga_king', name: 'अंग (वेन के पिता)', subtitle: 'उरु पुत्र', parent: 'uru', yug: 'satya' },
    { id: 'vena', name: 'वेन', subtitle: 'अधर्मी राजा', parent: 'anga_king', yug: 'satya' },
    { id: 'prithu', name: 'पृथु', subtitle: 'जिनके नाम पर पृथ्वी', parent: 'vena', yug: 'satya' },
    { id: 'vijitashva', name: 'विजिताश्व', subtitle: 'पृथु पुत्र', parent: 'prithu', yug: 'satya' },
    { id: 'haryashva', name: 'हर्यश्व', subtitle: 'विजिताश्व पुत्र', parent: 'vijitashva', yug: 'satya' },
    { id: 'prachinabarhi', name: 'प्राचीनबर्हि', subtitle: 'हर्यश्व पुत्र', parent: 'haryashva', yug: 'satya' },
    { id: 'pracetas', name: 'प्रचेतागण (10)', subtitle: 'प्राचीनबर्हि पुत्र', parent: 'prachinabarhi', yug: 'satya', parichay: 'प्राचीनबर्हि के 10 पुत्र जिन्होंने 10,000 वर्ष समुद्र में तपस्या की।' },

    { id: 'priyavrata', name: 'प्रियव्रत', subtitle: 'मनु के पुत्र', parent: 'svayambhuva_manu', mother: 'shatarupa', yug: 'satya' },
    { id: 'agnidhra', name: 'आग्नीध्र', subtitle: 'प्रियव्रत पुत्र', parent: 'priyavrata', yug: 'satya', parichay: 'जम्बूद्वीप (एशिया) के प्रथम शासक।' },
    { id: 'nabhi', name: 'नाभि', subtitle: 'आग्नीध्र पुत्र', parent: 'agnidhra', yug: 'satya' },
    { id: 'merudevi', name: 'मेरुदेवी', subtitle: 'नाभि पत्नी', parent: '', spouseOf: 'nabhi', yug: 'satya' },
    { id: 'rishabhdev', name: 'ऋषभदेव', subtitle: 'तीर्थंकर / विष्णु अवतार', parent: 'nabhi', mother: 'merudevi', yug: 'satya', parichay: 'भगवान विष्णु के अंशावतार और जैन धर्म के प्रथम तीर्थंकर (आदिनाथ)।' },
    { id: 'jayanti_rishabha', name: 'जयन्ती', subtitle: 'इंद्र पुत्री / ऋषभ पत्नी', parent: '', spouseOf: 'rishabhdev', yug: 'satya' },
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
    { id: 'shraddha', name: 'श्रद्धा (स्मृति)', subtitle: 'अंगिरस की पत्नी', parent: '', spouseOf: 'angiras', yug: 'satya', parichay: 'सप्तर्षि अंगिरस की प्रमुख पत्नी। विभिन्न पुराणों में इन्हें श्रद्धा (कर्दम पुत्री) और स्मृति (दक्ष पुत्री) कहा गया है।' },
    { id: 'sinivali', name: 'सिनीवाली', subtitle: 'अंगिरस पुत्री', parent: 'angiras', mother: 'shraddha', yug: 'satya', parichay: 'अमावस्या की पहली तिथि का मूर्तरूप।' },
    { id: 'kuhu', name: 'कुहू', subtitle: 'अंगिरस पुत्री', parent: 'angiras', mother: 'shraddha', yug: 'satya', parichay: 'अमावस्या की दूसरी तिथि।' },
    { id: 'raka', name: 'राका', subtitle: 'अंगिरस पुत्री', parent: 'angiras', mother: 'shraddha', yug: 'satya', parichay: 'पूर्णिमा की पहली तिथि।' },
    { id: 'anumati', name: 'अनुमति', subtitle: 'अंगिरस पुत्री', parent: 'angiras', mother: 'shraddha', yug: 'satya', parichay: 'पूर्णिमा की दूसरी तिथि।' },
    { id: 'utathya', name: 'उतथ्य', subtitle: 'अंगिरस के बड़े पुत्र', parent: 'angiras', mother: 'shraddha', yug: 'satya' },
    { id: 'samvarta', name: 'संवर्त', subtitle: 'अवधूत ऋषि', parent: 'angiras', mother: 'shraddha', yug: 'satya', parichay: 'संवर्त एक महान अवधूत और दिगंबर सन्यासी थे, जिन्होंने राजा मरुत्त का स्वर्ण यज्ञ करवाया था।' },
    { id: 'brihaspati', name: 'बृहस्पति', subtitle: 'देवताओं के गुरु', parent: 'angiras', mother: 'shraddha', yug: 'satya' },
    { id: 'mamata', name: 'ममता', subtitle: 'उतथ्य की पत्नी', parent: '', spouseOf: 'utathya', yug: 'satya' },
    { id: 'dirghatamas', name: 'दीर्घतमस', subtitle: 'अंधे महर्षि', parent: 'utathya', mother: 'mamata', yug: 'treta', parichay: 'बृहस्पति के शाप के कारण ये जन्म से अंधे थे। बाद में इन्होने राजा बलि की पत्नी सुदेष्णा के गर्भ से ५ पुत्रों को जन्म दिया।' },
    { id: 'pradveshi', name: 'प्रद्वेषी', subtitle: 'दीर्घतमस की प्रथम पत्नी', parent: '', spouseOf: 'dirghatamas', yug: 'treta' },
    { id: 'gautama', name: 'गौतम', subtitle: 'सप्तर्षि', parent: 'dirghatamas', mother: 'pradveshi', yug: 'treta' },
    { id: 'ahalya', name: 'अहल्या', subtitle: 'गौतम की पत्नी', parent: '', spouseOf: 'gautama', yug: 'treta' },
    { id: 'shatananda', name: 'शतानन्द', subtitle: 'गौतम-अहल्या पुत्र', parent: 'gautama', mother: 'ahalya', yug: 'treta', parichay: 'राजा जनक के राजपुरोहित।' },
    { id: 'nodha', name: 'नोधा', subtitle: 'गौतम-अहल्या पुत्र', parent: 'gautama', mother: 'ahalya', yug: 'treta', parichay: 'ऋग्वेद के मंत्रद्रष्टा।' },
    { id: 'vamadeva', name: 'वामदेव', subtitle: 'गौतम-अहल्या पुत्र', parent: 'gautama', mother: 'ahalya', yug: 'treta', parichay: 'ऋग्वेद के मंत्रद्रष्टा।' },
    { id: 'sharadvan', name: 'शरद्वान', subtitle: 'शतानन्द के पुत्र', parent: 'shatananda', yug: 'treta' },
    { id: 'kripacharya', name: 'कृपाचार्य', subtitle: 'कौरव कुलगुरु / चिरंजीवी', parent: 'sharadvan', yug: 'dwapar' },
    { id: 'tara_brihaspati', name: 'तारा', subtitle: 'बृहस्पति की पत्नी', parent: '', spouseOf: 'brihaspati', yug: 'satya' },
    { id: 'kacha', name: 'कच', subtitle: 'बृहस्पति के पुत्र', parent: 'brihaspati', mother: 'tara_brihaspati', yug: 'satya', parichay: 'इन्होंने शुक्राचार्य से मृत-संजीवनी विद्या प्राप्त की थी।' },
    { id: 'bharadwaja', name: 'भारद्वाज', subtitle: 'सप्तर्षि / अंगिरस वंश', parent: 'brihaspati', mother: 'mamata', yug: 'treta', parichay: 'बृहस्पति और ममता के मिलन से उत्पन्न। बाद में राजा भरत ने इन्हें गोद लिया था।' },
    { id: 'sudeshna', name: 'सुदेष्णा', subtitle: 'राजा बलि की पत्नी', parent: '', spouseOf: 'dirghatamas', yug: 'treta', parichay: 'राजा बलि की पत्नी, जिनके गर्भ से नियोग द्वारा दीर्घतमस ने 5 पुत्र उत्पन्न किए।' },
    { id: 'anga', name: 'अंग', subtitle: 'अंग देश के संस्थापक', parent: 'dirghatamas', mother: 'sudeshna', yug: 'treta' },
    { id: 'dadhivahana', name: 'दधिवाहन', subtitle: 'अंग नरेश', parent: 'anga', yug: 'treta' },
    { id: 'khalapana', name: 'खलपान', subtitle: 'अंग नरेश', parent: 'dadhivahana', yug: 'treta' },
    { id: 'diviratha', name: 'दिविरथ', subtitle: 'अंग नरेश', parent: 'khalapana', yug: 'treta' },
    { id: 'dharmaratha', name: 'धर्मरथ', subtitle: 'अंग नरेश', parent: 'diviratha', yug: 'treta' },
    { id: 'chitraratha_anga', name: 'चित्ररथ', subtitle: 'अंग नरेश', parent: 'dharmaratha', yug: 'treta' },
    { id: 'lomapada', name: 'रोमपाद / लोमपाद', subtitle: 'अंग नरेश', parent: 'chitraratha_anga', yug: 'treta', parichay: 'राजा दशरथ के अनन्य मित्र। इन्होंने दशरथ की पुत्री शान्ता को गोद लिया था।' },
    { id: 'shanta', name: 'शान्ता', subtitle: 'लोमपाद की दत्तक पुत्री', parent: 'lomapada', yug: 'treta', parichay: 'राजा दशरथ की मूल पुत्री जिन्हें लोमपाद ने गोद लिया। इनका विवाह ऋष्यश्रृंग से हुआ।' },
    { id: 'chaturanga', name: 'चतुरंग', subtitle: 'अंग नरेश', parent: 'lomapada', yug: 'treta' },
    { id: 'prithulaksha', name: 'पृथुलाक्ष', subtitle: 'अंग नरेश', parent: 'chaturanga', yug: 'treta' },
    { id: 'champa_anga', name: 'चम्पा', subtitle: 'चम्पापुरी के संस्थापक', parent: 'prithulaksha', yug: 'treta' },
    { id: 'haryanga', name: 'हर्यंग', subtitle: 'अंग नरेश', parent: 'champa_anga', yug: 'treta' },
    { id: 'bhadraratha', name: 'भद्ररथ', subtitle: 'अंग नरेश', parent: 'haryanga', yug: 'treta' },
    { id: 'brihadratha_anga', name: 'बृहद्रथ', subtitle: 'अंग नरेश', parent: 'bhadraratha', yug: 'treta' },
    { id: 'brihanmanas', name: 'बृहन्मनस', subtitle: 'अंग नरेश', parent: 'brihadratha_anga', yug: 'treta' },
    { id: 'jayadratha_anga', name: 'जयद्रथ', subtitle: 'अंग नरेश', parent: 'brihanmanas', yug: 'treta' },
    { id: 'vijaya_anga', name: 'विजय', subtitle: 'अंग नरेश', parent: 'jayadratha_anga', yug: 'treta' },
    { id: 'dridhavrata', name: 'दृढव्रत', subtitle: 'अंग नरेश', parent: 'vijaya_anga', yug: 'treta' },
    { id: 'satyakarma', name: 'सत्यकर्म', subtitle: 'अंग नरेश', parent: 'dridhavrata', yug: 'treta' },
    { id: 'adhiratha', name: 'अधिरथ', subtitle: 'सारथी / कर्ण के पालक पिता', parent: 'satyakarma', yug: 'dwapar' },
    { id: 'radha_karna', name: 'राधा', subtitle: 'अधिरथ की पत्नी', parent: '', spouseOf: 'adhiratha', yug: 'dwapar' },
    { id: 'karna', name: 'कर्ण (राधेय)', subtitle: 'अंगराज', parent: 'adhiratha', mother: 'radha_karna', yug: 'dwapar', parichay: 'सूर्य और कुंती के पुत्र, जिन्हें अधिरथ और राधा ने पाला। दुर्योधन ने इन्हें अंग देश का राजा बनाया।' },
    { id: 'vrishasena', name: 'वृषसेन', subtitle: 'कर्ण पुत्र', parent: 'karna', yug: 'dwapar' },
    { id: 'vanga', name: 'वंग', subtitle: 'बंगाल (वंग) के संस्थापक', parent: 'dirghatamas', mother: 'sudeshna', yug: 'treta' },
    { id: 'kalinga', name: 'कलिंग', subtitle: 'कलिंग के संस्थापक', parent: 'dirghatamas', mother: 'sudeshna', yug: 'treta' },
    { id: 'srutayudha', name: 'श्रुतायुध', subtitle: 'कलिंग नरेश', parent: 'kalinga', yug: 'dwapar', parichay: 'महाभारत युद्ध में कौरवों की ओर से लड़े। इनके पास वरुण देव की दी हुई गदा थी।' },
    { id: 'chitrangada_kalinga', name: 'चित्रंगद', subtitle: 'कलिंग नरेश', parent: 'kalinga', yug: 'dwapar' },
    { id: 'bhanumati_kaurav', name: 'भानुमती', subtitle: 'दुर्योधन की पत्नी', parent: 'chitrangada_kalinga', yug: 'dwapar' },
    { id: 'pundra', name: 'पुण्ड्र', subtitle: 'पुण्ड्र के संस्थापक', parent: 'dirghatamas', mother: 'sudeshna', yug: 'treta' },
    { id: 'paundraka', name: 'पौंड्रक वासुदेव', subtitle: 'पुण्ड्र नरेश', parent: 'pundra', yug: 'dwapar', parichay: 'स्वयं को असली वासुदेव मानता था। श्रीकृष्ण ने इसका वध किया।' },
    { id: 'suhma', name: 'सुह्म', subtitle: 'सुह्म के संस्थापक', parent: 'dirghatamas', mother: 'sudeshna', yug: 'treta' },
    { id: 'usij', name: 'उशिज', subtitle: 'दासी', parent: '', spouseOf: 'dirghatamas', yug: 'treta' },
    { id: 'kakshivan', name: 'कक्षीवान', subtitle: 'दीर्घतमस पुत्र', parent: 'dirghatamas', mother: 'usij', yug: 'treta' },
    { id: 'kakshivan_patni', name: 'राजा स्वनय की पुत्रियां', subtitle: 'कक्षीवान की पत्नियाँ', parent: '', spouseOf: 'kakshivan', yug: 'treta' },
    { id: 'ghosha', name: 'घोषाल / घोषा', subtitle: 'कक्षीवान पुत्री', parent: 'kakshivan', mother: 'kakshivan_patni', yug: 'treta', parichay: 'ऋग्वेद की ऋषिका। अश्विनी कुमारों ने इनका कुष्ठ रोग ठीक किया था।' },
    { id: 'sukirti', name: 'सुकीर्ति', subtitle: 'कक्षीवान पुत्र', parent: 'kakshivan', mother: 'kakshivan_patni', yug: 'treta' },
    { id: 'sabara', name: 'शबर', subtitle: 'कक्षीवान पुत्र', parent: 'kakshivan', mother: 'kakshivan_patni', yug: 'treta' },
    { id: 'garga', name: 'गर्ग', subtitle: 'भारद्वाज पुत्र', parent: 'bharadwaja', yug: 'dwapar', parichay: 'यादवों के कुलगुरु।' },
    { id: 'ilavida', name: 'इड़विड़ा', subtitle: 'भारद्वाज पुत्री', parent: 'bharadwaja', spouseOf: 'vishrava', yug: 'treta', parichay: 'विश्रवा की पत्नी और कुबेर की माता।' },
    { id: 'drona', name: 'द्रोणाचार्य', subtitle: 'कौरवों के गुरु', parent: 'bharadwaja', yug: 'dwapar' },
    { id: 'kripi', name: 'कृपी', subtitle: 'द्रोणाचार्य की पत्नी', parent: 'sharadvan', spouseOf: 'drona', yug: 'dwapar', parichay: 'शतानन्द के पुत्र शरद्वान की पुत्री और कृपाचार्य की जुड़वाँ बहन।' },
    { id: 'ashwatthama', name: 'अश्वत्थामा', subtitle: 'द्रोण पुत्र / चिरंजीवी', parent: 'drona', mother: 'kripi', yug: 'dwapar' },
    { id: 'havirbhu', name: 'हविर्भू', subtitle: 'कर्दम ऋषि पुत्री', parent: '', spouseOf: 'pulastya', yug: 'satya', parichay: 'पुलस्त्य ऋषि की पत्नी और विश्रवा की माता।' },
    { id: 'vishrava', name: 'विश्रवा', subtitle: 'पुलस्त्य पुत्र', parent: 'pulastya', mother: 'havirbhu', yug: 'treta' },
    { id: 'kaikesi', name: 'कैकेसी', subtitle: 'सुमाली की पुत्री', parent: '', spouseOf: 'vishrava', yug: 'treta', parichay: 'राक्षस राज सुमाली की पुत्री और रावण, कुम्भकर्ण, विभीषण व शूर्पणखा की माता।' },
    { id: 'pushpotkata', name: 'पुष्पोत्कटा', subtitle: 'विश्रवा की पत्नी', parent: '', spouseOf: 'vishrava', yug: 'treta', parichay: 'विश्रवा की पत्नी और खर की माता।' },
    { id: 'malini', name: 'मालिनी', subtitle: 'विश्रवा की पत्नी', parent: '', spouseOf: 'vishrava', yug: 'treta', parichay: 'विश्रवा की पत्नी और दूषण की माता।' },

    // Kuber's family
    { id: 'kuber', name: 'कुबेर', subtitle: 'यक्षराज', parent: 'vishrava', mother: 'ilavida', yug: 'treta' },
    { id: 'bhadra', name: 'भद्रा', subtitle: 'कुबेर की पत्नी', parent: '', spouseOf: 'kuber', yug: 'treta' },
    { id: 'nalakubara', name: 'नलकूबर', subtitle: 'कुबेर पुत्र', parent: 'kuber', mother: 'bhadra', yug: 'treta', parichay: 'नारद शाप से यमलार्जुन वृक्ष बना था।' },
    { id: 'manigriva', name: 'मणिग्रीव', subtitle: 'कुबेर पुत्र', parent: 'kuber', mother: 'bhadra', yug: 'treta', parichay: 'नारद शाप से यमलार्जुन वृक्ष बना था।' },

    // Siblings of Ravan
    { id: 'shurpanakha', name: 'शूर्पणखा', subtitle: 'रावण की बहन', parent: 'vishrava', mother: 'kaikesi', yug: 'treta', parichay: 'रावण की दुष्ट बहन जिसने राम-लक्ष्मण को उकसाया।' },
    { id: 'khara', name: 'खर', subtitle: 'रावण का भाई', parent: 'vishrava', mother: 'pushpotkata', yug: 'treta', parichay: 'रावण का सौतेला भाई, जो दंडकारण्य में राक्षसों का सेनापति था।' },
    { id: 'dushana', name: 'दूषण', subtitle: 'रावण का भाई', parent: 'vishrava', mother: 'malini', yug: 'treta', parichay: 'खर का भाई, राम द्वारा वध किया गया।' },

    // Ravan and his family
    { id: 'ravana', name: 'रावण', subtitle: 'लंकेश', parent: 'vishrava', mother: 'kaikesi', yug: 'treta',
      events: [
        'मारीच की सहायता से राम-लक्ष्मण को आश्रम से दूर कर सीता का अपहरण किया और जटायु का वध किया। (बालकाण्ड, सर्ग 1, श्लोक 49-52)',
        'राम द्वारा युद्ध में मारे गए। (बालकाण्ड, सर्ग 1, श्लोक 81)'
      ]
    },
    { id: 'mandodari', name: 'मंदोदरी', subtitle: 'मयासुर पुत्री / पञ्चकन्या', parent: '', spouseOf: 'ravana', yug: 'treta', parichay: 'रावण की प्रधान रानी और मेघनाद की माता।' },
    { id: 'dhanyamalini', name: 'धन्यमालिनी', subtitle: 'रावण की पत्नी', parent: '', spouseOf: 'ravana', yug: 'treta', parichay: 'रावण की दूसरी पत्नी और अतिकाय की माता।' },
    { id: 'meghnad', name: 'इंद्रजीत (मेघनाद)', subtitle: 'रावण पुत्र', parent: 'ravana', mother: 'mandodari', yug: 'treta' },
    { id: 'akshayakumara', name: 'अक्षयकुमार', subtitle: 'रावण का पुत्र', parent: 'ravana', mother: 'mandodari', yug: 'treta', parichay: 'अशोक वाटिका में हनुमान जी द्वारा वध किया गया।' },
    { id: 'atikaya', name: 'अतिकाय', subtitle: 'रावण का पुत्र', parent: 'ravana', mother: 'dhanyamalini', yug: 'treta', parichay: 'रावण का बलवान पुत्र जिसे लक्ष्मण ने मारा।' },
    { id: 'trishira', name: 'त्रिशिरा', subtitle: 'रावण का पुत्र', parent: 'ravana', mother: 'dhanyamalini', yug: 'treta', parichay: 'रावण का एक और पुत्र। (खर-दूषण का सेनापति त्रिशिरा अलग था)' },
    { id: 'narantaka', name: 'नरान्तक', subtitle: 'रावण का पुत्र', parent: 'ravana', yug: 'treta' },
    { id: 'devantaka', name: 'देवान्तक', subtitle: 'रावण का पुत्र', parent: 'ravana', yug: 'treta' },

    // Kumbhakarna and his family
    { id: 'kumbhakarna', name: 'कुम्भकर्ण', subtitle: 'राक्षस', parent: 'vishrava', mother: 'kaikesi', yug: 'treta' },
    { id: 'kumbha', name: 'कुम्भ', subtitle: 'कुम्भकर्ण पुत्र', parent: 'kumbhakarna', yug: 'treta', parichay: 'सुग्रीव द्वारा मारा गया।' },
    { id: 'nikumbha', name: 'निकुम्भ', subtitle: 'कुम्भकर्ण पुत्र', parent: 'kumbhakarna', yug: 'treta', parichay: 'हनुमान जी द्वारा मारा गया।' },

    // Vibhishana and his family
    { id: 'vibhishana', name: 'विभीषण', subtitle: 'राम भक्त', parent: 'vishrava', mother: 'kaikesi', yug: 'treta',
      events: [
        'राम द्वारा लंका के राज्य पर अभिषिक्त किए गए। (बालकाण्ड, सर्ग 1, श्लोक 84)'
      ]
    },
    { id: 'sarama', name: 'सरमा', subtitle: 'विभीषण की पत्नी', parent: '', spouseOf: 'vibhishana', yug: 'treta', parichay: 'विभीषण की धार्मिक पत्नी।' },
    { id: 'trijata', name: 'त्रिजटा', subtitle: 'विभीषण की पुत्री', parent: 'vibhishana', mother: 'sarama', yug: 'treta', parichay: 'अशोक वाटिका में माता सीता की स्नेही रक्षक।' },
    { id: 'taranisen', name: 'तरणीसेन', subtitle: 'विभीषण पुत्र', parent: 'vibhishana', mother: 'sarama', yug: 'treta', parichay: 'बांग्ला रामायण के अनुसार विभीषण का वीर और रामभक्त पुत्र।' },
    { id: 'khyati', name: 'ख्याति', subtitle: 'दक्ष पुत्री', parent: 'daksha', spouseOf: 'bhrigu', yug: 'satya' },
    { id: 'paulomi', name: 'पुलोमा', subtitle: 'भृगु पत्नी', parent: '', spouseOf: 'bhrigu', yug: 'satya', parichay: 'महर्षि भृगु की पत्नी और च्यवन ऋषि की माता।' },
    { id: 'dhata', name: 'धाता', subtitle: 'भृगु पुत्र', parent: 'bhrigu', mother: 'khyati', yug: 'satya' },
    { id: 'vidhata', name: 'विधाता', subtitle: 'भृगु पुत्र', parent: 'bhrigu', mother: 'khyati', yug: 'satya' },

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
    { id: 'dadhichi', name: 'दधीचि', subtitle: 'भृगु पुत्र', parent: 'bhrigu', yug: 'satya', parichay: 'महान शिव भक्त ऋषि जिन्होंने वृत्रासुर के वध हेतु वज्र बनाने के लिए अपनी अस्थियों का दान किया था।' },
    { id: 'pippalada', name: 'पिप्पलाद', subtitle: 'दधीचि पुत्र', parent: 'dadhichi', yug: 'satya', parichay: 'दधीचि के पुत्र और प्रश्न उपनिषद के मुख्य ऋषि। इन्होने ही नवग्रहों में शनि देव को दंडित किया था।' },
    { id: 'padma_pippalada', name: 'पद्मा', subtitle: 'अनरण्य पुत्री', parent: '', spouseOf: 'pippalada', yug: 'satya', parichay: 'इक्ष्वाकु वंशी राजा अनरण्य की पुत्री और महर्षि पिप्पलाद की पत्नी।' },

    // Shukracharya & his family
    { id: 'shukracharya', name: 'शुक्राचार्य', subtitle: 'दैत्यों के गुरु', parent: 'bhrigu', mother: 'khyati', yug: 'satya' },
    { id: 'jayanti', name: 'जयन्ती', subtitle: 'इंद्र पुत्री / शुक्र पत्नी', parent: '', spouseOf: 'shukracharya', yug: 'satya' },
    { id: 'devayani', name: 'देवयानी', subtitle: 'शुक्राचार्य पुत्री', parent: 'shukracharya', mother: 'jayanti', yug: 'satya', parichay: 'शुक्राचार्य की पुत्री, जिनका विवाह राजा ययाति से हुआ।' },
    { id: 'araj', name: 'अरज', subtitle: 'शुक्राचार्य पुत्री', parent: 'shukracharya', yug: 'satya', parichay: 'शुक्राचार्य की पुत्री जिसे राजा दंड ने अपमानित किया था, जिसके कारण दंडकारण्य वन बना।' },
    { id: 'shanda', name: 'शण्ड', subtitle: 'शुक्राचार्य पुत्र', parent: 'shukracharya', yug: 'satya', parichay: 'हिरण्यकशिपु के गुरु-पुत्र, जो प्रह्लाद को पढ़ाते थे।' },
    { id: 'marka', name: 'मर्क', subtitle: 'शुक्राचार्य पुत्र', parent: 'shukracharya', yug: 'satya', parichay: 'हिरण्यकशिपु के गुरु-पुत्र, जो प्रह्लाद को पढ़ाते थे।' },

    // Chyavana & his family
    { id: 'chyavana', name: 'च्यवन', subtitle: 'भृगु पुत्र', parent: 'bhrigu', mother: 'paulomi', yug: 'satya', parichay: 'च्यवनप्राश के आविष्कारक और महान ऋषि।' },
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
    { id: 'arundhati', name: 'अरुंधती', subtitle: 'वशिष्ठ पत्नी', parent: '', spouseOf: 'vashistha', yug: 'satya' },
    { id: 'shakti', name: 'शक्ति', subtitle: 'वशिष्ठ पुत्र', parent: 'vashistha', mother: 'arundhati', yug: 'satya' },
    { id: 'adrishyanti', name: 'अदृश्यन्ती', subtitle: 'शक्ति पत्नी', parent: '', spouseOf: 'shakti', yug: 'satya', parichay: 'महर्षि शक्ति की पत्नी और पराशर की माता।' },
    { id: 'parashar', name: 'पराशर', subtitle: 'महान ऋषि', parent: 'shakti', mother: 'adrishyanti', yug: 'treta' },
    { id: 'satyavati', name: 'सत्यवती', subtitle: 'मत्स्यगंधा', parent: '', spouseOf: 'parashar', yug: 'treta', parichay: 'निषादराज की पुत्री। पराशर ऋषि के आशीर्वाद से इन्होने वेद व्यास को जन्म दिया। बाद में शांतनु से विवाह किया।' },
    { id: 'vyasa', name: 'वेद व्यास', subtitle: 'महाभारत रचयिता', parent: 'parashar', mother: 'satyavati', yug: 'dwapar' },
    { id: 'shuka', name: 'शुकदेव', subtitle: 'व्यास पुत्र', parent: 'vyasa', yug: 'dwapar' },
    { id: 'pivari', name: 'पिबरी', subtitle: 'शुकदेव पत्नी', parent: '', spouseOf: 'shuka', yug: 'dwapar', parichay: 'शुकदेव मुनि की पत्नी और पितरों की मानसी पुत्री।' },
    { id: 'krishna_shuka', name: 'कृष्ण (शुक पुत्र)', subtitle: 'शुकदेव पुत्र', parent: 'shuka', mother: 'pivari', yug: 'dwapar' },
    { id: 'gaura', name: 'गौर', subtitle: 'शुकदेव पुत्र', parent: 'shuka', mother: 'pivari', yug: 'dwapar' },
    { id: 'prabhu', name: 'प्रभु', subtitle: 'शुकदेव पुत्र', parent: 'shuka', mother: 'pivari', yug: 'dwapar' },
    { id: 'shambhu_shuka', name: 'शम्भु (शुक पुत्र)', subtitle: 'शुकदेव पुत्र', parent: 'shuka', mother: 'pivari', yug: 'dwapar' },
    { id: 'bhurishrava_shuka', name: 'भूरिश्रवा (शुक पुत्र)', subtitle: 'शुकदेव पुत्र', parent: 'shuka', mother: 'pivari', yug: 'dwapar' },
    { id: 'kirtimati', name: 'कीर्तिमती', subtitle: 'शुकदेव पुत्री', parent: 'shuka', mother: 'pivari', yug: 'dwapar', parichay: 'शुकदेव की पुत्री जिसका विवाह राजा अणुह से हुआ।' },

    // --- CHITRAGUPTA WIVES ---
    { id: 'nandini_chitragupta', name: 'नंदिनी', subtitle: 'सूर्यदक्षिणा / चित्रगुप्त की पत्नी', parent: '', spouseOf: 'chitragupta', yug: 'satya' },
    { id: 'iravati_chitragupta', name: 'इरावती', subtitle: 'शोभावती / चित्रगुप्त की पत्नी', parent: '', spouseOf: 'chitragupta', yug: 'satya' },

    // --- SONS OF NANDINI ---
    { id: 'bhanu', name: 'भानु', subtitle: 'श्रीवास्तव कायस्थ वंश', parent: 'chitragupta', mother: 'nandini_chitragupta', yug: 'satya', parichay: 'इनके द्वारा श्रीवास्तव कायस्थ वंश की स्थापना हुई। श्रीवास्तव वंश आगे चलकर 2 वर्गों (खरे और दूसर) में विभाजित हुआ और इनकी कई अल (उप-शाखाएं/उपनाम) हैं, जैसे- वर्मा, सिन्हा, रायजादा, कानूनगो आदि।' },
    { id: 'padmini_bhanu', name: 'पद्मिनी', subtitle: 'भानु की पत्नी (वासुकी की पुत्री)', parent: '', spouseOf: 'bhanu', yug: 'satya' },

    { id: 'vibhanu', name: 'विभानु', subtitle: 'सूर्यध्वज कायस्थ वंश', parent: 'chitragupta', mother: 'nandini_chitragupta', yug: 'satya', parichay: 'इनके द्वारा सूर्यध्वज कायस्थ वंश की स्थापना हुई। चूँकि इनकी माता सूर्यदेव की पुत्री थीं, इसलिए इनके वंशज सूर्यध्वज नाम से जाने गए।' },
    { id: 'malati_vibhanu', name: 'मालती', subtitle: 'विभानु की पत्नी', parent: '', spouseOf: 'vibhanu', yug: 'satya' },

    { id: 'vishvabhanu', name: 'विश्वभानु', subtitle: 'वाल्मीकि कायस्थ वंश', parent: 'chitragupta', mother: 'nandini_chitragupta', yug: 'satya', parichay: 'इनके द्वारा वाल्मीकि कायस्थ वंश की स्थापना हुई। इन्होने वाल्मीकि क्षेत्र में राज्य स्थापित किया।' },
    { id: 'bimbvati_vishvabhanu', name: 'बिम्बवती', subtitle: 'विश्वभानु की पत्नी', parent: '', spouseOf: 'vishvabhanu', yug: 'satya' },

    { id: 'veeryabhanu', name: 'वीर्यभानु', subtitle: 'अस्थाना कायस्थ वंश', parent: 'chitragupta', mother: 'nandini_chitragupta', yug: 'satya', parichay: 'इनके द्वारा अस्थाना कायस्थ वंश की स्थापना हुई।' },
    { id: 'singhadhwani_veeryabhanu', name: 'सिंघध्वनि', subtitle: 'वीर्यभानु की पत्नी', parent: '', spouseOf: 'veeryabhanu', yug: 'satya' },

    // --- SONS OF IRAVATI ---
    { id: 'charu', name: 'चारु', subtitle: 'माथुर कायस्थ वंश', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा माथुर कायस्थ वंश की स्थापना हुई। माथुर वंश 3 वर्गों (देहलवी, खचौली, कच्छी) और 84 अल (उप-शाखाओं) में विभाजित हुआ, जिनमें कटारिया, सहरिया, ककरानिया आदि प्रमुख हैं।' },
    { id: 'pankajakshi_charu', name: 'पंकजाक्षी', subtitle: 'चारु की पत्नी', parent: '', spouseOf: 'charu', yug: 'satya' },

    { id: 'sucharu', name: 'सुचारु', subtitle: 'गौड़ कायस्थ वंश', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा गौड़ कायस्थ वंश की स्थापना हुई। गौड़ वंश 5 वर्गों और 32 अल (उप-शाखाओं) में विभाजित हुआ, जिनमें खरे, दुसरे, बंगाली आदि प्रमुख हैं।' },
    { id: 'mandhiya_sucharu', name: 'मंधिया', subtitle: 'सुचारु की पत्नी', parent: '', spouseOf: 'sucharu', yug: 'satya' },

    { id: 'chitra_son', name: 'चित्र', subtitle: 'भटनागर कायस्थ वंश', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा भटनागर कायस्थ वंश की स्थापना हुई। भटनागर वंश 84 अल (उप-शाखाओं) में विभाजित हुआ।' },
    { id: 'bhadrakalini_chitra', name: 'भद्रकालिनी', subtitle: 'चित्र की पत्नी', parent: '', spouseOf: 'chitra_son', yug: 'satya' },

    { id: 'matibhan', name: 'मतिभान', subtitle: 'सक्सेना कायस्थ वंश', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा सक्सेना कायस्थ वंश की स्थापना हुई। सक्सेना वंश खरे और दूसर वर्गों में और 106 अल (उप-शाखाओं) में विभाजित हुआ, जिनमें जोहरी, हजेला, रायजादा, कानूनगो आदि प्रमुख हैं।' },
    { id: 'kokalesh_matibhan', name: 'कोकलेश', subtitle: 'मतिभान की पत्नी', parent: '', spouseOf: 'matibhan', yug: 'satya' },

    { id: 'himavan', name: 'हिमवान', subtitle: 'अम्बष्ठ कायस्थ वंश', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा अम्बष्ठ कायस्थ वंश की स्थापना हुई। इनके पांच प्रमुख पुत्र हुए (नागसेन, गयासेन, गयादत्त, रतनमूल और देवधर) जिनसे क्रमशः 24, 35, 85, 25 और 21 अल (उप-शाखाएं) चलीं।' },
    { id: 'bhujangakshi_himavan', name: 'भुजंगाक्षी', subtitle: 'हिमवान की पत्नी', parent: '', spouseOf: 'himavan', yug: 'satya' },

    { id: 'chitracharu', name: 'चित्रचारु', subtitle: 'निगम कायस्थ वंश', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा निगम कायस्थ वंश की स्थापना हुई।' },
    { id: 'ashagandhamati_chitracharu', name: 'अशगंधमति', subtitle: 'चित्रचारु की पत्नी', parent: '', spouseOf: 'chitracharu', yug: 'satya' },

    { id: 'chitracharan', name: 'चित्रचरण', subtitle: 'कर्ण कायस्थ वंश', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा कर्ण कायस्थ वंश की स्थापना हुई।' },
    { id: 'kokalasuta_chitracharan', name: 'कोकलसुता', subtitle: 'चित्रचरण की पत्नी', parent: '', spouseOf: 'chitracharan', yug: 'satya' },

    { id: 'charun', name: 'चारुण', subtitle: 'कुलश्रेष्ठ कायस्थ वंश', parent: 'chitragupta', mother: 'iravati_chitragupta', yug: 'satya', parichay: 'इनके द्वारा कुलश्रेष्ठ कायस्थ वंश की स्थापना हुई।' },
    { id: 'manjubhashini_charun', name: 'मंजुभाषिणी', subtitle: 'चारुण की पत्नी', parent: '', spouseOf: 'charun', yug: 'satya' },

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
    { id: 'kshama_pulaha', name: 'क्षमा', subtitle: 'दक्ष पुत्री / पुलह पत्नी', parent: 'daksha', spouseOf: 'pulaha', yug: 'satya', parichay: 'दक्ष प्रजापति की पुत्री और महर्षि पुलह की मुख्य पत्नी।' },
    { id: 'gati_pulaha', name: 'गति', subtitle: 'कर्दम पुत्री / पुलह पत्नी', parent: '', spouseOf: 'pulaha', yug: 'satya', parichay: 'कर्दम ऋषि की पुत्री और महर्षि पुलह की पत्नी।' },
    { id: 'kardama_pulaha_son', name: 'कर्दम (पुलह पुत्र)', subtitle: 'पुलह और क्षमा के पुत्र', parent: 'pulaha', mother: 'kshama_pulaha', yug: 'satya', parichay: 'विष्णु पुराण के अनुसार क्षमा और पुलह के पुत्र। (यह कर्दम प्रजापति से भिन्न हैं)' },
    { id: 'arvarivat', name: 'अर्वरिवत', subtitle: 'पुलह पुत्र', parent: 'pulaha', mother: 'kshama_pulaha', yug: 'satya' },
    { id: 'sahishnu', name: 'सहिष्णु', subtitle: 'पुलह पुत्र', parent: 'pulaha', yug: 'satya' },
    { id: 'karmashreshtha', name: 'कर्मश्रेष्ठ', subtitle: 'पुलह पुत्र', parent: 'pulaha', mother: 'gati_pulaha', yug: 'satya' },
    { id: 'variyan', name: 'वरीयां', subtitle: 'पुलह पुत्र', parent: 'pulaha', mother: 'gati_pulaha', yug: 'satya' },

    // --- DHARMA DEVA LINEAGE (Sons of Brahma) ---
    { id: 'murti_dharma', name: 'मूर्ति', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya' },
    { id: 'shraddha_dharma', name: 'श्रद्धा', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya' },
    { id: 'maitri_dharma', name: 'मैत्री', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya' },
    { id: 'daya_dharma', name: 'दया', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya' },
    { id: 'shanti_dharma', name: 'शान्ति', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya' },
    { id: 'tushti_dharma', name: 'तुष्टि', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya' },
    { id: 'pushti_dharma', name: 'पुष्टि', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya' },
    { id: 'kriya_dharma', name: 'क्रिया', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya' },
    { id: 'unnati_dharma', name: 'उन्नति', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya' },
    { id: 'buddhi_dharma', name: 'बुद्धि', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya' },
    { id: 'medha_dharma', name: 'मेधा', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya' },
    { id: 'titiksha_dharma', name: 'तितिक्षा', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya' },
    { id: 'hri_dharma', name: 'ह्री (लज्जा)', subtitle: 'दक्ष पुत्री / धर्म पत्नी', parent: 'daksha', spouseOf: 'dharma_deva', yug: 'satya' },

    { id: 'nara_narayana', name: 'नर-नारायण', subtitle: 'मूर्ति के पुत्र', parent: 'dharma_deva', mother: 'murti_dharma', yug: 'satya' },
    { id: 'shubha', name: 'शुभ', subtitle: 'श्रद्धा के पुत्र', parent: 'dharma_deva', mother: 'shraddha_dharma', yug: 'satya' },
    { id: 'prasada', name: 'प्रसाद', subtitle: 'मैत्री के पुत्र', parent: 'dharma_deva', mother: 'maitri_dharma', yug: 'satya' },
    { id: 'abhaya', name: 'अभय', subtitle: 'दया के पुत्र', parent: 'dharma_deva', mother: 'daya_dharma', yug: 'satya' },
    { id: 'sukha', name: 'सुख', subtitle: 'शान्ति के पुत्र', parent: 'dharma_deva', mother: 'shanti_dharma', yug: 'satya' },
    { id: 'muda', name: 'मुद', subtitle: 'तुष्टि के पुत्र', parent: 'dharma_deva', mother: 'tushti_dharma', yug: 'satya' },
    { id: 'smaya', name: 'स्मय', subtitle: 'पुष्टि के पुत्र', parent: 'dharma_deva', mother: 'pushti_dharma', yug: 'satya' },
    { id: 'yoga', name: 'योग', subtitle: 'क्रिया के पुत्र', parent: 'dharma_deva', mother: 'kriya_dharma', yug: 'satya' },
    { id: 'darpa', name: 'दर्प', subtitle: 'उन्नति के पुत्र', parent: 'dharma_deva', mother: 'unnati_dharma', yug: 'satya' },
    { id: 'artha', name: 'अर्थ', subtitle: 'बुद्धि के पुत्र', parent: 'dharma_deva', mother: 'buddhi_dharma', yug: 'satya' },
    { id: 'smriti', name: 'स्मृति', subtitle: 'मेधा के पुत्र', parent: 'dharma_deva', mother: 'medha_dharma', yug: 'satya' },
    { id: 'kshema', name: 'क्षेम', subtitle: 'तितिक्षा के पुत्र', parent: 'dharma_deva', mother: 'titiksha_dharma', yug: 'satya' },
    { id: 'prashraya', name: 'प्रश्रय', subtitle: 'ह्री के पुत्र', parent: 'dharma_deva', mother: 'hri_dharma', yug: 'satya' },

    // --- ADHARMA LINEAGE ---
    { id: 'mrisha_adharma', name: 'मृषा', subtitle: 'अधर्म की पत्नी', spouseOf: 'adharma', yug: 'satya' },
    { id: 'dambha', name: 'दम्भ', subtitle: 'अधर्म पुत्र', parent: 'adharma', mother: 'mrisha_adharma', yug: 'satya' },
    { id: 'maya_adharma', name: 'माया', subtitle: 'अधर्म पुत्री', parent: 'adharma', mother: 'mrisha_adharma', yug: 'satya' },
    { id: 'maya_spouse', name: 'माया', subtitle: 'दम्भ की पत्नी', spouseOf: 'dambha', yug: 'satya' }, // incest representation
    { id: 'lobha_adharma', name: 'लोभ', subtitle: 'दम्भ पुत्र', parent: 'dambha', mother: 'maya_spouse', yug: 'satya' },
    { id: 'nikriti', name: 'निकृति', subtitle: 'दम्भ पुत्री', parent: 'dambha', mother: 'maya_spouse', yug: 'satya' },
    { id: 'nikriti_spouse', name: 'निकृति', subtitle: 'लोभ की पत्नी', spouseOf: 'lobha_adharma', yug: 'satya' },
    { id: 'krodha_adharma', name: 'क्रोध', subtitle: 'लोभ पुत्र', parent: 'lobha_adharma', mother: 'nikriti_spouse', yug: 'satya' },
    { id: 'hinsa', name: 'हिंसा', subtitle: 'लोभ पुत्री', parent: 'lobha_adharma', mother: 'nikriti_spouse', yug: 'satya' },
    { id: 'hinsa_spouse', name: 'हिंसा', subtitle: 'क्रोध की पत्नी', spouseOf: 'krodha_adharma', yug: 'satya' },
    { id: 'kali', name: 'कलि', subtitle: 'क्रोध पुत्र', parent: 'krodha_adharma', mother: 'hinsa_spouse', yug: 'satya' },
    { id: 'durukti', name: 'दुरुक्ति', subtitle: 'क्रोध पुत्री', parent: 'krodha_adharma', mother: 'hinsa_spouse', yug: 'satya' },
    { id: 'durukti_spouse', name: 'दुरुक्ति', subtitle: 'कलि की पत्नी', spouseOf: 'kali', yug: 'satya' },
    { id: 'mrityu_adharma', name: 'मृत्यु', subtitle: 'कलि पुत्र', parent: 'kali', mother: 'durukti_spouse', yug: 'satya' },
    { id: 'bhiti', name: 'भीति', subtitle: 'कलि पुत्री', parent: 'kali', mother: 'durukti_spouse', yug: 'satya' },
    { id: 'bhiti_spouse', name: 'भीति', subtitle: 'मृत्यु की पत्नी', spouseOf: 'mrityu_adharma', yug: 'satya' },
    { id: 'niraya', name: 'निरय', subtitle: 'मृत्यु पुत्र', parent: 'mrityu_adharma', mother: 'bhiti_spouse', yug: 'satya' },
    { id: 'yatana', name: 'यातना', subtitle: 'मृत्यु पुत्री', parent: 'mrityu_adharma', mother: 'bhiti_spouse', yug: 'satya' },

    // --- KAMADEVA LINEAGE (Son of Brahma) ---
    { id: 'rati', name: 'रति', subtitle: 'कामदेव पत्नी / दक्ष पुत्री', parent: 'daksha', spouseOf: 'kamadeva', yug: 'satya' },
    { id: 'harsha', name: 'हर्ष', subtitle: 'कामदेव पुत्र', parent: 'kamadeva', mother: 'rati', yug: 'satya' },
    { id: 'yash_kamadeva', name: 'यश', subtitle: 'कामदेव पुत्र', parent: 'kamadeva', mother: 'rati', yug: 'satya' },

    // --- PULAHA'S FURTHER DESCENDANTS & SPECIES ---
    { id: 'kamadeva_rishi', name: 'कामदेव (ऋषि)', subtitle: 'सहिष्णु के पुत्र', parent: 'sahishnu', yug: 'satya', parichay: 'ऋषि सहिष्णु के पुत्र। (ये रति-पति कामदेव से अलग हैं)।' },

    // प्रजातियां (Species born from Pulaha)
    { id: 'simha_species', name: 'सिंह (Lions)', subtitle: 'पुलह वंश / प्रजाति', parent: 'pulaha', yug: 'satya', parichay: 'पुराणों के अनुसार शेर (Lions) प्रजाति की उत्पत्ति महर्षि पुलह से मानी गई है।' },
    { id: 'vyaghra_species', name: 'व्याघ्र (Tigers)', subtitle: 'पुलह वंश / प्रजाति', parent: 'pulaha', yug: 'satya', parichay: 'बाघ प्रजाति के मूल जनक महर्षि पुलह माने जाते हैं।' },
    { id: 'vrika_species', name: 'वृक (Wolves)', subtitle: 'पुलह वंश / प्रजाति', parent: 'pulaha', yug: 'satya', parichay: 'भेड़िये और कुछ हिंसक पशुओं की उत्पत्ति महर्षि पुलह से हुई।' },
    { id: 'kimpurusha_species', name: 'किंपुरुष', subtitle: 'देव-योनि प्राणी', parent: 'pulaha', yug: 'satya', parichay: 'आधे मनुष्य और आधे पशु के रूप वाले रहस्यमयी देव-योनि प्राणी।' },
    { id: 'shalabha_species', name: 'शलभ (Locusts)', subtitle: 'कीट प्रजाति', parent: 'pulaha', yug: 'satya', parichay: 'टिड्डियों और इसी प्रकार के कीटों की उत्पत्ति भी पुलह वंश से मानी गई है।' },

    // --- KRATU LINEAGE ---
    { id: 'sannati_kratu', name: 'सन्नति', subtitle: 'दक्ष पुत्री / क्रतु पत्नी', parent: 'daksha', spouseOf: 'kratu', yug: 'satya', parichay: 'दक्ष प्रजापति की पुत्री और महर्षि क्रतु की पत्नी (विष्णु पुराण)।' },
    { id: 'kriya_kratu', name: 'क्रिया', subtitle: 'कर्दम पुत्री / क्रतु पत्नी', parent: '', spouseOf: 'kratu', yug: 'satya', parichay: 'कर्दम ऋषि की पुत्री और महर्षि क्रतु की पत्नी (श्रीमद्भागवत)।' },
    { id: 'valakhilya_rishis', name: 'बालखिल्य ऋषि (60,000)', subtitle: 'क्रतु पुत्र', parent: 'kratu', mother: 'sannati_kratu', yug: 'satya', parichay: 'महर्षि क्रतु के 60,000 पुत्र। ये आकार में अंगूठे के पोर जितने होते हैं और सदैव सूर्य देव के रथ के साथ चलते हुए उनकी स्तुति करते हैं।' },

    // --- OTHER BRAHMA CREATIONS ---
    { id: 'ahalya_creation', name: 'अहल्या', subtitle: 'ब्रह्मा की रचना', parent: 'brahma', yug: 'satya', parichay: 'ब्रह्मा जी द्वारा रची गई ब्रह्मांड की सबसे सुंदर स्त्री (बाद में महर्षि गौतम की पत्नी)।' },
    { id: 'agnishvatta_pitri', name: 'अग्निष्वात्त', subtitle: 'पितृगण', parent: 'brahma', yug: 'satya' },
    { id: 'barhishad_pitri', name: 'बर्हिषद', subtitle: 'पितृगण', parent: 'brahma', yug: 'satya' },
    { id: 'swaha', name: 'स्वाहा', subtitle: 'ब्रह्मा की मानस पुत्री', parent: 'brahma', yug: 'satya', parichay: 'अग्नि की पत्नी, देवताओं तक आहुति पहुँचाने वाली।' },
    { id: 'swadha', name: 'स्वधा', subtitle: 'ब्रह्मा की मानस पुत्री', parent: 'brahma', yug: 'satya', parichay: 'पितरों की पत्नी, पितरों तक तर्पण पहुँचाने वाली।' },
    { id: 'agni_abhimani', name: 'अग्नि (अभिमानी)', subtitle: 'मुख से उत्पन्न', parent: 'brahma', yug: 'satya' },
    { id: 'nidra', name: 'निद्रा (योगनिद्रा)', subtitle: 'ब्रह्मा की रचना', parent: 'brahma', yug: 'satya' },
    { id: 'apantaratamas', name: 'अपान्तरतमा', subtitle: 'वाणी से उत्पन्न मानस पुत्र', parent: 'brahma', yug: 'satya', parichay: 'ब्रह्मा जी की वाणी से उत्पन्न मानस पुत्र (बाद में वेदव्यास बने)।' },

    { id: 'brahmana_varna', name: 'ब्राह्मण (वर्ण)', subtitle: 'मुख से उत्पन्न', parent: 'brahma', yug: 'satya' },
    { id: 'kshatriya_varna', name: 'क्षत्रिय (वर्ण)', subtitle: 'भुजाओं से उत्पन्न', parent: 'brahma', yug: 'satya' },
    { id: 'vaishya_varna', name: 'वैश्य (वर्ण)', subtitle: 'जंघाओं से उत्पन्न', parent: 'brahma', yug: 'satya' },
    { id: 'shudra_varna', name: 'शूद्र (वर्ण)', subtitle: 'पैरों से उत्पन्न', parent: 'brahma', yug: 'satya' },
];
