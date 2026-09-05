export const rathoreData = [

    // Rathore / Gahadavala Dynasty (Descendants of Sumitra/Kusha leading to Kannauj and Marwar)
    {
        id: 'gaharwar_dynasty_proxy',
        name: 'गहरवार वंश',
        subtitle: 'यशोविग्रह वंश',
        parent: 'sumitra_king',
        yug: 'kali',
        isProxy: true,
        clusterName: 'गहरवार वंश',
        lineLabel: 'गहरवार वंश'
    },
    {
        id: 'yashovigraha',
        name: 'यशोविग्रह',
        subtitle: 'गहरवार वंश के आदि पुरुष',
        parent: 'gaharwar_dynasty_proxy',
        yug: 'kali',
        parichay: 'सुमित्र की वंशावली में आगे चलकर यशोविग्रह हुए, जिनके वंशजों ने कन्नौज में गहरवार/राठौड़ वंश की स्थापना की।',
        clusterName: 'गहरवार वंश'
    },
    {
        id: 'mahichandra',
        name: 'महीचन्द्र',
        subtitle: 'यशोविग्रह पुत्र',
        parent: 'yashovigraha',
        yug: 'kali',
        clusterName: 'गहरवार वंश'
    },
    {
        id: 'chandradeva_kannauj',
        name: 'चन्द्रदेव',
        subtitle: 'कन्नौज के संस्थापक राजा',
        parent: 'mahichandra',
        yug: 'kali',
        parichay: 'इन्होंने 1090 ई. के आसपास कन्नौज और वाराणसी में एक स्वतंत्र और विशाल गहरवार साम्राज्य की स्थापना की।',
        clusterName: 'गहरवार वंश'
    },
    {
        id: 'madanapala_kannauj',
        name: 'मदनपाल',
        subtitle: 'चन्द्रदेव पुत्र',
        parent: 'chandradeva_kannauj',
        yug: 'kali',
        clusterName: 'गहरवार वंश'
    },
    {
        id: 'govindachandra_kannauj',
        name: 'गोविन्दचन्द्र',
        subtitle: 'कन्नौज के प्रतापी सम्राट',
        parent: 'madanapala_kannauj',
        yug: 'kali',
        parichay: 'ये गहरवार वंश के सबसे प्रतापी और शक्तिशाली सम्राट थे (इन्होंने 1114-1155 तक राज किया)।',
        clusterName: 'गहरवार वंश'
    },
    {
        id: 'vijayachandra_kannauj',
        name: 'विजयचन्द्र',
        subtitle: 'गोविन्दचन्द्र पुत्र',
        parent: 'govindachandra_kannauj',
        yug: 'kali',
        clusterName: 'गहरवार वंश'
    },
    {
        id: 'jaichand',
        name: 'जयचन्द्र (जयचंद)',
        subtitle: 'कन्नौज के सम्राट',
        parent: 'vijayachandra_kannauj',
        yug: 'kali',
        parichay: 'ये कन्नौज के प्रतापी हिन्दू सम्राट थे, जो 1194 ई. में मोहम्मद गौरी के साथ "चंदावर के युद्ध" में वीरगति को प्राप्त हुए।'
    },

    // Rathores of Marwar (Jodhpur)
    {
        id: 'harishchandra_rathore',
        name: 'हरिश्चंद्र',
        subtitle: 'जयचंद पुत्र',
        parent: 'jaichand',
        yug: 'kali',
        clusterName: 'गहरवार वंश'
    },
    {
        id: 'setram_rathore',
        name: 'सेतराम',
        subtitle: 'हरिश्चंद्र पुत्र',
        parent: 'harishchandra_rathore',
        yug: 'kali',
        clusterName: 'गहरवार वंश'
    },
    {
        id: 'rao_siha',
        name: 'राव सीहा',
        subtitle: 'मारवाड़ राठौड़ वंश संस्थापक',
        parent: 'setram_rathore',
        yug: 'kali',
        parichay: 'कन्नौज के पतन के बाद ये 13वीं सदी में मारवाड़ (राजस्थान) आये। ये राठौड़ वंश (मारवाड़) के मूल पुरुष माने जाते हैं।',
        clusterName: 'राठौड़ राजपूत वंश'
    },
    {
        id: 'rathore_dynasty',
        name: 'मारवाड़ के राठौड़',
        subtitle: 'राठौड़ राजवंश',
        parent: 'rao_siha',
        yug: 'kali',
        clusterName: 'राठौड़ राजपूत वंश',
        isProxy: true
    },
    {
        id: 'rao_asthan',
        name: 'राव आस्थान',
        subtitle: 'राव सीहा पुत्र',
        parent: 'rao_siha',
        yug: 'kali'
    },
    {
        id: 'rao_duhad',
        name: 'राव दुहड़',
        subtitle: 'राव आस्थान पुत्र',
        parent: 'rao_asthan',
        yug: 'kali',
        parichay: 'इन्होने राठौड़ों की कुलदेवी "नागणेची माता" की मूर्ति कर्नाटक से लाकर स्थापित की।'
    },
    {
        id: 'rao_raipal',
        name: 'राव रायपाल',
        subtitle: 'राव दुहड़ पुत्र',
        parent: 'rao_duhad',
        yug: 'kali'
    },
    {
        id: 'rao_kanhapal',
        name: 'राव कान्हपाल',
        subtitle: 'राव रायपाल पुत्र',
        parent: 'rao_raipal',
        yug: 'kali'
    },
    {
        id: 'rao_jalansi',
        name: 'राव जलंसी',
        subtitle: 'राव कान्हपाल पुत्र',
        parent: 'rao_kanhapal',
        yug: 'kali'
    },
    {
        id: 'rao_chhada',
        name: 'राव छाड़ा',
        subtitle: 'राव जलंसी पुत्र',
        parent: 'rao_jalansi',
        yug: 'kali'
    },
    {
        id: 'rao_tida',
        name: 'राव तीड़ा',
        subtitle: 'राव छाड़ा पुत्र',
        parent: 'rao_chhada',
        yug: 'kali'
    },
    {
        id: 'rao_salkha',
        name: 'राव सलखा',
        subtitle: 'राव तीड़ा पुत्र',
        parent: 'rao_tida',
        yug: 'kali'
    },
    {
        id: 'rao_chunda_marwar',
        name: 'राव चूंडा (मारवाड़)',
        subtitle: 'सलखा पुत्र',
        parent: 'rao_salkha',
        yug: 'kali',
        parichay: 'इन्होने मंडोर को राठौड़ों की राजधानी बनाया।'
    },
    {
        id: 'rao_ranmal_marwar',
        name: 'राव रणमल',
        subtitle: 'राव चूंडा पुत्र',
        parent: 'rao_chunda_marwar',
        yug: 'kali',
        parichay: 'इनका मेवाड़ की राजनीति में बड़ा हस्तक्षेप था। इनकी बहन हंसाबाई का विवाह राणा लाखा से हुआ था।'
    },
    {
        id: 'rao_jodha',
        name: 'राव जोधा',
        subtitle: 'जोधपुर के संस्थापक',
        parent: 'rao_ranmal_marwar',
        yug: 'kali',
        parichay: 'इन्होंने 1459 ई. में जोधपुर (Jodhpur) शहर की स्थापना की और मेहरानगढ़ किला बनवाया।'
    },

    // Major Branches from Rao Jodha
    {
        id: 'rao_bika',
        name: 'राव बीका',
        subtitle: 'बीकानेर के संस्थापक',
        parent: 'rao_jodha',
        yug: 'kali',
        parichay: 'ये राव जोधा के पुत्र थे। इन्होंने 1488 ई. में बीकानेर (Bikaner) शहर और राठौड़ों के एक नए राज्य की स्थापना की।'
    },
    {
        id: 'rao_duda',
        name: 'राव दूदा',
        subtitle: 'मेड़तिया राठौड़ संस्थापक',
        parent: 'rao_jodha',
        yug: 'kali',
        parichay: 'इन्होंने मेड़ता (Merta) पर अधिकार किया। इनके वंशज "मेड़तिया राठौड़" कहलाये। प्रसिद्ध भक्त मीरा बाई इन्हीं राव दूदा की पोती थीं।'
    },

    // Main Marwar Line (from Jodha)
    {
        id: 'rao_suja',
        name: 'राव सूजा',
        subtitle: 'राव जोधा पुत्र',
        parent: 'rao_jodha',
        yug: 'kali'
    },
    {
        id: 'rao_ganga',
        name: 'राव गांगा',
        subtitle: 'जोधपुर नरेश',
        parent: 'rao_suja',
        yug: 'kali'
    },
    {
        id: 'rao_maldeo',
        name: 'राव मालदेव',
        subtitle: 'हशमत वाला शासक',
        parent: 'rao_ganga',
        yug: 'kali',
        parichay: 'इनके समय में मारवाड़ का सर्वाधिक विस्तार हुआ। इन्होंने शेरशाह सूरी से गिरी-सुमेल का प्रसिद्ध युद्ध লড়াই लड़ा।'
    },
    {
        id: 'rao_chandrasen',
        name: 'राव चन्द्रसेन',
        subtitle: 'मारवाड़ का प्रताप',
        parent: 'rao_maldeo',
        yug: 'kali',
        parichay: 'इन्हें "मारवाड़ का प्रताप" कहा जाता है क्योंकि इन्होंने जीवन भर मुगलों से संघर्ष किया और अकबर की अधीनता स्वीकार नहीं की।'
    },
    {
        id: 'mota_raja_udai_singh',
        name: 'मोटा राजा उदय सिंह',
        subtitle: 'जोधपुर नरेश',
        parent: 'rao_maldeo',
        yug: 'kali'
    },
    {
        id: 'sawai_raja_sur_singh',
        name: 'सवाई राजा सूर सिंह',
        subtitle: 'उदय सिंह पुत्र',
        parent: 'mota_raja_udai_singh',
        yug: 'kali'
    },
    {
        id: 'maharaja_gaj_singh_marwar',
        name: 'महाराजा गज सिंह',
        subtitle: 'सूर सिंह पुत्र',
        parent: 'sawai_raja_sur_singh',
        yug: 'kali'
    },
    {
        id: 'maharaja_jaswant_singh_1',
        name: 'महाराजा जसवंत सिंह प्रथम',
        subtitle: 'जोधपुर नरेश',
        parent: 'maharaja_gaj_singh_marwar',
        yug: 'kali',
        parichay: 'ये औरंगजेब के समय के प्रमुख राजपूत राजा थे।'
    },
    {
        id: 'maharaja_ajit_singh',
        name: 'महाराजा अजीत सिंह',
        subtitle: 'जोधपुर नरेश',
        parent: 'maharaja_jaswant_singh_1',
        yug: 'kali',
        parichay: 'जसवंत सिंह की मृत्यु के बाद वीर दुर्गादास राठौड़ ने इन्हें मुगलों से बचाकर मारवाड़ की गद्दी पर बिठाया।'
    },
];
