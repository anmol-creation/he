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

    { id: 'sannati_kashi', name: 'सन्नति', subtitle: 'अलर्क पुत्र', parent: 'alarka', yug: 'treta' },
    { id: 'sunitha_kashi', name: 'सुनीथ', subtitle: 'सन्नति पुत्र', parent: 'sannati_kashi', yug: 'treta' },
    { id: 'suketu_kashi', name: 'सुकेतु', subtitle: 'सुनीथ पुत्र', parent: 'sunitha_kashi', yug: 'treta' },
    { id: 'satyaketu_kashi', name: 'सत्यकेतु', subtitle: 'सुकेतु पुत्र', parent: 'suketu_kashi', yug: 'treta' },
    { id: 'vibhu_kashi', name: 'विभु', subtitle: 'सत्यकेतु पुत्र', parent: 'satyaketu_kashi', yug: 'treta' },
    { id: 'suvibhu_kashi', name: 'सुविभु', subtitle: 'विभु पुत्र', parent: 'vibhu_kashi', yug: 'treta' },
    { id: 'sukumara_kashi', name: 'सुकुमार', subtitle: 'सुविभु पुत्र', parent: 'suvibhu_kashi', yug: 'treta' },
    { id: 'dhrishtaketu_kashi', name: 'धृष्टकेतु', subtitle: 'सुकुमार पुत्र', parent: 'sukumara_kashi', yug: 'treta' },
    { id: 'vainahotra', name: 'वैनहोत्र', subtitle: 'धृष्टकेतु पुत्र', parent: 'dhrishtaketu_kashi', yug: 'treta' },
    { id: 'bharga_kashi', name: 'भर्ग', subtitle: 'वैनहोत्र पुत्र', parent: 'vainahotra', yug: 'treta' },
    { id: 'vatsabhumi', name: 'वत्सभूमि', subtitle: 'भर्ग पुत्र', parent: 'bharga_kashi', yug: 'treta' },


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
    { id: 'ayati_nahusha', name: 'अयाति', subtitle: 'नहुष के पुत्र', parent: 'nahusha', mother: 'ashokasundari', yug: 'satya' },
    { id: 'viyati', name: 'वियति', subtitle: 'नहुष के पुत्र', parent: 'nahusha', mother: 'ashokasundari', yug: 'satya' },
    { id: 'kriti', name: 'कृति', subtitle: 'नहुष के पुत्र', parent: 'nahusha', mother: 'ashokasundari', yug: 'satya' },

    // --- ययाति की पत्नियां ---
    { id: 'devayani_yayati', name: 'देवयानी', subtitle: 'ययाति की पत्नी (शुक्राचार्य की पुत्री)', parent: 'shukracharya', spouseOf: 'yayati', yug: 'satya' },
    { id: 'sharmishtha', name: 'शर्मिष्ठा', subtitle: 'ययाति की पत्नी (वृषपर्वा की पुत्री)', parent: '', spouseOf: 'yayati', yug: 'satya' },

    // --- ययाति के पुत्र ---
    { id: 'yadu', name: 'यदु', subtitle: 'यदुवंश के संस्थापक', parent: 'yayati', mother: 'devayani_yayati', yug: 'treta' },
    { id: 'turvasu', name: 'तुर्वसु', subtitle: 'ययाति के पुत्र', parent: 'yayati', mother: 'devayani_yayati', yug: 'treta' },
    { id: 'druhyu', name: 'द्रुह्यु', subtitle: 'ययाति के पुत्र', parent: 'yayati', mother: 'sharmishtha', yug: 'treta' },
    { id: 'anu_yayati', name: 'अनु', subtitle: 'ययाति के पुत्र', parent: 'yayati', mother: 'sharmishtha', yug: 'treta' },
    { id: 'puru', name: 'पुरु', subtitle: 'पौरव/कुरुवंश के संस्थापक', parent: 'yayati', mother: 'sharmishtha', yug: 'treta' },

    // --- तुर्वसु वंश ---
    { id: 'vahni_turvasu', name: 'वह्नि', subtitle: 'तुर्वसु पुत्र', parent: 'turvasu', yug: 'treta' },
    { id: 'garbha_turvasu', name: 'गर्भ', subtitle: 'वह्नि पुत्र', parent: 'vahni_turvasu', yug: 'treta' },
    { id: 'gobhanu_turvasu', name: 'गोभानु', subtitle: 'गर्भ पुत्र', parent: 'garbha_turvasu', yug: 'treta' },
    { id: 'trishanu_turvasu', name: 'त्रिशानु', subtitle: 'गोभानु पुत्र', parent: 'gobhanu_turvasu', yug: 'treta' },
    { id: 'karandhama_turvasu', name: 'करन्धम', subtitle: 'त्रिशानु पुत्र', parent: 'trishanu_turvasu', yug: 'treta' },
    { id: 'marutta_turvasu', name: 'मरुत्त', subtitle: 'करन्धम पुत्र', parent: 'karandhama_turvasu', yug: 'treta', parichay: 'तुर्वसु वंश के राजा मरुत्त, जिनके कोई पुत्र नहीं था। इन्होंने पौरव वंशीय दुष्यंत को गोद लिया था।' },
    { id: 'dushyanta_turvasu', name: 'दुष्यंत (दत्तक)', subtitle: 'मरुत्त के दत्तक पुत्र', parent: 'marutta_turvasu', yug: 'treta', parichay: 'पौरव वंश के दुष्यंत जिन्हें मरुत्त ने गोद लिया। परन्तु ये पुनः पुरु वंश में लौट गए।' },
    { id: 'varutha_turvasu', name: 'वरूथ', subtitle: 'दुष्यंत पुत्र', parent: 'dushyanta_turvasu', yug: 'treta' },
    { id: 'andira_turvasu', name: 'आण्डीर', subtitle: 'वरूथ पुत्र', parent: 'varutha_turvasu', yug: 'treta' },
    { id: 'pandya_turvasu', name: 'पाण्ड्य', subtitle: 'पाण्ड्य देश संस्थापक', parent: 'andira_turvasu', yug: 'treta', parichay: 'इन्होंने दक्षिण भारत में पाण्ड्य राजवंश की स्थापना की।' },
    { id: 'kerala_turvasu', name: 'केरल', subtitle: 'केरल देश संस्थापक', parent: 'andira_turvasu', yug: 'treta', parichay: 'इन्होंने दक्षिण में केरल (चेर) राज्य की स्थापना की।' },
    { id: 'chola_turvasu', name: 'चोल', subtitle: 'चोल देश संस्थापक', parent: 'andira_turvasu', yug: 'treta', parichay: 'इन्होंने दक्षिण में चोल राजवंश की स्थापना की।' },
    { id: 'kulya_turvasu', name: 'कुल्य', subtitle: 'आण्डीर पुत्र', parent: 'andira_turvasu', yug: 'treta' },

    // --- द्रुह्यु वंश ---
    { id: 'babhru_druhyu', name: 'बभ्रु', subtitle: 'द्रुह्यु पुत्र', parent: 'druhyu', yug: 'treta' },
    { id: 'setu_druhyu', name: 'सेतु', subtitle: 'बभ्रु पुत्र', parent: 'babhru_druhyu', yug: 'treta' },
    { id: 'arabdha_druhyu', name: 'आरब्ध (आरद्वत)', subtitle: 'सेतु पुत्र', parent: 'setu_druhyu', yug: 'treta' },
    { id: 'gandhara_druhyu', name: 'गान्धार', subtitle: 'गान्धार देश संस्थापक', parent: 'arabdha_druhyu', yug: 'treta', parichay: 'इन्हीं के नाम पर गान्धार (वर्तमान कंधार/अफगानिस्तान क्षेत्र) देश का नाम पड़ा।' },
    { id: 'dharma_druhyu', name: 'धर्म', subtitle: 'गान्धार पुत्र', parent: 'gandhara_druhyu', yug: 'treta' },
    { id: 'dhrita_druhyu', name: 'धृत', subtitle: 'धर्म पुत्र', parent: 'dharma_druhyu', yug: 'treta' },
    { id: 'duryaman_druhyu', name: 'दुर्मन', subtitle: 'धृत पुत्र', parent: 'dhrita_druhyu', yug: 'treta' },
    { id: 'prachetas_druhyu', name: 'प्रचेतस', subtitle: 'दुर्मन पुत्र', parent: 'duryaman_druhyu', yug: 'treta' },
    { id: 'sons_of_prachetas', name: 'प्रचेतस के 100 पुत्र', subtitle: 'म्लेच्छों के राजा', parent: 'prachetas_druhyu', yug: 'treta', parichay: 'प्रचेतस के सौ पुत्र हुए, जो उत्तर दिशा में म्लेच्छों के राजा बने।' },

    // --- अनु वंश ---
    { id: 'sabhanara_anu', name: 'सभानर', subtitle: 'अनु पुत्र', parent: 'anu_yayati', yug: 'treta' },
    { id: 'chakshusha_anu', name: 'चाक्षुष', subtitle: 'अनु पुत्र', parent: 'anu_yayati', yug: 'treta' },
    { id: 'paroksha_anu', name: 'परोक्ष', subtitle: 'अनु पुत्र', parent: 'anu_yayati', yug: 'treta' },
    { id: 'kalanara_anu', name: 'कालानर', subtitle: 'सभानर पुत्र', parent: 'sabhanara_anu', yug: 'treta' },
    { id: 'srijaya_anu', name: 'सृंजय', subtitle: 'कालानर पुत्र', parent: 'kalanara_anu', yug: 'treta' },
    { id: 'janamejaya_anu', name: 'जनमेजय', subtitle: 'सृंजय पुत्र', parent: 'srijaya_anu', yug: 'treta' },
    { id: 'mahashala_anu', name: 'महाशाल', subtitle: 'जनमेजय पुत्र', parent: 'janamejaya_anu', yug: 'treta' },
    { id: 'mahamana_anu', name: 'महामना', subtitle: 'महाशाल पुत्र', parent: 'mahashala_anu', yug: 'treta' },

    // अनु वंश -> उशीनर शाखा
    { id: 'ushinara_anu', name: 'उशीनर', subtitle: 'महामना पुत्र', parent: 'mahamana_anu', yug: 'treta' },
    { id: 'sibi_anu', name: 'शिबि', subtitle: 'महान दानी राजा', parent: 'ushinara_anu', yug: 'treta', parichay: 'राजा शिबि अपने त्याग और शरणागत की रक्षा के लिए प्रसिद्ध हैं। उन्होंने एक कबूतर की रक्षा के लिए बाज़ को अपना माँस काट कर दे दिया था।' },
    { id: 'vrishadarbha_anu', name: 'वृषदर्भ', subtitle: 'शिबि पुत्र', parent: 'sibi_anu', yug: 'treta' },
    { id: 'suvira_anu', name: 'सुवीर', subtitle: 'शिबि पुत्र (सौवीर)', parent: 'sibi_anu', yug: 'treta' },
    { id: 'madra_anu', name: 'मद्र', subtitle: 'मद्र देश संस्थापक', parent: 'sibi_anu', yug: 'treta' },
    { id: 'kekaya_anu', name: 'केकय', subtitle: 'केकय देश संस्थापक', parent: 'sibi_anu', yug: 'treta' },

    // अनु वंश -> तितिक्षु (बलि) शाखा
    { id: 'titikshu_anu', name: 'तितिक्षु', subtitle: 'महामना पुत्र', parent: 'mahamana_anu', yug: 'treta' },
    { id: 'rushadratha_anu', name: 'रुशद्रथ', subtitle: 'तितिक्षु पुत्र', parent: 'titikshu_anu', yug: 'treta' },
    { id: 'hema_anu', name: 'हेम', subtitle: 'रुशद्रथ पुत्र', parent: 'rushadratha_anu', yug: 'treta' },
    { id: 'sutapas_anu', name: 'सुतपस', subtitle: 'हेम पुत्र', parent: 'hema_anu', yug: 'treta' },
    { id: 'bali_anu', name: 'बलि', subtitle: 'सुतपस पुत्र', parent: 'sutapas_anu', yug: 'treta', parichay: 'अनु वंश के राजा बलि। महर्षि दीर्घतमा के नियोग से इनकी पत्नी सुदेष्णा के गर्भ से ५ महान पुत्र उत्पन्न हुए।' },
    { id: 'sudeshna_bali_wife', name: 'सुदेष्णा', subtitle: 'राजा बलि की पत्नी', parent: '', spouseOf: 'bali_anu', yug: 'treta' },

    // बलि के ५ क्षेत्रज पुत्र (अंग, वंग, कलिंग, पुण्ड्र, सुह्म) - जैविक पिता दीर्घतमा (brahma-base में), पालक/राजकीय पिता बलि
    { id: 'anga_anu', name: 'अंग', subtitle: 'अंग देश संस्थापक', parent: 'bali_anu', mother: 'sudeshna_bali_wife', yug: 'treta', parichay: 'इन्होंने अंग देश (वर्तमान भागलपुर, बिहार) की स्थापना की। कर्ण बाद में इसी अंग देश के राजा बने।' },
    { id: 'vanga_anu', name: 'वंग', subtitle: 'वंग देश संस्थापक', parent: 'bali_anu', mother: 'sudeshna_bali_wife', yug: 'treta', parichay: 'इन्होंने वंग देश (वर्तमान बंगाल) की स्थापना की।' },
    { id: 'kalinga_anu', name: 'कलिंग', subtitle: 'कलिंग देश संस्थापक', parent: 'bali_anu', mother: 'sudeshna_bali_wife', yug: 'treta', parichay: 'इन्होंने कलिंग देश (वर्तमान ओडिशा) की स्थापना की।' },
    { id: 'pundra_anu', name: 'पुण्ड्र', subtitle: 'पुण्ड्र देश संस्थापक', parent: 'bali_anu', mother: 'sudeshna_bali_wife', yug: 'treta' },
    { id: 'suhma_anu', name: 'सुह्म', subtitle: 'सुह्म देश संस्थापक', parent: 'bali_anu', mother: 'sudeshna_bali_wife', yug: 'treta' },

    // --- अंग वंश (अंग से रोमपाद और कर्ण तक) ---
    { id: 'dadhivahana_anu', name: 'दधिवाहन', subtitle: 'अंग नरेश', parent: 'anga_anu', yug: 'treta' },
    { id: 'khalapana_anu', name: 'खलपान', subtitle: 'अंग नरेश', parent: 'dadhivahana_anu', yug: 'treta' },
    { id: 'diviratha_anu', name: 'दिविरथ', subtitle: 'अंग नरेश', parent: 'khalapana_anu', yug: 'treta' },
    { id: 'dharmaratha_anu', name: 'धर्मरथ', subtitle: 'अंग नरेश', parent: 'diviratha_anu', yug: 'treta' },
    { id: 'chitraratha_anga_anu', name: 'चित्ररथ', subtitle: 'अंग नरेश', parent: 'dharmaratha_anu', yug: 'treta' },
    { id: 'dasharatha_anga_anu', name: 'दशरथ', subtitle: 'अंग नरेश', parent: 'chitraratha_anga_anu', yug: 'treta' },
    { id: 'chaturanga_anu', name: 'चतुरंग', subtitle: 'अंग नरेश', parent: 'dasharatha_anga_anu', yug: 'treta' },
    { id: 'prithulaksha_anu', name: 'पृथुलाक्ष', subtitle: 'अंग नरेश', parent: 'chaturanga_anu', yug: 'treta' },
    { id: 'bhadraratha_anu', name: 'भद्ररथ', subtitle: 'अंग नरेश', parent: 'prithulaksha_anu', yug: 'treta' },
    { id: 'brihadratha_anga_anu', name: 'बृहद्रथ', subtitle: 'अंग नरेश', parent: 'bhadraratha_anu', yug: 'treta' },
    { id: 'brihatkarman_anu', name: 'बृहत्कर्मन', subtitle: 'अंग नरेश', parent: 'brihadratha_anga_anu', yug: 'treta' },
    { id: 'brihadbhanu_anu', name: 'बृहद्भानु', subtitle: 'अंग नरेश', parent: 'brihatkarman_anu', yug: 'treta' },
    { id: 'brihanmanas_anu', name: 'बृहन्मनस', subtitle: 'अंग नरेश', parent: 'brihadbhanu_anu', yug: 'treta' },
    { id: 'jayadratha_anga_anu', name: 'जयद्रथ', subtitle: 'अंग नरेश', parent: 'brihanmanas_anu', yug: 'treta' },
    { id: 'dridharatha_anu', name: 'दृढरथ', subtitle: 'अंग नरेश', parent: 'jayadratha_anga_anu', yug: 'treta' },
    { id: 'vishvajit_anga_anu', name: 'विश्वजित', subtitle: 'अंग नरेश', parent: 'dridharatha_anu', yug: 'treta' },
    { id: 'romapada_anu', name: 'रोमपाद (चित्ररथ)', subtitle: 'अंग नरेश', parent: 'vishvajit_anga_anu', yug: 'treta', parichay: 'इन्होंने अयोध्या के राजा दशरथ की पुत्री शांता को गोद लिया था।' },
    { id: 'chaturanga_ii_anu', name: 'चतुरंग द्वितीय', subtitle: 'रोमपाद पुत्र', parent: 'romapada_anu', yug: 'treta' },
    { id: 'prithulaksha_ii_anu', name: 'पृथुलाक्ष द्वितीय', subtitle: 'चतुरंग द्वितीय पुत्र', parent: 'chaturanga_ii_anu', yug: 'treta' },
    { id: 'champa_anu', name: 'चम्प', subtitle: 'चम्पापुरी संस्थापक', parent: 'prithulaksha_ii_anu', yug: 'treta', parichay: 'इन्होंने अंग देश की राजधानी चम्पापुरी की स्थापना की।' },
    { id: 'haryanga_anu', name: 'हर्यंग', subtitle: 'अंग नरेश', parent: 'champa_anu', yug: 'dwapar' },
    { id: 'bhadraratha_ii_anu', name: 'भद्ररथ द्वितीय', subtitle: 'अंग नरेश', parent: 'haryanga_anu', yug: 'dwapar' },
    { id: 'brihatkarman_ii_anu', name: 'बृहत्कर्मन द्वितीय', subtitle: 'अंग नरेश', parent: 'bhadraratha_ii_anu', yug: 'dwapar' },
    { id: 'brihadbhanu_ii_anu', name: 'बृहद्भानु द्वितीय', subtitle: 'अंग नरेश', parent: 'brihatkarman_ii_anu', yug: 'dwapar' },
    { id: 'brihanmanas_ii_anu', name: 'बृहन्मनस द्वितीय', subtitle: 'अंग नरेश', parent: 'brihadbhanu_ii_anu', yug: 'dwapar' },
    { id: 'jayadratha_ii_anu', name: 'जयद्रथ द्वितीय', subtitle: 'अंग नरेश', parent: 'brihanmanas_ii_anu', yug: 'dwapar' },
    { id: 'vijaya_anga_anu', name: 'विजय', subtitle: 'अंग नरेश', parent: 'jayadratha_ii_anu', yug: 'dwapar' },
    { id: 'dhriti_anga_anu', name: 'धृति', subtitle: 'अंग नरेश', parent: 'vijaya_anga_anu', yug: 'dwapar' },
    { id: 'dhritavrata_anu', name: 'धृतव्रत', subtitle: 'अंग नरेश', parent: 'dhriti_anga_anu', yug: 'dwapar' },
    { id: 'satyakarman_anu', name: 'सत्यकर्मन', subtitle: 'अंग नरेश', parent: 'dhritavrata_anu', yug: 'dwapar' },
    { id: 'adhiratha_anu', name: 'अधिरथ', subtitle: 'सत्यकर्मन पुत्र', parent: 'satyakarman_anu', yug: 'dwapar', parichay: 'सूत अधिरथ, जिन्होंने कर्ण का पालन-पोषण किया।' },
    { id: 'radha_karna', name: 'राधा', subtitle: 'अधिरथ की पत्नी', parent: '', spouseOf: 'adhiratha_anu', yug: 'dwapar', parichay: 'कर्ण की पालक माता, जिनके नाम पर कर्ण को "राधेय" कहा गया।' },
    { id: 'shon_anu', name: 'शोण', subtitle: 'अधिरथ-राधा पुत्र', parent: 'adhiratha_anu', mother: 'radha_karna', yug: 'dwapar', parichay: 'कर्ण के छोटे भाई (पालक)।' },

    // --- कर्ण और उसका परिवार ---
    { id: 'karna', name: 'कर्ण', subtitle: 'अंगराज / सूर्य पुत्र', parent: 'adhiratha_anu', mother: 'radha_karna', yug: 'dwapar', parichay: 'जैविक माता-पिता कुंती और सूर्यदेव। पालक माता-पिता राधा और अधिरथ। दुर्योधन ने इन्हें अंग देश का राजा बनाया।' },
    { id: 'vrushali', name: 'वृषाली', subtitle: 'कर्ण की प्रथम पत्नी', parent: '', spouseOf: 'karna', yug: 'dwapar', clusterName: 'कर्ण की पत्नियाँ' },
    { id: 'supriya', name: 'सुप्रिया', subtitle: 'कर्ण की द्वितीय पत्नी', parent: '', spouseOf: 'karna', yug: 'dwapar', clusterName: 'कर्ण की पत्नियाँ' },
    { id: 'vrishasena_karna', name: 'वृषसेन', subtitle: 'कर्ण पुत्र', parent: 'karna', mother: 'vrushali', yug: 'dwapar' },
    { id: 'chitrasena_karna', name: 'चित्रसेन', subtitle: 'कर्ण पुत्र', parent: 'karna', mother: 'vrushali', yug: 'dwapar' },
    { id: 'satyasena_karna', name: 'सत्यसेन', subtitle: 'कर्ण पुत्र', parent: 'karna', mother: 'vrushali', yug: 'dwapar' },
    { id: 'sushena_karna', name: 'सुषेण', subtitle: 'कर्ण पुत्र', parent: 'karna', mother: 'vrushali', yug: 'dwapar' },
    { id: 'shatrunjaya_karna', name: 'शत्रुंजय', subtitle: 'कर्ण पुत्र', parent: 'karna', mother: 'vrushali', yug: 'dwapar' },
    { id: 'dvipata_karna', name: 'द्विपात', subtitle: 'कर्ण पुत्र', parent: 'karna', mother: 'vrushali', yug: 'dwapar' },
    { id: 'prasena_karna', name: 'प्रसेन', subtitle: 'कर्ण पुत्र', parent: 'karna', mother: 'supriya', yug: 'dwapar' },
    { id: 'banasena_karna', name: 'बाणसेन', subtitle: 'कर्ण पुत्र', parent: 'karna', mother: 'supriya', yug: 'dwapar' },

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

    { id: 'menaka_apsara', name: 'मेनका', subtitle: 'अप्सरा', parent: '', spouseOf: 'vishwamitra', yug: 'treta' },
    { id: 'shakuntala_vishwamitra', name: 'शकुंतला', subtitle: 'विश्वामित्र पुत्री', parent: 'vishwamitra', mother: 'menaka_apsara', yug: 'treta', parichay: 'इनका विवाह पौरव वंशी राजा दुष्यंत से हुआ और इन्होने भरत को जन्म दिया।' },
    { id: 'shunahshepa', name: 'शुनःशेप (देवरथ)', subtitle: 'दत्तक पुत्र', parent: 'vishwamitra', yug: 'treta', parichay: 'महर्षि ऋचीक के पुत्र जिन्हें हरिश्चंद्र के यज्ञ में बलि के लिए ख़रीदा गया था, पर विश्वामित्र ने इन्हें बचाया और अपना ज्येष्ठ पुत्र (देवरथ) बना लिया।' },
    { id: 'madhucchandas', name: 'मधुच्छंदस', subtitle: 'विश्वामित्र पुत्र', parent: 'vishwamitra', yug: 'treta' },
    { id: 'ashtaka', name: 'अष्टक', subtitle: 'विश्वामित्र पुत्र', parent: 'vishwamitra', yug: 'treta' },
    { id: 'galava', name: 'गालव', subtitle: 'विश्वामित्र पुत्र / शिष्य', parent: 'vishwamitra', yug: 'treta' },



    // --- यदुवंश (यदु के पुत्र) ---
    { id: 'sahasrajit_yadu', name: 'सहस्रजित', subtitle: 'यदु पुत्र (हैहय वंश के मूल)', parent: 'yadu', yug: 'treta' },
    { id: 'kroshtu_yadu', name: 'क्रोष्टु', subtitle: 'यदु पुत्र (वृष्णि/अंधक वंश के मूल)', parent: 'yadu', yug: 'treta' },
    { id: 'nala_yadu', name: 'नल', subtitle: 'यदु पुत्र', parent: 'yadu', yug: 'treta' },
    { id: 'ripu_yadu', name: 'रिपु', subtitle: 'यदु पुत्र', parent: 'yadu', yug: 'treta' },

    // --- हैहय वंश (सहस्रजित की शाखा) ---
    { id: 'shatajit_haihaya', name: 'शतजित', subtitle: 'सहस्रजित पुत्र', parent: 'sahasrajit_yadu', yug: 'treta' },
    { id: 'haihaya', name: 'हैहय', subtitle: 'हैहय वंश के संस्थापक', parent: 'shatajit_haihaya', yug: 'treta' },
    { id: 'dharma_haihaya', name: 'धर्म', subtitle: 'हैहय पुत्र', parent: 'haihaya', yug: 'treta' },
    { id: 'netra_haihaya', name: 'नेत्र', subtitle: 'धर्म पुत्र', parent: 'dharma_haihaya', yug: 'treta' },
    { id: 'kunti_haihaya', name: 'कुंती', subtitle: 'नेत्र पुत्र', parent: 'netra_haihaya', yug: 'treta' },
    { id: 'sohanji_haihaya', name: 'सोहंजि', subtitle: 'कुंती पुत्र', parent: 'kunti_haihaya', yug: 'treta' },
    { id: 'mahishman_haihaya', name: 'महिष्मान', subtitle: 'महिष्मती के संस्थापक', parent: 'sohanji_haihaya', yug: 'treta', parichay: 'इन्होंने नर्मदा तट पर महिष्मती नगरी बसाई थी।' },
    { id: 'bhadrasen_haihaya', name: 'भद्रसेन', subtitle: 'महिष्मान पुत्र', parent: 'mahishman_haihaya', yug: 'treta' },
    { id: 'durdama_haihaya', name: 'दुर्दाम', subtitle: 'भद्रसेन पुत्र', parent: 'bhadrasen_haihaya', yug: 'treta' },
    { id: 'dhanaka_haihaya', name: 'धनक', subtitle: 'दुर्दाम पुत्र', parent: 'durdama_haihaya', yug: 'treta' },
    { id: 'kritavirya_haihaya', name: 'कृतवीर्य', subtitle: 'धनक पुत्र', parent: 'dhanaka_haihaya', yug: 'treta' },
    { id: 'kritagni_haihaya', name: 'कृताग्नि', subtitle: 'धनक पुत्र', parent: 'dhanaka_haihaya', yug: 'treta' },
    { id: 'kritavarma_haihaya', name: 'कृतवर्मा', subtitle: 'धनक पुत्र', parent: 'dhanaka_haihaya', yug: 'treta' },
    { id: 'kritauja_haihaya', name: 'कृतौजा', subtitle: 'धनक पुत्र', parent: 'dhanaka_haihaya', yug: 'treta' },
    { id: 'kartavirya_arjuna', name: 'कार्तवीर्य अर्जुन', subtitle: 'सहस्रबाहु', parent: 'kritavirya_haihaya', yug: 'treta', parichay: 'दत्तात्रेय के वरदान से इन्हें 1000 भुजाएं प्राप्त थीं। इनका वध भगवान परशुराम ने किया था।' },
    { id: 'jayadhvaja_haihaya', name: 'जयध्वज', subtitle: 'कार्तवीर्य पुत्र', parent: 'kartavirya_arjuna', yug: 'treta' },
    { id: 'shurasena_haihaya', name: 'शूरसेन', subtitle: 'कार्तवीर्य पुत्र', parent: 'kartavirya_arjuna', yug: 'treta' },
    { id: 'vrishabha_haihaya', name: 'वृषभ', subtitle: 'कार्तवीर्य पुत्र', parent: 'kartavirya_arjuna', yug: 'treta' },
    { id: 'madhu_haihaya', name: 'मधु', subtitle: 'कार्तवीर्य पुत्र', parent: 'kartavirya_arjuna', yug: 'treta' },
    { id: 'urjita_haihaya', name: 'ऊर्जित', subtitle: 'कार्तवीर्य पुत्र', parent: 'kartavirya_arjuna', yug: 'treta' },
    { id: 'talajangha_haihaya', name: 'तालजंघ', subtitle: 'जयध्वज पुत्र', parent: 'jayadhvaja_haihaya', yug: 'treta' },
    { id: 'vitihotra_haihaya', name: 'वीतिहोत्र', subtitle: 'तालजंघ पुत्र', parent: 'talajangha_haihaya', yug: 'treta' },

    // --- वृष्णि / अंधक वंश (क्रोष्टु की शाखा) ---
    { id: 'vrijinivan_yadu', name: 'वृजिनिवान', subtitle: 'क्रोष्टु पुत्र', parent: 'kroshtu_yadu', yug: 'treta' },
    { id: 'svahi_yadu', name: 'स्वाहि', subtitle: 'वृजिनिवान पुत्र', parent: 'vrijinivan_yadu', yug: 'treta' },
    { id: 'rushadgu_yadu', name: 'रुशद्गु', subtitle: 'स्वाहि पुत्र', parent: 'svahi_yadu', yug: 'treta' },
    { id: 'chitraratha_yadu', name: 'चित्ररथ', subtitle: 'रुशद्गु पुत्र', parent: 'rushadgu_yadu', yug: 'treta' },
    { id: 'shashabindu_yadu', name: 'शशबिंदु', subtitle: 'महान चक्रवर्ती सम्राट', parent: 'chitraratha_yadu', yug: 'treta' },
    { id: 'prithushravas_yadu', name: 'पृथुश्रवस', subtitle: 'शशबिंदु पुत्र', parent: 'shashabindu_yadu', yug: 'treta' },
    { id: 'antara_yadu', name: 'अन्तर', subtitle: 'पृथुश्रवस पुत्र', parent: 'prithushravas_yadu', yug: 'treta' },
    { id: 'suyajna_yadu', name: 'सुयज्ञ', subtitle: 'अन्तर पुत्र', parent: 'antara_yadu', yug: 'treta' },
    { id: 'ushanas_yadu', name: 'उशनस', subtitle: 'सुयज्ञ पुत्र', parent: 'suyajna_yadu', yug: 'treta' },
    { id: 'shineyu_yadu', name: 'शिनेयु', subtitle: 'उशनस पुत्र', parent: 'ushanas_yadu', yug: 'treta' },
    { id: 'marutta_yadu', name: 'मरुत्त', subtitle: 'शिनेयु पुत्र', parent: 'shineyu_yadu', yug: 'treta' },
    { id: 'kambalabarhis_yadu', name: 'कम्बलवर्हिष', subtitle: 'मरुत्त पुत्र', parent: 'marutta_yadu', yug: 'treta' },
    { id: 'rukmakavacha_yadu', name: 'रुक्मकवच', subtitle: 'कम्बलवर्हिष पुत्र', parent: 'kambalabarhis_yadu', yug: 'treta' },
    { id: 'parajit_yadu', name: 'पराजित', subtitle: 'रुक्मकवच पुत्र', parent: 'rukmakavacha_yadu', yug: 'treta' },
    { id: 'jyamagha_yadu', name: 'ज्याघम', subtitle: 'पराजित पुत्र', parent: 'parajit_yadu', yug: 'treta' },
    { id: 'shaibya_jyamagha', name: 'शैव्या', subtitle: 'ज्याघम की पत्नी', parent: '', spouseOf: 'jyamagha_yadu', yug: 'treta' },

    // --- विदर्भ वंश ---
    { id: 'vidarbha_yadu', name: 'विदर्भ', subtitle: 'विदर्भ देश के संस्थापक', parent: 'jyamagha_yadu', mother: 'shaibya_jyamagha', yug: 'treta' },
    { id: 'kratha_yadu', name: 'क्रथ', subtitle: 'विदर्भ पुत्र', parent: 'vidarbha_yadu', yug: 'treta' },
    { id: 'kaushika_yadu', name: 'कौशिक', subtitle: 'विदर्भ पुत्र', parent: 'vidarbha_yadu', yug: 'treta' },
    { id: 'romapada_yadu', name: 'रोमपाद', subtitle: 'विदर्भ पुत्र', parent: 'vidarbha_yadu', yug: 'treta' },
    { id: 'kunti_kratha', name: 'कुंती', subtitle: 'क्रथ पुत्र', parent: 'kratha_yadu', yug: 'treta' },
    { id: 'vrishni_kratha', name: 'वृष्णि (प्रथम)', subtitle: 'कुंती पुत्र', parent: 'kunti_kratha', yug: 'treta' },
    { id: 'nirvriti_yadu', name: 'निर्वृति', subtitle: 'वृष्णि पुत्र', parent: 'vrishni_kratha', yug: 'treta' },
    { id: 'dasharha_yadu', name: 'दशार्ह', subtitle: 'निर्वृति पुत्र', parent: 'nirvriti_yadu', yug: 'treta' },
    { id: 'vyoman_yadu', name: 'व्योमन', subtitle: 'दशार्ह पुत्र', parent: 'dasharha_yadu', yug: 'treta' },
    { id: 'jimuta_yadu', name: 'जीमूत', subtitle: 'व्योमन पुत्र', parent: 'vyoman_yadu', yug: 'treta' },
    { id: 'vikriti_yadu', name: 'विकृति', subtitle: 'जीमूत पुत्र', parent: 'jimuta_yadu', yug: 'treta' },
    { id: 'bhimaratha_yadu', name: 'भीमरथ', subtitle: 'विकृति पुत्र', parent: 'vikriti_yadu', yug: 'dwapar' },
    { id: 'navaratha_yadu', name: 'नवरथ', subtitle: 'भीमरथ पुत्र', parent: 'bhimaratha_yadu', yug: 'dwapar' },
    { id: 'dasharatha_yadu', name: 'दशरथ', subtitle: 'नवरथ पुत्र', parent: 'navaratha_yadu', yug: 'dwapar' },
    { id: 'shakuni_yadu', name: 'शकुनि', subtitle: 'दशरथ पुत्र', parent: 'dasharatha_yadu', yug: 'dwapar' },
    { id: 'karambhi_yadu', name: 'करम्भी', subtitle: 'शकुनि पुत्र', parent: 'shakuni_yadu', yug: 'dwapar' },
    { id: 'devarata_yadu', name: 'देवरथ', subtitle: 'करम्भी पुत्र', parent: 'karambhi_yadu', yug: 'dwapar' },
    { id: 'devakshatra_yadu', name: 'देवक्षत्र', subtitle: 'देवरथ पुत्र', parent: 'devarata_yadu', yug: 'dwapar' },
    { id: 'madhu_yadu', name: 'मधु', subtitle: 'देवक्षत्र पुत्र', parent: 'devakshatra_yadu', yug: 'dwapar' },
    { id: 'kuruvasa_yadu', name: 'कुरुवश', subtitle: 'मधु पुत्र', parent: 'madhu_yadu', yug: 'dwapar' },
    { id: 'anu_yadu', name: 'अनु', subtitle: 'कुरुवश पुत्र', parent: 'kuruvasa_yadu', yug: 'dwapar' },
    { id: 'puruhotra_yadu', name: 'पुरुहोत्र', subtitle: 'अनु पुत्र', parent: 'anu_yadu', yug: 'dwapar' },
    { id: 'ayu_yadu', name: 'आयु', subtitle: 'पुरुहोत्र पुत्र', parent: 'puruhotra_yadu', yug: 'dwapar' },
    { id: 'satvata_yadu', name: 'सात्वत', subtitle: 'सात्वत वंश के मूल', parent: 'ayu_yadu', yug: 'dwapar' },

    // --- सात्वत वंश ---
    { id: 'bhajina_satvata', name: 'भजिन', subtitle: 'सात्वत पुत्र', parent: 'satvata_yadu', yug: 'dwapar' },
    { id: 'bhajamana_satvata', name: 'भजमान', subtitle: 'सात्वत पुत्र', parent: 'satvata_yadu', yug: 'dwapar' },
    { id: 'divya_satvata', name: 'दिव्य', subtitle: 'सात्वत पुत्र', parent: 'satvata_yadu', yug: 'dwapar' },
    { id: 'andhaka_satvata', name: 'अंधक', subtitle: 'अंधक वंश के मूल', parent: 'satvata_yadu', yug: 'dwapar' },
    { id: 'devavridha_satvata', name: 'देववृध', subtitle: 'सात्वत पुत्र', parent: 'satvata_yadu', yug: 'dwapar' },
    { id: 'mahabhoja_satvata', name: 'महाभोज', subtitle: 'सात्वत पुत्र', parent: 'satvata_yadu', yug: 'dwapar' },
    { id: 'vrishni_satvata', name: 'वृष्णि (द्वितीय)', subtitle: 'वृष्णि वंश के मूल', parent: 'satvata_yadu', yug: 'dwapar' },

    // --- अंधक वंश (उग्रसेन, कंस) ---
    { id: 'kukura_andhaka', name: 'कुकुर', subtitle: 'अंधक पुत्र', parent: 'andhaka_satvata', yug: 'dwapar' },
    { id: 'bhajamana_andhaka', name: 'भजमान', subtitle: 'अंधक पुत्र', parent: 'andhaka_satvata', yug: 'dwapar' },
    { id: 'shuchi_andhaka', name: 'शुचि', subtitle: 'अंधक पुत्र', parent: 'andhaka_satvata', yug: 'dwapar' },
    { id: 'kambalabarhisha_andhaka', name: 'कम्बलवर्हिष', subtitle: 'अंधक पुत्र', parent: 'andhaka_satvata', yug: 'dwapar' },
    { id: 'vahni_kukura', name: 'वह्नि', subtitle: 'कुकुर पुत्र', parent: 'kukura_andhaka', yug: 'dwapar' },
    { id: 'viloma_kukura', name: 'विलोमा', subtitle: 'वह्नि पुत्र', parent: 'vahni_kukura', yug: 'dwapar' },
    { id: 'kapotaroma_kukura', name: 'कपोतरोमा', subtitle: 'विलोमा पुत्र', parent: 'viloma_kukura', yug: 'dwapar' },
    { id: 'tumburu_kukura', name: 'तुम्बुरु', subtitle: 'कपोतरोमा पुत्र', parent: 'kapotaroma_kukura', yug: 'dwapar' },
    { id: 'dundubhi_kukura', name: 'दुन्दुभि', subtitle: 'तुम्बुरु पुत्र', parent: 'tumburu_kukura', yug: 'dwapar' },
    { id: 'daridra_kukura', name: 'दरिद्र', subtitle: 'दुन्दुभि पुत्र', parent: 'dundubhi_kukura', yug: 'dwapar' },
    { id: 'vasu_kukura', name: 'वसु', subtitle: 'दरिद्र पुत्र', parent: 'daridra_kukura', yug: 'dwapar' },
    { id: 'ahuka_kukura', name: 'आहुक', subtitle: 'वसु पुत्र', parent: 'vasu_kukura', yug: 'dwapar' },
    { id: 'devaka_kukura', name: 'देवक', subtitle: 'देवकी के पिता', parent: 'ahuka_kukura', yug: 'dwapar' },
    { id: 'ugrasen_kukura', name: 'उग्रसेन', subtitle: 'मथुरा नरेश', parent: 'ahuka_kukura', yug: 'dwapar' },
    { id: 'kamsa_ugrasen', name: 'कंस', subtitle: 'उग्रसेन पुत्र', parent: 'ugrasen_kukura', yug: 'dwapar' },
    { id: 'devaki_devaka', name: 'देवकी', subtitle: 'देवक पुत्री', parent: 'devaka_kukura', spouseOf: 'vasudev', yug: 'dwapar' },

    // --- सत्राजित (सत्यभामा के पिता) - अंधक वंश की भजमान शाखा से ---
    { id: 'viduratha_bhajamana', name: 'विदूरथ', subtitle: 'भजमान (अंधक) पुत्र', parent: 'bhajamana_andhaka', yug: 'dwapar' },
    { id: 'shura_viduratha', name: 'शूर', subtitle: 'विदूरथ पुत्र', parent: 'viduratha_bhajamana', yug: 'dwapar' },
    { id: 'shini_shura', name: 'शिनि', subtitle: 'शूर पुत्र', parent: 'shura_viduratha', yug: 'dwapar' },
    { id: 'svayambhoja_shini', name: 'स्वयंभोज', subtitle: 'शिनि पुत्र', parent: 'shini_shura', yug: 'dwapar' },
    { id: 'hridika_svayambhoja', name: 'हृदिक', subtitle: 'स्वयंभोज पुत्र', parent: 'svayambhoja_shini', yug: 'dwapar' },
    { id: 'devamidha_hridika', name: 'देवमीढ', subtitle: 'हृदिक पुत्र', parent: 'hridika_svayambhoja', yug: 'dwapar' },
    { id: 'shatadhanva_hridika', name: 'शतधन्वा', subtitle: 'हृदिक पुत्र', parent: 'hridika_svayambhoja', yug: 'dwapar' },
    { id: 'kritavarma_hridika', name: 'कृतवर्मा', subtitle: 'हृदिक पुत्र', parent: 'hridika_svayambhoja', yug: 'dwapar' },
    { id: 'anamitra_hridika', name: 'अनमित्र', subtitle: 'हृदिक पुत्र', parent: 'hridika_svayambhoja', yug: 'dwapar' },
    { id: 'nighna_anamitra', name: 'निघ्न', subtitle: 'अनमित्र पुत्र', parent: 'anamitra_hridika', yug: 'dwapar' },
    { id: 'satrajit_nighna', name: 'सत्राजित', subtitle: 'निघ्न पुत्र (स्यमंतक मणि धारक)', parent: 'nighna_anamitra', yug: 'dwapar' },
    { id: 'prasena_nighna', name: 'प्रसेन', subtitle: 'निघ्न पुत्र', parent: 'nighna_anamitra', yug: 'dwapar' },

    // --- वृष्णि वंश (वसुदेव - कृष्ण) ---
    { id: 'shvaphalaka_vrishni', name: 'श्वफल्क', subtitle: 'वृष्णि वंश', parent: 'vrishni_satvata', yug: 'dwapar' }, // Note: actual lineage from vrishni can be debated, using simplified line
    { id: 'devamidhusha_vrishni', name: 'देवमीढुष', subtitle: 'वृष्णि पुत्र', parent: 'vrishni_satvata', yug: 'dwapar' },
    { id: 'shurasen', name: 'शूरसेन (शूर)', subtitle: 'देवमीढुष पुत्र', parent: 'devamidhusha_vrishni', yug: 'dwapar' },
    { id: 'marisha_shurasen', name: 'मारिषा', subtitle: 'शूरसेन पत्नी', parent: '', spouseOf: 'shurasen', yug: 'dwapar' },

    // शूरसेन के पुत्र-पुत्रियां
    { id: 'vasudev', name: 'वसुदेव (आनकदुन्दुभि)', subtitle: 'कृष्ण के पिता', parent: 'shurasen', mother: 'marisha_shurasen', yug: 'dwapar' },
    { id: 'kunti', name: 'पृथा (कुंती)', subtitle: 'शूरसेन पुत्री', parent: 'shurasen', mother: 'marisha_shurasen', spouseOf: 'pandu', yug: 'dwapar', parichay: 'इन्हें कुंतीभोज ने गोद लिया था। इनका विवाह पांडु से हुआ।' },
    { id: 'shrutasrava', name: 'श्रुतश्रवा', subtitle: 'शूरसेन पुत्री', parent: 'shurasen', mother: 'marisha_shurasen', spouseOf: 'damaghosha', yug: 'dwapar', parichay: 'चेदि नरेश दमघोष की पत्नी और शिशुपाल की माता।' },

    // नन्द बाबा (गोकुल)
    { id: 'parjanya_gopa', name: 'पर्जन्य', subtitle: 'गोप', parent: '', yug: 'dwapar', clusterName: 'नन्द परिवार' },
    { id: 'nanda', name: 'नंद बाबा', subtitle: 'कृष्ण के पालक पिता', parent: 'parjanya_gopa', yug: 'dwapar', clusterName: 'नन्द परिवार' },
    { id: 'yashoda', name: 'यशोदा', subtitle: 'कृष्ण की पालक माता', parent: '', spouseOf: 'nanda', yug: 'dwapar', clusterName: 'नन्द परिवार' },

    // वसुदेव की पत्नियां
    { id: 'rohini_vasudev', name: 'रोहिणी', subtitle: 'वसुदेव पत्नी', parent: '', spouseOf: 'vasudev', yug: 'dwapar', clusterName: 'वसुदेव की पत्नियाँ' },

    // वसुदेव के पुत्र
    { id: 'balram', name: 'बलराम (संकर्षण)', subtitle: 'शेषनाग अवतार', parent: 'vasudev', mother: 'rohini_vasudev', yug: 'dwapar' },
    { id: 'revati_balram', name: 'रेवती', subtitle: 'बलराम पत्नी', parent: '', spouseOf: 'balram', yug: 'dwapar' },

    { id: 'krishna', name: 'कृष्ण (वासुदेव)', subtitle: 'पूर्णावतार', parent: 'vasudev', mother: 'devaki_devaka', yug: 'dwapar', parichay: 'भगवान विष्णु के पूर्णावतार। नन्द बाबा और यशोदा ने गोकुल में इनका पालन किया।' },
    { id: 'subhadra', name: 'सुभद्रा', subtitle: 'कृष्ण की बहन', parent: 'vasudev', mother: 'rohini_vasudev', spouseOf: 'arjun', yug: 'dwapar' },

    // --- श्रीकृष्ण का परिवार ---
    // अष्टभार्या
    { id: 'rukmini_krishna', name: 'रुक्मिणी', subtitle: 'श्रीकृष्ण की प्रथम पत्नी (लक्ष्मी अवतार)', parent: 'bhishmaka', spouseOf: 'krishna', yug: 'dwapar', clusterName: 'अष्टभार्या' },
    { id: 'satyabhama_krishna', name: 'सत्यभामा', subtitle: 'श्रीकृष्ण की पत्नी (भूदेवी)', parent: 'satrajit_nighna', spouseOf: 'krishna', yug: 'dwapar', clusterName: 'अष्टभार्या' },
    { id: 'jambavati', name: 'जाम्बवती', subtitle: 'श्रीकृष्ण की पत्नी', parent: 'jambavan', spouseOf: 'krishna', yug: 'dwapar', clusterName: 'अष्टभार्या', parichay: 'जाम्बवान की पुत्री।' },
    { id: 'kalindi_krishna', name: 'कालिंदी', subtitle: 'श्रीकृष्ण की पत्नी', parent: 'surya', spouseOf: 'krishna', yug: 'dwapar', clusterName: 'अष्टभार्या' },
    { id: 'mitravinda_krishna', name: 'मित्रविन्दा', subtitle: 'श्रीकृष्ण की पत्नी', parent: '', spouseOf: 'krishna', yug: 'dwapar', clusterName: 'अष्टभार्या' },
    { id: 'nagnajiti_krishna', name: 'नग्नजिती (सत्या)', subtitle: 'श्रीकृष्ण की पत्नी', parent: '', spouseOf: 'krishna', yug: 'dwapar', clusterName: 'अष्टभार्या' },
    { id: 'bhadra_krishna', name: 'भद्रा', subtitle: 'श्रीकृष्ण की पत्नी', parent: '', spouseOf: 'krishna', yug: 'dwapar', clusterName: 'अष्टभार्या' },
    { id: 'lakshmana_krishna', name: 'लक्ष्मणा', subtitle: 'श्रीकृष्ण की पत्नी', parent: '', spouseOf: 'krishna', yug: 'dwapar', clusterName: 'अष्टभार्या' },

    // श्रीकृष्ण के पुत्र (प्रद्युम्न, साम्ब आदि)
    { id: 'pradyumna', name: 'प्रद्युम्न', subtitle: 'कामदेव अवतार', parent: 'krishna', mother: 'rukmini_krishna', yug: 'dwapar' },
    { id: 'charudeshna', name: 'चारुदेष्ण', subtitle: 'कृष्ण पुत्र', parent: 'krishna', mother: 'rukmini_krishna', yug: 'dwapar' },
    { id: 'samba_krishna', name: 'साम्ब', subtitle: 'कृष्ण पुत्र', parent: 'krishna', mother: 'jambavati', yug: 'dwapar' },

    // प्रद्युम्न का वंश
    { id: 'rukmavati_pradyumna', name: 'रुक्मवती', subtitle: 'रुक्मी पुत्री', parent: 'rukmi_vidarbha', spouseOf: 'pradyumna', yug: 'dwapar' },
    { id: 'aniruddha', name: 'अनिरुद्ध', subtitle: 'प्रद्युम्न पुत्र', parent: 'pradyumna', mother: 'rukmavati_pradyumna', yug: 'dwapar' },
    { id: 'rochana_aniruddha', name: 'रोचना', subtitle: 'रुक्मी की पौत्री', parent: '', spouseOf: 'aniruddha', yug: 'dwapar' },

    // कलियुग के यादव (वज्रनाभ आदि)
    { id: 'vajranabha', name: 'वज्रनाभ', subtitle: 'मथुरा नरेश', parent: 'aniruddha', mother: 'rochana_aniruddha', yug: 'kali', parichay: 'यदुवंश के नाश के बाद अर्जुन ने इन्हें मथुरा (इन्द्रप्रस्थ मंडल) का राजा बनाया था।' },
    { id: 'pratibahu_vajranabha', name: 'प्रतिबाहु', subtitle: 'वज्रनाभ पुत्र', parent: 'vajranabha', yug: 'kali' },
    { id: 'subahu_pratibahu', name: 'सुबाहु', subtitle: 'प्रतिबाहु पुत्र', parent: 'pratibahu_vajranabha', yug: 'kali' },
    { id: 'shantasena_subahu', name: 'शान्तसेन', subtitle: 'सुबाहु पुत्र', parent: 'subahu_pratibahu', yug: 'kali' },
    { id: 'shatasena_shantasena', name: 'शतसेन', subtitle: 'शान्तसेन पुत्र', parent: 'shantasena_subahu', yug: 'kali' },

    // --- बाद के वंश (अस्थायी रूप से सुरक्षित रखे गए हैं) ---
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

    // --- संदर्भ के लिए अन्य राजवंश/पात्र (यदुवंश से जुड़े) ---
    { id: 'bhishmaka', name: 'भीष्मक', subtitle: 'विदर्भ नरेश', parent: '', yug: 'dwapar' },
    { id: 'rukmi_vidarbha', name: 'रुक्मी', subtitle: 'रुक्मिणी का भाई', parent: 'bhishmaka', yug: 'dwapar' },
    { id: 'damaghosha', name: 'दमघोष', subtitle: 'चेदि नरेश', parent: '', yug: 'dwapar' },
    { id: 'shishupala', name: 'शिशुपाल', subtitle: 'चेदि नरेश', parent: 'damaghosha', mother: 'shrutasrava', yug: 'dwapar' },

];
