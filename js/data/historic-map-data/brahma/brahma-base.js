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
    { id: 'shraddha', name: 'श्रद्धा (स्मृति)', subtitle: 'अंगिरस की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'angiras', yug: 'satya', parichay: 'सप्तर्षि अंगिरस की प्रमुख पत्नी। विभिन्न पुराणों में इन्हें श्रद्धा (कर्दम पुत्री) और स्मृति (दक्ष पुत्री) कहा गया है।' },
    { id: 'sinivali', name: 'सिनीवाली', subtitle: 'अंगिरस पुत्री', color: '#ff99cc', parent: 'angiras', mother: 'shraddha', yug: 'satya', parichay: 'अमावस्या की पहली तिथि का मूर्तरूप।' },
    { id: 'kuhu', name: 'कुहू', subtitle: 'अंगिरस पुत्री', color: '#ff99cc', parent: 'angiras', mother: 'shraddha', yug: 'satya', parichay: 'अमावस्या की दूसरी तिथि।' },
    { id: 'raka', name: 'राका', subtitle: 'अंगिरस पुत्री', color: '#ff99cc', parent: 'angiras', mother: 'shraddha', yug: 'satya', parichay: 'पूर्णिमा की पहली तिथि।' },
    { id: 'anumati', name: 'अनुमति', subtitle: 'अंगिरस पुत्री', color: '#ff99cc', parent: 'angiras', mother: 'shraddha', yug: 'satya', parichay: 'पूर्णिमा की दूसरी तिथि।' },
    { id: 'utathya', name: 'उतथ्य', subtitle: 'अंगिरस के बड़े पुत्र', color: '#FFD700', parent: 'angiras', mother: 'shraddha', yug: 'satya' },
    { id: 'samvarta', name: 'संवर्त', subtitle: 'अवधूत ऋषि', color: '#FFD700', parent: 'angiras', mother: 'shraddha', yug: 'satya', parichay: 'संवर्त एक महान अवधूत और दिगंबर सन्यासी थे, जिन्होंने राजा मरुत्त का स्वर्ण यज्ञ करवाया था।' },
    { id: 'brihaspati', name: 'बृहस्पति', subtitle: 'देवताओं के गुरु', color: '#FFD700', parent: 'angiras', mother: 'shraddha', yug: 'satya' },
    { id: 'mamata', name: 'ममता', subtitle: 'उतथ्य की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'utathya', yug: 'satya' },
    { id: 'dirghatamas', name: 'दीर्घतमस', subtitle: 'अंधे महर्षि', color: '#FFD700', parent: 'utathya', mother: 'mamata', yug: 'treta', parichay: 'बृहस्पति के शाप के कारण ये जन्म से अंधे थे। बाद में इन्होने राजा बलि की पत्नी सुदेष्णा के गर्भ से ५ पुत्रों को जन्म दिया।' },
    { id: 'pradveshi', name: 'प्रद्वेषी', subtitle: 'दीर्घतमस की प्रथम पत्नी', color: '#ff99cc', parent: '', spouseOf: 'dirghatamas', yug: 'treta' },
    { id: 'gautama', name: 'गौतम', subtitle: 'सप्तर्षि', color: '#FFD700', parent: 'dirghatamas', mother: 'pradveshi', yug: 'treta' },
    { id: 'ahalya', name: 'अहल्या', subtitle: 'गौतम की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'gautama', yug: 'treta' },
    { id: 'shatananda', name: 'शतानन्द', subtitle: 'गौतम-अहल्या पुत्र', color: '#FFD700', parent: 'gautama', mother: 'ahalya', yug: 'treta', parichay: 'राजा जनक के राजपुरोहित।' },
    { id: 'nodha', name: 'नोधा', subtitle: 'गौतम-अहल्या पुत्र', color: '#FFD700', parent: 'gautama', mother: 'ahalya', yug: 'treta', parichay: 'ऋग्वेद के मंत्रद्रष्टा।' },
    { id: 'vamadeva', name: 'वामदेव', subtitle: 'गौतम-अहल्या पुत्र', color: '#FFD700', parent: 'gautama', mother: 'ahalya', yug: 'treta', parichay: 'ऋग्वेद के मंत्रद्रष्टा।' },
    { id: 'sharadvan', name: 'शरद्वान', subtitle: 'शतानन्द के पुत्र', color: '#FFD700', parent: 'shatananda', yug: 'treta' },
    { id: 'kripacharya', name: 'कृपाचार्य', subtitle: 'कौरव कुलगुरु / चिरंजीवी', color: '#FFD700', parent: 'sharadvan', yug: 'dwapar' },
    { id: 'tara_brihaspati', name: 'तारा', subtitle: 'बृहस्पति की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'brihaspati', yug: 'satya' },
    { id: 'kacha', name: 'कच', subtitle: 'बृहस्पति के पुत्र', color: '#FFD700', parent: 'brihaspati', mother: 'tara_brihaspati', yug: 'satya', parichay: 'इन्होंने शुक्राचार्य से मृत-संजीवनी विद्या प्राप्त की थी।' },
    { id: 'bharadwaja', name: 'भारद्वाज', subtitle: 'सप्तर्षि / अंगिरस वंश', color: '#FFD700', parent: 'brihaspati', mother: 'mamata', yug: 'treta', parichay: 'बृहस्पति और ममता के मिलन से उत्पन्न। बाद में राजा भरत ने इन्हें गोद लिया था।' },
    { id: 'sudeshna', name: 'सुदेष्णा', subtitle: 'राजा बलि की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'dirghatamas', yug: 'treta', parichay: 'राजा बलि की पत्नी, जिनके गर्भ से नियोग द्वारा दीर्घतमस ने 5 पुत्र उत्पन्न किए।' },
    { id: 'anga', name: 'अंग', subtitle: 'अंग देश के संस्थापक', color: '#FF9900', parent: 'dirghatamas', mother: 'sudeshna', yug: 'treta' },
    { id: 'dadhivahana', name: 'दधिवाहन', subtitle: 'अंग नरेश', color: '#FF9900', parent: 'anga', yug: 'treta' },
    { id: 'khalapana', name: 'खलपान', subtitle: 'अंग नरेश', color: '#FF9900', parent: 'dadhivahana', yug: 'treta' },
    { id: 'diviratha', name: 'दिविरथ', subtitle: 'अंग नरेश', color: '#FF9900', parent: 'khalapana', yug: 'treta' },
    { id: 'dharmaratha', name: 'धर्मरथ', subtitle: 'अंग नरेश', color: '#FF9900', parent: 'diviratha', yug: 'treta' },
    { id: 'chitraratha_anga', name: 'चित्ररथ', subtitle: 'अंग नरेश', color: '#FF9900', parent: 'dharmaratha', yug: 'treta' },
    { id: 'lomapada', name: 'रोमपाद / लोमपाद', subtitle: 'अंग नरेश', color: '#FF9900', parent: 'chitraratha_anga', yug: 'treta', parichay: 'राजा दशरथ के अनन्य मित्र। इन्होंने दशरथ की पुत्री शान्ता को गोद लिया था।' },
    { id: 'shanta', name: 'शान्ता', subtitle: 'लोमपाद की दत्तक पुत्री', color: '#ff99cc', parent: 'lomapada', yug: 'treta', parichay: 'राजा दशरथ की मूल पुत्री जिन्हें लोमपाद ने गोद लिया। इनका विवाह ऋष्यश्रृंग से हुआ।' },
    { id: 'chaturanga', name: 'चतुरंग', subtitle: 'अंग नरेश', color: '#FF9900', parent: 'lomapada', yug: 'treta' },
    { id: 'prithulaksha', name: 'पृथुलाक्ष', subtitle: 'अंग नरेश', color: '#FF9900', parent: 'chaturanga', yug: 'treta' },
    { id: 'champa_anga', name: 'चम्पा', subtitle: 'चम्पापुरी के संस्थापक', color: '#FF9900', parent: 'prithulaksha', yug: 'treta' },
    { id: 'haryanga', name: 'हर्यंग', subtitle: 'अंग नरेश', color: '#FF9900', parent: 'champa_anga', yug: 'treta' },
    { id: 'bhadraratha', name: 'भद्ररथ', subtitle: 'अंग नरेश', color: '#FF9900', parent: 'haryanga', yug: 'treta' },
    { id: 'brihadratha_anga', name: 'बृहद्रथ', subtitle: 'अंग नरेश', color: '#FF9900', parent: 'bhadraratha', yug: 'treta' },
    { id: 'brihanmanas', name: 'बृहन्मनस', subtitle: 'अंग नरेश', color: '#FF9900', parent: 'brihadratha_anga', yug: 'treta' },
    { id: 'jayadratha_anga', name: 'जयद्रथ', subtitle: 'अंग नरेश', color: '#FF9900', parent: 'brihanmanas', yug: 'treta' },
    { id: 'vijaya_anga', name: 'विजय', subtitle: 'अंग नरेश', color: '#FF9900', parent: 'jayadratha_anga', yug: 'treta' },
    { id: 'dridhavrata', name: 'दृढव्रत', subtitle: 'अंग नरेश', color: '#FF9900', parent: 'vijaya_anga', yug: 'treta' },
    { id: 'satyakarma', name: 'सत्यकर्म', subtitle: 'अंग नरेश', color: '#FF9900', parent: 'dridhavrata', yug: 'treta' },
    { id: 'adhiratha', name: 'अधिरथ', subtitle: 'सारथी / कर्ण के पालक पिता', color: '#FF9900', parent: 'satyakarma', yug: 'dwapar' },
    { id: 'radha_karna', name: 'राधा', subtitle: 'अधिरथ की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'adhiratha', yug: 'dwapar' },
    { id: 'karna', name: 'कर्ण (राधेय)', subtitle: 'अंगराज', color: '#FF9900', parent: 'adhiratha', mother: 'radha_karna', yug: 'dwapar', parichay: 'सूर्य और कुंती के पुत्र, जिन्हें अधिरथ और राधा ने पाला। दुर्योधन ने इन्हें अंग देश का राजा बनाया।' },
    { id: 'vrishasena', name: 'वृषसेन', subtitle: 'कर्ण पुत्र', color: '#FF9900', parent: 'karna', yug: 'dwapar' },
    { id: 'vanga', name: 'वंग', subtitle: 'बंगाल (वंग) के संस्थापक', color: '#FF9900', parent: 'dirghatamas', mother: 'sudeshna', yug: 'treta' },
    { id: 'kalinga', name: 'कलिंग', subtitle: 'कलिंग के संस्थापक', color: '#FF9900', parent: 'dirghatamas', mother: 'sudeshna', yug: 'treta' },
    { id: 'srutayudha', name: 'श्रुतायुध', subtitle: 'कलिंग नरेश', color: '#FF9900', parent: 'kalinga', yug: 'dwapar', parichay: 'महाभारत युद्ध में कौरवों की ओर से लड़े। इनके पास वरुण देव की दी हुई गदा थी।' },
    { id: 'chitrangada_kalinga', name: 'चित्रंगद', subtitle: 'कलिंग नरेश', color: '#FF9900', parent: 'kalinga', yug: 'dwapar' },
    { id: 'bhanumati_kaurav', name: 'भानुमती', subtitle: 'दुर्योधन की पत्नी', color: '#ff99cc', parent: 'chitrangada_kalinga', yug: 'dwapar' },
    { id: 'pundra', name: 'पुण्ड्र', subtitle: 'पुण्ड्र के संस्थापक', color: '#FF9900', parent: 'dirghatamas', mother: 'sudeshna', yug: 'treta' },
    { id: 'paundraka', name: 'पौंड्रक वासुदेव', subtitle: 'पुण्ड्र नरेश', color: '#FF9900', parent: 'pundra', yug: 'dwapar', parichay: 'स्वयं को असली वासुदेव मानता था। श्रीकृष्ण ने इसका वध किया।' },
    { id: 'suhma', name: 'सुह्म', subtitle: 'सुह्म के संस्थापक', color: '#FF9900', parent: 'dirghatamas', mother: 'sudeshna', yug: 'treta' },
    { id: 'usij', name: 'उशिज', subtitle: 'दासी', color: '#ff99cc', parent: '', spouseOf: 'dirghatamas', yug: 'treta' },
    { id: 'kakshivan', name: 'कक्षीवान', subtitle: 'दीर्घतमस पुत्र', color: '#FFD700', parent: 'dirghatamas', mother: 'usij', yug: 'treta' },
    { id: 'kakshivan_patni', name: 'राजा स्वनय की पुत्रियां', subtitle: 'कक्षीवान की पत्नियाँ', color: '#ff99cc', parent: '', spouseOf: 'kakshivan', yug: 'treta' },
    { id: 'ghosha', name: 'घोषाल / घोषा', subtitle: 'कक्षीवान पुत्री', color: '#ff99cc', parent: 'kakshivan', mother: 'kakshivan_patni', yug: 'treta', parichay: 'ऋग्वेद की ऋषिका। अश्विनी कुमारों ने इनका कुष्ठ रोग ठीक किया था।' },
    { id: 'sukirti', name: 'सुकीर्ति', subtitle: 'कक्षीवान पुत्र', color: '#FFD700', parent: 'kakshivan', mother: 'kakshivan_patni', yug: 'treta' },
    { id: 'sabara', name: 'शबर', subtitle: 'कक्षीवान पुत्र', color: '#FFD700', parent: 'kakshivan', mother: 'kakshivan_patni', yug: 'treta' },
    { id: 'garga', name: 'गर्ग', subtitle: 'भारद्वाज पुत्र', color: '#FFD700', parent: 'bharadwaja', yug: 'dwapar', parichay: 'यादवों के कुलगुरु।' },
    { id: 'ilavida', name: 'इड़विड़ा', subtitle: 'भारद्वाज पुत्री', color: '#ff99cc', parent: 'bharadwaja', spouseOf: 'vishrava', yug: 'treta', parichay: 'विश्रवा की पत्नी और कुबेर की माता।' },
    { id: 'drona', name: 'द्रोणाचार्य', subtitle: 'कौरवों के गुरु', color: '#FFD700', parent: 'bharadwaja', yug: 'dwapar' },
    { id: 'kripi', name: 'कृपी', subtitle: 'द्रोणाचार्य की पत्नी', color: '#ff99cc', parent: 'sharadvan', spouseOf: 'drona', yug: 'dwapar', parichay: 'शतानन्द के पुत्र शरद्वान की पुत्री और कृपाचार्य की जुड़वाँ बहन।' },
    { id: 'ashwatthama', name: 'अश्वत्थामा', subtitle: 'द्रोण पुत्र / चिरंजीवी', color: '#FFD700', parent: 'drona', mother: 'kripi', yug: 'dwapar' },
    { id: 'havirbhu', name: 'हविर्भू', subtitle: 'कर्दम ऋषि पुत्री', color: '#ff99cc', parent: '', spouseOf: 'pulastya', yug: 'satya', parichay: 'पुलस्त्य ऋषि की पत्नी और विश्रवा की माता।' },
    { id: 'vishrava', name: 'विश्रवा', subtitle: 'पुलस्त्य पुत्र', color: '#FFD700', parent: 'pulastya', mother: 'havirbhu', yug: 'treta' },
    { id: 'kaikesi', name: 'कैकेसी', subtitle: 'सुमाली की पुत्री', color: '#ff99cc', parent: '', spouseOf: 'vishrava', yug: 'treta', parichay: 'राक्षस राज सुमाली की पुत्री और रावण, कुम्भकर्ण, विभीषण व शूर्पणखा की माता।' },
    { id: 'pushpotkata', name: 'पुष्पोत्कटा', subtitle: 'विश्रवा की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'vishrava', yug: 'treta', parichay: 'विश्रवा की पत्नी और खर की माता।' },
    { id: 'malini', name: 'मालिनी', subtitle: 'विश्रवा की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'vishrava', yug: 'treta', parichay: 'विश्रवा की पत्नी और दूषण की माता।' },

    // Kuber's family
    { id: 'kuber', name: 'कुबेर', subtitle: 'यक्षराज', color: '#FFD700', parent: 'vishrava', mother: 'ilavida', yug: 'treta' },
    { id: 'bhadra', name: 'भद्रा', subtitle: 'कुबेर की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'kuber', yug: 'treta' },
    { id: 'nalakubara', name: 'नलकूबर', subtitle: 'कुबेर पुत्र', color: '#FFD700', parent: 'kuber', mother: 'bhadra', yug: 'treta', parichay: 'नारद शाप से यमलार्जुन वृक्ष बना था।' },
    { id: 'manigriva', name: 'मणिग्रीव', subtitle: 'कुबेर पुत्र', color: '#FFD700', parent: 'kuber', mother: 'bhadra', yug: 'treta', parichay: 'नारद शाप से यमलार्जुन वृक्ष बना था।' },

    // Siblings of Ravan
    { id: 'shurpanakha', name: 'शूर्पणखा', subtitle: 'रावण की बहन', color: '#4B0082', parent: 'vishrava', mother: 'kaikesi', yug: 'treta', parichay: 'रावण की दुष्ट बहन जिसने राम-लक्ष्मण को उकसाया।' },
    { id: 'khara', name: 'खर', subtitle: 'रावण का भाई', color: '#4B0082', parent: 'vishrava', mother: 'pushpotkata', yug: 'treta', parichay: 'रावण का सौतेला भाई, जो दंडकारण्य में राक्षसों का सेनापति था।' },
    { id: 'dushana', name: 'दूषण', subtitle: 'रावण का भाई', color: '#4B0082', parent: 'vishrava', mother: 'malini', yug: 'treta', parichay: 'खर का भाई, राम द्वारा वध किया गया।' },

    // Ravan and his family
    { id: 'ravana', name: 'रावण', subtitle: 'लंकेश', color: '#4B0082', parent: 'vishrava', mother: 'kaikesi', yug: 'treta',
      events: [
        'मारीच की सहायता से राम-लक्ष्मण को आश्रम से दूर कर सीता का अपहरण किया और जटायु का वध किया। (बालकाण्ड, सर्ग 1, श्लोक 49-52)',
        'राम द्वारा युद्ध में मारे गए। (बालकाण्ड, सर्ग 1, श्लोक 81)'
      ]
    },
    { id: 'mandodari', name: 'मंदोदरी', subtitle: 'मयासुर पुत्री / पञ्चकन्या', color: '#ff99cc', parent: '', spouseOf: 'ravana', yug: 'treta', parichay: 'रावण की प्रधान रानी और मेघनाद की माता।' },
    { id: 'dhanyamalini', name: 'धन्यमालिनी', subtitle: 'रावण की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'ravana', yug: 'treta', parichay: 'रावण की दूसरी पत्नी और अतिकाय की माता।' },
    { id: 'meghnad', name: 'इंद्रजीत (मेघनाद)', subtitle: 'रावण पुत्र', color: '#4B0082', parent: 'ravana', mother: 'mandodari', yug: 'treta' },
    { id: 'akshayakumara', name: 'अक्षयकुमार', subtitle: 'रावण का पुत्र', color: '#4B0082', parent: 'ravana', mother: 'mandodari', yug: 'treta', parichay: 'अशोक वाटिका में हनुमान जी द्वारा वध किया गया।' },
    { id: 'atikaya', name: 'अतिकाय', subtitle: 'रावण का पुत्र', color: '#4B0082', parent: 'ravana', mother: 'dhanyamalini', yug: 'treta', parichay: 'रावण का बलवान पुत्र जिसे लक्ष्मण ने मारा।' },
    { id: 'trishira', name: 'त्रिशिरा', subtitle: 'रावण का पुत्र', color: '#4B0082', parent: 'ravana', mother: 'dhanyamalini', yug: 'treta', parichay: 'रावण का एक और पुत्र। (खर-दूषण का सेनापति त्रिशिरा अलग था)' },
    { id: 'narantaka', name: 'नरान्तक', subtitle: 'रावण का पुत्र', color: '#4B0082', parent: 'ravana', yug: 'treta' },
    { id: 'devantaka', name: 'देवान्तक', subtitle: 'रावण का पुत्र', color: '#4B0082', parent: 'ravana', yug: 'treta' },

    // Kumbhakarna and his family
    { id: 'kumbhakarna', name: 'कुम्भकर्ण', subtitle: 'राक्षस', color: '#4B0082', parent: 'vishrava', mother: 'kaikesi', yug: 'treta' },
    { id: 'kumbha', name: 'कुम्भ', subtitle: 'कुम्भकर्ण पुत्र', color: '#4B0082', parent: 'kumbhakarna', yug: 'treta', parichay: 'सुग्रीव द्वारा मारा गया।' },
    { id: 'nikumbha', name: 'निकुम्भ', subtitle: 'कुम्भकर्ण पुत्र', color: '#4B0082', parent: 'kumbhakarna', yug: 'treta', parichay: 'हनुमान जी द्वारा मारा गया।' },

    // Vibhishana and his family
    { id: 'vibhishana', name: 'विभीषण', subtitle: 'राम भक्त', color: '#4B0082', parent: 'vishrava', mother: 'kaikesi', yug: 'treta',
      events: [
        'राम द्वारा लंका के राज्य पर अभिषिक्त किए गए। (बालकाण्ड, सर्ग 1, श्लोक 84)'
      ]
    },
    { id: 'sarama', name: 'सरमा', subtitle: 'विभीषण की पत्नी', color: '#ff99cc', parent: '', spouseOf: 'vibhishana', yug: 'treta', parichay: 'विभीषण की धार्मिक पत्नी।' },
    { id: 'trijata', name: 'त्रिजटा', subtitle: 'विभीषण की पुत्री', color: '#ff99cc', parent: 'vibhishana', mother: 'sarama', yug: 'treta', parichay: 'अशोक वाटिका में माता सीता की स्नेही रक्षक।' },
    { id: 'taranisen', name: 'तरणीसेन', subtitle: 'विभीषण पुत्र', color: '#4B0082', parent: 'vibhishana', mother: 'sarama', yug: 'treta', parichay: 'बांग्ला रामायण के अनुसार विभीषण का वीर और रामभक्त पुत्र।' },
    { id: 'khyati', name: 'ख्याति', subtitle: 'दक्ष पुत्री', color: '#ff99cc', parent: 'daksha', spouseOf: 'bhrigu', yug: 'satya' },
    { id: 'paulomi', name: 'पुलोमा', subtitle: 'भृगु पत्नी', color: '#ff99cc', parent: '', spouseOf: 'bhrigu', yug: 'satya', parichay: 'महर्षि भृगु की पत्नी और च्यवन ऋषि की माता।' },
    { id: 'dhata', name: 'धाता', subtitle: 'भृगु पुत्र', color: '#FFD700', parent: 'bhrigu', mother: 'khyati', yug: 'satya' },
    { id: 'vidhata', name: 'विधाता', subtitle: 'भृगु पुत्र', color: '#FFD700', parent: 'bhrigu', mother: 'khyati', yug: 'satya' },

    // Markandeya's Lineage
    { id: 'ayati', name: 'आयति', subtitle: 'धाता पत्नी', color: '#ff99cc', parent: '', spouseOf: 'dhata', yug: 'satya' },
    { id: 'niyati', name: 'नियति', subtitle: 'विधाता पत्नी', color: '#ff99cc', parent: '', spouseOf: 'vidhata', yug: 'satya' },
    { id: 'mrikanda', name: 'मृकंड', subtitle: 'विधाता पुत्र', color: '#FFD700', parent: 'vidhata', mother: 'niyati', yug: 'satya' },
    { id: 'markandeya', name: 'मार्कण्डेय', subtitle: 'चिरंजीवी ऋषि', color: '#FFD700', parent: 'mrikanda', yug: 'satya', parichay: 'मृकंड के पुत्र, भगवान शिव के परम भक्त जिन्हें अजर-अमर (चिरंजीवी) होने का वरदान मिला।' },
    { id: 'vedashira', name: 'वेदशिरा', subtitle: 'मार्कण्डेय पुत्र', color: '#FFD700', parent: 'markandeya', yug: 'treta', parichay: 'चिरंजीवी मार्कण्डेय मुनि के पुत्र और महान तपस्वी।' },

    // Dhata's deeper line
    { id: 'prana_rishi', name: 'प्राण', subtitle: 'धाता पुत्र', color: '#FFD700', parent: 'dhata', mother: 'ayati', yug: 'satya' },
    { id: 'dyutiman', name: 'द्युतिमान', subtitle: 'प्राण पुत्र', color: '#FFD700', parent: 'prana_rishi', yug: 'satya' },
    { id: 'rajavan', name: 'राजवान', subtitle: 'द्युतिमान पुत्र', color: '#FFD700', parent: 'dyutiman', yug: 'satya' },

    // Dadhichi
    { id: 'dadhichi', name: 'दधीचि', subtitle: 'भृगु पुत्र', color: '#FFD700', parent: 'bhrigu', yug: 'satya', parichay: 'महान शिव भक्त ऋषि जिन्होंने वृत्रासुर के वध हेतु वज्र बनाने के लिए अपनी अस्थियों का दान किया था।' },
    { id: 'pippalada', name: 'पिप्पलाद', subtitle: 'दधीचि पुत्र', color: '#FFD700', parent: 'dadhichi', yug: 'satya', parichay: 'दधीचि के पुत्र और प्रश्न उपनिषद के मुख्य ऋषि। इन्होने ही नवग्रहों में शनि देव को दंडित किया था।' },

    // Shukracharya & his family
    { id: 'shukracharya', name: 'शुक्राचार्य', subtitle: 'दैत्यों के गुरु', color: '#FFD700', parent: 'bhrigu', mother: 'khyati', yug: 'satya' },
    { id: 'jayanti', name: 'जयन्ती', subtitle: 'इंद्र पुत्री / शुक्र पत्नी', color: '#ff99cc', parent: '', spouseOf: 'shukracharya', yug: 'satya' },
    { id: 'devayani', name: 'देवयानी', subtitle: 'शुक्राचार्य पुत्री', color: '#ff99cc', parent: 'shukracharya', mother: 'jayanti', yug: 'satya', parichay: 'शुक्राचार्य की पुत्री, जिनका विवाह राजा ययाति से हुआ।' },
    { id: 'araj', name: 'अरज', subtitle: 'शुक्राचार्य पुत्री', color: '#ff99cc', parent: 'shukracharya', yug: 'satya', parichay: 'शुक्राचार्य की पुत्री जिसे राजा दंड ने अपमानित किया था, जिसके कारण दंडकारण्य वन बना।' },
    { id: 'shanda', name: 'शण्ड', subtitle: 'शुक्राचार्य पुत्र', color: '#FFD700', parent: 'shukracharya', yug: 'satya', parichay: 'हिरण्यकशिपु के गुरु-पुत्र, जो प्रह्लाद को पढ़ाते थे।' },
    { id: 'marka', name: 'मर्क', subtitle: 'शुक्राचार्य पुत्र', color: '#FFD700', parent: 'shukracharya', yug: 'satya', parichay: 'हिरण्यकशिपु के गुरु-पुत्र, जो प्रह्लाद को पढ़ाते थे।' },

    // Chyavana & his family
    { id: 'chyavana', name: 'च्यवन', subtitle: 'भृगु पुत्र', color: '#FFD700', parent: 'bhrigu', mother: 'paulomi', yug: 'satya', parichay: 'च्यवनप्राश के आविष्कारक और महान ऋषि।' },
    { id: 'sukanya', name: 'सुकन्या', subtitle: 'शर्याति पुत्री', color: '#ff99cc', parent: '', spouseOf: 'chyavana', yug: 'satya', parichay: 'राजा शर्याति की पुत्री और च्यवन ऋषि की परम पतिव्रता पत्नी।' },
    { id: 'pramati', name: 'प्रमति', subtitle: 'च्यवन पुत्र', color: '#FFD700', parent: 'chyavana', mother: 'sukanya', yug: 'satya' },

    // Deeper Chyavana line (Shaunaka)
    { id: 'apnavana', name: 'अप्नवान', subtitle: 'च्यवन वंश', color: '#FFD700', parent: 'chyavana', yug: 'treta', parichay: 'भृगु वंश के ऋषि, जो महाभारत के अनुसार च्यवन के पुत्र और और्व के पिता थे।' },
    { id: 'ruru', name: 'रुरु', subtitle: 'प्रमति पुत्र', color: '#FFD700', parent: 'pramati', yug: 'treta', parichay: 'च्यवन के पौत्र। इन्होने अपनी आधी आयु देकर अपनी पत्नी प्रमद्वरा को जीवित किया था।' },
    { id: 'pramadvara', name: 'प्रमद्वरा', subtitle: 'रुरु पत्नी', color: '#ff99cc', parent: '', spouseOf: 'ruru', yug: 'treta', parichay: 'मेनका अप्सरा की पुत्री और रुरु की पत्नी।' },
    { id: 'shunaka', name: 'शुनक', subtitle: 'रुरु पुत्र', color: '#FFD700', parent: 'ruru', mother: 'pramadvara', yug: 'treta' },
    { id: 'shaunaka', name: 'शौनक', subtitle: 'महान कुलपति ऋषि', color: '#FFD700', parent: 'shunaka', yug: 'dwapar', parichay: 'नैमिषारण्य के महान कुलपति। इन्हीं के आश्रम में सूत जी ने 18 पुराणों और महाभारत की कथा सुनाई थी।' },

    // Aurva line
    { id: 'aurva', name: 'और्व', subtitle: 'भृगु वंश', color: '#FFD700', parent: 'pramati', yug: 'treta', parichay: 'भृगु वंश के महान ऋषि, जो अपनी माता की जांघ (ऊरु) से प्रकट हुए थे।' },
    { id: 'ruchika', name: 'ऋचीक', subtitle: 'भृगु वंश', color: '#FFD700', parent: 'aurva', yug: 'treta' },
    { id: 'jamadagni', name: 'जमदग्नि', subtitle: 'सप्तर्षि', color: '#FFD700', parent: 'ruchika', yug: 'treta' },
    { id: 'rumanvan', name: 'रुमण्वान', subtitle: 'जमदग्नि पुत्र', color: '#FFD700', parent: 'jamadagni', yug: 'treta' },
    { id: 'sushena_rishi', name: 'सुषेण', subtitle: 'जमदग्नि पुत्र', color: '#FFD700', parent: 'jamadagni', yug: 'treta' },
    { id: 'vasu_rishi', name: 'वसु', subtitle: 'जमदग्नि पुत्र', color: '#FFD700', parent: 'jamadagni', yug: 'treta' },
    { id: 'vishwavasu', name: 'विश्वावसु', subtitle: 'जमदग्नि पुत्र', color: '#FFD700', parent: 'jamadagni', yug: 'treta' },
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

    // --- PULAHA LINEAGE ---
    { id: 'kshama_pulaha', name: 'क्षमा', subtitle: 'दक्ष पुत्री / पुलह पत्नी', color: '#ff99cc', parent: 'daksha', spouseOf: 'pulaha', yug: 'satya', parichay: 'दक्ष प्रजापति की पुत्री और महर्षि पुलह की मुख्य पत्नी।' },
    { id: 'gati_pulaha', name: 'गति', subtitle: 'कर्दम पुत्री / पुलह पत्नी', color: '#ff99cc', parent: '', spouseOf: 'pulaha', yug: 'satya', parichay: 'कर्दम ऋषि की पुत्री और महर्षि पुलह की पत्नी।' },
    { id: 'kardama_pulaha_son', name: 'कर्दम (पुलह पुत्र)', subtitle: 'पुलह और क्षमा के पुत्र', color: '#FFD700', parent: 'pulaha', mother: 'kshama_pulaha', yug: 'satya', parichay: 'विष्णु पुराण के अनुसार क्षमा और पुलह के पुत्र। (यह कर्दम प्रजापति से भिन्न हैं)' },
    { id: 'arvarivat', name: 'अर्वरिवत', subtitle: 'पुलह पुत्र', color: '#FFD700', parent: 'pulaha', mother: 'kshama_pulaha', yug: 'satya' },
    { id: 'sahishnu', name: 'सहिष्णु', subtitle: 'पुलह पुत्र', color: '#FFD700', parent: 'pulaha', yug: 'satya' },
    { id: 'karmashreshtha', name: 'कर्मश्रेष्ठ', subtitle: 'पुलह पुत्र', color: '#FFD700', parent: 'pulaha', mother: 'gati_pulaha', yug: 'satya' },
    { id: 'variyan', name: 'वरीयां', subtitle: 'पुलह पुत्र', color: '#FFD700', parent: 'pulaha', mother: 'gati_pulaha', yug: 'satya' },

    // --- PULAHA'S FURTHER DESCENDANTS & SPECIES ---
    { id: 'kamadeva_rishi', name: 'कामदेव (ऋषि)', subtitle: 'सहिष्णु के पुत्र', color: '#FFD700', parent: 'sahishnu', yug: 'satya', parichay: 'ऋषि सहिष्णु के पुत्र। (ये रति-पति कामदेव से अलग हैं)।' },

    // प्रजातियां (Species born from Pulaha)
    { id: 'simha_species', name: 'सिंह (Lions)', subtitle: 'पुलह वंश / प्रजाति', color: '#A0522D', parent: 'pulaha', yug: 'satya', parichay: 'पुराणों के अनुसार शेर (Lions) प्रजाति की उत्पत्ति महर्षि पुलह से मानी गई है।' },
    { id: 'vyaghra_species', name: 'व्याघ्र (Tigers)', subtitle: 'पुलह वंश / प्रजाति', color: '#A0522D', parent: 'pulaha', yug: 'satya', parichay: 'बाघ प्रजाति के मूल जनक महर्षि पुलह माने जाते हैं।' },
    { id: 'vrika_species', name: 'वृक (Wolves)', subtitle: 'पुलह वंश / प्रजाति', color: '#A0522D', parent: 'pulaha', yug: 'satya', parichay: 'भेड़िये और कुछ हिंसक पशुओं की उत्पत्ति महर्षि पुलह से हुई।' },
    { id: 'kimpurusha_species', name: 'किंपुरुष', subtitle: 'देव-योनि प्राणी', color: '#A0522D', parent: 'pulaha', yug: 'satya', parichay: 'आधे मनुष्य और आधे पशु के रूप वाले रहस्यमयी देव-योनि प्राणी।' },
    { id: 'shalabha_species', name: 'शलभ (Locusts)', subtitle: 'कीट प्रजाति', color: '#A0522D', parent: 'pulaha', yug: 'satya', parichay: 'टिड्डियों और इसी प्रकार के कीटों की उत्पत्ति भी पुलह वंश से मानी गई है।' },

    // --- KRATU LINEAGE ---
    { id: 'sannati_kratu', name: 'सन्नति', subtitle: 'दक्ष पुत्री / क्रतु पत्नी', color: '#ff99cc', parent: 'daksha', spouseOf: 'kratu', yug: 'satya', parichay: 'दक्ष प्रजापति की पुत्री और महर्षि क्रतु की पत्नी (विष्णु पुराण)।' },
    { id: 'kriya_kratu', name: 'क्रिया', subtitle: 'कर्दम पुत्री / क्रतु पत्नी', color: '#ff99cc', parent: '', spouseOf: 'kratu', yug: 'satya', parichay: 'कर्दम ऋषि की पुत्री और महर्षि क्रतु की पत्नी (श्रीमद्भागवत)।' },
    { id: 'valakhilya_rishis', name: 'बालखिल्य ऋषि (60,000)', subtitle: 'क्रतु पुत्र', color: '#FFD700', parent: 'kratu', mother: 'sannati_kratu', yug: 'satya', parichay: 'महर्षि क्रतु के 60,000 पुत्र। ये आकार में अंगूठे के पोर जितने होते हैं और सदैव सूर्य देव के रथ के साथ चलते हुए उनकी स्तुति करते हैं।' }
];
