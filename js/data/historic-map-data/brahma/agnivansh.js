export const agnivanshData = [
    { id: 'abu_yagya', name: 'आबू यज्ञ', subtitle: 'वशिष्ठ का महायज्ञ', parent: 'vashistha', yug: 'kaliyug', parichay: 'आबू पर्वत पर म्लेच्छों के विनाश के लिए ऋषि वशिष्ठ और विश्वामित्र द्वारा किया गया महायज्ञ, जिससे 4 अग्निवंशी क्षत्रिय उत्पन्न हुए।' },
    { id: 'pratihara', name: 'प्रतिहार', subtitle: 'प्रथम अग्निवंशी', parent: 'abu_yagya', yug: 'kaliyug', parichay: 'अग्निकुंड से प्रकट होने वाले प्रथम वीर, जिन्होंने प्रतिहार (परिहार/गुर्जर-प्रतिहार) वंश की स्थापना की। इन्होने सदियों तक अरबों के आक्रमण से भारत की रक्षा की।' },
    { id: 'parmar', name: 'परमार', subtitle: 'द्वितीय अग्निवंशी', parent: 'abu_yagya', yug: 'kaliyug', parichay: 'अग्निकुंड से प्रकट होने वाले द्वितीय वीर, जिन्होंने परमार (पवार) वंश की स्थापना की। महान चक्रवर्ती सम्राट विक्रमादित्य और राजा भोज इसी वंश में हुए।' },

    { id: 'gardabhilla_paramara', name: 'गर्दभिल्ल', subtitle: 'मालवा के शासक', parent: 'parmar', yug: 'kaliyug', parichay: 'मालवा के शासक। जैन ग्रंथों के अनुसार इन्होंने कालकाचार्य की बहन का अपहरण किया, जिसके कारण शकों ने मालवा पर आक्रमण किया।' },
    { id: 'bhartrihari_paramara', name: 'भर्तृहरि', subtitle: 'महान नाथ योगी', parent: 'gardabhilla_paramara', yug: 'kaliyug', parichay: 'राजा गर्दभिल्ल के ज्येष्ठ पुत्र। राजा बने लेकिन बाद में रानी पिंगला के वैराग्य के कारण संन्यास ले लिया और नाथ योगी बन गए। इन्होंने शतकत्रय (नीतिशतक, शृंगारशतक, वैराग्यशतक) की रचना की।' },
    { id: 'vikramaditya_paramara', name: 'चक्रवर्ती विक्रमादित्य', subtitle: 'विक्रम संवत के संस्थापक (57 BC)', parent: 'gardabhilla_paramara', yug: 'kaliyug', isProminent: true, parichay: 'इन्होंने 57 ईसा पूर्व में शकों को भारत से खदेड़कर विक्रम संवत की स्थापना की। इनका दरबार नवरत्नों (कालिदास, वराहमिहिर आदि) से सुशोभित था।' },
    { id: 'vikramasena_paramara', name: 'विक्रमसेन', subtitle: 'विक्रमादित्य के पुत्र', parent: 'vikramaditya_paramara', yug: 'kaliyug', parichay: 'विक्रमादित्य के पुत्र, जिन्हें कथाओं में चंद्रसेन भी कहा गया है।' },

    // Historical Paramara Dynasty
    { id: 'upendra_paramara', name: 'उपेन्द्र (कृष्णराज)', subtitle: 'परमार वंश के संस्थापक (9वीं सदी)', parent: 'parmar', yug: 'kaliyug', clusterName: 'परमार वंश', parichay: 'मालवा में परमार राजवंश के संस्थापक। संभवतः राष्ट्रकूटों के सामंत थे।' },
    { id: 'vairisimha_1', name: 'वैरीसिंह (प्रथम)', subtitle: 'उपेन्द्र के उत्तराधिकारी', parent: 'upendra_paramara', yug: 'kaliyug', clusterName: 'परमार वंश' },
    { id: 'siyaka_1', name: 'सीयक (प्रथम)', subtitle: 'वैरीसिंह के उत्तराधिकारी', parent: 'vairisimha_1', yug: 'kaliyug', clusterName: 'परमार वंश' },
    { id: 'vakpatiraja_1', name: 'वाक्पतिराज (प्रथम)', subtitle: 'सीयक प्रथम के उत्तराधिकारी', parent: 'siyaka_1', yug: 'kaliyug', clusterName: 'परमार वंश' },
    { id: 'vairisimha_2', name: 'वैरीसिंह (द्वितीय)', subtitle: 'वाक्पतिराज के उत्तराधिकारी', parent: 'vakpatiraja_1', yug: 'kaliyug', clusterName: 'परमार वंश' },
    { id: 'siyaka_2', name: 'हर्ष सीयक (द्वितीय)', subtitle: 'स्वतंत्र परमार राज्य के संस्थापक', parent: 'vairisimha_2', yug: 'kaliyug', clusterName: 'परमार वंश', parichay: 'इन्होंने 972 ई. में राष्ट्रकूट राजधानी मान्यखेत पर आक्रमण कर परमारों को एक स्वतंत्र संप्रभु शक्ति बनाया।' },

    { id: 'munja_paramara', name: 'वाक्पति मुंज', subtitle: 'महान योद्धा और कवि', parent: 'siyaka_2', yug: 'kaliyug', parichay: 'सीयक के दत्तक पुत्र। महान योद्धा और विद्वानों के आश्रयदाता। धार इनकी राजधानी थी।' },
    { id: 'sindhuraja_paramara', name: 'सिंधुराज', subtitle: 'मुंज के भाई', parent: 'siyaka_2', yug: 'kaliyug', parichay: 'इन्होंने चालुक्यों से युद्ध कर परमार राज्य को बचाया।' },
    { id: 'bhoja_paramara', name: 'चक्रवर्ती राजा भोज', subtitle: 'परमार वंश के सबसे महान सम्राट', parent: 'sindhuraja_paramara', yug: 'kaliyug', isProminent: true, parichay: 'परमार वंश के सबसे महान राजा (1010-1055 AD)। भोपाल शहर (भोजपाल) बसाया। भोजेश्वर शिव मंदिर बनवाया। एक महान योद्धा, विद्वान और 84 से अधिक ग्रंथों के रचयिता।' },
    { id: 'jayasimha_1_paramara', name: 'जयसिंह (प्रथम)', subtitle: 'राजा भोज के उत्तराधिकारी', parent: 'bhoja_paramara', yug: 'kaliyug', clusterName: 'राजा भोज के उत्तराधिकारी' },
    { id: 'udayaditya_paramara', name: 'उदयादित्य', subtitle: 'मालवा के शासक', parent: 'bhoja_paramara', yug: 'kaliyug', clusterName: 'राजा भोज के उत्तराधिकारी', parichay: 'इन्होंने भोज के बाद परमार राज्य को नष्ट होने से बचाया और उदयपुर (मध्य प्रदेश) में नीलकंठेश्वर मंदिर बनवाया।' },
    { id: 'lakshmadeva_paramara', name: 'लक्ष्मदेव', subtitle: 'उदयादित्य के पुत्र', parent: 'udayaditya_paramara', yug: 'kaliyug', clusterName: 'राजा भोज के उत्तराधिकारी' },
    { id: 'naravarman_paramara', name: 'नरवर्मन', subtitle: 'उदयादित्य के पुत्र', parent: 'udayaditya_paramara', yug: 'kaliyug', clusterName: 'राजा भोज के उत्तराधिकारी' },
    { id: 'yashovarman_paramara', name: 'यशोवर्मन', subtitle: 'नरवर्मन के पुत्र', parent: 'naravarman_paramara', yug: 'kaliyug', clusterName: 'राजा भोज के उत्तराधिकारी' },
    { id: 'jayavarman_1_paramara', name: 'जयवर्मन (प्रथम)', subtitle: 'यशोवर्मन के पुत्र', parent: 'yashovarman_paramara', yug: 'kaliyug', clusterName: 'राजा भोज के उत्तराधिकारी' },
    { id: 'vindhyavarman_paramara', name: 'विंध्यवर्मन', subtitle: 'परमार राजा', parent: 'jayavarman_1_paramara', yug: 'kaliyug', clusterName: 'राजा भोज के उत्तराधिकारी' },
    { id: 'subhatavarman_paramara', name: 'सुभटवर्मन', subtitle: 'विंध्यवर्मन के पुत्र', parent: 'vindhyavarman_paramara', yug: 'kaliyug', clusterName: 'राजा भोज के उत्तराधिकारी' },
    { id: 'arjunavarman_1_paramara', name: 'अर्जुनवर्मन (प्रथम)', subtitle: 'सुभटवर्मन के पुत्र', parent: 'subhatavarman_paramara', yug: 'kaliyug', clusterName: 'राजा भोज के उत्तराधिकारी' },
    { id: 'devapala_paramara', name: 'देवपाल', subtitle: 'परमार राजा', parent: 'arjunavarman_1_paramara', yug: 'kaliyug', clusterName: 'राजा भोज के उत्तराधिकारी' },
    { id: 'jaitugideva_paramara', name: 'जैतुगीदेव', subtitle: 'देवपाल के पुत्र', parent: 'devapala_paramara', yug: 'kaliyug', clusterName: 'राजा भोज के उत्तराधिकारी' },
    { id: 'jayavarman_2_paramara', name: 'जयवर्मन (द्वितीय)', subtitle: 'जैतुगीदेव के भाई', parent: 'devapala_paramara', yug: 'kaliyug', clusterName: 'राजा भोज के उत्तराधिकारी' },
    { id: 'jayasimha_2_paramara', name: 'जयसिंह (द्वितीय)', subtitle: 'परमार राजा', parent: 'jayavarman_2_paramara', yug: 'kaliyug', clusterName: 'राजा भोज के उत्तराधिकारी' },
    { id: 'arjunavarman_2_paramara', name: 'अर्जुनवर्मन (द्वितीय)', subtitle: 'परमार राजा', parent: 'jayasimha_2_paramara', yug: 'kaliyug', clusterName: 'राजा भोज के उत्तराधिकारी' },
    { id: 'bhoja_2_paramara', name: 'भोज (द्वितीय)', subtitle: 'परमार राजा', parent: 'arjunavarman_2_paramara', yug: 'kaliyug', clusterName: 'राजा भोज के उत्तराधिकारी' },
    { id: 'mahalakadeva_paramara', name: 'महलकदेव', subtitle: 'परमार वंश के अंतिम शासक', parent: 'bhoja_2_paramara', yug: 'kaliyug', clusterName: 'राजा भोज के उत्तराधिकारी', parichay: 'परमार वंश के अंतिम शासक। 1305 ई. में दिल्ली के सुल्तान अलाउद्दीन खिलजी की सेना ने इन्हें और इनके मंत्री गोगादेव को मांडू में पराजित कर मार डाला, जिससे परमार वंश का अंत हो गया।' },

    // Proxy nodes
    { id: 'paramara_dynasty_proxy', name: 'परमार वंश', subtitle: 'उपेन्द्र से हर्ष सीयक तक', isProxy: true, parent: 'parmar', clusterName: 'परमार वंश', yug: 'kaliyug' },
    { id: 'bhoja_successors_proxy', name: 'राजा भोज के उत्तराधिकारी', subtitle: 'परमार वंश के परवर्ती शासक (1305 AD तक)', isProxy: true, parent: 'bhoja_paramara', clusterName: 'राजा भोज के उत्तराधिकारी', yug: 'kaliyug' },

    { id: 'chalukya', name: 'चालुक्य', subtitle: 'तृतीय अग्निवंशी', parent: 'abu_yagya', yug: 'kaliyug', parichay: 'अग्निकुंड से प्रकट होने वाले तृतीय वीर, जिन्होंने चालुक्य (सोलंकी) वंश की स्थापना की।' },
    { id: 'chauhan', name: 'चौहान', subtitle: 'चतुर्थ अग्निवंशी', parent: 'abu_yagya', yug: 'kaliyug', parichay: 'अग्निकुंड से सबसे अंत में चार भुजाओं के साथ प्रकट होने वाले वीर, जिन्होंने चौहान (चाहमान) वंश की स्थापना की। पृथ्वीराज चौहान इसी वंश में हुए।' }
];
