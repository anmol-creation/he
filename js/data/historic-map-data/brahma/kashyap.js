export const kashyapData = [
    { id: 'kashyap', name: 'कश्यप', subtitle: 'महान ऋषि', parent: 'marichi', yug: 'satya' },
    { id: 'aditi', name: 'अदिति', subtitle: 'देवताओं की माता', parent: 'daksha', spouseOf: 'kashyap', yug: 'satya', clusterName: 'कश्यप की १३ पत्नियाँ' },
    { id: 'diti', name: 'दिति', subtitle: 'दैत्यों की माता', parent: 'daksha', spouseOf: 'kashyap', yug: 'satya', clusterName: 'कश्यप की १३ पत्नियाँ' },
    { id: 'danu', name: 'दनु', subtitle: 'दानवों की माता', parent: 'daksha', spouseOf: 'kashyap', yug: 'satya', clusterName: 'कश्यप की १३ पत्नियाँ' },
    { id: 'kadru', name: 'कद्रू', subtitle: 'नागों की माता', parent: 'daksha', spouseOf: 'kashyap', yug: 'satya', clusterName: 'कश्यप की १३ पत्नियाँ' },
    { id: 'vinata', name: 'विनता', subtitle: 'गरुड़ की माता', parent: 'daksha', spouseOf: 'kashyap', yug: 'satya', clusterName: 'कश्यप की १३ पत्नियाँ' },
    { id: 'surabhi', name: 'सुरभि', subtitle: 'गौवंश/रुद्रों की माता', parent: 'daksha', spouseOf: 'kashyap', yug: 'satya', clusterName: 'कश्यप की १३ पत्नियाँ' },
    { id: 'tamra', name: 'ताम्रा', subtitle: 'पक्षियों की माता', parent: 'daksha', spouseOf: 'kashyap', yug: 'satya', clusterName: 'कश्यप की १३ पत्नियाँ' },
    { id: 'krodhavasha', name: 'क्रोधवशा', subtitle: 'हिंसक जीवों की माता', parent: 'daksha', spouseOf: 'kashyap', yug: 'satya', clusterName: 'कश्यप की १३ पत्नियाँ' },
    { id: 'muni_wife', name: 'मुनि', subtitle: 'गंधर्वों की माता', parent: 'daksha', spouseOf: 'kashyap', yug: 'satya', clusterName: 'कश्यप की १३ पत्नियाँ' },
    { id: 'surasa', name: 'सुरसा', subtitle: 'यातुधानों/नागों की माता', parent: 'daksha', spouseOf: 'kashyap', yug: 'satya', clusterName: 'कश्यप की १३ पत्नियाँ' },
    { id: 'khasha', name: 'खशा', subtitle: 'यक्ष/राक्षसों की माता', parent: 'daksha', spouseOf: 'kashyap', yug: 'satya', clusterName: 'कश्यप की १३ पत्नियाँ' },
    { id: 'arishta', name: 'अरिष्टा', subtitle: 'किन्नरों की माता', parent: 'daksha', spouseOf: 'kashyap', yug: 'satya', clusterName: 'कश्यप की १३ पत्नियाँ' },
    { id: 'ila_wife', name: 'इला', subtitle: 'वृक्ष/लताओं की माता', parent: 'daksha', spouseOf: 'kashyap', yug: 'satya', clusterName: 'कश्यप की १३ पत्नियाँ' },

    // Aditi's Children
    { id: 'surya', name: 'विवस्वान (सूर्य)', subtitle: 'सूर्य देव (अदिति पुत्र)', parent: 'kashyap', mother: 'aditi', yug: 'satya' },
    { id: 'sanjna_wife', name: 'संज्ञा', subtitle: 'सूर्य की पत्नी / विश्वकर्मा पुत्री', parent: '', spouseOf: 'surya', yug: 'satya', clusterName: 'सूर्यदेव की पत्नियाँ' },
    { id: 'chhaya_wife', name: 'छाया', subtitle: 'सूर्य की पत्नी / संज्ञा की प्रतिरूप', parent: '', spouseOf: 'surya', yug: 'satya', clusterName: 'सूर्यदेव की पत्नियाँ' },
    { id: 'kunti_surya_proxy', name: 'कुंती', subtitle: 'सूर्यदेव (आध्यात्मिक संबंध)', parent: '', spouseOf: 'surya', yug: 'dwapar', parichay: 'दुर्वासा मुनि के मंत्र प्रभाव से कुंती ने सूर्यदेव का आह्वान किया, जिससे कर्ण का जन्म हुआ।', clusterName: 'सूर्यदेव की पत्नियाँ' },

    // Surya's Children from Sanjna
    { id: 'yama', name: 'यम (धर्मराज)', subtitle: 'सूर्य पुत्र', parent: 'surya', mother: 'sanjna_wife', yug: 'satya', parichay: 'मृत्यु और न्याय के देवता।' },
    { id: 'dhumorna_wife', name: 'धूमोर्णा', subtitle: 'यमराज की पत्नी', parent: '', spouseOf: 'yama', yug: 'satya', clusterName: 'यमराज की पत्नियाँ' },
    { id: 'vijaya_yama_wife', name: 'विजया', subtitle: 'यमराज की पत्नी', parent: '', spouseOf: 'yama', yug: 'satya', clusterName: 'यमराज की पत्नियाँ' },
    { id: 'katila', name: 'कटीला', subtitle: 'यमराज पुत्र', parent: 'yama', yug: 'satya' },

    { id: 'yami', name: 'यमी (यमुना)', subtitle: 'सूर्य पुत्री', parent: 'surya', mother: 'sanjna_wife', yug: 'satya', parichay: 'यमराज की जुड़वां बहन, जो बाद में यमुना नदी बनीं।' },
    { id: 'ashwini_kumar', name: 'अश्विनी कुमार', subtitle: 'नासत्य एवं दस्र', parent: 'surya', mother: 'sanjna_wife', yug: 'satya', parichay: 'देवताओं के वैद्य। इनका जन्म तब हुआ जब सूर्य और संज्ञा अश्व रूप में थे।' },
    { id: 'jyotishmati_wife', name: 'ज्योतिष्मती', subtitle: 'अश्विनी कुमार की पत्नी', parent: '', spouseOf: 'ashwini_kumar', yug: 'satya' },
    { id: 'revanta', name: 'रेवन्त', subtitle: 'सूर्य पुत्र', parent: 'surya', mother: 'sanjna_wife', yug: 'satya', parichay: 'युद्ध और अश्व-पालन के देवता। गुह्यकों के स्वामी।' },

    // Surya's Children from Chhaya
    { id: 'shani', name: 'शनि देव', subtitle: 'कर्मफल दाता', parent: 'surya', mother: 'chhaya_wife', yug: 'satya' },
    { id: 'neela_wife', name: 'नीला', subtitle: 'शनि देव की पत्नी', parent: '', spouseOf: 'shani', yug: 'satya', clusterName: 'शनि देव की पत्नियाँ' },
    { id: 'manda_wife', name: 'मंदा', subtitle: 'शनि देव की पत्नी', parent: '', spouseOf: 'shani', yug: 'satya', clusterName: 'शनि देव की पत्नियाँ' },
    { id: 'dhamini_wife', name: 'दामिनी', subtitle: 'शनि देव की पत्नी', parent: '', spouseOf: 'shani', yug: 'satya', clusterName: 'शनि देव की पत्नियाँ' },
    { id: 'gulikan', name: 'गुलिक', subtitle: 'शनि पुत्र', parent: 'shani', yug: 'satya' },
    { id: 'kuligai', name: 'कुलिगई', subtitle: 'शनि पुत्री', parent: 'shani', yug: 'satya' },

    { id: 'tapati', name: 'ताप्ती', subtitle: 'सूर्य पुत्री', parent: 'surya', mother: 'chhaya_wife', yug: 'satya', parichay: 'इनका विवाह कुरुवंश के राजा संवरण से हुआ।' },
    { id: 'savarni_manu', name: 'सावर्णि मनु', subtitle: 'आगामी मनु', parent: 'surya', mother: 'chhaya_wife', yug: 'satya', parichay: 'आठवें मन्वंतर के मनु।' },
    { id: 'vishti_bhadra', name: 'भद्रा (विष्टि)', subtitle: 'सूर्य पुत्री', parent: 'surya', mother: 'chhaya_wife', yug: 'satya', parichay: 'काल और समय से जुड़ी देवी।' },

    { id: 'indra', name: 'इंद्र', subtitle: 'देवराज (अदिति पुत्र)', parent: 'kashyap', mother: 'aditi', yug: 'satya' },
    { id: 'shachi_indrani', name: 'शची (इंद्राणी)', subtitle: 'इंद्र की पत्नी', parent: 'puloman_danava', spouseOf: 'indra', yug: 'satya' },
    { id: 'jayanta', name: 'जयंत', subtitle: 'इंद्र पुत्र', parent: 'indra', mother: 'shachi_indrani', yug: 'satya', parichay: 'देवराज इंद्र और शची के पुत्र (रामायण में काक रूप धारण किया था)।' },
    { id: 'devasena_indra', name: 'देवसेना', subtitle: 'इंद्र पुत्री', parent: 'indra', mother: 'shachi_indrani', yug: 'satya', parichay: 'इंद्र की पुत्री, जिनका विवाह भगवान कार्तिकेय से हुआ।' },
    { id: 'midhusha', name: 'मीढुष', subtitle: 'इंद्र पुत्र', parent: 'indra', mother: 'shachi_indrani', yug: 'satya' },

    { id: 'vayu', name: 'वायु', subtitle: 'पवन देव (अदिति पुत्र)', parent: 'kashyap', mother: 'aditi', yug: 'satya' },
    { id: 'upendra_vamana', name: 'उपेन्द्र (वामन)', subtitle: 'विष्णु अवतार (अदिति पुत्र)', parent: 'kashyap', mother: 'aditi', yug: 'treta', parichay: 'अदिति के पुत्र के रूप में भगवान विष्णु का वामन अवतार।' },

    // Diti's Children
    { id: 'hiranyakashipu', name: 'हिरण्यकशिपु', subtitle: 'दैत्यराज (दिति पुत्र)', parent: 'kashyap', mother: 'diti', yug: 'satya' },
    { id: 'hiranyaksha', name: 'हिरण्याक्ष', subtitle: 'दैत्य (दिति पुत्र)', parent: 'kashyap', mother: 'diti', yug: 'satya' },
    { id: 'sinhika', name: 'सिंहिका', subtitle: 'दिति पुत्री', parent: 'kashyap', mother: 'diti', yug: 'satya' },
    { id: 'viprachitti', name: 'विप्रचित्ति', subtitle: 'दानव / सिंहिका पति', parent: 'kashyap', mother: 'danu', spouseOf: 'sinhika', yug: 'satya' },
    { id: 'rahu', name: 'राहु', subtitle: 'सिंहिका पुत्र', parent: 'viprachitti', mother: 'sinhika', yug: 'satya' },
    { id: 'marudgan', name: 'मरुद्गण', subtitle: 'दिति के 49 पुत्र', parent: 'kashyap', mother: 'diti', yug: 'satya', parichay: 'इंद्र ने इन्हें अपना भाई बना लिया था, ये हवाओं के देवता हैं।' },

    // Hiranyakashipu's Children
    { id: 'prahlada', name: 'प्रह्लाद', subtitle: 'विष्णु भक्त', parent: 'hiranyakashipu', yug: 'satya' },
    { id: 'anuhlad', name: 'अनुह्लाद', subtitle: 'हिरण्यकशिपु पुत्र', parent: 'hiranyakashipu', yug: 'satya' },
    { id: 'sanhlad', name: 'संह्लाद', subtitle: 'हिरण्यकशिपु पुत्र', parent: 'hiranyakashipu', yug: 'satya' },
    { id: 'hlad', name: 'ह्लाद', subtitle: 'हिरण्यकशिपु पुत्र', parent: 'hiranyakashipu', yug: 'satya' },

    // Prahlada Lineage
    { id: 'vairochana', name: 'विरोचन', subtitle: 'प्रह्लाद पुत्र', parent: 'prahlada', yug: 'treta' },
    { id: 'bali', name: 'बलि', subtitle: 'महान दैत्यराज', parent: 'vairochana', yug: 'treta' },
    { id: 'shesha', name: 'शेषनाग', subtitle: 'नाग (कद्रू पुत्र)', parent: 'kashyap', mother: 'kadru', yug: 'satya' },
    { id: 'vasuki', name: 'वासुकी', subtitle: 'नागराज (कद्रू पुत्र)', parent: 'kashyap', mother: 'kadru', yug: 'satya' },
    { id: 'garuda', name: 'गरुड़', subtitle: 'पक्षीराज (विनता पुत्र)', parent: 'kashyap', mother: 'vinata', yug: 'satya' },
    { id: 'arun', name: 'अरुण', subtitle: 'सूर्य के सारथी (विनता पुत्र)', parent: 'kashyap', mother: 'vinata', yug: 'satya' },

    // Other Wives' Descendants
    { id: 'kamadhenu', name: 'कामधेनु', subtitle: 'दिव्य गौ (सुरभि पुत्री)', parent: 'kashyap', mother: 'surabhi', yug: 'satya' },
    { id: 'nandini', name: 'नंदिनी', subtitle: 'दिव्य गौ', parent: 'kamadhenu', yug: 'satya' },
    { id: 'birds_of_prey', name: 'श्येन (पक्षी)', subtitle: 'ताम्रा वंश', parent: 'kashyap', mother: 'tamra', yug: 'satya' },
    { id: 'violent_animals', name: 'हिंसक जंतु / मगर', subtitle: 'क्रोधवशा वंश', parent: 'kashyap', mother: 'krodhavasha', yug: 'satya' },
    { id: 'gandharvas', name: 'गंधर्व', subtitle: 'मुनि वंश', parent: 'kashyap', mother: 'muni_wife', yug: 'satya' },
    { id: 'yatudhanas', name: 'यातुधान (राक्षस)', subtitle: 'सुरसा वंश', parent: 'kashyap', mother: 'surasa', yug: 'satya' },
    { id: 'yakshas_rakshasas', name: 'यक्ष एवं राक्षस', subtitle: 'खशा वंश', parent: 'kashyap', mother: 'khasha', yug: 'satya' },
    { id: 'kinnaras', name: 'किन्नर', subtitle: 'अरिष्टा वंश', parent: 'kashyap', mother: 'arishta', yug: 'satya' },
    { id: 'flora_trees', name: 'वृक्ष एवं लताएं', subtitle: 'इला वंश', parent: 'kashyap', mother: 'ila_wife', yug: 'satya' }
];
