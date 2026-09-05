export const bais_rajputData = [

    // Bais Rajput Dynasty (Suryavanshi lineage tracing from Shalivahana and Harshavardhana)
    {
        id: 'shalivahana',
        name: 'सम्राट शालिवाहन',
        subtitle: 'शक संवत के प्रवर्तक',
        parent: 'sumitra_king',
        yug: 'kali',
        parichay: 'इन्होंने 78 ईसवी में उज्जैन के राजा विक्रमादित्य के वंशजों (या शकों) को हराकर "शालिवाहन शक" (Saka Era) की शुरुआत की। बैस (Bais) राजपूत विशुद्ध सूर्यवंशी हैं जो इन्हीं सम्राट शालिवाहन से अपनी उत्पत्ति मानते हैं।'
    },
    {
        id: 'vardhan_dynasty_proxy',
        name: 'वर्धन वंश',
        subtitle: 'पुष्यभूति वंश',
        parent: 'shalivahana',
        yug: 'kali',
        parichay: 'वर्धन (पुष्यभूति) वंश और बैस राजपूत।',
        isProxy: true,
        clusterName: 'वर्धन (पुष्यभूति) वंश'
    },
    {
        id: 'pushyabhuti',
        name: 'पुष्यभूति',
        subtitle: 'वर्धन वंश के संस्थापक',
        parent: 'vardhan_dynasty_proxy',
        yug: 'kali',
        parichay: 'शालिवाहन के वंश में आगे चलकर पुष्यभूति हुए जिन्होंने हरियाणा (थानेश्वर) में वर्धन/पुष्यभूति वंश की नींव रखी। अलेक्जेंडर कनिंघम के अनुसार यही बैस राजपूतों का मूल वंश था।',
        clusterName: 'वर्धन (पुष्यभूति) वंश'
    },
    {
        id: 'nara_vardhana',
        name: 'नर वर्धन',
        subtitle: 'पुष्यभूति वंश',
        parent: 'pushyabhuti',
        yug: 'kali',
        clusterName: 'वर्धन (पुष्यभूति) वंश'
    },
    {
        id: 'rajya_vardhana_i',
        name: 'राज्य वर्धन प्रथम',
        subtitle: 'पुष्यभूति वंश',
        parent: 'nara_vardhana',
        yug: 'kali',
        clusterName: 'वर्धन (पुष्यभूति) वंश'
    },
    {
        id: 'aditya_vardhana',
        name: 'आदित्य वर्धन',
        subtitle: 'पुष्यभूति वंश',
        parent: 'rajya_vardhana_i',
        yug: 'kali',
        clusterName: 'वर्धन (पुष्यभूति) वंश'
    },
    {
        id: 'prabhakara_vardhana',
        name: 'प्रभाकर वर्धन',
        subtitle: 'थानेश्वर के महाराजाधिराज',
        parent: 'aditya_vardhana',
        yug: 'kali',
        parichay: 'ये इस वंश के सबसे पहले स्वतंत्र और प्रतापी राजा थे।',
        clusterName: 'वर्धन (पुष्यभूति) वंश'
    },
    {
        id: 'harshavardhana',
        name: 'सम्राट हर्षवर्धन',
        subtitle: 'उत्तर भारत के महान सम्राट',
        parent: 'prabhakara_vardhana',
        yug: 'kali',
        parichay: 'ये प्राचीन भारत (606-647 ई.) के अंतिम महान हिन्दू सम्राटों में से एक थे। बाणभट्ट के \"हर्षचरित\" में इन्हें सूर्यवंशी (बैस) क्षत्रिय बताया गया है। इन्होंने कन्नौज को अपनी राजधानी बनाया था।',
        clusterName: 'वर्धन (पुष्यभूति) वंश'
    },

    // Baiswara (Awadh) Branch
    {
        id: 'abhaychand_bais',
        name: 'राजा अभयचंद बैस',
        subtitle: 'बैसवाड़ा के संस्थापक',
        parent: 'harshavardhana',
        yug: 'kali',
        parichay: 'हर्षवर्धन के वंशजों में अभयचंद ने 13वीं सदी के आसपास अवध क्षेत्र (वर्तमान यूपी) में प्रवेश किया, भर जाति के राजाओं को हराया और \"बैसवाड़ा\" (Baiswara) राज्य की स्थापना की।',
        clusterName: 'वर्धन (पुष्यभूति) वंश'
    },
    {
        id: 'raja_tilokchand',
        name: 'राजा त्रिलोकचंद',
        subtitle: 'त्रिलोकचंदी बैस के प्रवर्तक',
        parent: 'abhaychand_bais',
        yug: 'kali',
        parichay: 'ये बैसवाड़ा के सबसे प्रतापी राजा थे। इन्हीं के नाम से बैसों की सबसे ऊंची \"त्रिलोकचंदी बैस\" शाखा चलती है।',
        clusterName: 'वर्धन (पुष्यभूति) वंश'
    },
    {
        id: 'raja_devaraya',
        name: 'राजा देवरय',
        subtitle: 'डौंडिया खेड़ा के संस्थापक',
        parent: 'raja_tilokchand',
        yug: 'kali',
        parichay: 'राजा त्रिलोकचंद के पौत्र, जिन्होंने डौंडिया खेड़ा (Daundia Khera) को अपनी नई राजधानी बनाया।',
        clusterName: 'वर्धन (पुष्यभूति) वंश'
    },
    {
        id: 'rana_beni_madhav',
        name: 'राणा बेनी माधव',
        subtitle: '1857 के शूरवीर',
        parent: 'raja_devaraya',
        yug: 'kali',
        parichay: 'ये डौंडिया खेड़ा के बैस शासक थे जिन्होंने 1857 की क्रांति में अवध (रायबरेली/उन्नाव) क्षेत्र में अंग्रेजों के खिलाफ भयंकर युद्ध किया था।'
    },
];
