export const suryavanshData = [
    { id: 'vaivasvata_manu', name: 'वैवस्वत मनु', subtitle: 'वर्तमान मनु', parent: 'surya', yug: 'satya' },
    { id: 'shraddha_manu_wife', name: 'श्रद्धा', subtitle: 'मनु पत्नी', parent: '', spouseOf: 'vaivasvata_manu', yug: 'satya' },

    // Manu's other children
    { id: 'ila_manu_daughter', name: 'इला', subtitle: 'मनु पुत्री', parent: 'vaivasvata_manu', mother: 'shraddha_manu_wife', yug: 'satya', parichay: 'इनका विवाह बुध से हुआ और इन्होंने चंद्रवंश की स्थापना की।' },
    { id: 'nabhaga', name: 'नाभाग', subtitle: 'मनु पुत्र', parent: 'vaivasvata_manu', mother: 'shraddha_manu_wife', yug: 'satya' },
    { id: 'dhrishta', name: 'धृष्ट', subtitle: 'मनु पुत्र', parent: 'vaivasvata_manu', mother: 'shraddha_manu_wife', yug: 'satya' },
    { id: 'sharyati', name: 'शर्याति', subtitle: 'मनु पुत्र', parent: 'vaivasvata_manu', mother: 'shraddha_manu_wife', yug: 'satya' },
    { id: 'narishyanta', name: 'नरिष्यंत', subtitle: 'मनु पुत्र', parent: 'vaivasvata_manu', mother: 'shraddha_manu_wife', yug: 'satya' },
    { id: 'pramshu', name: 'प्रांशु', subtitle: 'मनु पुत्र', parent: 'vaivasvata_manu', mother: 'shraddha_manu_wife', yug: 'satya' },
    { id: 'nabhanedishta', name: 'नाभानेदिष्ट', subtitle: 'मनु पुत्र', parent: 'vaivasvata_manu', mother: 'shraddha_manu_wife', yug: 'satya' },
    { id: 'karusha', name: 'करुष', subtitle: 'मनु पुत्र', parent: 'vaivasvata_manu', mother: 'shraddha_manu_wife', yug: 'satya' },
    { id: 'prishadhra', name: 'पृषध्र', subtitle: 'मनु पुत्र', parent: 'vaivasvata_manu', mother: 'shraddha_manu_wife', yug: 'satya' },

    { id: 'ikshvaku', name: 'इक्ष्वाकु', subtitle: 'सूर्यवंश के संस्थापक', parent: 'vaivasvata_manu', mother: 'shraddha_manu_wife', yug: 'satya' },
    // Descendants of Ikshvaku
    { id: 'vikukshi', name: 'विकुक्षि', subtitle: 'शशाद', parent: 'ikshvaku', yug: 'treta', parichay: 'इक्ष्वाकु के सौ पुत्रों में ज्येष्ठ। इन्होंने सूर्यवंश को आगे बढ़ाया।' },
    { id: 'nimi', name: 'निमि', subtitle: 'विदेह वंश संस्थापक', parent: 'ikshvaku', yug: 'treta', parichay: 'इनके नाम पर विदेह या मिथिला वंश चला।' },
    { id: 'danda', name: 'दण्ड', subtitle: 'इक्ष्वाकु पुत्र', parent: 'ikshvaku', yug: 'treta', parichay: 'दंडकारण्य वन का नाम इन्हीं के नाम पर पड़ा।' },
    // Vikukshi's immediate
    { id: 'puranjaya', name: 'पुरंजय', subtitle: 'ककुत्स्थ / इन्द्रवाह', parent: 'vikukshi', yug: 'treta', parichay: 'इन्होंने देवासुर संग्राम में वृषभ रूपी इन्द्र पर बैठकर युद्ध किया था।' },
    // Vikukshi to Harishchandra (Suryavansh main line)
    { id: 'anena_surya', name: 'अनेना', subtitle: 'पुरंजय पुत्र', parent: 'puranjaya', yug: 'treta' },
    { id: 'prithu_surya', name: 'पृथु', subtitle: 'अनेना पुत्र', parent: 'anena_surya', yug: 'treta' },
    { id: 'vishvarandhi', name: 'विश्वरंधि', subtitle: 'पृथु पुत्र', parent: 'prithu_surya', yug: 'treta' },
    { id: 'chandra_surya', name: 'चंद्र', subtitle: 'विश्वरंधि पुत्र', parent: 'vishvarandhi', yug: 'treta' },
    { id: 'yuvanashva_1', name: 'युवनाश्व प्रथम', subtitle: 'चंद्र पुत्र', parent: 'chandra_surya', yug: 'treta' },
    { id: 'shravasta', name: 'श्रावस्त', subtitle: 'श्रावस्ती के संस्थापक', parent: 'yuvanashva_1', yug: 'treta' },
    { id: 'brihadashva', name: 'बृहदाश्व', subtitle: 'श्रावस्त पुत्र', parent: 'shravasta', yug: 'treta' },
    { id: 'kuvalayashva', name: 'कुवलयाश्व', subtitle: 'धुंधुमार', parent: 'brihadashva', yug: 'treta', parichay: 'धुंधु नामक राक्षस का वध करने के कारण धुंधुमार कहलाए।' },
    { id: 'dridhashva', name: 'दृढ़ाश्व', subtitle: 'धुंधुमार पुत्र', parent: 'kuvalayashva', yug: 'treta' },
    { id: 'chandrashva', name: 'चन्द्राश्व', subtitle: 'धुंधुमार पुत्र', parent: 'kuvalayashva', yug: 'treta' },
    { id: 'kapilashva', name: 'कपिलाश्व', subtitle: 'धुंधुमार पुत्र', parent: 'kuvalayashva', yug: 'treta' },

    { id: 'pramoda', name: 'प्रमोद', subtitle: 'दृढ़ाश्व पुत्र', parent: 'dridhashva', yug: 'treta' },
    { id: 'haryashva_1', name: 'हर्याश्व प्रथम', subtitle: 'प्रमोद पुत्र', parent: 'pramoda', yug: 'treta' },
    { id: 'nikumbha', name: 'निकुंभ', subtitle: 'हर्याश्व पुत्र', parent: 'haryashva_1', yug: 'treta' },
    { id: 'baharnashva', name: 'बहर्णाश्व', subtitle: 'निकुंभ पुत्र', parent: 'nikumbha', yug: 'treta' },
    { id: 'krishashva', name: 'कृशाश्व', subtitle: 'बहर्णाश्व पुत्र', parent: 'baharnashva', yug: 'treta' },
    { id: 'prasenajit_1', name: 'प्रसेनजित प्रथम', subtitle: 'कृशाश्व पुत्र', parent: 'krishashva', yug: 'treta' },
    { id: 'yuvanashva_2', name: 'युवनाश्व द्वितीय', subtitle: 'प्रसेनजित पुत्र', parent: 'prasenajit_1', yug: 'treta' },
    { id: 'mandhata', name: 'मान्धाता', subtitle: 'चक्रवर्ती सम्राट', parent: 'yuvanashva_2', yug: 'treta', parichay: 'इनका जन्म पिता युवनाश्व के गर्भ (ऋषियों के मन्त्रपूत जल पीने के कारण) से हुआ था। इन्द्र ने इन्हें अपनी उंगली चुसाकर पाला था।' },

    { id: 'bindumati', name: 'बिंदुमती', subtitle: 'मान्धाता पत्नी', parent: '', spouseOf: 'mandhata', yug: 'treta', parichay: 'यादव नरेश शशबिंदु की पुत्री।' },
    { id: 'muchukunda', name: 'मुचुकुन्द', subtitle: 'मान्धाता पुत्र', parent: 'mandhata', mother: 'bindumati', yug: 'treta', parichay: 'महान योद्धा। इन्होंने देवासुर संग्राम में देवताओं का साथ दिया था। द्वापर युग में इन्होंने अपनी दृष्टि से कालयवन को भस्म किया था।' },
    { id: 'ambarisha_mandhata', name: 'अम्बरीष', subtitle: 'मान्धाता पुत्र', parent: 'mandhata', mother: 'bindumati', yug: 'treta' },

    { id: 'purukutsa', name: 'पुरुकुत्स', subtitle: 'मान्धाता पुत्र', parent: 'mandhata', mother: 'bindumati', yug: 'treta' },
    { id: 'trasadasyu', name: 'त्रासदस्यु', subtitle: 'पुरुकुत्स पुत्र', parent: 'purukutsa', yug: 'treta' },
    { id: 'sambhuta', name: 'संभ्रुत', subtitle: 'त्रासदस्यु पुत्र', parent: 'trasadasyu', yug: 'treta' },
    { id: 'anaranya_2', name: 'अनरण्य द्वितीय', subtitle: 'संभ्रुत पुत्र', parent: 'sambhuta', yug: 'treta' },
    { id: 'prishadashva_2', name: 'पृषदाश्व', subtitle: 'अनरण्य पुत्र', parent: 'anaranya_2', yug: 'treta' },
    { id: 'haryashva_2', name: 'हर्याश्व द्वितीय', subtitle: 'पृषदाश्व पुत्र', parent: 'prishadashva_2', yug: 'treta' },
    { id: 'hastya', name: 'हस्त्य', subtitle: 'हर्याश्व पुत्र', parent: 'haryashva_2', yug: 'treta' },
    { id: 'sumana', name: 'सुमन', subtitle: 'हस्त्य पुत्र', parent: 'hastya', yug: 'treta' },
    { id: 'tridhanva', name: 'त्रिधन्वा', subtitle: 'सुमन पुत्र', parent: 'sumana', yug: 'treta' },
    { id: 'trayaruni', name: 'त्रैयारुणि', subtitle: 'त्रिधन्वा पुत्र', parent: 'tridhanva', yug: 'treta' },
    { id: 'trishanku', name: 'त्रिशंकु', subtitle: 'सत्यव्रत', parent: 'trayaruni', yug: 'treta', parichay: 'विश्वामित्र ने इन्हें सदेह स्वर्ग भेजा था, जहाँ से इन्द्र ने इन्हें उल्टा गिरा दिया। फिर विश्वामित्र ने इनके लिए अलग स्वर्ग (त्रिशंकु स्वर्ग) का निर्माण किया।' },


    // Nimi's immediate
    { id: 'mithi', name: 'मिथि', subtitle: 'विदेह / जनक', parent: 'nimi', yug: 'treta', parichay: 'ऋषियों द्वारा निमि के मृत शरीर के मंथन से उत्पन्न। इन्हीं के नाम पर मिथिला नगरी बसी।' },
    // Nimi/Mithi to Seeradhwaja Janak (Videha/Mithila Lineage)
    { id: 'udavasu', name: 'उदावसु', subtitle: 'मिथि पुत्र', parent: 'mithi', yug: 'treta' },
    { id: 'nandivardhana', name: 'नन्दिवर्धन', subtitle: 'उदावसु पुत्र', parent: 'udavasu', yug: 'treta' },
    { id: 'suketu', name: 'सुकेतु', subtitle: 'नन्दिवर्धन पुत्र', parent: 'nandivardhana', yug: 'treta' },
    { id: 'devarata', name: 'देवरात', subtitle: 'सुकेतु पुत्र', parent: 'suketu', yug: 'treta', parichay: 'इन्हीं के पास देवराज इंद्र ने भगवान शिव का महान धनुष (पिनाक) धरोहर के रूप में रखा था।' },
    { id: 'brihadratha', name: 'बृहद्रथ', subtitle: 'देवरात पुत्र', parent: 'devarata', yug: 'treta' },
    { id: 'mahavirya', name: 'महावीर', subtitle: 'बृहद्रथ पुत्र', parent: 'brihadratha', yug: 'treta' },
    { id: 'sudhriti', name: 'सुधृति', subtitle: 'महावीर पुत्र', parent: 'mahavirya', yug: 'treta' },
    { id: 'dhrishtaketu', name: 'धृष्टकेतु', subtitle: 'सुधृति पुत्र', parent: 'sudhriti', yug: 'treta' },
    { id: 'haryashva_nimi', name: 'हर्यश्व', subtitle: 'धृष्टकेतु पुत्र', parent: 'dhrishtaketu', yug: 'treta' },
    { id: 'maru', name: 'मरु', subtitle: 'हर्यश्व पुत्र', parent: 'haryashva_nimi', yug: 'treta' },
    { id: 'pratindhaka', name: 'प्रतीन्धक', subtitle: 'मरु पुत्र', parent: 'maru', yug: 'treta' },
    { id: 'kirtiratha', name: 'कीर्तिरथ', subtitle: 'प्रतीन्धक पुत्र', parent: 'pratindhaka', yug: 'treta' },
    { id: 'devamidha', name: 'देवमीढ', subtitle: 'कीर्तिरथ पुत्र', parent: 'kirtiratha', yug: 'treta' },
    { id: 'vibudha', name: 'विबुध', subtitle: 'देवमीढ पुत्र', parent: 'devamidha', yug: 'treta' },
    { id: 'mahidhrak', name: 'महिध्रक', subtitle: 'विबुध पुत्र', parent: 'vibudha', yug: 'treta' },
    { id: 'kirtirata', name: 'कीर्तिरात', subtitle: 'महिध्रक पुत्र', parent: 'mahidhrak', yug: 'treta' },
    { id: 'maharoma', name: 'महारोमा', subtitle: 'कीर्तिरात पुत्र', parent: 'kirtirata', yug: 'treta' },
    { id: 'svarnaroma', name: 'स्वर्णरोमा', subtitle: 'महारोमा पुत्र', parent: 'maharoma', yug: 'treta' },
    { id: 'hrasvaroma', name: 'ह्रस्वरोमा', subtitle: 'स्वर्णरोमा पुत्र', parent: 'svarnaroma', yug: 'treta' },
    { id: 'seeradhwaja_janak', name: 'सीरध्वज जनक', subtitle: 'माता सीता के पिता', parent: 'hrasvaroma', yug: 'treta', parichay: 'विदेहराज सीरध्वज जनक। यज्ञ भूमि जोतते समय इन्हें सीता जी प्राप्त हुई थीं।' },
    { id: 'sunayana', name: 'सुनयना', subtitle: 'जनक पत्नी', parent: '', spouseOf: 'seeradhwaja_janak', yug: 'treta' },
    { id: 'urmila', name: 'उर्मिला', subtitle: 'लक्ष्मण पत्नी', parent: 'seeradhwaja_janak', mother: 'sunayana', spouseOf: 'lakshman', yug: 'treta' },
    { id: 'kushadhwaja', name: 'कुशध्वज', subtitle: 'जनक के भ्राता', parent: 'hrasvaroma', yug: 'treta' },
    { id: 'mandavi', name: 'मांडवी', subtitle: 'भरत पत्नी', parent: 'kushadhwaja', spouseOf: 'bharat', yug: 'treta' },
    { id: 'shrutakirti', name: 'श्रुतकीर्ति', subtitle: 'शत्रुघ्न पत्नी', parent: 'kushadhwaja', spouseOf: 'shatrughna', yug: 'treta' },


    // Other sons of Ikshvaku
    { id: 'vishal', name: 'विशाल', subtitle: 'वैशाली के संस्थापक', parent: 'ikshvaku', yug: 'treta' },
    { id: 'hemachandra', name: 'हेमचन्द्र', subtitle: 'विशाल पुत्र', parent: 'vishal', yug: 'treta' },
    // Vishal to Sumati (Vaishali Lineage)
    { id: 'suchandra', name: 'सुचन्द्र', subtitle: 'हेमचन्द्र पुत्र', parent: 'hemachandra', yug: 'treta' },
    { id: 'dhumrashva', name: 'धूम्राश्व', subtitle: 'सुचन्द्र पुत्र', parent: 'suchandra', yug: 'treta' },
    { id: 'srinjaya', name: 'सृंजय', subtitle: 'धूम्राश्व पुत्र', parent: 'dhumrashva', yug: 'treta' },
    { id: 'sahadeva_vishal', name: 'सहदेव', subtitle: 'सृंजय पुत्र', parent: 'srinjaya', yug: 'treta' },
    { id: 'krishashva_vishal', name: 'कुशाश्व', subtitle: 'सहदेव पुत्र', parent: 'sahadeva_vishal', yug: 'treta' },
    { id: 'somadatta', name: 'सोमदत्त', subtitle: 'कुशाश्व पुत्र', parent: 'krishashva_vishal', yug: 'treta' },
    { id: 'kakutstha_vishal', name: 'ककुत्स्थ', subtitle: 'सोमदत्त पुत्र', parent: 'somadatta', yug: 'treta' },
    { id: 'sumati', name: 'सुमति', subtitle: 'वैशाली नरेश', parent: 'kakutstha_vishal', yug: 'treta', parichay: 'इन्होंने विश्वामित्र के साथ आए राम और लक्ष्मण का वैशाली में स्वागत किया था।' },

    { id: 'other_96_sons_ikshvaku', name: 'अन्य 96 पुत्र', subtitle: 'इक्ष्वाकु के पुत्र', parent: 'ikshvaku', yug: 'treta', parichay: 'इक्ष्वाकु के अन्य 96 पुत्र जिन्हें उत्तरापथ और दक्षिणापथ का शासक बनाया गया।', clusterName: 'इक्ष्वाकु के अन्य पुत्र' },


    // Descendants of Sharyati
    { id: 'sukanya', name: 'सुकन्या', subtitle: 'शर्याति पुत्री', parent: 'sharyati', yug: 'satya', parichay: 'इनका विवाह महर्षि च्यवन से हुआ था।' },
    { id: 'anarta', name: 'आनर्त', subtitle: 'शर्याति पुत्र', parent: 'sharyati', yug: 'satya', parichay: 'इनके नाम पर आनर्त देश (आधुनिक गुजरात का भाग) का नाम पड़ा।' },

    // Descendants of Nabhaga
    { id: 'ambarisha', name: 'अम्बरीष', subtitle: 'महान विष्णु भक्त', parent: 'nabhaga', yug: 'satya', parichay: 'दुर्वासा ऋषि के श्राप से सुदर्शन चक्र ने इनकी रक्षा की थी।' },


    { id: 'satyaratha', name: 'सत्यरथा', subtitle: 'त्रिशंकु पत्नी', parent: '', spouseOf: 'trishanku', yug: 'treta' },

    { id: 'harishchandra', name: 'हरिश्चंद्र', subtitle: 'सत्यवादी', parent: 'trishanku', mother: 'satyaratha', yug: 'treta' },

    // Harishchandra to Bhagirath Lineage
    { id: 'taramati', name: 'तारामती (शैव्या)', subtitle: 'हरिश्चंद्र पत्नी', parent: '', spouseOf: 'harishchandra', yug: 'treta' },
    { id: 'rohitashva', name: 'रोहिताश्व', subtitle: 'हरिश्चंद्र पुत्र', parent: 'harishchandra', mother: 'taramati', yug: 'treta' },
    { id: 'harita', name: 'हरित', subtitle: 'रोहिताश्व पुत्र', parent: 'rohitashva', yug: 'treta' },
    { id: 'chanchu', name: 'चंचु', subtitle: 'हरित पुत्र', parent: 'harita', yug: 'treta' },
    { id: 'sudeva', name: 'सुदेव', subtitle: 'चंचु पुत्र', parent: 'chanchu', yug: 'treta' },
    { id: 'ruruka', name: 'रुरुक', subtitle: 'सुदेव पुत्र', parent: 'sudeva', yug: 'treta' },
    { id: 'vrika', name: 'वृक', subtitle: 'रुरुक पुत्र', parent: 'ruruka', yug: 'treta' },
    { id: 'bahu', name: 'बाहु (बाहुक)', subtitle: 'वृक पुत्र', parent: 'vrika', yug: 'treta' },
    { id: 'sagara', name: 'सगर', subtitle: 'चक्रवर्ती सम्राट', parent: 'bahu', yug: 'treta', parichay: 'सगर के अश्वमेध यज्ञ का घोड़ा इंद्र ने कपिल मुनि के आश्रम में बांध दिया था।' },
    { id: 'sumati_sagara', name: 'सुमति', subtitle: 'सगर पत्नी', parent: '', spouseOf: 'sagara', yug: 'treta' },
    { id: 'keshini', name: 'केशिनी', subtitle: 'सगर पत्नी', parent: '', spouseOf: 'sagara', yug: 'treta' },
    { id: 'sagara_60000_sons', name: '60,000 पुत्र', subtitle: 'सगर पुत्र', parent: 'sagara', mother: 'sumati_sagara', yug: 'treta', parichay: 'सुमति के 60,000 पुत्र, जिन्हें कपिल मुनि ने भस्म कर दिया था।', clusterName: 'सगर के 60 हज़ार पुत्र' },
    { id: 'asamanjas', name: 'असमंजस', subtitle: 'सगर पुत्र', parent: 'sagara', mother: 'keshini', yug: 'treta' },
    { id: 'ambujakshi', name: 'अम्बुजाक्षी', subtitle: 'असमंजस पत्नी', parent: '', spouseOf: 'asamanjas', yug: 'treta' },
    { id: 'anshuman', name: 'अंशुमान', subtitle: 'असमंजस पुत्र', parent: 'asamanjas', mother: 'ambujakshi', yug: 'treta' },
    { id: 'dilipa_1', name: 'दिलीप प्रथम', subtitle: 'अंशुमान पुत्र', parent: 'anshuman', yug: 'treta' },

    { id: 'bhagirath', name: 'भगीरथ', subtitle: 'गंगा को लाने वाले', parent: 'dilipa_1', yug: 'treta' },

    // Bhagirath to Raghu Lineage
    { id: 'shruta', name: 'श्रुत', subtitle: 'भगीरथ पुत्र', parent: 'bhagirath', yug: 'treta' },
    { id: 'nabhaga_2', name: 'नाभाग (द्वितीय)', subtitle: 'श्रुत पुत्र', parent: 'shruta', yug: 'treta' },
    { id: 'ambarisha_2', name: 'अम्बरीष (द्वितीय)', subtitle: 'नाभाग पुत्र', parent: 'nabhaga_2', yug: 'treta' },
    { id: 'sindhudvipa', name: 'सिन्धुद्वीप', subtitle: 'अम्बरीष पुत्र', parent: 'ambarisha_2', yug: 'treta' },
    { id: 'ayutayu', name: 'अयुतायु', subtitle: 'सिन्धुद्वीप पुत्र', parent: 'sindhudvipa', yug: 'treta' },
    { id: 'rituparna', name: 'ऋतुपर्ण', subtitle: 'अयुतायु पुत्र', parent: 'ayutayu', yug: 'treta' },
    { id: 'sarvakama', name: 'सर्वकाम', subtitle: 'ऋतुपर्ण पुत्र', parent: 'rituparna', yug: 'treta' },
    { id: 'sudasa', name: 'सुदास', subtitle: 'सर्वकाम पुत्र', parent: 'sarvakama', yug: 'treta' },
    { id: 'mitrasaha', name: 'मित्रसह (कल्माषपाद)', subtitle: 'सुदास पुत्र', parent: 'sudasa', yug: 'treta' },
    { id: 'ashmaka', name: 'अश्मक', subtitle: 'मित्रसह पुत्र', parent: 'mitrasaha', yug: 'treta' },
    { id: 'mulaka', name: 'मूलक', subtitle: 'अश्मक पुत्र', parent: 'ashmaka', yug: 'treta' },
    { id: 'shataratha', name: 'शतरथ', subtitle: 'मूलक पुत्र', parent: 'mulaka', yug: 'treta' },
    { id: 'vishvasaha', name: 'विश्वसह', subtitle: 'शतरथ पुत्र', parent: 'shataratha', yug: 'treta' },
    { id: 'dilipa_2', name: 'दिलीप द्वितीय (खट्वांग)', subtitle: 'विश्वसह पुत्र', parent: 'vishvasaha', yug: 'treta' },
    { id: 'dirghabahu', name: 'दीर्घबाहु', subtitle: 'दिलीप पुत्र', parent: 'dilipa_2', yug: 'treta' },

    { id: 'raghu', name: 'रघु', subtitle: 'रघुवंश के संस्थापक', parent: 'dirghabahu', yug: 'treta' },
    { id: 'aja', name: 'अज', subtitle: 'रघु के पुत्र', parent: 'raghu', yug: 'treta' },
    { id: 'dasharath', name: 'दशरथ', subtitle: 'अयोध्या के चक्रवर्ती सम्राट', parent: 'aja', yug: 'treta' },

    { id: 'indumati', name: 'इन्दुमती', subtitle: 'अज पत्नी', parent: '', spouseOf: 'aja', yug: 'treta' },
    { id: 'shanta', name: 'शान्ता', subtitle: 'दशरथ पुत्री', parent: 'dasharath', yug: 'treta', parichay: 'दशरथ की पुत्री जिसे अंगदेश के राजा रोमपाद ने गोद लिया था। इनका विवाह ऋष्यशृंग मुनि से हुआ था।' },

    { id: 'kaushalya', name: 'कौशल्या', subtitle: 'राम की माता', parent: '', spouseOf: 'dasharath', yug: 'treta', clusterName: 'दशरथ की 3 पत्नियाँ' },
    { id: 'kaikeyi', name: 'कैकेयी', subtitle: 'भरत की माता', parent: '', spouseOf: 'dasharath', yug: 'treta', clusterName: 'दशरथ की 3 पत्नियाँ' },
    { id: 'sumitra', name: 'सुमित्रा', subtitle: 'लक्ष्मण/शत्रुघ्न की माता', parent: '', spouseOf: 'dasharath', yug: 'treta', clusterName: 'दशरथ की 3 पत्नियाँ' },
    { id: 'ram', name: 'राम', subtitle: 'मर्यादा पुरुषोत्तम', parent: 'dasharath', mother: 'kaushalya', yug: 'treta' },
    { id: 'bharat', name: 'भरत', subtitle: 'आदर्श भ्राता', parent: 'dasharath', mother: 'kaikeyi', yug: 'treta' },
    { id: 'lakshman', name: 'लक्ष्मण', subtitle: 'शेषनाग अवतार', parent: 'dasharath', mother: 'sumitra', yug: 'treta' },
    { id: 'shatrughna', name: 'शत्रुघ्न', subtitle: 'राम के अनुज', parent: 'dasharath', mother: 'sumitra', yug: 'treta' },
    { id: 'sita', name: 'सीता', subtitle: 'जनक नंदिनी', parent: 'seeradhwaja_janak', mother: 'sunayana', spouseOf: 'ram', yug: 'treta' },
    { id: 'luv', name: 'लव', subtitle: 'राम के पुत्र', parent: 'ram', mother: 'sita', yug: 'treta', parichay: 'लव ने लवपुरी (लाहौर) नगर की स्थापना की थी। आधुनिक काल में लेवा पाटीदार, कुर्मी, और लोहना समाज लव के वंशज माने जाते हैं। गहलौत, सिसोदिया, और सिकरवार जैसे कई राजपूत वंश भी लव के वंशज हैं।' },

    // Luv's descendants
    { id: 'sarukman', name: 'सरूक्मान', subtitle: 'लव पुत्र', parent: 'luv', yug: 'treta' },
    { id: 'luv_vanshaj_proxy', name: 'लव के वंशज', subtitle: 'सिसोदिया / राघव', parent: 'sarukman', yug: 'kali', parichay: 'राघव, बड़गुजर, सिकरवार, और सिसोदिया/गहलोत (मेवाड़) राजपूत, लेवा पाटीदार लव के वंशज माने जाते हैं।', clusterName: 'लव के वंशज' },

    { id: 'kush', name: 'कुश', subtitle: 'राम के पुत्र', parent: 'ram', mother: 'sita', yug: 'treta', parichay: 'कुश ने कुशावती नगर बसाया था। आधुनिक काल में कड़वा पाटीदार, कुशवाहा, कोएरी, मौर्य, सैनी और अग्रवाल समाज कुश के वंशज माने जाते हैं। कच्छवाहा जैसे राजपूत वंश भी कुश के वंशज हैं।' },

    // Kush's descendants (to Mahabharat era)
    { id: 'kumudvati', name: 'कुमुद्वती', subtitle: 'कुश पत्नी', parent: '', spouseOf: 'kush', yug: 'treta', parichay: 'ये एक नागकन्या थीं।' },
    { id: 'atithi', name: 'अतिथि', subtitle: 'कुश पुत्र', parent: 'kush', mother: 'kumudvati', yug: 'treta' },
    { id: 'nishadha', name: 'निषध', subtitle: 'अतिथि पुत्र', parent: 'atithi', yug: 'treta' },
    { id: 'nala', name: 'नल', subtitle: 'निषध पुत्र', parent: 'nishadha', yug: 'treta' },
    { id: 'nabhas', name: 'नभस्', subtitle: 'नल पुत्र', parent: 'nala', yug: 'treta' },
    { id: 'pundarika', name: 'पुण्डरीक', subtitle: 'नभस् पुत्र', parent: 'nabhas', yug: 'treta' },
    { id: 'kshemadhanvan', name: 'क्षेमधन्वन्', subtitle: 'पुण्डरीक पुत्र', parent: 'pundarika', yug: 'treta' },
    { id: 'devanika', name: 'देवानीक', subtitle: 'क्षेमधन्वन् पुत्र', parent: 'kshemadhanvan', yug: 'treta' },
    { id: 'ahinagu', name: 'अहीनगु', subtitle: 'देवानीक पुत्र', parent: 'devanika', yug: 'treta' },
    { id: 'paripatra', name: 'पारिपात्र', subtitle: 'अहीनगु पुत्र', parent: 'ahinagu', yug: 'treta' },
    { id: 'bala', name: 'बल', subtitle: 'पारिपात्र पुत्र', parent: 'paripatra', yug: 'dwapar' },
    { id: 'uktha', name: 'उक्थ', subtitle: 'बल पुत्र', parent: 'bala', yug: 'dwapar' },
    { id: 'vajranabha', name: 'वज्रनाभ', subtitle: 'उक्थ पुत्र', parent: 'uktha', yug: 'dwapar' },
    { id: 'shankhan', name: 'शङ्खन्', subtitle: 'वज्रनाभ पुत्र', parent: 'vajranabha', yug: 'dwapar' },
    { id: 'vyushitashva', name: 'व्युषिताश्व', subtitle: 'शङ्खन् पुत्र', parent: 'shankhan', yug: 'dwapar' },
    { id: 'vishvasaha_2', name: 'विश्वसह (द्वितीय)', subtitle: 'व्युषिताश्व पुत्र', parent: 'vyushitashva', yug: 'dwapar' },
    { id: 'hiranyabha', name: 'हिरण्याभ', subtitle: 'विश्वसह पुत्र', parent: 'vishvasaha_2', yug: 'dwapar' },
    { id: 'pushya', name: 'पुष्य', subtitle: 'हिरण्याभ पुत्र', parent: 'hiranyabha', yug: 'dwapar' },
    { id: 'dhruvasandhi', name: 'ध्रुवसन्धि', subtitle: 'पुष्य पुत्र', parent: 'pushya', yug: 'dwapar' },
    { id: 'sudarshana', name: 'सुदर्शन', subtitle: 'ध्रुवसन्धि पुत्र', parent: 'dhruvasandhi', yug: 'dwapar' },
    { id: 'agnivarna', name: 'अग्निवर्ण', subtitle: 'सुदर्शन पुत्र', parent: 'sudarshana', yug: 'dwapar' },
    { id: 'shighra', name: 'शीघ्र', subtitle: 'अग्निवर्ण पुत्र', parent: 'agnivarna', yug: 'dwapar' },
    { id: 'maru_suryavansh', name: 'मरु', subtitle: 'शीघ्र पुत्र', parent: 'shighra', yug: 'dwapar' },
    { id: 'prasushruta', name: 'प्रसुश्रुत', subtitle: 'मरु पुत्र', parent: 'maru_suryavansh', yug: 'dwapar' },
    { id: 'susandhi', name: 'सुसन्धि', subtitle: 'प्रसुश्रुत पुत्र', parent: 'prasushruta', yug: 'dwapar' },
    { id: 'amarsha', name: 'अमर्ष', subtitle: 'सुसन्धि पुत्र', parent: 'susandhi', yug: 'dwapar' },
    { id: 'vishrutavant', name: 'विश्रुतवन्त्', subtitle: 'अमर्ष पुत्र', parent: 'amarsha', yug: 'dwapar' },
    { id: 'brihadbala', name: 'बृहद्बल', subtitle: 'महाभारत योद्धा', parent: 'vishrutavant', yug: 'dwapar', parichay: 'ये महाभारत युद्ध में कौरवों की ओर से लड़े थे और अभिमन्यु के हाथों वीरगति को प्राप्त हुए थे। कछवाहा राजपूत कुश के वंशज माने जाते हैं।' },
    { id: 'raja_vallabh', name: 'महाराजा वल्लभ देव', subtitle: 'प्रतापनगर के राजा', parent: 'brihadbala', yug: 'dwapar', parichay: 'ये कुश की पीढ़ी में प्रतापनगर के सूर्यवंशी राजा थे। महाभारत युद्ध में पांडवों की ओर से लड़ते हुए वीरगति को प्राप्त हुए।' },
    { id: 'maharaja_agrasen', name: 'महाराजा अग्रसेन', subtitle: 'अग्रवाल वंश संस्थापक', parent: 'raja_vallabh', yug: 'dwapar', parichay: 'इन्होंने अग्रोहा नगर की स्थापना की और 18 गोत्रों की शुरुआत की, जिससे अग्रवाल समाज का निर्माण हुआ।', clusterName: 'कुश के अन्य वंशज' },

    { id: 'hanuman', name: 'हनुमान', subtitle: 'राम भक्त / शिव अंश', parent: 'vayu', yug: 'treta' },
    { id: 'sugriva', name: 'सुग्रीव', subtitle: 'वानरराज', parent: 'surya', yug: 'treta' },
    { id: 'ruma_wife', name: 'रूमा', subtitle: 'सुग्रीव की पत्नी', parent: '', spouseOf: 'sugriva', yug: 'treta', clusterName: 'सुग्रीव की पत्नियाँ' },
    { id: 'tara_wife', name: 'तारा', subtitle: 'सुग्रीव की पत्नी (बाली वध पश्चात्)', parent: '', spouseOf: 'sugriva', yug: 'treta', clusterName: 'सुग्रीव की पत्नियाँ' },
    { id: 'vali', name: 'बाली', subtitle: 'किष्किंधा नरेश', parent: 'indra', yug: 'treta' },
    { id: 'jatayu', name: 'जटायु', subtitle: 'गृध्रराज', parent: 'arun', yug: 'treta' }
];
