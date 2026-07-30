export const chandravanshData = [
    // --- अत्रि और उनकी पत्नी ---
    { id: 'anasuya', name: 'अनुसूया', subtitle: 'अत्रि पत्नी', parent: 'kardam_prajapati', spouseOf: 'atri', yug: 'satya', clusterName: 'अत्रि की पत्नियाँ' },

    // --- अत्रि के पुत्र ---
    { id: 'dattatreya', name: 'दत्तात्रेय', subtitle: 'विष्णु अंश', parent: 'atri', mother: 'anasuya', yug: 'satya' },
    { id: 'durvasa', name: 'दुर्वासा', subtitle: 'शिव अंश', parent: 'atri', mother: 'anasuya', yug: 'satya' },
    { id: 'chandra', name: 'चंद्र', subtitle: 'चंद्र देव (चंद्रवंश के मूल)', parent: 'atri', mother: 'anasuya', yug: 'satya' },

    // --- चंद्र देव की पत्नियां ---
    { id: 'tara', name: 'तारा', subtitle: 'चंद्र पत्नी (बृहस्पति की पूर्व पत्नी)', parent: '', spouseOf: 'chandra', yug: 'satya' },
    // (दक्ष की 27 पुत्रियां भी चंद्र की पत्नियां हैं, उन्हें आवश्यकता अनुसार बाद में जोड़ा जा सकता है)

    // --- चंद्र देव के पुत्र ---
    { id: 'budh', name: 'बुध', subtitle: 'चंद्र व तारा के पुत्र', parent: 'chandra', mother: 'tara', yug: 'satya' },

    // --- बुध की पत्नी ---
    { id: 'ila', name: 'इला', subtitle: 'बुध की पत्नी', parent: 'vaivasvat_manu', spouseOf: 'budh', yug: 'satya' },

    // --- पुरुरवा ---
    { id: 'pururava', name: 'पुरुरवा', subtitle: 'चंद्रवंश के प्रथम राजा', parent: 'budh', mother: 'ila', yug: 'satya' },
    { id: 'urvashi', name: 'उर्वशी', subtitle: 'पुरुरवा की पत्नी (अप्सरा)', parent: '', spouseOf: 'pururava', yug: 'satya' },

    // --- पुरुरवा के पुत्र (आयु, श्रुतायु, सत्यायु, रय, विजय, जय) ---
    { id: 'ayu', name: 'आयु', subtitle: 'पुरुरवा के ज्येष्ठ पुत्र', parent: 'pururava', mother: 'urvashi', yug: 'satya' },
    { id: 'shrutayu', name: 'श्रुतायु', subtitle: 'पुरुरवा के पुत्र', parent: 'pururava', mother: 'urvashi', yug: 'satya' },
    { id: 'satyayu', name: 'सत्यायु', subtitle: 'पुरुरवा के पुत्र', parent: 'pururava', mother: 'urvashi', yug: 'satya' },
    { id: 'raya', name: 'रय', subtitle: 'पुरुरवा के पुत्र', parent: 'pururava', mother: 'urvashi', yug: 'satya' },
    { id: 'vijaya', name: 'विजय', subtitle: 'पुरुरवा के पुत्र', parent: 'pururava', mother: 'urvashi', yug: 'satya' },
    { id: 'jaya', name: 'जय', subtitle: 'पुरुरवा के पुत्र', parent: 'pururava', mother: 'urvashi', yug: 'satya' },

    // --- आयु की पत्नी ---
    { id: 'prabha', name: 'प्रभा', subtitle: 'आयु की पत्नी', parent: '', spouseOf: 'ayu', yug: 'satya' },

    // --- आयु के पुत्र (नहुष, क्षत्रवृद्ध, रम्भ, रजि, अनेना) ---
    { id: 'nahusha', name: 'नहुष', subtitle: 'आयु के पुत्र', parent: 'ayu', mother: 'prabha', yug: 'satya' },
    { id: 'kshatravriddha', name: 'क्षत्रवृद्ध', subtitle: 'आयु के पुत्र', parent: 'ayu', mother: 'prabha', yug: 'satya' },
    { id: 'sunahotra_kashi', name: 'सुनहोत्र', subtitle: 'क्षत्रवृद्ध पुत्र', parent: 'kshatravriddha', yug: 'satya' },
    { id: 'kashya', name: 'काश्य', subtitle: 'काशी के संस्थापक', parent: 'sunahotra_kashi', yug: 'satya' },
    { id: 'rashtra', name: 'राष्ट्र', subtitle: 'काश्य पुत्र', parent: 'kashya', yug: 'satya' },
    { id: 'dirghatapa', name: 'दीर्घतपा', subtitle: 'राष्ट्र पुत्र', parent: 'rashtra', yug: 'satya' },
    { id: 'dhanvantari', name: 'धन्वंतरि', subtitle: 'आयुर्वेद प्रवर्तक / विष्णु अंशावतार', parent: 'dirghatapa', yug: 'satya', parichay: 'समुद्र मंथन से अमृत कलश लेकर प्रकट हुए थे। काशी राजवंश में इनका जन्म हुआ था और ये महान वैद्य माने जाते हैं।' },
    { id: 'ketuman', name: 'केतुमान', subtitle: 'धन्वंतरि पुत्र', parent: 'dhanvantari', yug: 'satya' },
    { id: 'bhimaratha', name: 'भीमरथ', subtitle: 'केतुमान पुत्र', parent: 'ketuman', yug: 'treta' },
    { id: 'divodasa', name: 'दिवोदास', subtitle: 'काशी नरेश', parent: 'bhimaratha', yug: 'treta', parichay: 'काशी के महान राजा, जिन्होंने क्षेमक राक्षस से काशी को मुक्त कराया था।' },
    { id: 'pratardana', name: 'प्रतर्दन', subtitle: 'दिवोदास पुत्र', parent: 'divodasa', yug: 'treta' },
    { id: 'vatsa_kashi', name: 'वत्स', subtitle: 'प्रतर्दन पुत्र', parent: 'pratardana', yug: 'treta' },
    { id: 'alarka', name: 'अलर्क', subtitle: 'काशी नरेश', parent: 'vatsa_kashi', yug: 'treta', parichay: 'महान तपस्वी राजा जिसने 66,000 वर्ष तक राज किया और फिर दत्तात्रेय से ज्ञान प्राप्त कर मोक्ष पाया।' },

    { id: 'rambha_ayu', name: 'रम्भ', subtitle: 'आयु के पुत्र', parent: 'ayu', mother: 'prabha', yug: 'satya' },
    { id: 'raji', name: 'रजि', subtitle: 'आयु के पुत्र', parent: 'ayu', mother: 'prabha', yug: 'satya' },
    { id: 'rajeya', name: 'रजेय (500 पुत्र)', subtitle: 'रजि के पुत्र', parent: 'raji', yug: 'satya', parichay: 'राजा रजि के 500 बलवान पुत्र। इन्होंने इंद्र से स्वर्ग छीन लिया था, जिसे बाद में बृहस्पति के छल से नष्ट किया गया।' },
    { id: 'anena', name: 'अनेना', subtitle: 'आयु के पुत्र', parent: 'ayu', mother: 'prabha', yug: 'satya' },

    // --- नहुष की पत्नी ---
    { id: 'ashokasundari', name: 'अशोकसुंदरी', subtitle: 'नहुष की पत्नी (शिव-पार्वती पुत्री)', parent: 'shiva', spouseOf: 'nahusha', yug: 'satya' },

    // --- नहुष के पुत्र (यति, ययाति, संयाति, अयाति, वियति, कृति) ---
    { id: 'yati', name: 'यति', subtitle: 'नहुष के पुत्र (संन्यासी)', parent: 'nahusha', mother: 'ashokasundari', yug: 'satya' },
    { id: 'yayati', name: 'ययाति', subtitle: 'महान सम्राट', parent: 'nahusha', mother: 'ashokasundari', yug: 'satya' },
    { id: 'sanyati', name: 'संयाति', subtitle: 'नहुष के पुत्र', parent: 'nahusha', mother: 'ashokasundari', yug: 'satya' },
    { id: 'ayati', name: 'अयाति', subtitle: 'नहुष के पुत्र', parent: 'nahusha', mother: 'ashokasundari', yug: 'satya' },
    { id: 'viyati', name: 'वियति', subtitle: 'नहुष के पुत्र', parent: 'nahusha', mother: 'ashokasundari', yug: 'satya' },
    { id: 'kriti', name: 'कृति', subtitle: 'नहुष के पुत्र', parent: 'nahusha', mother: 'ashokasundari', yug: 'satya' },

    // --- ययाति की पत्नियां ---
    { id: 'devayani', name: 'देवयानी', subtitle: 'ययाति की पत्नी (शुक्राचार्य की पुत्री)', parent: 'shukracharya', spouseOf: 'yayati', yug: 'satya' },
    { id: 'sharmishtha', name: 'शर्मिष्ठा', subtitle: 'ययाति की पत्नी (वृषपर्वा की पुत्री)', parent: '', spouseOf: 'yayati', yug: 'satya' },

    // --- ययाति के पुत्र ---
    { id: 'yadu', name: 'यदु', subtitle: 'यदुवंश के संस्थापक', parent: 'yayati', mother: 'devayani', yug: 'treta' },
    { id: 'turvasu', name: 'तुर्वसु', subtitle: 'ययाति के पुत्र', parent: 'yayati', mother: 'devayani', yug: 'treta' },
    { id: 'druhyu', name: 'द्रुह्यु', subtitle: 'ययाति के पुत्र', parent: 'yayati', mother: 'sharmishtha', yug: 'treta' },
    { id: 'anu_yayati', name: 'अनु', subtitle: 'ययाति के पुत्र', parent: 'yayati', mother: 'sharmishtha', yug: 'treta' },
    { id: 'puru', name: 'पुरु', subtitle: 'पौरव/कुरुवंश के संस्थापक', parent: 'yayati', mother: 'sharmishtha', yug: 'treta' },

    // --- पुरुरवा के अन्य पुत्र (अमावसु / विजय वंश - कान्यकुब्ज/कन्नौज) ---
    { id: 'amavasu', name: 'अमावसु (विजय)', subtitle: 'कान्यकुब्ज के संस्थापक', parent: 'pururava', mother: 'urvashi', yug: 'satya' },
    { id: 'bhima_amavasu', name: 'भीम', subtitle: 'अमावसु पुत्र', parent: 'amavasu', yug: 'satya' },
    { id: 'kanchana', name: 'कांचन', subtitle: 'भीम पुत्र', parent: 'bhima_amavasu', yug: 'satya' },
    { id: 'suhotra_amavasu', name: 'सुहोत्र', subtitle: 'कांचन पुत्र', parent: 'kanchana', yug: 'satya' },
    { id: 'jahnu', name: 'जह्नु', subtitle: 'जाह्नवी (गंगा) के पिता', parent: 'suhotra_amavasu', yug: 'satya', parichay: 'इन्होंने अपने तपोबल से संपूर्ण गंगा को पी लिया था, बाद में भगीरथ के प्रार्थना करने पर कान से निकाला। इसलिए गंगा को जाह्नवी कहा गया।' },
    { id: 'sunaha', name: 'सुनह', subtitle: 'जह्नु पुत्र', parent: 'jahnu', yug: 'satya' },
    { id: 'ajaka', name: 'अजक', subtitle: 'सुनह पुत्र', parent: 'sunaha', yug: 'satya' },
    { id: 'balakashva', name: 'बलाकश्व', subtitle: 'अजक पुत्र', parent: 'ajaka', yug: 'satya' },
    { id: 'kusha_amavasu', name: 'कुश', subtitle: 'बलाकश्व पुत्र', parent: 'balakashva', yug: 'satya' },
    { id: 'kushanabha', name: 'कुशनाभ', subtitle: 'कुश पुत्र', parent: 'kusha_amavasu', yug: 'treta' },
    { id: 'kushamba', name: 'कुशाम्ब', subtitle: 'कुश पुत्र', parent: 'kusha_amavasu', yug: 'treta' },
    { id: 'amurtarajas', name: 'अमूर्तरजस', subtitle: 'कुश पुत्र', parent: 'kusha_amavasu', yug: 'treta' },
    { id: 'vasu_amavasu', name: 'वसु', subtitle: 'कुश पुत्र', parent: 'kusha_amavasu', yug: 'treta' },
    { id: 'gadhi', name: 'गाधि', subtitle: 'कुशनाभ पुत्र', parent: 'kushanabha', yug: 'treta' },
    { id: 'satyavati_gadhi', name: 'सत्यवती', subtitle: 'गाधि पुत्री', parent: 'gadhi', spouseOf: 'ruchika', yug: 'treta', parichay: 'राजा गाधि की पुत्री, जिनका विवाह भृगुवंशी महर्षि ऋचीक से हुआ था। ये जमदग्नि की माता थीं।' },
    { id: 'vishwamitra', name: 'विश्वामित्र', subtitle: 'ब्रह्मर्षि', parent: 'gadhi', yug: 'treta', parichay: 'जन्म से क्षत्रिय राजा थे, परन्तु वशिष्ठ ऋषि से विवाद के बाद घोर तपस्या कर ब्रह्मर्षि का पद प्राप्त किया। गायत्री मंत्र के द्रष्टा।' },

    // --- बाद के वंश (अस्थायी रूप से सुरक्षित रखे गए हैं) ---
    { id: 'shurasen', name: 'शूरसेन', subtitle: 'मथुरा नरेश', parent: 'yadu', yug: 'dwapar' },
    { id: 'vasudev', name: 'वसुदेव', subtitle: 'कृष्ण के पिता', parent: 'shurasen', yug: 'dwapar' },
    { id: 'nanda', name: 'नंद बाबा', subtitle: 'पालक पिता', parent: 'shurasen', yug: 'dwapar' },
    { id: 'krishna', name: 'कृष्ण', subtitle: 'पूर्णावतार', parent: 'vasudev', yug: 'dwapar' },
    { id: 'jambavati', name: 'जाम्बवती', subtitle: 'श्रीकृष्ण की पत्नी', parent: 'jambavan', spouseOf: 'krishna', yug: 'dwapar', parichay: 'जाम्बवान की पुत्री और श्रीकृष्ण की अष्टभार्याओं में से एक।' },
    { id: 'balram', name: 'बलराम', subtitle: 'शेषनाग अवतार', parent: 'vasudev', yug: 'dwapar' },
    { id: 'dushyant', name: 'दुष्यंत', subtitle: 'पुरु वंश', parent: 'puru', yug: 'treta' },
    { id: 'bharat_kuru', name: 'भरत', subtitle: 'चक्रवर्ती सम्राट', parent: 'dushyant', yug: 'treta' },
    { id: 'kuru', name: 'कुरु', subtitle: 'कुरुवंश के संस्थापक', parent: 'bharat_kuru', yug: 'dwapar' },
    { id: 'shantanu', name: 'शांतनु', subtitle: 'कुरुवंश', parent: 'kuru', yug: 'dwapar' },
    { id: 'bhishma', name: 'भीष्म', subtitle: 'गंगा पुत्र', parent: 'shantanu', yug: 'dwapar' },
    { id: 'vichitravirya', name: 'विचित्रवीर्य', subtitle: 'सत्यवती पुत्र', parent: 'shantanu', yug: 'dwapar' },
    { id: 'dhritarashtra', name: 'धृतराष्ट्र', subtitle: 'हस्तिनापुर नरेश', parent: 'vichitravirya', yug: 'dwapar' },
    { id: 'pandu', name: 'पांडु', subtitle: 'पांडवों के पिता', parent: 'vichitravirya', yug: 'dwapar' },
    { id: 'duryodhan', name: 'दुर्योधन', subtitle: 'कौरव ज्येष्ठ', parent: 'dhritarashtra', yug: 'dwapar' },
    { id: 'yudhishthir', name: 'युधिष्ठिर', subtitle: 'धर्मराज', parent: 'pandu', yug: 'dwapar' },
    { id: 'bhim', name: 'भीम', subtitle: 'पवन पुत्र', parent: 'pandu', yug: 'dwapar' },
    { id: 'arjun', name: 'अर्जुन', subtitle: 'इंद्र पुत्र', parent: 'pandu', yug: 'dwapar' },
    { id: 'nakul', name: 'नकुल', subtitle: 'अश्विनी कुमार पुत्र', parent: 'pandu', yug: 'dwapar' },
    { id: 'sahadev', name: 'सहदेव', subtitle: 'अश्विनी कुमार पुत्र', parent: 'pandu', yug: 'dwapar' },
    { id: 'abhimanyu', name: 'अभिमन्यु', subtitle: 'अर्जुन पुत्र', parent: 'arjun', yug: 'dwapar' },
    { id: 'parikshit', name: 'परीक्षित', subtitle: 'अभिमन्यु पुत्र', parent: 'abhimanyu', yug: 'kali' },
];
