export const coreData = [
    {
        id: 'vaivasvata_manu',
        name: 'वैवस्वत मनु',
        subtitle: 'वर्तमान मनु',
        parent: 'surya',
        yug: 'satya',
        kali_year: -3888000
    },
    {
        id: 'shraddha_manu_wife',
        name: 'श्रद्धा',
        subtitle: 'मनु पत्नी',
        parent: '',
        spouseOf: 'vaivasvata_manu',
        yug: 'satya'
    },

    // Manu's other children

    {
        id: 'manu_other_sons_proxy',
        name: 'मनु के अन्य पुत्र',
        subtitle: 'इक्ष्वाकु के अतिरिक्त अन्य पुत्र',
        isProxy: true,
        parent: 'vaivasvata_manu',
        clusterName: 'मनु के अन्य पुत्र',
        yug: 'satya'
    },

    {
        id: 'sudyumna_surya',
        name: 'सुद्युम्न (इला)',
        subtitle: 'इला का पुरुष रूप',
        gender: 'male',
        parent: 'vaivasvata_manu',
        mother: 'shraddha_manu_wife',
        yug: 'satya',
        clusterName: 'मनु के अन्य पुत्र',
        parichay: 'ये मनु की पुत्री इला का पुरुष रूप थे। पुरुष रूप में इन्होंने शासन किया और इनके 3 पुत्र हुए। (जब ये स्त्री रूप में होते थे, तब इन्होंने बुध से विवाह कर पुरुरवा को जन्म दिया जो चंद्रवंश के प्रवर्तक बने)।'
    },
    {
        id: 'utkala_sudyumna',
        name: 'उत्कल',
        subtitle: 'सुद्युम्न पुत्र',
        gender: 'male',
        parent: 'sudyumna_surya',
        yug: 'satya',
        clusterName: 'मनु के अन्य पुत्र',
        parichay: 'इन्होंने उत्कल (वर्तमान ओडिशा) क्षेत्र की स्थापना की और वहाँ शासन किया।'
    },
    {
        id: 'gaya_sudyumna',
        name: 'गय',
        subtitle: 'सुद्युम्न पुत्र',
        gender: 'male',
        parent: 'sudyumna_surya',
        yug: 'satya',
        clusterName: 'मनु के अन्य पुत्र',
        parichay: 'इन्होंने गय राज्य (वर्तमान बिहार में गया) की स्थापना की।'
    },
    {
        id: 'vimala_sudyumna',
        name: 'विमल (विनताश्व)',
        subtitle: 'सुद्युम्न पुत्र',
        gender: 'male',
        parent: 'sudyumna_surya',
        yug: 'satya',
        clusterName: 'मनु के अन्य पुत्र',
        parichay: 'इन्होंने उत्तर-पूर्वी दिशा के राज्यों पर शासन किया। कुछ पुराणों में इन्हें विनताश्व भी कहा गया है।'
    },

    {
        id: 'nabhaga',
        name: 'नाभाग',
        subtitle: 'मनु पुत्र',
        parent: 'vaivasvata_manu',
        mother: 'shraddha_manu_wife',
        yug: 'satya' ,
        clusterName: 'मनु के अन्य पुत्र'
    },
    {
        id: 'dhrishta',
        name: 'धृष्ट',
        subtitle: 'मनु पुत्र',
        parent: 'vaivasvata_manu',
        mother: 'shraddha_manu_wife',
        yug: 'satya' ,
        clusterName: 'मनु के अन्य पुत्र'
    },
    {
        id: 'sharyati',
        name: 'शर्याति',
        subtitle: 'मनु पुत्र',
        parent: 'vaivasvata_manu',
        mother: 'shraddha_manu_wife',
        yug: 'satya' ,
        clusterName: 'मनु के अन्य पुत्र'
    },
    {
        id: 'narishyanta',
        name: 'नरिष्यंत',
        subtitle: 'मनु पुत्र',
        parent: 'vaivasvata_manu',
        mother: 'shraddha_manu_wife',
        yug: 'satya' ,
        clusterName: 'मनु के अन्य पुत्र'
    },
    {
        id: 'pramshu',
        name: 'प्रांशु',
        subtitle: 'मनु पुत्र',
        parent: 'vaivasvata_manu',
        mother: 'shraddha_manu_wife',
        yug: 'satya' ,
        clusterName: 'मनु के अन्य पुत्र'
    },
    {
        id: 'nabhanedishta',
        name: 'नाभानेदिष्ट',
        subtitle: 'मनु पुत्र',
        parent: 'vaivasvata_manu',
        mother: 'shraddha_manu_wife',
        yug: 'satya',
        clusterName: 'मनु के अन्य पुत्र'
    },
    {
        id: 'karusha',
        name: 'करुष',
        subtitle: 'मनु पुत्र',
        parent: 'vaivasvata_manu',
        mother: 'shraddha_manu_wife',
        yug: 'satya' ,
        clusterName: 'मनु के अन्य पुत्र'
    },
    {
        id: 'prishadhra',
        name: 'पृषध्र',
        subtitle: 'मनु पुत्र',
        parent: 'vaivasvata_manu',
        mother: 'shraddha_manu_wife',
        yug: 'satya' ,
        clusterName: 'मनु के अन्य पुत्र'
    },
    {
        id: 'kavi_manu',
        name: 'कवि',
        subtitle: 'मनु पुत्र',
        gender: 'male',
        parent: 'vaivasvata_manu',
        mother: 'shraddha_manu_wife',
        yug: 'satya',
        clusterName: 'मनु के अन्य पुत्र',
        parichay: 'वैवस्वत मनु के पुत्र जिन्होंने सांसारिक मोह त्याग कर सन्यास ले लिया था।',
        source_texts: 'भागवत पुराण'
    },

    {
        id: 'ikshvaku',
        name: 'इक्ष्वाकु',
        subtitle: 'सूर्यवंश के संस्थापक',
        parent: 'vaivasvata_manu',
        mother: 'shraddha_manu_wife',
        yug: 'satya',
        kali_year: -3888000
    },
    // Descendants of Ikshvaku
    {
        id: 'suryavansh_proxy',
        name: 'सूर्यवंश',
        subtitle: 'इक्ष्वाकु के वंशज',
        parent: 'ikshvaku',
        yug: 'satya',
        clusterName: 'सूर्यवंश',
        isProxy: true
    },
    {
        id: 'vikukshi',
        name: 'विकुक्षि',
        subtitle: 'शशाद',
        parent: 'suryavansh_proxy',
        yug: 'satya',
        kali_year: -2160000,
        parichay: 'इक्ष्वाकु के सौ पुत्रों में ज्येष्ठ। इन्होंने सूर्यवंश को आगे बढ़ाया।'
    },
    {
        id: 'nimi',
        name: 'निमि',
        subtitle: 'विदेह वंश संस्थापक',
        parent: 'ikshvaku',
        yug: 'treta',
        parichay: 'इनके नाम पर विदेह या मिथिला वंश चला।'
    },
    {
        id: 'danda',
        name: 'दण्ड',
        subtitle: 'इक्ष्वाकु पुत्र',
        parent: 'ikshvaku',
        yug: 'treta',
        parichay: 'दंडकारण्य वन का नाम इन्हीं के नाम पर पड़ा।'
    },
    // Vikukshi's immediate
    {
        id: 'puranjaya',
        name: 'पुरंजय',
        subtitle: 'ककुत्स्थ / इन्द्रवाह',
        parent: 'vikukshi',
        yug: 'treta',
        kali_year: -2139096,
        parichay: 'इन्होंने देवासुर संग्राम में वृषभ रूपी इन्द्र पर बैठकर युद्ध किया था।'
    },
    // Vikukshi to Harishchandra (Suryavansh main line)
    {
        id: 'anena_surya',
        name: 'अनेना',
        subtitle: 'पुरंजय पुत्र',
        parent: 'puranjaya',
        yug: 'treta'
    },
    {
        id: 'prithu_surya',
        name: 'पृथु',
        subtitle: 'अनेना पुत्र',
        parent: 'anena_surya',
        yug: 'treta'
    },
    {
        id: 'vishvarandhi',
        name: 'विश्वरंधि',
        subtitle: 'पृथु पुत्र',
        parent: 'prithu_surya',
        yug: 'treta'
    },
    {
        id: 'chandra_surya',
        name: 'चंद्र',
        subtitle: 'विश्वरंधि पुत्र',
        parent: 'vishvarandhi',
        yug: 'treta'
    },
    {
        id: 'yuvanashva_1',
        name: 'युवनाश्व प्रथम',
        subtitle: 'चंद्र पुत्र',
        parent: 'chandra_surya',
        yug: 'treta'
    },
    {
        id: 'shravasta',
        name: 'श्रावस्त',
        subtitle: 'श्रावस्ती के संस्थापक',
        parent: 'yuvanashva_1',
        yug: 'treta'
    },
    {
        id: 'brihadashva',
        name: 'बृहदाश्व',
        subtitle: 'श्रावस्त पुत्र',
        parent: 'shravasta',
        yug: 'treta'
    },
    {
        id: 'kuvalayashva',
        name: 'कुवलयाश्व',
        subtitle: 'धुंधुमार',
        parent: 'brihadashva',
        yug: 'treta',
        parichay: 'धुंधु नामक राक्षस का वध करने के कारण धुंधुमार कहलाए।'
    },
    {
        id: 'dridhashva',
        name: 'दृढ़ाश्व',
        subtitle: 'धुंधुमार पुत्र',
        parent: 'kuvalayashva',
        yug: 'treta'
    },
    {
        id: 'chandrashva',
        name: 'चन्द्राश्व',
        subtitle: 'धुंधुमार पुत्र',
        parent: 'kuvalayashva',
        yug: 'treta'
    },
    {
        id: 'kapilashva',
        name: 'कपिलाश्व',
        subtitle: 'धुंधुमार पुत्र',
        parent: 'kuvalayashva',
        yug: 'treta'
    },

    {
        id: 'pramoda',
        name: 'प्रमोद',
        subtitle: 'दृढ़ाश्व पुत्र',
        parent: 'dridhashva',
        yug: 'treta'
    },
    {
        id: 'haryashva_1',
        name: 'हर्याश्व प्रथम',
        subtitle: 'प्रमोद पुत्र',
        parent: 'pramoda',
        yug: 'treta'
    },
    {
        id: 'nikumbha_surya',
        name: 'निकुंभ',
        subtitle: 'हर्याश्व पुत्र',
        parent: 'haryashva_1',
        yug: 'treta'
    },
    {
        id: 'baharnashva',
        name: 'बहर्णाश्व',
        subtitle: 'निकुंभ पुत्र',
        parent: 'nikumbha_surya',
        yug: 'treta'
    },
    {
        id: 'krishashva',
        name: 'कृशाश्व',
        subtitle: 'बहर्णाश्व पुत्र',
        parent: 'baharnashva',
        yug: 'treta'
    },
    {
        id: 'prasenajit_1',
        name: 'प्रसेनजित प्रथम',
        subtitle: 'कृशाश्व पुत्र',
        parent: 'krishashva',
        yug: 'treta'
    },
    {
        id: 'yuvanashva_2',
        name: 'युवनाश्व द्वितीय',
        subtitle: 'प्रसेनजित पुत्र',
        parent: 'prasenajit_1',
        yug: 'treta'
    },
    {
        id: 'mandhata',
        name: 'मान्धाता',
        subtitle: 'चक्रवर्ती सम्राट',
        parent: 'yuvanashva_2',
        yug: 'treta',
        parichay: 'इनका जन्म पिता युवनाश्व के गर्भ (ऋषियों के मन्त्रपूत जल पीने के कारण) से हुआ था। इन्द्र ने इन्हें अपनी उंगली चुसाकर पाला था।'
    },

    {
        id: 'bindumati',
        name: 'बिंदुमती',
        subtitle: 'मान्धाता पत्नी',
        parent: '',
        spouseOf: 'mandhata',
        yug: 'treta',
        parichay: 'यादव नरेश शशबिंदु की पुत्री।'
    },
    {
        id: 'muchukunda',
        name: 'मुचुकुन्द',
        subtitle: 'मान्धाता पुत्र',
        parent: 'mandhata',
        mother: 'bindumati',
        yug: 'treta',
        parichay: 'महान योद्धा। इन्होंने देवासुर संग्राम में देवताओं का साथ दिया था। द्वापर युग में इन्होंने अपनी दृष्टि से कालयवन को भस्म किया था।'
    },
    {
        id: 'ambarisha_mandhata',
        name: 'अम्बरीष',
        subtitle: 'मान्धाता पुत्र',
        parent: 'mandhata',
        mother: 'bindumati',
        yug: 'treta'
    },

    {
        id: 'purukutsa',
        name: 'पुरुकुत्स',
        subtitle: 'मान्धाता पुत्र',
        parent: 'mandhata',
        mother: 'bindumati',
        yug: 'treta'
    },
    {
        id: 'trasadasyu',
        name: 'त्रासदस्यु',
        subtitle: 'पुरुकुत्स पुत्र',
        parent: 'purukutsa',
        yug: 'treta'
    },
    {
        id: 'sambhuta',
        name: 'संभ्रुत',
        subtitle: 'त्रासदस्यु पुत्र',
        parent: 'trasadasyu',
        yug: 'treta'
    },
    {
        id: 'anaranya_2',
        name: 'अनरण्य द्वितीय',
        subtitle: 'संभ्रुत पुत्र',
        parent: 'sambhuta',
        yug: 'treta'
    },
    {
        id: 'prishadashva_2',
        name: 'पृषदाश्व',
        subtitle: 'अनरण्य पुत्र',
        parent: 'anaranya_2',
        yug: 'treta'
    },
    {
        id: 'haryashva_2',
        name: 'हर्याश्व द्वितीय',
        subtitle: 'पृषदाश्व पुत्र',
        parent: 'prishadashva_2',
        yug: 'treta'
    },
    {
        id: 'hastya',
        name: 'हस्त्य',
        subtitle: 'हर्याश्व पुत्र',
        parent: 'haryashva_2',
        yug: 'treta'
    },
    {
        id: 'sumana',
        name: 'सुमन',
        subtitle: 'हस्त्य पुत्र',
        parent: 'hastya',
        yug: 'treta'
    },
    {
        id: 'tridhanva',
        name: 'त्रिधन्वा',
        subtitle: 'सुमन पुत्र',
        parent: 'sumana',
        yug: 'treta'
    },
    {
        id: 'trayaruni',
        name: 'त्रैयारुणि',
        subtitle: 'त्रिधन्वा पुत्र',
        parent: 'tridhanva',
        yug: 'treta'
    },
    {
        id: 'trishanku',
        name: 'त्रिशंकु',
        subtitle: 'सत्यव्रत',
        parent: 'trayaruni',
        yug: 'treta',
        parichay: 'विश्वामित्र ने इन्हें सदेह स्वर्ग भेजा था, जहाँ से इन्द्र ने इन्हें उल्टा गिरा दिया। फिर विश्वामित्र ने इनके लिए अलग स्वर्ग (त्रिशंकु स्वर्ग) का निर्माण किया।'
    },


    // Descendants of Sharyati
    {
        id: 'sukanya_surya',
        name: 'सुकन्या',
        subtitle: 'शर्याति पुत्री',
        parent: 'sharyati',
        yug: 'satya',
        parichay: 'इनका विवाह महर्षि च्यवन से हुआ था।'
    },
    {
        id: 'anarta',
        name: 'आनर्त',
        subtitle: 'शर्याति पुत्र',
        parent: 'sharyati',
        yug: 'satya',
        parichay: 'इनके नाम पर आनर्त देश (आधुनिक गुजरात का भाग) का नाम पड़ा।'
    },

    // Descendants of Nabhaga
    {
        id: 'ambarisha',
        name: 'अम्बरीष',
        subtitle: 'महान विष्णु भक्त',
        parent: 'nabhaga',
        yug: 'satya',
        parichay: 'दुर्वासा ऋषि के श्राप से सुदर्शन चक्र ने इनकी रक्षा की थी।'
    },


    {
        id: 'satyaratha',
        name: 'सत्यरथा',
        subtitle: 'त्रिशंकु पत्नी',
        parent: '',
        spouseOf: 'trishanku',
        yug: 'treta'
    },

    {
        id: 'harishchandra',
        name: 'हरिश्चंद्र',
        subtitle: 'सत्यवादी',
        parent: 'trishanku',
        mother: 'satyaratha',
        yug: 'treta'
    },

    // Harishchandra to Bhagirath Lineage
    {
        id: 'taramati',
        name: 'तारामती (शैव्या)',
        subtitle: 'हरिश्चंद्र पत्नी',
        parent: '',
        spouseOf: 'harishchandra',
        yug: 'treta'
    },
    {
        id: 'rohitashva',
        name: 'रोहिताश्व',
        subtitle: 'हरिश्चंद्र पुत्र',
        parent: 'harishchandra',
        mother: 'taramati',
        yug: 'treta'
    },
    {
        id: 'harita',
        name: 'हरित',
        subtitle: 'रोहिताश्व पुत्र',
        parent: 'rohitashva',
        yug: 'treta'
    },
    {
        id: 'chanchu',
        name: 'चंचु',
        subtitle: 'हरित पुत्र',
        parent: 'harita',
        yug: 'treta'
    },
    {
        id: 'sudeva',
        name: 'सुदेव',
        subtitle: 'चंचु पुत्र',
        parent: 'chanchu',
        yug: 'treta'
    },
    {
        id: 'ruruka',
        name: 'रुरुक',
        subtitle: 'सुदेव पुत्र',
        parent: 'sudeva',
        yug: 'treta'
    },
    {
        id: 'vrika',
        name: 'वृक',
        subtitle: 'रुरुक पुत्र',
        parent: 'ruruka',
        yug: 'treta'
    },
    {
        id: 'bahu',
        name: 'बाहु (बाहुक)',
        subtitle: 'वृक पुत्र',
        parent: 'vrika',
        yug: 'treta'
    },
    {
        id: 'sagara',
        name: 'सगर',
        subtitle: 'चक्रवर्ती सम्राट',
        parent: 'bahu',
        yug: 'treta',
        parichay: 'सगर के अश्वमेध यज्ञ का घोड़ा इंद्र ने कपिल मुनि के आश्रम में बांध दिया था।'
    },
    {
        id: 'sagara_wives_proxy',
        name: 'सगर की पत्नियाँ',
        subtitle: 'सुमति व केशिनी',
        isProxy: true,
        parent: '',
        spouseOf: 'sagara',
        clusterName: 'सगर की पत्नियाँ',
        yug: 'treta'
    },
    {
        id: 'sumati_sagara',
        name: 'सुमति',
        subtitle: 'सगर पत्नी',
        parent: '',
        spouseOf: 'sagara',
        yug: 'treta',
        clusterName: 'सगर की पत्नियाँ'
    },
    {
        id: 'keshini',
        name: 'केशिनी',
        subtitle: 'सगर पत्नी',
        parent: '',
        spouseOf: 'sagara',
        yug: 'treta',
        clusterName: 'सगर की पत्नियाँ'
    },
    {
        id: 'sagara_60000_sons',
        name: '60,000 पुत्र',
        subtitle: 'सगर पुत्र',
        parent: 'sagara',
        mother: 'sumati_sagara',
        yug: 'treta',
        parichay: 'सुमति के 60,000 पुत्र, जिन्हें कपिल मुनि ने भस्म कर दिया था।',
        clusterName: 'सगर के 60 हज़ार पुत्र'
    },
    {
        id: 'asamanjas',
        name: 'असमंजस',
        subtitle: 'सगर पुत्र',
        parent: 'sagara',
        mother: 'keshini',
        yug: 'treta'
    },
    {
        id: 'ambujakshi',
        name: 'अम्बुजाक्षी',
        subtitle: 'असमंजस पत्नी',
        parent: '',
        spouseOf: 'asamanjas',
        yug: 'treta'
    },
    {
        id: 'anshuman',
        name: 'अंशुमान',
        subtitle: 'असमंजस पुत्र',
        parent: 'asamanjas',
        mother: 'ambujakshi',
        yug: 'treta'
    },
    {
        id: 'dilipa_1',
        name: 'दिलीप प्रथम',
        subtitle: 'अंशुमान पुत्र',
        parent: 'anshuman',
        yug: 'treta'
    },

    {
        id: 'bhagirath',
        name: 'भगीरथ',
        subtitle: 'गंगा को लाने वाले',
        parent: 'dilipa_1',
        yug: 'treta'
    },

    // Bhagirath to Raghu Lineage
    {
        id: 'shruta',
        name: 'श्रुत',
        subtitle: 'भगीरथ पुत्र',
        parent: 'bhagirath',
        yug: 'treta'
    },
    {
        id: 'nabhaga_2',
        name: 'नाभाग (द्वितीय)',
        subtitle: 'श्रुत पुत्र',
        parent: 'shruta',
        yug: 'treta'
    },
    {
        id: 'ambarisha_2',
        name: 'अम्बरीष (द्वितीय)',
        subtitle: 'नाभाग पुत्र',
        parent: 'nabhaga_2',
        yug: 'treta'
    },
    {
        id: 'sindhudvipa',
        name: 'सिन्धुद्वीप',
        subtitle: 'अम्बरीष पुत्र',
        parent: 'ambarisha_2',
        yug: 'treta'
    },
    {
        id: 'ayutayu',
        name: 'अयुतायु',
        subtitle: 'सिन्धुद्वीप पुत्र',
        parent: 'sindhudvipa',
        yug: 'treta'
    },
    {
        id: 'rituparna',
        name: 'ऋतुपर्ण',
        subtitle: 'अयुतायु पुत्र',
        parent: 'ayutayu',
        yug: 'treta'
    },
    {
        id: 'sarvakama',
        name: 'सर्वकाम',
        subtitle: 'ऋतुपर्ण पुत्र',
        parent: 'rituparna',
        yug: 'treta'
    },
    {
        id: 'sudasa',
        name: 'सुदास',
        subtitle: 'सर्वकाम पुत्र',
        parent: 'sarvakama',
        yug: 'treta'
    },
    {
        id: 'mitrasaha',
        name: 'मित्रसह (कल्माषपाद)',
        subtitle: 'सुदास पुत्र',
        parent: 'sudasa',
        yug: 'treta'
    },
    {
        id: 'ashmaka',
        name: 'अश्मक',
        subtitle: 'मित्रसह पुत्र',
        parent: 'mitrasaha',
        yug: 'treta'
    },
    {
        id: 'mulaka',
        name: 'मूलक',
        subtitle: 'अश्मक पुत्र',
        parent: 'ashmaka',
        yug: 'treta'
    },
    {
        id: 'shataratha',
        name: 'शतरथ',
        subtitle: 'मूलक पुत्र',
        parent: 'mulaka',
        yug: 'treta'
    },
    {
        id: 'vishvasaha',
        name: 'विश्वसह',
        subtitle: 'शतरथ पुत्र',
        parent: 'shataratha',
        yug: 'treta'
    },
    {
        id: 'dilipa_2',
        name: 'दिलीप द्वितीय (खट्वांग)',
        subtitle: 'विश्वसह पुत्र',
        parent: 'vishvasaha',
        yug: 'treta'
    },
    {
        id: 'dirghabahu',
        name: 'दीर्घबाहु',
        subtitle: 'दिलीप पुत्र',
        parent: 'dilipa_2',
        yug: 'treta'
    },

    {
        id: 'raghu',
        name: 'रघु',
        subtitle: 'रघुवंश के संस्थापक',
        parent: 'dirghabahu',
        yug: 'treta'
    },
    {
        id: 'aja',
        name: 'अज',
        subtitle: 'रघु के पुत्र',
        parent: 'raghu',
        yug: 'treta'
    },
    {
        id: 'dasharath',
        name: 'दशरथ',
        subtitle: 'अयोध्या के चक्रवर्ती सम्राट',
        parent: 'aja',
        yug: 'treta'
    },

    {
        id: 'indumati',
        name: 'इन्दुमती',
        subtitle: 'अज पत्नी',
        parent: '',
        spouseOf: 'aja',
        yug: 'treta'
    },
    {
        id: 'shanta',
        name: 'शान्ता',
        subtitle: 'दशरथ पुत्री',
        parent: 'dasharath',
        yug: 'treta',
        parichay: 'दशरथ की पुत्री जिसे अंगदेश के राजा रोमपाद ने गोद लिया था। इनका विवाह ऋष्यशृंग मुनि से हुआ था।'
    },

    {
        id: 'kaushalya',
        name: 'कौशल्या',
        subtitle: 'राम की माता',
        parent: '',
        spouseOf: 'dasharath',
        yug: 'treta',
        clusterName: 'दशरथ की 3 पत्नियाँ'
    },
    {
        id: 'kaikeyi',
        name: 'कैकेयी',
        subtitle: 'भरत की माता',
        parent: '',
        spouseOf: 'dasharath',
        yug: 'treta',
        clusterName: 'दशरथ की 3 पत्नियाँ'
    },
    {
        id: 'sumitra',
        name: 'सुमित्रा',
        subtitle: 'लक्ष्मण/शत्रुघ्न की माता',
        parent: '',
        spouseOf: 'dasharath',
        yug: 'treta',
        clusterName: 'दशरथ की 3 पत्नियाँ'
    },
    {
        id: 'ram',
        name: 'राम',
        subtitle: 'मर्यादा पुरुषोत्तम',
        parent: 'dasharath',
        mother: 'kaushalya',
        yug: 'treta'
    },
    {
        id: 'bharat',
        name: 'भरत',
        subtitle: 'आदर्श भ्राता',
        parent: 'dasharath',
        mother: 'kaikeyi',
        yug: 'treta'
    },
    {
        id: 'taksha',
        name: 'तक्ष',
        subtitle: 'तक्षशिला के राजा',
        parent: 'bharat',
        mother: 'mandavi',
        yug: 'treta',
        parichay: 'भरत ने गंधर्वों को हराकर सिंधु नदी के पूर्वी भाग में तक्षशिला नगर बसाया और तक्ष को वहां का राजा बनाया।'
    },
    {
        id: 'pushkala',
        name: 'पुष्कल',
        subtitle: 'पुष्कलावती के राजा',
        parent: 'bharat',
        mother: 'mandavi',
        yug: 'treta',
        parichay: 'भरत ने सिंधु नदी के पश्चिमी भाग में पुष्कलावती (पेशावर) नगर बसाया और पुष्कल को वहां का राजा बनाया।'
    },
    {
        id: 'luv',
        name: 'लव',
        subtitle: 'राम के पुत्र',
        parent: 'ram',
        mother: 'sita',
        yug: 'treta',
        parichay: 'लव ने लवपुरी (लाहौर) नगर की स्थापना की थी। आधुनिक काल में लेवा पाटीदार, कुर्मी, और लोहना समाज लव के वंशज माने जाते हैं। गहलौत, सिसोदिया, और सिकरवार जैसे कई राजपूत वंश भी लव के वंशज हैं।'
    },

    {
        id: 'kush',
        name: 'कुश',
        subtitle: 'राम के पुत्र',
        parent: 'ram',
        mother: 'sita',
        yug: 'treta',
        parichay: 'कुश ने कुशावती (कसूर) नगर बसाया था। आधुनिक काल में कड़वा पाटीदार, कुशवाहा, कोएरी, मौर्य, सैनी और अग्रवाल समाज कुश के वंशज माने जाते हैं। कच्छवाहा जैसे राजपूत वंश भी कुश के वंशज हैं।'
    },
];
