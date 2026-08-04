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
    { id: 'chauhan', name: 'चौहान', subtitle: 'चतुर्थ अग्निवंशी', parent: 'abu_yagya', yug: 'kaliyug', parichay: 'अग्निकुंड से सबसे अंत में चार भुजाओं के साथ प्रकट होने वाले वीर, जिन्होंने चौहान (चाहमान) वंश की स्थापना की। पृथ्वीराज चौहान इसी वंश में हुए।' },

    // ----------------------------------------------------
    // CHALUKYA (SOLANKI) DYNASTY OF GUJARAT
    // ----------------------------------------------------
    { id: 'chalukya_hero', name: 'वीर चुलुक्य', subtitle: 'वंश के मूल पुरुष', parent: 'chalukya', yug: 'kaliyug', parichay: 'अग्निकुंड (या ब्रह्मा जी के चुलुक) से उत्पन्न मूल पुरुष, जिनसे चालुक्य/सोलंकी वंश चला।' },
    { id: 'mularaja_1_chalukya', name: 'मूलराज (प्रथम)', subtitle: 'गुजरात सोलंकी वंश के संस्थापक (940 ई.)', parent: 'chalukya_hero', yug: 'kaliyug', clusterName: 'चालुक्य (सोलंकी) वंश', parichay: 'इन्होंने अन्हिलवाड़ा (पाटन) को राजधानी बनाकर गुजरात में चालुक्य वंश की स्वतंत्र सत्ता स्थापित की।' },
    { id: 'chamundaraja_chalukya', name: 'चामुंडराज', subtitle: 'मूलराज के पुत्र', parent: 'mularaja_1_chalukya', yug: 'kaliyug', clusterName: 'चालुक्य (सोलंकी) वंश' },
    { id: 'vallabharaja_chalukya', name: 'वल्लभराज', subtitle: 'चामुंडराज के पुत्र', parent: 'chamundaraja_chalukya', yug: 'kaliyug', clusterName: 'चालुक्य (सोलंकी) वंश' },
    { id: 'durlabharaja_chalukya', name: 'दुर्लभराज', subtitle: 'चामुंडराज के पुत्र', parent: 'chamundaraja_chalukya', yug: 'kaliyug', clusterName: 'चालुक्य (सोलंकी) वंश' },
    { id: 'nagaraja_chalukya', name: 'नागराज', subtitle: 'चामुंडराज के पुत्र', parent: 'chamundaraja_chalukya', yug: 'kaliyug', clusterName: 'चालुक्य (सोलंकी) वंश' },
    { id: 'bhima_1_chalukya', name: 'भीमदेव (प्रथम)', subtitle: 'सोलंकी सम्राट', parent: 'nagaraja_chalukya', yug: 'kaliyug', isProminent: true, parichay: 'इनके शासनकाल (1025 ई.) में महमूद गजनवी ने सोमनाथ मंदिर पर आक्रमण किया था। भीमदेव ने मोढेरा का सूर्य मंदिर बनवाया।' },
    { id: 'udayamati_queen', name: 'रानी उदयमती', subtitle: 'रानी की वाव की निर्मात्री', parent: '', spouseOf: 'bhima_1_chalukya', yug: 'kaliyug', parichay: 'इन्होंने अपने पति भीमदेव की याद में पाटन में विश्व प्रसिद्ध "रानी की वाव" (Stepwell) का निर्माण करवाया था।' },
    { id: 'karna_1_chalukya', name: 'कर्णदेव (प्रथम)', subtitle: 'भीमदेव के पुत्र', parent: 'bhima_1_chalukya', mother: 'udayamati_queen', yug: 'kaliyug', clusterName: 'चालुक्य (सोलंकी) वंश', parichay: 'इन्होंने कर्णावती (आधुनिक अहमदाबाद) नगर बसाया।' },
    { id: 'jayasimha_siddharaja', name: 'जयसिंह सिद्धराज', subtitle: 'सोलंकी वंश का स्वर्ण काल', parent: 'karna_1_chalukya', yug: 'kaliyug', isProminent: true, parichay: 'गुजरात के सबसे महान और प्रतापी सम्राट (1092–1142)। इन्होंने \'अवंतिनाथ\' की उपाधि धारण की और साम्राज्य का अत्यधिक विस्तार किया।' },
    { id: 'tribhuvanapala_chalukya', name: 'त्रिभुवनपाल', subtitle: 'कुमारपाल के पिता', parent: 'karna_1_chalukya', yug: 'kaliyug', clusterName: 'चालुक्य (सोलंकी) वंश' },
    { id: 'kumarapala_chalukya', name: 'कुमारपाल', subtitle: 'सोलंकी सम्राट', parent: 'tribhuvanapala_chalukya', yug: 'kaliyug', parichay: 'जैन आचार्य हेमचंद्र के अनुयायी। इनके समय में जैन धर्म का गुजरात में बहुत प्रसार हुआ।' },
    { id: 'ajayapala_chalukya', name: 'अजयपाल', subtitle: 'कुमारपाल के भतीजे', parent: 'kumarapala_chalukya', yug: 'kaliyug', clusterName: 'चालुक्य (सोलंकी) वंश' },
    { id: 'mularaja_2_chalukya', name: 'मूलराज (द्वितीय)', subtitle: 'अजयपाल के पुत्र', parent: 'ajayapala_chalukya', yug: 'kaliyug', clusterName: 'चालुक्य (सोलंकी) वंश' },
    { id: 'naiki_devi_queen', name: 'राजमाता नायकी देवी', subtitle: 'मुहम्मद गौरी को हराने वाली', parent: '', spouseOf: 'ajayapala_chalukya', yug: 'kaliyug', parichay: 'बालक मूलराज द्वितीय की संरक्षिका (Regent)। 1178 ई. में \'कसाह्रदा के युद्ध\' में इन्होंने मुहम्मद गौरी को युद्धभूमि में इतनी बुरी तरह हराया कि गौरी कई सालों तक भारत की तरफ नहीं लौटा।' },
    { id: 'bhima_2_chalukya', name: 'भीमदेव (द्वितीय)', subtitle: 'अजयपाल के पुत्र', parent: 'ajayapala_chalukya', mother: 'naiki_devi_queen', yug: 'kaliyug', clusterName: 'चालुक्य (सोलंकी) वंश' },

    // Proxy Node for Chalukya
    { id: 'chalukya_dynasty_proxy', name: 'चालुक्य (सोलंकी) वंश', subtitle: 'मूलराज से भीमदेव द्वितीय तक', isProxy: true, parent: 'chalukya_hero', clusterName: 'चालुक्य (सोलंकी) वंश', yug: 'kaliyug' },


    // ----------------------------------------------------
    // CHAHAMANA (CHAUHAN) DYNASTY OF SHAKAMBHARI / AJMER
    // ----------------------------------------------------
    { id: 'chahamana_hero', name: 'वीर चाहमान', subtitle: 'वंश के मूल पुरुष', parent: 'chauhan', yug: 'kaliyug', parichay: 'अग्निकुंड से अंतिम रूप में चार भुजाओं के साथ उत्पन्न मूल पुरुष, जिनसे चौहान (चाहमान) वंश चला।' },
    { id: 'vasudeva_chauhan', name: 'वासुदेव चौहान', subtitle: 'सांभर राज्य के संस्थापक (551 ई.)', parent: 'chahamana_hero', yug: 'kaliyug', clusterName: 'चौहान (चाहमान) वंश', parichay: 'चौहान वंश के प्रथम ऐतिहासिक राजा। इन्होंने नागौर (अहिच्छत्रपुर) को राजधानी बनाया और सांभर झील का निर्माण करवाया।' },
    { id: 'samantaraja_chauhan', name: 'सामंतराज', subtitle: 'वासुदेव के उत्तराधिकारी', parent: 'vasudeva_chauhan', yug: 'kaliyug', clusterName: 'चौहान (चाहमान) वंश' },
    { id: 'govindaraja_1_chauhan', name: 'गोविंदराज (प्रथम)', subtitle: 'चौहान राजा', parent: 'samantaraja_chauhan', yug: 'kaliyug', clusterName: 'चौहान (चाहमान) वंश' },
    { id: 'simharaja_chauhan', name: 'सिंहराज', subtitle: 'प्रथम \'महाराजाधिराज\'', parent: 'govindaraja_1_chauhan', yug: 'kaliyug', clusterName: 'चौहान (चाहमान) वंश', parichay: 'गुर्जर-प्रतिहारों की अधीनता त्यागकर चौहानों को एक स्वतंत्र शक्ति बनाया।' },
    { id: 'vigraharaja_2_chauhan', name: 'विग्रहराज (द्वितीय)', subtitle: 'सिंहराज के पुत्र', parent: 'simharaja_chauhan', yug: 'kaliyug', clusterName: 'चौहान (चाहमान) वंश' },
    { id: 'ajayaraja_2_chauhan', name: 'अजयराज (द्वितीय)', subtitle: 'अजमेर के संस्थापक (1113 ई.)', parent: 'vigraharaja_2_chauhan', yug: 'kaliyug', clusterName: 'चौहान (चाहमान) वंश', parichay: 'इन्होंने \'अजयमेरु\' (अजमेर) नगर बसाया और उसे चौहान साम्राज्य की नई राजधानी बनाया।' },
    { id: 'arnoraja_chauhan', name: 'अर्णोराज (आनाजी)', subtitle: 'महान चौहान राजा', parent: 'ajayaraja_2_chauhan', yug: 'kaliyug', clusterName: 'चौहान (चाहमान) वंश', parichay: 'तुर्कों को हराकर अजमेर में आनासागर झील का निर्माण करवाया।' },
    { id: 'jagaddeva_chauhan', name: 'जगद्देव', subtitle: 'अर्णोराज के पुत्र', parent: 'arnoraja_chauhan', yug: 'kaliyug', clusterName: 'चौहान (चाहमान) वंश' },
    { id: 'vigraharaja_4_chauhan', name: 'विग्रहराज चतुर्थ (बीसलदेव)', subtitle: 'चौहान वंश का स्वर्ण काल', parent: 'arnoraja_chauhan', yug: 'kaliyug', isProminent: true, parichay: 'इनका शासनकाल सपादलक्ष चौहानों का \'स्वर्ण काल\' माना जाता है। तोमरों से दिल्ली छीनी। ये \'हरिकेलि नाटक\' के रचयिता और एक महान विद्वान थे।' },
    { id: 'someshvara_chauhan', name: 'सोमेश्वर', subtitle: 'अर्णोराज के पुत्र', parent: 'arnoraja_chauhan', yug: 'kaliyug', clusterName: 'चौहान (चाहमान) वंश' },
    { id: 'karpuradevi_queen', name: 'रानी कर्पूरी देवी', subtitle: 'पृथ्वीराज की माता', parent: '', spouseOf: 'someshvara_chauhan', yug: 'kaliyug', parichay: 'कलचुरी राजकुमारी। पति की मृत्यु के बाद बालक पृथ्वीराज की संरक्षिका बनीं और कुशलता से राज्य संभाला।' },
    { id: 'prithviraj_3_chauhan', name: 'सम्राट पृथ्वीराज चौहान', subtitle: 'अंतिम महान हिंदू सम्राट', parent: 'someshvara_chauhan', mother: 'karpuradevi_queen', yug: 'kaliyug', isProminent: true, parichay: 'भारत के सबसे प्रसिद्ध शूरवीर। तराइन के प्रथम युद्ध (1191) में मुहम्मद गौरी को हराया। तराइन के द्वितीय युद्ध (1192) में वीरगति को प्राप्त हुए।' },
    { id: 'hariraja_chauhan', name: 'हरिराज', subtitle: 'पृथ्वीराज के भाई', parent: 'someshvara_chauhan', mother: 'karpuradevi_queen', yug: 'kaliyug', clusterName: 'चौहान (चाहमान) वंश' },
    { id: 'govindaraja_4_chauhan', name: 'गोविंदराज (चतुर्थ)', subtitle: 'रणथंभौर चौहान वंश के संस्थापक', parent: 'prithviraj_3_chauhan', yug: 'kaliyug', clusterName: 'चौहान (चाहमान) वंश', parichay: 'पृथ्वीराज के पुत्र, जिन्होंने रणथंभौर जाकर एक नए चौहान राज्य की नींव रखी।' },

    // Proxy Node for Chauhan
    { id: 'chauhan_dynasty_proxy', name: 'चौहान (चाहमान) वंश', subtitle: 'वासुदेव से पृथ्वीराज तक', isProxy: true, parent: 'chahamana_hero', clusterName: 'चौहान (चाहमान) वंश', yug: 'kaliyug' },

    // ----------------------------------------------------
    // GURJARA-PRATIHARA DYNASTY OF KANNAUJ
    // ----------------------------------------------------
    { id: 'nagabhata_1_pratihara', name: 'नागभट्ट (प्रथम)', subtitle: 'प्रतिहार साम्राज्य के संस्थापक', parent: 'pratihara', yug: 'kaliyug', isProminent: true, parichay: 'इन्होंने अरब आक्रमणकारी जुनैद की सेना को बुरी तरह हराकर सिंध तक खदेड़ दिया था। इन्हें भारत की ढाल (Shield of India) कहा जाता है।' },
    { id: 'kakutstha_pratihara', name: 'ककुत्स्थ', subtitle: 'नागभट्ट के भतीजे', parent: 'nagabhata_1_pratihara', yug: 'kaliyug', clusterName: 'प्रतिहार वंश' },
    { id: 'devaraja_pratihara', name: 'देवराज', subtitle: 'ककुत्स्थ के भाई', parent: 'nagabhata_1_pratihara', yug: 'kaliyug', clusterName: 'प्रतिहार वंश' },
    { id: 'vatsaraja_pratihara', name: 'वत्सराज', subtitle: 'देवराज के पुत्र', parent: 'devaraja_pratihara', yug: 'kaliyug', clusterName: 'प्रतिहार वंश', parichay: 'इन्होंने साम्राज्य का विस्तार किया और बंगाल के पाल वंश (धर्मपाल) को हराया। कन्नौज के लिए त्रिपक्षीय संघर्ष की शुरुआत इन्हीं के समय हुई।' },
    { id: 'nagabhata_2_pratihara', name: 'नागभट्ट (द्वितीय)', subtitle: 'कन्नौज के विजेता', parent: 'vatsaraja_pratihara', yug: 'kaliyug', clusterName: 'प्रतिहार वंश', parichay: 'इन्होंने कन्नौज को जीतकर उसे प्रतिहार साम्राज्य की राजधानी बनाया।' },
    { id: 'ramabhadra_pratihara', name: 'रामभद्र', subtitle: 'नागभट्ट द्वितीय के पुत्र', parent: 'nagabhata_2_pratihara', yug: 'kaliyug', clusterName: 'प्रतिहार वंश' },
    { id: 'mihira_bhoja_pratihara', name: 'सम्राट मिहिर भोज', subtitle: 'महानतम प्रतिहार सम्राट', parent: 'ramabhadra_pratihara', yug: 'kaliyug', isProminent: true, parichay: 'गुर्जर-प्रतिहार वंश के सबसे महान और प्रतापी सम्राट (836–885 ई.)। इन्होंने 'आदिवराह' की उपाधि धारण की थी। अरब यात्री सुलेमान ने इन्हें इस्लाम का सबसे बड़ा दुश्मन बताया था।' },
    { id: 'mahendrapala_1_pratihara', name: 'महेन्द्रपाल (प्रथम)', subtitle: 'मिहिर भोज के पुत्र', parent: 'mihira_bhoja_pratihara', yug: 'kaliyug', clusterName: 'प्रतिहार वंश', parichay: 'प्रसिद्ध संस्कृत कवि और नाटककार 'राजशेखर' इनके दरबार के राजगुरु थे।' },
    { id: 'bhoja_2_pratihara', name: 'भोज (द्वितीय)', subtitle: 'महेन्द्रपाल के पुत्र', parent: 'mahendrapala_1_pratihara', yug: 'kaliyug', clusterName: 'प्रतिहार वंश' },
    { id: 'mahipala_1_pratihara', name: 'महीपाल (प्रथम)', subtitle: 'महेन्द्रपाल के पुत्र', parent: 'mahendrapala_1_pratihara', yug: 'kaliyug', clusterName: 'प्रतिहार वंश' },
    { id: 'mahendrapala_2_pratihara', name: 'महेन्द्रपाल (द्वितीय)', subtitle: 'महीपाल के पुत्र', parent: 'mahipala_1_pratihara', yug: 'kaliyug', clusterName: 'प्रतिहार वंश' },
    { id: 'devapala_pratihara_kannauj', name: 'देवपाल', subtitle: 'महीपाल के पुत्र', parent: 'mahipala_1_pratihara', yug: 'kaliyug', clusterName: 'प्रतिहार वंश' },
    { id: 'vinayakapala_pratihara', name: 'विनायकपाल', subtitle: 'प्रतिहार राजा', parent: 'devapala_pratihara_kannauj', yug: 'kaliyug', clusterName: 'प्रतिहार वंश' },
    { id: 'mahipala_2_pratihara', name: 'महीपाल (द्वितीय)', subtitle: 'प्रतिहार राजा', parent: 'vinayakapala_pratihara', yug: 'kaliyug', clusterName: 'प्रतिहार वंश' },
    { id: 'vijayapala_pratihara', name: 'विजयपाल', subtitle: 'प्रतिहार राजा', parent: 'mahipala_2_pratihara', yug: 'kaliyug', clusterName: 'प्रतिहार वंश' },
    { id: 'rajyapala_pratihara', name: 'राज्यपाल', subtitle: 'महमूद गजनवी के समकालीन', parent: 'vijayapala_pratihara', yug: 'kaliyug', clusterName: 'प्रतिहार वंश', parichay: 'इनके समय (1018 ई.) में महमूद गजनवी ने कन्नौज पर आक्रमण किया था। बिना लड़े भागने के कारण चंदेल शासक विद्याधर ने इनकी हत्या कर दी।' },
    { id: 'trilochanapala_pratihara', name: 'त्रिलोचनपाल', subtitle: 'राज्यपाल के पुत्र', parent: 'rajyapala_pratihara', yug: 'kaliyug', clusterName: 'प्रतिहार वंश' },
    { id: 'yasahpala_pratihara', name: 'यशपाल', subtitle: 'अंतिम प्रतिहार शासक', parent: 'trilochanapala_pratihara', yug: 'kaliyug', clusterName: 'प्रतिहार वंश', parichay: 'प्रतिहार वंश के अंतिम ज्ञात शासक (लगभग 1036 ई.)। इसके बाद गहड़वालों ने कन्नौज पर अधिकार कर लिया।' },

    // Proxy Node for Pratihara
    { id: 'pratihara_dynasty_proxy', name: 'गुर्जर-प्रतिहार वंश', subtitle: 'ककुत्स्थ से यशपाल तक', isProxy: true, parent: 'nagabhata_1_pratihara', clusterName: 'प्रतिहार वंश', yug: 'kaliyug' }

];
