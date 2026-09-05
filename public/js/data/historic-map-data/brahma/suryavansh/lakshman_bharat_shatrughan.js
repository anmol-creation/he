export const lakshman_bharat_shatrughanData = [

    // Bhalla Khatri (Descendants of Bharat)
    {
        id: 'bhalla_vansh_proxy',
        name: 'भल्ला खत्री',
        subtitle: 'भरत के वंशज',
        parent: 'bharat',
        yug: 'kali',
        clusterName: 'भल्ला खत्री (भरत वंश)',
        isProxy: true,
        parichay: 'सिख इतिहास और "बचित्तर नाटक" (दशम ग्रंथ) की परंपराओं के अनुसार, भल्ला खत्री समुदाय की उत्पत्ति भगवान राम के भ्राता भरत के वंशजों से हुई है।'
    },
    {
        id: 'guru_amar_das',
        name: 'श्री गुरु अमरदास जी',
        subtitle: 'तृतीय सिख गुरु',
        parent: 'bhalla_vansh_proxy',
        yug: 'kali',
        isProminent: true,
        clusterName: 'भल्ला खत्री (भरत वंश)',
        parichay: 'सिख धर्म के तीसरे गुरु। इनका जन्म भल्ला खत्री वंश में हुआ था जो भरत जी की वंशावली से संबंधित हैं।'
    },

    {
        id: 'lakshman',
        name: 'लक्ष्मण',
        subtitle: 'शेषनाग अवतार',
        parent: 'dasharath',
        mother: 'sumitra',
        yug: 'treta'
    },
    {
        id: 'angada_lakshman',
        name: 'अंगद',
        subtitle: 'कारुपथ के राजा',
        parent: 'lakshman',
        mother: 'urmila',
        yug: 'treta',
        parichay: 'भगवान राम ने अंगद को कारुपथ राज्य का राजा बनाया था।'
    },
    {
        id: 'chandraketu',
        name: 'चन्द्रकेतु',
        subtitle: 'चन्द्रकांति (मालवा) के राजा',
        parent: 'lakshman',
        mother: 'urmila',
        yug: 'treta',
        parichay: 'भगवान राम ने चन्द्रकेतु को चन्द्रकांति राज्य का राजा बनाया था।'
    },
    // Lakshman's descendants (Pratihara, Bargujar, Trehan)
    {
        id: 'lakshman_descendants_proxy',
        name: 'लक्ष्मण के वंशज',
        subtitle: 'प्रतिहार, बड़गूजर, त्रेहन',
        parent: 'lakshman',
        yug: 'kali',
        isProxy: true,
        clusterName: 'लक्ष्मण के वंशज',
        parichay: 'ऐतिहासिक शिलालेखों (जैसे मिहिर भोज का ग्वालियर शिलालेख) के अनुसार गुर्जर-प्रतिहार स्वयं को लक्ष्मण का वंशज मानते हैं। साथ ही, सिख इतिहास के अनुसार त्रेहन खत्री भी लक्ष्मण के ही वंशज हैं।'
    },

    // Pratihara / Parihar Rajput
    {
        id: 'pratihara_dynasty',
        name: 'गुर्जर-प्रतिहार राजवंश',
        subtitle: 'लक्ष्मण के वंशज',
        parent: 'lakshman_descendants_proxy',
        yug: 'kali',
        clusterName: 'लक्ष्मण के वंशज',
        parichay: '8वीं से 11वीं सदी तक उत्तर भारत के सबसे शक्तिशाली सम्राट। ग्वालियर शिलालेख के अनुसार ये लक्ष्मण के वंशज हैं क्योंकि उन्होंने राम के "प्रतिहार" (द्वारपाल) के रूप में कार्य किया था। वर्तमान "परिहार" (Parihar) राजपूत इसी वंश से हैं।'
    },
    {
        id: 'parihar_rajput',
        name: 'परिहार (Parihar)',
        subtitle: 'राजपूत गोत्र',
        parent: 'pratihara_dynasty',
        yug: 'kali',
        clusterName: 'लक्ष्मण के वंशज'
    },

    // Bargujar / Raghav lineage (Moved from Luv to Lakshman based on Epigraphy)
    {
        id: 'bargujar_adi',
        name: 'बड़गूजर (राघव) वंश',
        subtitle: 'लक्ष्मण के वंशज',
        parent: 'pratihara_dynasty',
        clusterName: 'लक्ष्मण के वंशज',
        yug: 'kali',
        parichay: 'राजौरगढ़ के 959 ई. के शिलालेख और ऐतिहासिक साक्ष्यों के अनुसार, बड़गूजर गुर्जर-प्रतिहारों की ही एक शाखा हैं और इस प्रकार लक्ष्मण के वंशज हैं।'
    },
    {
        id: 'raja_bagh_singh',
        name: 'राजा बाघ सिंह',
        subtitle: 'बड़गूजर राजा',
        parent: 'bargujar_adi',
        yug: 'kali',
        parichay: 'इन्होंने राजस्थान में बाघधरा (BaghDhara) बसाया।'
    },
    {
        id: 'raja_pratap_singh_bargujar',
        name: 'राजा प्रताप सिंह बड़गूजर',
        subtitle: 'पृथ्वीराज चौहान के सेनापति',
        parent: 'raja_bagh_singh',
        yug: 'kali',
        parichay: 'ये पृथ्वीराज चौहान के समकालीन और उनके सेनापतियों में से एक माने जाते हैं, जिन्होंने मुस्लिम आक्रमणकारियों से भयानक युद्ध किया।'
    },
    {
        id: 'sikarwar_rajput',
        name: 'सिकरवार वंश',
        subtitle: 'बड़गूजरों की शाखा',
        parent: 'raja_pratap_singh_bargujar',
        yug: 'kali',
        parichay: 'मुस्लिम आक्रमणकारियों के भारी नरसंहार से बचने और अपनी अधीनता स्वीकार न करने के संकल्प के कारण, बड़गूजरों के ही एक समूह ने अपना नाम बदलकर "सिकरवार" रख लिया था।'
    },
    {
        id: 'raja_anup_singh',
        name: 'राजा अनूप सिंह',
        subtitle: 'अनूपशहर के संस्थापक',
        parent: 'raja_pratap_singh_bargujar',
        yug: 'kali',
        parichay: 'इन्होंने उत्तर प्रदेश में "अनूपशहर" बसाया और वहां बड़गूजरों की एक बड़ी रियासत कायम की।'
    },
    {
        id: 'bahadur_singh_bargujar',
        name: 'बहादुर सिंह बड़गूजर',
        subtitle: 'घासेरा के शासक',
        parent: 'raja_anup_singh',
        yug: 'kali',
        parichay: 'इन्होंने 18वीं सदी में घासेरा (Ghasera) पर राज किया और मुगलों/जाटों से युद्ध किया।'
    },




    // Trehan Khatri
    {
        id: 'trehan_vansh_proxy',
        name: 'त्रेहन खत्री',
        subtitle: 'लक्ष्मण वंशज खत्री',
        parent: 'lakshman_descendants_proxy',
        yug: 'kali',
        clusterName: 'त्रेहन खत्री (लक्ष्मण वंश)',
        isProxy: true,
        parichay: 'सिख इतिहास और परम्पराओं के अनुसार, त्रेहन खत्री समुदाय की उत्पत्ति भगवान राम के अनुज लक्ष्मण के वंशजों से हुई है।'
    },
    {
        id: 'guru_angad_dev',
        name: 'श्री गुरु अंगद देव जी',
        subtitle: 'द्वितीय सिख गुरु',
        parent: 'trehan_vansh_proxy',
        yug: 'kali',
        isProminent: true,
        clusterName: 'त्रेहन खत्री (लक्ष्मण वंश)',
        parichay: 'सिख धर्म के दूसरे गुरु। इनका जन्म त्रेहन खत्री वंश में हुआ था जो लक्ष्मण जी की वंशावली से संबंधित हैं।'
    },

    {
        id: 'shatrughna',
        name: 'शत्रुघ्न',
        subtitle: 'राम के अनुज',
        parent: 'dasharath',
        mother: 'sumitra',
        yug: 'treta'
    },
    {
        id: 'subahu_shatrughna',
        name: 'सुबाहु',
        subtitle: 'मथुरा के राजा',
        parent: 'shatrughna',
        mother: 'shrutakirti',
        yug: 'treta',
        parichay: 'लवणासुर का वध करने के बाद शत्रुघ्न ने शूरसेन (मथुरा) पर अधिकार किया और सुबाहु को वहां का राजा बनाया।'
    },
    {
        id: 'shatrughati',
        name: 'शत्रुघाती',
        subtitle: 'विदिशा के राजा',
        parent: 'shatrughna',
        mother: 'shrutakirti',
        yug: 'treta',
        parichay: 'शत्रुघ्न के द्वितीय पुत्र, जिन्हें विदिशा का राजा बनाया गया था।'
    },

    // Bhalla Khatri (Descendants of Bharat)
    // Note: To keep the tree structured, we add Bharat's descendants under Bharat directly.

    {
        id: 'sita',
        name: 'सीता',
        subtitle: 'जनक नंदिनी',
        parent: 'seeradhwaja_janak',
        mother: 'sunayana',
        spouseOf: 'ram',
        yug: 'treta'
    },
];
