export const suryavanshData = [
    { id: 'vaivasvata_manu', name: 'वैवस्वत मनु', subtitle: 'वर्तमान मनु', parent: 'surya', yug: 'satya' },
    { id: 'shraddha_manu_wife', name: 'श्रद्धा', subtitle: 'मनु पत्नी', parent: '', spouseOf: 'vaivasvata_manu', yug: 'satya' },

    // Manu's other children

    { id: 'manu_other_sons_proxy', name: 'मनु के अन्य पुत्र', subtitle: 'इक्ष्वाकु के अतिरिक्त अन्य पुत्र', isProxy: true, parent: 'vaivasvata_manu', clusterName: 'मनु के अन्य पुत्र', yug: 'satya' },

    { id: 'sudyumna_surya', name: 'सुद्युम्न (इला)', subtitle: 'इला का पुरुष रूप', gender: 'male', parent: 'vaivasvata_manu', mother: 'shraddha_manu_wife', yug: 'satya', clusterName: 'मनु के अन्य पुत्र', parichay: 'ये मनु की पुत्री इला का पुरुष रूप थे। पुरुष रूप में इन्होंने शासन किया और इनके 3 पुत्र हुए। (जब ये स्त्री रूप में होते थे, तब इन्होंने बुध से विवाह कर पुरुरवा को जन्म दिया जो चंद्रवंश के प्रवर्तक बने)।' },
    { id: 'utkala_sudyumna', name: 'उत्कल', subtitle: 'सुद्युम्न पुत्र', gender: 'male', parent: 'sudyumna_surya', yug: 'satya', clusterName: 'मनु के अन्य पुत्र', parichay: 'इन्होंने उत्कल (वर्तमान ओडिशा) क्षेत्र की स्थापना की और वहाँ शासन किया।' },
    { id: 'gaya_sudyumna', name: 'गय', subtitle: 'सुद्युम्न पुत्र', gender: 'male', parent: 'sudyumna_surya', yug: 'satya', clusterName: 'मनु के अन्य पुत्र', parichay: 'इन्होंने गय राज्य (वर्तमान बिहार में गया) की स्थापना की।' },
    { id: 'vimala_sudyumna', name: 'विमल (विनताश्व)', subtitle: 'सुद्युम्न पुत्र', gender: 'male', parent: 'sudyumna_surya', yug: 'satya', clusterName: 'मनु के अन्य पुत्र', parichay: 'इन्होंने उत्तर-पूर्वी दिशा के राज्यों पर शासन किया। कुछ पुराणों में इन्हें विनताश्व भी कहा गया है।' },

    { id: 'nabhaga', name: 'नाभाग', subtitle: 'मनु पुत्र', parent: 'vaivasvata_manu', mother: 'shraddha_manu_wife', yug: 'satya' , clusterName: 'मनु के अन्य पुत्र' },
    { id: 'dhrishta', name: 'धृष्ट', subtitle: 'मनु पुत्र', parent: 'vaivasvata_manu', mother: 'shraddha_manu_wife', yug: 'satya' , clusterName: 'मनु के अन्य पुत्र' },
    { id: 'sharyati', name: 'शर्याति', subtitle: 'मनु पुत्र', parent: 'vaivasvata_manu', mother: 'shraddha_manu_wife', yug: 'satya' , clusterName: 'मनु के अन्य पुत्र' },
    { id: 'narishyanta', name: 'नरिष्यंत', subtitle: 'मनु पुत्र', parent: 'vaivasvata_manu', mother: 'shraddha_manu_wife', yug: 'satya' , clusterName: 'मनु के अन्य पुत्र' },
    { id: 'pramshu', name: 'प्रांशु', subtitle: 'मनु पुत्र', parent: 'vaivasvata_manu', mother: 'shraddha_manu_wife', yug: 'satya' , clusterName: 'मनु के अन्य पुत्र' },
    { id: 'nabhanedishta', name: 'नाभानेदिष्ट', subtitle: 'मनु पुत्र', parent: 'vaivasvata_manu', mother: 'shraddha_manu_wife', yug: 'satya', clusterName: 'मनु के अन्य पुत्र' },
    { id: 'karusha', name: 'करुष', subtitle: 'मनु पुत्र', parent: 'vaivasvata_manu', mother: 'shraddha_manu_wife', yug: 'satya' , clusterName: 'मनु के अन्य पुत्र' },
    { id: 'prishadhra', name: 'पृषध्र', subtitle: 'मनु पुत्र', parent: 'vaivasvata_manu', mother: 'shraddha_manu_wife', yug: 'satya' , clusterName: 'मनु के अन्य पुत्र' },
    { id: 'kavi_manu', name: 'कवि', subtitle: 'मनु पुत्र', gender: 'male', parent: 'vaivasvata_manu', mother: 'shraddha_manu_wife', yug: 'satya', clusterName: 'मनु के अन्य पुत्र', parichay: 'वैवस्वत मनु के पुत्र जिन्होंने सांसारिक मोह त्याग कर सन्यास ले लिया था।', source_texts: 'भागवत पुराण' },

    { id: 'ikshvaku', name: 'इक्ष्वाकु', subtitle: 'सूर्यवंश के संस्थापक', parent: 'vaivasvata_manu', mother: 'shraddha_manu_wife', yug: 'satya' },
    // Descendants of Ikshvaku
        { id: 'suryavansh_proxy', name: 'सूर्यवंश', subtitle: 'इक्ष्वाकु के वंशज', parent: 'ikshvaku', yug: 'satya', clusterName: 'सूर्यवंश', isProxy: true },
{ id: 'vikukshi', name: 'विकुक्षि', subtitle: 'शशाद', parent: 'suryavansh_proxy', yug: 'treta', parichay: 'इक्ष्वाकु के सौ पुत्रों में ज्येष्ठ। इन्होंने सूर्यवंश को आगे बढ़ाया।' },
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
    { id: 'nikumbha_surya', name: 'निकुंभ', subtitle: 'हर्याश्व पुत्र', parent: 'haryashva_1', yug: 'treta' },
    { id: 'baharnashva', name: 'बहर्णाश्व', subtitle: 'निकुंभ पुत्र', parent: 'nikumbha_surya', yug: 'treta' },
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
    { id: 'sukanya_surya', name: 'सुकन्या', subtitle: 'शर्याति पुत्री', parent: 'sharyati', yug: 'satya', parichay: 'इनका विवाह महर्षि च्यवन से हुआ था।' },
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
    { id: 'sagara_wives_proxy', name: 'सगर की पत्नियाँ', subtitle: 'सुमति व केशिनी', isProxy: true, parent: '', spouseOf: 'sagara', clusterName: 'सगर की पत्नियाँ', yug: 'treta' },
    { id: 'sumati_sagara', name: 'सुमति', subtitle: 'सगर पत्नी', parent: '', spouseOf: 'sagara', yug: 'treta', clusterName: 'सगर की पत्नियाँ' },
    { id: 'keshini', name: 'केशिनी', subtitle: 'सगर पत्नी', parent: '', spouseOf: 'sagara', yug: 'treta', clusterName: 'सगर की पत्नियाँ' },
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
    { id: 'taksha', name: 'तक्ष', subtitle: 'तक्षशिला के राजा', parent: 'bharat', mother: 'mandavi', yug: 'treta', parichay: 'भरत ने गंधर्वों को हराकर सिंधु नदी के पूर्वी भाग में तक्षशिला नगर बसाया और तक्ष को वहां का राजा बनाया।' },
    { id: 'pushkala', name: 'पुष्कल', subtitle: 'पुष्कलावती के राजा', parent: 'bharat', mother: 'mandavi', yug: 'treta', parichay: 'भरत ने सिंधु नदी के पश्चिमी भाग में पुष्कलावती (पेशावर) नगर बसाया और पुष्कल को वहां का राजा बनाया।' },

    // Bhalla Khatri (Descendants of Bharat)
    { id: 'bhalla_vansh_proxy', name: 'भल्ला खत्री', subtitle: 'भरत के वंशज', parent: 'bharat', yug: 'kali', clusterName: 'भल्ला खत्री (भरत वंश)', isProxy: true, parichay: 'सिख इतिहास और "बचित्तर नाटक" (दशम ग्रंथ) की परंपराओं के अनुसार, भल्ला खत्री समुदाय की उत्पत्ति भगवान राम के भ्राता भरत के वंशजों से हुई है।' },
    { id: 'guru_amar_das', name: 'श्री गुरु अमरदास जी', subtitle: 'तृतीय सिख गुरु', parent: 'bhalla_vansh_proxy', yug: 'kali', isProminent: true, clusterName: 'भल्ला खत्री (भरत वंश)', parichay: 'सिख धर्म के तीसरे गुरु। इनका जन्म भल्ला खत्री वंश में हुआ था जो भरत जी की वंशावली से संबंधित हैं।' },

    { id: 'lakshman', name: 'लक्ष्मण', subtitle: 'शेषनाग अवतार', parent: 'dasharath', mother: 'sumitra', yug: 'treta' },
    { id: 'angada_lakshman', name: 'अंगद', subtitle: 'कारुपथ के राजा', parent: 'lakshman', mother: 'urmila', yug: 'treta', parichay: 'भगवान राम ने अंगद को कारुपथ राज्य का राजा बनाया था।' },
    { id: 'chandraketu', name: 'चन्द्रकेतु', subtitle: 'चन्द्रकांति (मालवा) के राजा', parent: 'lakshman', mother: 'urmila', yug: 'treta', parichay: 'भगवान राम ने चन्द्रकेतु को चन्द्रकांति राज्य का राजा बनाया था।' },
    // Lakshman's descendants (Pratihara, Bargujar, Trehan)
    { id: 'lakshman_descendants_proxy', name: 'लक्ष्मण के वंशज', subtitle: 'प्रतिहार, बड़गूजर, त्रेहन', parent: 'lakshman', yug: 'kali', isProxy: true, clusterName: 'लक्ष्मण के वंशज', parichay: 'ऐतिहासिक शिलालेखों (जैसे मिहिर भोज का ग्वालियर शिलालेख) के अनुसार गुर्जर-प्रतिहार स्वयं को लक्ष्मण का वंशज मानते हैं। साथ ही, सिख इतिहास के अनुसार त्रेहन खत्री भी लक्ष्मण के ही वंशज हैं।' },

    // Pratihara / Parihar Rajput
    { id: 'pratihara_dynasty', name: 'गुर्जर-प्रतिहार राजवंश', subtitle: 'लक्ष्मण के वंशज', parent: 'lakshman_descendants_proxy', yug: 'kali', clusterName: 'लक्ष्मण के वंशज', parichay: '8वीं से 11वीं सदी तक उत्तर भारत के सबसे शक्तिशाली सम्राट। ग्वालियर शिलालेख के अनुसार ये लक्ष्मण के वंशज हैं क्योंकि उन्होंने राम के "प्रतिहार" (द्वारपाल) के रूप में कार्य किया था। वर्तमान "परिहार" (Parihar) राजपूत इसी वंश से हैं।' },
    { id: 'parihar_rajput', name: 'परिहार (Parihar)', subtitle: 'राजपूत गोत्र', parent: 'pratihara_dynasty', yug: 'kali', clusterName: 'लक्ष्मण के वंशज' },

    // Bargujar / Raghav lineage (Moved from Luv to Lakshman based on Epigraphy)
    { id: 'bargujar_adi', name: 'बड़गूजर (राघव) वंश', subtitle: 'लक्ष्मण के वंशज', parent: 'pratihara_dynasty', clusterName: 'लक्ष्मण के वंशज', yug: 'kali', parichay: 'राजौरगढ़ के 959 ई. के शिलालेख और ऐतिहासिक साक्ष्यों के अनुसार, बड़गूजर गुर्जर-प्रतिहारों की ही एक शाखा हैं और इस प्रकार लक्ष्मण के वंशज हैं।' },
    { id: 'raja_bagh_singh', name: 'राजा बाघ सिंह', subtitle: 'बड़गूजर राजा', parent: 'bargujar_adi', yug: 'kali', parichay: 'इन्होंने राजस्थान में बाघधरा (BaghDhara) बसाया।' },
    { id: 'raja_pratap_singh_bargujar', name: 'राजा प्रताप सिंह बड़गूजर', subtitle: 'पृथ्वीराज चौहान के सेनापति', parent: 'raja_bagh_singh', yug: 'kali', parichay: 'ये पृथ्वीराज चौहान के समकालीन और उनके सेनापतियों में से एक माने जाते हैं, जिन्होंने मुस्लिम आक्रमणकारियों से भयानक युद्ध किया।' },
    { id: 'sikarwar_rajput', name: 'सिकरवार वंश', subtitle: 'बड़गूजरों की शाखा', parent: 'raja_pratap_singh_bargujar', yug: 'kali', parichay: 'मुस्लिम आक्रमणकारियों के भारी नरसंहार से बचने और अपनी अधीनता स्वीकार न करने के संकल्प के कारण, बड़गूजरों के ही एक समूह ने अपना नाम बदलकर "सिकरवार" रख लिया था।' },
    { id: 'raja_anup_singh', name: 'राजा अनूप सिंह', subtitle: 'अनूपशहर के संस्थापक', parent: 'raja_pratap_singh_bargujar', yug: 'kali', parichay: 'इन्होंने उत्तर प्रदेश में "अनूपशहर" बसाया और वहां बड़गूजरों की एक बड़ी रियासत कायम की।' },
    { id: 'bahadur_singh_bargujar', name: 'बहादुर सिंह बड़गूजर', subtitle: 'घासेरा के शासक', parent: 'raja_anup_singh', yug: 'kali', parichay: 'इन्होंने 18वीं सदी में घासेरा (Ghasera) पर राज किया और मुगलों/जाटों से युद्ध किया।' },




    // Trehan Khatri
    { id: 'trehan_vansh_proxy', name: 'त्रेहन खत्री', subtitle: 'लक्ष्मण वंशज खत्री', parent: 'lakshman_descendants_proxy', yug: 'kali', clusterName: 'त्रेहन खत्री (लक्ष्मण वंश)', isProxy: true, parichay: 'सिख इतिहास और परम्पराओं के अनुसार, त्रेहन खत्री समुदाय की उत्पत्ति भगवान राम के अनुज लक्ष्मण के वंशजों से हुई है।' },
    { id: 'guru_angad_dev', name: 'श्री गुरु अंगद देव जी', subtitle: 'द्वितीय सिख गुरु', parent: 'trehan_vansh_proxy', yug: 'kali', isProminent: true, clusterName: 'त्रेहन खत्री (लक्ष्मण वंश)', parichay: 'सिख धर्म के दूसरे गुरु। इनका जन्म त्रेहन खत्री वंश में हुआ था जो लक्ष्मण जी की वंशावली से संबंधित हैं।' },

    { id: 'shatrughna', name: 'शत्रुघ्न', subtitle: 'राम के अनुज', parent: 'dasharath', mother: 'sumitra', yug: 'treta' },
    { id: 'subahu_shatrughna', name: 'सुबाहु', subtitle: 'मथुरा के राजा', parent: 'shatrughna', mother: 'shrutakirti', yug: 'treta', parichay: 'लवणासुर का वध करने के बाद शत्रुघ्न ने शूरसेन (मथुरा) पर अधिकार किया और सुबाहु को वहां का राजा बनाया।' },
    { id: 'shatrughati', name: 'शत्रुघाती', subtitle: 'विदिशा के राजा', parent: 'shatrughna', mother: 'shrutakirti', yug: 'treta', parichay: 'शत्रुघ्न के द्वितीय पुत्र, जिन्हें विदिशा का राजा बनाया गया था।' },

    // Bhalla Khatri (Descendants of Bharat)
    // Note: To keep the tree structured, we add Bharat's descendants under Bharat directly.

    { id: 'sita', name: 'सीता', subtitle: 'जनक नंदिनी', parent: 'seeradhwaja_janak', mother: 'sunayana', spouseOf: 'ram', yug: 'treta' },
    { id: 'luv', name: 'लव', subtitle: 'राम के पुत्र', parent: 'ram', mother: 'sita', yug: 'treta', parichay: 'लव ने लवपुरी (लाहौर) नगर की स्थापना की थी। आधुनिक काल में लेवा पाटीदार, कुर्मी, और लोहना समाज लव के वंशज माने जाते हैं। गहलौत, सिसोदिया, और सिकरवार जैसे कई राजपूत वंश भी लव के वंशज हैं।' },

    // Luv's descendants (Leva Patidar, Lohana, Sodhi Khatri)
    { id: 'luv_descendants_proxy', name: 'लव के वंशज', subtitle: 'कुर्मी, लोहाणा', parent: 'luv', yug: 'kali', clusterName: 'लव के वंशज (सूर्यवंशी)', isProxy: true },
    { id: 'leva_patidar', name: 'लेवा पाटीदार / कुर्मी', subtitle: 'लव के वंशज', parent: 'luv_descendants_proxy', clusterName: 'लव के वंशज (सूर्यवंशी)', yug: 'kali', parichay: 'लव की राजधानी लवपुरी (लाहौर) से पलायन कर गुजरात व भारत के अन्य हिस्सों में बसे लेवा पाटीदार (पटेल) और कुर्मी समाज स्वयं को लव का वंशज मानते हैं।' },
    { id: 'lohana_rajput', name: 'लोहाणा समाज', subtitle: 'सिंध-गुजरात के क्षत्रिय/वैश्य', parent: 'luv_descendants_proxy', clusterName: 'लव के वंशज (सूर्यवंशी)', yug: 'kali', parichay: 'लोहाणा समाज लवपुरी (लाहौर) के पतन के बाद सिंध और गुजरात में बसा। वे स्वयं को लव का वंशज मानते हैं।' },

    // Sodhi Khatri Lineage (from Luv - via Bachittar Natak)
    { id: 'kal_rai', name: 'कल राय', subtitle: 'लव के वंशज', parent: 'luv_descendants_proxy', yug: 'dwapar', clusterName: 'सोढी खत्री (लव वंश)', isProxy: true, parichay: 'दशम ग्रंथ के "बचित्तर नाटक" के अनुसार, लव के वंशजों में कल राय (Kal Rai) नामक राजा हुए। उनका कुश के वंशज कालकेतु (Kalket) से सत्ता के लिए युद्ध हुआ, जिसमें कल राय पराजित हुए और सनाउध (Sanaudh) चले गए।' },
    { id: 'sodhi_rao', name: 'सोढी राय (राव)', subtitle: 'सोढी वंश के प्रवर्तक', parent: 'kal_rai', yug: 'kali', clusterName: 'सोढी खत्री (लव वंश)', isProxy: true, parichay: 'कल राय ने सनाउध के राजा की पुत्री से विवाह किया, जिनसे सोढी राय का जन्म हुआ। इन्हीं के नाम पर लव के वंशजों की यह शाखा "सोढी खत्री" कहलाई।' },
    { id: 'sodhi_vansh_proxy', name: 'सोढी खत्री', subtitle: 'लव के वंशज', parent: 'sodhi_rao', yug: 'kali', clusterName: 'सोढी खत्री (लव वंश)', isProxy: true, parichay: 'चतुर्थ सिख गुरु, श्री गुरु रामदास जी से लेकर दशम गुरु, श्री गुरु गोबिंद सिंह जी तक, सभी सिख गुरु इसी सोढी वंश में जन्मे थे।' },

    // Sikh Gurus in Sodhi lineage
    { id: 'guru_ram_das', name: 'श्री गुरु रामदास जी', subtitle: 'चतुर्थ सिख गुरु', parent: 'sodhi_vansh_proxy', yug: 'kali', isProminent: true, clusterName: 'सोढी खत्री (लव वंश)' },
    { id: 'guru_arjan_dev', name: 'श्री गुरु अर्जन देव जी', subtitle: 'पंचम सिख गुरु', parent: 'guru_ram_das', yug: 'kali', isProminent: true, clusterName: 'सोढी खत्री (लव वंश)' },
    { id: 'guru_hargobind', name: 'श्री गुरु हरगोबिंद साहिब', subtitle: 'छठे सिख गुरु', parent: 'guru_arjan_dev', yug: 'kali', isProminent: true, clusterName: 'सोढी खत्री (लव वंश)' },
    { id: 'guru_har_rai', name: 'श्री गुरु हर राय जी', subtitle: 'सातवें सिख गुरु', parent: 'guru_hargobind', yug: 'kali', isProminent: true, clusterName: 'सोढी खत्री (लव वंश)' },
    { id: 'guru_har_krishan', name: 'श्री गुरु हरकृष्ण जी', subtitle: 'आठवें सिख गुरु', parent: 'guru_har_rai', yug: 'kali', isProminent: true, clusterName: 'सोढी खत्री (लव वंश)' },
    { id: 'guru_tegh_bahadur', name: 'श्री गुरु तेग बहादुर जी', subtitle: 'नौवें सिख गुरु', parent: 'guru_hargobind', yug: 'kali', isProminent: true, clusterName: 'सोढी खत्री (लव वंश)' },
    { id: 'guru_gobind_singh', name: 'श्री गुरु गोबिंद सिंह जी', subtitle: 'दशम सिख गुरु', parent: 'guru_tegh_bahadur', yug: 'kali', isProminent: true, clusterName: 'सोढी खत्री (लव वंश)' },

    // Bappa Rawal and Descendants (Guhil/Gehlot dynasty continuation)
    { id: 'bappa_rawal', name: 'बप्पा रावल (कालभोज)', subtitle: 'मेवाड़ राज्य के वास्तविक संस्थापक', parent: 'guhadatta_mewar', yug: 'kali', parichay: 'इन्होंने 8वीं शताब्दी में अरब आक्रमणकारियों को खदेड़ा, चित्तौड़ पर अधिकार किया और भगवान एकलिंग जी के महान मंदिर का निर्माण करवाया।' },
    { id: 'rana_ranasimha', name: 'रावल रणसिंह (कर्ण सिंह)', subtitle: 'शाखाओं का विभाजन', parent: 'bappa_rawal', yug: 'kali', parichay: 'इनके समय में गुहिल वंश दो शाखाओं में बंट गया: 1. रावल शाखा (क्षेमसिंह) और 2. राणा/सिसोदिया शाखा (राहप)।' },
    { id: 'mewar_dynasty', name: 'गुहिल / सिसोदिया वंश', subtitle: 'मेवाड़ राजवंश', parent: 'rana_ranasimha', yug: 'kali', clusterName: 'गुहिल (सिसोदिया) वंश', isProxy: true },

    // Rawal Branch
    { id: 'kshem_singh', name: 'रावल क्षेमसिंह', subtitle: 'रावल शाखा', parent: 'rana_ranasimha', yug: 'kali', clusterName: 'गुहिल (सिसोदिया) वंश' },
    { id: 'rawal_ratan_singh', name: 'रावल रतन सिंह', subtitle: 'चित्तौड़ के रावल', parent: 'kshem_singh', yug: 'kali', parichay: 'ये गुहिल वंश की रावल शाखा के अंतिम शासक थे। इन्होने अलाउद्दीन खिलजी के आक्रमण (1303 ई.) का डटकर सामना किया था। रानी पद्मिनी इन्ही की पत्नी थीं, जिन्होंने जौहर किया था।', clusterName: 'गुहिल (सिसोदिया) वंश' },

    // Sisodia Branch (Rana Branch)
    { id: 'rahapa', name: 'राहप', subtitle: 'राणा/सिसोदिया शाखा के संस्थापक', parent: 'rana_ranasimha', yug: 'kali', parichay: 'इन्होंने सिसोदा ग्राम में जागीर स्थापित की, जिससे इनके वंशज "सिसोदिया" कहलाए और इन्होने "राणा" की उपाधि धारण की।' },
    { id: 'lakshman_singh_sisodia', name: 'राणा लक्ष्मण सिंह', subtitle: 'सिसोदा के राणा', parent: 'rahapa', yug: 'kali', parichay: '1303 ई. में अलाउद्दीन खिलजी के खिलाफ चित्तौड़ की रक्षा करते हुए अपने 7 पुत्रों सहित वीरगति को प्राप्त हुए।' },
    { id: 'ari_singh_mewar', name: 'अरि सिंह', subtitle: 'लक्ष्मण सिंह के पुत्र', parent: 'lakshman_singh_sisodia', yug: 'kali', parichay: '1303 ई. में पिता लक्ष्मण सिंह के साथ चित्तौड़ की रक्षा करते हुए वीरगति को प्राप्त हुए।' },
    { id: 'rana_hammir_sisodia', name: 'राणा हम्मीर', subtitle: 'सिसोदिया वंश के संस्थापक', parent: 'ari_singh_mewar', yug: 'kali', parichay: 'इन्होने 1326 ई. में चित्तौड़ को तुर्कों से वापस छीना और "सिसोदिया" शाखा की पुनर्स्थापना की। इन्हें "विषम घाटी पंचानन" भी कहा जाता है।' },

    // Maratha Empire (Bhonsle Lineage from Mewar)
    { id: 'rana_ajay_singh', name: 'राणा अजय सिंह', subtitle: 'लक्ष्मण सिंह के पुत्र', parent: 'lakshman_singh_sisodia', yug: 'kali', parichay: 'चित्तौड़ के पतन के बाद इन्होने केलवाड़ा में शरण ली और अपने भतीजे हम्मीर को मेवाड़ का उत्तराधिकारी बनाया।' },
    { id: 'sajjan_singh_bhonsle', name: 'सज्जन सिंह (सुजनसिंह)', subtitle: 'भोंसले वंश के मूल पुरुष', parent: 'rana_ajay_singh', yug: 'kali', parichay: 'मेवाड़ छोड़कर दक्षिण (दक्कन) चले गए और बहमनी सुल्तानों के यहाँ सेवा दी। इन्हीं के वंशज आगे चलकर "भोंसले" कहलाए।' },
    { id: 'maratha_empire_proxy', name: 'मराठा साम्राज्य (भोंसले)', subtitle: 'शिवाजी महाराज का वंश', parent: 'sajjan_singh_bhonsle', yug: 'kali', clusterName: 'मराठा (भोंसले) वंश', isProxy: true, isProminent: true },
    { id: 'dilip_singh_bhonsle', name: 'दिलीप सिंह', subtitle: 'सज्जन सिंह पुत्र', parent: 'maratha_empire_proxy', yug: 'kali', clusterName: 'मराठा (भोंसले) वंश' },
    { id: 'sidhji_bhonsle', name: 'शिधाजी (सिधजी)', subtitle: 'दिलीप सिंह पुत्र', parent: 'dilip_singh_bhonsle', yug: 'kali', clusterName: 'मराठा (भोंसले) वंश' },
    { id: 'bhairav_singh_bhosaji', name: 'भैरव सिंह (भोसाजी)', subtitle: 'भोंसले नाम के प्रवर्तक', parent: 'sidhji_bhonsle', yug: 'kali', parichay: 'इन्हीं के नाम (भोसाजी) या "भोसावट" जागीर के नाम पर इस वंश का नाम "भोंसले" पड़ा।', clusterName: 'मराठा (भोंसले) वंश' },
    { id: 'devaraj_bhonsle', name: 'देवराज', subtitle: 'भैरव सिंह पुत्र', parent: 'bhairav_singh_bhosaji', yug: 'kali', clusterName: 'मराठा (भोंसले) वंश' },
    { id: 'bhonsle_medieval_link', name: 'ऐतिहासिक अंतराल', subtitle: 'अज्ञात पीढ़ियाँ', parent: 'devaraj_bhonsle', yug: 'kali', parichay: 'देवराज के बाद उग्रसेन, कर्ण, शुभकृष्ण, रूपसिंह, भूमिन्द्र, धापजी, खेलोजी, कर्णसिंह, सम्भाजी आदि कई पीढ़ियों का अंतराल।', clusterName: 'मराठा (भोंसले) वंश' },
    { id: 'babaji_bhonsle', name: 'बाबाजी भोंसले', subtitle: 'वेरुल के पाटिल', parent: 'bhonsle_medieval_link', yug: 'kali', parichay: 'ये औरंगाबाद के पास वेरुल (एलोरा) गाँव के पाटिल थे।', clusterName: 'मराठा (भोंसले) वंश' },
    { id: 'maloji_bhonsle', name: 'मालोजी राजे भोंसले', subtitle: 'शिवाजी के दादा', parent: 'babaji_bhonsle', yug: 'kali', parichay: 'इन्होंने अहमदनगर के निज़ामशाही सुल्तानों के यहाँ एक महान सेनापति के रूप में कार्य किया और "राजे" की उपाधि प्राप्त की।', clusterName: 'मराठा (भोंसले) वंश' },
    { id: 'shahaji_bhonsle', name: 'शाहजी राजे भोंसले', subtitle: 'शिवाजी के पिता', parent: 'maloji_bhonsle', yug: 'kali', parichay: 'एक प्रमुख मराठा सेनापति जिन्होंने अहमदनगर, बीजापुर और मुगलों की राजनीति में अहम भूमिका निभाई।', clusterName: 'मराठा (भोंसले) वंश' },
    { id: 'chhatrapati_shivaji_maharaj', name: 'छत्रपति शिवाजी महाराज', subtitle: 'मराठा साम्राज्य के संस्थापक', parent: 'shahaji_bhonsle', mother: 'jijabai_jadhav', yug: 'kali', isProminent: true, parichay: 'भारत के महानतम योद्धाओं में से एक। इन्होंने आदिलशाही और मुगल साम्राज्य से संघर्ष कर 1674 ई. में एक स्वतंत्र "हिन्दवी स्वराज्य" (मराठा साम्राज्य) की स्थापना की।', clusterName: 'मराठा (भोंसले) वंश' },
    { id: 'chhatrapati_sambhaji', name: 'छत्रपति सम्भाजी महाराज', subtitle: 'शिवाजी के ज्येष्ठ पुत्र', parent: 'chhatrapati_shivaji_maharaj', yug: 'kali', isProminent: true, parichay: 'इन्होंने अपने छोटे से शासनकाल में मुगलों से लगातार युद्ध किया और धर्म व स्वराज्य के लिए हंसते-हंसते अपना बलिदान दे दिया।', clusterName: 'मराठा (भोंसले) वंश' },
    { id: 'chhatrapati_rajaram', name: 'छत्रपति राजाराम महाराज', subtitle: 'शिवाजी के कनिष्ठ पुत्र', parent: 'chhatrapati_shivaji_maharaj', yug: 'kali', parichay: 'सम्भाजी महाराज के बाद मराठा साम्राज्य का नेतृत्व किया और जिंजी के किले से मुगलों के खिलाफ स्वतंत्रता संग्राम जारी रखा।', clusterName: 'मराठा (भोंसले) वंश' },
    { id: 'tarabai_bhosale', name: 'महारानी ताराबाई', subtitle: 'राजाराम की पत्नी', parent: '', spouseOf: 'chhatrapati_rajaram', yug: 'kali', parichay: 'छत्रपति राजाराम की मृत्यु के बाद इन्होंने मुगलों के खिलाफ मराठा स्वतंत्रता संग्राम का अत्यंत साहसपूर्ण नेतृत्व किया।', clusterName: 'मराठा (भोंसले) वंश' },
    { id: 'chhatrapati_shahu', name: 'छत्रपति शाहू महाराज', subtitle: 'सम्भाजी के पुत्र', parent: 'chhatrapati_sambhaji', yug: 'kali', parichay: 'मुगलों की कैद से छूटने के बाद इन्होंने मराठा साम्राज्य का विस्तार किया और पेशवाओं (विशेषकर बाजीराव प्रथम) को नियुक्त किया।', clusterName: 'मराठा (भोंसले) वंश' },
    { id: 'shivaji_ii', name: 'शिवाजी द्वितीय', subtitle: 'राजाराम व ताराबाई के पुत्र', parent: 'chhatrapati_rajaram', mother: 'tarabai_bhosale', yug: 'kali', clusterName: 'मराठा (भोंसले) वंश' },
    { id: 'rana_lakha', name: 'राणा लाखा', subtitle: 'मेवाड़ नरेश', parent: 'rana_hammir_sisodia', yug: 'kali', parichay: 'इन्हीं के समय में पिछोला झील का निर्माण हुआ और जावर में चांदी की खदानें मिली थीं।' },

    // Chundawat Branch
    { id: 'chundawat_dynasty_proxy', name: 'चूंडावत वंश', subtitle: 'राव चूंडा के वंशज', parent: 'rana_lakha', yug: 'kali', parichay: 'मेवाड़ के प्रथम श्रेणी के सामंत (राव चूंडा के वंशज)।', isProxy: true, clusterName: 'चूंडावत वंश' },
    { id: 'rao_chunda', name: 'राव चूंडा', subtitle: 'मेवाड़ के भीष्म पितामह', parent: 'chundawat_dynasty_proxy', yug: 'kali', parichay: 'इन्होंने अपने पिता के लिए मेवाड़ के सिंहासन का त्याग किया था। इनके वंशज "चूंडावत" (Chundawat) कहलाते हैं, जो मेवाड़ के प्रथम श्रेणी के सामंत थे।', clusterName: 'चूंडावत वंश' },

    { id: 'rana_mokal_mewar', name: 'राणा मोकल', subtitle: 'मेवाड़ नरेश', parent: 'rana_lakha', yug: 'kali' },
    { id: 'rana_kumbha', name: 'राणा कुम्भा', subtitle: 'महान निर्माता और योद्धा', parent: 'rana_mokal_mewar', yug: 'kali', parichay: 'ये स्थापत्य कला के महान संरक्षक थे। इन्होने मेवाड़ में 32 किलों (जैसे कुम्भलगढ़) का निर्माण करवाया और मालवा-गुजरात की संयुक्त सेनाओं को हराया।' },
    { id: 'rana_raimal', name: 'राणा रायमल', subtitle: 'मेवाड़ नरेश', parent: 'rana_kumbha', yug: 'kali' },
    { id: 'rana_sanga', name: 'राणा सांगा (संग्राम सिंह)', subtitle: 'हिन्दूपत', parent: 'rana_raimal', yug: 'kali', parichay: 'ये एक महान शूरवीर थे जिनके शरीर पर 80 घाव थे। इन्होने खातोली और बाड़ी के युद्धों में इब्राहिम लोदी को हराया और खानवा के युद्ध (1527) में बाबर का सामना किया।' },
    { id: 'rana_udai_singh_ii', name: 'राणा उदय सिंह (द्वितीय)', subtitle: 'उदयपुर के संस्थापक', parent: 'rana_sanga', yug: 'kali', parichay: 'इन्होंने 1559 ई. में उदयपुर शहर की स्थापना की थी।' },

    // Shaktawat Branch
        { id: 'shaktawat_dynasty_proxy', name: 'शक्तावत वंश', subtitle: 'शक्ति सिंह के वंशज', parent: 'rana_udai_singh_ii', yug: 'kali', clusterName: 'शक्तावत वंश', isProxy: true },
    { id: 'shakti_singh', name: 'शक्ति सिंह', subtitle: 'शक्तावत वंश के संस्थापक', parent: 'shaktawat_dynasty_proxy', clusterName: 'शक्तावत वंश', yug: 'kali', parichay: 'महाराणा प्रताप के भाई। इनके वंशज \"शक्तावत\" (Shaktawat) कहलाए।' },
    { id: 'shaktawat_dynasty', name: 'शक्तावत वंश', subtitle: 'सिसोदिया शाखा', parent: 'shakti_singh', yug: 'kali', clusterName: 'शक्तावत वंश' },

    { id: 'maharana_pratap', name: 'महाराणा प्रताप', subtitle: 'मेवाड़ के वीर शिरोमणि', parent: 'rana_udai_singh_ii', yug: 'kali', parichay: 'ये भारतीय इतिहास के सबसे महान योद्धाओं में से एक हैं। इन्होंने मुग़ल सम्राट अकबर की अधीनता कभी स्वीकार नहीं की और हल्दीघाटी के युद्ध (1576) में अदम्य साहस का परिचय दिया।', clusterName: 'गुहिल (सिसोदिया) वंश' },
    { id: 'amar_singh_mewar', name: 'महाराणा अमर सिंह प्रथम', subtitle: 'मेवाड़ नरेश', parent: 'maharana_pratap', yug: 'kali', parichay: 'इन्होंने अपने पिता महाराणा प्रताप के संघर्ष को जारी रखा और मुगलों के साथ कई युद्ध लड़े। इनके बाद के शासकों के वंशज \"राणावत\" (Ranawat) भी कहलाये।', clusterName: 'गुहिल (सिसोदिया) वंश' },
    { id: 'raj_singh_mewar', name: 'महाराणा राज सिंह प्रथम', subtitle: 'मेवाड़ नरेश', parent: 'amar_singh_mewar', yug: 'kali', parichay: 'इन्होंने औरंगजेब की नीतियों का कड़ा विरोध किया और राजसमंद झील का निर्माण करवाया।', clusterName: 'गुहिल (सिसोदिया) वंश' },
    { id: 'arvind_singh_mewar', name: 'अरविन्द सिंह मेवाड़', subtitle: 'वर्तमान मुखिया', parent: 'raj_singh_mewar', yug: 'kali', parichay: 'ये मेवाड़ राजघराने के वर्तमान प्रतिनिधि और एच.आर.एच. ग्रुप के अध्यक्ष हैं।', clusterName: 'गुहिल (सिसोदिया) वंश' },

    { id: 'kush', name: 'कुश', subtitle: 'राम के पुत्र', parent: 'ram', mother: 'sita', yug: 'treta', parichay: 'कुश ने कुशावती (कसूर) नगर बसाया था। आधुनिक काल में कड़वा पाटीदार, कुशवाहा, कोएरी, मौर्य, सैनी और अग्रवाल समाज कुश के वंशज माने जाते हैं। कच्छवाहा जैसे राजपूत वंश भी कुश के वंशज हैं।' },

    // Bedi Khatri Lineage (from Kush - via Bachittar Natak)
    { id: 'kush_descendants_proxy', name: 'कुश के वंशज', subtitle: 'कसूर शाखा', parent: 'kush', yug: 'dwapar', clusterName: 'बेदी खत्री (कुश वंश)', isProxy: true, parichay: 'कुश के जिन वंशजों ने अयोध्या की बजाय पंजाब (कसूर) में राज किया।' },
    { id: 'kalket', name: 'कालकेतु (कलकेत)', subtitle: 'कुश के वंशज', parent: 'kush_descendants_proxy', yug: 'dwapar', clusterName: 'बेदी खत्री (कुश वंश)', isProxy: true, parichay: '"बचित्तर नाटक" के अनुसार, इन्होंने लव के वंशज कल राय को पराजित कर लाहौर पर अधिकार किया। बाद में इनके वंशजों का राज छिन गया और वे काशी (वाराणसी) चले गए।' },
    { id: 'bedi_vansh_proxy', name: 'बेदी खत्री', subtitle: 'कुश के वंशज', parent: 'kalket', yug: 'kali', clusterName: 'बेदी खत्री (कुश वंश)', isProxy: true, parichay: 'काशी जाकर इन क्षत्रियों ने वेदों का गहन अध्ययन किया, जिसके कारण वे "वेदी" (Bedi/Baidy) कहलाए।' },

    // Guru Nanak Dev Ji Ancestors
    { id: 'baba_ram_narayan_bedi', name: 'बाबा राम नारायण बेदी', subtitle: 'गुरु नानक जी के परदादा', parent: 'bedi_vansh_proxy', yug: 'kali', clusterName: 'बेदी खत्री (कुश वंश)' },
    { id: 'baba_shiv_ram_bedi', name: 'बाबा शिव राम बेदी', subtitle: 'गुरु नानक जी के दादा', parent: 'baba_ram_narayan_bedi', yug: 'kali', clusterName: 'बेदी खत्री (कुश वंश)' },
    { id: 'mata_banarasi', name: 'माता बनारसी', subtitle: 'गुरु नानक जी की दादी', parent: '', spouseOf: 'baba_shiv_ram_bedi', yug: 'kali', clusterName: 'बेदी खत्री (कुश वंश)' },

    { id: 'kalyan_das_bedi', name: 'कल्याण दास (मेहता कालू)', subtitle: 'गुरु नानक जी के पिता', parent: 'baba_shiv_ram_bedi', mother: 'mata_banarasi', yug: 'kali', clusterName: 'बेदी खत्री (कुश वंश)' },
    { id: 'baba_lalu', name: 'बाबा लालू', subtitle: 'गुरु नानक जी के चाचा', parent: 'baba_shiv_ram_bedi', mother: 'mata_banarasi', yug: 'kali', clusterName: 'बेदी खत्री (कुश वंश)' },
    { id: 'mata_tripta', name: 'माता तृप्ता', subtitle: 'गुरु नानक जी की माता', parent: '', spouseOf: 'kalyan_das_bedi', yug: 'kali', clusterName: 'बेदी खत्री (कुश वंश)', parichay: 'माता तृप्ता जी रामा (माझा) और भाई कृष्ण जी की बहन थीं।' },

    // Guru Nanak Dev Ji & Siblings
    { id: 'bebe_nanaki', name: 'बेबे नानकी', subtitle: 'गुरु नानक जी की बहन', parent: 'kalyan_das_bedi', mother: 'mata_tripta', yug: 'kali', clusterName: 'बेदी खत्री (कुश वंश)' },
    { id: 'bhai_jai_ram', name: 'भाई जय राम', subtitle: 'बेबे नानकी के पति', parent: '', spouseOf: 'bebe_nanaki', yug: 'kali', clusterName: 'बेदी खत्री (कुश वंश)' },
    { id: 'guru_nanak_dev', name: 'श्री गुरु नानक देव जी', subtitle: 'प्रथम सिख गुरु', parent: 'kalyan_das_bedi', mother: 'mata_tripta', yug: 'kali', isProminent: true, clusterName: 'बेदी खत्री (कुश वंश)', parichay: 'सिख धर्म के संस्थापक और प्रथम गुरु। इनका जन्म तलवंडी (ननकाना साहिब) में इसी सूर्यवंशी बेदी खत्री कुल में हुआ था।' },

    // Guru Nanak Dev Ji In-laws & Wife
    { id: 'baba_mool_chand', name: 'बाबा मूल चंद', subtitle: 'गुरु नानक जी के ससुर', parent: '', yug: 'kali', clusterName: 'बेदी खत्री (कुश वंश)' },
    { id: 'mata_chando_rani', name: 'माता चंदो रानी', subtitle: 'गुरु नानक जी की सास', parent: '', spouseOf: 'baba_mool_chand', yug: 'kali', clusterName: 'बेदी खत्री (कुश वंश)' },
    { id: 'mata_sulakhni', name: 'माता सुलखनी', subtitle: 'गुरु नानक जी की पत्नी', parent: 'baba_mool_chand', mother: 'mata_chando_rani', spouseOf: 'guru_nanak_dev', yug: 'kali', clusterName: 'बेदी खत्री (कुश वंश)' },

    // Guru Nanak Dev Ji Descendants
    { id: 'baba_sri_chand', name: 'बाबा श्री चंद', subtitle: 'उदासी संप्रदाय के संस्थापक', parent: 'guru_nanak_dev', mother: 'mata_sulakhni', yug: 'kali', clusterName: 'बेदी खत्री (कुश वंश)', parichay: 'गुरु नानक देव जी के बड़े पुत्र। इन्होंने कभी विवाह नहीं किया और उदासी संप्रदाय की स्थापना की।' },
    { id: 'baba_lakhmi_das', name: 'बाबा लखमी दास', subtitle: 'गुरु नानक जी के छोटे पुत्र', parent: 'guru_nanak_dev', mother: 'mata_sulakhni', yug: 'kali', clusterName: 'बेदी खत्री (कुश वंश)', parichay: 'गुरु नानक देव जी के छोटे पुत्र। बेदी वंश इन्ही के द्वारा आगे बढ़ा।' },

    // Lineage from Baba Lakhmi Das
    { id: 'baba_dharam_chand', name: 'बाबा धरम चंद', subtitle: 'बाबा लखमी दास के पुत्र', parent: 'baba_lakhmi_das', yug: 'kali', clusterName: 'बेदी खत्री (कुश वंश)' },
    { id: 'baba_mehar_chand', name: 'बाबा मेहर चंद', subtitle: 'मेहरचंदिया बेदी शाखा', parent: 'baba_dharam_chand', yug: 'kali', clusterName: 'बेदी खत्री (कुश वंश)' },
    { id: 'baba_manik_chand', name: 'बाबा मानिक चंद', subtitle: 'मानिकचंदिया बेदी शाखा', parent: 'baba_dharam_chand', yug: 'kali', clusterName: 'बेदी खत्री (कुश वंश)' },
    { id: 'baba_dataar_chand', name: 'बाबा दातार चंद', subtitle: 'बाबा मानिक चंद के पुत्र', parent: 'baba_manik_chand', yug: 'kali', clusterName: 'बेदी खत्री (कुश वंश)' },
    { id: 'baba_pahar_chand', name: 'बाबा पहाड़ चंद', subtitle: 'बाबा दातार चंद के पुत्र', parent: 'baba_dataar_chand', yug: 'kali', clusterName: 'बेदी खत्री (कुश वंश)' },
    { id: 'baba_harkaran_chand', name: 'बाबा हरकरन चंद', subtitle: 'बाबा पहाड़ चंद के पुत्र', parent: 'baba_pahar_chand', yug: 'kali', clusterName: 'बेदी खत्री (कुश वंश)' },
    { id: 'baba_nihal_chand', name: 'बाबा निहाल चंद', subtitle: 'बाबा हरकरन चंद के पुत्र', parent: 'baba_harkaran_chand', yug: 'kali', clusterName: 'बेदी खत्री (कुश वंश)' },
    { id: 'baba_kaladhari', name: 'बाबा कलाधारी', subtitle: 'बाबा निहाल चंद के पुत्र', parent: 'baba_nihal_chand', yug: 'kali', clusterName: 'बेदी खत्री (कुश वंश)' },
    { id: 'baba_jit_singh', name: 'बाबा जीत सिंह', subtitle: 'बाबा कलाधारी के पुत्र', parent: 'baba_kaladhari', yug: 'kali', clusterName: 'बेदी खत्री (कुश वंश)' },
    { id: 'baba_sahib_singh_bedi', name: 'बाबा साहिब सिंह बेदी', subtitle: 'सिख इतिहास की सम्मानित हस्ती', parent: 'baba_jit_singh', yug: 'kali', isProminent: true, clusterName: 'बेदी खत्री (कुश वंश)', parichay: 'बाबा साहिब सिंह बेदी जी सिख इतिहास में एक अत्यंत सम्मानित हस्ती थे, जिन्होंने महाराजा रणजीत सिंह का राज्याभिषेक किया था।' },

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
    { id: 'ruru_suryavansh', name: 'रुरु', subtitle: 'अहीनगु पुत्र', parent: 'ahinagu', yug: 'treta' },
    { id: 'paripatra', name: 'पारिपात्र', subtitle: 'रुरु पुत्र', parent: 'ruru_suryavansh', yug: 'treta' },
    { id: 'shala_surya', name: 'शल', subtitle: 'पारिपात्र पुत्र', parent: 'paripatra', yug: 'treta' },
    { id: 'dala', name: 'दल', subtitle: 'शल पुत्र', parent: 'shala_surya', yug: 'treta' },
    { id: 'bala', name: 'बल', subtitle: 'दल पुत्र', parent: 'dala', yug: 'dwapar' },
    { id: 'uktha', name: 'उक्थ', subtitle: 'बल पुत्र', parent: 'bala', yug: 'dwapar' },
    { id: 'sahasrashva', name: 'सहस्राश्व', subtitle: 'उक्थ पुत्र', parent: 'uktha', yug: 'dwapar' },
    { id: 'chandravaloka', name: 'चंद्रावलोक', subtitle: 'सहस्राश्व पुत्र', parent: 'sahasrashva', yug: 'dwapar' },
    { id: 'rudraksha', name: 'रुद्राक्ष', subtitle: 'चंद्रावलोक पुत्र', parent: 'chandravaloka', yug: 'dwapar' },
    { id: 'chandragiri', name: 'चंद्रगिरि', subtitle: 'रुद्राक्ष पुत्र', parent: 'rudraksha', yug: 'dwapar' },
    { id: 'vajranabha_surya', name: 'वज्रनाभ', subtitle: 'चंद्रगिरि पुत्र', parent: 'chandragiri', yug: 'dwapar' },
    { id: 'shankhan', name: 'शङ्खन्', subtitle: 'वज्रनाभ पुत्र', parent: 'vajranabha_surya', yug: 'dwapar' },
    { id: 'vyushitashva', name: 'व्युषिताश्व', subtitle: 'शङ्खन् पुत्र', parent: 'shankhan', yug: 'dwapar' },
    { id: 'vishvasaha_2', name: 'विश्वसह (द्वितीय)', subtitle: 'व्युषिताश्व पुत्र', parent: 'vyushitashva', yug: 'dwapar' },
    { id: 'hiranyabha', name: 'हिरण्याभ', subtitle: 'विश्वसह पुत्र', parent: 'vishvasaha_2', yug: 'dwapar' },
    { id: 'pushya', name: 'पुष्य', subtitle: 'हिरण्याभ पुत्र', parent: 'hiranyabha', yug: 'dwapar' },
    { id: 'arthasiddhi', name: 'अर्थसिद्धि', subtitle: 'पुष्य पुत्र', parent: 'pushya', yug: 'dwapar' },
    { id: 'dhruvasandhi', name: 'ध्रुवसन्धि', subtitle: 'अर्थसिद्धि पुत्र', parent: 'arthasiddhi', yug: 'dwapar' },
    { id: 'sudarshana', name: 'सुदर्शन', subtitle: 'ध्रुवसन्धि पुत्र', parent: 'dhruvasandhi', yug: 'dwapar' },
    { id: 'agnivarna', name: 'अग्निवर्ण', subtitle: 'सुदर्शन पुत्र', parent: 'sudarshana', yug: 'dwapar' },
    { id: 'shighra', name: 'शीघ्र', subtitle: 'अग्निवर्ण पुत्र', parent: 'agnivarna', yug: 'dwapar' },
    { id: 'maru_suryavansh', name: 'मरु', subtitle: 'शीघ्र पुत्र', parent: 'shighra', yug: 'dwapar', parichay: 'श्रीमद्भागवत और कल्कि पुराण के अनुसार, इन्होने योग के बल से मृत्यु को जीत लिया था और आज भी कलाप ग्राम में जीवित हैं। 28वें कलियुग के अंत में ये वापस आकर नए सत्य युग में इक्ष्वाकु (सूर्य) वंश की पुनः स्थापना करेंगे।' },
    { id: 'prasushruta', name: 'प्रसुश्रुत', subtitle: 'मरु पुत्र', parent: 'maru_suryavansh', yug: 'dwapar' },
    { id: 'susandhi', name: 'सुसन्धि', subtitle: 'प्रसुश्रुत पुत्र', parent: 'prasushruta', yug: 'dwapar' },
    { id: 'amarsha', name: 'अमर्ष', subtitle: 'सुसन्धि पुत्र', parent: 'susandhi', yug: 'dwapar', kali_year: -161 },
    { id: 'vishrutavant', name: 'विश्रुतवन्त्', subtitle: 'अमर्ष पुत्र', parent: 'amarsha', yug: 'dwapar', kali_year: -131 },
    { id: 'brihadbala', name: 'बृहद्बल', subtitle: 'महाभारत योद्धा (कौरव पक्ष)', parent: 'vishrutavant', yug: 'dwapar', parichay: 'ये अयोध्या के राजा थे और महाभारत युद्ध में कौरवों की ओर से लड़े थे। ये अभिमन्यु के हाथों वीरगति को प्राप्त हुए थे। कछवाहा राजपूत कुश के वंशज माने जाते हैं।', kali_year: -101 },

    // Post-Mahabharata Ikshvaku Kings (Brihadbala to Sumitra)
    { id: 'brihatkshaya', name: 'बृहत्क्षय', subtitle: 'बृहद्बल पुत्र', parent: 'brihadbala', yug: 'kali' },
    { id: 'urukshaya', name: 'उरुक्षय', subtitle: 'बृहत्क्षय पुत्र', parent: 'brihatkshaya', yug: 'kali' },
    { id: 'vatsavyuha', name: 'वत्सव्यूह', subtitle: 'उरुक्षय पुत्र', parent: 'urukshaya', yug: 'kali' },
    { id: 'prativyoma', name: 'प्रतिव्योम', subtitle: 'वत्सव्यूह पुत्र', parent: 'vatsavyuha', yug: 'kali' },
    { id: 'divakara', name: 'दिवाकर', subtitle: 'प्रतिव्योम पुत्र', parent: 'prativyoma', yug: 'kali' },
    { id: 'sahadeva_surya', name: 'सहदेव', subtitle: 'दिवाकर पुत्र', parent: 'divakara', yug: 'kali' },
    { id: 'brihadashva_kali', name: 'बृहदश्व', subtitle: 'सहदेव पुत्र', parent: 'sahadeva_surya', yug: 'kali' },
    { id: 'bhanuratha_2', name: 'भानुरथ', subtitle: 'बृहदश्व पुत्र', parent: 'brihadashva_kali', yug: 'kali' },
    { id: 'pratitashva', name: 'प्रतीताश्व', subtitle: 'भानुरथ पुत्र', parent: 'bhanuratha_2', yug: 'kali' },
    { id: 'supratika', name: 'सुप्रतीक', subtitle: 'प्रतीताश्व पुत्र', parent: 'pratitashva', yug: 'kali' },
    { id: 'marudeva', name: 'मरुदेव', subtitle: 'सुप्रतीक पुत्र', parent: 'supratika', yug: 'kali' },
    { id: 'sunakshatra', name: 'सुनक्षत्र', subtitle: 'मरुदेव पुत्र', parent: 'marudeva', yug: 'kali' },
    { id: 'kinnara', name: 'किन्नर', subtitle: 'सुनक्षत्र पुत्र', parent: 'sunakshatra', yug: 'kali' },
    { id: 'antariksha', name: 'अन्तरिक्ष', subtitle: 'किन्नर पुत्र', parent: 'kinnara', yug: 'kali' },
    { id: 'suvarna', name: 'सुवर्ण', subtitle: 'अन्तरिक्ष पुत्र', parent: 'antariksha', yug: 'kali' },
    { id: 'amitrajit', name: 'अमित्रजित', subtitle: 'सुवर्ण पुत्र', parent: 'suvarna', yug: 'kali' },
    { id: 'brihadraja', name: 'बृहद्राज', subtitle: 'अमित्रजित पुत्र', parent: 'amitrajit', yug: 'kali' },
    { id: 'dharmin', name: 'धर्मिन्', subtitle: 'बृहद्राज पुत्र', parent: 'brihadraja', yug: 'kali' },
    { id: 'kritanjaya', name: 'कृतञ्जय', subtitle: 'धर्मिन् पुत्र', parent: 'dharmin', yug: 'kali' },
    { id: 'rananjaya', name: 'रणञ्जय', subtitle: 'कृतञ्जय पुत्र', parent: 'kritanjaya', yug: 'kali' },
    { id: 'sanjaya_surya', name: 'सञ्जय', subtitle: 'रणञ्जय पुत्र', parent: 'rananjaya', yug: 'kali' },
    { id: 'shakya_dynasty_proxy', name: 'शाक्य वंश', subtitle: 'सञ्जय के वंशज', parent: 'sanjaya_surya', yug: 'kali', parichay: 'शाक्य वंश के प्रवर्तक, जिसमें गौतम बुद्ध का जन्म हुआ।', isProxy: true, clusterName: 'शाक्य वंश' },
    { id: 'shakya_king', name: 'शाक्य', subtitle: 'सञ्जय पुत्र', parent: 'shakya_dynasty_proxy', yug: 'kali', parichay: 'पुराणों के अनुसार ये शाक्य वंश के प्रवर्तक माने गए हैं, जिसमें गौतम बुद्ध का जन्म हुआ।', clusterName: 'शाक्य वंश' },

    // Shakya Siblings (Children of King Shakya / Sihahanu)
    { id: 'shuddhodana', name: 'शुद्धोदन', subtitle: 'कपिलवस्तु के राजा', parent: 'shakya_king', yug: 'kali', parichay: 'गौतम बुद्ध के पिता।', clusterName: 'शाक्य वंश' },
    { id: 'shuklodana', name: 'शुक्लोदन', subtitle: 'शाक्य पुत्र', parent: 'shakya_king', yug: 'kali', clusterName: 'शाक्य वंश' },
    { id: 'amitodana', name: 'अमितोदन', subtitle: 'शाक्य पुत्र', parent: 'shakya_king', yug: 'kali', parichay: 'बुद्ध के चाचा और आनंद के पिता।', clusterName: 'शाक्य वंश' },
    { id: 'amita_shakya', name: 'पमिता (अमिता)', subtitle: 'शाक्य पुत्री', parent: 'shakya_king', yug: 'kali', parichay: 'बुद्ध की बुआ, जिनका विवाह कोलिय वंश के राजा सुप्पबुद्ध से हुआ था। यशोधरा और देवदत्त इन्हीं की संतान थे।', clusterName: 'शाक्य वंश' },

    { id: 'suppabuddha', name: 'सुप्पबुद्ध', subtitle: 'कोलिय राजा', parent: '', spouseOf: 'amita_shakya', yug: 'kali', parichay: 'कोलिय वंश के शासक। यशोधरा और देवदत्त के पिता।', clusterName: 'शाक्य वंश' },
    { id: 'devadatta', name: 'देवदत्त', subtitle: 'सुप्पबुद्ध पुत्र', parent: 'suppabuddha', mother: 'amita_shakya', yug: 'kali', parichay: 'बुद्ध के चचेरे भाई (बुआ के बेटे)। ये बाद में बुद्ध से ईर्ष्या करने लगे थे और उन्होंने बौद्ध संघ को तोड़ने का प्रयास किया था।', clusterName: 'शाक्य वंश' },

    { id: 'maya_devi', name: 'माया देवी', subtitle: 'शुद्धोदन पत्नी', parent: '', spouseOf: 'shuddhodana', yug: 'kali', parichay: 'गौतम बुद्ध की सगी माता, जिनका बुद्ध के जन्म के सात दिन बाद निधन हो गया था।', clusterName: 'शाक्य वंश' },
    { id: 'mahapajapati_gotami', name: 'महाप्रजापति गौतमी', subtitle: 'शुद्धोदन पत्नी', parent: '', spouseOf: 'shuddhodana', yug: 'kali', parichay: 'गौतम बुद्ध की मौसी और सौतेली माता। ये पहली महिला थीं जिन्होंने बौद्ध संघ में भिक्षुणी के रूप में प्रवेश लिया था।' },

    // Children of Shuddhodana
    { id: 'siddhartha_buddha', name: 'सिद्धार्थ (गौतम बुद्ध)', subtitle: 'बौद्ध धर्म के संस्थापक', parent: 'shuddhodana', mother: 'maya_devi', yug: 'kali', parichay: 'हालाँकि बौद्ध ग्रंथ इनका वंश इक्ष्वाकु (ओक्काक) से जोड़ते हैं, लेकिन पुराणों में इन्हें सीधे इसी अयोध्या वंशावली में लिखा गया है। ज्ञान प्राप्ति के बाद ये बुद्ध कहलाये।', clusterName: 'शाक्य वंश' },
    { id: 'nanda_shakya', name: 'नन्द', subtitle: 'शुद्धोदन पुत्र', parent: 'shuddhodana', mother: 'mahapajapati_gotami', yug: 'kali', parichay: 'गौतम बुद्ध के सौतेले भाई। बाद में इन्होंने भी बुद्ध से दीक्षा लेकर भिक्षु जीवन अपना लिया था।', clusterName: 'शाक्य वंश' },
    { id: 'sundari_nanda', name: 'सुंदरी नंदा', subtitle: 'शुद्धोदन पुत्री', parent: 'shuddhodana', mother: 'mahapajapati_gotami', yug: 'kali', parichay: 'बुद्ध की सौतेली बहन।', clusterName: 'शाक्य वंश' },

    // Family of Buddha
    { id: 'yashodhara', name: 'यशोधरा', subtitle: 'गौतम बुद्ध की पत्नी', parent: 'suppabuddha', mother: 'amita_shakya', spouseOf: 'siddhartha_buddha', yug: 'kali', parichay: 'सिद्धार्थ (बुद्ध) की पत्नी और कोलिय राजा सुप्पबुद्ध की पुत्री। ये देवदत्त की सगी बहन थीं।', clusterName: 'शाक्य वंश' },
    { id: 'rahula', name: 'राहुल', subtitle: 'सिद्धार्थ पुत्र', parent: 'siddhartha_buddha', mother: 'yashodhara', yug: 'kali', parichay: 'गौतम बुद्ध के इकलौते पुत्र, जो बाद में अपने पिता के शिष्य (भिक्षु) बन गए।', clusterName: 'शाक्य वंश' },

    // Children of Amitodana (Buddha's cousins)
    { id: 'ananda_shakya', name: 'आनंद', subtitle: 'अमितोदन पुत्र', parent: 'amitodana', yug: 'kali', parichay: 'गौतम बुद्ध के चचेरे भाई और उनके सबसे प्रिय व प्रमुख शिष्य। इन्होने ही बुद्ध के अधिकांश उपदेशों को कंठस्थ किया था।', clusterName: 'शाक्य वंश' },
    { id: 'anuruddha', name: 'अनुरुद्ध', subtitle: 'अमितोदन पुत्र', parent: 'amitodana', yug: 'kali', parichay: 'बुद्ध के चचेरे भाई और प्रमुख भिक्षु।', clusterName: 'शाक्य वंश' },

    { id: 'prasenajit', name: 'प्रसेनजित', subtitle: 'राहुल पुत्र', parent: 'rahula', yug: 'kali', parichay: 'पुराणों के अनुसार राहुल के पुत्र। (हालाँकि बौद्ध ग्रंथों में प्रसेनजित कोशल के एक समकालीन राजा थे)।', clusterName: 'शाक्य वंश' },

    // Maurya Dynasty (Branched from Shakya/Ikshvaku line)
    { id: 'moriya_clan', name: 'मोरिय (मौर्य) वंश', subtitle: 'शाक्य वंश की शाखा', parent: 'shakya_king', yug: 'kali', parichay: 'बौद्ध ग्रंथों (महावंश) के अनुसार, कोशल नरेश विडूडभ के आक्रमण से बचकर कुछ शाक्य हिमालय की तराई में पिप्पलीवन चले गए थे। मोरों (Peacocks) की अधिकता के कारण वे \"मोरिय\" या मौर्य कहलाये।', clusterName: 'मौर्य वंश' },
        { id: 'maurya_dynasty_proxy', name: 'मौर्य वंश', subtitle: 'चन्द्रगुप्त के वंशज', parent: 'moriya_clan', yug: 'kali', clusterName: 'मौर्य वंश', isProxy: true },
    { id: 'chandragupta_maurya', name: 'चन्द्रगुप्त मौर्य', subtitle: 'मौर्य साम्राज्य के संस्थापक', parent: 'maurya_dynasty_proxy', clusterName: 'मौर्य वंश', yug: 'kali', parichay: 'इन्होंने चाणक्य की सहायता से नंद वंश का नाश किया और भारत के सबसे विशाल मौर्य साम्राज्य की स्थापना की। वर्तमान में "कुशवाहा, कोइरी, काछी, सैनी और शाक्य/मौर्य" कृषक समाज गर्व से इसी वंश (कुश->शाक्य->मौर्य) से अपनी उत्पत्ति मानते हैं।' },
    { id: 'bindusara', name: 'बिन्दुसार', subtitle: 'चन्द्रगुप्त पुत्र', parent: 'chandragupta_maurya', yug: 'kali', clusterName: 'मौर्य वंश' },
    { id: 'ashoka_great', name: 'सम्राट अशोक', subtitle: 'महान मौर्य सम्राट', parent: 'bindusara', clusterName: 'मौर्य वंश', yug: 'kali', parichay: 'ये भारत के सबसे महान सम्राटों में से एक थे। कलिंग युद्ध के बाद इन्होंने बौद्ध धर्म अपना लिया और शांति व धम्म का प्रचार किया।' },
    { id: 'brihadratha_maurya', name: 'बृहद्रथ मौर्य', subtitle: 'अंतिम मौर्य सम्राट', parent: 'ashoka_great', clusterName: 'मौर्य वंश', yug: 'kali', parichay: 'ये अंतिम मौर्य सम्राट थे, जिनकी हत्या उनके सेनापति पुष्यमित्र शुंग ने की थी।' },
    { id: 'kshudraka', name: 'क्षुद्रक', subtitle: 'प्रसेनजित पुत्र', parent: 'prasenajit', yug: 'kali' },
    { id: 'kundaka', name: 'कुण्डक', subtitle: 'क्षुद्रक पुत्र', parent: 'kshudraka', yug: 'kali' },
    { id: 'suratha', name: 'सुरथ', subtitle: 'कुण्डक पुत्र', parent: 'kundaka', yug: 'kali' },
    { id: 'sumitra_king', name: 'सुमित्र', subtitle: 'इक्ष्वाकु वंश के अंतिम राजा', parent: 'suratha', yug: 'kali', parichay: 'पुराणों के अनुसार सुमित्र इक्ष्वाकु/सूर्यवंश के अंतिम प्रतापी राजा थे। नंद वंश के महापद्म नंद ने इन्हें पराजित कर कोशल को मगध साम्राज्य में मिला लिया था।' },

    // Migration of Suryavanshis (Origins of Punjabi Hindus: Khatri, Arora)
    { id: 'suryavanshi_migration_nw', name: 'उत्तर-पश्चिम पलायन', subtitle: 'मगध से सिंध/पंजाब', parent: 'sumitra_king', yug: 'kali', isProxy: true, clusterName: 'पंजाबी हिंदू शाखाएं', lineLabel: 'सिंध/पंजाब प्रवासन', parichay: 'सुमित्र के बाद मगध साम्राज्य (नंद/मौर्य) के उदय के समय, कई क्षत्रिय अपनी स्वतंत्रता बनाए रखने के लिए उत्तर-पश्चिम (सिंध, पंजाब) की ओर पलायन कर गए। इन्हीं से खत्री और अरोड़ा समुदायों की उत्पत्ति हुई।' },

    // Arora Branch
    { id: 'arora_vansh_proxy', name: 'अरोड़ा वंश', subtitle: 'सिंध/मुल्तान शाखा', parent: 'suryavanshi_migration_nw', yug: 'kali', isProxy: true, clusterName: 'अरोड़ा वंश', lineLabel: 'अरोड़ा', parichay: 'जो क्षत्रिय सिंध के प्रचीन शहर "अरोर" (Alor) में बसे और कालान्तर में व्यापार अपनाया, वे अरोड़ा कहलाये।' },
    { id: 'arora_general', name: 'अरोड़ा (Arora)', subtitle: 'मूल सरनेम', parent: 'arora_vansh_proxy', yug: 'kali', clusterName: 'अरोड़ा वंश' },
    { id: 'arora_khaneja', name: 'खनेजा (Khaneja)', subtitle: 'अरोड़ा सरनेम', parent: 'arora_vansh_proxy', yug: 'kali', clusterName: 'अरोड़ा वंश' },
    { id: 'arora_taneja', name: 'तनेजा (Taneja)', subtitle: 'अरोड़ा सरनेम', parent: 'arora_vansh_proxy', yug: 'kali', clusterName: 'अरोड़ा वंश' },
    { id: 'arora_ahuja', name: 'आहूजा (Ahuja)', subtitle: 'अरोड़ा सरनेम', parent: 'arora_vansh_proxy', yug: 'kali', clusterName: 'अरोड़ा वंश' },
    { id: 'arora_batra', name: 'बत्रा (Batra)', subtitle: 'अरोड़ा सरनेम', parent: 'arora_vansh_proxy', yug: 'kali', clusterName: 'अरोड़ा वंश' },
    { id: 'arora_mukhija', name: 'मुखीजा (Mukhija)', subtitle: 'अरोड़ा सरनेम', parent: 'arora_vansh_proxy', yug: 'kali', clusterName: 'अरोड़ा वंश' },
    { id: 'arora_dhingra', name: 'ढींगरा (Dhingra)', subtitle: 'अरोड़ा सरनेम', parent: 'arora_vansh_proxy', yug: 'kali', clusterName: 'अरोड़ा वंश' },
    { id: 'arora_chawla', name: 'चावला (Chawla)', subtitle: 'अरोड़ा सरनेम', parent: 'arora_vansh_proxy', yug: 'kali', clusterName: 'अरोड़ा वंश' },
    { id: 'arora_narang', name: 'नारंग (Narang)', subtitle: 'अरोड़ा सरनेम', parent: 'arora_vansh_proxy', yug: 'kali', clusterName: 'अरोड़ा वंश' },
    { id: 'arora_gagneja', name: 'गगनेजा (Gagneja)', subtitle: 'अरोड़ा सरनेम', parent: 'arora_vansh_proxy', yug: 'kali', clusterName: 'अरोड़ा वंश' },
    { id: 'arora_kalra', name: 'कालरा (Kalra)', subtitle: 'अरोड़ा सरनेम', parent: 'arora_vansh_proxy', yug: 'kali', clusterName: 'अरोड़ा वंश' },
    { id: 'arora_wadhwa', name: 'वाधवा (Wadhwa)', subtitle: 'अरोड़ा सरनेम', parent: 'arora_vansh_proxy', yug: 'kali', clusterName: 'अरोड़ा वंश' },
    { id: 'arora_bajaj', name: 'बजाज (Bajaj)', subtitle: 'अरोड़ा सरनेम', parent: 'arora_vansh_proxy', yug: 'kali', clusterName: 'अरोड़ा वंश' },
    { id: 'arora_makkar', name: 'मक्कड़ (Makkar)', subtitle: 'अरोड़ा सरनेम', parent: 'arora_vansh_proxy', yug: 'kali', clusterName: 'अरोड़ा वंश' },
    { id: 'arora_grover', name: 'ग्रोवर (Grover)', subtitle: 'अरोड़ा सरनेम', parent: 'arora_vansh_proxy', yug: 'kali', clusterName: 'अरोड़ा वंश' },
    { id: 'arora_juneja', name: 'जुनेजा (Juneja)', subtitle: 'अरोड़ा सरनेम', parent: 'arora_vansh_proxy', yug: 'kali', clusterName: 'अरोड़ा वंश' },
    { id: 'arora_raheja', name: 'रहेजा (Raheja)', subtitle: 'अरोड़ा सरनेम', parent: 'arora_vansh_proxy', yug: 'kali', clusterName: 'अरोड़ा वंश' },

    // Standard Khatri Branch
    { id: 'khatri_vansh_proxy', name: 'खत्री वंश', subtitle: 'पंजाब शाखा', parent: 'suryavanshi_migration_nw', yug: 'kali', isProxy: true, clusterName: 'खत्री वंश', lineLabel: 'खत्री', parichay: 'ये मध्य पंजाब और लाहौर के आस-पास बसे क्षत्रिय थे, जिन्होंने प्रशासन, सिख साम्राज्य और व्यापार में प्रमुख भूमिका निभाई।' },
    { id: 'khatri_kapoor', name: 'कपूर (Kapoor)', subtitle: 'खत्री सरनेम', parent: 'khatri_vansh_proxy', yug: 'kali', clusterName: 'खत्री वंश' },
    { id: 'khatri_khanna', name: 'खन्ना (Khanna)', subtitle: 'खत्री सरनेम', parent: 'khatri_vansh_proxy', yug: 'kali', clusterName: 'खत्री वंश' },
    { id: 'khatri_malhotra', name: 'मल्होत्रा / मेहरा', subtitle: 'खत्री सरनेम', parent: 'khatri_vansh_proxy', yug: 'kali', clusterName: 'खत्री वंश' },
    { id: 'khatri_seth', name: 'सेठ (Seth)', subtitle: 'खत्री सरनेम', parent: 'khatri_vansh_proxy', yug: 'kali', clusterName: 'खत्री वंश' },
    { id: 'khatri_chopra', name: 'चोपड़ा (Chopra)', subtitle: 'खत्री सरनेम', parent: 'khatri_vansh_proxy', yug: 'kali', clusterName: 'खत्री वंश' },
    { id: 'khatri_dhawan', name: 'धवन (Dhawan)', subtitle: 'खत्री सरनेम', parent: 'khatri_vansh_proxy', yug: 'kali', clusterName: 'खत्री वंश' },
    { id: 'khatri_sehgal', name: 'सहगल (Sehgal)', subtitle: 'खत्री सरनेम', parent: 'khatri_vansh_proxy', yug: 'kali', clusterName: 'खत्री वंश' },
    { id: 'khatri_talwar', name: 'तलवार (Talwar)', subtitle: 'खत्री सरनेम', parent: 'khatri_vansh_proxy', yug: 'kali', clusterName: 'खत्री वंश' },
    { id: 'khatri_tandon', name: 'टंडन (Tandon)', subtitle: 'खत्री सरनेम', parent: 'khatri_vansh_proxy', yug: 'kali', clusterName: 'खत्री वंश' },
    { id: 'khatri_vohra', name: 'वोहरा (Vohra)', subtitle: 'खत्री सरनेम', parent: 'khatri_vansh_proxy', yug: 'kali', clusterName: 'खत्री वंश' },
    { id: 'khatri_nayyar', name: 'नैय्यर (Nayyar)', subtitle: 'खत्री सरनेम', parent: 'khatri_vansh_proxy', yug: 'kali', clusterName: 'खत्री वंश' },
    { id: 'khatri_wadhawan', name: 'वधावन (Wadhawan)', subtitle: 'खत्री सरनेम', parent: 'khatri_vansh_proxy', yug: 'kali', clusterName: 'खत्री वंश' },

    // Khokhran Khatri Branch
    { id: 'khokhran_khatri_proxy', name: 'खोखराण खत्री', subtitle: 'सॉल्ट रेंज योद्धा', parent: 'suryavanshi_migration_nw', yug: 'kali', isProxy: true, clusterName: 'खोखराण खत्री', lineLabel: 'खोखराण', parichay: 'ये खत्रियों का वह समूह है जो उत्तर-पश्चिम सीमांत (सॉल्ट रेंज, रावलपिंडी) में रहे और गज़नवी तथा स्थानीय कबाइलों के विरुद्ध भयंकर युद्ध लड़े।' },
    { id: 'khokhran_anand', name: 'आनंद (Anand)', subtitle: 'खोखराण सरनेम', parent: 'khokhran_khatri_proxy', yug: 'kali', clusterName: 'खोखराण खत्री' },
    { id: 'khokhran_bhasin', name: 'भसीन (Bhasin)', subtitle: 'खोखराण सरनेम', parent: 'khokhran_khatri_proxy', yug: 'kali', clusterName: 'खोखराण खत्री' },
    { id: 'khokhran_chadha', name: 'चड्ढा (Chadha)', subtitle: 'खोखराण सरनेम', parent: 'khokhran_khatri_proxy', yug: 'kali', clusterName: 'खोखराण खत्री' },
    { id: 'khokhran_kohli', name: 'कोहली (Kohli)', subtitle: 'खोखराण सरनेम', parent: 'khokhran_khatri_proxy', yug: 'kali', clusterName: 'खोखराण खत्री' },
    { id: 'khokhran_sabharwal', name: 'सभरवाल (Sabharwal)', subtitle: 'खोखराण सरनेम', parent: 'khokhran_khatri_proxy', yug: 'kali', clusterName: 'खोखराण खत्री' },
    { id: 'khokhran_sahni', name: 'साहनी (Sahni)', subtitle: 'खोखराण सरनेम', parent: 'khokhran_khatri_proxy', yug: 'kali', clusterName: 'खोखराण खत्री' },
    { id: 'khokhran_suri', name: 'सूरी (Suri)', subtitle: 'खोखराण सरनेम', parent: 'khokhran_khatri_proxy', yug: 'kali', clusterName: 'खोखराण खत्री' },
    { id: 'khokhran_sethi', name: 'सेठी (Sethi)', subtitle: 'खोखराण सरनेम', parent: 'khokhran_khatri_proxy', yug: 'kali', clusterName: 'खोखराण खत्री' },
    { id: 'khokhran_basi', name: 'बासी (Basi)', subtitle: 'खोखराण सरनेम', parent: 'khokhran_khatri_proxy', yug: 'kali', clusterName: 'खोखराण खत्री' },
    { id: 'khokhran_chandok', name: 'चंडोक (Chandok)', subtitle: 'खोखराण सरनेम', parent: 'khokhran_khatri_proxy', yug: 'kali', clusterName: 'खोखराण खत्री' },
    { id: 'khokhran_ghai', name: 'घई (Ghai)', subtitle: 'खोखराण सरनेम', parent: 'khokhran_khatri_proxy', yug: 'kali', clusterName: 'खोखराण खत्री' },
    { id: 'khokhran_lamba', name: 'लाम्बा (Lamba)', subtitle: 'खोखराण सरनेम', parent: 'khokhran_khatri_proxy', yug: 'kali', clusterName: 'खोखराण खत्री' },

    // Descendants of Sumitra leading to Mewar (According to Raj Prashasti)
    { id: 'vajranabh', name: 'वज्रनाभ', subtitle: 'सुमित्र पुत्र', parent: 'sumitra_king', yug: 'kali' },
    { id: 'maharathi', name: 'महारथी', subtitle: 'वज्रनाभ पुत्र', parent: 'vajranabh', yug: 'kali' },
    { id: 'atirathi', name: 'अतिरथी', subtitle: 'महारथी पुत्र', parent: 'maharathi', yug: 'kali' },
    { id: 'achalasen', name: 'अचलसेन', subtitle: 'अतिरथी पुत्र', parent: 'atirathi', yug: 'kali' },

    // Guhila / Sisodia Dynasty of Mewar (Origin Debate: Luv vs Kusha)
    { id: 'kanaksen', name: 'कनकसेन', subtitle: 'वल्लभी के संस्थापक', parent: 'achalasen', yug: 'kali', parichay: 'ऐतिहासिक डिबेट: कर्नल टॉड के अनुसार कनकसेन लव के वंशज थे जो लाहौर से गुजरात आये। लेकिन मेवाड़ के आधिकारिक "राज प्रशस्ति" शिलालेख के अनुसार, कनकसेन कुश के वंशज राजा सुमित्र की लाइन (सुमित्र -> वज्रनाभ -> महारथी -> अतिरथी -> अचलसेन -> कनकसेन) से आते हैं। इन्होंने सौराष्ट्र में वल्लभी (Vallabhi) राज्य की स्थापना की।' },
    { id: 'shiladitya_vallabhi', name: 'शीलादित्य', subtitle: 'वल्लभी के अंतिम शासक', parent: 'kanaksen', yug: 'kali', parichay: 'ये वल्लभी के अंतिम राजा थे। अरब आक्रमण के समय वल्लभी के पतन के बाद इनकी रानी पुष्पावती ने एक गुफा में पुत्र को जन्म दिया।' },
    { id: 'guhadatta_mewar', name: 'गुहादित्य (गुहिल)', subtitle: 'गुहिल वंश के संस्थापक', parent: 'shiladitya_vallabhi', yug: 'kali', parichay: 'ये वल्लभी के अंतिम राजा शीलादित्य और रानी पुष्पावती के पुत्र थे। गुफा में जन्म लेने के कारण इनका नाम गुहादित्य पड़ा। इन्होने ईडर (मेवाड़) में गुहिल (गहलोत) राजवंश की नींव रखी। इनके वंशज आगे चलकर गुहिल या गहलोत कहलाए।' },

    // Dogra / Jamwal Dynasty (Descendants of Ayodhya Kings in Jammu)
    { id: 'jamval_dynasty_proxy', name: 'जम्वाल (डोगरा) वंश', subtitle: 'अग्निगर्भ के वंशज', parent: 'sumitra_king', yug: 'kali', isProxy: true, clusterName: 'जम्वाल (डोगरा) वंश', lineLabel: 'जम्वाल वंश' },
    { id: 'agnigarbha_jammu', name: 'अग्निगर्भ', subtitle: 'जम्वाल वंश के आदि पुरुष', parent: 'jamval_dynasty_proxy', yug: 'kali', parichay: 'ये अयोध्या के सूर्यवंशी राजाओं (कुश के वंशज) के प्रतापी राजकुमार थे, जो अयोध्या से पलायन कर शिवालिक की पहाड़ियों में आ बसे। डोगरा इतिहास (गुलाबनामा) के अनुसार इन्होंने ही यहाँ अपना राज्य स्थापित किया।', clusterName: 'जम्वाल (डोगरा) वंश' },
    { id: 'bahu_lochan', name: 'बाहु लोचन', subtitle: 'बाहु नगर के संस्थापक', parent: 'agnigarbha_jammu', yug: 'kali', parichay: 'अग्निगर्भ के ज्येष्ठ पुत्र। इन्होंने तवी नदी के किनारे बाहु किला (Bahu Fort) बनवाया और बाहु नगर बसाया।' },
    { id: 'jambu_lochan', name: 'जम्बू लोचन', subtitle: 'जम्मू के संस्थापक', parent: 'agnigarbha_jammu', yug: 'kali', parichay: 'इन्होंने एक शेर और बकरी को एक ही घाट पर पानी पीते देखा, जिससे प्रभावित होकर इन्होंने जम्मू (Jambu) शहर की स्थापना की। इनके वंशज आगे चलकर "जम्वाल" या डोगरा राजपूत कहलाये।', clusterName: 'जम्वाल (डोगरा) वंश' },
    { id: 'dhruv_dev', name: 'राजा ध्रुव देव', subtitle: 'जम्मू नरेश', parent: 'jambu_lochan', yug: 'kali', clusterName: 'जम्वाल (डोगरा) वंश' },
    { id: 'ranjit_dev', name: 'राजा रणजीत देव', subtitle: 'जम्मू नरेश', parent: 'dhruv_dev', yug: 'kali', parichay: 'ये जम्मू के अत्यंत प्रसिद्ध और न्यायप्रिय राजा थे, जिनके समय में जम्मू ने बहुत समृद्धि देखी।' },
    { id: 'surat_singh', name: 'सूरत सिंह', subtitle: 'ध्रुव देव पुत्र', parent: 'dhruv_dev', yug: 'kali' },
    { id: 'zorawar_singh_jammu', name: 'ज़ोरावर सिंह', subtitle: 'सूरत सिंह पुत्र', parent: 'surat_singh', yug: 'kali' },
    { id: 'kishore_singh', name: 'किशोर सिंह', subtitle: 'ज़ोरावर सिंह पुत्र', parent: 'zorawar_singh_jammu', yug: 'kali' },
    { id: 'gulab_singh', name: 'महाराजा गुलाब सिंह', subtitle: 'J&K के संस्थापक', parent: 'kishore_singh', yug: 'kali', parichay: 'इन्होंने 1846 में अंग्रेजों के साथ अमृतसर की संधि करके जम्मू और कश्मीर (J&K) की एक स्वतंत्र और विशाल डोगरा रियासत की स्थापना की।' },
    { id: 'ranbir_singh', name: 'महाराजा रणबीर सिंह', subtitle: 'J&K नरेश', parent: 'gulab_singh', yug: 'kali' },
    { id: 'pratap_singh_dogra', name: 'महाराजा प्रताप सिंह', subtitle: 'J&K नरेश', parent: 'ranbir_singh', yug: 'kali' },
    { id: 'hari_singh', name: 'महाराजा हरि सिंह', subtitle: 'J&K के अंतिम शासक', parent: 'ranbir_singh', yug: 'kali', parichay: 'ये जम्मू और कश्मीर के अंतिम डोगरा महाराजा थे। इन्होंने ही 26 अक्टूबर 1947 को भारत संघ में J&K के विलय (Instrument of Accession) पर हस्ताक्षर किए थे।' },
    { id: 'karan_singh', name: 'डॉ. कर्ण सिंह', subtitle: 'हरि सिंह पुत्र', parent: 'hari_singh', yug: 'kali', parichay: 'ये जम्मू और कश्मीर रियासत के युवराज (Crown Prince) और भारत के एक प्रमुख राजनेता और विद्वान हैं।' },

    // Rathore / Gahadavala Dynasty (Descendants of Sumitra/Kusha leading to Kannauj and Marwar)
    { id: 'gaharwar_dynasty_proxy', name: 'गहरवार वंश', subtitle: 'यशोविग्रह वंश', parent: 'sumitra_king', yug: 'kali', isProxy: true, clusterName: 'गहरवार वंश', lineLabel: 'गहरवार वंश' },
    { id: 'yashovigraha', name: 'यशोविग्रह', subtitle: 'गहरवार वंश के आदि पुरुष', parent: 'gaharwar_dynasty_proxy', yug: 'kali', parichay: 'सुमित्र की वंशावली में आगे चलकर यशोविग्रह हुए, जिनके वंशजों ने कन्नौज में गहरवार/राठौड़ वंश की स्थापना की।', clusterName: 'गहरवार वंश' },
    { id: 'mahichandra', name: 'महीचन्द्र', subtitle: 'यशोविग्रह पुत्र', parent: 'yashovigraha', yug: 'kali', clusterName: 'गहरवार वंश' },
    { id: 'chandradeva_kannauj', name: 'चन्द्रदेव', subtitle: 'कन्नौज के संस्थापक राजा', parent: 'mahichandra', yug: 'kali', parichay: 'इन्होंने 1090 ई. के आसपास कन्नौज और वाराणसी में एक स्वतंत्र और विशाल गहरवार साम्राज्य की स्थापना की।', clusterName: 'गहरवार वंश' },
    { id: 'madanapala_kannauj', name: 'मदनपाल', subtitle: 'चन्द्रदेव पुत्र', parent: 'chandradeva_kannauj', yug: 'kali', clusterName: 'गहरवार वंश' },
    { id: 'govindachandra_kannauj', name: 'गोविन्दचन्द्र', subtitle: 'कन्नौज के प्रतापी सम्राट', parent: 'madanapala_kannauj', yug: 'kali', parichay: 'ये गहरवार वंश के सबसे प्रतापी और शक्तिशाली सम्राट थे (इन्होंने 1114-1155 तक राज किया)।', clusterName: 'गहरवार वंश' },
    { id: 'vijayachandra_kannauj', name: 'विजयचन्द्र', subtitle: 'गोविन्दचन्द्र पुत्र', parent: 'govindachandra_kannauj', yug: 'kali', clusterName: 'गहरवार वंश' },
    { id: 'jaichand', name: 'जयचन्द्र (जयचंद)', subtitle: 'कन्नौज के सम्राट', parent: 'vijayachandra_kannauj', yug: 'kali', parichay: 'ये कन्नौज के प्रतापी हिन्दू सम्राट थे, जो 1194 ई. में मोहम्मद गौरी के साथ "चंदावर के युद्ध" में वीरगति को प्राप्त हुए।' },

    // Rathores of Marwar (Jodhpur)
    { id: 'harishchandra_rathore', name: 'हरिश्चंद्र', subtitle: 'जयचंद पुत्र', parent: 'jaichand', yug: 'kali', clusterName: 'गहरवार वंश' },
    { id: 'setram_rathore', name: 'सेतराम', subtitle: 'हरिश्चंद्र पुत्र', parent: 'harishchandra_rathore', yug: 'kali', clusterName: 'गहरवार वंश' },
    { id: 'rao_siha', name: 'राव सीहा', subtitle: 'मारवाड़ राठौड़ वंश संस्थापक', parent: 'setram_rathore', yug: 'kali', parichay: 'कन्नौज के पतन के बाद ये 13वीं सदी में मारवाड़ (राजस्थान) आये। ये राठौड़ वंश (मारवाड़) के मूल पुरुष माने जाते हैं।', clusterName: 'राठौड़ राजपूत वंश' },
    { id: 'rathore_dynasty', name: 'मारवाड़ के राठौड़', subtitle: 'राठौड़ राजवंश', parent: 'rao_siha', yug: 'kali', clusterName: 'राठौड़ राजपूत वंश', isProxy: true },
    { id: 'rao_asthan', name: 'राव आस्थान', subtitle: 'राव सीहा पुत्र', parent: 'rao_siha', yug: 'kali' },
    { id: 'rao_duhad', name: 'राव दुहड़', subtitle: 'राव आस्थान पुत्र', parent: 'rao_asthan', yug: 'kali', parichay: 'इन्होने राठौड़ों की कुलदेवी "नागणेची माता" की मूर्ति कर्नाटक से लाकर स्थापित की।' },
    { id: 'rao_raipal', name: 'राव रायपाल', subtitle: 'राव दुहड़ पुत्र', parent: 'rao_duhad', yug: 'kali' },
    { id: 'rao_kanhapal', name: 'राव कान्हपाल', subtitle: 'राव रायपाल पुत्र', parent: 'rao_raipal', yug: 'kali' },
    { id: 'rao_jalansi', name: 'राव जलंसी', subtitle: 'राव कान्हपाल पुत्र', parent: 'rao_kanhapal', yug: 'kali' },
    { id: 'rao_chhada', name: 'राव छाड़ा', subtitle: 'राव जलंसी पुत्र', parent: 'rao_jalansi', yug: 'kali' },
    { id: 'rao_tida', name: 'राव तीड़ा', subtitle: 'राव छाड़ा पुत्र', parent: 'rao_chhada', yug: 'kali' },
    { id: 'rao_salkha', name: 'राव सलखा', subtitle: 'राव तीड़ा पुत्र', parent: 'rao_tida', yug: 'kali' },
    { id: 'rao_chunda_marwar', name: 'राव चूंडा (मारवाड़)', subtitle: 'सलखा पुत्र', parent: 'rao_salkha', yug: 'kali', parichay: 'इन्होने मंडोर को राठौड़ों की राजधानी बनाया।' },
    { id: 'rao_ranmal_marwar', name: 'राव रणमल', subtitle: 'राव चूंडा पुत्र', parent: 'rao_chunda_marwar', yug: 'kali', parichay: 'इनका मेवाड़ की राजनीति में बड़ा हस्तक्षेप था। इनकी बहन हंसाबाई का विवाह राणा लाखा से हुआ था।' },
    { id: 'rao_jodha', name: 'राव जोधा', subtitle: 'जोधपुर के संस्थापक', parent: 'rao_ranmal_marwar', yug: 'kali', parichay: 'इन्होंने 1459 ई. में जोधपुर (Jodhpur) शहर की स्थापना की और मेहरानगढ़ किला बनवाया।' },

    // Major Branches from Rao Jodha
    { id: 'rao_bika', name: 'राव बीका', subtitle: 'बीकानेर के संस्थापक', parent: 'rao_jodha', yug: 'kali', parichay: 'ये राव जोधा के पुत्र थे। इन्होंने 1488 ई. में बीकानेर (Bikaner) शहर और राठौड़ों के एक नए राज्य की स्थापना की।' },
    { id: 'rao_duda', name: 'राव दूदा', subtitle: 'मेड़तिया राठौड़ संस्थापक', parent: 'rao_jodha', yug: 'kali', parichay: 'इन्होंने मेड़ता (Merta) पर अधिकार किया। इनके वंशज "मेड़तिया राठौड़" कहलाये। प्रसिद्ध भक्त मीरा बाई इन्हीं राव दूदा की पोती थीं।' },

    // Main Marwar Line (from Jodha)
    { id: 'rao_suja', name: 'राव सूजा', subtitle: 'राव जोधा पुत्र', parent: 'rao_jodha', yug: 'kali' },
    { id: 'rao_ganga', name: 'राव गांगा', subtitle: 'जोधपुर नरेश', parent: 'rao_suja', yug: 'kali' },
    { id: 'rao_maldeo', name: 'राव मालदेव', subtitle: 'हशमत वाला शासक', parent: 'rao_ganga', yug: 'kali', parichay: 'इनके समय में मारवाड़ का सर्वाधिक विस्तार हुआ। इन्होंने शेरशाह सूरी से गिरी-सुमेल का प्रसिद्ध युद्ध লড়াই लड़ा।' },
    { id: 'rao_chandrasen', name: 'राव चन्द्रसेन', subtitle: 'मारवाड़ का प्रताप', parent: 'rao_maldeo', yug: 'kali', parichay: 'इन्हें "मारवाड़ का प्रताप" कहा जाता है क्योंकि इन्होंने जीवन भर मुगलों से संघर्ष किया और अकबर की अधीनता स्वीकार नहीं की।' },
    { id: 'mota_raja_udai_singh', name: 'मोटा राजा उदय सिंह', subtitle: 'जोधपुर नरेश', parent: 'rao_maldeo', yug: 'kali' },
    { id: 'sawai_raja_sur_singh', name: 'सवाई राजा सूर सिंह', subtitle: 'उदय सिंह पुत्र', parent: 'mota_raja_udai_singh', yug: 'kali' },
    { id: 'maharaja_gaj_singh_marwar', name: 'महाराजा गज सिंह', subtitle: 'सूर सिंह पुत्र', parent: 'sawai_raja_sur_singh', yug: 'kali' },
    { id: 'maharaja_jaswant_singh_1', name: 'महाराजा जसवंत सिंह प्रथम', subtitle: 'जोधपुर नरेश', parent: 'maharaja_gaj_singh_marwar', yug: 'kali', parichay: 'ये औरंगजेब के समय के प्रमुख राजपूत राजा थे।' },
    { id: 'maharaja_ajit_singh', name: 'महाराजा अजीत सिंह', subtitle: 'जोधपुर नरेश', parent: 'maharaja_jaswant_singh_1', yug: 'kali', parichay: 'जसवंत सिंह की मृत्यु के बाद वीर दुर्गादास राठौड़ ने इन्हें मुगलों से बचाकर मारवाड़ की गद्दी पर बिठाया।' },

    // Bais Rajput Dynasty (Suryavanshi lineage tracing from Shalivahana and Harshavardhana)
    { id: 'shalivahana', name: 'सम्राट शालिवाहन', subtitle: 'शक संवत के प्रवर्तक', parent: 'sumitra_king', yug: 'kali', parichay: 'इन्होंने 78 ईसवी में उज्जैन के राजा विक्रमादित्य के वंशजों (या शकों) को हराकर "शालिवाहन शक" (Saka Era) की शुरुआत की। बैस (Bais) राजपूत विशुद्ध सूर्यवंशी हैं जो इन्हीं सम्राट शालिवाहन से अपनी उत्पत्ति मानते हैं।' },
    { id: 'vardhan_dynasty_proxy', name: 'वर्धन वंश', subtitle: 'पुष्यभूति वंश', parent: 'shalivahana', yug: 'kali', parichay: 'वर्धन (पुष्यभूति) वंश और बैस राजपूत।', isProxy: true, clusterName: 'वर्धन (पुष्यभूति) वंश' },
    { id: 'pushyabhuti', name: 'पुष्यभूति', subtitle: 'वर्धन वंश के संस्थापक', parent: 'vardhan_dynasty_proxy', yug: 'kali', parichay: 'शालिवाहन के वंश में आगे चलकर पुष्यभूति हुए जिन्होंने हरियाणा (थानेश्वर) में वर्धन/पुष्यभूति वंश की नींव रखी। अलेक्जेंडर कनिंघम के अनुसार यही बैस राजपूतों का मूल वंश था।', clusterName: 'वर्धन (पुष्यभूति) वंश' },
    { id: 'nara_vardhana', name: 'नर वर्धन', subtitle: 'पुष्यभूति वंश', parent: 'pushyabhuti', yug: 'kali', clusterName: 'वर्धन (पुष्यभूति) वंश' },
    { id: 'rajya_vardhana_i', name: 'राज्य वर्धन प्रथम', subtitle: 'पुष्यभूति वंश', parent: 'nara_vardhana', yug: 'kali', clusterName: 'वर्धन (पुष्यभूति) वंश' },
    { id: 'aditya_vardhana', name: 'आदित्य वर्धन', subtitle: 'पुष्यभूति वंश', parent: 'rajya_vardhana_i', yug: 'kali', clusterName: 'वर्धन (पुष्यभूति) वंश' },
    { id: 'prabhakara_vardhana', name: 'प्रभाकर वर्धन', subtitle: 'थानेश्वर के महाराजाधिराज', parent: 'aditya_vardhana', yug: 'kali', parichay: 'ये इस वंश के सबसे पहले स्वतंत्र और प्रतापी राजा थे।', clusterName: 'वर्धन (पुष्यभूति) वंश' },
    { id: 'harshavardhana', name: 'सम्राट हर्षवर्धन', subtitle: 'उत्तर भारत के महान सम्राट', parent: 'prabhakara_vardhana', yug: 'kali', parichay: 'ये प्राचीन भारत (606-647 ई.) के अंतिम महान हिन्दू सम्राटों में से एक थे। बाणभट्ट के \"हर्षचरित\" में इन्हें सूर्यवंशी (बैस) क्षत्रिय बताया गया है। इन्होंने कन्नौज को अपनी राजधानी बनाया था।', clusterName: 'वर्धन (पुष्यभूति) वंश' },

    // Baiswara (Awadh) Branch
    { id: 'abhaychand_bais', name: 'राजा अभयचंद बैस', subtitle: 'बैसवाड़ा के संस्थापक', parent: 'harshavardhana', yug: 'kali', parichay: 'हर्षवर्धन के वंशजों में अभयचंद ने 13वीं सदी के आसपास अवध क्षेत्र (वर्तमान यूपी) में प्रवेश किया, भर जाति के राजाओं को हराया और \"बैसवाड़ा\" (Baiswara) राज्य की स्थापना की।', clusterName: 'वर्धन (पुष्यभूति) वंश' },
    { id: 'raja_tilokchand', name: 'राजा त्रिलोकचंद', subtitle: 'त्रिलोकचंदी बैस के प्रवर्तक', parent: 'abhaychand_bais', yug: 'kali', parichay: 'ये बैसवाड़ा के सबसे प्रतापी राजा थे। इन्हीं के नाम से बैसों की सबसे ऊंची \"त्रिलोकचंदी बैस\" शाखा चलती है।', clusterName: 'वर्धन (पुष्यभूति) वंश' },
    { id: 'raja_devaraya', name: 'राजा देवरय', subtitle: 'डौंडिया खेड़ा के संस्थापक', parent: 'raja_tilokchand', yug: 'kali', parichay: 'राजा त्रिलोकचंद के पौत्र, जिन्होंने डौंडिया खेड़ा (Daundia Khera) को अपनी नई राजधानी बनाया।', clusterName: 'वर्धन (पुष्यभूति) वंश' },
    { id: 'rana_beni_madhav', name: 'राणा बेनी माधव', subtitle: '1857 के शूरवीर', parent: 'raja_devaraya', yug: 'kali', parichay: 'ये डौंडिया खेड़ा के बैस शासक थे जिन्होंने 1857 की क्रांति में अवध (रायबरेली/उन्नाव) क्षेत्र में अंग्रेजों के खिलाफ भयंकर युद्ध किया था।' },

    // Kachhwaha Dynasty (Descendants of Sumitra/Kusha in Kali Yuga)
    { id: 'sodh_dev', name: 'सोढ़ देव', subtitle: 'नरवर के कच्छपघात राजा', parent: 'sumitra_king', yug: 'kali', parichay: 'सुमित्र के वंशजों ने कालान्तर में ग्वालियर और नरवर में कच्छपघात (कछवाहा) राज्य स्थापित किया। सोढ़ देव नरवर के शासक थे और इन्हीं के पुत्र ने राजस्थान में कछवाहा वंश की नींव रखी।' },
    { id: 'dulha_rai', name: 'दुल्हराय (तेजकरण)', subtitle: 'कछवाहा वंश के संस्थापक', parent: 'sodh_dev', yug: 'kali', parichay: 'इन्होंने 1028 ई. के आसपास ढूँढाड़ क्षेत्र (दौसा) में कछवाहा वंश (आमेर) की स्थापना की।' },
    { id: 'kakil_deo', name: 'काकिल देव', subtitle: 'दुल्हराय पुत्र', parent: 'dulha_rai', yug: 'kali' },
    { id: 'hanu_deo', name: 'हनु देव', subtitle: 'काकिल देव पुत्र', parent: 'kakil_deo', yug: 'kali' },
    { id: 'janad_deo', name: 'जान्हड़ देव', subtitle: 'हनु देव पुत्र', parent: 'hanu_deo', yug: 'kali' },
    { id: 'pajawan', name: 'पजवन (प्रद्युम्न)', subtitle: 'आमेर के प्रतापी शासक', parent: 'janad_deo', yug: 'kali', parichay: 'ये पृथ्वीराज चौहान के समकालीन थे और उनके बहनोई थे। इन्होंने तराइन के युद्ध और संयोगिता हरण में पृथ्वीराज का साथ दिया था।' },
    { id: 'malesi', name: 'मलेसी', subtitle: 'पजवन पुत्र', parent: 'pajawan', yug: 'kali' },
    { id: 'bijal_deo', name: 'बीजल देव', subtitle: 'मलेसी पुत्र', parent: 'malesi', yug: 'kali' },
    { id: 'rajdeo', name: 'राजदेव', subtitle: 'बीजल देव पुत्र', parent: 'bijal_deo', yug: 'kali' },
    { id: 'kilhan', name: 'किल्हण', subtitle: 'राजदेव पुत्र', parent: 'rajdeo', yug: 'kali' },
    { id: 'kuntal', name: 'कुंतल', subtitle: 'किल्हण पुत्र', parent: 'kilhan', yug: 'kali' },
    { id: 'junsi', name: 'जुंसी', subtitle: 'कुंतल पुत्र', parent: 'kuntal', yug: 'kali' },
    { id: 'udayakarna', name: 'उदयकर्ण', subtitle: 'जुंसी पुत्र', parent: 'junsi', yug: 'kali' },

    // Udayakarna's descendants forming sub-clans
    { id: 'bar_singh_amer', name: 'बर सिंह', subtitle: 'उदयकर्ण पुत्र', parent: 'udayakarna', yug: 'kali' },
        { id: 'naruka_dynasty_proxy', name: 'नरूका वंश', subtitle: 'राव नरू के वंशज', parent: 'bar_singh_amer', yug: 'kali', clusterName: 'नरूका वंश', isProxy: true },
    { id: 'naru_singh', name: 'राव नरू', subtitle: 'नरूका वंश के संस्थापक', parent: 'naruka_dynasty_proxy', clusterName: 'नरूका वंश', yug: 'kali', parichay: 'इनके वंशज "नरूका" (Naruka) कहलाए। अलवर का राजघराना नरूका कछवाहों का ही है।' },

    { id: 'baloji', name: 'बालाजी (राव बाला)', subtitle: 'उदयकर्ण पुत्र', parent: 'udayakarna', yug: 'kali' },
    { id: 'mokal_singh', name: 'मोकल सिंह', subtitle: 'बालाजी पुत्र', parent: 'baloji', yug: 'kali' },
    { id: 'shekhawat_dynasty_proxy', name: 'शेखावत वंश', subtitle: 'राव शेखा के वंशज', parent: 'mokal_singh', yug: 'kali', parichay: 'कछवाहा राजपूतों की सबसे बड़ी शाखाओं में से एक।', isProxy: true, clusterName: 'शेखावत वंश' },
    { id: 'rao_shekha_proxy', name: 'राव शेखा', subtitle: 'शेखावत वंश के संस्थापक', parent: 'shekhawat_dynasty_proxy', yug: 'kali', parichay: 'इनके नाम पर शेखावाटी क्षेत्र का नाम पड़ा और इनके वंशज "शेखावत" (Shekhawat) कहलाये, जो राजस्थान का एक बहुत बड़ा और वीर राजपूत समाज है।', clusterName: 'शेखावत वंश' },

    { id: 'banbir_singh', name: 'बनवीर सिंह', subtitle: 'उदयकर्ण पुत्र', parent: 'udayakarna', yug: 'kali' },
    { id: 'uddharan_1', name: 'उद्धरण', subtitle: 'बनवीर पुत्र', parent: 'banbir_singh', yug: 'kali' },
    { id: 'chandrasen_amer', name: 'चन्द्रसेन', subtitle: 'उद्धरण पुत्र', parent: 'uddharan_1', yug: 'kali' },
    { id: 'prithviraj_amer', name: 'राजा पृथ्वीराज सिंह', subtitle: 'आमेर नरेश', parent: 'chandrasen_amer', yug: 'kali', parichay: 'ये राणा सांगा के समकालीन थे और खानवा के युद्ध में उनकी ओर से लड़े थे। इनके 12 पुत्रों से आमेर के "बारह कोटड़ी" (12 Kotri) सामंत व्यवस्था की शुरुआत हुई।' },

    // Prithviraj's descendants (12 Kotri branches)
    { id: 'bharmal_amer_dup', name: 'राजा भारमल', subtitle: 'आमेर नरेश', parent: 'prithviraj_amer', yug: 'kali' },
    { id: 'bhagwant_das_amer_dup', name: 'राजा भगवंत दास', subtitle: 'भारमल पुत्र', parent: 'bharmal_amer_dup', yug: 'kali' },
    { id: 'man_singh_i_amer_dup', name: 'राजा मान सिंह प्रथम', subtitle: 'राजावत वंश के संस्थापक', parent: 'bhagwant_das_amer_dup', yug: 'kali', parichay: 'ये अकबर के प्रमुख सेनापति और नवरत्नों में से एक थे। इनके वंशज मुख्य रूप से "राजावत" (Rajawat) कहलाते हैं, जो जयपुर राजघराने का मुख्य गोत्र है।' },

    { id: 'gopal_singh', name: 'गोपाल सिंह', subtitle: 'पृथ्वीराज पुत्र', parent: 'prithviraj_amer', yug: 'kali' },
    { id: 'nathawat_dynasty_proxy', name: 'नाथावत वंश', subtitle: 'नाथा जी के वंशज', parent: 'gopal_singh', yug: 'kali', parichay: 'कछवाहा राजपूतों की एक प्रमुख शाखा।', isProxy: true, clusterName: 'नाथावत वंश' },
    { id: 'nathaji', name: 'नाथा जी', subtitle: 'नाथावत वंश के संस्थापक', parent: 'nathawat_dynasty_proxy', yug: 'kali', parichay: 'इनके वंशज "नाथावत" (Nathawat) कहलाये, जो कछवाहों की एक प्रमुख शाखा है।', clusterName: 'नाथावत वंश' },

    { id: 'jagmal_singh', name: 'जगमाल सिंह', subtitle: 'पृथ्वीराज पुत्र', parent: 'prithviraj_amer', yug: 'kali' },
    { id: 'khangarot_dynasty_proxy', name: 'खंगारोत वंश', subtitle: 'खंगार जी के वंशज', parent: 'jagmal_singh', yug: 'kali', isProxy: true, clusterName: 'खंगारोत वंश' },
    { id: 'khangarji', name: 'खंगार जी', subtitle: 'खंगारोत वंश के संस्थापक', parent: 'khangarot_dynasty_proxy', yug: 'kali', parichay: 'इनके वंशज "खंगारोत" (Khangarot) कहलाये।', clusterName: 'खंगारोत वंश' },
    { id: 'narsingh_deo', name: 'नरसिंह', subtitle: 'उदयकर्ण पुत्र (मुख्य धारा)', parent: 'udayakarna', yug: 'kali' },
    { id: 'rao_balaji', name: 'राव बालाजी', subtitle: 'उदयकर्ण पुत्र', parent: 'udayakarna', yug: 'kali', parichay: 'आमेर नरेश उदयकर्ण के पुत्र। इनके वंशज "बालापोता" कहलाये।' },
    { id: 'rao_mokal', name: 'राव मोकल', subtitle: 'राव बालाजी पुत्र', parent: 'rao_balaji', yug: 'kali' },
    { id: 'rao_shekha', name: 'राव शेखा', subtitle: 'शेखावत वंश के संस्थापक', parent: 'rao_mokal', yug: 'kali', parichay: 'इन्होंने 15वीं शताब्दी में आमेर से स्वतंत्र होकर अमरसर में अपना राज्य स्थापित किया। इन्हीं के नाम पर शेखावाटी क्षेत्र और "शेखावत" सरनेम/शाखा की शुरुआत हुई।' },

    { id: 'rao_bar_singh', name: 'राव बार सिंह', subtitle: 'उदयकर्ण पुत्र', parent: 'udayakarna', yug: 'kali' },
    { id: 'rao_naru', name: 'राव नरू', subtitle: 'नरूका वंश के संस्थापक', parent: 'rao_bar_singh', yug: 'kali', parichay: 'राव बार सिंह के वंशज। इन्हीं के नाम से "नरूका" सरनेम/शाखा की शुरुआत हुई। अलवर का राजघराना नरूका शाखा से ही है।' },

    { id: 'banbir', name: 'बनबीर', subtitle: 'नरसिंह पुत्र', parent: 'narsingh_deo', yug: 'kali' },
    { id: 'uddharan_2', name: 'उद्धरण', subtitle: 'बनबीर पुत्र', parent: 'banbir', yug: 'kali' },
    { id: 'chandrasen_amber', name: 'चंद्रसेन', subtitle: 'उद्धरण पुत्र', parent: 'uddharan_2', yug: 'kali' },
    { id: 'prithviraj_singh_i', name: 'पृथ्वीराज सिंह प्रथम', subtitle: 'आमेर नरेश', parent: 'chandrasen_amber', yug: 'kali', parichay: 'इन्होंने राणा सांगा के साथ खानवा के युद्ध (1527) में बाबर के खिलाफ भाग लिया था। इन्हीं के समय में कछवाहा वंश कई मुख्य शाखाओं में विभाजित हुआ जिन्हें "बारां कोठड़ी" कहा गया।' },

    // Prithviraj Singh I's descendants forming sub-clans
    { id: 'puranmal', name: 'पूरनमल', subtitle: 'पृथ्वीराज पुत्र', parent: 'prithviraj_singh_i', yug: 'kali' },
    { id: 'bhim_singh', name: 'भीम सिंह', subtitle: 'पूरनमल भ्राता', parent: 'prithviraj_singh_i', yug: 'kali' },
    { id: 'ratan_singh', name: 'रतन सिंह', subtitle: 'भीम सिंह पुत्र', parent: 'bhim_singh', yug: 'kali' },
    { id: 'bharmal', name: 'राजा भारमल', subtitle: 'पृथ्वीराज पुत्र (मुख्य धारा)', parent: 'prithviraj_singh_i', yug: 'kali', parichay: 'ये मुगलों (अकबर) के साथ संधि करने वाले पहले राजपूत शासक थे। इन्होंने अपनी पुत्री जोधा बाई (हरका बाई) का विवाह अकबर से किया था। इनके वंशज आगे चलकर "राजावत" कहलाये।' },

    { id: 'rao_gopal', name: 'राव गोपाल', subtitle: 'पृथ्वीराज पुत्र', parent: 'prithviraj_singh_i', yug: 'kali' },
    { id: 'rao_natha', name: 'राव नाथा', subtitle: 'नाथावत वंश के संस्थापक', parent: 'rao_gopal', yug: 'kali', parichay: 'इन्हीं के नाम से "नाथावत" सरनेम/शाखा की शुरुआत हुई। चौमूं के ठाकुर इसी वंश से हैं।' },

    { id: 'rao_jagmal', name: 'राव जगमाल', subtitle: 'पृथ्वीराज पुत्र', parent: 'prithviraj_singh_i', yug: 'kali' },
        { id: 'rajawat_dynasty_proxy', name: 'राजावत वंश', subtitle: 'जयपुर राजवंश', parent: 'prithviraj_singh_i', yug: 'kali', clusterName: 'राजावत (कछवाहा) वंश', isProxy: true },
    { id: 'bharmal_kachhwaha', name: 'राजा भारमल', subtitle: 'पृथ्वीराज पुत्र (मुख्य धारा)', parent: 'rajawat_dynasty_proxy', yug: 'kali', parichay: 'ये मुगलों (अकबर) के साथ संधि करने वाले पहले राजपूत शासक थे। इन्होंने अपनी पुत्री जोधा बाई (हरका बाई) का विवाह अकबर से किया था। इनके वंशज आगे चलकर \"राजावत\" कहलाये।', clusterName: 'राजावत (कछवाहा) वंश' },
    { id: 'rajawat_dynasty', name: 'राजावत वंश', subtitle: 'जयपुर राजवंश', parent: 'bharmal_kachhwaha', yug: 'kali', clusterName: 'राजावत (कछवाहा) वंश' },
    { id: 'bhagwant_das_kachhwaha', name: 'भगवंत दास', subtitle: 'भारमल पुत्र', parent: 'bharmal_kachhwaha', yug: 'kali', clusterName: 'राजावत (कछवाहा) वंश' },
    { id: 'man_singh_i_kachhwaha', name: 'मान सिंह प्रथम', subtitle: 'अकबर के सेनापति', parent: 'bhagwant_das_kachhwaha', yug: 'kali', parichay: 'ये मुग़ल साम्राज्य के सबसे प्रमुख सेनापतियों (नवरत्नों) में से एक थे। इन्होंने हल्दीघाटी के युद्ध में महाराणा प्रताप के खिलाफ मुग़ल सेना का नेतृत्व किया था।', clusterName: 'राजावत (कछवाहा) वंश' },
    { id: 'bhao_singh', name: 'भाव सिंह', subtitle: 'मान सिंह पुत्र', parent: 'man_singh_i_kachhwaha', yug: 'kali', clusterName: 'राजावत (कछवाहा) वंश' },
    { id: 'maha_singh', name: 'महा सिंह', subtitle: 'मान सिंह पौत्र', parent: 'man_singh_i_kachhwaha', yug: 'kali', clusterName: 'राजावत (कछवाहा) वंश' },
    { id: 'jai_singh_i', name: 'मिर्ज़ा राजा जय सिंह', subtitle: 'महा सिंह पुत्र', parent: 'maha_singh', yug: 'kali', parichay: 'इन्होंने मुग़ल बादशाहों (जहाँगीर, शाहजहां, औरंगज़ेब) के लिए कई युद्ध लड़े और छत्रपति शिवाजी महाराज के साथ पुरंदर की संधि की।', clusterName: 'राजावत (कछवाहा) वंश' },
    { id: 'ram_singh_i', name: 'राम सिंह प्रथम', subtitle: 'जय सिंह पुत्र', parent: 'jai_singh_i', yug: 'kali', clusterName: 'राजावत (कछवाहा) वंश' },
    { id: 'bishan_singh', name: 'बिशन सिंह', subtitle: 'राम सिंह पौत्र', parent: 'ram_singh_i', yug: 'kali', clusterName: 'राजावत (कछवाहा) वंश' },
    { id: 'sawai_jai_singh_ii', name: 'सवाई जय सिंह (द्वितीय)', subtitle: 'जयपुर के संस्थापक', parent: 'bishan_singh', yug: 'kali', parichay: 'ये एक महान खगोलशास्त्री और वास्तुकार थे। इन्होंने 1727 में जयपुर शहर बसाया और भारत में 5 जंतर मंतर (वेधशालाएं) बनवाईं।' },
    { id: 'ishwari_singh', name: 'ईश्वरी सिंह', subtitle: 'सवाई जय सिंह पुत्र', parent: 'sawai_jai_singh_ii', yug: 'kali' , clusterName: 'राजावत (कछवाहा) वंश' },
    { id: 'madho_singh_i', name: 'माधो सिंह प्रथम', subtitle: 'सवाई जय सिंह पुत्र', parent: 'sawai_jai_singh_ii', yug: 'kali' , clusterName: 'राजावत (कछवाहा) वंश' },
    { id: 'prithvi_singh_ii', name: 'पृथ्वी सिंह द्वितीय', subtitle: 'माधो सिंह पुत्र', parent: 'madho_singh_i', yug: 'kali' , clusterName: 'राजावत (कछवाहा) वंश' },
    { id: 'pratap_singh_jaipur', name: 'प्रताप सिंह', subtitle: 'हवा महल के निर्माता', parent: 'madho_singh_i', yug: 'kali', parichay: 'इन्होंने 1799 में जयपुर का प्रसिद्ध "हवा महल" बनवाया था।' },
    { id: 'jagat_singh_ii', name: 'जगत सिंह द्वितीय', subtitle: 'प्रताप सिंह पुत्र', parent: 'pratap_singh_jaipur', yug: 'kali' , clusterName: 'राजावत (कछवाहा) वंश' },
    { id: 'ram_singh_ii', name: 'राम सिंह द्वितीय', subtitle: 'जयपुर नरेश', parent: 'jagat_singh_ii', yug: 'kali' , clusterName: 'राजावत (कछवाहा) वंश' },
    { id: 'madho_singh_ii', name: 'माधो सिंह द्वितीय', subtitle: 'जयपुर नरेश', parent: 'ram_singh_ii', yug: 'kali' , clusterName: 'राजावत (कछवाहा) वंश' },
    { id: 'man_singh_ii', name: 'सवाई मान सिंह (द्वितीय)', subtitle: 'जयपुर के अंतिम शासक', parent: 'madho_singh_ii', yug: 'kali', parichay: 'ये जयपुर रियासत के अंतिम शासक थे (1922-1947), जिनके बाद राजशाही का भारत संघ में विलय हो गया। ये एक प्रसिद्ध पोलो खिलाड़ी भी थे।' , clusterName: 'राजावत (कछवाहा) वंश' },

    // Pratapnagar / Agroha Branch (Splits from Shighra)
    { id: 'mohandas', name: 'मोहनदास', subtitle: 'शीघ्र पुत्र', parent: 'shighra', yug: 'dwapar', parichay: 'ये भगवान विष्णु (रंगनाथ) के परम भक्त थे। इन्होंने कावेरी नदी के तट पर भगवान रंगनाथ के कई भव्य मंदिर बनवाए थे।' },
    { id: 'neminath_suryavansh', name: 'नेमिनाथ', subtitle: 'मोहनदास पुत्र', parent: 'mohandas', yug: 'dwapar', parichay: 'इन्होंने प्राचीन काल में नेपाल में अपना राज्य स्थापित किया था और वहां शासन किया।' },
    { id: 'vrand', name: 'व्रंद', subtitle: 'नेमिनाथ पुत्र', parent: 'neminath_suryavansh', yug: 'dwapar', parichay: 'व्रंद महाराजा वल्लभ देव के पिता थे, जो कि प्रतापनगर के शासक बने।' },
    { id: 'raja_vallabh', name: 'महाराजा वल्लभ देव', subtitle: 'प्रतापनगर के राजा', parent: 'vrand', yug: 'dwapar', parichay: 'ये कुश की पीढ़ी में प्रतापनगर (राजस्थान) के सूर्यवंशी राजा थे। इन्होने अपने ज्येष्ठ पुत्र अग्रसेन को युद्ध से रोकना चाहा क्योंकि वह केवल 15 वर्ष के थे, लेकिन माता भगवती की आज्ञा पाकर दोनों युद्ध में गए। महाभारत युद्ध में पांडवों की ओर से लड़ते हुए ये भीष्म पितामह के बाणों से वीरगति को प्राप्त हुए। भगवान श्रीकृष्ण ने स्वयं इनके पुत्र अग्रसेन को सांत्वना दी थी और वल्लभ देव को धर्म और सत्य के लिए प्राण त्यागने वाला अमर शहीद बताया था।', kali_year: -111 },
    { id: 'bhagwati_devi', name: 'भगवती देवी', subtitle: 'वल्लभ देव की पत्नी', parent: '', spouseOf: 'raja_vallabh', yug: 'dwapar', parichay: 'महारानी भगवती देवी (विदर्भनंदिनी) ने ही अपने युवा पुत्र अग्रसेन को धर्म-युद्ध (महाभारत) में भाग लेने की अनुमति दी थी।' },
    {
        id: 'maharaja_agrasen',
        name: 'महाराजा अग्रसेन',
        subtitle: 'अग्रवाल वंश संस्थापक',
        parent: 'raja_vallabh',
        mother: 'bhagwati_devi',
        yug: 'dwapar',
        kali_year: -51,
        parichay: 'इन्होंने अग्रोहा नगर की स्थापना की और अग्रवाल समाज का निर्माण किया। 15 वर्ष की आयु में इन्होने महाभारत युद्ध में पांडवों की ओर से भाग लिया था। भारतेन्दु हरिश्चंद्र के 1871 के निबंध "अग्रवालों की उत्पत्ति" (जिसका स्रोत भविष्य पुराण की "महालक्ष्मी व्रत कथा" माना जाता है) के अनुसार ये द्वापर युग के अंत और कलयुग के प्रारंभ (लगभग 3082 ईसा पूर्व) के समय भगवान कृष्ण के समकालीन थे।',
        events: [
            '15 वर्ष की आयु में पिता वल्लभ देव के साथ महाभारत युद्ध में पांडवों के पक्ष से लड़े।',
            'पिता की मृत्यु के उपरांत भगवान श्रीकृष्ण से सांत्वना प्राप्त की और श्रीकृष्ण ने इन्हें कलियुग का "युग पुरुष" और अवतार घोषित किया।',
            'इंद्र के प्रकोप से हुए सूखे के कारण युद्ध किया, बाद में नारद जी के हस्तक्षेप से शांति हुई।',
            'काशी में भगवान शिव और महालक्ष्मी की कठोर तपस्या की, जिससे वैश्य धर्म अपनाकर व्यापारिक राज्य स्थापित करने का वरदान मिला।',
            'सामाजिक समानता (समाजवाद) का सिद्धांत लागू किया: "एक ईंट, एक रुपया" (अग्रोहा में बसने वाले हर नए परिवार को समाज का हर व्यक्ति एक ईंट और एक रुपया देगा)।',
            '18 यज्ञों का आयोजन किया। 18वें यज्ञ में पशुबलि को देखकर उनका हृदय द्रवित हो गया और उन्होंने अहिंसा का मार्ग अपनाते हुए पशुबलि पर पूर्ण प्रतिबंध लगा दिया।'
        ]
    },
    { id: 'shursen', name: 'शूरसेन', subtitle: 'महाराजा वल्लभ देव के पुत्र', parent: 'raja_vallabh', mother: 'bhagwati_devi', yug: 'dwapar', parichay: 'महाराजा अग्रसेन के छोटे भाई। कुछ ऐतिहासिक और सामाजिक मान्यताओं के अनुसार अग्रहरि (Agrahari) वैश्य समाज की उत्पत्ति शूरसेन या इनके वंशजों से मानी जाती है, हालाँकि कुछ अग्रहरि स्वयं को सीधे महाराजा अग्रसेन का वंशज भी मानते हैं।' },

    // Agrasen's Wives and 18 Sons
    {
        id: 'madhavi_agrasen',
        name: 'माधवी',
        subtitle: 'महाराजा अग्रसेन की पत्नी',
        parent: '',
        spouseOf: 'maharaja_agrasen',
        yug: 'dwapar',
        parichay: 'ये नागराज कुमुद की पुत्री थीं (नागवंशी)। इनके स्वयंवर में देवराज इंद्र भी आए थे, लेकिन माधवी ने अग्रसेन को चुना। इसी कारण इंद्र क्रोधित हो गए और प्रतापनगर में वर्षा रोककर भयंकर अकाल ला दिया था।'
    },
    { id: 'nandini_agrasen', name: 'नंदिनी', subtitle: 'महाराजा अग्रसेन की पत्नी', parent: '', spouseOf: 'maharaja_agrasen', yug: 'dwapar' },

        { id: 'agrawal_dynasty_proxy', name: 'अग्रवाल वंश', subtitle: 'महाराजा अग्रसेन के वंशज', parent: 'maharaja_agrasen', yug: 'dwapar', clusterName: 'अग्रवाल वंश', isProxy: true },
    { id: 'pushpadev', name: 'पुष्पदेव', subtitle: 'गर्ग गोत्र', parent: 'agrawal_dynasty_proxy', mother: 'madhavi_agrasen', yug: 'dwapar', parichay: 'गर्ग गोत्र के प्रवर्तक। गुरु: गर्गाचार्य।', clusterName: 'अग्रवाल वंश' },
    { id: 'gendumal', name: 'गेंदुमल', subtitle: 'गोयल गोत्र', parent: 'agrawal_dynasty_proxy', mother: 'madhavi_agrasen', yug: 'dwapar', parichay: 'गोयल गोत्र के प्रवर्तक। गुरु: गोभिल।', clusterName: 'अग्रवाल वंश' },
    { id: 'godhar', name: 'गोधर', subtitle: 'गोयन गोत्र', parent: 'agrawal_dynasty_proxy', mother: 'madhavi_agrasen', yug: 'dwapar', parichay: 'गोयन गोत्र के प्रवर्तक। गुरु: गौतम।', clusterName: 'अग्रवाल वंश' },
    { id: 'virbhan', name: 'वीरभान', subtitle: 'बंसल गोत्र', parent: 'agrawal_dynasty_proxy', mother: 'madhavi_agrasen', yug: 'dwapar', parichay: 'बंसल गोत्र के प्रवर्तक। गुरु: वत्स।', clusterName: 'अग्रवाल वंश' },
    { id: 'manipal', name: 'मनिपाल', subtitle: 'कंसल गोत्र', parent: 'agrawal_dynasty_proxy', mother: 'madhavi_agrasen', yug: 'dwapar', parichay: 'कंसल गोत्र के प्रवर्तक। गुरु: कौशिक।', clusterName: 'अग्रवाल वंश' },
    { id: 'sindhupati', name: 'सिंधुपति', subtitle: 'सिंघल गोत्र', parent: 'agrawal_dynasty_proxy', mother: 'madhavi_agrasen', yug: 'dwapar', parichay: 'सिंघल गोत्र के प्रवर्तक। गुरु: शांडिल्य।', clusterName: 'अग्रवाल वंश' },
    { id: 'amritsen', name: 'अमृतसेन', subtitle: 'मंगल गोत्र', parent: 'agrawal_dynasty_proxy', mother: 'madhavi_agrasen', yug: 'dwapar', parichay: 'मंगल गोत्र के प्रवर्तक। गुरु: मांडव्य।', clusterName: 'अग्रवाल वंश' },
    { id: 'jaitrasangh', name: 'जैत्रसंघ', subtitle: 'जिंदल गोत्र', parent: 'agrawal_dynasty_proxy', mother: 'madhavi_agrasen', yug: 'dwapar', parichay: 'जिंदल गोत्र के प्रवर्तक। गुरु: जैमिनी।', clusterName: 'अग्रवाल वंश' },
    { id: 'tambolkarna', name: 'तंबोलकर्ण', subtitle: 'टिंगल गोत्र', parent: 'agrawal_dynasty_proxy', mother: 'madhavi_agrasen', yug: 'dwapar', parichay: 'टिंगल गोत्र के प्रवर्तक। गुरु: तांडव्य।', clusterName: 'अग्रवाल वंश' },
    { id: 'indramal', name: 'इंद्रमल', subtitle: 'ऐरन / एरन गोत्र', parent: 'agrawal_dynasty_proxy', mother: 'madhavi_agrasen', yug: 'dwapar', parichay: 'ऐरन गोत्र के प्रवर्तक। गुरु: और्व।', clusterName: 'अग्रवाल वंश' },
    { id: 'dhavandev', name: 'धवनदेव', subtitle: 'धारण गोत्र', parent: 'agrawal_dynasty_proxy', mother: 'madhavi_agrasen', yug: 'dwapar', parichay: 'धारण गोत्र के प्रवर्तक। गुरु: धौम्य।', clusterName: 'अग्रवाल वंश' },
    { id: 'madhavsen', name: 'माधवसेन', subtitle: 'मधुकुल गोत्र', parent: 'agrawal_dynasty_proxy', mother: 'madhavi_agrasen', yug: 'dwapar', parichay: 'मधुकुल गोत्र के प्रवर्तक। गुरु: मुद्गल।', clusterName: 'अग्रवाल वंश' },
    { id: 'vrinddev', name: 'वृंददेव', subtitle: 'बिंदल गोत्र', parent: 'agrawal_dynasty_proxy', mother: 'madhavi_agrasen', yug: 'dwapar', parichay: 'बिंदल गोत्र के प्रवर्तक। गुरु: वशिष्ठ।', clusterName: 'अग्रवाल वंश' },
    { id: 'mantrapati', name: 'मंत्रपति', subtitle: 'मित्तल गोत्र', parent: 'agrawal_dynasty_proxy', mother: 'madhavi_agrasen', yug: 'dwapar', parichay: 'मित्तल गोत्र के प्रवर्तक। गुरु: मैत्रेय।', clusterName: 'अग्रवाल वंश' },
    { id: 'tarachand', name: 'ताराचंद', subtitle: 'तायल गोत्र', parent: 'agrawal_dynasty_proxy', mother: 'madhavi_agrasen', yug: 'dwapar', parichay: 'तायल गोत्र के प्रवर्तक। गुरु: तैत्तिरेय।', clusterName: 'अग्रवाल वंश' },
    { id: 'vasudev_agrasen', name: 'वासुदेव', subtitle: 'भंदल गोत्र', parent: 'agrawal_dynasty_proxy', mother: 'madhavi_agrasen', yug: 'dwapar', parichay: 'भंदल गोत्र के प्रवर्तक। गुरु: भारद्वाज।', clusterName: 'अग्रवाल वंश' },
    { id: 'karanchand', name: 'करनचंद', subtitle: 'कुच्छल गोत्र', parent: 'agrawal_dynasty_proxy', mother: 'madhavi_agrasen', yug: 'dwapar', parichay: 'कुच्छल गोत्र के प्रवर्तक। गुरु: कश्यप।', clusterName: 'अग्रवाल वंश' },
    { id: 'narsev', name: 'नरसेव', subtitle: 'नांगल गोत्र', parent: 'agrawal_dynasty_proxy', mother: 'madhavi_agrasen', yug: 'dwapar', parichay: 'नांगल गोत्र के प्रवर्तक। गुरु: नागेंद्र।', clusterName: 'अग्रवाल वंश' },

    { id: 'hanuman', name: 'हनुमान', subtitle: 'राम भक्त / शिव अंश', parent: 'vayu', yug: 'treta' },




    { id: 'jatayu', name: 'जटायु', subtitle: 'गृध्रराज', parent: 'arun', yug: 'treta' }
];
