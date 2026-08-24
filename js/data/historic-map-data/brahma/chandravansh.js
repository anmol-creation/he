export const chandravanshData = [
    // --- अत्रि के पुत्र ---
    
    { id: 'dattatreya_chandra', name: 'दत्तात्रेय', subtitle: 'विष्णु अंश', parent: 'atri',mother: 'anasuya_chandra',lineLabel: 'दत्तात्रेय', gender: 'male', yug: 'satya' },
    { id: 'durvasa_chandra', name: 'दुर्वासा', subtitle: 'शिव अंश', parent: 'atri', mother: 'anasuya_chandra',lineLabel: 'दुर्वासा', gender: 'male', yug: 'satya' },
    { id: 'chandra_chandra', name: 'चंद्र', subtitle: 'चंद्र देव (चंद्रवंश के मूल)', parent: 'atri',gender: 'male',lineLabel: 'चंद्र', mother: 'anasuya_chandra', yug: 'satya' },

    // --- चंद्र देव की पत्नियां ---
    { id: 'tara_chandra', name: 'तारा', subtitle: 'चंद्र पत्नी', parent: '', spouseOf: 'chandra_chandra',gender: 'female', lineLabel: 'तारा', yug: 'satya' , clusterName:'चंद्र की पत्नियाँ', parichay: 'देवगुरु बृहस्पति की पूर्व पत्नी, जिनका अपहरण चंद्र देव ने किया था जिससे तारामय युद्ध हुआ। बाद में ये चंद्र देव की पत्नी बनीं।' },
    { id: 'dakshayani_chandra_proxy', name: 'दक्ष की 27 पुत्रियां', subtitle: 'चंद्र की पत्नियां', parent: '', spouseOf: 'chandra_chandra', gender: 'female', isProxy: true, clusterName:'चंद्र की पत्नियाँ', yug: 'satya', parichay: 'प्रजापति दक्ष की 27 पुत्रियां (अश्विनी, भरणी, कृत्तिका, रोहिणी आदि) जिनका विवाह चंद्र देव से हुआ था और जिन्हें 27 नक्षत्र माना जाता है।' },
    { id: 'rohini_chandra', name: 'रोहिणी', subtitle: 'चंद्र की प्रिय पत्नी', parent: 'dakshayani_chandra_proxy', spouseOf: 'chandra_chandra', gender: 'female', clusterName:'चंद्र की पत्नियाँ', yug: 'satya', parichay: 'दक्ष की 27 पुत्रियों में से चंद्र देव की सबसे प्रिय पत्नी। चंद्र देव के इनके प्रति अधिक झुकाव के कारण ही दक्ष ने चंद्र को क्षय रोग का श्राप दिया था।' },
    
   // एवं दैवीय संतानें (अष्ट-वसु के रूप में) ---
    { id: 'varchas_chandra', name: 'वर्चस्', subtitle: 'चंद्र पुत्र (वसु)', gender: 'male', parent: 'chandra_chandra', clusterName:'चंद्र के अन्य पुत्र', yug: 'satya',lineLabel: 'वर्चस्', parichay: 'महाभारत के अनुसार, अष्ट-वसुओं में से एक "सोम" (चंद्र) के दैवीय पुत्र। देवर्षियों के कहने पर इन्होंने ही अर्जुन के पुत्र अभिमन्यु के रूप में धरती पर अवतार लिया था।' },
    { id: 'manohara_chandra', name: 'मनोहरा', subtitle: 'वर्चस् (वसु) की पत्नी', gender: 'female', parent: '', spouseOf: 'varchas_chandra', lineLabel: 'मनोहरा',clusterName:'चंद्र के अन्य पुत्र', yug: 'satya', parichay: 'ये अष्ट-वसुओं में से एक "सोम" के पुत्र वर्चस् की पत्नी हैं। महाभारत (आदि पर्व) के अनुसार इनसे शिशिर, प्राण और रमण नामक तीन पुत्र हुए।' },
    { id: 'shishira_chandra', name: 'शिशिर', subtitle: 'वर्चस्-मनोहरा पुत्र', gender: 'male', parent: 'varchas_chandra', clusterName:'चंद्र के अन्य पुत्र', lineLabel: 'शिशिर', mother: 'manohara_chandra', yug: 'satya' },
    { id: 'prana_chandra', name: 'प्राण', subtitle: 'वर्चस्-मनोहरा पुत्र', lineLabel: 'प्राण', gender: 'male', parent: 'varchas_chandra', mother: 'manohara_chandra', clusterName:'चंद्र के अन्य पुत्र', yug: 'satya' },
    { id: 'ramana_chandra', name: 'रमण', subtitle: 'वर्चस्-मनोहरा पुत्र', lineLabel: 'रमण', gender: 'male', parent: 'varchas_chandra', clusterName:'चंद्र के अन्य पुत्र', mother: 'manohara_chandra', yug: 'satya' },

    // --- चंद्र देव के पुत्र ---
    { id: 'budh_chandra', name: 'बुध', subtitle: 'चंद्र व तारा के पुत्र', parent: 'chandra_chandra', mother: 'tara_chandra',lineLabel: 'बुध',gender: 'male', yug: 'satya' },

    // --- बुध की पत्नी ---
    { id: 'ila_chandra', name: 'इला', subtitle: 'बुध की पत्नी', gender: 'female',parent: 'vaivasvata_manu', spouseOf: 'budh_chandra', yug: 'satya' },

    // --- पुरुरवा ---
    { id: 'pururava_chandra', name: 'पुरुरवा', subtitle: 'चंद्रवंश के प्रथम राजा', parent: 'budh_chandra',gender: 'male',clusterName:'चंद्रवंश प्रारंभ ',lineLabel: 'पुरुरवा', mother: 'ila_chandra', yug: 'satya' },
    { id: 'urvashi_chandra', name: 'उर्वशी', subtitle: 'पुरुरवा की पत्नी (अप्सरा)', gender: 'female',parent: '', spouseOf: 'pururava_chandra', yug: 'satya' },

    // --- पुरुरवा के पुत्र (आयु, श्रुतायु, सत्यायु, रय, विजय, जय) ---
    
    { id: 'ayu_chandra', name: 'आयु', subtitle: 'पुरुरवा के ज्येष्ठ पुत्र',gender: 'male', parent: 'pururava_chandra', lineLabel: 'आयु',mother: 'urvashi_chandra', yug: 'satya'},
    { id: 'shrutayu_chandra', name: 'श्रुतायु', subtitle: 'पुरुरवा के पुत्र',gender: 'male', parent: 'pururava_chandra', mother: 'urvashi_chandra',lineLabel: 'श्रुतायु', yug: 'satya', clusterName: 'पुरुरवा के अन्य पुत्र' },
    { id: 'satyayu_chandra', name: 'सत्यायु', subtitle: 'पुरुरवा के पुत्र', lineLabel: 'सत्यायु',parent: 'pururava_chandra',gender: 'male', mother: 'urvashi_chandra', yug: 'satya', clusterName: 'पुरुरवा के अन्य पुत्र' },
    { id: 'raya_chandra', name: 'रय', subtitle: 'पुरुरवा के पुत्र',gender: 'male', lineLabel: 'रय',parent: 'pururava_chandra', mother: 'urvashi_chandra', yug: 'satya', clusterName: 'पुरुरवा के अन्य पुत्र' },
    { id: 'vijaya_chandra', name: 'विजय', subtitle: 'पुरुरवा के पुत्र',lineLabel: 'विजय',gender: 'male', parent: 'pururava_chandra', mother: 'urvashi_chandra', yug: 'satya', clusterName: 'पुरुरवा के अन्य पुत्र' },
    { id: 'jaya_chandra', name: 'जय', subtitle: 'पुरुरवा के पुत्र', lineLabel: 'जय',parent: 'pururava_chandra', mother: 'urvashi_chandra', yug: 'satya', clusterName: 'पुरुरवा के अन्य पुत्र' },
    { id: 'vasuman_shrutayu_chandra', name: 'वसुमान', subtitle: 'श्रुतायु पुत्र', gender: 'male',lineLabel: 'वसुमान', parent: 'shrutayu_chandra', yug: 'satya', clusterName: 'पुरुरवा के अन्य पुत्र', parichay: 'भागवत पुराण के अनुसार, ये पुरुरवा के पुत्र श्रुतायु के पुत्र थे।' },
    { id: 'shrutanjaya_chandra', name: 'श्रुतंजय', subtitle: 'सत्यायु पुत्र', gender: 'male', parent: 'satyayu_chandra', lineLabel: 'श्रुतंजय',yug: 'satya', clusterName: 'पुरुरवा के अन्य पुत्र', parichay: 'भागवत पुराण के अनुसार, ये पुरुरवा के पुत्र सत्यायु के पुत्र थे।' },
    { id: 'eka_raya_chandra', name: 'एक', subtitle: 'रय पुत्र', gender: 'male', parent: 'raya_chandra',lineLabel: 'एक', yug: 'satya', clusterName: 'पुरुरवा के अन्य पुत्र', parichay: 'भागवत पुराण के अनुसार, ये पुरुरवा के पुत्र रय के पुत्र थे।' },
    { id: 'amita_jaya_chandra', name: 'अमित', subtitle: 'जय पुत्र', gender: 'male', parent: 'jaya_chandra', lineLabel: 'अमित',yug: 'satya', clusterName: 'पुरुरवा के अन्य पुत्र', parichay: 'भागवत पुराण के अनुसार, ये पुरुरवा के पुत्र जय के पुत्र थे।' },

    // --- आयु की पत्नी ---
    { id: 'prabha_chandra', name: 'प्रभा', subtitle: 'आयु की पत्नी / स्वर्भानु पुत्री', gender: 'female',parent: 'svarbhanu_danava', spouseOf: 'ayu_chandra', yug: 'satya' },

    // --- आयु के पुत्र (नहुष, क्षत्रवृद्ध, रम्भ, रजि, अनेना) ---


    { id: 'nahusha_chandra', name: 'नहुष', subtitle: 'आयु के पुत्र / अशोक सुंदरी पति', parent: 'ayu_chandra', gender:'male',lineLabel:'नहुष', mother: 'prabha_chandra', spouseOf: 'ashokasundari', clusterName:'आयु के पुत्र',  yug: 'satya'},
    
    // क्षत्रवृद्ध चंद्रवंशी
    
    { id: 'kshatravriddha_chandra', name: 'क्षत्रवृद्ध', subtitle: 'आयु के पुत्र',lineLabel: 'क्षत्रवृद्ध', gender: 'male', parent: 'ayu_chandra', mother: 'prabha_chandra', yug: 'satya', clusterName: 'आयु के पुत्र'},
    { id: 'sunahotra_kashi_chandra', name: 'सुनहोत्र', subtitle: 'क्षत्रवृद्ध पुत्र', gender: 'male', parent: 'kshatravriddha_chandra', yug: 'satya', clusterName: 'क्षत्रवृद्ध वंशी' },
    
    // कुश चंद्रवंश 
    { id: 'kusha_chandra', name: 'कुश', subtitle: 'सुनहोत्र पुत्र',lineLabel: 'कुश', gender: 'male', parent: 'sunahotra_kashi_chandra', yug: 'satya'},
    { id: 'prati_kusha_chandra', name: 'प्रति', subtitle: 'कुश पुत्र', gender: 'male', parent: 'kusha_chandra', yug: 'satya', clusterName: 'कुश चंद्रवंश' },
    { id: 'sanjaya_kusha_chandra', name: 'सञ्जय', subtitle: 'प्रति पुत्र', gender: 'male', parent: 'prati_kusha_chandra', yug: 'satya', clusterName: 'कुश चंद्रवंश' },
    { id: 'jaya_kusha_chandra', name: 'जय', subtitle: 'सञ्जय पुत्र', gender: 'male', parent: 'sanjaya_kusha_chandra', yug: 'satya', clusterName: 'कुश चंद्रवंश' },
    { id: 'krita_kusha_chandra', name: 'कृत', subtitle: 'जय पुत्र', gender: 'male', parent: 'jaya_kusha_chandra', yug: 'satya', clusterName: 'कुश चंद्रवंश' },
    { id: 'haryavana_chandra', name: 'हर्यवन (हर्यश्व)', subtitle: 'कृत पुत्र', gender: 'male', parent: 'krita_kusha_chandra', yug: 'treta', clusterName: 'कुश चंद्रवंश' },
    { id: 'sahadeva_kusha_chandra', name: 'सहदेव', subtitle: 'हर्यवन पुत्र', gender: 'male', parent: 'haryavana_chandra', yug: 'treta', clusterName: 'कुश चंद्रवंश' },
    { id: 'hina_chandra', name: 'हीन', subtitle: 'सहदेव पुत्र', gender: 'male', parent: 'sahadeva_kusha_chandra', yug: 'treta', clusterName: 'कुश चंद्रवंश' },
    { id: 'jayasena_kusha_chandra', name: 'जयसेन', subtitle: 'हीन पुत्र', gender: 'male', parent: 'hina_chandra', yug: 'treta', clusterName: 'कुश चंद्रवंश' },
    { id: 'sankriti_kusha_chandra', name: 'सङ्कृति', subtitle: 'जयसेन पुत्र', gender: 'male', parent: 'jayasena_kusha_chandra', yug: 'treta', clusterName: 'कुश चंद्रवंश' },
    { id: 'jaya_sankriti_chandra', name: 'जय (क्षात्रधर्मा)', subtitle: 'सङ्कृति पुत्र', gender: 'male', parent: 'sankriti_kusha_chandra', yug: 'treta', parichay: 'यह महान महारथी थे, जिन्होंने क्षत्रियों के धर्म का पूरी निष्ठा से पालन किया।', clusterName: 'कुश चंद्रवंश' },

    // --- काशी राजवंश (Kashi Dynasty) ---
    
    { id: 'kashya', name: 'काश्य', subtitle: 'काशी के संस्थापक', gender: 'male', parent: 'sunahotra_kashi_chandra', yug: 'satya', parichay: 'इन्हीं के नाम पर काशी (वाराणसी) नगर का नामकरण हुआ माना जाता है।' },
    { id: 'rashtra_chandra', name: 'राष्ट्र', subtitle: 'काश्य पुत्र', gender: 'male', parent: 'kashya', yug: 'satya', clusterName: 'काशी राजवंश' },
    { id: 'dirghatapa_chandra', name: 'दीर्घतपा', subtitle: 'राष्ट्र पुत्र', gender: 'male', parent: 'rashtra_chandra', yug: 'satya', clusterName: 'काशी राजवंश' },
    { id: 'dhanvantari_chandra', name: 'धन्वंतरि', subtitle: 'आयुर्वेद प्रवर्तक / विष्णु अंशावतार', gender: 'male', parent: 'dirghatapa_chandra', yug: 'satya', parichay: 'समुद्र मंथन से अमृत कलश लेकर प्रकट हुए थे। काशी राजवंश में इनका जन्म हुआ था और ये महान वैद्य माने जाते हैं।', clusterName: 'काशी राजवंश' },
    { id: 'ketuman_chandra', name: 'केतुमान', subtitle: 'धन्वंतरि पुत्र', gender: 'male', parent: 'dhanvantari_chandra', yug: 'satya', clusterName: 'काशी राजवंश' },
    { id: 'bhimaratha_chandra', name: 'भीमरथ', subtitle: 'केतुमान पुत्र', gender: 'male', parent: 'ketuman_chandra', yug: 'treta', clusterName: 'काशी राजवंश' },
    { id: 'divodasa_chandra', name: 'दिवोदास', subtitle: 'काशी नरेश', gender: 'male', parent: 'bhimaratha_chandra', yug: 'treta', parichay: 'काशी के महान राजा, जिन्होंने क्षेमक राक्षस से काशी को मुक्त कराया था।', clusterName: 'काशी राजवंश' },
    { id: 'pratardana_chandra', name: 'प्रतर्दन', subtitle: 'दिवोदास पुत्र (ऋतध्वज)', gender: 'male', parent: 'divodasa_chandra', yug: 'treta', parichay: 'इन्हें ऋतध्वज भी कहा जाता है। इन्होंने पातालकेतु राक्षस का वध कर मदालसा से विवाह किया।', clusterName: 'काशी राजवंश' },
    { id: 'madalasa_chandra', name: 'मदालसा', subtitle: 'प्रतर्दन (ऋतध्वज) पत्नी', gender: 'female', parent: '', spouseOf: 'pratardana_chandra', yug: 'treta', clusterName: 'काशी राजवंश', parichay: 'विश्वावसु गन्धर्वराज की पुत्री। यह महान विदुषी और ब्रह्मवादिनी थीं, जिन्होंने पालने में झुलाते हुए ही अपने पुत्रों को ब्रह्मज्ञान दे दिया था।' },
    { id: 'vikranta_chandra', name: 'विक्रान्त', subtitle: 'प्रतर्दन-मदालसा पुत्र', gender: 'male', parent: 'pratardana_chandra', mother: 'madalasa_chandra', yug: 'treta', parichay: 'मदालसा के ज्ञान उपदेश से यह बचपन में ही ब्रह्मज्ञानी (संन्यासी) हो गए।', clusterName : 'प्रतर्दन अन्य के पुत्र'},
    { id: 'subahu_kashi_chandra', name: 'सुबाहु', subtitle: 'प्रतर्दन-मदालसा पुत्र', gender: 'male', parent: 'pratardana_chandra', mother: 'madalasa_chandra', yug: 'treta', parichay: 'मदालसा के ज्ञान उपदेश से यह बचपन में ही ब्रह्मज्ञानी हो गए।', clusterName: 'प्रतर्दन अन्य के पुत्र' },
    { id: 'arimardana_chandra', name: 'अरि मर्दन', subtitle: 'प्रतर्दन-मदालसा पुत्र', gender: 'male', parent: 'pratardana_chandra', mother: 'madalasa_chandra', yug: 'treta', parichay: 'मदालसा के ज्ञान उपदेश से यह बचपन में ही ब्रह्मज्ञानी हो गए।', clusterName: 'प्रतर्दन अन्य के पुत्र' },

    { id: 'vatsa_kashi_chandra', name: 'वत्स', subtitle: 'प्रतर्दन पुत्र', gender: 'male', parent: 'pratardana_chandra', yug: 'treta',clusterName: 'प्रतर्दन अन्य के पुत्र' },
    { id: 'alarka_chandra', name: 'अलर्क', subtitle: 'काशी नरेश', gender: 'male', parent: 'pratardana_chandra', mother: 'madalasa_chandra', yug: 'treta', parichay: 'महान तपस्वी राजा जिसने 66,000 वर्ष तक राज किया और फिर दत्तात्रेय से ज्ञान प्राप्त कर मोक्ष पाया। यह मदालसा के सबसे छोटे पुत्र थे, जिन्हें राजधर्म की शिक्षा मिली थी।' },

    { id: 'sannati_kashi_chandra', name: 'सन्नति', subtitle: 'अलर्क पुत्र', gender: 'male', parent: 'alarka_chandra', yug: 'treta', },
    { id: 'sunitha_kashi_chandra', name: 'सुनीथ', subtitle: 'सन्नति पुत्र', gender: 'male', parent: 'sannati_kashi_chandra', yug: 'treta' },
    { id: 'suketu_kashi_chandra', name: 'सुकेतु', subtitle: 'सुनीथ पुत्र', gender: 'male', parent: 'sunitha_kashi_chandra', yug: 'treta' },
    { id: 'satyaketu_kashi_chandra', name: 'सत्यकेतु', subtitle: 'सुकेतु पुत्र', gender: 'male', parent: 'suketu_kashi_chandra', yug: 'treta' },
    { id: 'dhrishtaketu_kashi_chandra', name: 'धृष्टकेतु', subtitle: 'सत्यकेतु पुत्र', gender: 'male', parent: 'satyaketu_kashi_chandra', yug: 'treta' },
    { id: 'sukumara_kashi_chandra', name: 'सुकुमार', subtitle: 'धृष्टकेतु पुत्र', gender: 'male', parent: 'dhrishtaketu_kashi_chandra', yug: 'treta' },
    { id: 'vitihotra_kashi_chandra', name: 'वीतिहोत्र', subtitle: 'सुकुमार पुत्र', gender: 'male', parent: 'sukumara_kashi_chandra', yug: 'treta'},
    { id: 'bharga_kashi_chandra', name: 'भर्ग', subtitle: 'वीतिहोत्र पुत्र', gender: 'male', parent: 'vitihotra_kashi_chandra', yug: 'treta' },
    { id: 'bhargabhumi_chandra', name: 'भार्गभूमि', subtitle: 'भर्ग पुत्र', gender: 'male', parent: 'bharga_kashi_chandra', yug: 'treta', parichay: 'भर्ग से भार्गभूमि हुए। इन्हीं के वंशज आगे चलकर भार्गव (वत्स) कहलाए।'},
    
    // रम्भ के वंशज

    { id: 'rambha_ayu_chandra', name: 'रम्भ', subtitle: 'आयु के पुत्र', gender: 'male', parent: 'ayu_chandra', mother: 'prabha_chandra', yug: 'satya' ,clusterName : 'आयु के पुत्र'
    },
    
    { id: 'rabhasa_chandra', name: 'रभस', subtitle: 'रम्भ पुत्र', gender: 'male', parent: 'rambha_ayu_chandra', yug: 'satya', clusterName: 'रम्भ वंश' },
    { id: 'gambhira_chandra', name: 'गम्भीर', subtitle: 'रभस पुत्र', gender: 'male', parent: 'rabhasa_chandra', yug: 'satya', clusterName: 'रम्भ वंश' },
    { id: 'akriya_chandra', name: 'अक्रिय', subtitle: 'गम्भीर पुत्र', gender: 'male', parent: 'gambhira_chandra', yug: 'satya', parichay: 'भागवत पुराण (9.17.10-11) के अनुसार, इनकी पत्नी के माध्यम से ब्राह्मणों के एक विशिष्ट वंश का आरंभ हुआ। क्षत्रिय राजा होने के बावजूद इनके वंशज ब्रह्मर्षि पद को प्राप्त हुए।', clusterName: 'रम्भ वंश' },
    
    //
    { id: 'raji_chandra', name: 'रजि', subtitle: 'आयु के पुत्र', gender: 'male', parent: 'ayu_chandra', mother: 'prabha_chandra', yug: 'satya', clusterName: 'आयु के पुत्र'},
    { id: 'rajeya_chandra', name: 'रजेय (500 पुत्र)', subtitle: 'रजि के पुत्र', gender: 'male', parent: 'raji_chandra', yug: 'satya', parichay: 'राजा रजि के 500 बलवान पुत्र। इन्होंने इंद्र से स्वर्ग छीन लिया था, जिसे बाद में बृहस्पति के छल से नष्ट किया गया' },
    
    // अनेना के वंशज
    { id: 'anena_chandra', name: 'अनेना', subtitle: 'आयु के पुत्र', gender: 'male', parent: 'ayu_chandra', mother: 'prabha_chandra', yug: 'satya', clusterName: 'आयु के पुत्र'},
    
    { id: 'shuddha_chandra', name: 'शुद्ध', subtitle: 'अनेना पुत्र', gender: 'male', parent: 'anena_chandra', yug: 'satya', clusterName: 'अनेना वंश' },
    { id: 'shuchi_chandra', name: 'शुचि', subtitle: 'शुद्ध पुत्र', gender: 'male', parent: 'shuddha_chandra', yug: 'satya', clusterName: 'अनेना वंश' },
    { id: 'trikakud_chandra', name: 'त्रिककुद् (धर्मसारथि)', subtitle: 'शुचि पुत्र', gender: 'male', parent: 'shuchi_chandra', yug: 'satya', clusterName: 'अनेना वंश' },
    { id: 'shantaraya_chandra', name: 'शान्तरय', subtitle: 'त्रिककुद् पुत्र', gender: 'male', parent: 'trikakud_chandra', yug: 'satya', parichay: 'ये आत्मज्ञानी (ब्रह्मज्ञानी) थे, अतः इन्होंने अपना वंश आगे नहीं बढ़ाया।', clusterName: 'अनेना वंश' },

    // --- नहुष की पत्नी ---
    { id: 'ashokasundari_chandra', name: 'अशोकसुंदरी', gender: 'female',subtitle: 'नहुष की पत्नी (शिव-पार्वती पुत्री)', parent: 'shiva_parivar_proxy', mother: 'parvati', spouseOf: 'nahusha_chandra', yug: 'satya', clusterName: 'शिव परिवार' },

    // --- नहुष के पुत्र (यति, ययाति, संयाति, अयाति, वियति, कृति) ---

    
    { id: 'yati_chandra', name: 'यति', subtitle: 'नहुष के ज्येष्ठ पुत्र', gender: 'male', parent: 'nahusha_chandra', mother: 'ashokasundari_chandra', yug: 'satya' , parichay: 'नहुष के ज्येष्ठ पुत्र। यति बचपन से ही आत्मज्ञानी थे और राज्यपद प्राप्त करने से मोक्ष में बाधा उत्पन्न होगी ऐसा सोचकर उन्होंने संन्यास ग्रहण कर लिया था।', clusterName: 'नहुष के अन्य पुत्र'},
    
    { id: 'sanyati_chandra', name: 'संयाति', subtitle: 'नहुष के पुत्र', gender: 'male', parent: 'nahusha_chandra', mother: 'ashokasundari_chandra', yug: 'satya', parichay: 'श्रीमद्भागवत पुराण के अनुसार, चक्रवर्ती सम्राट बनने के बाद ययाति ने अपने 4 छोटे भाइयों (संयाति, अयाति, वियति, कृति) को चारों दिशाओं का अधिपति (गवर्नर) नियुक्त कर दिया था, जिनमें से संयाति एक थे।', clusterName: 'नहुष के अन्य पुत्र' },
    { id: 'ayati_nahusha_chandra', name: 'अयाति', subtitle: 'नहुष के पुत्र', gender: 'male', parent: 'nahusha_chandra', mother: 'ashokasundari_chandra', yug: 'satya', parichay: 'श्रीमद्भागवत पुराण के अनुसार, चक्रवर्ती सम्राट बनने के बाद ययाति ने अपने 4 छोटे भाइयों (संयाति, अयाति, वियति, कृति) को चारों दिशाओं का अधिपति (गवर्नर) नियुक्त कर दिया था, जिनमें से अयाति एक थे।', clusterName: 'नहुष के अन्य पुत्र' },
    { id: 'viyati_chandra', name: 'वियति', subtitle: 'नहुष के पुत्र', gender: 'male', parent: 'nahusha_chandra', mother: 'ashokasundari_chandra', yug: 'satya' , parichay: 'श्रीमद्भागवत पुराण के अनुसार, चक्रवर्ती सम्राट बनने के बाद ययाति ने अपने 4 छोटे भाइयों (संयाति, अयाति, वियति, कृति) को चारों दिशाओं का अधिपति (गवर्नर) नियुक्त कर दिया था, जिनमें से वियति एक थे।', clusterName: 'नहुष के अन्य पुत्र' },
    { id: 'kriti_chandra', name: 'कृति', subtitle: 'नहुष के पुत्र', gender: 'male', parent: 'nahusha_chandra', mother: 'ashokasundari_chandra', yug: 'satya' , parichay: 'श्रीमद्भागवत पुराण के अनुसार, चक्रवर्ती सम्राट बनने के बाद ययाति ने अपने 4 छोटे भाइयों (संयाति, अयाति, वियति, कृति) को चारों दिशाओं का अधिपति (गवर्नर) नियुक्त कर दिया था, जिनमें से कृति एक थे।', clusterName: 'नहुष के अन्य पुत्र' },
    { id: 'yayati_chandra', name: 'ययाति', subtitle: 'महान सम्राट', gender: 'male', parent: 'nahusha_chandra', mother: 'ashokasundari_chandra', yug: 'satya', parichay: 'नहुष के द्वितीय पुत्र। ज्येष्ठ भ्राता यति के संन्यासी हो जाने पर ययाति को चक्रवर्ती सम्राट बनाया गया। इन्होंने अपने अन्य चारों भाइयों को विभिन्न दिशाओं का शासक नियुक्त किया।' },

    // --- ययाति की पत्नियां ---
    { id: 'devayani_yayati_chandra', name: 'देवयानी', subtitle: 'ययाति की पत्नी (शुक्राचार्य की पुत्री)', parent: 'shukracharya', spouseOf: 'yayati_chandra', yug: 'satya', clusterName: 'ययाति की पत्नियाँ' },
    { id: 'sharmishtha_chandra', name: 'शर्मिष्ठा', subtitle: 'ययाति की पत्नी (वृषपर्वा की पुत्री)', parent: 'vrishaparva_danava', spouseOf: 'yayati_chandra', yug: 'satya', clusterName: 'ययाति की पत्नियाँ' },

    // --- ययाति के पुत्र ---
        { id: 'yadu_chandra', name: 'यदु', subtitle: 'यदुवंश के संस्थापक', parent: 'yayati_chandra', mother: 'devayani_yayati_chandra', yug: 'treta', lineLabel: 'यदुवंश', clusterName: 'चंद्रवंश' },
        
    { id: 'turvasu_chandra', name: 'तुर्वसु', subtitle: 'ययाति के पुत्र', parent: 'turvasu_dynasty_proxy', mother: 'devayani_yayati_chandra', yug: 'treta', lineLabel: 'तुर्वसु वंश', clusterName: 'चंद्रवंश' },
    { id: 'druhyu_chandra', name: 'द्रुह्यु', subtitle: 'ययाति के पुत्र', parent: 'druhyu_dynasty_proxy', mother: 'sharmishtha_chandra', yug: 'treta', lineLabel: 'द्रुह्यु वंश',
        clusterName: 'चंद्रवंश' },
        
    { id: 'anu_yayati_chandra', name: 'अनु', subtitle: 'ययाति के पुत्र', parent: 'anu_dynasty_proxy', mother: 'sharmishtha_chandra', yug: 'treta', lineLabel: 'अनु वंश',
        clusterName: 'चंद्रवंश' },

    { id: 'puru_chandra', name: 'पुरु', subtitle: 'पौरव/कुरुवंश के संस्थापक', parent: 'puru_dynasty_proxy', mother: 'sharmishtha_chandra', yug: 'treta', lineLabel: 'पुरुवंश', 
        clusterName: 'चंद्रवंश' },

    // --- तुर्वसु वंश ---
    { id: 'vahni_turvasu_chandra', name: 'वह्नि', subtitle: 'तुर्वसु पुत्र', parent: 'turvasu_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'garbha_turvasu_chandra', name: 'गर्भ', subtitle: 'वह्नि पुत्र', parent: 'vahni_turvasu_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'gobhanu_turvasu_chandra', name: 'गोभानु', subtitle: 'गर्भ पुत्र', parent: 'garbha_turvasu_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'trishanu_turvasu_chandra', name: 'त्रिशानु', subtitle: 'गोभानु पुत्र', parent: 'gobhanu_turvasu_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'karandhama_turvasu_chandra', name: 'करन्धम', subtitle: 'त्रिशानु पुत्र', parent: 'trishanu_turvasu_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'marutta_turvasu_chandra', name: 'मरुत्त', subtitle: 'करन्धम पुत्र', parent: 'karandhama_turvasu_chandra', yug: 'treta', parichay: 'तुर्वसु वंश के राजा मरुत्त, जिनके कोई पुत्र नहीं था। इन्होंने पौरव वंशीय दुष्यंत को गोद लिया था।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dushyanta_turvasu_chandra', name: 'दुष्यंत (दत्तक)', subtitle: 'मरुत्त के दत्तक पुत्र', parent: 'marutta_turvasu_chandra', yug: 'treta', parichay: 'पौरव वंश के दुष्यंत जिन्हें मरुत्त ने गोद लिया। परन्तु ये पुनः पुरु वंश में लौट गए।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sharutthama_turvasu_chandra', name: 'शरुत्थाम', subtitle: 'दुष्यंत पुत्र', parent: 'dushyanta_turvasu_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'akrida_turvasu_chandra', name: 'आक्रीड', subtitle: 'शरुत्थाम पुत्र', parent: 'sharutthama_turvasu_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'pandya_turvasu_chandra', name: 'पाण्ड्य', subtitle: 'पाण्ड्य देश संस्थापक', parent: 'akrida_turvasu_chandra', yug: 'treta', parichay: 'इन्होंने दक्षिण भारत में पाण्ड्य राजवंश की स्थापना की।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kerala_turvasu_chandra', name: 'केरल', subtitle: 'केरल देश संस्थापक', parent: 'akrida_turvasu_chandra', yug: 'treta', parichay: 'इन्होंने दक्षिण में केरल (चेर) राज्य की स्थापना की।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'chola_turvasu_chandra', name: 'चोल', subtitle: 'चोल देश संस्थापक', parent: 'akrida_turvasu_chandra', yug: 'treta', parichay: 'इन्होंने दक्षिण में चोल राजवंश की स्थापना की। (नोट: बाद के चोल अभिलेखों जैसे तिरुवालंगाडु में चोल सम्राटों ने अपनी वंशावली सूर्यवंशी राजा मान्धाता व शिबि से जोड़ी, जबकि पुराण इन्हें चंद्रवंशी तुर्वसु की वंशावली में रखते हैं।)', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kola_turvasu_chandra', name: 'कोल', subtitle: 'कोल देश संस्थापक', parent: 'akrida_turvasu_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },

    // --- द्रुह्यु वंश ---
    { id: 'babhru_druhyu_chandra', name: 'बभ्रु', subtitle: 'द्रुह्यु पुत्र', parent: 'druhyu_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'setu_druhyu_chandra', name: 'सेतु', subtitle: 'बभ्रु पुत्र', parent: 'babhru_druhyu_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'arabdha_druhyu_chandra', name: 'आरब्ध (आरद्वत)', subtitle: 'सेतु पुत्र', parent: 'setu_druhyu_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'gandhara_druhyu_chandra', name: 'गान्धार', subtitle: 'गान्धार देश संस्थापक', parent: 'arabdha_druhyu_chandra', yug: 'treta', parichay: 'इन्हीं के नाम पर गान्धार (वर्तमान कंधार/अफगानिस्तान क्षेत्र) देश का नाम पड़ा।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dharma_druhyu_chandra', name: 'धर्म', subtitle: 'गान्धार पुत्र', parent: 'gandhara_druhyu_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dhrita_druhyu_chandra', name: 'धृत', subtitle: 'धर्म पुत्र', parent: 'dharma_druhyu_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'duryaman_druhyu_chandra', name: 'दुर्मन', subtitle: 'धृत पुत्र', parent: 'dhrita_druhyu_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'prachetas_druhyu_chandra', name: 'प्रचेतस', subtitle: 'दुर्मन पुत्र', parent: 'duryaman_druhyu_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
        { id: 'suchetas_druhyu_chandra', name: 'सुचेतस', subtitle: 'प्रचेतस के पुत्र', parent: 'prachetas_druhyu_chandra', yug: 'treta', parichay: 'इनके समेत प्रचेतस के 100 पुत्र हुए जो उत्तर दिशा में म्लेच्छ देशों के राजा बने।', clusterName: 'नहुष चंद्रवंशी' },
    // --- दक्षिण एवं पूर्वी राजवंश (Proxies) ---
    { id: 'mleccha_kings_proxy', name: 'म्लेच्छ राजवंश', subtitle: 'सुचेतस व अन्य भाइयों के वंश', parent: 'suchetas_druhyu_chandra', yug: 'treta', isProxy: true, clusterName: 'नहुष चंद्रवंशी' },
    { id: 'pandya_dynasty_proxy', name: 'पाण्ड्य वंश', subtitle: 'मदुरै राजवंश', parent: 'pandya_turvasu_chandra', yug: 'treta', isProxy: true, clusterName: 'नहुष चंद्रवंशी' },
    { id: 'chola_dynasty_proxy', name: 'चोल वंश', subtitle: 'कावेरी राजवंश', parent: 'chola_turvasu_chandra', yug: 'treta', isProxy: true, clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kerala_dynasty_proxy', name: 'चेर (केरल) वंश', subtitle: 'मालाबार राजवंश', parent: 'kerala_turvasu_chandra', yug: 'treta', isProxy: true, clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kola_dynasty_proxy', name: 'कोल वंश', subtitle: 'कोल राजवंश', parent: 'kola_turvasu_chandra', yug: 'treta', isProxy: true, clusterName: 'नहुष चंद्रवंशी' },

    { id: 'kalinga_dynasty_proxy', name: 'कलिंग वंश', subtitle: 'कलिंग राजवंश', parent: 'kalinga_anu', yug: 'treta', isProxy: true, clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vanga_dynasty_proxy', name: 'वंग वंश', subtitle: 'बंगाल राजवंश', parent: 'vanga_anu', yug: 'treta', isProxy: true, clusterName: 'नहुष चंद्रवंशी' },

    // --- महाभारत कालीन वंग नरेश (Mahabharata Era) ---
    { id: 'samudrasena_vanga', name: 'समुद्रसेन', subtitle: 'वंग नरेश', parent: 'vanga_dynasty_proxy', yug: 'dwapar', parichay: 'महाभारत काल में वंग देश (बंगाल) के शासक। ये कुरुक्षेत्र युद्ध में कौरवों की ओर से 10,000 हाथियों की सेना के साथ लड़े थे।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'chandrasena_vanga', name: 'चन्द्रसेन', subtitle: 'वंग नरेश', parent: 'samudrasena_vanga', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'pundra_dynasty_proxy', name: 'पुण्ड्र वंश', subtitle: 'पुण्ड्र राजवंश', parent: 'pundra_anu', yug: 'treta', isProxy: true, clusterName: 'नहुष चंद्रवंशी' },
    { id: 'suhma_dynasty_proxy', name: 'सुह्म वंश', subtitle: 'सुह्म राजवंश', parent: 'suhma_anu', yug: 'treta', isProxy: true, clusterName: 'नहुष चंद्रवंशी' },
    // --- महाभारत कालीन परवर्ती राजा (अज्ञात पीढ़ियों के बाद) ---
    { id: 'paundraka_vasudeva_chandra', name: 'पौण्ड्रक वासुदेव', subtitle: 'पुण्ड्र नरेश', parent: 'pundra_dynasty_proxy', yug: 'dwapar', parichay: 'महाभारत काल में पुण्ड्र देश का राजा, जो स्वयं को असली वासुदेव (कृष्ण) मानता था।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'chitrangada_kalinga_chandra', name: 'चित्रांगद', subtitle: 'कलिंग नरेश', parent: 'kalinga_dynasty_proxy', yug: 'dwapar', parichay: 'दुर्योधन की पत्नी भानुमती के पिता।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shrutayush_kalinga_chandra', name: 'श्रुतायु', subtitle: 'कलिंग नरेश', parent: 'kalinga_dynasty_proxy', yug: 'dwapar', parichay: 'महाभारत युद्ध में कौरवों की ओर से लड़े और अर्जुन द्वारा वीरगति को प्राप्त हुए।', clusterName: 'नहुष चंद्रवंशी' },

    // --- पौराणिक पाण्ड्य राजवंश (महाभारत काल) ---
    { id: 'kulashekara_pandya_myth', name: 'कुलशेखर पाण्ड्य (पौराणिक)', subtitle: 'पाण्ड्य नरेश', parent: 'pandya_dynasty_proxy', yug: 'dwapar', clusterName: 'पाण्ड्य राजवंश' },

    // मलयध्वज (पहले से موجود है, इसे अपडेट करेंगे)
    { id: 'malayadhwaja_pandya_chandra', name: 'मलयध्वज', subtitle: 'पाण्ड्य नरेश', parent: 'kulashekara_pandya_myth', yug: 'dwapar', parichay: 'महाभारत युद्ध में पांडवों की ओर से लड़े महान योद्धा।', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'kanchanamalai', name: 'कंचनमालई', subtitle: 'पाण्ड्य महारानी', parent: '', spouseOf: 'malayadhwaja_pandya_chandra', gender: 'female', yug: 'dwapar', parichay: 'राजा मलयध्वज पाण्ड्य की पत्नी।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'meenakshi_tadaatagai', name: 'मीनाक्षी (तडातगई)', subtitle: 'मदुरै की योद्धा रानी (पार्वती अवतार)', parent: 'malayadhwaja_pandya_chandra', mother: 'kanchanamalai', gender: 'female', yug: 'dwapar', parichay: 'मलयध्वज की पुत्री। इन्हें देवी पार्वती का अवतार माना जाता है। मदुरै का प्रसिद्ध मीनाक्षी मंदिर इन्हीं को समर्पित है।', clusterName: 'नहुष चंद्रवंशी' },

    // शिव-सुंदरेश्वर के साथ विवाह
    { id: 'sundareshwarar_shiva', name: 'सुंदरेश्वरर (शिव)', subtitle: 'मीनाक्षी के पति', parent: '', spouseOf: 'meenakshi_tadaatagai', yug: 'dwapar', parichay: 'भगवान शिव का वह रूप जिन्होंने रानी मीनाक्षी से विवाह किया था।', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'ugra_pandya', name: 'उग्र पाण्ड्य (सुब्रमण्य)', subtitle: 'मीनाक्षी-सुंदरेश्वरर के पुत्र', parent: 'sundareshwarar_shiva', mother: 'meenakshi_tadaatagai', yug: 'dwapar', parichay: 'मीनाक्षी और सुंदरेश्वरर (शिव) के पुत्र, जिन्हें कार्तिकेय (सुब्रमण्य) का अवतार माना जाता है।', clusterName: 'नहुष चंद्रवंशी' },

    // ऐतिहासिक अंतराल
    { id: 'early_pandya_link', name: 'ऐतिहासिक अंतराल (पाण्ड्य)', subtitle: 'अज्ञात पीढ़ियाँ', parent: 'ugra_pandya', yug: 'kali', parichay: 'पौराणिक पाण्ड्य शासकों और संगम काल के प्रारंभिक ऐतिहासिक पाण्ड्य राजाओं के बीच की पीढ़ियाँ।', clusterName: 'पाण्ड्य राजवंश' },

    // --- संगम काल के प्रारंभिक पाण्ड्य ---
    { id: 'mudattirumaran', name: 'मुदत्तिरुमारन', subtitle: 'संगम पाण्ड्य नरेश', parent: 'early_pandya_link', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'koon_pandya', name: 'कून पाण्ड्य', subtitle: 'संगम पाण्ड्य नरेश', parent: 'mudattirumaran', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'mudukudumi_peruvaluthi', name: 'मुदुकुडुमी पेरुवलुथि', subtitle: 'पलयागसलाई', parent: 'koon_pandya', yug: 'kali', parichay: 'इन्होंने कई वैदिक यज्ञ किए थे।', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'nedunjeliyan_1', name: 'नेदुन्जेलियन प्रथम', subtitle: 'आर्य पदाई कडन्था', parent: 'mudukudumi_peruvaluthi', yug: 'kali', parichay: 'इनके काल में ही कोवलन और कन्नगी (शिलप्पादिकारम) की घटना हुई थी।', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'kopperundevi', name: 'कोप्पेरुन्देवी', subtitle: 'पाण्ड्य महारानी', parent: '', spouseOf: 'nedunjeliyan_1', gender: 'female', yug: 'kali', parichay: 'नेदुन्जेलियन प्रथम की पत्नी, जिन्होंने कोवलन की अन्यायपूर्ण मृत्यु के प्रायश्चित स्वरूप प्राण त्याग दिए थे।', clusterName: 'पाण्ड्य राजवंश' },

    { id: 'nedunjeliyan_2', name: 'नेदुन्जेलियन द्वितीय', subtitle: 'तलैयालंगनाथु', parent: 'nedunjeliyan_1', mother: 'kopperundevi', yug: 'kali', parichay: 'इन्होंने तलैयालंगनम के युद्ध में चेर, चोल और पांच अन्य सरदारों के गुट को हराया था।', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'nan_maran', name: 'नन मारन', subtitle: 'संगम पाण्ड्य नरेश', parent: 'nedunjeliyan_2', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'nedunjeliyan_3', name: 'नेदुन्जेलियन तृतीय', subtitle: 'संगम पाण्ड्य नरेश', parent: 'nan_maran', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'ukkirap_peruvaludi', name: 'उक्किरप पेरुवलुदी', subtitle: 'संगम पाण्ड्य नरेश', parent: 'nedunjeliyan_3', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },

    // कलभ्र अंतराल
    { id: 'kalabhra_interregnum_pandya', name: 'कलभ्र अंतराल', subtitle: 'अंधकार युग', parent: 'ukkirap_peruvaludi', yug: 'kali', parichay: 'संगम युग के अंत में कलभ्र राजवंश के आक्रमण के कारण पाण्ड्य शासन का पतन हुआ।', clusterName: 'पाण्ड्य राजवंश' },

    // --- प्रथम पाण्ड्य साम्राज्य (First Pandyan Empire / 6th-10th Century) ---
    { id: 'kadungon', name: 'कडुंगोन', subtitle: 'पाण्ड्य पुनरुद्धारक', parent: 'kalabhra_interregnum_pandya', yug: 'kali', parichay: 'इन्होंने कलभ्रों को हराकर पाण्ड्य साम्राज्य की पुनर्स्थापना की (लगभग 590 CE)।', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'maravarman_avanisulamani', name: 'मारवर्मन अवनिसुलामणी', subtitle: 'पाण्ड्य नरेश', parent: 'kadungon', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'seliyan_sendan', name: 'सेलियान सेंडन (जयंतवर्मन)', subtitle: 'पाण्ड्य नरेश', parent: 'maravarman_avanisulamani', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'arikesari_maravarman', name: 'अरीकेसरी मारवर्मन (परंकुसन)', subtitle: 'पाण्ड्य नरेश', parent: 'seliyan_sendan', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'kochadaiyan_ranadhiran', name: 'कोचदैयन रणधीर', subtitle: 'पाण्ड्य नरेश', parent: 'arikesari_maravarman', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'maravarman_rajasimha_1', name: 'मारवर्मन राजसिम्हा प्रथम', subtitle: 'पाण्ड्य नरेश', parent: 'kochadaiyan_ranadhiran', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'varagunavarman_1', name: 'वरगुणवर्मन प्रथम', subtitle: 'पाण्ड्य नरेश', parent: 'maravarman_rajasimha_1', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'maravarman_srimara_srivallabha', name: 'मारवर्मन श्रीमारा श्रीवल्लभ', subtitle: 'पाण्ड्य नरेश', parent: 'varagunavarman_1', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'varagunavarman_2', name: 'वरगुणवर्मन द्वितीय', subtitle: 'पाण्ड्य नरेश', parent: 'maravarman_srimara_srivallabha', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'parantaka_viranarayana', name: 'परान्तक वीरनारायण', subtitle: 'पाण्ड्य नरेश', parent: 'varagunavarman_2', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'maravarman_rajasimha_2', name: 'मारवर्मन राजसिम्हा द्वितीय', subtitle: 'प्रथम साम्राज्य के अंतिम', parent: 'parantaka_viranarayana', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },

    // चोल आधिपत्य अंतराल
    { id: 'chola_dominance_pandya', name: 'चोल आधिपत्य अंतराल', subtitle: 'अवनति काल', parent: 'maravarman_rajasimha_2', yug: 'kali', parichay: 'चोल सम्राट परान्तक प्रथम द्वारा राजसिम्हा द्वितीय को हराने के बाद पाण्ड्य चोलों के अधीन सामंत रहे।', clusterName: 'पाण्ड्य राजवंश' },

    // --- द्वितीय पाण्ड्य साम्राज्य (Second Pandyan Empire / 13th-14th Century) ---
    { id: 'maravarman_srivallabha', name: 'मारवर्मन श्रीवल्लभ', subtitle: 'साम्राज्य पुनरुद्धारक', parent: 'chola_dominance_pandya', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'jatavarman_srivallabha', name: 'जटावर्मन श्रीवल्लभ', subtitle: 'पाण्ड्य नरेश', parent: 'maravarman_srivallabha', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'jatavarman_kulasekara_1', name: 'जटावर्मन कुलशेखर प्रथम', subtitle: 'पाण्ड्य नरेश', parent: 'jatavarman_srivallabha', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'maravarman_sundara_pandyan_1', name: 'मारवर्मन सुंदर पाण्ड्य प्रथम', subtitle: 'साम्राज्य विस्तारक', parent: 'jatavarman_kulasekara_1', yug: 'kali', parichay: 'इन्होंने चोलों को हराकर पाण्ड्य साम्राज्य का फिर से विस्तार किया।', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'sadayavarman_kulasekaran_2', name: 'सदयावर्मन कुलशेखर द्वितीय', subtitle: 'पाण्ड्य नरेश', parent: 'maravarman_sundara_pandyan_1', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'maravarman_sundara_pandyan_2', name: 'मारवर्मन सुंदर पाण्ड्य द्वितीय', subtitle: 'पाण्ड्य नरेश', parent: 'sadayavarman_kulasekaran_2', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },

    { id: 'jatavarman_sundara_pandyan_1', name: 'जटावर्मन सुंदर पाण्ड्य प्रथम', subtitle: 'दक्षिण का नेपोलियन', parent: 'maravarman_sundara_pandyan_2', yug: 'kali', parichay: 'पाण्ड्य वंश के सबसे महान सम्राट। इन्होंने दक्षिण भारत, श्रीलंका और कलिंग तक अपना साम्राज्य फैलाया।', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'maravarman_kulasekara_pandyan_1', name: 'मारवर्मन कुलशेखर प्रथम', subtitle: 'महान पाण्ड्य नरेश', parent: 'jatavarman_sundara_pandyan_1', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },

    // उत्तराधिकार युद्ध
    { id: 'vira_pandya_4', name: 'वीर पाण्ड्य', subtitle: 'कुलशेखर के पुत्र', parent: 'maravarman_kulasekara_pandyan_1', yug: 'kali', parichay: 'अपने भाई सुंदर पाण्ड्य के साथ उत्तराधिकार युद्ध लड़ा, जिसके कारण दिल्ली सल्तनत को आक्रमण का मौका मिला।', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'sundara_pandya_4', name: 'सुंदर पाण्ड्य चतुर्थ', subtitle: 'कुलशेखर के पुत्र', parent: 'maravarman_kulasekara_pandyan_1', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },

    // --- तेनकासी पाण्ड्य (Tenkasi Pandyas / 15th-17th Century) ---
    { id: 'sadaavarman_parakrama_pandya', name: 'सदावर्मन पराक्रम पाण्ड्य', subtitle: 'तेनकासी पाण्ड्य संस्थापक', parent: 'sundara_pandya_4', yug: 'kali', parichay: 'दिल्ली सल्तनत और विजयनगर के दबाव में पाण्ड्य मदुरै छोड़कर तेनकासी चले गए।', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'kulasekara_pandiyan_3', name: 'कुलशेखर पाण्ड्य तृतीय', subtitle: 'तेनकासी नरेश', parent: 'sadaavarman_parakrama_pandya', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'aksharan_perumal_parakrama_pandya', name: 'अक्षरन पेरुमल पराक्रम पाण्ड्य', subtitle: 'तेनकासी नरेश', parent: 'kulasekara_pandiyan_3', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'kulasekara_pandya_later', name: 'कुलशेखर पाण्ड्य (तेनकासी)', subtitle: 'तेनकासी नरेश', parent: 'aksharan_perumal_parakrama_pandya', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'sadaverman_sewallapa_pandya', name: 'सदावर्मन सेवलप्पा पाण्ड्य', subtitle: 'तेनकासी नरेश', parent: 'kulasekara_pandya_later', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'parakrama_kulasekaran', name: 'पराक्रम कुलशेखर', subtitle: 'तेनकासी नरेश', parent: 'sadaverman_sewallapa_pandya', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'nelveli_maran', name: 'नेल्वेली मारन', subtitle: 'तेनकासी नरेश', parent: 'parakrama_kulasekaran', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'sadaavarman_adeevirama_pandya', name: 'सदावर्मन अदीविराम पाण्ड्य', subtitle: 'तेनकासी नरेश', parent: 'nelveli_maran', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'varathuranga_pandya', name: 'वरथुरंग पाण्ड्य', subtitle: 'तेनकासी नरेश', parent: 'sadaavarman_adeevirama_pandya', yug: 'kali', clusterName: 'पाण्ड्य राजवंश' },
    { id: 'varagunarama_pandya', name: 'वरगुणराम पाण्ड्य', subtitle: 'अंतिम ज्ञात पाण्ड्य शासक', parent: 'varathuranga_pandya', yug: 'kali', parichay: 'तेनकासी पाण्ड्य वंश के अंतिम ज्ञात शासकों में से एक (1618 CE)।', clusterName: 'पाण्ड्य राजवंश' },

    // --- अनु वंश ---
    { id: 'sabhanara_anu', name: 'सभानर', subtitle: 'अनु पुत्र', parent: 'anu_yayati_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'chakshusha_anu', name: 'चाक्षुष', subtitle: 'अनु पुत्र', parent: 'anu_yayati_chandra', yug: 'treta', parichay: 'पुराणों में इनके आगे के वंश का वर्णन उपलब्ध नहीं है।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'paroksha_anu', name: 'परोक्ष (परमेक्षु)', subtitle: 'अनु पुत्र', parent: 'anu_yayati_chandra', yug: 'treta', parichay: 'पुराणों में इनके आगे के वंश का वर्णन उपलब्ध नहीं है।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kalanara_anu', name: 'कालानर', subtitle: 'सभानर पुत्र', parent: 'sabhanara_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'srijaya_anu', name: 'सृंजय', subtitle: 'कालानर पुत्र', parent: 'kalanara_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'janamejaya_anu', name: 'जनमेजय', subtitle: 'सृंजय पुत्र', parent: 'srijaya_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'mahashala_anu', name: 'महाशाल', subtitle: 'जनमेजय पुत्र', parent: 'janamejaya_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'mahamana_anu', name: 'महामना', subtitle: 'महाशाल पुत्र', parent: 'mahashala_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },

    // अनु वंश -> उशीनर शाखा
    { id: 'ushinara_anu', name: 'उशीनर', subtitle: 'महामना पुत्र', parent: 'mahamana_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sibi_anu', name: 'शिबि', subtitle: 'महान दानी राजा', parent: 'ushinara_anu', yug: 'treta', parichay: 'राजा शिबि अपने त्याग और शरणागत की रक्षा के लिए प्रसिद्ध हैं। उन्होंने एक कबूतर की रक्षा के लिए बाज़ को अपना माँस काट कर दे दिया था।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vrishadarbha_anu', name: 'वृषदर्भ', subtitle: 'शिबि पुत्र', parent: 'sibi_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'suvira_anu', name: 'सुवीर', subtitle: 'शिबि पुत्र (सौवीर)', parent: 'sibi_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'madra_anu', name: 'मद्र', subtitle: 'मद्र देश संस्थापक', parent: 'sibi_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kekaya_anu', name: 'केकय', subtitle: 'केकय देश संस्थापक', parent: 'sibi_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },

    // अनु वंश -> तितिक्षु (बलि) शाखा
    { id: 'titikshu_anu', name: 'तितिक्षु', subtitle: 'महामना पुत्र', parent: 'mahamana_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'rushadratha_anu', name: 'रुशद्रथ', subtitle: 'तितिक्षु पुत्र', parent: 'titikshu_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'hema_anu', name: 'हेम', subtitle: 'रुशद्रथ पुत्र', parent: 'rushadratha_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sutapas_anu', name: 'सुतपस', subtitle: 'हेम पुत्र', parent: 'hema_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bali_anu', name: 'बलि', subtitle: 'सुतपस पुत्र', parent: 'sutapas_anu', yug: 'treta', parichay: 'अनु वंश के राजा बलि। महर्षि दीर्घतमा के नियोग से इनकी पत्नी सुदेष्णा के गर्भ से ५ महान पुत्र उत्पन्न हुए।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sudeshna_bali_wife_chandra', name: 'सुदेष्णा', subtitle: 'राजा बलि की पत्नी', parent: '', spouseOf: 'bali_anu', yug: 'treta' },

    // बलि के ५ क्षेत्रज पुत्र (अंग, वंग, कलिंग, पुण्ड्र, सुह्म) - जैविक पिता दीर्घतमा (brahma-base में), पालक/राजकीय पिता बलि
    { id: 'anga_anu', name: 'अंग', subtitle: 'अंग देश संस्थापक', parent: 'bali_anu', mother: 'sudeshna_bali_wife_chandra', yug: 'treta', parichay: 'इन्होंने अंग देश (वर्तमान भागलपुर, बिहार) की स्थापना की। कर्ण बाद में इसी अंग देश के राजा बने।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vanga_anu', name: 'वंग', subtitle: 'वंग देश संस्थापक', parent: 'bali_anu', mother: 'sudeshna_bali_wife_chandra', yug: 'treta', parichay: 'इन्होंने वंग देश (वर्तमान बंगाल) की स्थापना की।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kalinga_anu', name: 'कलिंग', subtitle: 'कलिंग देश संस्थापक', parent: 'bali_anu', mother: 'sudeshna_bali_wife_chandra', yug: 'treta', parichay: 'इन्होंने कलिंग देश (वर्तमान ओडिशा) की स्थापना की।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'pundra_anu', name: 'पुण्ड्र', subtitle: 'पुण्ड्र देश संस्थापक', parent: 'bali_anu', mother: 'sudeshna_bali_wife_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'suhma_anu', name: 'सुह्म', subtitle: 'सुह्म देश संस्थापक', parent: 'bali_anu', mother: 'sudeshna_bali_wife_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },

    // --- अंग वंश (अंग से रोमपाद और कर्ण तक) ---
    { id: 'dadhivahana_anu', name: 'दधिवाहन', subtitle: 'अंग नरेश', parent: 'anga_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'khalapana_anu', name: 'खलपान', subtitle: 'अंग नरेश', parent: 'dadhivahana_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'diviratha_anu', name: 'दिविरथ', subtitle: 'अंग नरेश', parent: 'khalapana_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dharmaratha_anu', name: 'धर्मरथ', subtitle: 'अंग नरेश', parent: 'diviratha_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'chitraratha_anga_anu', name: 'चित्ररथ', subtitle: 'अंग नरेश', parent: 'dharmaratha_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dasharatha_anga_anu', name: 'दशरथ', subtitle: 'अंग नरेश', parent: 'chitraratha_anga_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'chaturanga_anu', name: 'चतुरंग', subtitle: 'अंग नरेश', parent: 'dasharatha_anga_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'prithulaksha_anu', name: 'पृथुलाक्ष', subtitle: 'अंग नरेश', parent: 'chaturanga_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bhadraratha_anu', name: 'भद्ररथ', subtitle: 'अंग नरेश', parent: 'prithulaksha_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'brihadratha_anga_anu', name: 'बृहद्रथ', subtitle: 'अंग नरेश', parent: 'bhadraratha_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'brihatkarman_anu', name: 'बृहत्कर्मन', subtitle: 'अंग नरेश', parent: 'brihadratha_anga_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'brihadbhanu_anu', name: 'बृहद्भानु', subtitle: 'अंग नरेश', parent: 'brihatkarman_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'brihanmanas_anu', name: 'बृहन्मनस', subtitle: 'अंग नरेश', parent: 'brihadbhanu_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'jayadratha_anga_anu', name: 'जयद्रथ', subtitle: 'अंग नरेश', parent: 'brihanmanas_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dridharatha_anu', name: 'दृढरथ', subtitle: 'अंग नरेश', parent: 'jayadratha_anga_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vishvajit_anga_anu', name: 'विश्वजित', subtitle: 'अंग नरेश', parent: 'dridharatha_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'romapada_anu', name: 'रोमपाद (चित्ररथ)', subtitle: 'अंग नरेश', parent: 'vishvajit_anga_anu', yug: 'treta', parichay: 'इन्होंने अयोध्या के राजा दशरथ की पुत्री शांता को गोद लिया था।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'chaturanga_ii_anu', name: 'चतुरंग द्वितीय', subtitle: 'रोमपाद पुत्र', parent: 'romapada_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'prithulaksha_ii_anu', name: 'पृथुलाक्ष द्वितीय', subtitle: 'चतुरंग द्वितीय पुत्र', parent: 'chaturanga_ii_anu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'champa_anu', name: 'चम्प', subtitle: 'चम्पापुरी संस्थापक', parent: 'prithulaksha_ii_anu', yug: 'treta', parichay: 'इन्होंने अंग देश की राजधानी चम्पापुरी की स्थापना की।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'haryanga_anu', name: 'हर्यंग', subtitle: 'अंग नरेश', parent: 'champa_anu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bhadraratha_ii_anu', name: 'भद्ररथ द्वितीय', subtitle: 'अंग नरेश', parent: 'haryanga_anu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'brihatkarman_ii_anu', name: 'बृहत्कर्मन द्वितीय', subtitle: 'अंग नरेश', parent: 'bhadraratha_ii_anu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'brihadbhanu_ii_anu', name: 'बृहद्भानु द्वितीय', subtitle: 'अंग नरेश', parent: 'brihatkarman_ii_anu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'brihanmanas_ii_anu', name: 'बृहन्मनस द्वितीय', subtitle: 'अंग नरेश', parent: 'brihadbhanu_ii_anu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'jayadratha_ii_anu', name: 'जयद्रथ द्वितीय', subtitle: 'अंग नरेश', parent: 'brihanmanas_ii_anu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vijaya_anga_anu', name: 'विजय', subtitle: 'अंग नरेश', parent: 'jayadratha_ii_anu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dhriti_anga_anu', name: 'धृति', subtitle: 'अंग नरेश', parent: 'vijaya_anga_anu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dhritavrata_anu', name: 'धृतव्रत', subtitle: 'अंग नरेश', parent: 'dhriti_anga_anu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'satyakarman_anu', name: 'सत्यकर्मन', subtitle: 'अंग नरेश', parent: 'dhritavrata_anu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'adhiratha_anu', name: 'अधिरथ', subtitle: 'सत्यकर्मन पुत्र', parent: 'satyakarman_anu', yug: 'dwapar', parichay: 'सूत अधिरथ, जिन्होंने कर्ण का पालन-पोषण किया।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'radha_karna_chandra', name: 'राधा', subtitle: 'अधिरथ की पत्नी', parent: '', spouseOf: 'adhiratha_anu', yug: 'dwapar', parichay: 'कर्ण की पालक माता, जिनके नाम पर कर्ण को "राधेय" कहा गया।' },
    { id: 'shon_anu', name: 'शोण', subtitle: 'अधिरथ-राधा पुत्र', parent: 'adhiratha_anu', mother: 'radha_karna_chandra', yug: 'dwapar', parichay: 'कर्ण के छोटे भाई (पालक)।', clusterName: 'नहुष चंद्रवंशी' },

    // --- कर्ण और उसका परिवार ---
    { id: 'karna_chandra', name: 'कर्ण', subtitle: 'अंगराज / सूर्य पुत्र', parent: 'adhiratha_anu', mother: 'radha_karna_chandra', yug: 'dwapar', parichay: 'जैविक माता-पिता कुंती और सूर्यदेव। पालक माता-पिता राधा और अधिरथ। दुर्योधन ने इन्हें अंग देश का राजा बनाया।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vrushali_chandra', name: 'वृषाली', subtitle: 'कर्ण की प्रथम पत्नी', parent: '', spouseOf: 'karna_chandra', yug: 'dwapar', clusterName: 'कर्ण की पत्नियाँ' },
    { id: 'supriya_chandra', name: 'सुप्रिया', subtitle: 'कर्ण की द्वितीय पत्नी', parent: '', spouseOf: 'karna_chandra', yug: 'dwapar', clusterName: 'कर्ण की पत्नियाँ' },

    { id: 'karna_sons_proxy', name: 'कर्ण के पुत्र', subtitle: 'वृषसेन आदि 9 पुत्र', isProxy: true, parent: 'karna_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vrishasena_karna_chandra', name: 'वृषसेन', subtitle: 'कर्ण पुत्र', parent: 'karna_chandra', mother: 'vrushali_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'chitrasena_karna_chandra', name: 'चित्रसेन', subtitle: 'कर्ण पुत्र', parent: 'karna_chandra', mother: 'vrushali_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'satyasena_karna_chandra', name: 'सत्यसेन', subtitle: 'कर्ण पुत्र', parent: 'karna_chandra', mother: 'vrushali_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sushena_karna_chandra', name: 'सुषेण', subtitle: 'कर्ण पुत्र', parent: 'karna_chandra', mother: 'vrushali_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shatrunjaya_karna_chandra', name: 'शत्रुंजय', subtitle: 'कर्ण पुत्र', parent: 'karna_chandra', mother: 'vrushali_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dvipata_karna_chandra', name: 'द्विपात', subtitle: 'कर्ण पुत्र', parent: 'karna_chandra', mother: 'vrushali_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'prasena_karna_chandra', name: 'प्रसेन', subtitle: 'कर्ण पुत्र', parent: 'karna_chandra', mother: 'supriya_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'banasena_karna_chandra', name: 'बाणसेन', subtitle: 'कर्ण पुत्र', parent: 'karna_chandra', mother: 'supriya_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vrishaketu_karna_chandra', name: 'वृषकेतु', subtitle: 'कर्ण के एकमात्र जीवित पुत्र', parent: 'karna_chandra', mother: 'supriya_chandra', yug: 'dwapar', parichay: 'महाभारत युद्ध के बाद कर्ण के एकमात्र जीवित पुत्र। युधिष्ठिर ने इन्हें अंग देश का राजा बनाया और अर्जुन ने इन्हें अस्त्र विद्या दी।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'anga_unknown_generations', name: 'ऐतिहासिक अंतराल', subtitle: 'अज्ञात पीढ़ियाँ', parent: 'vrishaketu_karna_chandra', yug: 'kali', parichay: 'वृषकेतु के बाद और बिंबिसार के समकालीन राजा ब्रह्मदत्त के बीच की अज्ञात पीढ़ियाँ।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'brahmadatta_anga', name: 'ब्रह्मदत्त', subtitle: 'अंतिम अंग नरेश', parent: 'anga_unknown_generations', yug: 'kali', parichay: 'छठी शताब्दी ईसा पूर्व के अंग राजा। इन्हें मगध के राजा बिंबिसार ने पराजित कर अंग देश को मगध साम्राज्य में मिला लिया था।', clusterName: 'नहुष चंद्रवंशी' },

    // --- पुरुरवा के अन्य पुत्र (अमावसु / विजय वंश - कान्यकुब्ज/कन्नौज) ---
        
    { id: 'amavasu_chandra', name: 'अमावसु (विजय)', subtitle: 'कान्यकुब्ज के संस्थापक',parent: 'pururava_chandra', mother: 'urvashi_chandra', yug: 'satya'  },
    { id: 'bhima_amavasu_chandra', name: 'भीम', subtitle: 'अमावसु पुत्र', parent: 'amavasu_chandra', yug: 'satya' , clusterName: 'कान्यकुब्ज राजवंश' },
    { id: 'kanchana_chandra', name: 'कांचन', subtitle: 'भीम पुत्र', parent: 'bhima_amavasu_chandra', yug: 'satya' , clusterName: 'कान्यकुब्ज राजवंश' },
    { id: 'suhotra_amavasu_chandra', name: 'सुहोत्र', subtitle: 'कांचन पुत्र', parent: 'kanchana_chandra', yug: 'satya' , clusterName: 'कान्यकुब्ज राजवंश' },
    { id: 'jahnu_chandra', name: 'जह्नु', subtitle: 'जाह्नवी (गंगा) के पिता', parent: 'suhotra_amavasu_chandra', yug: 'satya', parichay: 'इन्होंने अपने तपोबल से संपूर्ण गंगा को पी लिया था, बाद में भगीरथ के प्रार्थना करने पर कान से निकाला। इसलिए गंगा को जाह्नवी कहा गया।' , clusterName: 'कान्यकुब्ज राजवंश' },
    { id: 'sunaha_chandra', name: 'सुनह', subtitle: 'जह्नु पुत्र', parent: 'jahnu_chandra', yug: 'satya' , clusterName: 'कान्यकुब्ज राजवंश' },
    { id: 'ajaka_chandra', name: 'अजक', subtitle: 'सुनह पुत्र', parent: 'sunaha_chandra', yug: 'satya' , clusterName: 'कान्यकुब्ज राजवंश' },
    { id: 'balakashva_chandra', name: 'बलाकश्व', subtitle: 'अजक पुत्र', parent: 'ajaka_chandra', yug: 'satya' , clusterName: 'कान्यकुब्ज राजवंश' },
    { id: 'kusha_amavasu_chandra', name: 'कुश', subtitle: 'बलाकश्व पुत्र', parent: 'balakashva_chandra', yug: 'satya' , clusterName: 'कान्यकुब्ज राजवंश' },
    { id: 'kushanabha_chandra', name: 'कुशनाभ', subtitle: 'कुश पुत्र', parent: 'kusha_amavasu_chandra', yug: 'treta' , clusterName: 'कान्यकुब्ज राजवंश' },
    { id: 'kushamba_chandra', name: 'कुशाम्ब', subtitle: 'कुश पुत्र', parent: 'kusha_amavasu_chandra', yug: 'treta' , clusterName: 'कान्यकुब्ज राजवंश' },
    { id: 'amurtarajas_chandra', name: 'अमूर्तरजस', subtitle: 'कुश पुत्र', parent: 'kusha_amavasu_chandra', yug: 'treta' , clusterName: 'कान्यकुब्ज राजवंश' },
    { id: 'vasu_amavasu_chandra', name: 'वसु', subtitle: 'कुश पुत्र', parent: 'kusha_amavasu_chandra', yug: 'treta' , clusterName: 'कान्यकुब्ज राजवंश' },
    { id: 'gadhi_chandra', name: 'गाधि', subtitle: 'कुशनाभ पुत्र', parent: 'kushanabha_chandra', yug: 'treta' , clusterName: 'कान्यकुब्ज राजवंश' },
    { id: 'satyavati_gadhi_chandra', name: 'सत्यवती', subtitle: 'गाधि पुत्री', parent: 'gadhi_chandra', spouseOf: 'ruchika', yug: 'treta', parichay: 'राजा गाधि की पुत्री, जिनका विवाह भृगुवंशी महर्षि ऋचीक से हुआ था। ये जमदग्नि की माता थीं।' , clusterName: 'कान्यकुब्ज राजवंश' },
    { id: 'vishwamitra_chandra', name: 'विश्वामित्र', subtitle: 'ब्रह्मर्षि', parent: 'gadhi_chandra', yug: 'treta', parichay: 'जन्म से क्षत्रिय राजा थे, परन्तु वशिष्ठ ऋषि से विवाद के बाद घोर तपस्या कर ब्रह्मर्षि का पद प्राप्त किया। गायत्री मंत्र के द्रष्टा।' , clusterName: 'कान्यकुब्ज राजवंश' },

    { id: 'menaka_apsara_chandra', name: 'मेनका', subtitle: 'अप्सरा', parent: '', spouseOf: 'vishwamitra_chandra', yug: 'treta' , clusterName: 'कान्यकुब्ज राजवंश' },
    { id: 'shakuntala_vishwamitra_chandra', name: 'शकुंतला', subtitle: 'विश्वामित्र पुत्री', parent: 'vishwamitra_chandra', mother: 'menaka_apsara_chandra', yug: 'treta', parichay: 'इनका विवाह पौरव वंशी राजा दुष्यंत से हुआ और इन्होने भरत को जन्म दिया।' , clusterName: 'कान्यकुब्ज राजवंश' },
    { id: 'shunahshepa_chandra', name: 'शुनःशेप (देवरथ)', subtitle: 'दत्तक पुत्र', parent: 'vishwamitra_chandra', yug: 'treta', parichay: 'महर्षि ऋचीक के पुत्र जिन्हें हरिश्चंद्र के यज्ञ में बलि के लिए ख़रीदा गया था, पर विश्वामित्र ने इन्हें बचाया और अपना ज्येष्ठ पुत्र (देवरथ) बना लिया।' , clusterName: 'कान्यकुब्ज राजवंश' },
    { id: 'madhucchandas_chandra', name: 'मधुच्छंदस', subtitle: 'विश्वामित्र पुत्र', parent: 'vishwamitra_chandra', yug: 'treta' , clusterName: 'कान्यकुब्ज राजवंश' },
    { id: 'ashtaka_chandra', name: 'अष्टक', subtitle: 'विश्वामित्र पुत्र', parent: 'vishwamitra_chandra', yug: 'treta' , clusterName: 'कान्यकुब्ज राजवंश' },
    { id: 'galava_chandra', name: 'गालव', subtitle: 'विश्वामित्र पुत्र / शिष्य', parent: 'vishwamitra_chandra', yug: 'treta' , clusterName: 'कान्यकुब्ज राजवंश' },

    // --- गाहड़वाल (राठौर) वंश - कन्नौज (मध्यकालीन कान्यकुब्ज) ---
    { id: 'gahadavala_dynasty_proxy', name: 'गाहड़वाल वंश', subtitle: 'कन्नौज राजवंश', parent: 'vishwamitra_chandra', yug: 'kali', clusterName: 'गाहड़वाल वंश', isProxy: true, parichay: 'कान्यकुब्ज (कन्नौज) के प्राचीन वंश के पतन के बाद मध्यकाल में गाहड़वाल वंश का उदय हुआ जो स्वयं को इसी प्राचीन चंद्रवंशी शाखा से जोड़ते हैं।' },
    { id: 'chandradeva_gahadavala', name: 'चन्द्रदेव', subtitle: 'गाहड़वाल संस्थापक', parent: 'gahadavala_dynasty_proxy', yug: 'kali', clusterName: 'गाहड़वाल वंश' },
    { id: 'madanapala_gahadavala', name: 'मदनपाल', subtitle: 'कन्नौज नरेश', parent: 'chandradeva_gahadavala', yug: 'kali', clusterName: 'गाहड़वाल वंश' },
    { id: 'govindachandra_gahadavala', name: 'गोविन्दचन्द्र', subtitle: 'कन्नौज नरेश', parent: 'madanapala_gahadavala', yug: 'kali', clusterName: 'गाहड़वाल वंश' },
    { id: 'vijayachandra_gahadavala', name: 'विजयचन्द्र', subtitle: 'कन्नौज नरेश', parent: 'govindachandra_gahadavala', yug: 'kali', clusterName: 'गाहड़वाल वंश' },
    { id: 'jaichand_gahadavala', name: 'जयचंद', subtitle: 'कन्नौज नरेश', parent: 'vijayachandra_gahadavala', yug: 'kali', clusterName: 'गाहड़वाल वंश', parichay: 'पृथ्वीराज चौहान के समकालीन कन्नौज के प्रतापी राजा। इनकी पुत्री संयोगिता थी।' },
    { id: 'harishchandra_gahadavala', name: 'हरिश्चन्द्र', subtitle: 'कन्नौज नरेश', parent: 'jaichand_gahadavala', yug: 'kali', clusterName: 'गाहड़वाल वंश' },

    // --- यदुवंश (यदु के पुत्र) ---
    { id: 'sahasrajit_yadu', name: 'सहस्रजित', subtitle: 'यदु पुत्र (हैहय वंश के मूल)', parent: 'yadu_vansh_proxy', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kroshtu_yadu', name: 'क्रोष्टु', subtitle: 'यदु पुत्र (वृष्णि/अंधक वंश के मूल)', parent: 'yadu_vansh_proxy', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'nala_yadu', name: 'नल', subtitle: 'यदु पुत्र', parent: 'yadu_vansh_proxy', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'ripu_yadu', name: 'रिपु', subtitle: 'यदु पुत्र', parent: 'yadu_vansh_proxy', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },

    // --- हैहय वंश (सहस्रजित की शाखा) ---
    { id: 'shatajit_haihaya', name: 'शतजित', subtitle: 'सहस्रजित पुत्र', parent: 'sahasrajit_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
        { id: 'haihaya_dynasty_proxy', name: 'हैहय वंश', subtitle: 'हैहय के वंशज', parent: 'shatajit_haihaya', yug: 'treta', isProxy: true, clusterName: 'नहुष चंद्रवंशी' },
    { id: 'haihaya_chandra', name: 'हैहय', subtitle: 'हैहय वंश के संस्थापक', parent: 'haihaya_dynasty_proxy', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dharma_haihaya', name: 'धर्म', subtitle: 'हैहय पुत्र', parent: 'haihaya_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'netra_haihaya', name: 'नेत्र', subtitle: 'धर्म पुत्र', parent: 'dharma_haihaya', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kunti_haihaya', name: 'कुंती', subtitle: 'नेत्र पुत्र', parent: 'netra_haihaya', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sohanji_haihaya', name: 'सोहंजि', subtitle: 'कुंती पुत्र', parent: 'kunti_haihaya', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'mahishman_haihaya', name: 'महिष्मान', subtitle: 'महिष्मती के संस्थापक', parent: 'sohanji_haihaya', yug: 'treta', parichay: 'इन्होंने नर्मदा तट पर महिष्मती नगरी बसाई थी।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bhadrasen_haihaya', name: 'भद्रसेन', subtitle: 'महिष्मान पुत्र', parent: 'mahishman_haihaya', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'durdama_haihaya', name: 'दुर्दाम', subtitle: 'भद्रसेन पुत्र', parent: 'bhadrasen_haihaya', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dhanaka_haihaya', name: 'धनक', subtitle: 'दुर्दाम पुत्र', parent: 'durdama_haihaya', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kritavirya_haihaya', name: 'कृतवीर्य', subtitle: 'धनक पुत्र', parent: 'dhanaka_haihaya', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kritagni_haihaya', name: 'कृताग्नि', subtitle: 'धनक पुत्र', parent: 'dhanaka_haihaya', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kritavarma_haihaya', name: 'कृतवर्मा', subtitle: 'धनक पुत्र', parent: 'dhanaka_haihaya', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kritauja_haihaya', name: 'कृतौजा', subtitle: 'धनक पुत्र', parent: 'dhanaka_haihaya', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kartavirya_arjuna_chandra', name: 'कार्तवीर्य अर्जुन', subtitle: 'सहस्रबाहु', parent: 'kritavirya_haihaya', yug: 'treta', parichay: 'दत्तात्रेय के वरदान से इन्हें 1000 भुजाएं प्राप्त थीं। इनका वध भगवान परशुराम ने किया था।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'jayadhvaja_haihaya', name: 'जयध्वज', subtitle: 'कार्तवीर्य पुत्र', parent: 'kartavirya_arjuna_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shurasena_haihaya', name: 'शूरसेन', subtitle: 'कार्तवीर्य पुत्र', parent: 'kartavirya_arjuna_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vrishabha_haihaya', name: 'वृषभ', subtitle: 'कार्तवीर्य पुत्र', parent: 'kartavirya_arjuna_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'madhu_haihaya', name: 'मधु', subtitle: 'कार्तवीर्य पुत्र', parent: 'kartavirya_arjuna_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'urjita_haihaya', name: 'ऊर्जित', subtitle: 'कार्तवीर्य पुत्र', parent: 'kartavirya_arjuna_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'talajangha_haihaya', name: 'तालजंघ', subtitle: 'जयध्वज पुत्र', parent: 'jayadhvaja_haihaya', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vitihotra_haihaya', name: 'वीतिहोत्र', subtitle: 'तालजंघ पुत्र', parent: 'talajangha_haihaya', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'avanti_haihaya', name: 'अवन्ति', subtitle: 'तालजंघ पुत्र', parent: 'talajangha_haihaya', yug: 'treta', parichay: 'इनके नाम पर मालवा क्षेत्र का नाम अवन्ति (उज्जैन) पड़ा।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bhoja_haihaya', name: 'भोज (हैहय)', subtitle: 'तालजंघ पुत्र', parent: 'talajangha_haihaya', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'toundikera_haihaya', name: 'तुण्डिकेर', subtitle: 'तालजंघ पुत्र', parent: 'talajangha_haihaya', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sujata_haihaya', name: 'सुजात', subtitle: 'तालजंघ पुत्र', parent: 'talajangha_haihaya', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'ananta_haihaya', name: 'अनन्त', subtitle: 'वीतिहोत्र पुत्र', parent: 'vitihotra_haihaya', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'durjaya_haihaya', name: 'दुर्जय', subtitle: 'अनन्त पुत्र', parent: 'ananta_haihaya', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'supratika_haihaya', name: 'सुप्रतीक', subtitle: 'दुर्जय पुत्र', parent: 'durjaya_haihaya', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'vrishni_haihaya', name: 'वृष्णि (हैहय)', subtitle: 'मधु के वंशज', parent: 'madhu_haihaya', yug: 'treta', parichay: 'हैहय वंश के मधु के वंशज। (यदुवंश में एक अन्य वृष्णि क्रोष्टु शाखा में भी थे)।', clusterName: 'नहुष चंद्रवंशी' },

    // --- वृष्णि / अंधक वंश (क्रोष्टु की शाखा) ---
    { id: 'vrijinivan_yadu', name: 'वृजिनिवान', subtitle: 'क्रोष्टु पुत्र', parent: 'kroshtu_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'svahi_yadu', name: 'स्वाहि', subtitle: 'वृजिनिवान पुत्र', parent: 'vrijinivan_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'rushadgu_yadu', name: 'रुशद्गु', subtitle: 'स्वाहि पुत्र', parent: 'svahi_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'chitraratha_yadu', name: 'चित्ररथ', subtitle: 'रुशद्गु पुत्र', parent: 'rushadgu_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shashabindu_yadu', name: 'शशबिंदु', subtitle: 'महान चक्रवर्ती सम्राट', parent: 'chitraratha_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'prithushravas_yadu', name: 'पृथुश्रवस', subtitle: 'शशबिंदु पुत्र', parent: 'shashabindu_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'antara_yadu', name: 'अन्तर', subtitle: 'पृथुश्रवस पुत्र', parent: 'prithushravas_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'suyajna_yadu', name: 'सुयज्ञ', subtitle: 'अन्तर पुत्र', parent: 'antara_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'ushanas_yadu', name: 'उशनस', subtitle: 'सुयज्ञ पुत्र', parent: 'suyajna_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shineyu_yadu', name: 'शिनेयु', subtitle: 'उशनस पुत्र', parent: 'ushanas_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'marutta_yadu', name: 'मरुत्त', subtitle: 'शिनेयु पुत्र', parent: 'shineyu_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kambalabarhis_yadu', name: 'कम्बलवर्हिष', subtitle: 'मरुत्त पुत्र', parent: 'marutta_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'rukmakavacha_yadu', name: 'रुक्मकवच', subtitle: 'कम्बलवर्हिष पुत्र', parent: 'kambalabarhis_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'parajit_yadu', name: 'पराजित', subtitle: 'रुक्मकवच पुत्र', parent: 'rukmakavacha_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'jyamagha_yadu', name: 'ज्याघम', subtitle: 'पराजित पुत्र', parent: 'parajit_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shaibya_jyamagha_chandra', name: 'शैव्या', subtitle: 'ज्याघम की पत्नी', parent: '', spouseOf: 'jyamagha_yadu', yug: 'treta' },

    // --- विदर्भ वंश ---
    { id: 'vidarbha_yadu', name: 'विदर्भ', subtitle: 'विदर्भ देश के संस्थापक', parent: 'jyamagha_yadu', mother: 'shaibya_jyamagha_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kratha_yadu', name: 'क्रथ', subtitle: 'विदर्भ पुत्र', parent: 'vidarbha_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaushika_yadu', name: 'कौशिक', subtitle: 'विदर्भ पुत्र', parent: 'vidarbha_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'romapada_yadu', name: 'रोमपाद', subtitle: 'विदर्भ पुत्र', parent: 'vidarbha_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kunti_kratha_chandra', name: 'कुंती', subtitle: 'क्रथ पुत्र', parent: 'kratha_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vrishni_kratha_chandra', name: 'वृष्णि (प्रथम)', subtitle: 'कुंती पुत्र', parent: 'kunti_kratha_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'nirvriti_yadu', name: 'निर्वृति', subtitle: 'वृष्णि पुत्र', parent: 'vrishni_kratha_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dasharha_yadu', name: 'दशार्ह', subtitle: 'निर्वृति पुत्र', parent: 'nirvriti_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vyoman_yadu', name: 'व्योमन', subtitle: 'दशार्ह पुत्र', parent: 'dasharha_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'jimuta_yadu', name: 'जीमूत', subtitle: 'व्योमन पुत्र', parent: 'vyoman_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vikriti_yadu', name: 'विकृति', subtitle: 'जीमूत पुत्र', parent: 'jimuta_yadu', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bhimaratha_yadu', name: 'भीमरथ', subtitle: 'विकृति पुत्र', parent: 'vikriti_yadu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'navaratha_yadu', name: 'नवरथ', subtitle: 'भीमरथ पुत्र', parent: 'bhimaratha_yadu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dasharatha_yadu', name: 'दशरथ', subtitle: 'नवरथ पुत्र', parent: 'navaratha_yadu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shakuni_yadu', name: 'शकुनि', subtitle: 'दशरथ पुत्र', parent: 'dasharatha_yadu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'karambhi_yadu', name: 'करम्भी', subtitle: 'शकुनि पुत्र', parent: 'shakuni_yadu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'devarata_yadu', name: 'देवरथ', subtitle: 'करम्भी पुत्र', parent: 'karambhi_yadu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'devakshatra_yadu', name: 'देवक्षत्र', subtitle: 'देवरथ पुत्र', parent: 'devarata_yadu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'madhu_yadu', name: 'मधु', subtitle: 'देवक्षत्र पुत्र', parent: 'devakshatra_yadu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kuruvasa_yadu', name: 'कुरुवश', subtitle: 'मधु पुत्र', parent: 'madhu_yadu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'anu_yadu', name: 'अनु', subtitle: 'कुरुवश पुत्र', parent: 'kuruvasa_yadu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'puruhotra_yadu', name: 'पुरुहोत्र', subtitle: 'अनु पुत्र', parent: 'anu_yadu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'ayu_yadu', name: 'आयु', subtitle: 'पुरुहोत्र पुत्र', parent: 'puruhotra_yadu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'satvata_yadu', name: 'सात्वत', subtitle: 'सात्वत वंश के मूल', parent: 'ayu_yadu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    // --- सात्वत वंश ---

    { id: 'satvata_sons_proxy', name: 'सात्वत के पुत्र', subtitle: 'अंधक, वृष्णि आदि 7 पुत्र', isProxy: true, parent: 'satvata_yadu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bhajina_satvata', name: 'भजिन', subtitle: 'सात्वत पुत्र', parent: 'satvata_yadu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bhajamana_satvata', name: 'भजमान', subtitle: 'सात्वत पुत्र', parent: 'satvata_yadu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'divya_satvata', name: 'दिव्य', subtitle: 'सात्वत पुत्र', parent: 'satvata_yadu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'andhaka_satvata', name: 'अंधक', subtitle: 'अंधक वंश के मूल', parent: 'satvata_yadu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'devavridha_satvata', name: 'देववृध', subtitle: 'सात्वत पुत्र', parent: 'satvata_yadu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'mahabhoja_satvata', name: 'महाभोज', subtitle: 'सात्वत पुत्र', parent: 'satvata_yadu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kuntibhoja_chandra', name: 'कुंतीभोज', subtitle: 'भोज नरेश', parent: 'mahabhoja_satvata', yug: 'dwapar', parichay: 'भोज वंशीय नरेश जिन्होंने शूरसेन की पुत्री पृथा (कुंती) को गोद लिया था।', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'vrishni_satvata', name: 'वृष्णि (द्वितीय)', subtitle: 'वृष्णि वंश के मूल', parent: 'satvata_yadu', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    // --- अंधक वंश (उग्रसेन, कंस) ---
    { id: 'kukura_andhaka', name: 'कुकुर', subtitle: 'अंधक पुत्र', parent: 'andhaka_satvata', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
        { id: 'andhaka_dynasty_proxy', name: 'अन्धक वंश', subtitle: 'अन्धक के वंशज', parent: 'andhaka_satvata', yug: 'dwapar', isProxy: true, clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bhajamana_andhaka', name: 'भजमान', subtitle: 'अंधक पुत्र', parent: 'andhaka_dynasty_proxy', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shuchi_andhaka', name: 'शुचि', subtitle: 'अंधक पुत्र', parent: 'andhaka_satvata', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kambalabarhisha_andhaka', name: 'कम्बलवर्हिष', subtitle: 'अंधक पुत्र', parent: 'andhaka_satvata', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vahni_kukura', name: 'वह्नि', subtitle: 'कुकुर पुत्र', parent: 'kukura_andhaka', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'viloma_kukura', name: 'विलोमा', subtitle: 'वह्नि पुत्र', parent: 'vahni_kukura', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kapotaroma_kukura', name: 'कपोतरोमा', subtitle: 'विलोमा पुत्र', parent: 'viloma_kukura', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'tumburu_kukura', name: 'तुम्बुरु', subtitle: 'कपोतरोमा पुत्र', parent: 'kapotaroma_kukura', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dundubhi_kukura', name: 'दुन्दुभि', subtitle: 'तुम्बुरु पुत्र', parent: 'tumburu_kukura', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'daridra_kukura', name: 'दरिद्र', subtitle: 'दुन्दुभि पुत्र', parent: 'dundubhi_kukura', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vasu_kukura', name: 'वसु', subtitle: 'दरिद्र पुत्र', parent: 'daridra_kukura', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'ahuka_kukura', name: 'आहुक', subtitle: 'वसु पुत्र', parent: 'vasu_kukura', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'devaka_kukura', name: 'देवक', subtitle: 'देवकी के पिता', parent: 'ahuka_kukura', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'ugrasen_kukura', name: 'उग्रसेन', subtitle: 'मथुरा नरेश', parent: 'ahuka_kukura', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kamsa_ugrasen_chandra', name: 'कंस', subtitle: 'उग्रसेन पुत्र', parent: 'ugrasen_kukura', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'devaki_devaka_chandra', name: 'देवकी', subtitle: 'देवक पुत्री', parent: 'devaka_kukura', spouseOf: 'vasudev_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    // --- सत्राजित (सत्यभामा के पिता) - अंधक वंश की भजमान शाखा से ---
    { id: 'viduratha_bhajamana_chandra', name: 'विदूरथ', subtitle: 'भजमान (अंधक) पुत्र', parent: 'bhajamana_andhaka', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shura_viduratha_chandra', name: 'शूर', subtitle: 'विदूरथ पुत्र', parent: 'viduratha_bhajamana_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shini_shura_chandra', name: 'शिनि', subtitle: 'शूर पुत्र', parent: 'shura_viduratha_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'svayambhoja_shini_chandra', name: 'स्वयंभोज', subtitle: 'शिनि पुत्र', parent: 'shini_shura_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'hridika_svayambhoja_chandra', name: 'हृदिक', subtitle: 'स्वयंभोज पुत्र', parent: 'svayambhoja_shini_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'devamidha_hridika_chandra', name: 'देवमीढ', subtitle: 'हृदिक पुत्र', parent: 'hridika_svayambhoja_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shatadhanva_hridika_chandra', name: 'शतधन्वा', subtitle: 'हृदिक पुत्र', parent: 'hridika_svayambhoja_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kritavarma_hridika_chandra', name: 'कृतवर्मा', subtitle: 'हृदिक पुत्र', parent: 'hridika_svayambhoja_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'anamitra_hridika_chandra', name: 'अनमित्र', subtitle: 'हृदिक पुत्र', parent: 'hridika_svayambhoja_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shini_anamitra_chandra', name: 'शिनि', subtitle: 'अनमित्र पुत्र', parent: 'anamitra_hridika_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'satyaka_chandra', name: 'सत्यक', subtitle: 'शिनि पुत्र', parent: 'shini_anamitra_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'satyaki_chandra', name: 'सात्यकि (युयुधान)', subtitle: 'सत्यक पुत्र', parent: 'satyaka_chandra', yug: 'dwapar', parichay: 'वृष्णि वंशीय यादव वीर और अर्जुन के शिष्य। महाभारत में पांडवों की ओर से लड़े।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'asanga_satyaki_chandra', name: 'असंग', subtitle: 'सात्यकि पुत्र', parent: 'satyaki_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'yugandhara_asanga_chandra', name: 'युगन्धर', subtitle: 'असंग पुत्र', parent: 'asanga_satyaki_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'nighna_anamitra_chandra', name: 'निघ्न', subtitle: 'अनमित्र पुत्र', parent: 'anamitra_hridika_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'satrajit_nighna_chandra', name: 'सत्राजित', subtitle: 'निघ्न पुत्र (स्यमंतक मणि धारक)', parent: 'nighna_anamitra_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'prasena_nighna_chandra', name: 'प्रसेन', subtitle: 'निघ्न पुत्र', parent: 'nighna_anamitra_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    // --- वृष्णि वंश (वसुदेव - कृष्ण) ---
        { id: 'vrishni_dynasty_proxy', name: 'वृष्णि वंश', subtitle: 'वृष्णि के वंशज', parent: 'vrishni_satvata', yug: 'dwapar', isProxy: true, clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shvaphalaka_vrishni', name: 'श्वफल्क', subtitle: 'वृष्णि वंश', parent: 'vrishni_dynasty_proxy', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'akrura_chandra', name: 'अक्रूर', subtitle: 'श्वफल्क पुत्र', parent: 'shvaphalaka_vrishni', yug: 'dwapar', parichay: 'श्रीकृष्ण के चाचा, जो कृष्ण और बलराम को गोकुल से मथुरा लाए थे। ये स्यमंतक मणि के धारक भी रहे।', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'ugraseni_chandra', name: 'उग्रसेनी', subtitle: 'उग्रसेन पुत्री / अक्रूर पत्नी', parent: 'ugrasen_kukura', spouseOf: 'akrura_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sudeva_akrura_chandra', name: 'सुदेव', subtitle: 'अक्रूर पुत्र', parent: 'akrura_chandra', mother: 'ugraseni_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'upadeva_akrura_chandra', name: 'उपदेव', subtitle: 'अक्रूर पुत्र', parent: 'akrura_chandra', mother: 'ugraseni_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'varshney_dynasty_proxy', name: 'वार्ष्णेय (बारहसैनी) वंश', subtitle: 'अक्रूर के वंशज', parent: 'sudeva_akrura_chandra', yug: 'kali', isProxy: true, parichay: 'आधुनिक वार्ष्णेय समाज (बारहसैनी) स्वयं को अक्रूर जी का वंशज मानता है। यह मुख्य रूप से मथुरा, अलीगढ़ और पश्चिमी उत्तर प्रदेश में निवास करते हैं।', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'devamidhusha_vrishni', name: 'देवमीढुष', subtitle: 'वृष्णि पुत्र', parent: 'vrishni_dynasty_proxy', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shurasen_chandra', name: 'शूरसेन (शूर)', subtitle: 'देवमीढुष पुत्र', parent: 'devamidhusha_vrishni', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'marisha_shurasen_chandra', name: 'मारिषा', subtitle: 'शूरसेन पत्नी', parent: '', spouseOf: 'shurasen_chandra', yug: 'dwapar' , clusterName: 'वृष्णि वंश' },

    // शूरसेन के पुत्र-पुत्रियां
    { id: 'vasudev_chandra', name: 'वसुदेव (आनकदुन्दुभि)', subtitle: 'कृष्ण के पिता', parent: 'shurasen_chandra', mother: 'marisha_shurasen_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kunti_chandra', name: 'पृथा (कुंती)', subtitle: 'शूरसेन पुत्री', parent: 'shurasen_chandra', mother: 'marisha_shurasen_chandra', spouseOf: 'pandu_chandra', yug: 'dwapar', parichay: 'इन्हें कुंतीभोज ने गोद लिया था। इनका विवाह पांडु से हुआ।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shrutasrava_chandra', name: 'श्रुतश्रवा', subtitle: 'शूरसेन पुत्री', parent: 'shurasen_chandra', mother: 'marisha_shurasen_chandra', spouseOf: 'damaghosha_chandra', yug: 'dwapar', parichay: 'चेदि नरेश दमघोष की पत्नी और शिशुपाल की माता।', clusterName: 'नहुष चंद्रवंशी' },

    // नन्द बाबा (गोकुल)
    { id: 'parjanya_gopa_chandra', name: 'पर्जन्य', subtitle: 'गोप', parent: 'other_dynasties_proxy', yug: 'dwapar', clusterName: 'अन्य राजवंश (इन-लॉ)' },
    { id: 'nanda_chandra', name: 'नंद बाबा', subtitle: 'कृष्ण के पालक पिता', parent: 'parjanya_gopa_chandra', yug: 'dwapar', clusterName: 'अन्य राजवंश (इन-लॉ)' },
    { id: 'yashoda_chandra', name: 'यशोदा', subtitle: 'कृष्ण की पालक माता', parent: '', spouseOf: 'nanda_chandra', yug: 'dwapar', clusterName: 'अन्य राजवंश (इन-लॉ)' },

    // वसुदेव की पत्नियां
    { id: 'rohini_vasudev_chandra', name: 'रोहिणी', subtitle: 'वसुदेव पत्नी', parent: '', spouseOf: 'vasudev_chandra', yug: 'dwapar', clusterName: 'वृष्णि वंश' },

    // वसुदेव के पुत्र
    { id: 'balram_chandra', name: 'बलराम (संकर्षण)', subtitle: 'शेषनाग अवतार', parent: 'vasudev_chandra', mother: 'rohini_vasudev_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'revati_balram_chandra', name: 'रेवती', subtitle: 'बलराम पत्नी', parent: '', spouseOf: 'balram_chandra', yug: 'dwapar' },

    { id: 'krishna_chandra', name: 'कृष्ण (वासुदेव)', subtitle: 'पूर्णावतार', parent: 'vasudev_chandra', mother: 'devaki_devaka_chandra', yug: 'dwapar', parichay: 'भगवान विष्णु के पूर्णावतार। नन्द बाबा और यशोदा ने गोकुल में इनका पालन किया।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'subhadra_chandra', name: 'सुभद्रा', subtitle: 'कृष्ण की बहन', parent: 'vasudev_chandra', mother: 'rohini_vasudev_chandra', spouseOf: 'arjun_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    // --- श्रीकृष्ण का परिवार ---
    // अष्टभार्या
    { id: 'krishna_wives_proxy', name: 'अष्टभार्या', subtitle: 'श्रीकृष्ण की 8 पटरानियां', parent: 'other_dynasties_proxy', spouseOf: 'krishna_chandra', yug: 'dwapar', clusterName: 'अष्टभार्या', isProxy: true },

    { id: 'rukmini_krishna_chandra', name: 'रुक्मिणी', subtitle: 'श्रीकृष्ण की प्रथम पत्नी (लक्ष्मी अवतार)', parent: 'bhishmaka_chandra', spouseOf: 'krishna_chandra', yug: 'dwapar', clusterName: 'अष्टभार्या' },
    { id: 'satyabhama_krishna_chandra', name: 'सत्यभामा', subtitle: 'श्रीकृष्ण की पत्नी (भूदेवी)', parent: 'satrajit_nighna_chandra', spouseOf: 'krishna_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'jambavati_chandra', name: 'जाम्बवती', subtitle: 'श्रीकृष्ण की पत्नी', parent: 'jambavan', spouseOf: 'krishna_chandra', yug: 'dwapar', clusterName: 'अष्टभार्या', parichay: 'जाम्बवान की पुत्री।' },
    { id: 'kalindi_krishna_chandra', name: 'कालिंदी', subtitle: 'श्रीकृष्ण की पत्नी', parent: 'surya', spouseOf: 'krishna_chandra', yug: 'dwapar', clusterName: 'अष्टभार्या' },
    { id: 'mitravinda_krishna_chandra', name: 'मित्रविन्दा', subtitle: 'श्रीकृष्ण की पत्नी', parent: '', spouseOf: 'krishna_chandra', yug: 'dwapar', clusterName: 'अष्टभार्या' },
    { id: 'nagnajiti_krishna_chandra', name: 'नग्नजिती (सत्या)', subtitle: 'श्रीकृष्ण की पत्नी', parent: '', spouseOf: 'krishna_chandra', yug: 'dwapar', clusterName: 'अष्टभार्या' },
    { id: 'bhadra_krishna_chandra', name: 'भद्रा', subtitle: 'श्रीकृष्ण की पत्नी', parent: '', spouseOf: 'krishna_chandra', yug: 'dwapar', clusterName: 'अष्टभार्या' },
    { id: 'lakshmana_krishna_chandra', name: 'लक्ष्मणा', subtitle: 'श्रीकृष्ण की पत्नी', parent: '', spouseOf: 'krishna_chandra', yug: 'dwapar', clusterName: 'अष्टभार्या' },

    // श्रीकृष्ण के पुत्र (प्रद्युम्न, साम्ब आदि)
    { id: 'pradyumna_chandra', name: 'प्रद्युम्न', subtitle: 'कामदेव अवतार', parent: 'krishna_chandra', mother: 'rukmini_krishna_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'charudeshna_chandra', name: 'चारुदेष्ण', subtitle: 'कृष्ण पुत्र', parent: 'krishna_chandra', mother: 'rukmini_krishna_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'samba_krishna_chandra', name: 'साम्ब', subtitle: 'कृष्ण पुत्र', parent: 'krishna_chandra', mother: 'jambavati_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    // प्रद्युम्न का वंश
    { id: 'rukmavati_pradyumna_chandra', name: 'रुक्मवती', subtitle: 'रुक्मी पुत्री', parent: 'rukmi_vidarbha_chandra', spouseOf: 'pradyumna_chandra', yug: 'dwapar' },
    { id: 'aniruddha_chandra', name: 'अनिरुद्ध', subtitle: 'प्रद्युम्न पुत्र', parent: 'pradyumna_chandra', mother: 'rukmavati_pradyumna_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'rochana_aniruddha_chandra', name: 'रोचना', subtitle: 'रुक्मी की पौत्री', parent: '', spouseOf: 'aniruddha_chandra', yug: 'dwapar' },

    // कलियुग के यादव (वज्रनाभ आदि)
    { id: 'vajranabha_chandra', name: 'वज्रनाभ', subtitle: 'मथुरा नरेश', parent: 'aniruddha_chandra', mother: 'rochana_aniruddha_chandra', yug: 'kali', parichay: 'यदुवंश के नाश के बाद अर्जुन ने इन्हें मथुरा (इन्द्रप्रस्थ मंडल) का राजा बनाया था।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'pratibahu_vajranabha_chandra', name: 'प्रतिबाहु', subtitle: 'वज्रनाभ पुत्र', parent: 'vajranabha_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'subahu_pratibahu_chandra', name: 'सुबाहु', subtitle: 'प्रतिबाहु पुत्र', parent: 'pratibahu_vajranabha_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shantasena_subahu_chandra', name: 'शान्तसेन', subtitle: 'सुबाहु पुत्र', parent: 'subahu_pratibahu_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shatasena_shantasena_chandra', name: 'शतसेन', subtitle: 'शान्तसेन पुत्र', parent: 'shantasena_subahu_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },

    // --- यदुवंश (कलियुग - मध्यकालीन और आधुनिक राजवंश) ---
    // ऐतिहासिक अंतराल (Historical Gap) के बाद के मुख्य राजवंश
    { id: 'yaduvansh_medieval_link_chandra', name: 'ऐतिहासिक अंतराल', subtitle: 'अज्ञात पीढ़ियाँ', parent: 'shatasena_shantasena_chandra', yug: 'kali', parichay: 'पुराणों में वर्णित शतसेन के बाद और मध्यकालीन राजवंशों के उदय के बीच कई शताब्दियों का अंतराल है।', clusterName: 'नहुष चंद्रवंशी' },

    // --- जादौन (करौली) और भाटी (जैसलमेर) का मूल ---
    { id: 'dharmapala_yaduvanshi_chandra', name: 'धर्मपाल', subtitle: 'जादौन / भाटी मूल', parent: 'yaduvansh_medieval_link_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },

    // --- भाटी राजवंश (जैसलमेर) ---
    { id: 'bhatti_rao_chandra', name: 'भट्टी (भाटी)', subtitle: 'भाटी वंश के संस्थापक', parent: 'dharmapala_yaduvanshi_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bhati_dynasty_proxy', name: 'भाटी वंश', subtitle: 'जैसलमेर राजवंश', parent: 'bhatti_rao_chandra', yug: 'kali', isProxy: true, clusterName: 'नहुष चंद्रवंशी' },
    { id: 'mangal_rao_bhati', name: 'मंगल राव', subtitle: 'भाटी नरेश', parent: 'bhatti_rao_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'majam_rao_bhati', name: 'मजम राव', subtitle: 'भाटी नरेश', parent: 'mangal_rao_bhati', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kehar_1_bhati', name: 'केहर (प्रथम)', subtitle: 'भाटी नरेश', parent: 'majam_rao_bhati', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'tano_bhati', name: 'तणू', subtitle: 'तणोट के संस्थापक', parent: 'kehar_1_bhati', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'biji_ray_bhati', name: 'बिजी राय', subtitle: 'भाटी नरेश', parent: 'tano_bhati', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'deoraj_bhati', name: 'देवराज (रावल)', subtitle: 'देरावर के संस्थापक', parent: 'biji_ray_bhati', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'mund_bhati', name: 'मुंड', subtitle: 'भाटी नरेश', parent: 'deoraj_bhati', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bachera_bhati', name: 'बचेरा', subtitle: 'भाटी नरेश', parent: 'mund_bhati', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dusaj_bhati', name: 'दुसज', subtitle: 'भाटी नरेश', parent: 'bachera_bhati', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'jaisal_bhati', name: 'रावल जैसल', subtitle: 'जैसलमेर के संस्थापक', parent: 'dusaj_bhati', yug: 'kali', parichay: '1156 ईस्वी में इन्होंने जैसलमेर शहर और किले की स्थापना की।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'salivahan_bhati', name: 'शालिवाहन', subtitle: 'जैसलमेर नरेश', parent: 'jaisal_bhati', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kelan_bhati', name: 'केलण', subtitle: 'जैसलमेर नरेश', parent: 'salivahan_bhati', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'chachigdeo_bhati', name: 'चाचिगदेव', subtitle: 'जैसलमेर नरेश', parent: 'kelan_bhati', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'karan_bhati', name: 'कर्ण', subtitle: 'जैसलमेर नरेश', parent: 'chachigdeo_bhati', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'lakhsen_bhati', name: 'लाखसेन', subtitle: 'जैसलमेर नरेश', parent: 'karan_bhati', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'punpal_bhati', name: 'पुनपाल', subtitle: 'जैसलमेर नरेश', parent: 'lakhsen_bhati', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'jait_singh_bhati', name: 'जैत सिंह', subtitle: 'जैसलमेर नरेश', parent: 'punpal_bhati', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'mularaja_bhati', name: 'मूलराज', subtitle: 'जैसलमेर नरेश', parent: 'jait_singh_bhati', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'ratan_singh_bhati', name: 'रतन सिंह', subtitle: 'जैसलमेर नरेश', parent: 'mularaja_bhati', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },

    // जाडेजा (कच्छ/जामनगर) - भाटी/यदुवंश की शाखा
    { id: 'jadeja_dynasty_proxy', name: 'जाडेजा वंश', subtitle: 'कच्छ/जामनगर राजवंश', parent: 'mangal_rao_bhati', yug: 'kali', isProxy: true, clusterName: 'नहुष चंद्रवंशी' },
    { id: 'lakho_jadani_chandra', name: 'लाखो जादाणी', subtitle: 'जाडेजा वंश के मूल', parent: 'mangal_rao_bhati', yug: 'kali', parichay: 'सिंध से कच्छ की ओर प्रवास किया। इन्हें जाडेजा (जादा के वंशज) कहा गया।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'jam_raval_jadeja_chandra', name: 'जाम रावल', subtitle: 'नवानगर के संस्थापक', parent: 'lakho_jadani_chandra', yug: 'kali', parichay: '1540 ईस्वी में इन्होंने नवानगर (वर्तमान जामनगर) की स्थापना की।', clusterName: 'नहुष चंद्रवंशी' },

    // --- जादौन राजवंश (बयाना / करौली) ---
    { id: 'jadon_dynasty_proxy', name: 'जादौन वंश', subtitle: 'बयाना/करौली राजवंश', parent: 'dharmapala_yaduvanshi_chandra', yug: 'kali', isProxy: true, clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vijaypala_jadon', name: 'विजयपाल', subtitle: 'बयाना के संस्थापक', parent: 'jadon_dynasty_proxy', yug: 'kali', parichay: '1040 ईस्वी में बयाना (विजयमंदिरगढ़) पर राज किया। जादौन राजवंश के प्रमुख।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'tahanpala_jadon', name: 'तिहनपाल', subtitle: 'तिहनगढ़ के संस्थापक', parent: 'vijaypala_jadon', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dharmapala_2_jadon', name: 'धर्मपाल (द्वितीय)', subtitle: 'जादौन नरेश', parent: 'tahanpala_jadon', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kuntalpala_jadon', name: 'कुंतलपाल', subtitle: 'जादौन नरेश', parent: 'dharmapala_2_jadon', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'asala_jadon', name: 'असाल', subtitle: 'जादौन नरेश', parent: 'kuntalpala_jadon', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'gokul_deva_jadon', name: 'गोकुल देव', subtitle: 'जादौन नरेश', parent: 'asala_jadon', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'arjunpala_jadon', name: 'अर्जुनपाल', subtitle: 'करौली के संस्थापक', parent: 'gokul_deva_jadon', yug: 'kali', parichay: '1348 ईस्वी में कल्याणपुरी (आधुनिक करौली) की स्थापना की।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vikramaditya_jadon', name: 'विक्रमादित्य', subtitle: 'करौली नरेश', parent: 'arjunpala_jadon', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'abhaychand_jadon', name: 'अभयचंद', subtitle: 'करौली नरेश', parent: 'vikramaditya_jadon', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'prithvipala_jadon', name: 'पृथ्वीपाल', subtitle: 'करौली नरेश', parent: 'abhaychand_jadon', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'pratap_singh_jadon', name: 'प्रताप सिंह', subtitle: 'करौली नरेश', parent: 'prithvipala_jadon', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'gopal_singh_jadon', name: 'गोपाल सिंह', subtitle: 'करौली नरेश', parent: 'pratap_singh_jadon', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bhanwar_pal_jadon', name: 'भंवर पाल', subtitle: 'करौली नरेश', parent: 'gopal_singh_jadon', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },

    // --- सेउण (देवगिरि यादव राजवंश) ---
    { id: 'jijabai_jadhav', name: 'राजमाता जीजाबाई', subtitle: 'शिवाजी की माता', parent: 'yaduvansh_medieval_link_chandra', yug: 'kali', parichay: 'सिंदखेड राजा के लखूजी जाधव (देवगिरि यादव वंश) की पुत्री और मराठा साम्राज्य के संस्थापक छत्रपति शिवाजी महाराज की माता। इन्होने शिवाजी को रामायण-महाभारत की कहानियाँ सुनाकर एक महान और धर्मनिष्ठ शासक बनाया।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'seuna_dynasty_proxy', name: 'सेउण (यादव) वंश', subtitle: 'देवगिरि राजवंश', parent: 'yaduvansh_medieval_link_chandra', yug: 'kali', isProxy: true, clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dridhaprahara_seuna', name: 'दृढप्रहार', subtitle: 'देवगिरि यादव संस्थापक', parent: 'yaduvansh_medieval_link_chandra', yug: 'kali', parichay: '9वीं सदी में सेउण राजवंश की नींव रखी।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'seunachandra_chandra', name: 'सेउणचन्द्र', subtitle: 'देवगिरि यादव नरेश', parent: 'dridhaprahara_seuna', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dhadiyappa_chandra', name: 'धाडियप्प', subtitle: 'देवगिरि यादव नरेश', parent: 'seunachandra_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bhilamma_1_chandra', name: 'भिल्लम (प्रथम)', subtitle: 'देवगिरि यादव नरेश', parent: 'dhadiyappa_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'rajagi_chandra', name: 'राजगी', subtitle: 'देवगिरि यादव नरेश', parent: 'bhilamma_1_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vadugi_1_chandra', name: 'वदुगी (प्रथम)', subtitle: 'देवगिरि यादव नरेश', parent: 'rajagi_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vesugi_1_chandra', name: 'वेसुगी (प्रथम)', subtitle: 'देवगिरि यादव नरेश', parent: 'vadugi_1_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bhilamma_2_chandra', name: 'भिल्लम (द्वितीय)', subtitle: 'देवगिरि यादव नरेश', parent: 'vesugi_1_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vesugi_2_chandra', name: 'वेसुगी (द्वितीय)', subtitle: 'देवगिरि यादव नरेश', parent: 'bhilamma_2_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bhilamma_3_chandra', name: 'भिल्लम (तृतीय)', subtitle: 'देवगिरि यादव नरेश', parent: 'vesugi_2_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vadugi_2_chandra', name: 'वदुगी (द्वितीय)', subtitle: 'देवगिरि यादव नरेश', parent: 'bhilamma_3_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'seunachandra_2_chandra', name: 'सेउणचन्द्र (द्वितीय)', subtitle: 'देवगिरि यादव नरेश', parent: 'vadugi_2_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'singhana_1_chandra', name: 'सिंघण (प्रथम)', subtitle: 'देवगिरि यादव नरेश', parent: 'seunachandra_2_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'mallugi_chandra', name: 'मल्लुगी', subtitle: 'देवगिरि यादव नरेश', parent: 'singhana_1_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bhilamma_5_chandra', name: 'भिल्लम (पंचम)', subtitle: 'देवगिरि सम्राट', parent: 'mallugi_chandra', yug: 'kali', parichay: 'इन्होंने देवगिरि (दौलताबाद) को अपनी राजधानी बनाया और एक महान साम्राज्य स्थापित किया।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'jaitugi_1_chandra', name: 'जैतुगी (प्रथम)', subtitle: 'देवगिरि सम्राट', parent: 'bhilamma_5_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'singhana_2_chandra', name: 'सिंघण (द्वितीय)', subtitle: 'देवगिरि सम्राट', parent: 'jaitugi_1_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'krishna_seuna', name: 'कृष्ण (कान्हण)', subtitle: 'देवगिरि सम्राट', parent: 'singhana_2_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'mahadeva_seuna', name: 'महादेव', subtitle: 'देवगिरि सम्राट', parent: 'krishna_seuna', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'ramachandra_seuna', name: 'रामचन्द्र', subtitle: 'देवगिरि सम्राट', parent: 'mahadeva_seuna', yug: 'kali', parichay: 'इनके शासनकाल में अलाउद्दीन खिलजी ने देवगिरि पर आक्रमण किया।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shankaradeva_seuna', name: 'शंकरदेव', subtitle: 'अंतिम देवगिरि नरेश', parent: 'ramachandra_seuna', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },

    // --- अहीरवाल (रेवाड़ी) राजवंश ---
    { id: 'ahura_nandaram_chandra', name: 'राव नन्दराम', subtitle: 'रेवाड़ी रियासत (अहीरवाल)', parent: 'yaduvansh_medieval_link_chandra', yug: 'kali', parichay: 'रेवाड़ी (हरियाणा) में अहीरवाल रियासत के संस्थापक। स्वयं को यदुवंशी मानते हैं।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'rao_balkishan_chandra', name: 'राव बालकिशन', subtitle: 'रेवाड़ी नरेश', parent: 'ahura_nandaram_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'rao_gujarmal_chandra', name: 'राव गूजरमल', subtitle: 'रेवाड़ी नरेश', parent: 'rao_balkishan_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'rao_bhavani_singh_chandra', name: 'राव भवानी सिंह', subtitle: 'रेवाड़ी नरेश', parent: 'rao_gujarmal_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'rao_ram_singh_chandra', name: 'राव राम सिंह', subtitle: 'रेवाड़ी नरेश', parent: 'rao_bhavani_singh_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'rao_puran_singh_chandra', name: 'राव पूरण सिंह', subtitle: 'रेवाड़ी नरेश', parent: 'rao_ram_singh_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'rao_tula_ram_chandra', name: 'राव तुला राम', subtitle: '1857 के स्वतंत्रता सेनानी', parent: 'rao_puran_singh_chandra', yug: 'kali', parichay: '1857 की क्रांति में अहीरवाल क्षेत्र का नेतृत्व किया और अंग्रेजों से लोहा लिया।', clusterName: 'नहुष चंद्रवंशी' },

    // --- बाद के वंश (अस्थायी रूप से सुरक्षित रखे गए हैं) ---

    // --- पुरु वंश (पुरु के पुत्र) ---
    { id: 'paushti_puru', name: 'पौष्टी', subtitle: 'पुरु की पत्नी', parent: '', spouseOf: 'puru_chandra', yug: 'treta' },
    { id: 'janamejaya_1_chandra', name: 'जनमेजय (प्रथम)', subtitle: 'पुरु पुत्र', parent: 'puru_chandra', mother: 'paushti_puru', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'pravira_puru', name: 'प्रवीर', subtitle: 'पुरु पुत्र', parent: 'puru_chandra', mother: 'paushti_puru', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'ishvara_puru', name: 'ईश्वर', subtitle: 'पुरु पुत्र', parent: 'puru_chandra', mother: 'paushti_puru', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'ananta_janamejaya_chandra', name: 'अनन्ता', subtitle: 'जनमेजय पत्नी', parent: '', spouseOf: 'janamejaya_1_chandra', yug: 'treta' },
    { id: 'prachinvan_chandra', name: 'प्राचीन्वान', subtitle: 'जनमेजय पुत्र', parent: 'janamejaya_1_chandra', mother: 'ananta_janamejaya_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'ashmaki_prachinvan_chandra', name: 'अश्मकी', subtitle: 'प्राचीन्वान पत्नी', parent: '', spouseOf: 'prachinvan_chandra', yug: 'treta' },
    { id: 'sanyati_puru', name: 'संयाति', subtitle: 'प्राचीन्वान पुत्र', parent: 'prachinvan_chandra', mother: 'ashmaki_prachinvan_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'varangi_sanyati_chandra', name: 'वरांगी', subtitle: 'संयाति पत्नी', parent: '', spouseOf: 'sanyati_puru', yug: 'treta' },
    { id: 'ahayati_puru', name: 'अहयाति', subtitle: 'संयाति पुत्र', parent: 'sanyati_puru', mother: 'varangi_sanyati_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bhanumati_ahayati_chandra', name: 'भानुमती', subtitle: 'अहयाति पत्नी', parent: '', spouseOf: 'ahayati_puru', yug: 'treta' },
    { id: 'sarvabhauma_puru', name: 'सार्वभौम', subtitle: 'अहयाति पुत्र', parent: 'ahayati_puru', mother: 'bhanumati_ahayati_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sunanda_sarvabhauma_chandra', name: 'सुनंदा', subtitle: 'सार्वभौम पत्नी', parent: '', spouseOf: 'sarvabhauma_puru', yug: 'treta' },
    { id: 'jayatsena_puru', name: 'जयत्सेन', subtitle: 'सार्वभौम पुत्र', parent: 'sarvabhauma_puru', mother: 'sunanda_sarvabhauma_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sushrava_jayatsena_chandra', name: 'सुश्रवा', subtitle: 'जयत्सेन पत्नी', parent: '', spouseOf: 'jayatsena_puru', yug: 'treta' },
    { id: 'arvachina_chandra', name: 'अर्वाचीन', subtitle: 'जयत्सेन पुत्र', parent: 'jayatsena_puru', mother: 'sushrava_jayatsena_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'maryada_arvachina_chandra', name: 'मर्यादा', subtitle: 'अर्वाचीन पत्नी', parent: '', spouseOf: 'arvachina_chandra', yug: 'treta' },
    { id: 'ariha_1_chandra', name: 'अरिह (प्रथम)', subtitle: 'अर्वाचीन पुत्र', parent: 'arvachina_chandra', mother: 'maryada_arvachina_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'angi_ariha_chandra', name: 'अंगी', subtitle: 'अरिह पत्नी', parent: '', spouseOf: 'ariha_1_chandra', yug: 'treta' },
    { id: 'mahabhauma_chandra', name: 'महाभौम', subtitle: 'अरिह पुत्र', parent: 'ariha_1_chandra', mother: 'angi_ariha_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'suyagya_mahabhauma_chandra', name: 'सुयज्ञा', subtitle: 'महाभौम पत्नी', parent: '', spouseOf: 'mahabhauma_chandra', yug: 'treta' },
    { id: 'ayutanayi_chandra', name: 'अयुतनायी', subtitle: 'महाभौम पुत्र', parent: 'mahabhauma_chandra', mother: 'suyagya_mahabhauma_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kama_ayutanayi_chandra', name: 'कामा', subtitle: 'अयुतनायी पत्नी', parent: '', spouseOf: 'ayutanayi_chandra', yug: 'treta' },
    { id: 'akrodhana_chandra', name: 'अक्रोधन', subtitle: 'अयुतनायी पुत्र', parent: 'ayutanayi_chandra', mother: 'kama_ayutanayi_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'karambha_akrodhana_chandra', name: 'करम्भा', subtitle: 'अक्रोधन पत्नी', parent: '', spouseOf: 'akrodhana_chandra', yug: 'treta' },
    { id: 'devatithi_1_chandra', name: 'देवातिथि', subtitle: 'अक्रोधन पुत्र', parent: 'akrodhana_chandra', mother: 'karambha_akrodhana_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'maryada_devatithi_chandra', name: 'मर्यादा', subtitle: 'देवातिथि पत्नी', parent: '', spouseOf: 'devatithi_1_chandra', yug: 'treta' },
    { id: 'ariha_2_chandra', name: 'अरिह (द्वितीय)', subtitle: 'देवातिथि पुत्र', parent: 'devatithi_1_chandra', mother: 'maryada_devatithi_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sudeva_ariha_chandra', name: 'सुदेवा', subtitle: 'अरिह पत्नी', parent: '', spouseOf: 'ariha_2_chandra', yug: 'treta' },
    { id: 'riksha_1_chandra', name: 'ऋक्ष (प्रथम)', subtitle: 'अरिह पुत्र', parent: 'ariha_2_chandra', mother: 'sudeva_ariha_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'jwala_riksha_chandra', name: 'ज्वाला', subtitle: 'ऋक्ष पत्नी', parent: '', spouseOf: 'riksha_1_chandra', yug: 'treta' },
    { id: 'matinara_chandra', name: 'मतिनार', subtitle: 'ऋक्ष पुत्र', parent: 'riksha_1_chandra', mother: 'jwala_riksha_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'saraswati_matinara_chandra', name: 'सरस्वती (नदी)', subtitle: 'मतिनार पत्नी', parent: '', spouseOf: 'matinara_chandra', yug: 'treta' },
    { id: 'tamsu_chandra', name: 'तंसु', subtitle: 'मतिनार पुत्र', parent: 'matinara_chandra', mother: 'saraswati_matinara_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'apratiratha_chandra', name: 'अप्रतिरथ', subtitle: 'मतिनार पुत्र', parent: 'matinara_chandra', mother: 'saraswati_matinara_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dhruva_puru', name: 'ध्रुव', subtitle: 'मतिनार पुत्र', parent: 'matinara_chandra', mother: 'saraswati_matinara_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'gauri_matinara_chandra', name: 'गौरी', subtitle: 'मतिनार पुत्री', parent: 'matinara_chandra', mother: 'saraswati_matinara_chandra', spouseOf: 'yuvanashva', yug: 'treta', parichay: 'इनका विवाह सूर्यवंशी राजा युवनाश्व से हुआ, और ये मांधाता की माता बनीं।', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'ilin_tamsu_chandra', name: 'इलिन', subtitle: 'तंसु पत्नी', parent: '', spouseOf: 'tamsu_chandra', yug: 'treta' },
    { id: 'dushyant_chandra', name: 'दुष्यंत', subtitle: 'तंसु पुत्र', parent: 'tamsu_chandra', mother: 'ilin_tamsu_chandra', yug: 'treta', parichay: 'इन्हें तुर्वसु वंश के मरुत्त ने गोद लिया था, परन्तु ये पुनः पुरु वंश में लौट गए।', clusterName: 'नहुष चंद्रवंशी' },

    // --- भरत और हस्ति ---
    { id: 'bharat_kuru', name: 'भरत', subtitle: 'चक्रवर्ती सम्राट (भारतवर्ष)', parent: 'dushyant_chandra', mother: 'shakuntala_vishwamitra_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sunanda_bharat_chandra', name: 'सुनंदा', subtitle: 'भरत की पत्नी', parent: '', spouseOf: 'bharat_kuru', yug: 'treta' },
    { id: 'vidatha_bharadvaja_chandra', name: 'भरद्वाज (विदथ)', subtitle: 'भरत के दत्तक पुत्र', parent: 'bharat_kuru', yug: 'treta', parichay: 'भरत के अपने ९ पुत्र योग्य नहीं थे, अतः उन्होंने महर्षि बृहस्पति के पुत्र भरद्वाज को गोद लिया।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bhumanyu_chandra', name: 'भुमन्यु', subtitle: 'भरद्वाज पुत्र', parent: 'vidatha_bharadvaja_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'pushkarini_bhumanyu_chandra', name: 'पुष्करिणी', subtitle: 'भुमन्यु पत्नी', parent: '', spouseOf: 'bhumanyu_chandra', yug: 'treta' },
    { id: 'suhotra_puru', name: 'सुहोत्र', subtitle: 'भुमन्यु पुत्र', parent: 'bhumanyu_chandra', mother: 'pushkarini_bhumanyu_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'suhota_puru', name: 'सुहोता', subtitle: 'भुमन्यु पुत्र', parent: 'bhumanyu_chandra', mother: 'pushkarini_bhumanyu_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'suhavi_puru', name: 'सुहवि', subtitle: 'भुमन्यु पुत्र', parent: 'bhumanyu_chandra', mother: 'pushkarini_bhumanyu_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'suyaju_puru', name: 'सुयजु', subtitle: 'भुमन्यु पुत्र', parent: 'bhumanyu_chandra', mother: 'pushkarini_bhumanyu_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'diviratha_puru', name: 'दिविरथ', subtitle: 'भुमन्यु पुत्र', parent: 'bhumanyu_chandra', mother: 'pushkarini_bhumanyu_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'aikshvaki_suhotra_chandra', name: 'ऐक्ष्वाकी', subtitle: 'सुहोत्र पत्नी', parent: '', spouseOf: 'suhotra_puru', yug: 'treta' },
    { id: 'hasti_chandra', name: 'हस्ती', subtitle: 'हस्तिनापुर के संस्थापक', parent: 'suhotra_puru', mother: 'aikshvaki_suhotra_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'ajamidha_1_chandra', name: 'अजमीढ (प्रथम)', subtitle: 'सुहोत्र पुत्र', parent: 'suhotra_puru', mother: 'aikshvaki_suhotra_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dvimidha_chandra', name: 'द्विमीढ', subtitle: 'सुहोत्र पुत्र', parent: 'suhotra_puru', mother: 'aikshvaki_suhotra_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'purumidha_chandra', name: 'पुरुमीढ', subtitle: 'सुहोत्र पुत्र', parent: 'suhotra_puru', mother: 'aikshvaki_suhotra_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'yashodhara_hasti_chandra', name: 'यशोधरा', subtitle: 'हस्ती पत्नी', parent: '', spouseOf: 'hasti_chandra', yug: 'treta' },
    { id: 'vikunthana_chandra', name: 'विकुण्ठन', subtitle: 'हस्ती पुत्र', parent: 'hasti_chandra', mother: 'yashodhara_hasti_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sudeva_vikunthana_chandra', name: 'सुदेवा', subtitle: 'विकुण्ठन पत्नी', parent: '', spouseOf: 'vikunthana_chandra', yug: 'treta' },
    { id: 'ajamidha_2_chandra', name: 'अजमीढ (द्वितीय)', subtitle: 'विकुण्ठन पुत्र', parent: 'vikunthana_chandra', mother: 'sudeva_vikunthana_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },

    // --- अजमीढ (द्वितीय) की पत्नियां ---
    { id: 'dhumini_ajamidha_chandra', name: 'धूमिनी', subtitle: 'अजमीढ पत्नी (कुरु वंश)', parent: '', spouseOf: 'ajamidha_2_chandra', yug: 'treta' },
    { id: 'nili_ajamidha_chandra', name: 'नीली (नलिनी)', subtitle: 'अजमीढ पत्नी (पांचाल वंश)', parent: '', spouseOf: 'ajamidha_2_chandra', yug: 'treta' },
    { id: 'keshini_ajamidha_chandra', name: 'केशिनी', subtitle: 'अजमीढ पत्नी', parent: '', spouseOf: 'ajamidha_2_chandra', yug: 'treta' },

    // केशिनी के पुत्र
    { id: 'jahnu_puru', name: 'जह्नु', subtitle: 'केशिनी पुत्र', parent: 'ajamidha_2_chandra', mother: 'keshini_ajamidha_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vraja_chandra', name: 'व्रज', subtitle: 'केशिनी पुत्र', parent: 'ajamidha_2_chandra', mother: 'keshini_ajamidha_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'rupina_chandra', name: 'रुपिण', subtitle: 'केशिनी पुत्र', parent: 'ajamidha_2_chandra', mother: 'keshini_ajamidha_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },

    // --- पांचाल वंश (नीली से) ---
    { id: 'nila_panchal', name: 'नील', subtitle: 'नीली पुत्र', parent: 'ajamidha_2_chandra', mother: 'nili_ajamidha_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dushyanta_panchal', name: 'दुष्यंत (पांचाल)', subtitle: 'नीली पुत्र', parent: 'ajamidha_2_chandra', mother: 'nili_ajamidha_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'parameshthin_chandra', name: 'परमेष्ठिन्', subtitle: 'नीली पुत्र', parent: 'ajamidha_2_chandra', mother: 'nili_ajamidha_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'shanti_panchal', name: 'शान्ति', subtitle: 'नील पुत्र', parent: 'nila_panchal', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sushanti_panchal', name: 'सुशान्ति', subtitle: 'शान्ति पुत्र', parent: 'shanti_panchal', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'purujanu_chandra', name: 'पुरुजानु', subtitle: 'सुशान्ति पुत्र', parent: 'sushanti_panchal', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'riksha_panchal', name: 'ऋक्ष (पांचाल)', subtitle: 'पुरुजानु पुत्र', parent: 'purujanu_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bharmyashva_chandra', name: 'भर्म्याश्व', subtitle: 'ऋक्ष पुत्र', parent: 'riksha_panchal', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },

    // भर्म्याश्व के ५ पुत्र (पांचाल)
    { id: 'mudgala_panchal', name: 'मुद्गल', subtitle: 'पांचाल (मौद्गल्य गोत्र)', parent: 'bharmyashva_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'srinjaya_panchal', name: 'सृंजय', subtitle: 'पांचाल', parent: 'bharmyashva_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'brihadishu_panchal', name: 'बृहदिषु', subtitle: 'पांचाल', parent: 'bharmyashva_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'yavinara_panchal', name: 'यवीनर', subtitle: 'पांचाल', parent: 'bharmyashva_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kampilya_panchal', name: 'काम्पिल्य', subtitle: 'पांचाल (काम्पिल्य नगर)', parent: 'bharmyashva_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'menaka_mudgala_chandra', name: 'मेनका (अप्सरा)', subtitle: 'मुद्गल पत्नी', parent: '', spouseOf: 'mudgala_panchal', yug: 'treta' },
    { id: 'vadhryashva_chandra', name: 'वध्र्यश्व', subtitle: 'मुद्गल पुत्र', parent: 'mudgala_panchal', mother: 'menaka_mudgala_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'divodasa_panchal', name: 'दिवोदास', subtitle: 'वध्र्यश्व पुत्र', parent: 'vadhryashva_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'ahalya_panchal', name: 'अहल्या', subtitle: 'गौतम ऋषि की पत्नी', parent: 'vadhryashva_chandra', spouseOf: 'gautam', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'mitrayu_chandra', name: 'मित्रायु', subtitle: 'दिवोदास पुत्र', parent: 'divodasa_panchal', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'chyavana_panchal', name: 'च्यवन (पांचाल)', subtitle: 'मित्रायु पुत्र', parent: 'mitrayu_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sudasa_panchal', name: 'सुदास', subtitle: 'च्यवन पुत्र', parent: 'chyavana_panchal', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sahadeva_panchal', name: 'सहदेव', subtitle: 'सुदास पुत्र', parent: 'sudasa_panchal', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'somaka_panchal', name: 'सोमक', subtitle: 'सहदेव पुत्र', parent: 'sahadeva_panchal', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'prishata_chandra', name: 'पृषत', subtitle: 'सोमक पुत्र', parent: 'somaka_panchal', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'drupada_chandra', name: 'द्रुपद (यज्ञसेन)', subtitle: 'पांचाल नरेश', parent: 'prishata_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'dhrishtadyumna_chandra', name: 'धृष्टद्युम्न', subtitle: 'द्रुपद पुत्र (यज्ञकुण्ड से)', parent: 'drupada_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shikhandi_chandra', name: 'शिखंडी', subtitle: 'द्रुपद पुत्र/पुत्री', parent: 'drupada_chandra', yug: 'dwapar', parichay: 'पूर्वजन्म में अम्बा। भीष्म के वध का कारण बने।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'draupadi_chandra', name: 'द्रौपदी (पांचाली)', subtitle: 'पांडवों की पत्नी (यज्ञकुण्ड से)', parent: 'drupada_chandra', spouseOf: 'yudhishthir_chandra', yug: 'dwapar', parichay: 'पांडवों की धर्मपत्नी। यज्ञकुण्ड से उत्पन्न हुईं।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'satyajit_panchal', name: 'सत्यजित', subtitle: 'द्रुपद पुत्र', parent: 'drupada_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'yudhamanyu_chandra', name: 'युधामन्यु', subtitle: 'द्रुपद पुत्र', parent: 'drupada_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'uttamaujas_chandra', name: 'उत्तमौजस', subtitle: 'द्रुपद पुत्र', parent: 'drupada_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    // --- कुरु वंश मुख्य धारा (धूमिनी से) ---

    { id: 'ajamidha_sons_proxy', name: 'अजमीढ़ के अन्य पुत्र', subtitle: 'ऋक्ष, नील आदि', isProxy: true, parent: 'ajamidha_2_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'riksha_2_chandra', name: 'ऋक्ष (कुरु वंश)', subtitle: 'धूमिनी पुत्र', parent: 'ajamidha_2_chandra', mother: 'dhumini_ajamidha_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'samvarana_chandra', name: 'संवरण', subtitle: 'ऋक्ष पुत्र', parent: 'riksha_2_chandra', yug: 'treta', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'tapati_chandra', name: 'तपती', subtitle: 'संवरण पत्नी (सूर्य पुत्री)', parent: 'surya', spouseOf: 'samvarana_chandra', yug: 'treta' , clusterName: 'सूर्य की अन्य संतति' },

    { id: 'kuru_chandra', name: 'कुरु', subtitle: 'कुरुक्षेत्र / कुरुवंश के संस्थापक', parent: 'samvarana_chandra', mother: 'tapati_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shubhangi_kuru', name: 'शुभांगी', subtitle: 'कुरु पत्नी', parent: '', spouseOf: 'kuru_chandra', yug: 'dwapar' },

    // कुरु के भाई (मगध / चेदि वंश - वासु उपरिचर)
    { id: 'sudhanva_kuru', name: 'सुधन्वा', subtitle: 'संवरण पुत्र', parent: 'samvarana_chandra', mother: 'tapati_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'suhotra_sudhanva_chandra', name: 'सुहोत्र', subtitle: 'सुधन्वा पुत्र', parent: 'sudhanva_kuru', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'chyavana_magadh', name: 'च्यवन (मगध)', subtitle: 'सुहोत्र पुत्र', parent: 'suhotra_sudhanva_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kriti_magadh', name: 'कृती', subtitle: 'च्यवन पुत्र', parent: 'chyavana_magadh', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vasu_uparichara_chandra', name: 'वासु उपरिचर', subtitle: 'चेदि नरेश', parent: 'kriti_magadh', yug: 'dwapar', parichay: 'सत्यवती (मत्स्यगंधा) के पिता।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'girika_vasu_chandra', name: 'गिरिका', subtitle: 'वासु पत्नी', parent: '', spouseOf: 'vasu_uparichara_chandra', yug: 'dwapar' },
    { id: 'satyavati_chandra', name: 'सत्यवती (मत्स्यगंधा)', subtitle: 'वासु की पुत्री', parent: 'vasu_uparichara_chandra', spouseOf: 'shantanu_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'brihadratha_magadh', name: 'बृहद्रथ', subtitle: 'मगध नरेश (संस्थापक)', parent: 'vasu_uparichara_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'pratyagra_vasu_chandra', name: 'प्रत्यग्र', subtitle: 'वासु पुत्र', parent: 'vasu_uparichara_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kushamba_vasu_chandra', name: 'कुशाम्ब', subtitle: 'वासु पुत्र', parent: 'vasu_uparichara_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'mavella_vasu_chandra', name: 'मवेल्ल', subtitle: 'वासु पुत्र', parent: 'vasu_uparichara_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'yadu_vasu_chandra', name: 'यदु (चेदि)', subtitle: 'वासु पुत्र', parent: 'vasu_uparichara_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'jarasandha_chandra', name: 'जरासंध', subtitle: 'मगध सम्राट', parent: 'brihadratha_magadh', yug: 'dwapar', parichay: 'जरा नामक राक्षसी द्वारा संधान किये जाने के कारण जरासंध कहलाये। भीम द्वारा वध।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sahadeva_magadh', name: 'सहदेव (मगध)', subtitle: 'जरासंध पुत्र', parent: 'jarasandha_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'somapi_chandra', name: 'सोमाधि/सोमापी', subtitle: 'सहदेव पुत्र', parent: 'sahadeva_magadh', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shrutashravas_magadh', name: 'श्रुतश्रवस्', subtitle: 'सोमाधि पुत्र', parent: 'somapi_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'ayutayu_magadh', name: 'अयुतायु', subtitle: 'श्रुतश्रवस् पुत्र', parent: 'shrutashravas_magadh', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'niramitra_magadh', name: 'निरमित्र', subtitle: 'अयुतायु पुत्र', parent: 'ayutayu_magadh', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sukshatra_magadh', name: 'सुक्षत्र', subtitle: 'निरमित्र पुत्र', parent: 'niramitra_magadh', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'brihatkarman_magadh', name: 'बृहत्कर्मन', subtitle: 'सुक्षत्र पुत्र', parent: 'sukshatra_magadh', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'senajit_magadh', name: 'सेनजित', subtitle: 'बृहत्कर्मन पुत्र', parent: 'brihatkarman_magadh', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shrutanjaya_magadh', name: 'श्रुतंजय', subtitle: 'सेनजित पुत्र', parent: 'senajit_magadh', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vipra_magadh', name: 'विप्र', subtitle: 'श्रुतंजय पुत्र', parent: 'shrutanjaya_magadh', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shuchi_magadh', name: 'शुचि', subtitle: 'विप्र पुत्र', parent: 'vipra_magadh', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kshemya_magadh', name: 'क्षेम्य', subtitle: 'शुचि पुत्र', parent: 'shuchi_magadh', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'suvrata_magadh', name: 'सुव्रत', subtitle: 'क्षेम्य पुत्र', parent: 'kshemya_magadh', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dharma_magadh', name: 'धर्म', subtitle: 'सुव्रत पुत्र', parent: 'suvrata_magadh', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sushrama_magadh', name: 'सुश्रम', subtitle: 'धर्म पुत्र', parent: 'dharma_magadh', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dridhasena_magadh', name: 'दृढसेन', subtitle: 'सुश्रम पुत्र', parent: 'sushrama_magadh', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sumati_magadh', name: 'सुमति', subtitle: 'दृढसेन पुत्र', parent: 'dridhasena_magadh', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'subala_magadh', name: 'सुबल', subtitle: 'सुमति पुत्र', parent: 'sumati_magadh', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sunita_magadh', name: 'सुनीत', subtitle: 'सुबल पुत्र', parent: 'subala_magadh', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'satyajit_magadh', name: 'सत्यजित', subtitle: 'सुनीत पुत्र', parent: 'sunita_magadh', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vishwajit_magadh', name: 'विश्वजित', subtitle: 'सत्यजित पुत्र', parent: 'satyajit_magadh', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'ripunjaya_magadh', name: 'रिपुंजय', subtitle: 'विश्वजित पुत्र', parent: 'vishwajit_magadh', yug: 'kali', parichay: 'बृहद्रथ वंश का अंतिम राजा, जिसे उसके मंत्री मुनिक/पुनिक ने मारकर प्रद्योत वंश की स्थापना की।', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'asti_jarasandha_chandra', name: 'अस्ति', subtitle: 'जरासंध पुत्री', parent: 'jarasandha_chandra', spouseOf: 'kamsa_ugrasen_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'prapti_jarasandha_chandra', name: 'प्राप्ति', subtitle: 'जरासंध पुत्री', parent: 'jarasandha_chandra', spouseOf: 'kamsa_ugrasen_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    // कुरु के पुत्र (कुरु वंश का आगे का भाग)
    { id: 'viduratha_kuru', name: 'विदूरथ', subtitle: 'कुरु पुत्र', parent: 'kuru_chandra', mother: 'shubhangi_kuru', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'jahnu_kuru', name: 'जह्नु (कुरु)', subtitle: 'कुरु पुत्र', parent: 'kuru_chandra', mother: 'shubhangi_kuru', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'parikshit_1_chandra', name: 'परीक्षित (प्रथम)', subtitle: 'कुरु पुत्र', parent: 'kuru_chandra', mother: 'shubhangi_kuru', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'sarvabhauma_kuru', name: 'सार्वभौम', subtitle: 'विदूरथ पुत्र', parent: 'viduratha_kuru', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'jayatsena_kuru', name: 'जयत्सेन', subtitle: 'सार्वभौम पुत्र', parent: 'sarvabhauma_kuru', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'ravyaya_chandra', name: 'रव्यय', subtitle: 'जयत्सेन पुत्र', parent: 'jayatsena_kuru', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bhavuka_chandra', name: 'भावुक', subtitle: 'रव्यय पुत्र', parent: 'ravyaya_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'chakroddhata_chandra', name: 'चक्रोद्धत', subtitle: 'भावुक पुत्र', parent: 'bhavuka_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'devatithi_2_chandra', name: 'देवातिथि', subtitle: 'चक्रोद्धत पुत्र', parent: 'chakroddhata_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'riksha_3_chandra', name: 'ऋक्ष (तृतीय)', subtitle: 'देवातिथि पुत्र', parent: 'devatithi_2_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bhimasena_kuru', name: 'भीमसेन', subtitle: 'ऋक्ष पुत्र', parent: 'riksha_3_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dilipa_kuru', name: 'दिलीप', subtitle: 'भीमसेन पुत्र', parent: 'bhimasena_kuru', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    // प्रतीप और शान्तनु
    { id: 'pratipa_chandra', name: 'प्रतीप', subtitle: 'हस्तिनापुर नरेश', parent: 'dilipa_kuru', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sunanda_pratipa_chandra', name: 'सुनंदा', subtitle: 'प्रतीप पत्नी', parent: '', spouseOf: 'pratipa_chandra', yug: 'dwapar' },

    { id: 'devapi_chandra', name: 'देवापि', subtitle: 'प्रतीप पुत्र (संन्यासी)', parent: 'pratipa_chandra', mother: 'sunanda_pratipa_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shantanu_chandra', name: 'शान्तनु', subtitle: 'हस्तिनापुर नरेश', parent: 'pratipa_chandra', mother: 'sunanda_pratipa_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bahlika_chandra', name: 'बाल्हीक', subtitle: 'बाल्हीक नरेश', parent: 'pratipa_chandra', mother: 'sunanda_pratipa_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    // बाल्हीक वंश
    { id: 'somadatta_chandra', name: 'सोमदत्त', subtitle: 'बाल्हीक पुत्र', parent: 'bahlika_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bhurishrava_chandra', name: 'भूरिश्रवा', subtitle: 'सोमदत्त पुत्र', parent: 'somadatta_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bhuri_chandra', name: 'भूरि', subtitle: 'सोमदत्त पुत्र', parent: 'somadatta_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shala_chandra', name: 'शल', subtitle: 'सोमदत्त पुत्र', parent: 'somadatta_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    // शान्तनु का परिवार
    { id: 'ganga_shantanu_chandra', name: 'गंगा (नदी)', subtitle: 'शान्तनु की प्रथम पत्नी', parent: '', spouseOf: 'shantanu_chandra', yug: 'dwapar' },
    { id: 'bhishma_chandra', name: 'भीष्म (देवव्रत)', subtitle: 'गंगा पुत्र', parent: 'shantanu_chandra', mother: 'ganga_shantanu_chandra', yug: 'dwapar', parichay: 'इच्छा मृत्यु का वरदान। आजन्म ब्रह्मचारी रहने की भीषण प्रतिज्ञा की थी।', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'chitrangada_shantanu_chandra', name: 'चित्रांगद', subtitle: 'सत्यवती पुत्र', parent: 'shantanu_chandra', mother: 'satyavati_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vichitravirya_chandra', name: 'विचित्रवीर्य', subtitle: 'सत्यवती पुत्र', parent: 'shantanu_chandra', mother: 'satyavati_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'amba_chandra', name: 'अम्बा', subtitle: 'काशी पुत्री', gender: 'female', parent: 'kashya', yug: 'dwapar', parichay: 'काशी नरेश की सबसे बड़ी पुत्री। भीष्म द्वारा अपहरण के बाद इन्होने भीष्म से विवाह का आग्रह किया, परंतु उनके ब्रह्मचर्य व्रत के कारण अस्वीकार कर दी गईं। बाद में इन्होने शिखंडी के रूप में जन्म लिया।', clusterName: 'आयु चंद्रवंशी' },
    { id: 'ambika_chandra', name: 'अम्बिका', subtitle: 'काशी पुत्री / विचित्रवीर्य पत्नी', gender: 'female', parent: 'kashya', spouseOf: 'vichitravirya_chandra', yug: 'dwapar', clusterName: 'आयु चंद्रवंशी' },
    { id: 'ambalika_chandra', name: 'अम्बालिका', subtitle: 'काशी पुत्री / विचित्रवीर्य पत्नी', gender: 'female', parent: 'kashya', spouseOf: 'vichitravirya_chandra', yug: 'dwapar', clusterName: 'आयु चंद्रवंशी' },
    { id: 'parishrami_dasi_chandra', name: 'परिश्रमी (दासी)', subtitle: 'अम्बिका की दासी', parent: '', spouseOf: 'vichitravirya_chandra', yug: 'dwapar' },

    // व्यास द्वारा नियोग (ये विचित्रवीर्य के क्षेत्रज पुत्र माने जाते हैं, इसलिए ट्री में पिता विचित्रवीर्य/व्यास दोनों से जुड़ते हैं, हमने सरलता के लिए विचित्रवीर्य रखा है, पर जैविक पिता व्यास हैं)
    // जैविक पिता व्यास हैं, राजकीय पिता विचित्रवीर्य। Tree hierarchy ke liye biologically Vyasa rakha ja sakta hai, par conventionally ye Kuru vansh hain.
    { id: 'dhritarashtra_chandra', name: 'धृतराष्ट्र', subtitle: 'हस्तिनापुर नरेश', parent: 'vichitravirya_chandra', mother: 'ambika_chandra', yug: 'dwapar', parichay: 'जन्मान्ध होने के कारण पाण्डु को राजा बनाया गया। ये कौरवों के पिता हैं (राजकीय पिता विचित्रवीर्य)।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'pandu_chandra', name: 'पाण्डु', subtitle: 'पांडवों के पिता', parent: 'vichitravirya_chandra', mother: 'ambalika_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vidur_chandra', name: 'विदुर', subtitle: 'धर्मराज अवतार', parent: 'vichitravirya_chandra', mother: 'parishrami_dasi_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sulabha_vidur_chandra', name: 'सुलभा', subtitle: 'विदुर पत्नी', parent: '', spouseOf: 'vidur_chandra', yug: 'dwapar' },

    { id: 'other_dynasties_proxy', name: 'अन्य राजवंश', subtitle: 'विवाह सम्बन्धित', parent: 'brahma', yug: 'dwapar', clusterName: 'अन्य राजवंश (इन-लॉ)', isProxy: true, timeScale: 'kalpa' },
    // --- अन्य राज्यों के मूल नरेश (इन-लॉ) ---
    { id: 'virata_matsya', name: 'विराट', subtitle: 'मत्स्य नरेश', parent: 'other_dynasties_proxy', clusterName: 'अन्य राजवंश (इन-लॉ)', yug: 'dwapar' },
    { id: 'shalya_madra_king', name: 'शल्य', subtitle: 'मद्र नरेश', parent: 'other_dynasties_proxy', clusterName: 'अन्य राजवंश (इन-लॉ)', yug: 'dwapar' },
    { id: 'subala_gandhara_king', name: 'सुबल', subtitle: 'गांधार नरेश', parent: 'other_dynasties_proxy', clusterName: 'अन्य राजवंश (इन-लॉ)', yug: 'dwapar' },
        { id: 'chitravahana_manipur', name: 'चित्रवाहन', subtitle: 'मणिपुर नरेश', parent: 'other_dynasties_proxy', clusterName: 'अन्य राजवंश (इन-लॉ)', yug: 'dwapar' },

    // --- धृतराष्ट्र का परिवार (कौरव) ---
    { id: 'gandhari_chandra', name: 'गांधारी', subtitle: 'धृतराष्ट्र की पत्नी', parent: 'subala_gandhara_king', spouseOf: 'dhritarashtra_chandra', yug: 'dwapar' },
    { id: 'vaishya_dasi_dhrita_chandra', name: 'वैश्या दासी', subtitle: 'धृतराष्ट्र की दासी', parent: '', spouseOf: 'dhritarashtra_chandra', yug: 'dwapar' },

    { id: 'duryodhan_chandra', name: 'दुर्योधन', subtitle: 'कौरव ज्येष्ठ', parent: 'dhritarashtra_chandra', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bhanumati_duryodhan_chandra', name: 'भानुमती', subtitle: 'दुर्योधन की पत्नी', parent: '', spouseOf: 'duryodhan_chandra', yug: 'dwapar' },
    { id: 'laxman_kumara_chandra', name: 'लक्ष्मण कुमार', subtitle: 'दुर्योधन पुत्र', parent: 'duryodhan_chandra', mother: 'bhanumati_duryodhan_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'lakshmanaa_duryodhan_chandra', name: 'लक्ष्मणा', subtitle: 'दुर्योधन पुत्री', parent: 'duryodhan_chandra', mother: 'bhanumati_duryodhan_chandra', spouseOf: 'samba_krishna_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'dushasan_chandra', name: 'दुशासन', subtitle: 'कौरव', parent: 'dhritarashtra_chandra', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vikarna_chandra', name: 'विकर्ण', subtitle: 'कौरव (धर्मात्मा)',parent: 'dhritarashtra_chandra', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'yuyutsu_chandra', name: 'युयुत्सु', subtitle: 'धृतराष्ट्र पुत्र (दासी से)',parent: 'dhritarashtra_chandra', mother: 'vaishya_dasi_dhrita_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dushala_chandra', name: 'दुश्शला', subtitle: 'कौरवों की इकलौती बहन',parent: 'dhritarashtra_chandra', mother: 'gandhari_chandra', spouseOf: 'jayadratha', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

{ id: 'kaurav_proxy', name: 'अन्य कौरव', subtitle: 'धृतराष्ट्र के 96 पुत्र', parent: 'dhritarashtra_chandra', yug: 'dwapar', isProxy: true, clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_1_chandra', name: 'दुस्सह', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_2_chandra', name: 'जलसन्ध', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_3_chandra', name: 'सम', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_4_chandra', name: 'सह', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_5_chandra', name: 'विन्द', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_6_chandra', name: 'अनुविन्द', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_7_chandra', name: 'दुर्धर्ष', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_8_chandra', name: 'सुबाहु', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_9_chandra', name: 'दुष्प्रधर्षण', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_10_chandra', name: 'दुर्मर्षण', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_11_chandra', name: 'दुर्मुख', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_12_chandra', name: 'दुष्कर्म', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_13_chandra', name: 'कर्ण (कौरव)', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_14_chandra', name: 'विविंशति', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_15_chandra', name: 'सुलोचन', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_16_chandra', name: 'चित्र', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_17_chandra', name: 'उपचित्र', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_18_chandra', name: 'चित्राक्ष', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_19_chandra', name: 'चारुचित्र', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_20_chandra', name: 'शरासन', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_21_chandra', name: 'दुर्मद', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_22_chandra', name: 'दुष्प्रगाह', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_23_chandra', name: 'विवित्सु', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_24_chandra', name: 'विकट', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_25_chandra', name: 'ऊर्णनाभ', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_26_chandra', name: 'सुनाभ', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_27_chandra', name: 'नन्द', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_28_chandra', name: 'उपनन्दक', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_29_chandra', name: 'सेनापति', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_30_chandra', name: 'सुषेण (कौरव)', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_31_chandra', name: 'कुण्डोदर', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_32_chandra', name: 'महोदर', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_33_chandra', name: 'चित्रबाण', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_34_chandra', name: 'चित्रवर्मन', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_35_chandra', name: 'सुवर्मन', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_36_chandra', name: 'दुर्विमोचन', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_37_chandra', name: 'अयोबाहु', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_38_chandra', name: 'महाबाहु', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_39_chandra', name: 'चित्रांग', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_40_chandra', name: 'चित्रकुण्डल', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_41_chandra', name: 'भीमवेग', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_42_chandra', name: 'भीमबल', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_43_chandra', name: 'बलाकी', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_44_chandra', name: 'बलवर्धन', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_45_chandra', name: 'उग्रायुध', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_46_chandra', name: 'भीमकर्ण', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_47_chandra', name: 'कनकायु', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_48_chandra', name: 'दृढायुध', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_49_chandra', name: 'दृढवर्मन', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_50_chandra', name: 'दृढक्षत्र', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_51_chandra', name: 'सोमकीर्ति', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_52_chandra', name: 'अनूदर', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_53_chandra', name: 'दृढसन्ध', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_54_chandra', name: 'जरासन्ध (कौरव)', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_55_chandra', name: 'सत्यसन्ध', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_56_chandra', name: 'सद:सुवाक', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_57_chandra', name: 'उग्रश्रवा', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_58_chandra', name: 'अश्वसेन', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_59_chandra', name: 'सेनानी', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_60_chandra', name: 'दुष्पराजय', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_61_chandra', name: 'अपराजित', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_62_chandra', name: 'पण्डितक', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_63_chandra', name: 'विशालाक्ष', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_64_chandra', name: 'दुरावर', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_65_chandra', name: 'दृढहस्त', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_66_chandra', name: 'सुहस्त', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_67_chandra', name: 'वातवेग', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_68_chandra', name: 'सुवर्चा', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_69_chandra', name: 'आदित्यकेतु', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_70_chandra', name: 'बह्वाशी', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_71_chandra', name: 'नागदत्त', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_72_chandra', name: 'उग्रयायी', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_73_chandra', name: 'कवची', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_74_chandra', name: 'निषंगी', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_75_chandra', name: 'पाशी', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_76_chandra', name: 'दण्डधार', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_77_chandra', name: 'धनुर्ग्रह', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_78_chandra', name: 'उग्र', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_79_chandra', name: 'भीमरथ', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_80_chandra', name: 'वीर', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_81_chandra', name: 'वीरबाहु', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_82_chandra', name: 'अलोलुप', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_83_chandra', name: 'अभय', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_84_chandra', name: 'रौद्रकर्मा', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_85_chandra', name: 'दृढरथ', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_86_chandra', name: 'अनाधृष्य', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_87_chandra', name: 'कुण्डभेदी', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_88_chandra', name: 'विरावी', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_89_chandra', name: 'दीर्घलोचन', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_90_chandra', name: 'दीर्घबाहु', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_91_chandra', name: 'महाबाहु (द्वितीय)', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_92_chandra', name: 'व्यूढोरु', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_93_chandra', name: 'कनकध्वज', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_94_chandra', name: 'कुण्डाशी', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_95_chandra', name: 'विरजा', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kaurava_bro_96_chandra', name: 'वीर्यवान', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'vridhakshetra_sindhu', name: 'वृद्धक्षत्र', subtitle: 'सिन्धु नरेश', parent: 'other_dynasties_proxy', clusterName: 'अन्य राजवंश (इन-लॉ)', yug: 'dwapar' },
    { id: 'jayadratha', name: 'जयद्रथ', subtitle: 'सिन्धु नरेश', parent: 'vridhakshetra_sindhu', yug: 'dwapar', parichay: 'कौरवों के बहनोई और सिन्धु नरेश। दुर्योधन की बहन दुश्शला के पति।' },
    { id: 'bharmaketu_chandra', name: 'भरमकेतु (दुर्मषण)', subtitle: 'दुशासन पुत्र', parent: 'dushasan_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    // --- चच राजवंश - सिंध (मध्यकालीन सिन्धु नरेश) ---
    { id: 'chach_dynasty_proxy', name: 'चच राजवंश', subtitle: 'सिंध राजवंश', parent: 'jayadratha', gender: 'male', yug: 'kali', clusterName: 'चच वंश (सिंध)', isProxy: true, parichay: 'सिंधु के प्राचीन शासकों (जयद्रथ) के बाद मध्यकाल में यह सिंध का अंतिम हिंदू ब्राह्मण राजवंश था।' },
    { id: 'rai_sahasi_ii', name: 'राय साहसी द्वितीय', subtitle: 'राय वंश', parent: 'chach_dynasty_proxy', gender: 'male', yug: 'kali', clusterName: 'चच वंश (सिंध)', parichay: 'सिंध के राय वंश (बौद्ध) के अंतिम राजा। इनकी मृत्यु के बाद चच ने साम्राज्य संभाला।' },
    { id: 'rani_suhandi', name: 'रानी सुहानदी', subtitle: 'सिंध की रानी', parent: 'chach_dynasty_proxy', gender: 'female', spouseOf: 'chach_of_alor', yug: 'kali', clusterName: 'चच वंश (सिंध)', parichay: 'राय साहसी द्वितीय की विधवा रानी, जिन्होंने बाद में चच से विवाह किया और चच राजवंश की स्थापना में मदद की।' },
    { id: 'chach_of_alor', name: 'चच', subtitle: 'चच वंश संस्थापक', parent: 'chach_dynasty_proxy', gender: 'male', yug: 'kali', clusterName: 'चच वंश (सिंध)', parichay: 'इन्होंने बौद्ध राय राजवंश के बाद सिंध में हिंदू साम्राज्य स्थापित किया (631-671 AD)।' },
    { id: 'chandar_of_sindh', name: 'चंदर', subtitle: 'सिंध नरेश', parent: 'chach_dynasty_proxy', gender: 'male', yug: 'kali', clusterName: 'चच वंश (सिंध)', parichay: 'चच के भाई और उनके उत्तराधिकारी, जिन्होंने सिंध पर कुछ समय राज किया।' },

    // राजा दाहीर और उनका परिवार
    { id: 'dahir_of_sindh', name: 'राजा दाहीर', subtitle: 'सिंध के अंतिम हिंदू नरेश', parent: 'chach_of_alor', mother: 'rani_suhandi', gender: 'male', yug: 'kali', clusterName: 'चच वंश (सिंध)', parichay: 'चच के पुत्र और सिंध के महान राजा, जो 712 ईस्वी में मुहम्मद बिन कासिम के अरब आक्रमण से लड़ते हुए वीरगति को प्राप्त हुए।' },
    { id: 'rani_ladi', name: 'रानी लाडी', subtitle: 'दाहीर की पत्नी', parent: 'chach_dynasty_proxy', gender: 'female', spouseOf: 'dahir_of_sindh', yug: 'kali', clusterName: 'चच वंश (सिंध)' },
    { id: 'rani_bai', name: 'रानी बाई', subtitle: 'दाहीर की पत्नी', parent: 'chach_dynasty_proxy', gender: 'female', spouseOf: 'dahir_of_sindh', yug: 'kali', clusterName: 'चच वंश (सिंध)', parichay: 'अरबों से किले की रक्षा करते हुए इन्होंने अंत में अन्य राजपूत महिलाओं के साथ जौहर किया।' },

    // दाहीर के बच्चे
    { id: 'dharsiya_sindh', name: 'धर्सिया', subtitle: 'दाहीर का पुत्र', parent: 'dahir_of_sindh', gender: 'male', yug: 'kali', clusterName: 'चच वंश (सिंध)' },
    { id: 'jaisiah_sindh', name: 'जयसिंघ (जयसिंह)', subtitle: 'दाहीर का पुत्र', parent: 'dahir_of_sindh', mother: 'rani_ladi', gender: 'male', yug: 'kali', clusterName: 'चच वंश (सिंध)', parichay: 'दाहीर का शूरवीर पुत्र जिसने अपने पिता की मृत्यु के बाद भी अरबों के खिलाफ कड़ा संघर्ष जारी रखा और ब्राह्मणों/राजपूतों को एकजुट किया।' },
    { id: 'fufi_sindh', name: 'फूफी', subtitle: 'दाहीर की पुत्री', parent: 'dahir_of_sindh', gender: 'female', yug: 'kali', clusterName: 'चच वंश (सिंध)' },
    { id: 'surya_devi_sindh', name: 'सूर्य देवी', subtitle: 'दाहीर की पुत्री', parent: 'dahir_of_sindh', gender: 'female', yug: 'kali', clusterName: 'चच वंश (सिंध)', parichay: 'अरबों द्वारा बंदी बनाकर खलीफा के पास भेजी गई। चचनामा के अनुसार इन्होंने खलीफा को कासिम के खिलाफ भड़का कर अपने पिता का बदला लिया।' },
    { id: 'premala_devi_sindh', name: 'परिमल देवी (प्रेमदा)', subtitle: 'दाहीर की पुत्री', parent: 'dahir_of_sindh', gender: 'female', yug: 'kali', clusterName: 'चच वंश (सिंध)', parichay: 'अपनी बहन सूर्य देवी के साथ बंदी बनाकर दमिश्क भेजी गई थीं।' },
    { id: 'jodha_devi_sindh', name: 'जोधा देवी', subtitle: 'दाहीर की पुत्री', parent: 'dahir_of_sindh', gender: 'female', yug: 'kali', clusterName: 'चच वंश (सिंध)', parichay: 'कहा जाता है कि अरब आक्रमण के समय इन्होंने अपनी माता रानी बाई के साथ जौहर कर लिया था।' },

    // --- पाण्डु का परिवार (पांडव) ---
    { id: 'madri_chandra', name: 'माद्री', subtitle: 'पाण्डु पत्नी', parent: '', spouseOf: 'pandu_chandra', yug: 'dwapar' },

    // युधिष्ठिर
        { id: 'pandu_dynasty_proxy', name: 'पाण्डव वंश', subtitle: 'पाण्डु के वंशज', parent: 'pandu_chandra', yug: 'dwapar', isProxy: true, clusterName: 'नहुष चंद्रवंशी' },
    { id: 'yudhishthir_chandra', name: 'युधिष्ठिर', subtitle: 'धर्मराज / पांडव',parent: 'pandu_dynasty_proxy', mother: 'kunti_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'devika_yudhishthir_chandra', name: 'देविका', subtitle: 'शिबि पुत्री', parent: 'sibi_anu', spouseOf: 'yudhishthir_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
        { id: 'upapandav_proxy', name: 'उपपांडव', subtitle: 'द्रौपदी के 5 पुत्र', parent: 'yudhishthir_chandra', yug: 'dwapar', isProxy: true, clusterName: 'नहुष चंद्रवंशी' },
    { id: 'prativindhya_chandra', name: 'प्रतिविन्ध्य', subtitle: 'द्रौपदी पुत्र (उपपांडव)', parent: 'upapandav_proxy', mother: 'draupadi_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'yaudheya_chandra', name: 'यौधेय', subtitle: 'युधिष्ठिर पुत्र', parent: 'yudhishthir_chandra', mother: 'devika_yudhishthir_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    // भीम
    { id: 'bhim_chandra', name: 'भीम (वृकोदर)', subtitle: 'पवन पुत्र / पांडव',parent: 'pandu_dynasty_proxy', mother: 'kunti_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'hidimba_wife_chandra', name: 'हिडिम्बा', subtitle: 'राक्षसी / भीम पत्नी', parent: '', spouseOf: 'bhim_chandra', yug: 'dwapar' },
    { id: 'valandhara_chandra', name: 'वलंधरा', subtitle: 'काशी पुत्री', parent: '', spouseOf: 'bhim_chandra', yug: 'dwapar' },
    { id: 'sutasoma_chandra', name: 'सुतसोम', subtitle: 'द्रौपदी पुत्र (उपपांडव)', parent: 'upapandav_proxy', mother: 'draupadi_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'ghatotkacha_chandra', name: 'घटोत्कच', subtitle: 'भीम-हिडिम्बा पुत्र', parent: 'bhim_chandra', mother: 'hidimba_wife_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'ahilawati_chandra', name: 'अहिलावती', subtitle: 'घटोत्कच पत्नी', parent: '', spouseOf: 'ghatotkacha_chandra', yug: 'dwapar' },
    { id: 'barbarik_chandra', name: 'बर्बरीक (खाटू श्याम)', subtitle: 'घटोत्कच पुत्र', parent: 'ghatotkacha_chandra', mother: 'ahilawati_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'anjanaparvan_chandra', name: 'अंजनपर्वा', subtitle: 'घटोत्कच पुत्र', parent: 'ghatotkacha_chandra', mother: 'ahilawati_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'meghavarna_chandra', name: 'मेघवर्ण', subtitle: 'घटोत्कच पुत्र', parent: 'ghatotkacha_chandra', mother: 'ahilawati_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sarvaga_chandra', name: 'सर्वग', subtitle: 'भीम पुत्र', parent: 'bhim_chandra', mother: 'valandhara_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    // अर्जुन
    { id: 'arjun_chandra', name: 'अर्जुन (पार्थ)', subtitle: 'इंद्र पुत्र / पांडव',parent: 'pandu_dynasty_proxy', mother: 'kunti_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'ulupi_chandra', name: 'उलूपी', subtitle: 'नाग कन्या / अर्जुन पत्नी', parent: 'kauravya_naga_king', spouseOf: 'arjun_chandra', yug: 'dwapar' },
    { id: 'chitrangada_wife_chandra', name: 'चित्रांगदा', subtitle: 'मणिपुर पुत्री / अर्जुन पत्नी', parent: 'chitravahana_manipur', spouseOf: 'arjun_chandra', yug: 'dwapar' },
    { id: 'shrutakarma_chandra', name: 'श्रुतकर्मा', subtitle: 'द्रौपदी पुत्र (उपपांडव)', parent: 'upapandav_proxy', mother: 'draupadi_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'abhimanyu_chandra', name: 'अभिमन्यु', subtitle: 'अर्जुन-सुभद्रा पुत्र', parent: 'arjun_chandra', mother: 'subhadra_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'iravan_chandra', name: 'इरावन', subtitle: 'अर्जुन पुत्र', parent: 'arjun_chandra', mother: 'ulupi_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'babhruvahana_chandra', name: 'बभ्रुवाहन', subtitle: 'अर्जुन पुत्र', parent: 'arjun_chandra', mother: 'chitrangada_wife_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    // नकुल
    { id: 'nakul_chandra', name: 'नकुल', subtitle: 'अश्विनी कुमार पुत्र',parent: 'pandu_dynasty_proxy', mother: 'madri_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'karenumati_chandra', name: 'करेणुमती', subtitle: 'चेदि पुत्री / नकुल पत्नी', parent: 'shishupala_chandra', spouseOf: 'nakul_chandra', yug: 'dwapar' },
    { id: 'shatanika_upa_chandra', name: 'शतानीक', subtitle: 'द्रौपदी पुत्र (उपपांडव)', parent: 'upapandav_proxy', mother: 'draupadi_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'niramitra_chandra', name: 'निरमित्र', subtitle: 'नकुल पुत्र', parent: 'nakul_chandra', mother: 'karenumati_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    // सहदेव
    { id: 'sahadev_chandra', name: 'सहदेव', subtitle: 'अश्विनी कुमार पुत्र',parent: 'pandu_dynasty_proxy', mother: 'madri_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vijaya_sahadev_chandra', name: 'विजया', subtitle: 'मद्र पुत्री / सहदेव पत्नी', parent: 'shalya_madra_king', spouseOf: 'sahadev_chandra', yug: 'dwapar' },
    { id: 'shrutasena_upa_chandra', name: 'श्रुतसेन', subtitle: 'द्रौपदी पुत्र (उपपांडव)', parent: 'upapandav_proxy', mother: 'draupadi_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'suhotra_sahadev_chandra', name: 'सुहोत्र', subtitle: 'सहदेव पुत्र', parent: 'sahadev_chandra', mother: 'vijaya_sahadev_chandra', yug: 'dwapar', clusterName: 'नहुष चंद्रवंशी' },

    // --- कलियुग (परीक्षित से क्षेमक तक) ---
    { id: 'uttara_abhimanyu_chandra', name: 'उत्तरा', subtitle: 'विराट पुत्री / अभिमन्यु पत्नी', parent: 'virata_matsya', spouseOf: 'abhimanyu_chandra', yug: 'dwapar' },
    { id: 'parikshit_chandra', name: 'परीक्षित (द्वितीय)', subtitle: 'कलियुग के प्रथम कुरु राजा', parent: 'abhimanyu_chandra', mother: 'uttara_abhimanyu_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'madravati_parikshit_chandra', name: 'मद्रावती', subtitle: 'परीक्षित पत्नी', parent: '', spouseOf: 'parikshit_chandra', yug: 'kali' },

    { id: 'janamejaya_2_chandra', name: 'जनमेजय (द्वितीय)', subtitle: 'परीक्षित पुत्र (सर्पसत्र)', parent: 'parikshit_chandra', mother: 'madravati_parikshit_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shrutasena_kali', name: 'श्रुतसेन', subtitle: 'परीक्षित पुत्र', parent: 'parikshit_chandra', mother: 'madravati_parikshit_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'ugrasena_kali', name: 'उग्रसेन', subtitle: 'परीक्षित पुत्र', parent: 'parikshit_chandra', mother: 'madravati_parikshit_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'bhimasena_kali', name: 'भीमसेन', subtitle: 'परीक्षित पुत्र', parent: 'parikshit_chandra', mother: 'madravati_parikshit_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'vapushtama_chandra', name: 'वपुष्टमा', subtitle: 'जनमेजय पत्नी', parent: '', spouseOf: 'janamejaya_2_chandra', yug: 'kali' },
    { id: 'shatanika_kali', name: 'शतानीक', subtitle: 'जनमेजय पुत्र', parent: 'janamejaya_2_chandra', mother: 'vapushtama_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shankukarna_chandra', name: 'शंकुकर्ण', subtitle: 'जनमेजय पुत्र', parent: 'janamejaya_2_chandra', mother: 'vapushtama_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'ashvamedhadatta_chandra', name: 'अश्वमेधदत्त', subtitle: 'शतानीक पुत्र', parent: 'shatanika_kali', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'asimakrishna_chandra', name: 'असीमकृष्ण', subtitle: 'अश्वमेधदत्त पुत्र', parent: 'ashvamedhadatta_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'nichakshu_chandra', name: 'निचक्षु', subtitle: 'कौशाम्बी नरेश', parent: 'asimakrishna_chandra', yug: 'kali', parichay: 'इनके काल में हस्तिनापुर गंगा में बह गया, अतः इन्होंने कौशाम्बी को अपनी राजधानी बनाया।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'ushna_kuru', name: 'उष्ण', subtitle: 'निचक्षु पुत्र', parent: 'nichakshu_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'chitraratha_kuru', name: 'चित्ररथ', subtitle: 'उष्ण पुत्र', parent: 'ushna_kuru', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vrishniman_chandra', name: 'वृष्णिमान', subtitle: 'चित्ररथ पुत्र', parent: 'chitraratha_kuru', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sushena_kuru', name: 'सुषेण', subtitle: 'वृष्णिमान पुत्र', parent: 'vrishniman_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sunitha_kuru', name: 'सुनीथ', subtitle: 'सुषेण पुत्र', parent: 'sushena_kuru', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'rucha_kuru', name: 'रुच', subtitle: 'सुनीथ पुत्र', parent: 'sunitha_kuru', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'nrichakshu_chandra', name: 'नृचक्षु', subtitle: 'रुच पुत्र', parent: 'rucha_kuru', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sukhibala_chandra', name: 'सुखिबल', subtitle: 'नृचक्षु पुत्र', parent: 'nrichakshu_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'pariplava_chandra', name: 'परिप्लव', subtitle: 'सुखिबल पुत्र', parent: 'sukhibala_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'sunaya_chandra', name: 'सुनय', subtitle: 'परिप्लव पुत्र', parent: 'pariplava_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'medhavi_chandra', name: 'मेधावी', subtitle: 'सुनय पुत्र', parent: 'sunaya_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'nripanjaya_chandra', name: 'नृपंजय', subtitle: 'मेधावी पुत्र', parent: 'medhavi_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dhrva_kali', name: 'ध्रुव', subtitle: 'नृपंजय पुत्र', parent: 'nripanjaya_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'tigmajoti_chandra', name: 'तिग्मज्योति', subtitle: 'ध्रुव पुत्र', parent: 'dhrva_kali', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'brihadratha_kali', name: 'बृहद्रथ', subtitle: 'तिग्मज्योति पुत्र', parent: 'tigmajoti_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vasudana_chandra', name: 'वसुदान', subtitle: 'बृहद्रथ पुत्र', parent: 'brihadratha_kali', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shatanika_2_kali', name: 'शतानीक (द्वितीय)', subtitle: 'वसुदान पुत्र', parent: 'vasudana_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'udayana_chandra', name: 'उदयन', subtitle: 'शतानीक पुत्र', parent: 'shatanika_2_kali', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'ahinara_chandra', name: 'अहीनार', subtitle: 'उदयन पुत्र', parent: 'udayana_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'khandapani_chandra', name: 'खण्डपाणि', subtitle: 'अहीनार पुत्र', parent: 'ahinara_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'niramitra_kali', name: 'निरमित्र', subtitle: 'खण्डपाणि पुत्र', parent: 'khandapani_chandra', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kshemaka_chandra', name: 'क्षेमक', subtitle: 'अंतिम कुरु राजा', parent: 'niramitra_kali', yug: 'kali', parichay: 'ये कुरु वंश के अंतिम राजा थे। इनके बाद कलियुग में यह राजवंश समाप्त हो गया।', clusterName: 'नहुष चंद्रवंशी' },

    // --- तोमर / तंवर राजवंश (कलियुग - कुरु वंश की शाखा) ---
    // क्षेमक के बाद ऐतिहासिक अंतराल (Historical Gap) और दिल्ली/ग्वालियर के तोमर
    { id: 'tomar_medieval_link', name: 'ऐतिहासिक अंतराल (तोमर)', subtitle: 'अज्ञात पीढ़ियाँ', parent: 'kshemaka_chandra', yug: 'kali', parichay: 'क्षेमक (अंतिम कुरु राजा) के बाद उनके वंशज दक्षिण (गोदावरी क्षेत्र) चले गए थे, जो बाद में तोमर राजपूतों के रूप में दिल्ली लौटे।', clusterName: 'नहुष चंद्रवंशी' },

    // दिल्ली के तोमर नरेश
    { id: 'tomar_dynasty_proxy', name: 'तोमर वंश', subtitle: 'दिल्ली/ग्वालियर राजवंश', parent: 'tomar_medieval_link', yug: 'kali', isProxy: true, clusterName: 'नहुष चंद्रवंशी' },
    { id: 'tungpal_tomar', name: 'तुंगपाल (बिलनदेव)', subtitle: 'तोमर वंश मूल', parent: 'tomar_medieval_link', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'anangpal_1_tomar', name: 'अनंगपाल तोमर (प्रथम)', subtitle: 'दिल्ली के संस्थापक', parent: 'tungpal_tomar', yug: 'kali', parichay: 'इन्होंने 736 ईस्वी में इंद्रप्रस्थ के प्राचीन खंडहरों पर फिर से ढिल्लिका (दिल्ली) शहर की स्थापना की।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vasudeva_tomar', name: 'वासुदेव', subtitle: 'दिल्ली नरेश', parent: 'anangpal_1_tomar', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'ganggeya_tomar', name: 'गांगेय', subtitle: 'दिल्ली नरेश', parent: 'vasudeva_tomar', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'prithvimal_tomar', name: 'पृथ्वीमल', subtitle: 'दिल्ली नरेश', parent: 'ganggeya_tomar', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'jayadeva_tomar', name: 'जयदेव', subtitle: 'दिल्ली नरेश', parent: 'prithvimal_tomar', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'nirapal_tomar', name: 'नीरपाल', subtitle: 'दिल्ली नरेश', parent: 'jayadeva_tomar', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'udayaraja_tomar', name: 'उदयराज', subtitle: 'दिल्ली नरेश', parent: 'nirapal_tomar', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vacharaja_tomar', name: 'वछराज', subtitle: 'दिल्ली नरेश', parent: 'udayaraja_tomar', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'virapala_tomar', name: 'वीरपाल', subtitle: 'दिल्ली नरेश', parent: 'vacharaja_tomar', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'anangpal_2_tomar', name: 'अनंगपाल तोमर (द्वितीय)', subtitle: 'महान दिल्ली सम्राट', parent: 'virapala_tomar', yug: 'kali', parichay: 'इन्होंने लाल कोट (Qutub Minar क्षेत्र) बनवाया और महरौली का लौह स्तंभ स्थापित किया। इन्होंने अजमेर के चौहान राजा सोमेश्वर को अपनी पुत्री ब्याही, जिससे पृथ्वीराज चौहान का जन्म हुआ।', clusterName: 'नहुष चंद्रवंशी' },

    // ग्वालियर के तोमर
    { id: 'veer_singh_dev_tomar', name: 'वीर सिंह देव', subtitle: 'ग्वालियर तोमर संस्थापक', parent: 'anangpal_2_tomar', yug: 'kali', parichay: 'दिल्ली छूटने के बाद 1394 ईस्वी में इन्होंने ग्वालियर पर तोमर साम्राज्य की नींव रखी।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'uddharan_dev_tomar', name: 'उद्धरण देव', subtitle: 'ग्वालियर नरेश', parent: 'veer_singh_dev_tomar', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'viram_dev_tomar', name: 'वीरम देव', subtitle: 'ग्वालियर नरेश', parent: 'uddharan_dev_tomar', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'ganpati_dev_tomar', name: 'गणपति देव', subtitle: 'ग्वालियर नरेश', parent: 'viram_dev_tomar', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'dungar_singh_tomar', name: 'डूंगर सिंह', subtitle: 'ग्वालियर नरेश', parent: 'ganpati_dev_tomar', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kirti_singh_tomar', name: 'कीर्ति सिंह', subtitle: 'ग्वालियर नरेश', parent: 'dungar_singh_tomar', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kalyan_malla_tomar', name: 'कल्याण मल्ल', subtitle: 'ग्वालियर नरेश', parent: 'kirti_singh_tomar', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'man_singh_tomar', name: 'राजा मान सिंह तोमर', subtitle: 'ग्वालियर के महान सम्राट', parent: 'kalyan_malla_tomar', yug: 'kali', parichay: 'इन्होंने ग्वालियर का प्रसिद्ध किला और गूजरी महल बनवाया। ये संगीत के महान संरक्षक थे (ध्रुपद)।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vikramaditya_tomar', name: 'विक्रमादित्य तोमर', subtitle: 'ग्वालियर के अंतिम नरेश', parent: 'man_singh_tomar', yug: 'kali', parichay: 'ये पानीपत के प्रथम युद्ध (1526) में इब्राहिम लोदी की ओर से लड़ते हुए बाबर के खिलाफ मारे गए।', clusterName: 'नहुष चंद्रवंशी' },

    // --- कटोच राजवंश (त्रिगर्त / कांगड़ा - चंद्रवंश की शाखा) ---
    // भूमिचंद को चंद्रवंशी माना जाता है, जिन्होंने त्रिगर्त राज्य की स्थापना की
    { id: 'bhumichand_katoch', name: 'भूमिचंद', subtitle: 'त्रिगर्त के संस्थापक',parent: 'chandravansh_dynasty_proxy', yug: 'satya', parichay: 'इन्हें चंद्रवंश/सोमवंश का माना जाता है जिन्होंने कांगड़ा (त्रिगर्त) राज्य की स्थापना की।' , clusterName: 'पुरुरवा के अन्य पुत्र' },
    { id: 'susharma_chandra_katoch', name: 'सुशर्मा चन्द्र', subtitle: 'त्रिगर्त नरेश (महाभारत काल)', parent: 'bhumichand_katoch', yug: 'dwapar', parichay: 'इन्होंने कांगड़ा के किले का निर्माण करवाया। महाभारत युद्ध में इन्होंने कौरवों का साथ दिया और विराट नगर पर आक्रमण किया था।' },

    { id: 'katoch_medieval_link', name: 'ऐतिहासिक अंतराल (कटोच)', subtitle: 'अज्ञात पीढ़ियाँ', parent: 'susharma_chandra_katoch', yug: 'kali', parichay: 'सुशर्मा चन्द्र के बाद कांगड़ा रियासत के कई राजा हुए (जैसे रूप चन्द्र, जय चन्द्र)।' },

    // मध्यकालीन एवं आधुनिक कांगड़ा के कटोच राजा
        { id: 'katoch_dynasty_proxy', name: 'कटोच वंश', subtitle: 'कांगड़ा राजवंश', parent: 'katoch_medieval_link', yug: 'kali', clusterName: 'कटोच (कांगड़ा) वंश', isProxy: true },
    { id: 'rup_chandra_katoch', name: 'रूप चन्द्र', subtitle: 'कांगड़ा नरेश', parent: 'katoch_dynasty_proxy', clusterName: 'कटोच (कांगड़ा) वंश', yug: 'kali', parichay: 'इन्होंने 1360 ई. के आसपास शासन किया और दिल्ली तक लूटमार की।' },
    { id: 'sangara_chandra_katoch', name: 'संगारा चन्द्र', subtitle: 'कांगड़ा नरेश', parent: 'rup_chandra_katoch', yug: 'kali' , clusterName: 'कटोच (कांगड़ा) वंश' },
    { id: 'megh_chandra_katoch', name: 'मेघ चन्द्र', subtitle: 'कांगड़ा नरेश', parent: 'sangara_chandra_katoch', yug: 'kali' , clusterName: 'कटोच (कांगड़ा) वंश' },
    { id: 'hari_chandra_katoch', name: 'हरि चन्द्र', subtitle: 'गुलेर राज्य संस्थापक', parent: 'megh_chandra_katoch', yug: 'kali', parichay: 'हरि चन्द्र के शिकार में खो जाने पर उनके भाई करम चन्द्र को राजा बना दिया गया। हरि चन्द्र ने लौटकर गुलेर राज्य बसाया।' },
    { id: 'karam_chandra_katoch', name: 'करम चन्द्र', subtitle: 'कांगड़ा नरेश', parent: 'megh_chandra_katoch', yug: 'kali' , clusterName: 'कटोच (कांगड़ा) वंश' },
    { id: 'sansar_chand_1_katoch', name: 'संसार चन्द (प्रथम)', subtitle: 'कांगड़ा नरेश', parent: 'karam_chandra_katoch', yug: 'kali' , clusterName: 'कटोच (कांगड़ा) वंश' },
    { id: 'gurcharan_chand_katoch', name: 'गुरचरण चन्द', subtitle: 'कांगड़ा नरेश', parent: 'sansar_chand_1_katoch', yug: 'kali' , clusterName: 'कटोच (कांगड़ा) वंश' },
    { id: 'bidhi_chand_katoch', name: 'बिधि चन्द', subtitle: 'कांगड़ा नरेश', parent: 'gurcharan_chand_katoch', yug: 'kali' , clusterName: 'कटोच (कांगड़ा) वंश' },
    { id: 'trilok_chand_katoch', name: 'त्रिलोक चन्द', subtitle: 'कांगड़ा नरेश', parent: 'bidhi_chand_katoch', yug: 'kali' , clusterName: 'कटोच (कांगड़ा) वंश' },
    { id: 'hari_chand_2_katoch', name: 'हरि चन्द (द्वितीय)', subtitle: 'कांगड़ा नरेश', parent: 'trilok_chand_katoch', yug: 'kali' , clusterName: 'कटोच (कांगड़ा) वंश' },
    { id: 'chander_bhan_chand_katoch', name: 'चन्द्रभान चन्द', subtitle: 'कांगड़ा नरेश', parent: 'hari_chand_2_katoch', yug: 'kali' , clusterName: 'कटोच (कांगड़ा) वंश' },
    { id: 'vijay_ram_chand_katoch', name: 'विजय राम चन्द', subtitle: 'कांगड़ा नरेश', parent: 'chander_bhan_chand_katoch', yug: 'kali' , clusterName: 'कटोच (कांगड़ा) वंश' },
    { id: 'udai_ram_chand_katoch', name: 'उदय राम चन्द', subtitle: 'कांगड़ा नरेश', parent: 'vijay_ram_chand_katoch', yug: 'kali' , clusterName: 'कटोच (कांगड़ा) वंश' },
    { id: 'pirthi_chand_katoch', name: 'पृथ्वी चन्द', subtitle: 'कांगड़ा नरेश', parent: 'udai_ram_chand_katoch', yug: 'kali' , clusterName: 'कटोच (कांगड़ा) वंश' },
    { id: 'hamir_chand_katoch', name: 'हमीर चन्द', subtitle: 'कांगड़ा नरेश', parent: 'pirthi_chand_katoch', yug: 'kali' , clusterName: 'कटोच (कांगड़ा) वंश' },
    { id: 'abhai_chand_katoch', name: 'अभय चन्द', subtitle: 'कांगड़ा नरेश', parent: 'hamir_chand_katoch', yug: 'kali' , clusterName: 'कटोच (कांगड़ा) वंश' },
    { id: 'ghamand_chand_katoch', name: 'घमंड चन्द', subtitle: 'कांगड़ा नरेश', parent: 'abhai_chand_katoch', yug: 'kali', parichay: 'इन्होंने अहमद शाह अब्दाली के समय कांगड़ा का शासन संभाला।' , clusterName: 'कटोच (कांगड़ा) वंश' },
    { id: 'tegh_chand_katoch', name: 'तेग चन्द', subtitle: 'कांगड़ा नरेश', parent: 'ghamand_chand_katoch', yug: 'kali' , clusterName: 'कटोच (कांगड़ा) वंश' },
    { id: 'sansar_chand_2_katoch', name: 'महाराजा संसार चन्द (द्वितीय)', subtitle: 'कांगड़ा के महान सम्राट', parent: 'tegh_chand_katoch', yug: 'kali', parichay: 'इन्हें कांगड़ा का स्वर्ण युग लाने का श्रेय है। इन्होंने कांगड़ा चित्रकला (Kangra Paintings) को संरक्षण दिया और महाराजा रणजीत सिंह के साथ संधियां कीं।' , clusterName: 'कटोच (कांगड़ा) वंश' },

    // --- कलचुरी / हैहय राजवंश (त्रिपुरी शाखा) ---
    // यदु -> सहस्रजित -> हैहय -> कार्तवीर्य अर्जुन -> वीतिहोत्र के आगे का वंश
    { id: 'kalchuri_medieval_link', name: 'ऐतिहासिक अंतराल (कलचुरी)', subtitle: 'अज्ञात पीढ़ियाँ', parent: 'supratika_haihaya', yug: 'kali', parichay: 'प्राचीन माहिष्मती के हैहय वंश के पतन के बाद 8वीं सदी में त्रिपुरी (मध्य प्रदेश) में कलचुरी वंश का उदय हुआ।', clusterName: 'नहुष चंद्रवंशी' },

    { id: 'kalchuri_dynasty_proxy', name: 'कलचुरी वंश', subtitle: 'त्रिपुरी राजवंश', parent: 'kalchuri_medieval_link', yug: 'kali', isProxy: true, clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vamaraja_kalchuri', name: 'वामराज', subtitle: 'कलचुरी वंश मूल', parent: 'kalchuri_medieval_link', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shankaragana_1_kalchuri', name: 'शंकरगण (प्रथम)', subtitle: 'कलचुरी नरेश', parent: 'vamaraja_kalchuri', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kokalla_1_kalchuri', name: 'कोकल्ल (प्रथम)', subtitle: 'त्रिपुरी शाखा के संस्थापक', parent: 'shankaragana_1_kalchuri', yug: 'kali', parichay: '845 ईस्वी में इन्होंने त्रिपुरी (वर्तमान जबलपुर) को अपनी राजधानी बनाया और कलचुरी वंश की स्थापना की।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shankaragana_2_kalchuri', name: 'शंकरगण (द्वितीय) मुग्धतुंग', subtitle: 'त्रिपुरी नरेश', parent: 'kokalla_1_kalchuri', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'balaharsha_kalchuri', name: 'बालहर्ष', subtitle: 'त्रिपुरी नरेश', parent: 'shankaragana_2_kalchuri', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'yuvarajadeva_1_kalchuri', name: 'युवराजदेव (प्रथम) केयूरवर्ष', subtitle: 'त्रिपुरी नरेश', parent: 'shankaragana_2_kalchuri', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'lakshmanaraja_2_kalchuri', name: 'लक्ष्मणराज (द्वितीय)', subtitle: 'त्रिपुरी नरेश', parent: 'yuvarajadeva_1_kalchuri', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'shankaragana_3_kalchuri', name: 'शंकरगण (तृतीय)', subtitle: 'त्रिपुरी नरेश', parent: 'lakshmanaraja_2_kalchuri', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'yuvarajadeva_2_kalchuri', name: 'युवराजदेव (द्वितीय)', subtitle: 'त्रिपुरी नरेश', parent: 'lakshmanaraja_2_kalchuri', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'kokalla_2_kalchuri', name: 'कोकल्ल (द्वितीय)', subtitle: 'त्रिपुरी नरेश', parent: 'yuvarajadeva_2_kalchuri', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'gangeyadeva_kalchuri', name: 'गांगेयदेव (विक्रमादित्य)', subtitle: 'महान कलचुरी सम्राट', parent: 'kokalla_2_kalchuri', yug: 'kali', parichay: 'ये एक प्रतापी राजा थे जिन्होंने विक्रमादित्य की उपाधि धारण की और सोने, चांदी व तांबे के सिक्के चलवाए।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'lakshmikarna_kalchuri', name: 'लक्ष्मीकर्ण (कर्णदेव)', subtitle: 'चक्रवर्ती सम्राट', parent: 'gangeyadeva_kalchuri', yug: 'kali', parichay: 'इनके शासनकाल में कलचुरी साम्राज्य अपने चरम पर था। इन्होंने मालवा के राजा भोज को पराजित किया था।', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'yashahkarna_kalchuri', name: 'यशःकर्ण', subtitle: 'त्रिपुरी नरेश', parent: 'lakshmikarna_kalchuri', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'gayakarna_kalchuri', name: 'गयाकर्ण', subtitle: 'त्रिपुरी नरेश', parent: 'yashahkarna_kalchuri', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'narasimha_kalchuri', name: 'नरसिंह', subtitle: 'त्रिपुरी नरेश', parent: 'gayakarna_kalchuri', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'jayasimha_kalchuri', name: 'जयसिंह', subtitle: 'त्रिपुरी नरेश', parent: 'gayakarna_kalchuri', yug: 'kali', clusterName: 'नहुष चंद्रवंशी' },
    { id: 'vijayasimha_kalchuri', name: 'विजयसिंह', subtitle: 'अंतिम त्रिपुरी नरेश', parent: 'jayasimha_kalchuri', yug: 'kali', parichay: 'ये त्रिपुरी शाखा के अंतिम ज्ञात शासक थे, जिनके बाद कलचुरी साम्राज्य का पतन हो गया।', clusterName: 'नहुष चंद्रवंशी' },

    // --- चोल राजवंश (कावेरी राजवंश) ---
    // तुर्वसु वंश से उद्भव (अक्रीड के पुत्र चोल से)। मध्यकालीन चोल अभिलेखों (तिरुवालंगाडु) में इन्होंने अपना वंश सूर्यवंशी मान्धाता व शिबि से जोड़ा।

    // --- प्रारंभिक चेर (केरल) राजवंश (संगम काल) ---
    { id: 'early_chera_link', name: 'ऐतिहासिक अंतराल (संगम काल)', subtitle: 'अज्ञात पीढ़ियाँ', parent: 'kerala_dynasty_proxy', yug: 'kali', parichay: 'पौराणिक केरल संस्थापक से लेकर संगम युग के प्रथम ऐतिहासिक चेर राजा उदियन चेरलथन के बीच की अज्ञात पीढ़ियाँ। मूषिका वंश जैसे ग्रंथ इस बीच कई राजाओं (जैसे राम, नंदन, उग्रसेन) का वर्णन करते हैं।', clusterName: 'चेर (केरल) राजवंश' },

    { id: 'uthiyan_cheralathan', name: 'उदियन चेरलथन', subtitle: 'प्रथम संगम चेर नरेश', parent: 'early_chera_link', yug: 'kali', parichay: 'इन्हें वनवरम्पन (देवताओं का प्रिय) भी कहा जाता था। कहा जाता है कि इन्होंने महाभारत युद्ध में कौरवों और पांडवों को भोजन (पेरुम चोत्रु) कराया था।', clusterName: 'चेर (केरल) राजवंश' },
    { id: 'veliyan_nallini', name: 'वेलियन नल्लिनी', subtitle: 'चेर महारानी', parent: '', spouseOf: 'uthiyan_cheralathan', gender: 'female', yug: 'kali', parichay: 'आय (Ay) राजवंश की राजकुमारी और उदियन चेरलथन की पत्नी।', clusterName: 'चेर (केरल) राजवंश' },

    { id: 'nedum_cheralathan', name: 'नेदुम चेरलथन', subtitle: 'इमयावरम्पन', parent: 'uthiyan_cheralathan', mother: 'veliyan_nallini', yug: 'kali', parichay: 'इन्होंने हिमालय तक विजय प्राप्त की और चेर वंश का धनुष-बाण का चिह्न हिमालय पर अंकित किया।', clusterName: 'चेर (केरल) राजवंश' },
    { id: 'palyanai_chel_kelu_kuttuvan', name: 'पलयानई चेल केलु कुट्टुवन', subtitle: 'उदियन के पुत्र', parent: 'uthiyan_cheralathan', mother: 'veliyan_nallini', yug: 'kali', parichay: 'नेदुम चेरलथन के छोटे भाई, जिन्होंने कोंगर नाडु (कोंगु क्षेत्र) पर विजय प्राप्त की।', clusterName: 'चेर (केरल) राजवंश' },

    { id: 'chola_princess_manikilli', name: 'चोल राजकुमारी मणिकिल्ली', subtitle: 'चेर महारानी', parent: '', spouseOf: 'nedum_cheralathan', gender: 'female', yug: 'kali', parichay: 'चोल राजवंश की राजकुमारी (संभवतः इलमचेतचेन्नी के परिवार से) और नेदुम चेरलथन की पत्नी।', clusterName: 'चेर (केरल) राजवंश' },
    { id: 'other_wife_nedum', name: 'अन्य चेर रानी', subtitle: 'नेदुम की पत्नी', parent: '', spouseOf: 'nedum_cheralathan', gender: 'female', yug: 'kali', clusterName: 'चेर (केरल) राजवंश' },

    { id: 'narmudi_cheral', name: 'नार्मुडी चेरल', subtitle: 'नेदुम के पुत्र', parent: 'nedum_cheralathan', mother: 'other_wife_nedum', yug: 'kali', parichay: 'इन्होंने थगदुर के शासकों को हराया था।', clusterName: 'चेर (केरल) राजवंश' },
    { id: 'senguttuvan_chera', name: 'सेनगुट्टुवन (चेनकुट्टुवन)', subtitle: 'महान चेर नरेश', parent: 'nedum_cheralathan', mother: 'chola_princess_manikilli', yug: 'kali', parichay: 'कडल पिरकोट्टिय चेनकुट्टुवन। ये महान योद्धा थे। महाकाव्य शिलप्पादिकारम में कन्नगी की कहानी के समय यही राजा थे।', clusterName: 'चेर (केरल) राजवंश' },
    { id: 'ilango_adigal', name: 'इलंगो अडिगल', subtitle: 'शिलप्पादिकारम के रचयिता', parent: 'nedum_cheralathan', mother: 'chola_princess_manikilli', yug: 'kali', parichay: 'सेनगुट्टुवन के छोटे भाई। इन्होंने राजपाट त्याग कर जैन संन्यास लिया और महान तमिल महाकाव्य शिलप्पादिकारम की रचना की।', clusterName: 'चेर (केरल) राजवंश' },
    { id: 'adu_kottu_pattu_cheralathan', name: 'आडु कोट्टु पट्टु चेरलथन', subtitle: 'नेदुम के पुत्र', parent: 'nedum_cheralathan', mother: 'chola_princess_manikilli', yug: 'kali', parichay: 'सेनगुट्टुवन के बाद चेर शासक बने।', clusterName: 'चेर (केरल) राजवंश' },

    // इरुम्पोरई शाखा (Irumporai Branch)
    { id: 'anthuvan_cheral', name: 'अन्थुवन चेरल', subtitle: 'इरुम्पोरई शाखा के संस्थापक', parent: 'early_chera_link', yug: 'kali', clusterName: 'चेर (केरल) राजवंश' },
    { id: 'chelva_kadumko_vali_athan', name: 'चेल्वा कडुमको वलि अथन', subtitle: 'चेर नरेश', parent: 'anthuvan_cheral', yug: 'kali', parichay: 'इन्होंने पंडार बंदरगाह पर नियंत्रण किया और चोल-पांड्य की संयुक्त सेना को हराया।', clusterName: 'चेर (केरल) राजवंश' },
    { id: 'perum_cheral_irumporai', name: 'पेरुम चेरल इरुम्पोरई', subtitle: 'महान चेर नरेश', parent: 'chelva_kadumko_vali_athan', yug: 'kali', parichay: 'थगदुर को जीतने वाले महान राजा।', clusterName: 'चेर (केरल) राजवंश' },
    { id: 'kudakko_illam_cheral_irumporai', name: 'कुडक्को इल्लम चेरल इरुम्पोरई', subtitle: 'चेर नरेश', parent: 'perum_cheral_irumporai', yug: 'kali', parichay: 'इन्होंने पाँच किले नष्ट किए और चोल राजा को हराया।', clusterName: 'चेर (केरल) राजवंश' },
    { id: 'kanaikkal_irumporai', name: 'कनैक्कल इरुम्पोरई', subtitle: 'संगम काल के अंतिम चेर', parent: 'kudakko_illam_cheral_irumporai', yug: 'kali', parichay: 'संगम काल के अंतिम प्रसिद्ध चेर राजा। चोल राजा कोचेनगणन के साथ युद्ध किया।', clusterName: 'चेर (केरल) राजवंश' },

    // --- परवर्ती चेर / महोदयपुरम के पेरुमल (Later Cheras) ---
    { id: 'later_chera_link', name: 'कलभ्र अंतराल (Kalabhra Interregnum)', subtitle: 'अंधकार युग', parent: 'kanaikkal_irumporai', yug: 'kali', parichay: 'संगम चेर और महोदयपुरम के पेरुमलों के बीच का समय जब दक्षिण भारत पर कलभ्रों का शासन था।', clusterName: 'चेर (केरल) राजवंश' },

    { id: 'kulasekhara_alvar', name: 'कुलशेखर आलवार (स्थाणु रवि)', subtitle: 'प्रथम पेरुमल', parent: 'later_chera_link', yug: 'kali', parichay: 'पेरुमल वंश के संस्थापक। ये महान वैष्णव संत (आलवार) भी थे।', clusterName: 'चेर (केरल) राजवंश' },
    { id: 'rama_rajasekhara', name: 'राम राजशेखर (चेरामन पेरुमल)', subtitle: 'नयनार संत राजा', parent: 'kulasekhara_alvar', yug: 'kali', parichay: 'इन्हें चेरामन पेरुमल नयनार के रूप में जाना जाता है। ये महान शैव संत थे।', clusterName: 'चेर (केरल) राजवंश' },
    { id: 'sthanu_ravi_varma', name: 'स्थाणु रवि वर्मा', subtitle: 'पेरुमल नरेश', parent: 'rama_rajasekhara', yug: 'kali', parichay: 'इनके शासनकाल की सीरियन कॉपर प्लेट्स (Quilon) प्रसिद्ध हैं। इन्होंने अपनी बेटी का विवाह चोल राजा परान्तक प्रथम से किया था।', clusterName: 'चेर (केरल) राजवंश' },
    { id: 'goda_ravi', name: 'गोदा रवि', subtitle: 'पेरुमल नरेश', parent: 'sthanu_ravi_varma', yug: 'kali', clusterName: 'चेर (केरल) राजवंश' },
    { id: 'bhaskara_ravi_varman', name: 'भास्कर रवि वर्मन', subtitle: 'मनुकुलादित्य', parent: 'goda_ravi', yug: 'kali', parichay: 'इनके शासनकाल की यहूदी ताम्रपत्र (Jewish copper plates of Cochin) ऐतिहासिक महत्व रखती हैं।', clusterName: 'चेर (केरल) राजवंश' },
    { id: 'rama_kulasekhara', name: 'राम कुलशेखर', subtitle: 'अंतिम महान पेरुमल', parent: 'bhaskara_ravi_varman', yug: 'kali', parichay: 'महोदयपुरम के पेरुमल वंश के अंतिम महान राजा।', clusterName: 'चेर (केरल) राजवंश' },

    // प्रारंभिक चोल (संगम युग)
    { id: 'early_chola_link', name: 'ऐतिहासिक अंतराल (संगम काल)', subtitle: 'अज्ञात पीढ़ियाँ', parent: 'chola_dynasty_proxy', yug: 'kali', parichay: 'पौराणिक चोल संस्थापक से लेकर संगम युग (लगभग 300 BCE - 200 CE) के बीच की अज्ञात पीढ़ियाँ।', clusterName: 'चोल राजवंश' },

    { id: 'sibi_chakravarthi_chola', name: 'शिबि चक्रवर्ती (चोल उपाधि)', subtitle: 'चोलों के दावानल पूर्वज', parent: 'early_chola_link', yug: 'kali', parichay: 'चोल अभिलेखों और संगम साहित्य में चोल राजा स्वयं को महान दानी राजा शिबि (सेम्बियन) का वंशज मानते हैं।', clusterName: 'चोल राजवंश' },
    { id: 'manu_needhi_cholan', name: 'मनु नीधि चोलन', subtitle: 'न्यायप्रिय राजा', parent: 'sibi_chakravarthi_chola', yug: 'kali', parichay: 'एक बछड़े को न्याय दिलाने के लिए इन्होंने अपने ही पुत्र को रथ के नीचे कुचलवा दिया था।', clusterName: 'चोल राजवंश' },
    { id: 'ilamcetcenni', name: 'इलमचेतचेन्नी', subtitle: 'संगम चोल नरेश', parent: 'manu_needhi_cholan', yug: 'kali', clusterName: 'चोल राजवंश' },
    { id: 'karikala_chola_1', name: 'करिकाल चोल', subtitle: 'महान संगम नरेश', parent: 'ilamcetcenni', yug: 'kali', parichay: 'संगम काल के सबसे महान चोल राजा। इन्होंने कावेरी नदी पर कल्लनई बांध (Kallanai Dam) बनवाया था।', clusterName: 'चोल राजवंश' },
    { id: 'nedunkilli', name: 'नेदुनकिल्ली', subtitle: 'संगम चोल नरेश', parent: 'karikala_chola_1', yug: 'kali', clusterName: 'चोल राजवंश' },
    { id: 'nalankilli', name: 'नलानकिल्ली', subtitle: 'संगम चोल नरेश', parent: 'karikala_chola_1', yug: 'kali', clusterName: 'चोल राजवंश' },
    { id: 'killivalavan', name: 'किल्लीवलवन', subtitle: 'संगम चोल नरेश', parent: 'nalankilli', yug: 'kali', clusterName: 'चोल राजवंश' },
    { id: 'kopperuncholan', name: 'कोप्पेरुंचोलन', subtitle: 'संगम चोल नरेश', parent: 'killivalavan', yug: 'kali', clusterName: 'चोल राजवंश' },
    { id: 'kocengannan', name: 'कोचेंगन्नान', subtitle: 'अंतिम महान संगम चोल', parent: 'kopperuncholan', yug: 'kali', parichay: 'प्रारंभिक चोलों के अंतिम प्रतापी राजा। इसके बाद कलाभ्र (Kalabhras) का अंधकार युग शुरू हुआ।', clusterName: 'चोल राजवंश' },
    { id: 'perunarkilli', name: 'पेरुनारकिल्ली', subtitle: 'संगम चोल नरेश', parent: 'kocengannan', yug: 'kali', clusterName: 'चोल राजवंश' },

    // मध्यकालीन चोल (Imperial Cholas)
    { id: 'imperial_chola_link', name: 'ऐतिहासिक अंतराल (अंधकार युग)', subtitle: 'अज्ञात पीढ़ियाँ', parent: 'perunarkilli', yug: 'kali', parichay: 'कलाभ्र और पल्लवों के आधिपत्य के कारण लगभग 600 वर्षों का अंतराल।', clusterName: 'चोल राजवंश' },
    { id: 'vijayalaya_chola', name: 'विजयालय चोल', subtitle: 'साम्राज्यवादी चोल संस्थापक', parent: 'imperial_chola_link', yug: 'kali', parichay: '848 ई. में मुत्तरैयार को हराकर तंजावुर पर कब्ज़ा किया और मध्यकालीन चोल साम्राज्य की नींव रखी।', clusterName: 'चोल राजवंश' },
    { id: 'aditya_1_chola', name: 'आदित्य प्रथम', subtitle: 'विजयालय पुत्र', parent: 'vijayalaya_chola', yug: 'kali', clusterName: 'चोल राजवंश' },
    { id: 'parantaka_1_chola', name: 'परान्तक प्रथम', subtitle: 'आदित्य प्रथम पुत्र', parent: 'aditya_1_chola', yug: 'kali', clusterName: 'चोल राजवंश' },

    // परान्तक 1 के पुत्र
    { id: 'rajaditya_chola', name: 'राजादित्य चोल', subtitle: 'परान्तक प्रथम पुत्र', parent: 'parantaka_1_chola', yug: 'kali', clusterName: 'चोल राजवंश' },
    { id: 'gandaraditya_chola', name: 'गंडरादित्य', subtitle: 'परान्तक प्रथम पुत्र', parent: 'parantaka_1_chola', yug: 'kali', clusterName: 'चोल राजवंश' },
    { id: 'arinjaya_chola', name: 'अरिंजय चोल', subtitle: 'परान्तक प्रथम पुत्र', parent: 'parantaka_1_chola', yug: 'kali', clusterName: 'चोल राजवंश' },

    { id: 'uttama_chola', name: 'उत्तम चोल', subtitle: 'गंडरादित्य पुत्र', parent: 'gandaraditya_chola', yug: 'kali', clusterName: 'चोल राजवंश' },

    { id: 'sundara_chola', name: 'सुंदर चोल (परान्तक द्वितीय)', subtitle: 'अरिंजय पुत्र', parent: 'arinjaya_chola', yug: 'kali', clusterName: 'चोल राजवंश' },
    { id: 'vanavan_mahadevi', name: 'वनवन महादेवी', subtitle: 'सुंदर चोल की पत्नी', parent: '', spouseOf: 'sundara_chola', yug: 'kali' },

    // सुंदर चोल की संतान
    { id: 'aditya_2_karikala', name: 'आदित्य द्वितीय (करिकाल)', subtitle: 'सुंदर चोल पुत्र', parent: 'sundara_chola', mother: 'vanavan_mahadevi', yug: 'kali', parichay: 'राजकुमार रहते हुए ही इनकी हत्या कर दी गई थी।', clusterName: 'चोल राजवंश' },
    { id: 'kundavai_pirattiyar', name: 'कुंदवई पिराट्टियार', subtitle: 'राजकुमारी', parent: 'sundara_chola', mother: 'vanavan_mahadevi', gender: 'female', yug: 'kali', parichay: 'राजराजा चोल की बड़ी बहन। ये एक महान कूटनीतिज्ञ थीं।', clusterName: 'चोल राजवंश' },

    { id: 'rajaraja_1_chola', name: 'राजराजा चोल प्रथम', subtitle: 'राजराजा द ग्रेट', parent: 'sundara_chola', mother: 'vanavan_mahadevi', yug: 'kali', parichay: 'चोल साम्राज्य के सबसे महान सम्राट। इन्होंने तंजावुर का बृहदीश्वर मंदिर (Big Temple) बनवाया।', clusterName: 'चोल राजवंश' },
    { id: 'tribhuvana_mahadevi', name: 'त्रिभुवन महादेवी', subtitle: 'राजराजा प्रथम की पत्नी', parent: '', spouseOf: 'rajaraja_1_chola', yug: 'kali' },

    { id: 'rajendra_1_chola', name: 'राजेंद्र चोल प्रथम', subtitle: 'गंगईकोंडा चोल', parent: 'rajaraja_1_chola', mother: 'tribhuvana_mahadevi', yug: 'kali', parichay: 'इन्होंने चोल साम्राज्य का विस्तार दक्षिण-पूर्व एशिया (Srivijaya) और गंगा नदी तक किया।', clusterName: 'चोल राजवंश' },
    { id: 'mukkokilan', name: 'मुक्कोकिलन', subtitle: 'राजेंद्र प्रथम की पत्नी', parent: '', spouseOf: 'rajendra_1_chola', yug: 'kali' },

    // राजेंद्र प्रथम की संतानें
    { id: 'rajadhiraja_1_chola', name: 'राजाधिराज चोल प्रथम', subtitle: 'राजेंद्र प्रथम पुत्र', parent: 'rajendra_1_chola', mother: 'mukkokilan', yug: 'kali', clusterName: 'चोल राजवंश' },
    { id: 'rajendra_2_chola', name: 'राजेंद्र चोल द्वितीय', subtitle: 'राजेंद्र प्रथम पुत्र', parent: 'rajendra_1_chola', mother: 'mukkokilan', yug: 'kali', clusterName: 'चोल राजवंश' },
    { id: 'virarajendra_chola', name: 'वीरराजेंद्र चोल', subtitle: 'राजेंद्र प्रथम पुत्र', parent: 'rajendra_1_chola', mother: 'mukkokilan', yug: 'kali', clusterName: 'चोल राजवंश' },
    { id: 'ammangadevi', name: 'अम्मंगादेवी', subtitle: 'राजेंद्र प्रथम की पुत्री', parent: 'rajendra_1_chola', mother: 'mukkokilan', gender: 'female', yug: 'kali', parichay: 'इनका विवाह वेंगी के पूर्वी चालुक्य राजा राजराज नरेंद्र से हुआ था।', clusterName: 'चोल राजवंश' },

    { id: 'athirajendra_chola', name: 'अधिराजेंद्र चोल', subtitle: 'वीरराजेंद्र पुत्र', parent: 'virarajendra_chola', yug: 'kali', parichay: 'इनकी मृत्यु के साथ चोलों की पितृसत्तात्मक (Patrilineal) वंशावली समाप्त हो गई।', clusterName: 'चोल राजवंश' },

    // उत्तरकालीन चोल (Later Cholas / Chalukya-Cholas) - अम्मंगादेवी के पुत्र
    { id: 'kulothunga_1_chola', name: 'कुलोत्तुंग चोल प्रथम', subtitle: 'चालुक्य-चोल संस्थापक', parent: 'ammangadevi', yug: 'kali', parichay: 'राजेंद्र चोल प्रथम के नाती। इन्होंने वेंगी चालुक्य और चोल साम्राज्य का विलय किया।', clusterName: 'चोल राजवंश' },
    { id: 'vikrama_chola', name: 'विक्रम चोल', subtitle: 'कुलोत्तुंग प्रथम पुत्र', parent: 'kulothunga_1_chola', yug: 'kali', clusterName: 'चोल राजवंश' },
    { id: 'kulothunga_2_chola', name: 'कुलोत्तुंग चोल द्वितीय', subtitle: 'विक्रम चोल पुत्र', parent: 'vikrama_chola', yug: 'kali', clusterName: 'चोल राजवंश' },
    { id: 'rajaraja_2_chola', name: 'राजराजा चोल द्वितीय', subtitle: 'कुलोत्तुंग द्वितीय पुत्र', parent: 'kulothunga_2_chola', yug: 'kali', parichay: 'इन्होंने दारासुरम का ऐरावतेश्वर मंदिर बनवाया था।', clusterName: 'चोल राजवंश' },
    { id: 'rajadhiraja_2_chola', name: 'राजाधिराज चोल द्वितीय', subtitle: 'राजराजा द्वितीय के भतीजे', parent: 'rajaraja_2_chola', yug: 'kali', clusterName: 'चोल राजवंश' },
    { id: 'kulothunga_3_chola', name: 'कुलोत्तुंग चोल तृतीय', subtitle: 'राजाधिराज द्वितीय पुत्र', parent: 'rajadhiraja_2_chola', yug: 'kali', parichay: 'उत्तरकालीन चोलों के सबसे शक्तिशाली सम्राट।', clusterName: 'चोल राजवंश' },
    { id: 'rajaraja_3_chola', name: 'राजराजा चोल तृतीय', subtitle: 'कुलोत्तुंग तृतीय पुत्र', parent: 'kulothunga_3_chola', yug: 'kali', clusterName: 'चोल राजवंश' },
    { id: 'rajendra_3_chola', name: 'राजेंद्र चोल तृतीय', subtitle: 'अंतिम चोल सम्राट', parent: 'rajaraja_3_chola', yug: 'kali', parichay: 'चोल राजवंश के अंतिम ज्ञात शासक। 1279 ई. में पांड्यों द्वारा चोल साम्राज्य का अंत कर दिया गया।', clusterName: 'चोल राजवंश' },

    // --- संदर्भ के लिए अन्य राजवंश/पात्र (यदुवंश से जुड़े) ---
    { id: 'bhishmaka_chandra', name: 'भीष्मक', subtitle: 'विदर्भ नरेश', parent: 'other_dynasties_proxy', clusterName: 'अन्य राजवंश (इन-लॉ)', yug: 'dwapar' },
    { id: 'rukmi_vidarbha_chandra', name: 'रुक्मी', subtitle: 'रुक्मिणी का भाई', parent: 'bhishmaka_chandra', yug: 'dwapar' },
    { id: 'damaghosha_chandra', name: 'दमघोष', subtitle: 'चेदि नरेश', parent: 'other_dynasties_proxy', clusterName: 'अन्य राजवंश (इन-लॉ)', yug: 'dwapar' },
    { id: 'shishupala_chandra', name: 'शिशुपाल', subtitle: 'चेदि नरेश', parent: 'damaghosha_chandra', mother: 'shrutasrava_chandra', yug: 'dwapar' },

];
