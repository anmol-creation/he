export const puruData = [
    {
  id: 'puru_chandra',
  name: 'पुरु',
  subtitle: 'पौरव/कुरुवंश के संस्थापक',
  parent: 'yayati_chandra',
  gender: 'male',
  mother: 'sharmishtha_chandra',
  yug: 'treta',
  lineLabel: 'पुरुवंश',
  clusterName: 'चंद्रवंश'
},
    {
  id: 'puru_offshoot_proxy',
  name: 'पुरु वंश (शाखा)',
  subtitle: 'अज्ञात पीढ़ियाँ',
  parent: 'puru_chandra',
  yug: 'treta',
  isProxy: true,
  parichay: 'पुरु वंश की एक शाखा, जिसके कुछ पीढ़ियों के नाम अज्ञात हैं, जहाँ से राजा व्युषिताश्व आते हैं।',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'vyushitashva_puru',
  name: 'व्युषिताश्व',
  subtitle: 'पुरु वंशी नरेश',
  parent: 'puru_offshoot_proxy',
  yug: 'treta',
  parichay: 'एक अत्यंत प्रतापी और धार्मिक राजा। कुंती द्वारा महाभारत में वर्णित कथा के अनुसार, इनकी मृत्यु के पश्चात इनकी पत्नी ने आत्मिक संयोग से पुत्र प्राप्त किए।',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'bhadra_kakshivat_wife',
  name: 'भद्रा',
  subtitle: 'व्युषिताश्व की पत्नी',
  parent: '',
  spouseOf: 'vyushitashva_puru',
  yug: 'treta',
  parichay: 'कक्षीवान की पुत्री। अपने मृत पति के आशीर्वाद से इन्होंने 7 पुत्रों (3 शाल्व और 4 मद्र) को जन्म दिया।',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'salwa_dynasty_proxy',
  name: 'शाल्व वंश',
  subtitle: 'व्युषिताश्व के 3 पुत्र',
  parent: 'vyushitashva_puru',
  mother: 'bhadra_kakshivat_wife',
  yug: 'treta',
  isProxy: true,
  parichay: 'राजा व्युषिताश्व और भद्रा के 3 पुत्रों द्वारा स्थापित वंश।',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'dyumatsena_salwa',
  name: 'द्युमत्सेन',
  subtitle: 'शाल्व नरेश',
  parent: 'salwa_dynasty_proxy',
  yug: 'treta',
  parichay: 'सत्यवान के पिता। यह अंधे हो गए थे और शत्रुओं ने इनका राज्य छीन लिया था, जिसके कारण इन्हें वन में रहना पड़ा।',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'satyavan_salwa',
  name: 'सत्यवान',
  subtitle: 'द्युमत्सेन पुत्र',
  parent: 'dyumatsena_salwa',
  spouseOf: 'savitri_madra',
  yug: 'treta',
  parichay: 'अल्पायु होने के कारण विवाह के एक वर्ष बाद ही इनकी मृत्यु निश्चित थी, परंतु सावित्री ने यमराज से इनके प्राण वापस ले लिए।',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'satyavan_100_sons',
  name: '100 शाल्व पुत्र',
  subtitle: 'सत्यवान-सावित्री के पुत्र',
  parent: 'satyavan_salwa',
  mother: 'savitri_madra',
  yug: 'treta',
  parichay: 'यमराज के वरदान स्वरूप सावित्री और सत्यवान को 100 तेजस्वी पुत्रों की प्राप्ति हुई, जिन्होंने आगे शाल्व वंश को बढ़ाया।',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'late_salwa_dynasty_proxy',
  name: 'महाभारत कालीन शाल्व',
  subtitle: 'ऐतिहासिक अंतराल',
  parent: 'satyavan_100_sons',
  yug: 'dwapar',
  isProxy: true,
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'shalva_saubha_king',
  name: 'शाल्व (सौभ नरेश)',
  subtitle: 'शाल्व नरेश',
  parent: 'late_salwa_dynasty_proxy',
  yug: 'dwapar',
  isProminent: true,
  parichay: 'सौभ नगर का राजा। यह अंबा का प्रेमी था। शिशुपाल की मृत्यु के बाद इसने द्वारका पर आक्रमण किया था, जहाँ भगवान कृष्ण ने इसका वध किया।',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'paushti_puru',
  name: 'पौष्टी',
  subtitle: 'पुरु की पत्नी',
  parent: '',
  spouseOf: 'puru_chandra',
  yug: 'treta'
},
    {
  id: 'janamejaya_1_chandra',
  name: 'जनमेजय (प्रथम)',
  subtitle: 'पुरु पुत्र',
  parent: 'puru_chandra',
  mother: 'paushti_puru',
  yug: 'treta',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'pravira_puru',
  name: 'प्रवीर',
  subtitle: 'पुरु पुत्र',
  parent: 'puru_chandra',
  mother: 'paushti_puru',
  yug: 'treta',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'ishvara_puru',
  name: 'ईश्वर',
  subtitle: 'पुरु पुत्र',
  parent: 'puru_chandra',
  mother: 'paushti_puru',
  yug: 'treta',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'ananta_janamejaya_chandra',
  name: 'अनन्ता',
  subtitle: 'जनमेजय पत्नी',
  parent: '',
  spouseOf: 'janamejaya_1_chandra',
  yug: 'treta'
},
    {
  id: 'prachinvan_chandra',
  name: 'प्राचीन्वान',
  subtitle: 'जनमेजय पुत्र',
  parent: 'janamejaya_1_chandra',
  mother: 'ananta_janamejaya_chandra',
  yug: 'treta',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'ashmaki_prachinvan_chandra',
  name: 'अश्मकी',
  subtitle: 'प्राचीन्वान पत्नी',
  parent: '',
  spouseOf: 'prachinvan_chandra',
  yug: 'treta'
},
    {
  id: 'sanyati_puru',
  name: 'संयाति',
  subtitle: 'प्राचीन्वान पुत्र',
  parent: 'prachinvan_chandra',
  mother: 'ashmaki_prachinvan_chandra',
  yug: 'treta',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'varangi_sanyati_chandra',
  name: 'वरांगी',
  subtitle: 'संयाति पत्नी',
  parent: '',
  spouseOf: 'sanyati_puru',
  yug: 'treta'
},
    {
  id: 'ahayati_puru',
  name: 'अहयाति',
  subtitle: 'संयाति पुत्र',
  parent: 'sanyati_puru',
  mother: 'varangi_sanyati_chandra',
  yug: 'treta',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'bhanumati_ahayati_chandra',
  name: 'भानुमती',
  subtitle: 'अहयाति पत्नी',
  parent: '',
  spouseOf: 'ahayati_puru',
  yug: 'treta'
},
    {
  id: 'sarvabhauma_puru',
  name: 'सार्वभौम',
  subtitle: 'अहयाति पुत्र',
  parent: 'ahayati_puru',
  mother: 'bhanumati_ahayati_chandra',
  yug: 'treta',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'sunanda_sarvabhauma_chandra',
  name: 'सुनंदा',
  subtitle: 'सार्वभौम पत्नी',
  parent: '',
  spouseOf: 'sarvabhauma_puru',
  yug: 'treta'
},
    {
  id: 'jayatsena_puru',
  name: 'जयत्सेन',
  subtitle: 'सार्वभौम पुत्र',
  parent: 'sarvabhauma_puru',
  mother: 'sunanda_sarvabhauma_chandra',
  yug: 'treta',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'sushrava_jayatsena_chandra',
  name: 'सुश्रवा',
  subtitle: 'जयत्सेन पत्नी',
  parent: '',
  spouseOf: 'jayatsena_puru',
  yug: 'treta'
},
    {
  id: 'arvachina_chandra',
  name: 'अर्वाचीन',
  subtitle: 'जयत्सेन पुत्र',
  parent: 'jayatsena_puru',
  mother: 'sushrava_jayatsena_chandra',
  yug: 'treta',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'maryada_arvachina_chandra',
  name: 'मर्यादा',
  subtitle: 'अर्वाचीन पत्नी',
  parent: '',
  spouseOf: 'arvachina_chandra',
  yug: 'treta'
},
    {
  id: 'ariha_1_chandra',
  name: 'अरिह (प्रथम)',
  subtitle: 'अर्वाचीन पुत्र',
  parent: 'arvachina_chandra',
  mother: 'maryada_arvachina_chandra',
  yug: 'treta',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'angi_ariha_chandra',
  name: 'अंगी',
  subtitle: 'अरिह पत्नी',
  parent: '',
  spouseOf: 'ariha_1_chandra',
  yug: 'treta'
},
    {
  id: 'mahabhauma_chandra',
  name: 'महाभौम',
  subtitle: 'अरिह पुत्र',
  parent: 'ariha_1_chandra',
  mother: 'angi_ariha_chandra',
  yug: 'treta',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'suyagya_mahabhauma_chandra',
  name: 'सुयज्ञा',
  subtitle: 'महाभौम पत्नी',
  parent: '',
  spouseOf: 'mahabhauma_chandra',
  yug: 'treta'
},
    {
  id: 'ayutanayi_chandra',
  name: 'अयुतनायी',
  subtitle: 'महाभौम पुत्र',
  parent: 'mahabhauma_chandra',
  mother: 'suyagya_mahabhauma_chandra',
  yug: 'treta',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'kama_ayutanayi_chandra',
  name: 'कामा',
  subtitle: 'अयुतनायी पत्नी',
  parent: '',
  spouseOf: 'ayutanayi_chandra',
  yug: 'treta'
},
    {
  id: 'akrodhana_chandra',
  name: 'अक्रोधन',
  subtitle: 'अयुतनायी पुत्र',
  parent: 'ayutanayi_chandra',
  mother: 'kama_ayutanayi_chandra',
  yug: 'treta',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'karambha_akrodhana_chandra',
  name: 'करम्भा',
  subtitle: 'अक्रोधन पत्नी',
  parent: '',
  spouseOf: 'akrodhana_chandra',
  yug: 'treta'
},
    {
  id: 'devatithi_1_chandra',
  name: 'देवातिथि',
  subtitle: 'अक्रोधन पुत्र',
  parent: 'akrodhana_chandra',
  mother: 'karambha_akrodhana_chandra',
  yug: 'treta',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'maryada_devatithi_chandra',
  name: 'मर्यादा',
  subtitle: 'देवातिथि पत्नी',
  parent: '',
  spouseOf: 'devatithi_1_chandra',
  yug: 'treta'
},
    {
  id: 'ariha_2_chandra',
  name: 'अरिह (द्वितीय)',
  subtitle: 'देवातिथि पुत्र',
  parent: 'devatithi_1_chandra',
  mother: 'maryada_devatithi_chandra',
  yug: 'treta',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'sudeva_ariha_chandra',
  name: 'सुदेवा',
  subtitle: 'अरिह पत्नी',
  parent: '',
  spouseOf: 'ariha_2_chandra',
  yug: 'treta'
},
    {
  id: 'riksha_1_chandra',
  name: 'ऋक्ष (प्रथम)',
  subtitle: 'अरिह पुत्र',
  parent: 'ariha_2_chandra',
  mother: 'sudeva_ariha_chandra',
  yug: 'treta',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'jwala_riksha_chandra',
  name: 'ज्वाला',
  subtitle: 'ऋक्ष पत्नी',
  parent: '',
  spouseOf: 'riksha_1_chandra',
  yug: 'treta'
},
    {
  id: 'matinara_chandra',
  name: 'मतिनार',
  subtitle: 'ऋक्ष पुत्र',
  parent: 'riksha_1_chandra',
  mother: 'jwala_riksha_chandra',
  yug: 'treta',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'saraswati_matinara_chandra',
  name: 'सरस्वती (नदी)',
  subtitle: 'मतिनार पत्नी',
  parent: '',
  spouseOf: 'matinara_chandra',
  yug: 'treta'
},
    {
  id: 'tamsu_chandra',
  name: 'तंसु',
  subtitle: 'मतिनार पुत्र',
  parent: 'matinara_chandra',
  mother: 'saraswati_matinara_chandra',
  yug: 'treta',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'apratiratha_chandra',
  name: 'अप्रतिरथ',
  subtitle: 'मतिनार पुत्र',
  parent: 'matinara_chandra',
  mother: 'saraswati_matinara_chandra',
  yug: 'treta',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'dhruva_puru',
  name: 'ध्रुव',
  subtitle: 'मतिनार पुत्र',
  parent: 'matinara_chandra',
  mother: 'saraswati_matinara_chandra',
  yug: 'treta',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'gauri_matinara_chandra',
  name: 'गौरी',
  subtitle: 'मतिनार पुत्री',
  parent: 'matinara_chandra',
  mother: 'saraswati_matinara_chandra',
  spouseOf: 'yuvanashva',
  yug: 'treta',
  parichay: 'इनका विवाह सूर्यवंशी राजा युवनाश्व से हुआ, और ये मांधाता की माता बनीं।',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'ilin_tamsu_chandra',
  name: 'इलिन',
  subtitle: 'तंसु पत्नी',
  parent: '',
  spouseOf: 'tamsu_chandra',
  yug: 'treta'
},
    {
  id: 'dushyant_chandra',
  name: 'दुष्यंत',
  subtitle: 'तंसु पुत्र',
  parent: 'tamsu_chandra',
  mother: 'ilin_tamsu_chandra',
  yug: 'treta',
  parichay: 'इन्हें तुर्वसु वंश के मरुत्त ने गोद लिया था, परन्तु ये पुनः पुरु वंश में लौट गए।',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'bharat_kuru',
  name: 'भरत',
  subtitle: 'चक्रवर्ती सम्राट (भारतवर्ष)',
  parent: 'dushyant_chandra',
  mother: 'shakuntala_vishwamitra_chandra',
  yug: 'dwapar',
  kali_year: -3500,
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'sunanda_bharat_chandra',
  name: 'सुनंदा',
  subtitle: 'भरत की पत्नी',
  parent: '',
  spouseOf: 'bharat_kuru',
  yug: 'dwapar'
},
    {
  id: 'vidatha_bharadvaja_chandra',
  name: 'भरद्वाज (विदथ)',
  subtitle: 'भरत के दत्तक पुत्र',
  parent: 'bharat_kuru',
  yug: 'dwapar',
  parichay: 'भरत के अपने ९ पुत्र योग्य नहीं थे, अतः उन्होंने महर्षि बृहस्पति के पुत्र भरद्वाज को गोद लिया।',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'bhumanyu_chandra',
  name: 'भुमन्यु',
  subtitle: 'भरद्वाज पुत्र',
  parent: 'vidatha_bharadvaja_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'pushkarini_bhumanyu_chandra',
  name: 'पुष्करिणी',
  subtitle: 'भुमन्यु पत्नी',
  parent: '',
  spouseOf: 'bhumanyu_chandra',
  yug: 'dwapar'
},
    {
  id: 'suhotra_puru',
  name: 'सुहोत्र',
  subtitle: 'भुमन्यु पुत्र',
  parent: 'bhumanyu_chandra',
  mother: 'pushkarini_bhumanyu_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'suhota_puru',
  name: 'सुहोता',
  subtitle: 'भुमन्यु पुत्र',
  parent: 'bhumanyu_chandra',
  mother: 'pushkarini_bhumanyu_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'suhavi_puru',
  name: 'सुहवि',
  subtitle: 'भुमन्यु पुत्र',
  parent: 'bhumanyu_chandra',
  mother: 'pushkarini_bhumanyu_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'suyaju_puru',
  name: 'सुयजु',
  subtitle: 'भुमन्यु पुत्र',
  parent: 'bhumanyu_chandra',
  mother: 'pushkarini_bhumanyu_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'diviratha_puru',
  name: 'दिविरथ',
  subtitle: 'भुमन्यु पुत्र',
  parent: 'bhumanyu_chandra',
  mother: 'pushkarini_bhumanyu_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'aikshvaki_suhotra_chandra',
  name: 'ऐक्ष्वाकी',
  subtitle: 'सुहोत्र पत्नी',
  parent: '',
  spouseOf: 'suhotra_puru',
  yug: 'dwapar'
},
    {
  id: 'hasti_chandra',
  name: 'हस्ती',
  subtitle: 'हस्तिनापुर के संस्थापक',
  parent: 'suhotra_puru',
  mother: 'aikshvaki_suhotra_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'ajamidha_1_chandra',
  name: 'अजमीढ (प्रथम)',
  subtitle: 'सुहोत्र पुत्र',
  parent: 'suhotra_puru',
  mother: 'aikshvaki_suhotra_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'dvimidha_chandra',
  name: 'द्विमीढ',
  subtitle: 'सुहोत्र पुत्र',
  parent: 'suhotra_puru',
  mother: 'aikshvaki_suhotra_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'purumidha_chandra',
  name: 'पुरुमीढ',
  subtitle: 'सुहोत्र पुत्र',
  parent: 'suhotra_puru',
  mother: 'aikshvaki_suhotra_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'yashodhara_hasti_chandra',
  name: 'यशोधरा',
  subtitle: 'हस्ती पत्नी',
  parent: '',
  spouseOf: 'hasti_chandra',
  yug: 'dwapar'
},
    {
  id: 'vikunthana_chandra',
  name: 'विकुण्ठन',
  subtitle: 'हस्ती पुत्र',
  parent: 'hasti_chandra',
  mother: 'yashodhara_hasti_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'sudeva_vikunthana_chandra',
  name: 'सुदेवा',
  subtitle: 'विकुण्ठन पत्नी',
  parent: '',
  spouseOf: 'vikunthana_chandra',
  yug: 'dwapar'
},
    {
  id: 'ajamidha_2_chandra',
  name: 'अजमीढ (द्वितीय)',
  subtitle: 'विकुण्ठन पुत्र',
  parent: 'vikunthana_chandra',
  mother: 'sudeva_vikunthana_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'dhumini_ajamidha_chandra',
  name: 'धूमिनी',
  subtitle: 'अजमीढ पत्नी (कुरु वंश)',
  parent: '',
  spouseOf: 'ajamidha_2_chandra',
  yug: 'dwapar'
},
    {
  id: 'nili_ajamidha_chandra',
  name: 'नीली (नलिनी)',
  subtitle: 'अजमीढ पत्नी (पांचाल वंश)',
  parent: '',
  spouseOf: 'ajamidha_2_chandra',
  yug: 'dwapar'
},
    {
  id: 'keshini_ajamidha_chandra',
  name: 'केशिनी',
  subtitle: 'अजमीढ पत्नी',
  parent: '',
  spouseOf: 'ajamidha_2_chandra',
  yug: 'dwapar'
},
    {
  id: 'jahnu_puru',
  name: 'जह्नु',
  subtitle: 'केशिनी पुत्र',
  parent: 'ajamidha_2_chandra',
  mother: 'keshini_ajamidha_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'vraja_chandra',
  name: 'व्रज',
  subtitle: 'केशिनी पुत्र',
  parent: 'ajamidha_2_chandra',
  mother: 'keshini_ajamidha_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'rupina_chandra',
  name: 'रुपिण',
  subtitle: 'केशिनी पुत्र',
  parent: 'ajamidha_2_chandra',
  mother: 'keshini_ajamidha_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'nila_panchal',
  name: 'नील',
  subtitle: 'नीली पुत्र',
  parent: 'ajamidha_2_chandra',
  mother: 'nili_ajamidha_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'dushyanta_panchal',
  name: 'दुष्यंत (पांचाल)',
  subtitle: 'नीली पुत्र',
  parent: 'ajamidha_2_chandra',
  mother: 'nili_ajamidha_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'parameshthin_chandra',
  name: 'परमेष्ठिन्',
  subtitle: 'नीली पुत्र',
  parent: 'ajamidha_2_chandra',
  mother: 'nili_ajamidha_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'shanti_panchal',
  name: 'शान्ति',
  subtitle: 'नील पुत्र',
  parent: 'nila_panchal',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'sushanti_panchal',
  name: 'सुशान्ति',
  subtitle: 'शान्ति पुत्र',
  parent: 'shanti_panchal',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'purujanu_chandra',
  name: 'पुरुजानु',
  subtitle: 'सुशान्ति पुत्र',
  parent: 'sushanti_panchal',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'riksha_panchal',
  name: 'ऋक्ष (पांचाल)',
  subtitle: 'पुरुजानु पुत्र',
  parent: 'purujanu_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'bharmyashva_chandra',
  name: 'भर्म्याश्व',
  subtitle: 'ऋक्ष पुत्र',
  parent: 'riksha_panchal',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'mudgala_panchal',
  name: 'मुद्गल',
  subtitle: 'पांचाल (मौद्गल्य गोत्र)',
  parent: 'bharmyashva_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'srinjaya_panchal',
  name: 'सृंजय',
  subtitle: 'पांचाल',
  parent: 'bharmyashva_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'brihadishu_panchal',
  name: 'बृहदिषु',
  subtitle: 'पांचाल',
  parent: 'bharmyashva_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'yavinara_panchal',
  name: 'यवीनर',
  subtitle: 'पांचाल',
  parent: 'bharmyashva_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'kampilya_panchal',
  name: 'काम्पिल्य',
  subtitle: 'पांचाल (काम्पिल्य नगर)',
  parent: 'bharmyashva_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'menaka_mudgala_chandra',
  name: 'मेनका (अप्सरा)',
  subtitle: 'मुद्गल पत्नी',
  parent: '',
  spouseOf: 'mudgala_panchal',
  yug: 'dwapar'
},
    {
  id: 'vadhryashva_chandra',
  name: 'वध्र्यश्व',
  subtitle: 'मुद्गल पुत्र',
  parent: 'mudgala_panchal',
  mother: 'menaka_mudgala_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'divodasa_panchal',
  name: 'दिवोदास',
  subtitle: 'वध्र्यश्व पुत्र',
  parent: 'vadhryashva_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'ahalya_panchal',
  name: 'अहल्या',
  subtitle: 'गौतम ऋषि की पत्नी',
  parent: 'vadhryashva_chandra',
  spouseOf: 'gautam',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'mitrayu_chandra',
  name: 'मित्रायु',
  subtitle: 'दिवोदास पुत्र',
  parent: 'divodasa_panchal',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'chyavana_panchal',
  name: 'च्यवन (पांचाल)',
  subtitle: 'मित्रायु पुत्र',
  parent: 'mitrayu_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'sudasa_panchal',
  name: 'सुदास',
  subtitle: 'च्यवन पुत्र',
  parent: 'chyavana_panchal',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'sahadeva_panchal',
  name: 'सहदेव',
  subtitle: 'सुदास पुत्र',
  parent: 'sudasa_panchal',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'somaka_panchal',
  name: 'सोमक',
  subtitle: 'सहदेव पुत्र',
  parent: 'sahadeva_panchal',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'prishata_chandra',
  name: 'पृषत',
  subtitle: 'सोमक पुत्र',
  parent: 'somaka_panchal',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'drupada_chandra',
  name: 'द्रुपद (यज्ञसेन)',
  subtitle: 'पांचाल नरेश',
  parent: 'prishata_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'dhrishtadyumna_chandra',
  name: 'धृष्टद्युम्न',
  subtitle: 'द्रुपद पुत्र (यज्ञकुण्ड से)',
  parent: 'drupada_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'shikhandi_chandra',
  name: 'शिखंडी',
  subtitle: 'द्रुपद पुत्र/पुत्री',
  parent: 'drupada_chandra',
  yug: 'dwapar',
  parichay: 'पूर्वजन्म में अम्बा। भीष्म के वध का कारण बने।',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'satyajit_panchal',
  name: 'सत्यजित',
  subtitle: 'द्रुपद पुत्र',
  parent: 'drupada_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'yudhamanyu_chandra',
  name: 'युधामन्यु',
  subtitle: 'द्रुपद पुत्र',
  parent: 'drupada_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'uttamaujas_chandra',
  name: 'उत्तमौजस',
  subtitle: 'द्रुपद पुत्र',
  parent: 'drupada_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'ajamidha_sons_proxy',
  name: 'अजमीढ़ के अन्य पुत्र',
  subtitle: 'ऋक्ष, नील आदि',
  isProxy: true,
  parent: 'ajamidha_2_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'riksha_2_chandra',
  name: 'ऋक्ष (कुरु वंश)',
  subtitle: 'धूमिनी पुत्र',
  parent: 'ajamidha_2_chandra',
  mother: 'dhumini_ajamidha_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'samvarana_chandra',
  name: 'संवरण',
  subtitle: 'ऋक्ष पुत्र',
  parent: 'riksha_2_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'tapati_chandra',
  name: 'तपती',
  subtitle: 'संवरण पत्नी (सूर्य पुत्री)',
  parent: 'surya',
  spouseOf: 'samvarana_chandra',
  yug: 'dwapar',
  clusterName: 'सूर्य की अन्य संतति'
},
    {
  id: 'sudhanva_kuru',
  name: 'सुधन्वा',
  subtitle: 'संवरण पुत्र',
  parent: 'samvarana_chandra',
  mother: 'tapati_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'suhotra_sudhanva_chandra',
  name: 'सुहोत्र',
  subtitle: 'सुधन्वा पुत्र',
  parent: 'sudhanva_kuru',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'chyavana_magadh',
  name: 'च्यवन (मगध)',
  subtitle: 'सुहोत्र पुत्र',
  parent: 'suhotra_sudhanva_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'kriti_magadh',
  name: 'कृती',
  subtitle: 'च्यवन पुत्र',
  parent: 'chyavana_magadh',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'vasu_uparichara_chandra',
  name: 'वासु उपरिचर',
  subtitle: 'चेदि नरेश',
  parent: 'kriti_magadh',
  yug: 'dwapar',
  parichay: 'सत्यवती (मत्स्यगंधा) के पिता।',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'girika_vasu_chandra',
  name: 'गिरिका',
  subtitle: 'वासु पत्नी',
  parent: '',
  spouseOf: 'vasu_uparichara_chandra',
  yug: 'dwapar'
},
    {
  id: 'brihadratha_magadh',
  name: 'बृहद्रथ',
  subtitle: 'मगध नरेश (संस्थापक)',
  parent: 'vasu_uparichara_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'pratyagra_vasu_chandra',
  name: 'प्रत्यग्र',
  subtitle: 'वासु पुत्र',
  parent: 'vasu_uparichara_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'kushamba_vasu_chandra',
  name: 'कुशाम्ब',
  subtitle: 'वासु पुत्र',
  parent: 'vasu_uparichara_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'mavella_vasu_chandra',
  name: 'मवेल्ल',
  subtitle: 'वासु पुत्र',
  parent: 'vasu_uparichara_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'yadu_vasu_chandra',
  name: 'यदु (चेदि)',
  subtitle: 'वासु पुत्र',
  parent: 'vasu_uparichara_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'chedi_dynasty_proxy',
  name: 'चेदि वंश',
  subtitle: 'अज्ञात पीढ़ियाँ',
  parent: 'yadu_vasu_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी',
  isProxy: true,
  timeScale: 'kalpa'
},
    {
  id: 'damaghosha_chandra',
  name: 'दमघोष',
  subtitle: 'चेदि नरेश',
  parent: 'chedi_dynasty_proxy',
  gender: 'male',
  clusterName: 'नहुष चंद्रवंशी',
  yug: 'dwapar'
},
    {
  id: 'shishupala_chandra',
  name: 'शिशुपाल',
  subtitle: 'चेदि नरेश',
  parent: 'damaghosha_chandra',
  mother: 'shrutasrava_chandra',
  gender: 'male',
  yug: 'dwapar'
},
    {
  id: 'matsya_dynasty_proxy',
  name: 'मत्स्य वंश',
  subtitle: 'अज्ञात पीढ़ियाँ',
  parent: 'vasu_uparichara_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी',
  isProxy: true,
  timeScale: 'kalpa'
},
    {
  id: 'virata_matsya',
  name: 'विराट',
  subtitle: 'मत्स्य नरेश',
  parent: 'matsya_dynasty_proxy',
  gender: 'male',
  clusterName: 'नहुष चंद्रवंशी',
  yug: 'dwapar'
},
    {
  id: 'jarasandha_chandra',
  name: 'जरासंध',
  subtitle: 'मगध सम्राट',
  parent: 'brihadratha_magadh',
  yug: 'dwapar',
  parichay: 'जरा नामक राक्षसी द्वारा संधान किये जाने के कारण जरासंध कहलाये। भीम द्वारा वध।',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'sahadeva_magadh',
  name: 'सहदेव (मगध)',
  subtitle: 'जरासंध पुत्र',
  parent: 'jarasandha_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'somapi_chandra',
  name: 'सोमाधि/सोमापी',
  subtitle: 'सहदेव पुत्र',
  parent: 'sahadeva_magadh',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'shrutashravas_magadh',
  name: 'श्रुतश्रवस्',
  subtitle: 'सोमाधि पुत्र',
  parent: 'somapi_chandra',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'ayutayu_magadh',
  name: 'अयुतायु',
  subtitle: 'श्रुतश्रवस् पुत्र',
  parent: 'shrutashravas_magadh',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'niramitra_magadh',
  name: 'निरमित्र',
  subtitle: 'अयुतायु पुत्र',
  parent: 'ayutayu_magadh',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'sukshatra_magadh',
  name: 'सुक्षत्र',
  subtitle: 'निरमित्र पुत्र',
  parent: 'niramitra_magadh',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'brihatkarman_magadh',
  name: 'बृहत्कर्मन',
  subtitle: 'सुक्षत्र पुत्र',
  parent: 'sukshatra_magadh',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'senajit_magadh',
  name: 'सेनजित',
  subtitle: 'बृहत्कर्मन पुत्र',
  parent: 'brihatkarman_magadh',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'shrutanjaya_magadh',
  name: 'श्रुतंजय',
  subtitle: 'सेनजित पुत्र',
  parent: 'senajit_magadh',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'vipra_magadh',
  name: 'विप्र',
  subtitle: 'श्रुतंजय पुत्र',
  parent: 'shrutanjaya_magadh',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'shuchi_magadh',
  name: 'शुचि',
  subtitle: 'विप्र पुत्र',
  parent: 'vipra_magadh',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'kshemya_magadh',
  name: 'क्षेम्य',
  subtitle: 'शुचि पुत्र',
  parent: 'shuchi_magadh',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'suvrata_magadh',
  name: 'सुव्रत',
  subtitle: 'क्षेम्य पुत्र',
  parent: 'kshemya_magadh',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'dharma_magadh',
  name: 'धर्म',
  subtitle: 'सुव्रत पुत्र',
  parent: 'suvrata_magadh',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'sushrama_magadh',
  name: 'सुश्रम',
  subtitle: 'धर्म पुत्र',
  parent: 'dharma_magadh',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'dridhasena_magadh',
  name: 'दृढसेन',
  subtitle: 'सुश्रम पुत्र',
  parent: 'sushrama_magadh',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'sumati_magadh',
  name: 'सुमति',
  subtitle: 'दृढसेन पुत्र',
  parent: 'dridhasena_magadh',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'subala_magadh',
  name: 'सुबल',
  subtitle: 'सुमति पुत्र',
  parent: 'sumati_magadh',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'sunita_magadh',
  name: 'सुनीत',
  subtitle: 'सुबल पुत्र',
  parent: 'subala_magadh',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'satyajit_magadh',
  name: 'सत्यजित',
  subtitle: 'सुनीत पुत्र',
  parent: 'sunita_magadh',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'vishwajit_magadh',
  name: 'विश्वजित',
  subtitle: 'सत्यजित पुत्र',
  parent: 'satyajit_magadh',
  yug: 'kali',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'ripunjaya_magadh',
  name: 'रिपुंजय',
  subtitle: 'विश्वजित पुत्र',
  parent: 'vishwajit_magadh',
  yug: 'kali',
  parichay: 'बृहद्रथ वंश का अंतिम राजा, जिसे उसके मंत्री मुनिक/पुनिक ने मारकर प्रद्योत वंश की स्थापना की।',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'asti_jarasandha_chandra',
  name: 'अस्ति',
  subtitle: 'जरासंध पुत्री',
  parent: 'jarasandha_chandra',
  spouseOf: 'kamsa_ugrasen_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
},
    {
  id: 'prapti_jarasandha_chandra',
  name: 'प्राप्ति',
  subtitle: 'जरासंध पुत्री',
  parent: 'jarasandha_chandra',
  spouseOf: 'kamsa_ugrasen_chandra',
  yug: 'dwapar',
  clusterName: 'नहुष चंद्रवंशी'
}
];
