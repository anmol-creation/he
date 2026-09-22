export const chandravanshCoreData = [
    {
  id: 'dattatreya_chandra',
  name: 'दत्तात्रेय',
  subtitle: 'विष्णु अंश',
  parent: 'atri',
  mother: 'anasuya_chandra',
  lineLabel: 'दत्तात्रेय',
  gender: 'male',
  yug: 'satya'
},
    {
  id: 'durvasa_chandra',
  name: 'दुर्वासा',
  subtitle: 'शिव अंश',
  parent: 'atri',
  mother: 'anasuya_chandra',
  lineLabel: 'दुर्वासा',
  gender: 'male',
  yug: 'satya'
},
    {
  id: 'chandra_chandra',
  name: 'चंद्र',
  subtitle: 'चंद्र देव (चंद्रवंश के मूल)',
  parent: 'atri',
  gender: 'male',
  lineLabel: 'चंद्र',
  mother: 'anasuya_chandra',
  yug: 'satya'
},
    {
  id: 'tara_chandra',
  name: 'तारा',
  subtitle: 'चंद्र पत्नी',
  parent: '',
  spouseOf: 'chandra_chandra',
  gender: 'female',
  lineLabel: 'तारा',
  yug: 'satya',
  clusterName: 'चंद्र की पत्नियाँ',
  parichay: 'देवगुरु बृहस्पति की पूर्व पत्नी, जिनका अपहरण चंद्र देव ने किया था जिससे तारामय युद्ध हुआ। बाद में ये चंद्र देव की पत्नी बनीं।'
},
    {
  id: 'rohini_chandra',
  name: 'rohini',
  subtitle: 'चंद्र पत्नी',
  parent: '',
  spouseOf: 'chandra_chandra',
  gender: 'female',
  lineLabel: 'तारा',
  yug: 'satya',
  clusterName: 'चंद्र की पत्नियाँ'
},
    {
  id: 'varchas_chandra',
  name: 'वर्चस्',
  subtitle: 'चंद्र पुत्र (वसु)',
  gender: 'male',
  parent: 'chandra_chandra',
  clusterName: 'चंद्र के अन्य पुत्र',
  yug: 'satya',
  lineLabel: 'वर्चस्',
  parichay: 'महाभारत के अनुसार, अष्ट-वसुओं में से एक "सोम" (चंद्र) के दैवीय पुत्र। देवर्षियों के कहने पर इन्होंने ही अर्जुन के पुत्र अभिमन्यु के रूप में धरती पर अवतार लिया था।'
},
    {
  id: 'manohara_chandra',
  name: 'मनोहरा',
  subtitle: 'वर्चस् (वसु) की पत्नी',
  gender: 'female',
  parent: '',
  spouseOf: 'varchas_chandra',
  lineLabel: 'मनोहरा',
  clusterName: 'चंद्र के अन्य पुत्र',
  yug: 'satya',
  parichay: 'ये अष्ट-वसुओं में से एक "सोम" के पुत्र वर्चस् की पत्नी हैं। महाभारत (आदि पर्व) के अनुसार इनसे शिशिर, प्राण और रमण नामक तीन पुत्र हुए।'
},
    {
  id: 'shishira_chandra',
  name: 'शिशिर',
  subtitle: 'वर्चस्-मनोहरा पुत्र',
  gender: 'male',
  parent: 'varchas_chandra',
  clusterName: 'चंद्र के अन्य पुत्र',
  lineLabel: 'शिशिर',
  mother: 'manohara_chandra',
  yug: 'satya'
},
    {
  id: 'prana_chandra',
  name: 'प्राण',
  subtitle: 'वर्चस्-मनोहरा पुत्र',
  lineLabel: 'प्राण',
  gender: 'male',
  parent: 'varchas_chandra',
  mother: 'manohara_chandra',
  clusterName: 'चंद्र के अन्य पुत्र',
  yug: 'satya'
},
    {
  id: 'ramana_chandra',
  name: 'रमण',
  subtitle: 'वर्चस्-मनोहरा पुत्र',
  lineLabel: 'रमण',
  gender: 'male',
  parent: 'varchas_chandra',
  clusterName: 'चंद्र के अन्य पुत्र',
  mother: 'manohara_chandra',
  yug: 'satya'
},
    {
  id: 'budh_chandra',
  name: 'बुध',
  subtitle: 'चंद्र व तारा के पुत्र',
  parent: 'chandra_chandra',
  mother: 'tara_chandra',
  lineLabel: 'बुध',
  gender: 'male',
  yug: 'satya',
  kali_year: -3988000
},
    {
  id: 'ila_chandra',
  name: 'इला',
  subtitle: 'बुध की पत्नी',
  gender: 'female',
  parent: 'vaivasvata_manu',
  spouseOf: 'budh_chandra',
  yug: 'satya',
  kathayein: [
      {
          title: "मनु की प्रथम संतान और चंद्रवंश की माता",
          source: "श्रीमद्भागवत पुराण / विष्णु पुराण",
          content: "माता इला वैवस्वत मनु और श्रद्धा की सबसे पहली संतान थीं। भगवान विष्णु की कृपा से वे पुरुष रूप 'सुद्युम्न' बन गईं। किंतु सुकुमार वन में भगवान शिव के श्राप के कारण वे पुनः स्त्री रूप (इला) में आ गईं। इसी रूप में उनका चंद्रदेव के पुत्र 'बुध' से विवाह हुआ और उनसे 'पुरुरवा' का जन्म हुआ, जो चंद्रवंश के प्रथम राजा बने। अतः माता इला चंद्रवंश की आदिमाता भी मानी जाती हैं। विस्तृत जीवन कथा उनके पुरुष रूप 'सुद्युम्न' के पृष्ठ पर उपलब्ध है।"
      }
  ]
},
    {
  id: 'pururava_chandra',
  name: 'पुरुरवा',
  subtitle: 'चंद्रवंश के प्रथम राजा',
  parent: 'budh_chandra',
  gender: 'male',
  clusterName: 'चंद्रवंश प्रारंभ ',
  lineLabel: 'पुरुरवा',
  mother: 'ila_chandra',
  yug: 'satya',
  kali_year: -2160000,
  parichay: 'बुध और इला के पुत्र, जो चंद्रवंश के प्रथम राजा बने। ये एक अत्यंत पराक्रमी और धर्मपरायण राजा थे जिन्होंने 100 अश्वमेध यज्ञ किये और अपनी राजधानी प्रतिष्ठानपुर (आधुनिक झूँसी, प्रयागराज) में स्थापित की।',
  kathayein: [
      {
          title: 'उर्वशी के साथ प्रेम और अलगाव',
          source: 'ऋग्वेद, शतपथ ब्राह्मण, विष्णु पुराण',
          content: 'पुरुरवा की कहानी सबसे प्रसिद्ध उनकी पत्नी अप्सरा उर्वशी के साथ है। उर्वशी ने पुरुरवा से विवाह के लिए कुछ शर्तें रखी थीं (जैसे कि पुरूरवा उसकी पालतू भेड़ों की रक्षा करेंगे और कभी निर्वस्त्र नहीं दिखेंगे)। जब देवराज इंद्र ने गंधर्वों को भेजकर उन भेड़ों को चुरा लिया, तो पुरूरवा भेड़ों को बचाने दौड़े, लेकिन वह भूल गए कि वे निर्वस्त्र हैं। इंद्र की बिजली चमकने से उर्वशी ने उन्हें देख लिया। शर्त टूटने के कारण उर्वशी स्वर्ग वापस लौट गईं। पुरूरवा उनके विरह में पागल हो गए थे, लेकिन बाद में गंधर्वों की कृपा से उन्हें एक विशेष "अग्नि" मिली और वे गंधर्वलोक में उर्वशी से पुनः मिल सके।'
      },
      {
          title: 'तीन अग्नियों का पृथ्वी पर विस्तार',
          source: 'महाभारत',
          content: 'उर्वशी के वियोग में भटकते हुए पुरुरवा को गंधर्वों ने एक विशेष अग्नि (अरणि) दी थी। कहा जाता है कि पुरुरवा ही वह पहले राजा थे जिन्होंने त्रेता युग में पृथ्वी पर तीन प्रकार की यज्ञीय अग्नियों (गार्हपत्य, आहवनीय और दक्षिणाग्नि) का विस्तार किया।'
      }
  ]
},
    {
  id: 'urvashi_chandra',
  name: 'उर्वशी',
  subtitle: 'पुरुरवा की पत्नी (अप्सरा)',
  gender: 'female',
  parent: 'narayana_dharma',
  lineLabel: 'उर्वशी',
  spouseOf: 'pururava_chandra',
  yug: 'satya',
  parichay: 'स्वर्ग की सबसे प्रमुख और सुंदर अप्सरा, जो महर्षि नारायण की जंघा से उत्पन्न हुई थीं। ये चंद्रवंश के प्रथम राजा पुरुरवा की पत्नी बनीं।',
  kathayein: [
      {
          title: 'नारायण की जंघा (उरु) से उत्पत्ति',
          source: 'देवी भागवत पुराण',
          content: 'उर्वशी किसी माता-पिता से सामान्य रूप से उत्पन्न नहीं हुई थीं। जब देवराज इंद्र ने नर-नारायण ऋषियों की तपस्या भंग करने के लिए रंभा, मेनका आदि अप्सराओं को भेजा, तो महर्षि नारायण ने अपनी जांघ (उरु) पर एक फूल मारा, जिससे एक अत्यंत सुंदर स्त्री प्रकट हुई। उरु से उत्पन्न होने के कारण उनका नाम \'उर्वशी\' पड़ा। उनकी सुंदरता से स्वर्ग की अप्सराएं भी लज्जित हो गईं। बाद में नारायण ने उर्वशी को इंद्र को सौंप दिया।'
      },
      {
          title: 'पुरुरवा से विवाह और संतानें',
          source: 'पुराण',
          content: 'उर्वशी ने चंद्रवंशी राजा पुरुरवा से विवाह किया। दोनों से आयु, अमावसु (विजय), श्रुतायु, सत्यायु, रय, और जय नामक छह पुत्र हुए। आगे चलकर इन्हीं पुत्रों से चंद्रवंश का विस्तार हुआ।'
      },
      {
          title: 'अगस्त्य और वशिष्ठ का जन्म',
          source: 'ऋग्वेद, पुराण',
          content: 'एक बार मित्रावरुण (मित्र और वरुण देव) यज्ञ कर रहे थे, तब उर्वशी उनके सामने आ गईं। उन्हें देखकर मित्रावरुण मोहित हो गए और उनका वीर्य स्खलित होकर एक कलश (घड़े) में गिर गया। इसी कलश से दो महान ऋषियों का जन्म हुआ: महर्षि वशिष्ठ और महर्षि अगस्त्य। इस प्रकार उर्वशी को अप्रत्यक्ष रूप से इन ऋषियों की माता माना जाता है।'
      },
      {
          title: 'अर्जुन को श्राप',
          source: 'महाभारत (वन पर्व)',
          content: 'जब अर्जुन अस्त्र-शस्त्र की शिक्षा लेने स्वर्ग गए, तब उर्वशी उन पर मोहित हो गईं। उन्होंने अर्जुन के समक्ष प्रणय-निवेदन किया, लेकिन अर्जुन ने उन्हें अस्वीकार कर दिया और कहा कि "आप मेरे पूर्वज पुरूरवा की पत्नी रही हैं, इस नाते आप मेरी माता के समान हैं।" क्रोधित होकर उर्वशी ने अर्जुन को श्राप दिया कि उन्हें एक वर्ष तक \'नपुंसक\' (किन्नर) के रूप में रहना पड़ेगा। यही श्राप बाद में अर्जुन के अज्ञातवास (बृहन्नला के रूप में) में वरदान साबित हुआ।'
      },
      {
          title: 'ऋष्यश्रृंग मुनि का जन्म',
          source: 'महाभारत',
          content: 'महर्षि विभांडक ने उर्वशी (या एक अन्य अप्सरा) को देखकर अपना वीर्यपात कर दिया था, जिसे एक हिरनी ने पी लिया। उसी हिरनी के गर्भ से महर्षि \'ऋष्यश्रृंग\' (जिनके सिर पर सींग था) का जन्म हुआ था।'
      }
  ]
},
    {
  id: 'ayu_chandra',
  name: 'आयु',
  subtitle: 'पुरुरवा के ज्येष्ठ पुत्र',
  gender: 'male',
  parent: 'pururava_chandra',
  lineLabel: 'आयु',
  mother: 'urvashi_chandra',
  yug: 'treta',
  kali_year: -2139096
},
    {
  id: 'shrutayu_chandra',
  name: 'श्रुतायु',
  subtitle: 'पुरुरवा के पुत्र',
  gender: 'male',
  parent: 'pururava_chandra',
  mother: 'urvashi_chandra',
  lineLabel: 'श्रुतायु',
  yug: 'satya',
  clusterName: 'पुरुरवा के अन्य पुत्र'
},
    {
  id: 'satyayu_chandra',
  name: 'सत्यायु',
  subtitle: 'पुरुरवा के पुत्र',
  lineLabel: 'सत्यायु',
  parent: 'pururava_chandra',
  gender: 'male',
  mother: 'urvashi_chandra',
  yug: 'satya',
  clusterName: 'पुरुरवा के अन्य पुत्र'
},
    {
  id: 'raya_chandra',
  name: 'रय',
  subtitle: 'पुरुरवा के पुत्र',
  gender: 'male',
  lineLabel: 'रय',
  parent: 'pururava_chandra',
  mother: 'urvashi_chandra',
  yug: 'satya',
  clusterName: 'पुरुरवा के अन्य पुत्र'
},
    {
  id: 'vijaya_chandra',
  name: 'विजय',
  subtitle: 'पुरुरवा के पुत्र',
  lineLabel: 'विजय',
  gender: 'male',
  parent: 'pururava_chandra',
  mother: 'urvashi_chandra',
  yug: 'satya',
  clusterName: 'पुरुरवा के अन्य पुत्र'
},
    {
  id: 'jaya_chandra',
  name: 'जय',
  subtitle: 'पुरुरवा के पुत्र',
  lineLabel: 'जय',
  parent: 'pururava_chandra',
  mother: 'urvashi_chandra',
  yug: 'satya',
  clusterName: 'पुरुरवा के अन्य पुत्र'
},
    {
  id: 'vasuman_shrutayu_chandra',
  name: 'वसुमान',
  subtitle: 'श्रुतायु पुत्र',
  gender: 'male',
  lineLabel: 'वसुमान',
  parent: 'shrutayu_chandra',
  yug: 'satya',
  clusterName: 'पुरुरवा के अन्य पुत्र',
  parichay: 'भागवत पुराण के अनुसार, ये पुरुरवा के पुत्र श्रुतायु के पुत्र थे।'
},
    {
  id: 'shrutanjaya_chandra',
  name: 'श्रुतंजय',
  subtitle: 'सत्यायु पुत्र',
  gender: 'male',
  parent: 'satyayu_chandra',
  lineLabel: 'श्रुतंजय',
  yug: 'satya',
  clusterName: 'पुरुरवा के अन्य पुत्र',
  parichay: 'भागवत पुराण के अनुसार, ये पुरुरवा के पुत्र सत्यायु के पुत्र थे।'
},
    {
  id: 'eka_raya_chandra',
  name: 'एक',
  subtitle: 'रय पुत्र',
  gender: 'male',
  parent: 'raya_chandra',
  lineLabel: 'एक',
  yug: 'satya',
  clusterName: 'पुरुरवा के अन्य पुत्र',
  parichay: 'भागवत पुराण के अनुसार, ये पुरुरवा के पुत्र रय के पुत्र थे।'
},
    {
  id: 'amita_jaya_chandra',
  name: 'अमित',
  subtitle: 'जय पुत्र',
  gender: 'male',
  parent: 'jaya_chandra',
  lineLabel: 'अमित',
  yug: 'satya',
  clusterName: 'पुरुरवा के अन्य पुत्र',
  parichay: 'भागवत पुराण के अनुसार, ये पुरुरवा के पुत्र जय के पुत्र थे।'
},
    {
  id: 'prabha_chandra',
  name: 'प्रभा',
  subtitle: 'आयु की पत्नी / स्वर्भानु पुत्री',
  gender: 'female',
  parent: 'svarbhanu_danava',
  spouseOf: 'ayu_chandra',
  yug: 'satya'
},
    {
  id: 'nahusha_chandra',
  name: 'नहुष',
  subtitle: 'आयु के पुत्र / अशोक सुंदरी पति',
  parent: 'ayu_chandra',
  gender: 'male',
  lineLabel: 'नहुष',
  mother: 'prabha_chandra',
  spouseOf: 'ashokasundari',
  clusterName: 'आयु के पुत्र',
  yug: 'satya'
},
    {
  id: 'rambha_ayu_chandra',
  name: 'रम्भ',
  subtitle: 'आयु के पुत्र',
  gender: 'male',
  parent: 'ayu_chandra',
  mother: 'prabha_chandra',
  yug: 'satya',
  clusterName: 'आयु के पुत्र'
},
    {
  id: 'rabhasa_chandra',
  name: 'रभस',
  subtitle: 'रम्भ पुत्र',
  gender: 'male',
  parent: 'rambha_ayu_chandra',
  yug: 'satya',
  clusterName: 'रम्भ वंश'
},
    {
  id: 'gambhira_chandra',
  name: 'गम्भीर',
  subtitle: 'रभस पुत्र',
  gender: 'male',
  parent: 'rabhasa_chandra',
  yug: 'satya',
  clusterName: 'रम्भ वंश'
},
    {
  id: 'akriya_chandra',
  name: 'अक्रिय',
  subtitle: 'गम्भीर पुत्र',
  gender: 'male',
  parent: 'gambhira_chandra',
  yug: 'satya',
  parichay: 'भागवत पुराण (9.17.10-11) के अनुसार, इनकी पत्नी के माध्यम से ब्राह्मणों के एक विशिष्ट वंश का आरंभ हुआ। क्षत्रिय राजा होने के बावजूद इनके वंशज ब्रह्मर्षि पद को प्राप्त हुए।',
  clusterName: 'रम्भ वंश'
},
    {
  id: 'raji_chandra',
  name: 'रजि',
  subtitle: 'आयु के पुत्र',
  gender: 'male',
  parent: 'ayu_chandra',
  mother: 'prabha_chandra',
  yug: 'satya',
  clusterName: 'आयु के पुत्र'
},
    {
  id: 'rajeya_chandra',
  name: 'रजेय (500 पुत्र)',
  subtitle: 'रजि के पुत्र',
  gender: 'male',
  parent: 'raji_chandra',
  yug: 'satya',
  parichay: 'राजा रजि के 500 बलवान पुत्र। इन्होंने इंद्र से स्वर्ग छीन लिया था, जिसे बाद में बृहस्पति के छल से नष्ट किया गया'
},
    {
  id: 'anena_chandra',
  name: 'अनेना',
  subtitle: 'आयु के पुत्र',
  gender: 'male',
  parent: 'ayu_chandra',
  mother: 'prabha_chandra',
  yug: 'satya',
  clusterName: 'आयु के पुत्र'
},
    {
  id: 'shuddha_chandra',
  name: 'शुद्ध',
  subtitle: 'अनेना पुत्र',
  gender: 'male',
  parent: 'anena_chandra',
  yug: 'satya',
  clusterName: 'अनेना वंश'
},
    {
  id: 'shuchi_chandra',
  name: 'शुचि',
  subtitle: 'शुद्ध पुत्र',
  gender: 'male',
  parent: 'shuddha_chandra',
  yug: 'satya',
  clusterName: 'अनेना वंश'
},
    {
  id: 'trikakud_chandra',
  name: 'त्रिककुद् (धर्मसारथि)',
  subtitle: 'शुचि पुत्र',
  gender: 'male',
  parent: 'shuchi_chandra',
  yug: 'satya',
  clusterName: 'अनेना वंश'
},
    {
  id: 'shantaraya_chandra',
  name: 'शान्तरय',
  subtitle: 'त्रिककुद् पुत्र',
  gender: 'male',
  parent: 'trikakud_chandra',
  yug: 'satya',
  parichay: 'ये आत्मज्ञानी (ब्रह्मज्ञानी) थे, अतः इन्होंने अपना वंश आगे नहीं बढ़ाया।',
  clusterName: 'अनेना वंश'
},
    {
  id: 'ashokasundari_chandra',
  name: 'अशोकसुंदरी',
  gender: 'female',
  subtitle: 'नहुष की पत्नी (शिव-पार्वती पुत्री)',
  parent: 'shiva_parivar_proxy',
  mother: 'parvati',
  spouseOf: 'nahusha_chandra',
  yug: 'satya',
  clusterName: 'शिव परिवार'
},
    {
  id: 'yati_chandra',
  name: 'यति',
  subtitle: 'नहुष के ज्येष्ठ पुत्र',
  gender: 'male',
  parent: 'nahusha_chandra',
  mother: 'ashokasundari_chandra',
  yug: 'satya',
  parichay: 'नहुष के ज्येष्ठ पुत्र। यति बचपन से ही आत्मज्ञानी थे और राज्यपद प्राप्त करने से मोक्ष में बाधा उत्पन्न होगी ऐसा सोचकर उन्होंने संन्यास ग्रहण कर लिया था।',
  clusterName: 'नहुष के अन्य पुत्र'
},
    {
  id: 'sanyati_chandra',
  name: 'संयाति',
  subtitle: 'नहुष के पुत्र',
  gender: 'male',
  parent: 'nahusha_chandra',
  mother: 'ashokasundari_chandra',
  yug: 'satya',
  parichay: 'श्रीमद्भागवत पुराण के अनुसार, चक्रवर्ती सम्राट बनने के बाद ययाति ने अपने 4 छोटे भाइयों (संयाति, अयाति, वियति, कृति) को चारों दिशाओं का अधिपति (गवर्नर) नियुक्त कर दिया था, जिनमें से संयाति एक थे।',
  clusterName: 'नहुष के अन्य पुत्र'
},
    {
  id: 'ayati_nahusha_chandra',
  name: 'अयाति',
  subtitle: 'नहुष के पुत्र',
  gender: 'male',
  parent: 'nahusha_chandra',
  mother: 'ashokasundari_chandra',
  yug: 'satya',
  parichay: 'श्रीमद्भागवत पुराण के अनुसार, चक्रवर्ती सम्राट बनने के बाद ययाति ने अपने 4 छोटे भाइयों (संयाति, अयाति, वियति, कृति) को चारों दिशाओं का अधिपति (गवर्नर) नियुक्त कर दिया था, जिनमें से अयाति एक थे।',
  clusterName: 'नहुष के अन्य पुत्र'
},
    {
  id: 'viyati_chandra',
  name: 'वियति',
  subtitle: 'नहुष के पुत्र',
  gender: 'male',
  parent: 'nahusha_chandra',
  mother: 'ashokasundari_chandra',
  yug: 'satya',
  parichay: 'श्रीमद्भागवत पुराण के अनुसार, चक्रवर्ती सम्राट बनने के बाद ययाति ने अपने 4 छोटे भाइयों (संयाति, अयाति, वियति, कृति) को चारों दिशाओं का अधिपति (गवर्नर) नियुक्त कर दिया था, जिनमें से वियति एक थे।',
  clusterName: 'नहुष के अन्य पुत्र'
},
    {
  id: 'kriti_chandra',
  name: 'कृति',
  subtitle: 'नहुष के पुत्र',
  gender: 'male',
  parent: 'nahusha_chandra',
  mother: 'ashokasundari_chandra',
  yug: 'satya',
  parichay: 'श्रीमद्भागवत पुराण के अनुसार, चक्रवर्ती सम्राट बनने के बाद ययाति ने अपने 4 छोटे भाइयों (संयाति, अयाति, वियति, कृति) को चारों दिशाओं का अधिपति (गवर्नर) नियुक्त कर दिया था, जिनमें से कृति एक थे।',
  clusterName: 'नहुष के अन्य पुत्र'
},
    {
  id: 'yayati_chandra',
  name: 'ययाति',
  subtitle: 'महान सम्राट',
  gender: 'male',
  parent: 'nahusha_chandra',
  mother: 'ashokasundari_chandra',
  yug: 'satya',
  parichay: 'नहुष के द्वितीय पुत्र। ज्येष्ठ भ्राता यति के संन्यासी हो जाने पर ययाति को चक्रवर्ती सम्राट बनाया गया। इन्होंने अपने अन्य चारों भाइयों को विभिन्न दिशाओं का शासक नियुक्त किया।'
},
    {
  id: 'devayani_yayati_chandra',
  name: 'देवयानी',
  subtitle: 'ययाति की पत्नी (शुक्राचार्य की पुत्री)',
  parent: 'shukracharya',
  spouseOf: 'yayati_chandra',
  yug: 'satya',
  clusterName: 'ययाति की पत्नियाँ'
},
    {
  id: 'sharmishtha_chandra',
  name: 'शर्मिष्ठा',
  subtitle: 'ययाति की पत्नी (वृषपर्वा की पुत्री)',
  parent: 'vrishaparva_danava',
  spouseOf: 'yayati_chandra',
  yug: 'satya',
  clusterName: 'ययाति की पत्नियाँ'
},
    {
  id: 'amavasu_chandra',
  name: 'अमावसु (विजय)',
  subtitle: 'कान्यकुब्ज के संस्थापक',
  parent: 'pururava_chandra',
  mother: 'urvashi_chandra',
  yug: 'satya'
},
    {
  id: 'bhima_amavasu_chandra',
  name: 'भीम',
  subtitle: 'अमावसु पुत्र',
  parent: 'amavasu_chandra',
  yug: 'satya',
  clusterName: 'कान्यकुब्ज राजवंश'
},
    {
  id: 'kanchana_chandra',
  name: 'कांचन',
  subtitle: 'भीम पुत्र',
  parent: 'bhima_amavasu_chandra',
  yug: 'satya',
  clusterName: 'कान्यकुब्ज राजवंश'
},
    {
  id: 'suhotra_amavasu_chandra',
  name: 'सुहोत्र',
  subtitle: 'कांचन पुत्र',
  parent: 'kanchana_chandra',
  yug: 'satya',
  clusterName: 'कान्यकुब्ज राजवंश'
},
    {
  id: 'jahnu_chandra',
  name: 'जह्नु',
  subtitle: 'जाह्नवी (गंगा) के पिता',
  parent: 'suhotra_amavasu_chandra',
  yug: 'satya',
  parichay: 'इन्होंने अपने तपोबल से संपूर्ण गंगा को पी लिया था, बाद में भगीरथ के प्रार्थना करने पर कान से निकाला। इसलिए गंगा को जाह्नवी कहा गया।',
  clusterName: 'कान्यकुब्ज राजवंश'
},
    {
  id: 'sunaha_chandra',
  name: 'सुनह',
  subtitle: 'जह्नु पुत्र',
  parent: 'jahnu_chandra',
  yug: 'satya',
  clusterName: 'कान्यकुब्ज राजवंश'
},
    {
  id: 'ajaka_chandra',
  name: 'अजक',
  subtitle: 'सुनह पुत्र',
  parent: 'sunaha_chandra',
  yug: 'satya',
  clusterName: 'कान्यकुब्ज राजवंश'
},
    {
  id: 'balakashva_chandra',
  name: 'बलाकश्व',
  subtitle: 'अजक पुत्र',
  parent: 'ajaka_chandra',
  yug: 'satya',
  clusterName: 'कान्यकुब्ज राजवंश'
},
    {
  id: 'kusha_amavasu_chandra',
  name: 'कुश',
  subtitle: 'बलाकश्व पुत्र',
  parent: 'balakashva_chandra',
  yug: 'satya',
  clusterName: 'कान्यकुब्ज राजवंश'
},
    {
  id: 'kushanabha_chandra',
  name: 'कुशनाभ',
  subtitle: 'कुश पुत्र',
  parent: 'kusha_amavasu_chandra',
  yug: 'treta',
  clusterName: 'कान्यकुब्ज राजवंश'
},
    {
  id: 'kushamba_chandra',
  name: 'कुशाम्ब',
  subtitle: 'कुश पुत्र',
  parent: 'kusha_amavasu_chandra',
  yug: 'treta',
  clusterName: 'कुश के अन्य पुत्र'
},
    {
  id: 'amurtarajas_chandra',
  name: 'अमूर्तरजस',
  subtitle: 'कुश पुत्र',
  parent: 'kusha_amavasu_chandra',
  yug: 'treta',
  clusterName: 'कुश के अन्य पुत्र'
},
    {
  id: 'vasu_amavasu_chandra',
  name: 'वसु',
  subtitle: 'कुश पुत्र',
  parent: 'kusha_amavasu_chandra',
  yug: 'treta',
  clusterName: 'कुश के अन्य पुत्र'
},
    {
  id: 'gadhi_chandra',
  name: 'गाधि',
  subtitle: 'कुशनाभ पुत्र',
  parent: 'kushanabha_chandra',
  yug: 'treta',
  clusterName: 'कान्यकुब्ज राजवंश'
},
    {
  id: 'satyavati_gadhi_chandra',
  name: 'सत्यवती',
  subtitle: 'गाधि पुत्री',
  parent: 'gadhi_chandra',
  spouseOf: 'ruchika',
  yug: 'treta',
  parichay: 'राजा गाधि की पुत्री, जिनका विवाह भृगुवंशी महर्षि ऋचीक से हुआ था। ये जमदग्नि की माता थीं।',
  clusterName: 'कान्यकुब्ज राजवंश'
},
    {
  id: 'vishwamitra_chandra',
  name: 'विश्वामित्र',
  subtitle: 'ब्रह्मर्षि',
  parent: 'gadhi_chandra',
  yug: 'treta',
  parichay: 'जन्म से क्षत्रिय राजा थे, परन्तु वशिष्ठ ऋषि से विवाद के बाद घोर तपस्या कर ब्रह्मर्षि का पद प्राप्त किया। गायत्री मंत्र के द्रष्टा।',
  clusterName: 'कान्यकुब्ज राजवंश'
},

    {
  id: 'shakuntala_vishwamitra_chandra',
  name: 'शकुंतला',
  subtitle: 'विश्वामित्र पुत्री',
  parent: 'vishwamitra_chandra',
  mother: 'menaka_apsara_chandra',
  gender: 'female',
  yug: 'treta',
  parichay: 'इनका विवाह पौरव वंशी राजा दुष्यंत से हुआ और इन्होने भरत को जन्म दिया।',
  clusterName: 'विश्वामित्र की अन्य संतान'
},
    {
  id: 'shunahshepa_chandra',
  name: 'शुनःशेप (देवरथ)',
  subtitle: 'दत्तक पुत्र',
  parent: 'vishwamitra_chandra',
  yug: 'treta',
  parichay: 'महर्षि ऋचीक के पुत्र जिन्हें हरिश्चंद्र के यज्ञ में बलि के लिए ख़रीदा गया था, पर विश्वामित्र ने इन्हें बचाया और अपना ज्येष्ठ पुत्र (देवरथ) बना लिया।',
  clusterName: 'विश्वामित्र की अन्य संतान'
},
    {
  id: 'madhucchandas_chandra',
  name: 'मधुच्छंदस',
  subtitle: 'विश्वामित्र पुत्र',
  parent: 'vishwamitra_chandra',
  yug: 'treta',
  clusterName: 'विश्वामित्र की अन्य संतान'
},
    {
  id: 'ashtaka_chandra',
  name: 'अष्टक',
  subtitle: 'विश्वामित्र पुत्र',
  parent: 'vishwamitra_chandra',
  yug: 'treta',
  clusterName: 'विश्वामित्र की अन्य संतान'
},
    {
  id: 'galava_chandra',
  name: 'गालव',
  subtitle: 'विश्वामित्र पुत्र / शिष्य',
  parent: 'vishwamitra_chandra',
  yug: 'treta',
  clusterName: 'विश्वामित्र की अन्य संतान'
},
    {
  id: 'chandradeva_gahadavala',
  name: 'चन्द्रदेव',
  subtitle: 'गाहड़वाल संस्थापक',
  parent: 'vishwamitra_chandra',
  yug: 'kali',
  clusterName: 'गाहड़वाल वंश'
},
    {
  id: 'madanapala_gahadavala',
  name: 'मदनपाल',
  subtitle: 'कन्नौज नरेश',
  parent: 'chandradeva_gahadavala',
  yug: 'kali',
  clusterName: 'गाहड़वाल वंश'
},
    {
  id: 'govindachandra_gahadavala',
  name: 'गोविन्दचन्द्र',
  subtitle: 'कन्नौज नरेश',
  parent: 'madanapala_gahadavala',
  yug: 'kali',
  clusterName: 'गाहड़वाल वंश'
},
    {
  id: 'vijayachandra_gahadavala',
  name: 'विजयचन्द्र',
  subtitle: 'कन्नौज नरेश',
  parent: 'govindachandra_gahadavala',
  yug: 'kali',
  clusterName: 'गाहड़वाल वंश'
},
    {
  id: 'jaichand_gahadavala',
  name: 'जयचंद',
  subtitle: 'कन्नौज नरेश',
  parent: 'vijayachandra_gahadavala',
  yug: 'kali',
  clusterName: 'गाहड़वाल वंश',
  parichay: 'पृथ्वीराज चौहान के समकालीन कन्नौज के प्रतापी राजा। इनकी पुत्री संयोगिता थी।'
},
    {
  id: 'harishchandra_gahadavala',
  name: 'हरिश्चन्द्र',
  subtitle: 'कन्नौज नरेश',
  parent: 'jaichand_gahadavala',
  yug: 'kali',
  clusterName: 'गाहड़वाल वंश'
},
    {
  id: 'other_dynasties_proxy',
  name: 'अन्य राजवंश',
  subtitle: 'विवाह सम्बन्धित',
  parent: 'brahma',
  yug: 'dwapar',
  clusterName: 'अन्य राजवंश (इन-लॉ)',
  isProxy: true,
  timeScale: 'kalpa'
},
    {
  id: 'chitravahana_manipur',
  name: 'चित्रवाहन',
  subtitle: 'मणिपुर नरेश',
  parent: 'other_dynasties_proxy',
  clusterName: 'अन्य राजवंश (इन-लॉ)',
  gender: 'male',
  yug: 'dwapar'
},
    {
  id: 'rai_sahasi_ii',
  name: 'राय साहसी द्वितीय',
  subtitle: 'राय वंश',
  gender: 'male',
  yug: 'kali',
  clusterName: 'चच वंश (सिंध)',
  parichay: 'सिंध के राय वंश (बौद्ध) के अंतिम राजा। इनकी मृत्यु के बाद चच ने साम्राज्य संभाला।'
},
    {
  id: 'rani_suhandi',
  name: 'रानी सुहानदी',
  subtitle: 'सिंध की रानी',
  parent: 'chach_dynasty_proxy',
  gender: 'female',
  spouseOf: 'chach_of_alor',
  yug: 'kali',
  clusterName: 'चच वंश (सिंध)',
  parichay: 'राय साहसी द्वितीय की विधवा रानी, जिन्होंने बाद में चच से विवाह किया और चच राजवंश की स्थापना में मदद की।'
},
    {
  id: 'chach_of_alor',
  name: 'चच',
  subtitle: 'चच वंश संस्थापक',
  parent: 'chach_dynasty_proxy',
  gender: 'male',
  yug: 'kali',
  clusterName: 'चच वंश (सिंध)',
  parichay: 'इन्होंने बौद्ध राय राजवंश के बाद सिंध में हिंदू साम्राज्य स्थापित किया (631-671 AD)।'
},
    {
  id: 'chandar_of_sindh',
  name: 'चंदर',
  subtitle: 'सिंध नरेश',
  parent: 'chach_dynasty_proxy',
  gender: 'male',
  yug: 'kali',
  clusterName: 'चच वंश (सिंध)',
  parichay: 'चच के भाई और उनके उत्तराधिकारी, जिन्होंने सिंध पर कुछ समय राज किया।'
},
    {
  id: 'dahir_of_sindh',
  name: 'राजा दाहीर',
  subtitle: 'सिंध के अंतिम हिंदू नरेश',
  parent: 'chach_of_alor',
  mother: 'rani_suhandi',
  gender: 'male',
  yug: 'kali',
  clusterName: 'चच वंश (सिंध)',
  parichay: 'चच के पुत्र और सिंध के महान राजा, जो 712 ईस्वी में मुहम्मद बिन कासिम के अरब आक्रमण से लड़ते हुए वीरगति को प्राप्त हुए।'
},
    {
  id: 'rani_ladi',
  name: 'रानी लाडी',
  subtitle: 'दाहीर की पत्नी',
  parent: 'chach_dynasty_proxy',
  gender: 'female',
  spouseOf: 'dahir_of_sindh',
  yug: 'kali',
  clusterName: 'दाहीर की पत्नी'
},
    {
  id: 'rani_bai',
  name: 'रानी बाई',
  subtitle: 'दाहीर की पत्नी',
  parent: 'chach_dynasty_proxy',
  gender: 'female',
  spouseOf: 'dahir_of_sindh',
  yug: 'kali',
  clusterName: 'दाहीर की पत्नी',
  parichay: 'अरबों से किले की रक्षा करते हुए इन्होंने अंत में अन्य राजपूत महिलाओं के साथ जौहर किया।'
},
    {
  id: 'dharsiya_sindh',
  name: 'धर्सिया',
  subtitle: 'दाहीर का पुत्र',
  parent: 'dahir_of_sindh',
  gender: 'male',
  yug: 'kali',
  clusterName: 'चच वंश (सिंध)'
},
    {
  id: 'jaisiah_sindh',
  name: 'जयसिंघ (जयसिंह)',
  subtitle: 'दाहीर का पुत्र',
  parent: 'dahir_of_sindh',
  mother: 'rani_ladi',
  gender: 'male',
  yug: 'kali',
  clusterName: 'चच वंश (सिंध)',
  parichay: 'दाहीर का शूरवीर पुत्र जिसने अपने पिता की मृत्यु के बाद भी अरबों के खिलाफ कड़ा संघर्ष जारी रखा और ब्राह्मणों/राजपूतों को एकजुट किया।'
},
    {
  id: 'fufi_sindh',
  name: 'फूफी',
  subtitle: 'दाहीर की पुत्री',
  parent: 'dahir_of_sindh',
  gender: 'female',
  yug: 'kali',
  clusterName: 'चच वंश (सिंध)'
},
    {
  id: 'surya_devi_sindh',
  name: 'सूर्य देवी',
  subtitle: 'दाहीर की पुत्री',
  parent: 'dahir_of_sindh',
  gender: 'female',
  yug: 'kali',
  clusterName: 'चच वंश (सिंध)',
  parichay: 'अरबों द्वारा बंदी बनाकर खलीफा के पास भेजी गई। चचनामा के अनुसार इन्होंने खलीफा को कासिम के खिलाफ भड़का कर अपने पिता का बदला लिया।'
},
    {
  id: 'premala_devi_sindh',
  name: 'परिमल देवी (प्रेमदा)',
  subtitle: 'दाहीर की पुत्री',
  parent: 'dahir_of_sindh',
  gender: 'female',
  yug: 'kali',
  clusterName: 'चच वंश (सिंध)',
  parichay: 'अपनी बहन सूर्य देवी के साथ बंदी बनाकर दमिश्क भेजी गई थीं।'
},
    {
  id: 'jodha_devi_sindh',
  name: 'जोधा देवी',
  subtitle: 'दाहीर की पुत्री',
  parent: 'dahir_of_sindh',
  gender: 'female',
  yug: 'kali',
  clusterName: 'चच वंश (सिंध)',
  parichay: 'कहा जाता है कि अरब आक्रमण के समय इन्होंने अपनी माता रानी बाई के साथ जौहर कर लिया था।'
},
    {
  id: 'bhim_chandra',
  name: 'भीम (वृकोदर)',
  subtitle: 'पवन पुत्र / पांडव',
  parent: 'pandu_dynasty_proxy',
  mother: 'kunti_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी',
  kali_year: -126
},
    {
  id: 'hidimba_wife_chandra',
  name: 'हिडिम्बा',
  subtitle: 'राक्षसी / भीम पत्नी',
  gender: 'female',
  clusterName: 'भीम की पत्नियाँ',
  parent: '',
  spouseOf: 'bhim_chandra',
  yug: 'dwapar'
},
    {
  id: 'valandhara_chandra',
  name: 'वलंधरा',
  subtitle: 'काशी पुत्री',
  clusterName: 'भीम की पत्नियाँ',
  parent: '',
  spouseOf: 'bhim_chandra',
  yug: 'dwapar'
},
    {
  id: 'ghatotkacha_chandra',
  name: 'घटोत्कच',
  subtitle: 'भीम-हिडिम्बा पुत्र',
  parent: 'bhim_chandra',
  mother: 'hidimba_wife_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'ahilawati_chandra',
  name: 'अहिलावती',
  subtitle: 'घटोत्कच पत्नी',
  parent: '',
  spouseOf: 'ghatotkacha_chandra',
  yug: 'dwapar'
},
    {
  id: 'barbarik_chandra',
  name: 'बर्बरीक (खाटू श्याम)',
  subtitle: 'घटोत्कच पुत्र',
  parent: 'ghatotkacha_chandra',
  mother: 'ahilawati_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'anjanaparvan_chandra',
  name: 'अंजनपर्वा',
  subtitle: 'घटोत्कच पुत्र',
  parent: 'ghatotkacha_chandra',
  mother: 'ahilawati_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'meghavarna_chandra',
  name: 'मेघवर्ण',
  subtitle: 'घटोत्कच पुत्र',
  parent: 'ghatotkacha_chandra',
  mother: 'ahilawati_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'sarvaga_chandra',
  name: 'सर्वग',
  subtitle: 'भीम पुत्र',
  parent: 'bhim_chandra',
  mother: 'valandhara_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'arjun_chandra',
  name: 'अर्जुन (पार्थ)',
  subtitle: 'इंद्र पुत्र / पांडव',
  parent: 'pandu_dynasty_proxy',
  mother: 'kunti_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी',
  kali_year: -125
},
    {
  id: 'ulupi_chandra',
  name: 'उलूपी',
  subtitle: 'नाग कन्या / अर्जुन पत्नी',
  clusterName: 'अर्जुन की पत्नियाँ',
  parent: 'kauravya_naga_king',
  spouseOf: 'arjun_chandra',
  yug: 'dwapar'
},
    {
  id: 'chitrangada_wife_chandra',
  name: 'चित्रांगदा',
  subtitle: 'मणिपुर पुत्री / अर्जुन पत्नी',
  parent: 'chitravahana_manipur',
  spouseOf: 'arjun_chandra',
  yug: 'dwapar',
  clusterName: 'अर्जुन की पत्नियाँ'
},
    {
  id: 'abhimanyu_chandra',
  name: 'अभिमन्यु',
  subtitle: 'अर्जुन-सुभद्रा पुत्र',
  parent: 'arjun_chandra',
  mother: 'subhadra_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'iravan_chandra',
  name: 'इरावन',
  subtitle: 'अर्जुन पुत्र',
  parent: 'arjun_chandra',
  mother: 'ulupi_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'babhruvahana_chandra',
  name: 'बभ्रुवाहन',
  subtitle: 'अर्जुन पुत्र',
  parent: 'arjun_chandra',
  mother: 'chitrangada_wife_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'nakul_chandra',
  name: 'नकुल',
  subtitle: 'अश्विनी कुमार पुत्र',
  parent: 'pandu_dynasty_proxy',
  mother: 'madri_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी',
  kali_year: -123
},
    {
  id: 'karenumati_chandra',
  name: 'करेणुमती',
  subtitle: 'चेदि पुत्री / नकुल पत्नी',
  parent: 'shishupala_chandra',
  spouseOf: 'nakul_chandra',
  yug: 'dwapar'
},
    {
  id: 'niramitra_chandra',
  name: 'निरमित्र',
  subtitle: 'नकुल पुत्र',
  parent: 'nakul_chandra',
  mother: 'karenumati_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'sahadev_chandra',
  name: 'सहदेव',
  subtitle: 'अश्विनी कुमार पुत्र',
  parent: 'pandu_dynasty_proxy',
  mother: 'madri_chandra',
  yug: 'dwapar',
  clusterName: 'pandav',
  kali_year: -123
},
    {
  id: 'vijaya_sahadev_chandra',
  name: 'विजया',
  subtitle: 'मद्र पुत्री / सहदेव पत्नी',
  parent: 'shalya_madra_king',
  spouseOf: 'sahadev_chandra',
  yug: 'dwapar'
},
    {
  id: 'suhotra_sahadev_chandra',
  name: 'सुहोत्र',
  subtitle: 'सहदेव पुत्र',
  parent: 'sahadev_chandra',
  mother: 'vijaya_sahadev_chandra',
  yug: 'dwapar'
},
    {
  id: 'uttara_abhimanyu_chandra',
  name: 'उत्तरा',
  subtitle: 'विराट पुत्री / अभिमन्यु पत्नी',
  parent: 'virata_matsya',
  spouseOf: 'abhimanyu_chandra',
  yug: 'dwapar'
},
    {
  id: 'parikshit_chandra',
  name: 'परीक्षित (द्वितीय)',
  subtitle: 'कलियुग के प्रथम कुरु राजा',
  parent: 'abhimanyu_chandra',
  mother: 'uttara_abhimanyu_chandra',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'madravati_parikshit_chandra',
  name: 'मद्रावती',
  subtitle: 'परीक्षित पत्नी',
  parent: '',
  spouseOf: 'parikshit_chandra',
  yug: 'kali'
},
    {
  id: 'janamejaya_2_chandra',
  name: 'जनमेजय (द्वितीय)',
  subtitle: 'परीक्षित पुत्र (सर्पसत्र)',
  parent: 'parikshit_chandra',
  mother: 'madravati_parikshit_chandra',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'shrutasena_kali',
  name: 'श्रुतसेन',
  subtitle: 'परीक्षित पुत्र',
  parent: 'parikshit_chandra',
  mother: 'madravati_parikshit_chandra',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'ugrasena_kali',
  name: 'उग्रसेन',
  subtitle: 'परीक्षित पुत्र',
  parent: 'parikshit_chandra',
  mother: 'madravati_parikshit_chandra',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'bhimasena_kali',
  name: 'भीमसेन',
  subtitle: 'परीक्षित पुत्र',
  parent: 'parikshit_chandra',
  mother: 'madravati_parikshit_chandra',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'vapushtama_chandra',
  name: 'वपुष्टमा',
  subtitle: 'जनमेजय पत्नी',
  parent: '',
  spouseOf: 'janamejaya_2_chandra',
  yug: 'kali'
},
    {
  id: 'shatanika_kali',
  name: 'शतानीक',
  subtitle: 'जनमेजय पुत्र',
  parent: 'janamejaya_2_chandra',
  mother: 'vapushtama_chandra',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'shankukarna_chandra',
  name: 'शंकुकर्ण',
  subtitle: 'जनमेजय पुत्र',
  parent: 'janamejaya_2_chandra',
  mother: 'vapushtama_chandra',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'ashvamedhadatta_chandra',
  name: 'अश्वमेधदत्त',
  subtitle: 'शतानीक पुत्र',
  parent: 'shatanika_kali',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'asimakrishna_chandra',
  name: 'असीमकृष्ण',
  subtitle: 'अश्वमेधदत्त पुत्र',
  parent: 'ashvamedhadatta_chandra',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'nichakshu_chandra',
  name: 'निचक्षु',
  subtitle: 'कौशाम्बी नरेश',
  parent: 'asimakrishna_chandra',
  yug: 'kali',
  parichay: 'इनके काल में हस्तिनापुर गंगा में बह गया, अतः इन्होंने कौशाम्बी को अपनी राजधानी बनाया।',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'ushna_kuru',
  name: 'उष्ण',
  subtitle: 'निचक्षु पुत्र',
  parent: 'nichakshu_chandra',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'chitraratha_kuru',
  name: 'चित्ररथ',
  subtitle: 'उष्ण पुत्र',
  parent: 'ushna_kuru',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'bhumichand_katoch',
  name: 'भूमिचंद',
  subtitle: 'त्रिगर्त के संस्थापक',
  parent: 'chandravansh_dynasty_proxy',
  yug: 'satya',
  parichay: 'इन्हें चंद्रवंश/सोमवंश का माना जाता है जिन्होंने कांगड़ा (त्रिगर्त) राज्य की स्थापना की।',
  clusterName: 'पुरुरवा के अन्य पुत्र'
},
    {
  id: 'susharma_chandra_katoch',
  name: 'सुशर्मा चन्द्र',
  subtitle: 'त्रिगर्त नरेश (महाभारत काल)',
  parent: 'bhumichand_katoch',
  yug: 'dwapar',
  parichay: 'इन्होंने कांगड़ा के किले का निर्माण करवाया। महाभारत युद्ध में इन्होंने कौरवों का साथ दिया और विराट नगर पर आक्रमण किया था।'
},
    {
  id: 'katoch_medieval_link',
  name: 'ऐतिहासिक अंतराल (कटोच)',
  subtitle: 'अज्ञात पीढ़ियाँ',
  parent: 'susharma_chandra_katoch',
  yug: 'kali',
  parichay: 'सुशर्मा चन्द्र के बाद कांगड़ा रियासत के कई राजा हुए (जैसे रूप चन्द्र, जय चन्द्र)।'
},
    {
  id: 'katoch_dynasty_proxy',
  name: 'कटोच वंश',
  subtitle: 'कांगड़ा राजवंश',
  parent: 'katoch_medieval_link',
  yug: 'kali',
  clusterName: 'कटोच (कांगड़ा) वंश',
  isProxy: true
},
    {
  id: 'rup_chandra_katoch',
  name: 'रूप चन्द्र',
  subtitle: 'कांगड़ा नरेश',
  parent: 'katoch_dynasty_proxy',
  clusterName: 'कटोच (कांगड़ा) वंश',
  yug: 'kali',
  parichay: 'इन्होंने 1360 ई. के आसपास शासन किया और दिल्ली तक लूटमार की।'
},
    {
  id: 'sangara_chandra_katoch',
  name: 'संगारा चन्द्र',
  subtitle: 'कांगड़ा नरेश',
  parent: 'rup_chandra_katoch',
  yug: 'kali',
  clusterName: 'कटोच (कांगड़ा) वंश'
},
    {
  id: 'megh_chandra_katoch',
  name: 'मेघ चन्द्र',
  subtitle: 'कांगड़ा नरेश',
  parent: 'sangara_chandra_katoch',
  yug: 'kali',
  clusterName: 'कटोच (कांगड़ा) वंश'
},
    {
  id: 'hari_chandra_katoch',
  name: 'हरि चन्द्र',
  subtitle: 'गुलेर राज्य संस्थापक',
  parent: 'megh_chandra_katoch',
  yug: 'kali',
  parichay: 'हरि चन्द्र के शिकार में खो जाने पर उनके भाई करम चन्द्र को राजा बना दिया गया। हरि चन्द्र ने लौटकर गुलेर राज्य बसाया।'
},
    {
  id: 'karam_chandra_katoch',
  name: 'करम चन्द्र',
  subtitle: 'कांगड़ा नरेश',
  parent: 'megh_chandra_katoch',
  yug: 'kali',
  clusterName: 'कटोच (कांगड़ा) वंश'
},
    {
  id: 'sansar_chand_1_katoch',
  name: 'संसार चन्द (प्रथम)',
  subtitle: 'कांगड़ा नरेश',
  parent: 'karam_chandra_katoch',
  yug: 'kali',
  clusterName: 'कटोच (कांगड़ा) वंश'
},
    {
  id: 'gurcharan_chand_katoch',
  name: 'गुरचरण चन्द',
  subtitle: 'कांगड़ा नरेश',
  parent: 'sansar_chand_1_katoch',
  yug: 'kali',
  clusterName: 'कटोच (कांगड़ा) वंश'
},
    {
  id: 'bidhi_chand_katoch',
  name: 'बिधि चन्द',
  subtitle: 'कांगड़ा नरेश',
  parent: 'gurcharan_chand_katoch',
  yug: 'kali',
  clusterName: 'कटोच (कांगड़ा) वंश'
},
    {
  id: 'trilok_chand_katoch',
  name: 'त्रिलोक चन्द',
  subtitle: 'कांगड़ा नरेश',
  parent: 'bidhi_chand_katoch',
  yug: 'kali',
  clusterName: 'कटोच (कांगड़ा) वंश'
},
    {
  id: 'hari_chand_2_katoch',
  name: 'हरि चन्द (द्वितीय)',
  subtitle: 'कांगड़ा नरेश',
  parent: 'trilok_chand_katoch',
  yug: 'kali',
  clusterName: 'कटोच (कांगड़ा) वंश'
},
    {
  id: 'chander_bhan_chand_katoch',
  name: 'चन्द्रभान चन्द',
  subtitle: 'कांगड़ा नरेश',
  parent: 'hari_chand_2_katoch',
  yug: 'kali',
  clusterName: 'कटोच (कांगड़ा) वंश'
},
    {
  id: 'vijay_ram_chand_katoch',
  name: 'विजय राम चन्द',
  subtitle: 'कांगड़ा नरेश',
  parent: 'chander_bhan_chand_katoch',
  yug: 'kali',
  clusterName: 'कटोच (कांगड़ा) वंश'
},
    {
  id: 'udai_ram_chand_katoch',
  name: 'उदय राम चन्द',
  subtitle: 'कांगड़ा नरेश',
  parent: 'vijay_ram_chand_katoch',
  yug: 'kali',
  clusterName: 'कटोच (कांगड़ा) वंश'
},
    {
  id: 'pirthi_chand_katoch',
  name: 'पृथ्वी चन्द',
  subtitle: 'कांगड़ा नरेश',
  parent: 'udai_ram_chand_katoch',
  yug: 'kali',
  clusterName: 'कटोच (कांगड़ा) वंश'
},
    {
  id: 'hamir_chand_katoch',
  name: 'हमीर चन्द',
  subtitle: 'कांगड़ा नरेश',
  parent: 'pirthi_chand_katoch',
  yug: 'kali',
  clusterName: 'कटोच (कांगड़ा) वंश'
},
    {
  id: 'abhai_chand_katoch',
  name: 'अभय चन्द',
  subtitle: 'कांगड़ा नरेश',
  parent: 'hamir_chand_katoch',
  yug: 'kali',
  clusterName: 'कटोच (कांगड़ा) वंश'
},
    {
  id: 'ghamand_chand_katoch',
  name: 'घमंड चन्द',
  subtitle: 'कांगड़ा नरेश',
  parent: 'abhai_chand_katoch',
  yug: 'kali',
  parichay: 'इन्होंने अहमद शाह अब्दाली के समय कांगड़ा का शासन संभाला।',
  clusterName: 'कटोच (कांगड़ा) वंश'
},
    {
  id: 'tegh_chand_katoch',
  name: 'तेग चन्द',
  subtitle: 'कांगड़ा नरेश',
  parent: 'ghamand_chand_katoch',
  yug: 'kali',
  clusterName: 'कटोच (कांगड़ा) वंश'
},
    {
  id: 'sansar_chand_2_katoch',
  name: 'महाराजा संसार चन्द (द्वितीय)',
  subtitle: 'कांगड़ा के महान सम्राट',
  parent: 'tegh_chand_katoch',
  yug: 'kali',
  parichay: 'इन्हें कांगड़ा का स्वर्ण युग लाने का श्रेय है। इन्होंने कांगड़ा चित्रकला (Kangra Paintings) को संरक्षण दिया और महाराजा रणजीत सिंह के साथ संधियां कीं।',
  clusterName: 'कटोच (कांगड़ा) वंश'
}
];
