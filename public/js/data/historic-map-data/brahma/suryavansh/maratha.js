export const marathaData = [

    // Maratha Empire (Bhonsle Lineage from Mewar)
    {
        id: 'rana_ajay_singh',
        name: 'राणा अजय सिंह',
        subtitle: 'लक्ष्मण सिंह के पुत्र',
        parent: 'lakshman_singh_sisodia',
        yug: 'kali',
        kali_year: 4390,
        parichay: 'चित्तौड़ के पतन के बाद इन्होने केलवाड़ा में शरण ली और अपने भतीजे हम्मीर को मेवाड़ का उत्तराधिकारी बनाया।'
    },
    {
        id: 'sajjan_singh_bhonsle',
        name: 'सज्जन सिंह (सुजनसिंह)',
        subtitle: 'भोंसले वंश के मूल पुरुष',
        parent: 'rana_ajay_singh',
        yug: 'kali',
        kali_year: 4420,
        parichay: 'मेवाड़ छोड़कर दक्षिण (दक्कन) चले गए और बहमनी सुल्तानों के यहाँ सेवा दी। इन्हीं के वंशज आगे चलकर "भोंसले" कहलाए।'
    },
    {
        id: 'maratha_empire_proxy',
        name: 'मराठा साम्राज्य (भोंसले)',
        subtitle: 'शिवाजी महाराज का वंश',
        parent: 'sajjan_singh_bhonsle',
        yug: 'kali',
        clusterName: 'मराठा (भोंसले) वंश',
        isProxy: true,
        isProminent: true
    },
    {
        id: 'dilip_singh_bhonsle',
        name: 'दिलीप सिंह',
        subtitle: 'सज्जन सिंह पुत्र',
        parent: 'maratha_empire_proxy',
        yug: 'kali',
        kali_year: 4450,
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'sidhji_bhonsle',
        name: 'शिधाजी (सिधजी)',
        subtitle: 'दिलीप सिंह पुत्र',
        parent: 'dilip_singh_bhonsle',
        yug: 'kali',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'bhairav_singh_bhosaji',
        name: 'भैरव सिंह (भोसाजी)',
        subtitle: 'भोंसले नाम के प्रवर्तक',
        parent: 'sidhji_bhonsle',
        yug: 'kali',
        parichay: 'इन्हीं के नाम (भोसाजी) या "भोसावट" जागीर के नाम पर इस वंश का नाम "भोंसले" पड़ा।',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'devaraj_bhonsle',
        name: 'देवराज',
        subtitle: 'भैरव सिंह पुत्र',
        parent: 'bhairav_singh_bhosaji',
        yug: 'kali',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'bhonsle_medieval_link',
        name: 'ऐतिहासिक अंतराल',
        subtitle: 'अज्ञात पीढ़ियाँ',
        parent: 'devaraj_bhonsle',
        yug: 'kali',
        parichay: 'देवराज के बाद उग्रसेन, कर्ण, शुभकृष्ण, रूपसिंह, भूमिन्द्र, धापजी, खेलोजी, कर्णसिंह, सम्भाजी आदि कई पीढ़ियों का अंतराल।',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'babaji_bhonsle',
        name: 'बाबाजी भोंसले',
        subtitle: 'वेरुल के पाटिल',
        parent: 'bhonsle_medieval_link',
        yug: 'kali',
        kali_year: 4690,
        parichay: 'ये औरंगाबाद के पास वेरुल (एलोरा) गाँव के पाटिल थे।',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'vithoji_bhonsle',
        name: 'विठोजी भोंसले',
        gender: 'male',
        subtitle: 'बाबाजी के द्वितीय पुत्र',
        parent: 'babaji_bhonsle',
        yug: 'kali',
        kali_year: 4656,
        parichay: 'जन्म: 1554 ई.। बाबाजी भोंसले के छोटे बेटे। इन्होने अपने भाई मालोजी के साथ मिलकर काम किया। इनके आठ पुत्र थे।',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'avubai_vithoji',
        name: 'आऊबाई',
        gender: 'female',
        subtitle: 'विठोजी की पत्नी',
        parent: '',
        spouseOf: 'vithoji_bhonsle',
        yug: 'kali',
        kali_year: 4658,
        parichay: 'जन्म: 1556 ई. (अनुमानित)।',
        clusterName: 'मराठा (भोंसले) वंश'
    },

    // Family of Vithoji Bhosale (8 Sons)
    {
        id: 'kheloji_bhonsle',
        name: 'खेलोजी भोंसले',
        gender: 'male',
        subtitle: 'विठोजी के पुत्र',
        parent: 'vithoji_bhonsle',
        mother: 'avubai_vithoji',
        yug: 'kali',
        kali_year: 4676,
        parichay: 'जन्म: 1574 ई. (अनुमानित)। विठोजी के ज्येष्ठ पुत्र।',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'parsoji_bhonsle',
        name: 'परसोजी भोंसले',
        gender: 'male',
        subtitle: 'विठोजी के पुत्र',
        parent: 'vithoji_bhonsle',
        mother: 'avubai_vithoji',
        yug: 'kali',
        kali_year: 4678,
        parichay: 'जन्म: 1576 ई. (अनुमानित)। विठोजी के पुत्र।',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'maloji_ii_bhonsle',
        name: 'मालोजी द्वितीय',
        gender: 'male',
        subtitle: 'विठोजी के पुत्र',
        parent: 'vithoji_bhonsle',
        mother: 'avubai_vithoji',
        yug: 'kali',
        kali_year: 4680,
        parichay: 'जन्म: 1578 ई. (अनुमानित)। विठोजी के पुत्र।',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'mambaji_bhonsle',
        name: 'मंबाजी भोंसले',
        gender: 'male',
        subtitle: 'विठोजी के पुत्र',
        parent: 'vithoji_bhonsle',
        mother: 'avubai_vithoji',
        yug: 'kali',
        kali_year: 4682,
        parichay: 'जन्म: 1580 ई. (अनुमानित)। विठोजी के पुत्र।',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'sambhaji_vithoji_bhonsle',
        name: 'सम्भाजी भोंसले (विठोजी पुत्र)',
        gender: 'male',
        subtitle: 'विठोजी के पुत्र',
        parent: 'vithoji_bhonsle',
        mother: 'avubai_vithoji',
        yug: 'kali',
        kali_year: 4684,
        parichay: 'जन्म: 1582 ई. (अनुमानित) | लखूजी जाधव के साथ हुए एक संघर्ष में इनकी मृत्यु हो गई थी।',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'nagoji_bhonsle',
        name: 'नागोजी भोंसले',
        gender: 'male',
        subtitle: 'विठोजी के पुत्र',
        parent: 'vithoji_bhonsle',
        mother: 'avubai_vithoji',
        yug: 'kali',
        kali_year: 4686,
        parichay: 'जन्म: 1584 ई. (अनुमानित)। विठोजी के पुत्र।',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'trimbakji_vithoji_bhonsle',
        name: 'त्र्यंबकजी भोंसले',
        gender: 'male',
        subtitle: 'विठोजी के पुत्र',
        parent: 'vithoji_bhonsle',
        mother: 'avubai_vithoji',
        yug: 'kali',
        kali_year: 4688,
        parichay: 'जन्म: 1586 ई. (अनुमानित)। विठोजी के पुत्र।',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'kavkaji_bhonsle',
        name: 'कावकाजी (काकाजी) भोंसले',
        gender: 'male',
        subtitle: 'विठोजी के पुत्र',
        parent: 'vithoji_bhonsle',
        mother: 'avubai_vithoji',
        yug: 'kali',
        kali_year: 4690,
        parichay: 'जन्म: 1588 ई. (अनुमानित)। विठोजी के पुत्र।',
        clusterName: 'मराठा (भोंसले) वंश'
    },

    {
        id: 'maloji_bhonsle',
        name: 'मालोजी राजे भोंसले',
        subtitle: 'शिवाजी के दादा',
        parent: 'babaji_bhonsle',
        yug: 'kali',
        kali_year: 4695,
        parichay: 'इन्होंने अहमदनगर के निज़ामशाही सुल्तानों के यहाँ एक महान सेनापति के रूप में कार्य किया और "राजे" की उपाधि प्राप्त की।',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'sharifji_bhonsle',
        name: 'शरीफजी भोंसले',
        gender: 'male',
        subtitle: 'मालोजी के पुत्र',
        parent: 'maloji_bhonsle',
        yug: 'kali',
        kali_year: 4698,
        parichay: 'जन्म: 1596 ई. (अनुमानित) | मृत्यु: 1624 ई.। शाहजी के छोटे भाई। भातवड़ी के युद्ध (1624 ई.) में वीरगति प्राप्त की।',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'durgabai_sharifji',
        name: 'दुर्गाबाई',
        gender: 'female',
        subtitle: 'शरीफजी की पत्नी',
        parent: '',
        spouseOf: 'sharifji_bhonsle',
        yug: 'kali',
        kali_year: 4700,
        parichay: 'जन्म: 1598 ई. (अनुमानित)। जुन्नर के विश्वासराव की पुत्री।',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'trimbakji_sharifji_bhonsle',
        name: 'त्र्यंबकजी (खानोट शाखा)',
        gender: 'male',
        subtitle: 'शरीफजी के पुत्र',
        parent: 'sharifji_bhonsle',
        mother: 'durgabai_sharifji',
        yug: 'kali',
        kali_year: 4716,
        parichay: 'जन्म: 1614 ई. (अनुमानित)। शरीफजी के वीरगति प्राप्त होने के बाद इन्होने खानोट (Khanot) शाखा को आगे बढ़ाया।',
        clusterName: 'मराठा (भोंसले) वंश'
    },

    {
        id: 'shahaji_bhonsle',
        name: 'शाहजी राजे भोंसले',
        subtitle: 'शिवाजी के पिता',
        parent: 'maloji_bhonsle',
        yug: 'kali',
        kali_year: 4710,
        parichay: 'एक प्रमुख मराठा सेनापति जिन्होंने अहमदनगर, बीजापुर और मुगलों की राजनीति में अहम भूमिका निभाई।',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'chhatrapati_shivaji_maharaj',
        name: 'छत्रपति शिवाजी महाराज',
        subtitle: 'मराठा साम्राज्य के संस्थापक',
        parent: 'shahaji_bhonsle',
        mother: 'jijabai_jadhav',
        yug: 'kali',
        kali_year: 4732,
        isProminent: true,
        parichay: 'भारत के महानतम योद्धाओं में से एक। इन्होंने आदिलशाही और मुगल साम्राज्य से संघर्ष कर 1674 ई. में एक स्वतंत्र "हिन्दवी स्वराज्य" (मराठा साम्राज्य) की स्थापना की।',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'chhatrapati_sambhaji',
        name: 'छत्रपति सम्भाजी महाराज',
        subtitle: 'शिवाजी के ज्येष्ठ पुत्र',
        parent: 'chhatrapati_shivaji_maharaj',
        yug: 'kali',
        kali_year: 4759,
        isProminent: true,
        parichay: 'इन्होंने अपने छोटे से शासनकाल में मुगलों से लगातार युद्ध किया और धर्म व स्वराज्य के लिए हंसते-हंसते अपना बलिदान दे दिया।',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'chhatrapati_rajaram',
        name: 'छत्रपति राजाराम महाराज',
        subtitle: 'शिवाजी के कनिष्ठ पुत्र',
        parent: 'chhatrapati_shivaji_maharaj',
        yug: 'kali',
        kali_year: 4772,
        parichay: 'सम्भाजी महाराज के बाद मराठा साम्राज्य का नेतृत्व किया और जिंजी के किले से मुगलों के खिलाफ स्वतंत्रता संग्राम जारी रखा।',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'tarabai_bhosale',
        name: 'महारानी ताराबाई',
        subtitle: 'राजाराम की पत्नी',
        parent: '',
        spouseOf: 'chhatrapati_rajaram',
        yug: 'kali',
        parichay: 'छत्रपति राजाराम की मृत्यु के बाद इन्होंने मुगलों के खिलाफ मराठा स्वतंत्रता संग्राम का अत्यंत साहसपूर्ण नेतृत्व किया।',
        clusterName: 'मराठा (भोंसले) वंश'
    },


    // ----------------------------------------------------
    // Chhatrapati Shivaji Maharaj's Family & Wives
    // ----------------------------------------------------
    {
        id: 'saibai_bhosale',
        name: 'महारानी सईबाई',
        subtitle: 'शिवाजी की प्रथम पत्नी',
        gender: 'female',
        parent: '',
        spouseOf: 'chhatrapati_shivaji_maharaj',
        yug: 'kali',
        kali_year: 4735,
        parichay: 'शिवाजी महाराज की पहली पत्नी और छत्रपति सम्भाजी महाराज की माता। निंबालकर परिवार से थीं। (जन्म: 1633 ई.)',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'soyarabai_bhosale',
        name: 'महारानी सोयराबाई',
        subtitle: 'शिवाजी की पत्नी',
        gender: 'female',
        parent: '',
        spouseOf: 'chhatrapati_shivaji_maharaj',
        yug: 'kali',
        kali_year: 4742,
        parichay: 'मोहिते परिवार से थीं। छत्रपति राजाराम की माता। (जन्म: 1640 ई.)',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'putalabai_bhosale',
        name: 'महारानी पुतळाबाई',
        subtitle: 'शिवाजी की पत्नी',
        gender: 'female',
        parent: '',
        spouseOf: 'chhatrapati_shivaji_maharaj',
        yug: 'kali',
        kali_year: 4744,
        parichay: 'पालकर परिवार से थीं। शिवाजी महाराज के निधन के बाद इन्होंने सती प्रथा का पालन किया।',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'sakhubai_nimbalkar',
        name: 'सखूबाई निंबालकर',
        subtitle: 'शिवाजी की पुत्री',
        gender: 'female',
        parent: 'chhatrapati_shivaji_maharaj',
        mother: 'saibai_bhosale',
        yug: 'kali',
        kali_year: 4753,
        parichay: 'शिवाजी महाराज और सईबाई की ज्येष्ठ पुत्री। (जन्म: 1651 ई.)',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'ranubai_jadhav',
        name: 'राणूबाई जाधव',
        subtitle: 'शिवाजी की पुत्री',
        gender: 'female',
        parent: 'chhatrapati_shivaji_maharaj',
        mother: 'saibai_bhosale',
        yug: 'kali',
        kali_year: 4755,
        parichay: 'शिवाजी महाराज और सईबाई की पुत्री। (जन्म: 1653 ई.)',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'ambikabai_mahadik',
        name: 'अंबिकाबाई महाडिक',
        subtitle: 'शिवाजी की पुत्री',
        gender: 'female',
        parent: 'chhatrapati_shivaji_maharaj',
        mother: 'saibai_bhosale',
        yug: 'kali',
        kali_year: 4757,
        parichay: 'शिवाजी महाराज और सईबाई की पुत्री। (जन्म: 1655 ई.)',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'balibai_palkar',
        name: 'बाळीबाई पालकर',
        subtitle: 'शिवाजी की पुत्री',
        gender: 'female',
        parent: 'chhatrapati_shivaji_maharaj',
        mother: 'soyarabai_bhosale',
        yug: 'kali',
        kali_year: 4761,
        parichay: 'शिवाजी महाराज और सोयराबाई की पुत्री। (जन्म: 1659 ई.)',
        clusterName: 'मराठा (भोंसले) वंश'
    },

    // ----------------------------------------------------
    // Satara Branch (Sambhaji -> Shahu I)
    // ----------------------------------------------------
    {
        id: 'yesubai_bhosale',
        name: 'महारानी येसूबाई',
        subtitle: 'सम्भाजी की पत्नी',
        gender: 'female',
        parent: '',
        spouseOf: 'chhatrapati_sambhaji',
        yug: 'kali',
        kali_year: 4761,
        parichay: 'शिर्के परिवार से थीं। इन्होंने मुगलों की लंबी कैद सही और अपने पुत्र शाहू को सुरक्षित रखा। (जन्म: 1659 ई.)',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'bhavanibai_sambhaji',
        name: 'भवानीबाई',
        subtitle: 'सम्भाजी की पुत्री',
        gender: 'female',
        parent: 'chhatrapati_sambhaji',
        mother: 'yesubai_bhosale',
        yug: 'kali',
        kali_year: 4780,
        parichay: 'छत्रपति सम्भाजी महाराज और महारानी येसूबाई की पुत्री। (जन्म: 1678 ई.)',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'chhatrapati_shahu',
        name: 'छत्रपति शाहू महाराज (प्रथम)',
        subtitle: 'सतारा के छत्रपति',
        gender: 'male',
        parent: 'chhatrapati_sambhaji',
        mother: 'yesubai_bhosale',
        yug: 'kali',
        kali_year: 4784,
        isProminent: true,
        parichay: 'मुगलों की कैद से छूटने के बाद इन्होंने मराठा साम्राज्य का विस्तार किया और पेशवाओं (विशेषकर बाजीराव प्रथम) को नियुक्त किया। (जन्म: 1682 ई.)',
        clusterName: 'सतारा मराठा वंश'
    },
    {
        id: 'rajaram_ii_satara',
        name: 'छत्रपति राजाराम (द्वितीय) / रामराजा',
        subtitle: 'सतारा के छत्रपति',
        gender: 'male',
        parent: 'chhatrapati_shahu',
        yug: 'kali',
        kali_year: 4814,
        parichay: 'शिवाजी द्वितीय के पुत्र, जिन्हें शाहू महाराज ने गोद लिया था। (जन्म: 1712 ई.)',
        clusterName: 'सतारा मराठा वंश'
    },
    {
        id: 'shahu_ii_satara',
        name: 'छत्रपति शाहू (द्वितीय)',
        subtitle: 'सतारा के छत्रपति',
        gender: 'male',
        parent: 'rajaram_ii_satara',
        yug: 'kali',
        kali_year: 4865,
        parichay: 'इन्हें राजाराम द्वितीय ने गोद लिया था। (जन्म: 1763 ई.)',
        clusterName: 'सतारा मराठा वंश'
    },
    {
        id: 'pratapsinh_satara',
        name: 'छत्रपति प्रतापसिंह',
        subtitle: 'सतारा के छत्रपति',
        gender: 'male',
        parent: 'shahu_ii_satara',
        yug: 'kali',
        kali_year: 4895,
        parichay: 'इन्होंने 1808 से 1839 तक शासन किया। बाद में अंग्रेजों ने इन्हें हटा दिया। (जन्म: 1793 ई.)',
        clusterName: 'सतारा मराठा वंश'
    },
    {
        id: 'shahaji_appa_sahib',
        name: 'छत्रपति शाहजी (अप्पा साहिब)',
        subtitle: 'सतारा के अंतिम छत्रपति',
        gender: 'male',
        parent: 'shahu_ii_satara',
        yug: 'kali',
        kali_year: 4904,
        parichay: 'अंग्रेजों ने प्रतापसिंह को हटाकर इन्हें गद्दी पर बैठाया। 1848 में अंग्रेजों ने सतारा राज्य को हड़प लिया (Doctrine of Lapse)। (जन्म: 1802 ई.)',
        clusterName: 'सतारा मराठा वंश'
    },

    // ----------------------------------------------------
    // Kolhapur Branch (Rajaram -> Shivaji II / Sambhaji II)
    // ----------------------------------------------------

    {
        id: 'rajasbai_bhosale',
        name: 'महारानी राजसबाई',
        subtitle: 'राजाराम की पत्नी',
        gender: 'female',
        parent: '',
        spouseOf: 'chhatrapati_rajaram',
        yug: 'kali',
        kali_year: 4774,
        parichay: 'छत्रपति राजाराम की दूसरी पत्नी और छत्रपति सम्भाजी (द्वितीय) की माता। घाटगे परिवार से थीं।',
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'shivaji_ii',
        name: 'शिवाजी (द्वितीय)',
        subtitle: 'राजाराम व ताराबाई के पुत्र',
        gender: 'male',
        parent: 'chhatrapati_rajaram',
        mother: 'tarabai_bhosale',
        yug: 'kali',
        kali_year: 4798,
        clusterName: 'मराठा (भोंसले) वंश'
    },
    {
        id: 'sambhaji_ii_kolhapur',
        name: 'छत्रपति सम्भाजी (द्वितीय)',
        subtitle: 'कोल्हापुर के छत्रपति',
        gender: 'male',
        parent: 'chhatrapati_rajaram',
        mother: 'rajasbai_bhosale',
        yug: 'kali',
        kali_year: 4800,
        parichay: 'इन्होंने ताराबाई को हटाकर कोल्हापुर पर अधिकार किया। (जन्म: 1698 ई.)',
        clusterName: 'कोल्हापुर मराठा वंश'
    },
    {
        id: 'shivaji_iii_kolhapur',
        name: 'छत्रपति शिवाजी (तृतीय)',
        subtitle: 'कोल्हापुर के छत्रपति',
        gender: 'male',
        parent: 'sambhaji_ii_kolhapur',
        yug: 'kali',
        kali_year: 4858,
        parichay: 'इन्हें सम्भाजी द्वितीय की पत्नी जीजाबाई ने गोद लिया था। (जन्म: 1756 ई.)',
        clusterName: 'कोल्हापुर मराठा वंश'
    },
    {
        id: 'shahu_kolhapur_maharaj',
        name: 'छत्रपति शाहू जी महाराज (कोल्हापुर)',
        subtitle: 'समाजिक सुधारक और कोल्हापुर नरेश',
        gender: 'male',
        parent: 'kolhapur_dynasty_proxy',
        yug: 'kali',
        kali_year: 4976,
        isProminent: true,
        parichay: 'भारत में पहली बार आरक्षण (Reservation) लागू करने वाले महान समाज सुधारक और कोल्हापुर के छत्रपति। डॉ बी.आर. अम्बेडकर को इन्होने ही सहायता दी थी। (जन्म: 1874 ई.)',
        clusterName: 'कोल्हापुर मराठा वंश'
    },
    {
        id: 'kolhapur_dynasty_proxy',
        name: 'कोल्हापुर वंश',
        subtitle: 'अज्ञात पीढ़ियाँ',
        parent: 'shivaji_iii_kolhapur',
        yug: 'kali',
        kali_year: 4900,
        isProxy: true,
        clusterName: 'कोल्हापुर मराठा वंश'
    },

    // ----------------------------------------------------
    // Tanjore Branch (Venkoji / Ekoji)
    // ----------------------------------------------------
    {
        id: 'tanjore_dynasty_proxy',
        name: 'तंजावुर मराठा वंश',
        subtitle: 'शाहजी के वंशज',
        parent: 'shahaji_bhonsle',
        yug: 'kali',
        kali_year: 4725,
        isProxy: true,
        clusterName: 'तंजावुर मराठा वंश'
    },
    {
        id: 'venkoji_bhonsle',
        name: 'व्यंकोजी (एकोजी प्रथम)',
        subtitle: 'तंजावुर मराठा साम्राज्य के संस्थापक',
        gender: 'male',
        parent: 'tanjore_dynasty_proxy',
        yug: 'kali',
        kali_year: 4734,
        parichay: 'शाहजी और तुकाबाई (मोहिते) के पुत्र और शिवाजी महाराज के सौतेले भाई। इन्होंने दक्षिण भारत में तंजावुर (Tanjore) मराठा साम्राज्य की स्थापना की। (जन्म: 1632 ई.)',
        clusterName: 'तंजावुर मराठा वंश'
    },
    {
        id: 'shahaji_ii_tanjore',
        name: 'शाहजी (द्वितीय)',
        subtitle: 'तंजावुर नरेश',
        gender: 'male',
        parent: 'venkoji_bhonsle',
        yug: 'kali',
        kali_year: 4774,
        parichay: 'व्यंकोजी के ज्येष्ठ पुत्र। (जन्म: 1672 ई.)',
        clusterName: 'तंजावुर मराठा वंश'
    },
    {
        id: 'serfoji_i_tanjore',
        name: 'सरफोजी (प्रथम)',
        subtitle: 'तंजावुर नरेश',
        gender: 'male',
        parent: 'venkoji_bhonsle',
        yug: 'kali',
        kali_year: 4777,
        parichay: 'व्यंकोजी के द्वितीय पुत्र। (जन्म: 1675 ई.)',
        clusterName: 'तंजावुर मराठा वंश'
    },
    {
        id: 'tukkoji_tanjore',
        name: 'तुक्कोजी (तुलजाजी प्रथम)',
        subtitle: 'तंजावुर नरेश',
        gender: 'male',
        parent: 'venkoji_bhonsle',
        yug: 'kali',
        kali_year: 4779,
        parichay: 'व्यंकोजी के तृतीय पुत्र। (जन्म: 1677 ई.)',
        clusterName: 'तंजावुर मराठा वंश'
    },
    {
        id: 'pratapsingh_tanjore',
        name: 'प्रताप सिंह',
        subtitle: 'तंजावुर नरेश',
        gender: 'male',
        parent: 'tukkoji_tanjore',
        yug: 'kali',
        kali_year: 4802,
        parichay: 'इन्होंने तंजावुर में लम्बे समय तक सफलतापूर्वक शासन किया। (जन्म: 1700 ई.)',
        clusterName: 'तंजावुर मराठा वंश'
    },
    {
        id: 'serfoji_ii_tanjore',
        name: 'सरफोजी (द्वितीय)',
        subtitle: 'महान विद्वान और तंजावुर नरेश',
        gender: 'male',
        parent: 'tanjore_dynasty_proxy',
        yug: 'kali',
        kali_year: 4879,
        parichay: 'इन्हें तंजावुर में शिक्षा और साहित्य के महान संरक्षक के रूप में जाना जाता है (Saraswathi Mahal Library)। (जन्म: 1777 ई.)',
        clusterName: 'तंजावुर मराठा वंश'
    },
    {
        id: 'shivaji_ii_tanjore',
        name: 'शिवाजी (द्वितीय - तंजावुर)',
        subtitle: 'तंजावुर के अंतिम नरेश',
        gender: 'male',
        parent: 'serfoji_ii_tanjore',
        yug: 'kali',
        kali_year: 4934,
        parichay: 'इनके निधन के बाद 1855 में अंग्रेजों ने "Doctrine of Lapse" के तहत तंजावुर राज्य को हड़प लिया। (जन्म: 1832 ई.)',
        clusterName: 'तंजावुर मराठा वंश'
    },
    {
        id: 'rana_lakha',
        name: 'राणा लाखा',
        subtitle: 'मेवाड़ नरेश',
        parent: 'rana_hammir_sisodia',
        yug: 'kali',
        kali_year: 4484,
        parichay: 'इन्हीं के समय में पिछोला झील का निर्माण हुआ और जावर में चांदी की खदानें मिली थीं।'
    },

    // Chundawat Branch
    {
        id: 'chundawat_dynasty_proxy',
        name: 'चूंडावत वंश',
        subtitle: 'राव चूंडा के वंशज',
        parent: 'rana_lakha',
        yug: 'kali',
        parichay: 'मेवाड़ के प्रथम श्रेणी के सामंत (राव चूंडा के वंशज)।',
        isProxy: true,
        clusterName: 'चूंडावत वंश'
    },
    {
        id: 'rao_chunda',
        name: 'राव चूंडा',
        subtitle: 'मेवाड़ के भीष्म पितामह',
        parent: 'chundawat_dynasty_proxy',
        yug: 'kali',
        parichay: 'इन्होंने अपने पिता के लिए मेवाड़ के सिंहासन का त्याग किया था। इनके वंशज "चूंडावत" (Chundawat) कहलाते हैं, जो मेवाड़ के प्रथम श्रेणी के सामंत थे।',
        clusterName: 'चूंडावत वंश'
    },

    {
        id: 'rana_mokal_mewar',
        name: 'राणा मोकल',
        subtitle: 'मेवाड़ नरेश',
        parent: 'rana_lakha',
        yug: 'kali',
        kali_year: 4523,
    },
    {
        id: 'rana_kumbha',
        name: 'राणा कुम्भा',
        subtitle: 'महान निर्माता और योद्धा',
        parent: 'rana_mokal_mewar',
        yug: 'kali',
        kali_year: 4535,
        parichay: 'ये स्थापत्य कला के महान संरक्षक थे। इन्होने मेवाड़ में 32 किलों (जैसे कुम्भलगढ़) का निर्माण करवाया और मालवा-गुजरात की संयुक्त सेनाओं को हराया।'
    },
    {
        id: 'rana_raimal',
        name: 'राणा रायमल',
        subtitle: 'मेवाड़ नरेश',
        parent: 'rana_kumbha',
        yug: 'kali',
        kali_year: 4575,
    },
    {
        id: 'rana_sanga',
        name: 'राणा सांगा (संग्राम सिंह)',
        subtitle: 'हिन्दूपत',
        parent: 'rana_raimal',
        yug: 'kali',
        kali_year: 4611,
        parichay: 'ये एक महान शूरवीर थे जिनके शरीर पर 80 घाव थे। इन्होने खातोली और बाड़ी के युद्धों में इब्राहिम लोदी को हराया और खानवा के युद्ध (1527) में बाबर का सामना किया।'
    },
    {
        id: 'rana_udai_singh_ii',
        name: 'राणा उदय सिंह (द्वितीय)',
        subtitle: 'उदयपुर के संस्थापक',
        parent: 'rana_sanga',
        yug: 'kali',
        kali_year: 4639,
        parichay: 'इन्होंने 1559 ई. में उदयपुर शहर की स्थापना की थी।'
    },

    // Shaktawat Branch
    {
        id: 'shaktawat_dynasty_proxy',
        name: 'शक्तावत वंश',
        subtitle: 'शक्ति सिंह के वंशज',
        parent: 'rana_udai_singh_ii',
        yug: 'kali',
        clusterName: 'शक्तावत वंश',
        isProxy: true
    },
    {
        id: 'shakti_singh',
        name: 'शक्ति सिंह',
        subtitle: 'शक्तावत वंश के संस्थापक',
        parent: 'shaktawat_dynasty_proxy',
        clusterName: 'शक्तावत वंश',
        yug: 'kali',
        parichay: 'महाराणा प्रताप के भाई। इनके वंशज \"शक्तावत\" (Shaktawat) कहलाए।'
    },
    {
        id: 'shaktawat_dynasty',
        name: 'शक्तावत वंश',
        subtitle: 'सिसोदिया शाखा',
        parent: 'shakti_singh',
        yug: 'kali',
        clusterName: 'शक्तावत वंश'
    },

    {
        id: 'maharana_pratap',
        name: 'महाराणा प्रताप',
        subtitle: 'मेवाड़ के वीर शिरोमणि',
        parent: 'rana_udai_singh_ii',
        yug: 'kali',
        kali_year: 4674,
        parichay: 'ये भारतीय इतिहास के सबसे महान योद्धाओं में से एक हैं। इन्होंने मुग़ल सम्राट अकबर की अधीनता कभी स्वीकार नहीं की और हल्दीघाटी के युद्ध (1576) में अदम्य साहस का परिचय दिया।',
        clusterName: 'गुहिल (सिसोदिया) वंश'
    },
    {
        id: 'amar_singh_mewar',
        name: 'महाराणा अमर सिंह प्रथम',
        subtitle: 'मेवाड़ नरेश',
        parent: 'maharana_pratap',
        yug: 'kali',
        kali_year: 4700,
        parichay: 'इन्होंने अपने पिता महाराणा प्रताप के संघर्ष को जारी रखा और मुगलों के साथ कई युद्ध लड़े। इनके बाद के शासकों के वंशज \"राणावत\" (Ranawat) भी कहलाये।',
        clusterName: 'गुहिल (सिसोदिया) वंश'
    },
    {
        id: 'raj_singh_mewar',
        name: 'महाराणा राज सिंह प्रथम',
        subtitle: 'मेवाड़ नरेश',
        parent: 'amar_singh_mewar',
        yug: 'kali',
        parichay: 'इन्होंने औरंगजेब की नीतियों का कड़ा विरोध किया और राजसमंद झील का निर्माण करवाया।',
        clusterName: 'गुहिल (सिसोदिया) वंश'
    },
    {
        id: 'arvind_singh_mewar',
        name: 'अरविन्द सिंह मेवाड़',
        subtitle: 'वर्तमान मुखिया',
        parent: 'raj_singh_mewar',
        yug: 'kali',
        parichay: 'ये मेवाड़ राजघराने के वर्तमान प्रतिनिधि और एच.आर.एच. ग्रुप के अध्यक्ष हैं।',
        clusterName: 'गुहिल (सिसोदिया) वंश'
    },
];
