export const chandravanshData = [
    // --- अत्रि और उनकी पत्नी ---
    { id: 'anasuya_chandra', name: 'अनुसूया', subtitle: 'अत्रि पत्नी', parent: 'kardam_prajapati', spouseOf: 'atri', yug: 'satya', clusterName: 'अत्रि की पत्नियाँ' },

    // --- अत्रि के पुत्र ---
        { id: 'atri_dynasty_proxy', name: 'आत्रेय वंश', subtitle: 'अत्रि के वंशज', parent: 'atri', yug: 'satya', clusterName: 'आत्रेय वंश', isProxy: true },
    { id: 'dattatreya_chandra', name: 'दत्तात्रेय', subtitle: 'विष्णु अंश', parent: 'atri_dynasty_proxy', clusterName: 'आत्रेय वंश', mother: 'anasuya_chandra', yug: 'satya' },
    { id: 'durvasa_chandra', name: 'दुर्वासा', subtitle: 'शिव अंश', parent: 'atri_dynasty_proxy', clusterName: 'आत्रेय वंश', mother: 'anasuya_chandra', yug: 'satya' },
    { id: 'chandra_chandra', name: 'चंद्र', subtitle: 'चंद्र देव (चंद्रवंश के मूल)', parent: 'atri', mother: 'anasuya_chandra', yug: 'satya' },

    // --- चंद्र देव की पत्नियां ---
    { id: 'tara_chandra', name: 'तारा', subtitle: 'चंद्र पत्नी (बृहस्पति की पूर्व पत्नी)', parent: '', spouseOf: 'chandra_chandra', yug: 'satya' },
    // (दक्ष की 27 पुत्रियां भी चंद्र की पत्नियां हैं, उन्हें आवश्यकता अनुसार बाद में जोड़ा जा सकता है)

    // --- चंद्र देव के पुत्र ---
    { id: 'budh_chandra', name: 'बुध', subtitle: 'चंद्र व तारा के पुत्र', parent: 'chandra_chandra', mother: 'tara_chandra', yug: 'satya' },

    // --- बुध की पत्नी ---
    { id: 'ila_chandra', name: 'इला', subtitle: 'बुध की पत्नी', parent: 'vaivasvat_manu', spouseOf: 'budh_chandra', yug: 'satya' },

    // --- पुरुरवा ---
    { id: 'pururava_chandra', name: 'पुरुरवा', subtitle: 'चंद्रवंश के प्रथम राजा', parent: 'budh_chandra', mother: 'ila_chandra', yug: 'satya' },
    { id: 'urvashi_chandra', name: 'उर्वशी', subtitle: 'पुरुरवा की पत्नी (अप्सरा)', parent: '', spouseOf: 'pururava_chandra', yug: 'satya' },

    // --- पुरुरवा के पुत्र (आयु, श्रुतायु, सत्यायु, रय, विजय, जय) ---
        { id: 'chandravansh_dynasty_proxy', name: 'पुरुरवा के अन्य पुत्र', subtitle: 'श्रुतायु आदि', parent: 'pururava_chandra', yug: 'satya', clusterName: 'पुरुरवा के अन्य पुत्र', isProxy: true },
    { id: 'ayu_chandra', name: 'आयु', subtitle: 'पुरुरवा के ज्येष्ठ पुत्र', parent: 'pururava_chandra', mother: 'urvashi_chandra', yug: 'satya' },
    { id: 'shrutayu_chandra', name: 'श्रुतायु', subtitle: 'पुरुरवा के पुत्र', parent: 'chandravansh_dynasty_proxy', mother: 'urvashi_chandra', yug: 'satya', clusterName: 'पुरुरवा के अन्य पुत्र' },
    { id: 'satyayu_chandra', name: 'सत्यायु', subtitle: 'पुरुरवा के पुत्र', parent: 'chandravansh_dynasty_proxy', mother: 'urvashi_chandra', yug: 'satya', clusterName: 'पुरुरवा के अन्य पुत्र' },
    { id: 'raya_chandra', name: 'रय', subtitle: 'पुरुरवा के पुत्र', parent: 'chandravansh_dynasty_proxy', mother: 'urvashi_chandra', yug: 'satya', clusterName: 'पुरुरवा के अन्य पुत्र' },
    { id: 'vijaya_chandra', name: 'विजय', subtitle: 'पुरुरवा के पुत्र', parent: 'chandravansh_dynasty_proxy', mother: 'urvashi_chandra', yug: 'satya', clusterName: 'पुरुरवा के अन्य पुत्र' },
    { id: 'jaya_chandra', name: 'जय', subtitle: 'पुरुरवा के पुत्र', parent: 'chandravansh_dynasty_proxy', mother: 'urvashi_chandra', yug: 'satya', clusterName: 'पुरुरवा के अन्य पुत्र' },

    // --- आयु की पत्नी ---
    { id: 'prabha_chandra', name: 'प्रभा', subtitle: 'आयु की पत्नी', parent: '', spouseOf: 'ayu_chandra', yug: 'satya' },

    // --- आयु के पुत्र (नहुष, क्षत्रवृद्ध, रम्भ, रजि, अनेना) ---
    { id: 'nahusha_chandra', name: 'नहुष', subtitle: 'आयु के पुत्र', parent: 'ayu_chandra', mother: 'prabha_chandra', yug: 'satya' },
    { id: 'kshatravriddha_chandra', name: 'क्षत्रवृद्ध', subtitle: 'आयु के पुत्र', parent: 'ayu_chandra', mother: 'prabha_chandra', yug: 'satya' },
    { id: 'sunahotra_kashi_chandra', name: 'सुनहोत्र', subtitle: 'क्षत्रवृद्ध पुत्र', parent: 'kshatravriddha_chandra', yug: 'satya' },
    { id: 'kashya', name: 'काश्य', subtitle: 'काशी के संस्थापक', parent: 'sunahotra_kashi_chandra', yug: 'satya' },
    { id: 'rashtra_chandra', name: 'राष्ट्र', subtitle: 'काश्य पुत्र', parent: 'kashya', yug: 'satya' },
    { id: 'dirghatapa_chandra', name: 'दीर्घतपा', subtitle: 'राष्ट्र पुत्र', parent: 'rashtra_chandra', yug: 'satya' },
    { id: 'dhanvantari_chandra', name: 'धन्वंतरि', subtitle: 'आयुर्वेद प्रवर्तक / विष्णु अंशावतार', parent: 'dirghatapa_chandra', yug: 'satya', parichay: 'समुद्र मंथन से अमृत कलश लेकर प्रकट हुए थे। काशी राजवंश में इनका जन्म हुआ था और ये महान वैद्य माने जाते हैं।' },
    { id: 'ketuman_chandra', name: 'केतुमान', subtitle: 'धन्वंतरि पुत्र', parent: 'dhanvantari_chandra', yug: 'satya' },
    { id: 'bhimaratha_chandra', name: 'भीमरथ', subtitle: 'केतुमान पुत्र', parent: 'ketuman_chandra', yug: 'treta' },
    { id: 'divodasa_chandra', name: 'दिवोदास', subtitle: 'काशी नरेश', parent: 'bhimaratha_chandra', yug: 'treta', parichay: 'काशी के महान राजा, जिन्होंने क्षेमक राक्षस से काशी को मुक्त कराया था।' },
    { id: 'pratardana_chandra', name: 'प्रतर्दन', subtitle: 'दिवोदास पुत्र', parent: 'divodasa_chandra', yug: 'treta' },
    { id: 'vatsa_kashi_chandra', name: 'वत्स', subtitle: 'प्रतर्दन पुत्र', parent: 'pratardana_chandra', yug: 'treta' },
    { id: 'alarka_chandra', name: 'अलर्क', subtitle: 'काशी नरेश', parent: 'vatsa_kashi_chandra', yug: 'treta', parichay: 'महान तपस्वी राजा जिसने 66,000 वर्ष तक राज किया और फिर दत्तात्रेय से ज्ञान प्राप्त कर मोक्ष पाया।' },

    { id: 'sannati_kashi_chandra', name: 'सन्नति', subtitle: 'अलर्क पुत्र', parent: 'alarka_chandra', yug: 'treta' },
    { id: 'sunitha_kashi_chandra', name: 'सुनीथ', subtitle: 'सन्नति पुत्र', parent: 'sannati_kashi_chandra', yug: 'treta' },
    { id: 'suketu_kashi_chandra', name: 'सुकेतु', subtitle: 'सुनीथ पुत्र', parent: 'sunitha_kashi_chandra', yug: 'treta' },
    { id: 'satyaketu_kashi_chandra', name: 'सत्यकेतु', subtitle: 'सुकेतु पुत्र', parent: 'suketu_kashi_chandra', yug: 'treta' },
    { id: 'vibhu_kashi_chandra', name: 'विभु', subtitle: 'सत्यकेतु पुत्र', parent: 'satyaketu_kashi_chandra', yug: 'treta' },
    { id: 'suvibhu_kashi_chandra', name: 'सुविभु', subtitle: 'विभु पुत्र', parent: 'vibhu_kashi_chandra', yug: 'treta' },
    { id: 'sukumara_kashi_chandra', name: 'सुकुमार', subtitle: 'सुविभु पुत्र', parent: 'suvibhu_kashi_chandra', yug: 'treta' },
    { id: 'dhrishtaketu_kashi_chandra', name: 'धृष्टकेतु', subtitle: 'सुकुमार पुत्र', parent: 'sukumara_kashi_chandra', yug: 'treta' },
    { id: 'vainahotra_chandra', name: 'वैनहोत्र', subtitle: 'धृष्टकेतु पुत्र', parent: 'dhrishtaketu_kashi_chandra', yug: 'treta' },
    { id: 'bharga_kashi_chandra', name: 'भर्ग', subtitle: 'वैनहोत्र पुत्र', parent: 'vainahotra_chandra', yug: 'treta' },
    { id: 'vatsabhumi_chandra', name: 'वत्सभूमि', subtitle: 'भर्ग पुत्र', parent: 'bharga_kashi_chandra', yug: 'treta' },


    { id: 'rambha_ayu_chandra', name: 'रम्भ', subtitle: 'आयु के पुत्र', parent: 'ayu_chandra', mother: 'prabha_chandra', yug: 'satya' },
    { id: 'raji_chandra', name: 'रजि', subtitle: 'आयु के पुत्र', parent: 'ayu_chandra', mother: 'prabha_chandra', yug: 'satya' },
    { id: 'rajeya_chandra', name: 'रजेय (500 पुत्र)', subtitle: 'रजि के पुत्र', parent: 'raji_chandra', yug: 'satya', parichay: 'राजा रजि के 500 बलवान पुत्र। इन्होंने इंद्र से स्वर्ग छीन लिया था, जिसे बाद में बृहस्पति के छल से नष्ट किया गया।' },
    { id: 'anena_chandra', name: 'अनेना', subtitle: 'आयु के पुत्र', parent: 'ayu_chandra', mother: 'prabha_chandra', yug: 'satya' },

    // --- नहुष की पत्नी ---
    { id: 'ashokasundari_chandra', name: 'अशोकसुंदरी', subtitle: 'नहुष की पत्नी (शिव-पार्वती पुत्री)', parent: 'shiva_parivar_proxy', mother: 'parvati', spouseOf: 'nahusha_chandra', yug: 'satya', clusterName: 'शिव परिवार' },

    // --- नहुष के पुत्र (यति, ययाति, संयाति, अयाति, वियति, कृति) ---

    { id: 'nahusha_sons_proxy', name: 'नहुष के अन्य पुत्र', subtitle: 'ययाति के अतिरिक्त ५ पुत्र', isProxy: true, parent: 'nahusha_chandra', clusterName: 'नहुष के पुत्र', yug: 'treta' },
    { id: 'yati_chandra', name: 'यति', subtitle: 'नहुष के पुत्र (संन्यासी)', parent: 'nahusha_chandra', mother: 'ashokasundari_chandra', yug: 'satya' , clusterName: 'नहुष के पुत्र' },
    { id: 'yayati_chandra', name: 'ययाति', subtitle: 'महान सम्राट', parent: 'nahusha_chandra', mother: 'ashokasundari_chandra', yug: 'satya' },
    { id: 'sanyati_chandra', name: 'संयाति', subtitle: 'नहुष के पुत्र', parent: 'nahusha_chandra', mother: 'ashokasundari_chandra', yug: 'satya' },
    { id: 'ayati_nahusha_chandra', name: 'अयाति', subtitle: 'नहुष के पुत्र', parent: 'nahusha_chandra', mother: 'ashokasundari_chandra', yug: 'satya' },
    { id: 'viyati_chandra', name: 'वियति', subtitle: 'नहुष के पुत्र', parent: 'nahusha_chandra', mother: 'ashokasundari_chandra', yug: 'satya' , clusterName: 'नहुष के पुत्र' },
    { id: 'kriti_chandra', name: 'कृति', subtitle: 'नहुष के पुत्र', parent: 'nahusha_chandra', mother: 'ashokasundari_chandra', yug: 'satya' , clusterName: 'नहुष के पुत्र' },

    // --- ययाति की पत्नियां ---
    { id: 'devayani_yayati_chandra', name: 'देवयानी', subtitle: 'ययाति की पत्नी (शुक्राचार्य की पुत्री)', parent: 'shukracharya', spouseOf: 'yayati_chandra', yug: 'satya', clusterName: 'ययाति की 2 पत्नियाँ' },
    { id: 'sharmishtha_chandra', name: 'शर्मिष्ठा', subtitle: 'ययाति की पत्नी (वृषपर्वा की पुत्री)', parent: '', spouseOf: 'yayati_chandra', yug: 'satya', clusterName: 'ययाति की 2 पत्नियाँ' },

    // --- ययाति के पुत्र ---
        { id: 'yadu_chandra', name: 'यदु', subtitle: 'यदुवंश के संस्थापक', parent: 'yayati_chandra', mother: 'devayani_yayati_chandra', yug: 'treta', lineLabel: 'यदुवंश' },
    { id: 'yadu_vansh_proxy', name: 'यदु वंश', subtitle: 'यदु के वंशज', parent: 'yadu_chandra', yug: 'treta', clusterName: 'यदु वंश', isProxy: true },
        { id: 'turvasu_dynasty_proxy', name: 'तुर्वसु वंश', subtitle: 'तुर्वसु के वंशज', parent: 'yayati_chandra', yug: 'treta', clusterName: 'तुर्वसु वंश', isProxy: true },
    { id: 'turvasu_chandra', name: 'तुर्वसु', subtitle: 'ययाति के पुत्र', parent: 'turvasu_dynasty_proxy', clusterName: 'तुर्वसु वंश', mother: 'devayani_yayati_chandra', yug: 'treta', lineLabel: 'तुर्वसु वंश' },
        { id: 'druhyu_dynasty_proxy', name: 'द्रुह्यु वंश', subtitle: 'द्रुह्यु के वंशज', parent: 'yayati_chandra', yug: 'treta', clusterName: 'द्रुह्यु वंश', isProxy: true },
    { id: 'druhyu_chandra', name: 'द्रुह्यु', subtitle: 'ययाति के पुत्र', parent: 'druhyu_dynasty_proxy', clusterName: 'द्रुह्यु वंश', mother: 'sharmishtha_chandra', yug: 'treta', lineLabel: 'द्रुह्यु वंश' },
        { id: 'anu_dynasty_proxy', name: 'अनु वंश', subtitle: 'अनु के वंशज', parent: 'yayati_chandra', yug: 'treta', clusterName: 'अनु वंश', isProxy: true },
    { id: 'anu_yayati_chandra', name: 'अनु', subtitle: 'ययाति के पुत्र', parent: 'anu_dynasty_proxy', clusterName: 'अनु वंश', mother: 'sharmishtha_chandra', yug: 'treta', lineLabel: 'अनु वंश' },
        { id: 'puru_dynasty_proxy', name: 'पुरु वंश', subtitle: 'पुरु के वंशज', parent: 'yayati_chandra', yug: 'treta', clusterName: 'पुरु वंश', isProxy: true },
    { id: 'puru_chandra', name: 'पुरु', subtitle: 'पौरव/कुरुवंश के संस्थापक', parent: 'puru_dynasty_proxy', clusterName: 'पुरु वंश', mother: 'sharmishtha_chandra', yug: 'treta', lineLabel: 'पुरुवंश' },

    // --- तुर्वसु वंश ---
    { id: 'vahni_turvasu_chandra', name: 'वह्नि', subtitle: 'तुर्वसु पुत्र', parent: 'turvasu_chandra', yug: 'treta' },
    { id: 'garbha_turvasu_chandra', name: 'गर्भ', subtitle: 'वह्नि पुत्र', parent: 'vahni_turvasu_chandra', yug: 'treta' },
    { id: 'gobhanu_turvasu_chandra', name: 'गोभानु', subtitle: 'गर्भ पुत्र', parent: 'garbha_turvasu_chandra', yug: 'treta' },
    { id: 'trishanu_turvasu_chandra', name: 'त्रिशानु', subtitle: 'गोभानु पुत्र', parent: 'gobhanu_turvasu_chandra', yug: 'treta' },
    { id: 'karandhama_turvasu_chandra', name: 'करन्धम', subtitle: 'त्रिशानु पुत्र', parent: 'trishanu_turvasu_chandra', yug: 'treta' },
    { id: 'marutta_turvasu_chandra', name: 'मरुत्त', subtitle: 'करन्धम पुत्र', parent: 'karandhama_turvasu_chandra', yug: 'treta', parichay: 'तुर्वसु वंश के राजा मरुत्त, जिनके कोई पुत्र नहीं था। इन्होंने पौरव वंशीय दुष्यंत को गोद लिया था।' },
    { id: 'dushyanta_turvasu_chandra', name: 'दुष्यंत (दत्तक)', subtitle: 'मरुत्त के दत्तक पुत्र', parent: 'marutta_turvasu_chandra', yug: 'treta', parichay: 'पौरव वंश के दुष्यंत जिन्हें मरुत्त ने गोद लिया। परन्तु ये पुनः पुरु वंश में लौट गए।' },
    { id: 'sharutthama_turvasu_chandra', name: 'शरुत्थाम', subtitle: 'दुष्यंत पुत्र', parent: 'dushyanta_turvasu_chandra', yug: 'treta' },
    { id: 'akrida_turvasu_chandra', name: 'आक्रीड', subtitle: 'शरुत्थाम पुत्र', parent: 'sharutthama_turvasu_chandra', yug: 'treta' },
    { id: 'pandya_turvasu_chandra', name: 'पाण्ड्य', subtitle: 'पाण्ड्य देश संस्थापक', parent: 'akrida_turvasu_chandra', yug: 'treta', parichay: 'इन्होंने दक्षिण भारत में पाण्ड्य राजवंश की स्थापना की।' },
    { id: 'kerala_turvasu_chandra', name: 'केरल', subtitle: 'केरल देश संस्थापक', parent: 'akrida_turvasu_chandra', yug: 'treta', parichay: 'इन्होंने दक्षिण में केरल (चेर) राज्य की स्थापना की।' },
    { id: 'chola_turvasu_chandra', name: 'चोल', subtitle: 'चोल देश संस्थापक', parent: 'akrida_turvasu_chandra', yug: 'treta', parichay: 'इन्होंने दक्षिण में चोल राजवंश की स्थापना की।' },
    { id: 'kola_turvasu_chandra', name: 'कोल', subtitle: 'कोल देश संस्थापक', parent: 'akrida_turvasu_chandra', yug: 'treta' },


    // --- द्रुह्यु वंश ---
    { id: 'babhru_druhyu_chandra', name: 'बभ्रु', subtitle: 'द्रुह्यु पुत्र', parent: 'druhyu_chandra', yug: 'treta' },
    { id: 'setu_druhyu_chandra', name: 'सेतु', subtitle: 'बभ्रु पुत्र', parent: 'babhru_druhyu_chandra', yug: 'treta' },
    { id: 'arabdha_druhyu_chandra', name: 'आरब्ध (आरद्वत)', subtitle: 'सेतु पुत्र', parent: 'setu_druhyu_chandra', yug: 'treta' },
    { id: 'gandhara_druhyu_chandra', name: 'गान्धार', subtitle: 'गान्धार देश संस्थापक', parent: 'arabdha_druhyu_chandra', yug: 'treta', parichay: 'इन्हीं के नाम पर गान्धार (वर्तमान कंधार/अफगानिस्तान क्षेत्र) देश का नाम पड़ा।' },
    { id: 'dharma_druhyu_chandra', name: 'धर्म', subtitle: 'गान्धार पुत्र', parent: 'gandhara_druhyu_chandra', yug: 'treta' },
    { id: 'dhrita_druhyu_chandra', name: 'धृत', subtitle: 'धर्म पुत्र', parent: 'dharma_druhyu_chandra', yug: 'treta' },
    { id: 'duryaman_druhyu_chandra', name: 'दुर्मन', subtitle: 'धृत पुत्र', parent: 'dhrita_druhyu_chandra', yug: 'treta' },
    { id: 'prachetas_druhyu_chandra', name: 'प्रचेतस', subtitle: 'दुर्मन पुत्र', parent: 'duryaman_druhyu_chandra', yug: 'treta' },
        { id: 'suchetas_druhyu_chandra', name: 'सुचेतस', subtitle: 'प्रचेतस के पुत्र', parent: 'prachetas_druhyu_chandra', yug: 'treta', parichay: 'इनके समेत प्रचेतस के 100 पुत्र हुए जो उत्तर दिशा में म्लेच्छ देशों के राजा बने।' },
    // --- दक्षिण एवं पूर्वी राजवंश (Proxies) ---
    { id: 'mleccha_kings_proxy', name: 'म्लेच्छ राजवंश', subtitle: 'सुचेतस व अन्य भाइयों के वंश', parent: 'suchetas_druhyu_chandra', yug: 'treta', clusterName: 'म्लेच्छ राजवंश', isProxy: true },
    { id: 'pandya_dynasty_proxy', name: 'पाण्ड्य वंश', subtitle: 'मदुरै राजवंश', parent: 'pandya_turvasu_chandra', yug: 'treta', clusterName: 'पाण्ड्य वंश', isProxy: true },
    { id: 'chola_dynasty_proxy', name: 'चोल वंश', subtitle: 'कावेरी राजवंश', parent: 'chola_turvasu_chandra', yug: 'treta', clusterName: 'चोल वंश', isProxy: true },
    { id: 'kerala_dynasty_proxy', name: 'चेर (केरल) वंश', subtitle: 'मालाबार राजवंश', parent: 'kerala_turvasu_chandra', yug: 'treta', clusterName: 'चेर वंश', isProxy: true },
    { id: 'kola_dynasty_proxy', name: 'कोल वंश', subtitle: 'कोल राजवंश', parent: 'kola_turvasu_chandra', yug: 'treta', clusterName: 'कोल वंश', isProxy: true },
    { id: 'kalinga_dynasty_proxy', name: 'कलिंग वंश', subtitle: 'कलिंग राजवंश', parent: 'kalinga_anu', yug: 'treta', clusterName: 'कलिंग वंश', isProxy: true },
    { id: 'vanga_dynasty_proxy', name: 'वंग वंश', subtitle: 'बंगाल राजवंश', parent: 'vanga_anu', yug: 'treta', clusterName: 'वंग वंश', isProxy: true },
    { id: 'pundra_dynasty_proxy', name: 'पुण्ड्र वंश', subtitle: 'पुण्ड्र राजवंश', parent: 'pundra_anu', yug: 'treta', clusterName: 'पुण्ड्र वंश', isProxy: true },
    { id: 'suhma_dynasty_proxy', name: 'सुह्म वंश', subtitle: 'सुह्म राजवंश', parent: 'suhma_anu', yug: 'treta', clusterName: 'सुह्म वंश', isProxy: true },
    // --- महाभारत कालीन परवर्ती राजा (अज्ञात पीढ़ियों के बाद) ---
    { id: 'paundraka_vasudeva_chandra', name: 'पौण्ड्रक वासुदेव', subtitle: 'पुण्ड्र नरेश', parent: 'pundra_dynasty_proxy', yug: 'dwapar', parichay: 'महाभारत काल में पुण्ड्र देश का राजा, जो स्वयं को असली वासुदेव (कृष्ण) मानता था।', clusterName: 'पुण्ड्र वंश' },
    { id: 'chitrangada_kalinga_chandra', name: 'चित्रांगद', subtitle: 'कलिंग नरेश', parent: 'kalinga_dynasty_proxy', yug: 'dwapar', parichay: 'दुर्योधन की पत्नी भानुमती के पिता।', clusterName: 'कलिंग वंश' },
    { id: 'shrutayush_kalinga_chandra', name: 'श्रुतायु', subtitle: 'कलिंग नरेश', parent: 'kalinga_dynasty_proxy', yug: 'dwapar', parichay: 'महाभारत युद्ध में कौरवों की ओर से लड़े और अर्जुन द्वारा वीरगति को प्राप्त हुए।', clusterName: 'कलिंग वंश' },
    { id: 'malayadhwaja_pandya_chandra', name: 'मलयध्वज', subtitle: 'पाण्ड्य नरेश', parent: 'pandya_dynasty_proxy', yug: 'dwapar', parichay: 'महाभारत युद्ध में पांडवों की ओर से लड़े महान योद्धा।', clusterName: 'पाण्ड्य वंश' },




    // --- अनु वंश ---
    { id: 'sabhanara_anu', name: 'सभानर', subtitle: 'अनु पुत्र', parent: 'anu_yayati_chandra', yug: 'treta' },
    { id: 'chakshusha_anu', name: 'चाक्षुष', subtitle: 'अनु पुत्र', parent: 'anu_yayati_chandra', yug: 'treta', parichay: 'पुराणों में इनके आगे के वंश का वर्णन उपलब्ध नहीं है।' },
    { id: 'paroksha_anu', name: 'परोक्ष (परमेक्षु)', subtitle: 'अनु पुत्र', parent: 'anu_yayati_chandra', yug: 'treta', parichay: 'पुराणों में इनके आगे के वंश का वर्णन उपलब्ध नहीं है।' },
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
    { id: 'sudeshna_bali_wife_chandra', name: 'सुदेष्णा', subtitle: 'राजा बलि की पत्नी', parent: '', spouseOf: 'bali_anu', yug: 'treta' },

    // बलि के ५ क्षेत्रज पुत्र (अंग, वंग, कलिंग, पुण्ड्र, सुह्म) - जैविक पिता दीर्घतमा (brahma-base में), पालक/राजकीय पिता बलि
    { id: 'anga_anu', name: 'अंग', subtitle: 'अंग देश संस्थापक', parent: 'bali_anu', mother: 'sudeshna_bali_wife_chandra', yug: 'treta', parichay: 'इन्होंने अंग देश (वर्तमान भागलपुर, बिहार) की स्थापना की। कर्ण बाद में इसी अंग देश के राजा बने।' },
    { id: 'vanga_anu', name: 'वंग', subtitle: 'वंग देश संस्थापक', parent: 'bali_anu', mother: 'sudeshna_bali_wife_chandra', yug: 'treta', parichay: 'इन्होंने वंग देश (वर्तमान बंगाल) की स्थापना की।' },
    { id: 'kalinga_anu', name: 'कलिंग', subtitle: 'कलिंग देश संस्थापक', parent: 'bali_anu', mother: 'sudeshna_bali_wife_chandra', yug: 'treta', parichay: 'इन्होंने कलिंग देश (वर्तमान ओडिशा) की स्थापना की।' },
    { id: 'pundra_anu', name: 'पुण्ड्र', subtitle: 'पुण्ड्र देश संस्थापक', parent: 'bali_anu', mother: 'sudeshna_bali_wife_chandra', yug: 'treta' },
    { id: 'suhma_anu', name: 'सुह्म', subtitle: 'सुह्म देश संस्थापक', parent: 'bali_anu', mother: 'sudeshna_bali_wife_chandra', yug: 'treta' },

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
    { id: 'radha_karna_chandra', name: 'राधा', subtitle: 'अधिरथ की पत्नी', parent: '', spouseOf: 'adhiratha_anu', yug: 'dwapar', parichay: 'कर्ण की पालक माता, जिनके नाम पर कर्ण को "राधेय" कहा गया।' },
    { id: 'shon_anu', name: 'शोण', subtitle: 'अधिरथ-राधा पुत्र', parent: 'adhiratha_anu', mother: 'radha_karna_chandra', yug: 'dwapar', parichay: 'कर्ण के छोटे भाई (पालक)।' },

    // --- कर्ण और उसका परिवार ---
    { id: 'karna_chandra', name: 'कर्ण', subtitle: 'अंगराज / सूर्य पुत्र', parent: 'adhiratha_anu', mother: 'radha_karna_chandra', yug: 'dwapar', parichay: 'जैविक माता-पिता कुंती और सूर्यदेव। पालक माता-पिता राधा और अधिरथ। दुर्योधन ने इन्हें अंग देश का राजा बनाया।' },
    { id: 'vrushali_chandra', name: 'वृषाली', subtitle: 'कर्ण की प्रथम पत्नी', parent: '', spouseOf: 'karna_chandra', yug: 'dwapar', clusterName: 'कर्ण की पत्नियाँ' },
    { id: 'supriya_chandra', name: 'सुप्रिया', subtitle: 'कर्ण की द्वितीय पत्नी', parent: '', spouseOf: 'karna_chandra', yug: 'dwapar', clusterName: 'कर्ण की पत्नियाँ' },

    { id: 'karna_sons_proxy', name: 'कर्ण के पुत्र', subtitle: 'वृषसेन आदि 9 पुत्र', isProxy: true, parent: 'karna_chandra', clusterName: 'कर्ण के पुत्र', yug: 'dwapar' },
    { id: 'vrishasena_karna_chandra', name: 'वृषसेन', subtitle: 'कर्ण पुत्र', parent: 'karna_chandra', mother: 'vrushali_chandra', yug: 'dwapar' , clusterName: 'कर्ण के पुत्र' },
    { id: 'chitrasena_karna_chandra', name: 'चित्रसेन', subtitle: 'कर्ण पुत्र', parent: 'karna_chandra', mother: 'vrushali_chandra', yug: 'dwapar' , clusterName: 'कर्ण के पुत्र' },
    { id: 'satyasena_karna_chandra', name: 'सत्यसेन', subtitle: 'कर्ण पुत्र', parent: 'karna_chandra', mother: 'vrushali_chandra', yug: 'dwapar' , clusterName: 'कर्ण के पुत्र' },
    { id: 'sushena_karna_chandra', name: 'सुषेण', subtitle: 'कर्ण पुत्र', parent: 'karna_chandra', mother: 'vrushali_chandra', yug: 'dwapar' , clusterName: 'कर्ण के पुत्र' },
    { id: 'shatrunjaya_karna_chandra', name: 'शत्रुंजय', subtitle: 'कर्ण पुत्र', parent: 'karna_chandra', mother: 'vrushali_chandra', yug: 'dwapar' , clusterName: 'कर्ण के पुत्र' },
    { id: 'dvipata_karna_chandra', name: 'द्विपात', subtitle: 'कर्ण पुत्र', parent: 'karna_chandra', mother: 'vrushali_chandra', yug: 'dwapar' , clusterName: 'कर्ण के पुत्र' },
    { id: 'prasena_karna_chandra', name: 'प्रसेन', subtitle: 'कर्ण पुत्र', parent: 'karna_chandra', mother: 'supriya_chandra', yug: 'dwapar' , clusterName: 'कर्ण के पुत्र' },
    { id: 'banasena_karna_chandra', name: 'बाणसेन', subtitle: 'कर्ण पुत्र', parent: 'karna_chandra', mother: 'supriya_chandra', yug: 'dwapar' , clusterName: 'कर्ण के पुत्र' },

    // --- पुरुरवा के अन्य पुत्र (अमावसु / विजय वंश - कान्यकुब्ज/कन्नौज) ---
        { id: 'amavasu_vansh_proxy', name: 'अमावसु (विजय) वंश', subtitle: 'अमावसु के वंशज', parent: 'pururava_chandra', yug: 'satya', clusterName: 'अमावसु (विजय) वंश', isProxy: true },
    { id: 'amavasu_chandra', name: 'अमावसु (विजय)', subtitle: 'कान्यकुब्ज के संस्थापक',parent: 'amavasu_vansh_proxy', mother: 'urvashi_chandra', yug: 'satya' , clusterName: 'अमावसु (विजय) वंश' },
    { id: 'bhima_amavasu_chandra', name: 'भीम', subtitle: 'अमावसु पुत्र', parent: 'amavasu_vansh_proxy', yug: 'satya' , clusterName: 'अमावसु (विजय) वंश' },
    { id: 'kanchana_chandra', name: 'कांचन', subtitle: 'भीम पुत्र', parent: 'bhima_amavasu_chandra', yug: 'satya' , clusterName: 'अमावसु (विजय) वंश' },
    { id: 'suhotra_amavasu_chandra', name: 'सुहोत्र', subtitle: 'कांचन पुत्र', parent: 'kanchana_chandra', yug: 'satya' , clusterName: 'अमावसु (विजय) वंश' },
    { id: 'jahnu_chandra', name: 'जह्नु', subtitle: 'जाह्नवी (गंगा) के पिता', parent: 'suhotra_amavasu_chandra', yug: 'satya', parichay: 'इन्होंने अपने तपोबल से संपूर्ण गंगा को पी लिया था, बाद में भगीरथ के प्रार्थना करने पर कान से निकाला। इसलिए गंगा को जाह्नवी कहा गया।' , clusterName: 'अमावसु (विजय) वंश' },
    { id: 'sunaha_chandra', name: 'सुनह', subtitle: 'जह्नु पुत्र', parent: 'jahnu_chandra', yug: 'satya' , clusterName: 'अमावसु (विजय) वंश' },
    { id: 'ajaka_chandra', name: 'अजक', subtitle: 'सुनह पुत्र', parent: 'sunaha_chandra', yug: 'satya' , clusterName: 'अमावसु (विजय) वंश' },
    { id: 'balakashva_chandra', name: 'बलाकश्व', subtitle: 'अजक पुत्र', parent: 'ajaka_chandra', yug: 'satya' , clusterName: 'अमावसु (विजय) वंश' },
    { id: 'kusha_amavasu_chandra', name: 'कुश', subtitle: 'बलाकश्व पुत्र', parent: 'balakashva_chandra', yug: 'satya' , clusterName: 'अमावसु (विजय) वंश' },
    { id: 'kushanabha_chandra', name: 'कुशनाभ', subtitle: 'कुश पुत्र', parent: 'kusha_amavasu_chandra', yug: 'treta' , clusterName: 'अमावसु (विजय) वंश' },
    { id: 'kushamba_chandra', name: 'कुशाम्ब', subtitle: 'कुश पुत्र', parent: 'kusha_amavasu_chandra', yug: 'treta' , clusterName: 'अमावसु (विजय) वंश' },
    { id: 'amurtarajas_chandra', name: 'अमूर्तरजस', subtitle: 'कुश पुत्र', parent: 'kusha_amavasu_chandra', yug: 'treta' , clusterName: 'अमावसु (विजय) वंश' },
    { id: 'vasu_amavasu_chandra', name: 'वसु', subtitle: 'कुश पुत्र', parent: 'kusha_amavasu_chandra', yug: 'treta' , clusterName: 'अमावसु (विजय) वंश' },
    { id: 'gadhi_chandra', name: 'गाधि', subtitle: 'कुशनाभ पुत्र', parent: 'kushanabha_chandra', yug: 'treta' , clusterName: 'अमावसु (विजय) वंश' },
    { id: 'satyavati_gadhi_chandra', name: 'सत्यवती', subtitle: 'गाधि पुत्री', parent: 'gadhi_chandra', spouseOf: 'ruchika', yug: 'treta', parichay: 'राजा गाधि की पुत्री, जिनका विवाह भृगुवंशी महर्षि ऋचीक से हुआ था। ये जमदग्नि की माता थीं।' , clusterName: 'अमावसु (विजय) वंश' },
    { id: 'vishwamitra_chandra', name: 'विश्वामित्र', subtitle: 'ब्रह्मर्षि', parent: 'gadhi_chandra', yug: 'treta', parichay: 'जन्म से क्षत्रिय राजा थे, परन्तु वशिष्ठ ऋषि से विवाद के बाद घोर तपस्या कर ब्रह्मर्षि का पद प्राप्त किया। गायत्री मंत्र के द्रष्टा।' , clusterName: 'अमावसु (विजय) वंश' },

    { id: 'menaka_apsara_chandra', name: 'मेनका', subtitle: 'अप्सरा', parent: '', spouseOf: 'vishwamitra_chandra', yug: 'treta' , clusterName: 'अमावसु (विजय) वंश' },
    { id: 'shakuntala_vishwamitra_chandra', name: 'शकुंतला', subtitle: 'विश्वामित्र पुत्री', parent: 'vishwamitra_chandra', mother: 'menaka_apsara_chandra', yug: 'treta', parichay: 'इनका विवाह पौरव वंशी राजा दुष्यंत से हुआ और इन्होने भरत को जन्म दिया।' , clusterName: 'अमावसु (विजय) वंश' },
    { id: 'shunahshepa_chandra', name: 'शुनःशेप (देवरथ)', subtitle: 'दत्तक पुत्र', parent: 'vishwamitra_chandra', yug: 'treta', parichay: 'महर्षि ऋचीक के पुत्र जिन्हें हरिश्चंद्र के यज्ञ में बलि के लिए ख़रीदा गया था, पर विश्वामित्र ने इन्हें बचाया और अपना ज्येष्ठ पुत्र (देवरथ) बना लिया।' , clusterName: 'अमावसु (विजय) वंश' },
    { id: 'madhucchandas_chandra', name: 'मधुच्छंदस', subtitle: 'विश्वामित्र पुत्र', parent: 'vishwamitra_chandra', yug: 'treta' , clusterName: 'अमावसु (विजय) वंश' },
    { id: 'ashtaka_chandra', name: 'अष्टक', subtitle: 'विश्वामित्र पुत्र', parent: 'vishwamitra_chandra', yug: 'treta' , clusterName: 'अमावसु (विजय) वंश' },
    { id: 'galava_chandra', name: 'गालव', subtitle: 'विश्वामित्र पुत्र / शिष्य', parent: 'vishwamitra_chandra', yug: 'treta' , clusterName: 'अमावसु (विजय) वंश' },

    // --- गाहड़वाल (राठौर) वंश - कन्नौज (मध्यकालीन कान्यकुब्ज) ---
    { id: 'gahadavala_dynasty_proxy', name: 'गाहड़वाल वंश', subtitle: 'कन्नौज राजवंश', parent: 'vishwamitra_chandra', yug: 'kali', clusterName: 'गाहड़वाल वंश', isProxy: true, parichay: 'कान्यकुब्ज (कन्नौज) के प्राचीन वंश के पतन के बाद मध्यकाल में गाहड़वाल वंश का उदय हुआ जो स्वयं को इसी प्राचीन चंद्रवंशी शाखा से जोड़ते हैं।' },
    { id: 'chandradeva_gahadavala', name: 'चन्द्रदेव', subtitle: 'गाहड़वाल संस्थापक', parent: 'gahadavala_dynasty_proxy', yug: 'kali', clusterName: 'गाहड़वाल वंश' },
    { id: 'madanapala_gahadavala', name: 'मदनपाल', subtitle: 'कन्नौज नरेश', parent: 'chandradeva_gahadavala', yug: 'kali', clusterName: 'गाहड़वाल वंश' },
    { id: 'govindachandra_gahadavala', name: 'गोविन्दचन्द्र', subtitle: 'कन्नौज नरेश', parent: 'madanapala_gahadavala', yug: 'kali', clusterName: 'गाहड़वाल वंश' },
    { id: 'vijayachandra_gahadavala', name: 'विजयचन्द्र', subtitle: 'कन्नौज नरेश', parent: 'govindachandra_gahadavala', yug: 'kali', clusterName: 'गाहड़वाल वंश' },
    { id: 'jaichand_gahadavala', name: 'जयचंद', subtitle: 'कन्नौज नरेश', parent: 'vijayachandra_gahadavala', yug: 'kali', clusterName: 'गाहड़वाल वंश', parichay: 'पृथ्वीराज चौहान के समकालीन कन्नौज के प्रतापी राजा। इनकी पुत्री संयोगिता थी।' },
    { id: 'harishchandra_gahadavala', name: 'हरिश्चन्द्र', subtitle: 'कन्नौज नरेश', parent: 'jaichand_gahadavala', yug: 'kali', clusterName: 'गाहड़वाल वंश' },




    // --- यदुवंश (यदु के पुत्र) ---
    { id: 'sahasrajit_yadu', name: 'सहस्रजित', subtitle: 'यदु पुत्र (हैहय वंश के मूल)', parent: 'yadu_vansh_proxy', yug: 'treta' , clusterName: 'यदु वंश' },
    { id: 'kroshtu_yadu', name: 'क्रोष्टु', subtitle: 'यदु पुत्र (वृष्णि/अंधक वंश के मूल)', parent: 'yadu_vansh_proxy', yug: 'treta' , clusterName: 'यदु वंश' },
    { id: 'nala_yadu', name: 'नल', subtitle: 'यदु पुत्र', parent: 'yadu_vansh_proxy', yug: 'treta' , clusterName: 'यदु वंश' },
    { id: 'ripu_yadu', name: 'रिपु', subtitle: 'यदु पुत्र', parent: 'yadu_vansh_proxy', yug: 'treta' , clusterName: 'यदु वंश' },

    // --- हैहय वंश (सहस्रजित की शाखा) ---
    { id: 'shatajit_haihaya', name: 'शतजित', subtitle: 'सहस्रजित पुत्र', parent: 'sahasrajit_yadu', yug: 'treta' },
        { id: 'haihaya_dynasty_proxy', name: 'हैहय वंश', subtitle: 'हैहय के वंशज', parent: 'shatajit_haihaya', yug: 'treta', clusterName: 'हैहय वंश', isProxy: true },
    { id: 'haihaya_chandra', name: 'हैहय', subtitle: 'हैहय वंश के संस्थापक', parent: 'haihaya_dynasty_proxy', clusterName: 'हैहय वंश', yug: 'treta' },
    { id: 'dharma_haihaya', name: 'धर्म', subtitle: 'हैहय पुत्र', parent: 'haihaya_chandra', yug: 'treta' },
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
    { id: 'kartavirya_arjuna_chandra', name: 'कार्तवीर्य अर्जुन', subtitle: 'सहस्रबाहु', parent: 'kritavirya_haihaya', yug: 'treta', parichay: 'दत्तात्रेय के वरदान से इन्हें 1000 भुजाएं प्राप्त थीं। इनका वध भगवान परशुराम ने किया था।' },
    { id: 'jayadhvaja_haihaya', name: 'जयध्वज', subtitle: 'कार्तवीर्य पुत्र', parent: 'kartavirya_arjuna_chandra', yug: 'treta' },
    { id: 'shurasena_haihaya', name: 'शूरसेन', subtitle: 'कार्तवीर्य पुत्र', parent: 'kartavirya_arjuna_chandra', yug: 'treta' },
    { id: 'vrishabha_haihaya', name: 'वृषभ', subtitle: 'कार्तवीर्य पुत्र', parent: 'kartavirya_arjuna_chandra', yug: 'treta' },
    { id: 'madhu_haihaya', name: 'मधु', subtitle: 'कार्तवीर्य पुत्र', parent: 'kartavirya_arjuna_chandra', yug: 'treta' },
    { id: 'urjita_haihaya', name: 'ऊर्जित', subtitle: 'कार्तवीर्य पुत्र', parent: 'kartavirya_arjuna_chandra', yug: 'treta' },
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
    { id: 'shaibya_jyamagha_chandra', name: 'शैव्या', subtitle: 'ज्याघम की पत्नी', parent: '', spouseOf: 'jyamagha_yadu', yug: 'treta' },

    // --- विदर्भ वंश ---
    { id: 'vidarbha_yadu', name: 'विदर्भ', subtitle: 'विदर्भ देश के संस्थापक', parent: 'jyamagha_yadu', mother: 'shaibya_jyamagha_chandra', yug: 'treta' },
    { id: 'kratha_yadu', name: 'क्रथ', subtitle: 'विदर्भ पुत्र', parent: 'vidarbha_yadu', yug: 'treta' },
    { id: 'kaushika_yadu', name: 'कौशिक', subtitle: 'विदर्भ पुत्र', parent: 'vidarbha_yadu', yug: 'treta' },
    { id: 'romapada_yadu', name: 'रोमपाद', subtitle: 'विदर्भ पुत्र', parent: 'vidarbha_yadu', yug: 'treta' },
    { id: 'kunti_kratha_chandra', name: 'कुंती', subtitle: 'क्रथ पुत्र', parent: 'kratha_yadu', yug: 'treta' },
    { id: 'vrishni_kratha_chandra', name: 'वृष्णि (प्रथम)', subtitle: 'कुंती पुत्र', parent: 'kunti_kratha_chandra', yug: 'treta' },
    { id: 'nirvriti_yadu', name: 'निर्वृति', subtitle: 'वृष्णि पुत्र', parent: 'vrishni_kratha_chandra', yug: 'treta' },
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

    { id: 'satvata_sons_proxy', name: 'सात्वत के पुत्र', subtitle: 'अंधक, वृष्णि आदि 7 पुत्र', isProxy: true, parent: 'satvata_yadu', clusterName: 'सात्वत के पुत्र', yug: 'dwapar' },
    { id: 'bhajina_satvata', name: 'भजिन', subtitle: 'सात्वत पुत्र', parent: 'satvata_yadu', yug: 'dwapar' , clusterName: 'सात्वत के पुत्र' },
    { id: 'bhajamana_satvata', name: 'भजमान', subtitle: 'सात्वत पुत्र', parent: 'satvata_yadu', yug: 'dwapar' , clusterName: 'सात्वत के पुत्र' },
    { id: 'divya_satvata', name: 'दिव्य', subtitle: 'सात्वत पुत्र', parent: 'satvata_yadu', yug: 'dwapar' , clusterName: 'सात्वत के पुत्र' },
    { id: 'andhaka_satvata', name: 'अंधक', subtitle: 'अंधक वंश के मूल', parent: 'satvata_yadu', yug: 'dwapar' , clusterName: 'सात्वत के पुत्र' },
    { id: 'devavridha_satvata', name: 'देववृध', subtitle: 'सात्वत पुत्र', parent: 'satvata_yadu', yug: 'dwapar' , clusterName: 'सात्वत के पुत्र' },
    { id: 'mahabhoja_satvata', name: 'महाभोज', subtitle: 'सात्वत पुत्र', parent: 'satvata_yadu', yug: 'dwapar' , clusterName: 'सात्वत के पुत्र' },
    { id: 'kuntibhoja_chandra', name: 'कुंतीभोज', subtitle: 'भोज नरेश', parent: 'mahabhoja_satvata', yug: 'dwapar', clusterName: 'सात्वत के पुत्र', parichay: 'भोज वंशीय नरेश जिन्होंने शूरसेन की पुत्री पृथा (कुंती) को गोद लिया था।' },

    { id: 'vrishni_satvata', name: 'वृष्णि (द्वितीय)', subtitle: 'वृष्णि वंश के मूल', parent: 'satvata_yadu', yug: 'dwapar' , clusterName: 'सात्वत के पुत्र' },

    // --- अंधक वंश (उग्रसेन, कंस) ---
    { id: 'kukura_andhaka', name: 'कुकुर', subtitle: 'अंधक पुत्र', parent: 'andhaka_satvata', yug: 'dwapar' },
        { id: 'andhaka_dynasty_proxy', name: 'अन्धक वंश', subtitle: 'अन्धक के वंशज', parent: 'andhaka_satvata', yug: 'dwapar', clusterName: 'अन्धक वंश', isProxy: true },
    { id: 'bhajamana_andhaka', name: 'भजमान', subtitle: 'अंधक पुत्र', parent: 'andhaka_dynasty_proxy', yug: 'dwapar' , clusterName: 'अन्धक वंश' },
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
    { id: 'kamsa_ugrasen_chandra', name: 'कंस', subtitle: 'उग्रसेन पुत्र', parent: 'ugrasen_kukura', yug: 'dwapar' },
    { id: 'devaki_devaka_chandra', name: 'देवकी', subtitle: 'देवक पुत्री', parent: 'devaka_kukura', spouseOf: 'vasudev_chandra', yug: 'dwapar' },

    // --- सत्राजित (सत्यभामा के पिता) - अंधक वंश की भजमान शाखा से ---
    { id: 'viduratha_bhajamana_chandra', name: 'विदूरथ', subtitle: 'भजमान (अंधक) पुत्र', parent: 'bhajamana_andhaka', yug: 'dwapar' },
    { id: 'shura_viduratha_chandra', name: 'शूर', subtitle: 'विदूरथ पुत्र', parent: 'viduratha_bhajamana_chandra', yug: 'dwapar' },
    { id: 'shini_shura_chandra', name: 'शिनि', subtitle: 'शूर पुत्र', parent: 'shura_viduratha_chandra', yug: 'dwapar' },
    { id: 'svayambhoja_shini_chandra', name: 'स्वयंभोज', subtitle: 'शिनि पुत्र', parent: 'shini_shura_chandra', yug: 'dwapar' },
    { id: 'hridika_svayambhoja_chandra', name: 'हृदिक', subtitle: 'स्वयंभोज पुत्र', parent: 'svayambhoja_shini_chandra', yug: 'dwapar' },
    { id: 'devamidha_hridika_chandra', name: 'देवमीढ', subtitle: 'हृदिक पुत्र', parent: 'hridika_svayambhoja_chandra', yug: 'dwapar' },
    { id: 'shatadhanva_hridika_chandra', name: 'शतधन्वा', subtitle: 'हृदिक पुत्र', parent: 'hridika_svayambhoja_chandra', yug: 'dwapar' },
    { id: 'kritavarma_hridika_chandra', name: 'कृतवर्मा', subtitle: 'हृदिक पुत्र', parent: 'hridika_svayambhoja_chandra', yug: 'dwapar' },
    { id: 'anamitra_hridika_chandra', name: 'अनमित्र', subtitle: 'हृदिक पुत्र', parent: 'hridika_svayambhoja_chandra', yug: 'dwapar' },
    { id: 'shini_anamitra_chandra', name: 'शिनि', subtitle: 'अनमित्र पुत्र', parent: 'anamitra_hridika_chandra', yug: 'dwapar' },
    { id: 'satyaka_chandra', name: 'सत्यक', subtitle: 'शिनि पुत्र', parent: 'shini_anamitra_chandra', yug: 'dwapar' },
    { id: 'satyaki_chandra', name: 'सात्यकि (युयुधान)', subtitle: 'सत्यक पुत्र', parent: 'satyaka_chandra', yug: 'dwapar', parichay: 'वृष्णि वंशीय यादव वीर और अर्जुन के शिष्य। महाभारत में पांडवों की ओर से लड़े।' },
    { id: 'asanga_satyaki_chandra', name: 'असंग', subtitle: 'सात्यकि पुत्र', parent: 'satyaki_chandra', yug: 'dwapar' },
    { id: 'yugandhara_asanga_chandra', name: 'युगन्धर', subtitle: 'असंग पुत्र', parent: 'asanga_satyaki_chandra', yug: 'dwapar' },

    { id: 'nighna_anamitra_chandra', name: 'निघ्न', subtitle: 'अनमित्र पुत्र', parent: 'anamitra_hridika_chandra', yug: 'dwapar' },
    { id: 'satrajit_nighna_chandra', name: 'सत्राजित', subtitle: 'निघ्न पुत्र (स्यमंतक मणि धारक)', parent: 'nighna_anamitra_chandra', yug: 'dwapar' },
    { id: 'prasena_nighna_chandra', name: 'प्रसेन', subtitle: 'निघ्न पुत्र', parent: 'nighna_anamitra_chandra', yug: 'dwapar' },

    // --- वृष्णि वंश (वसुदेव - कृष्ण) ---
        { id: 'vrishni_dynasty_proxy', name: 'वृष्णि वंश', subtitle: 'वृष्णि के वंशज', parent: 'vrishni_satvata', yug: 'dwapar', clusterName: 'वृष्णि वंश', isProxy: true },
    { id: 'shvaphalaka_vrishni', name: 'श्वफल्क', subtitle: 'वृष्णि वंश', parent: 'vrishni_dynasty_proxy', clusterName: 'वृष्णि वंश', yug: 'dwapar' },
    { id: 'akrura_chandra', name: 'अक्रूर', subtitle: 'श्वफल्क पुत्र', parent: 'shvaphalaka_vrishni', yug: 'dwapar', clusterName: 'वृष्णि वंश', parichay: 'श्रीकृष्ण के चाचा, जो कृष्ण और बलराम को गोकुल से मथुरा लाए थे। ये स्यमंतक मणि के धारक भी रहे।' },

    { id: 'ugraseni_chandra', name: 'उग्रसेनी', subtitle: 'उग्रसेन पुत्री / अक्रूर पत्नी', parent: 'ugrasen_kukura', spouseOf: 'akrura_chandra', yug: 'dwapar' },
    { id: 'sudeva_akrura_chandra', name: 'सुदेव', subtitle: 'अक्रूर पुत्र', parent: 'akrura_chandra', mother: 'ugraseni_chandra', yug: 'dwapar' },
    { id: 'upadeva_akrura_chandra', name: 'उपदेव', subtitle: 'अक्रूर पुत्र', parent: 'akrura_chandra', mother: 'ugraseni_chandra', yug: 'dwapar' },
    { id: 'varshney_dynasty_proxy', name: 'वार्ष्णेय (बारहसैनी) वंश', subtitle: 'अक्रूर के वंशज', parent: 'sudeva_akrura_chandra', yug: 'kali', clusterName: 'वार्ष्णेय वंश', isProxy: true, parichay: 'आधुनिक वार्ष्णेय समाज (बारहसैनी) स्वयं को अक्रूर जी का वंशज मानता है। यह मुख्य रूप से मथुरा, अलीगढ़ और पश्चिमी उत्तर प्रदेश में निवास करते हैं।' },


    { id: 'devamidhusha_vrishni', name: 'देवमीढुष', subtitle: 'वृष्णि पुत्र', parent: 'vrishni_dynasty_proxy', clusterName: 'वृष्णि वंश', yug: 'dwapar' },
    { id: 'shurasen_chandra', name: 'शूरसेन (शूर)', subtitle: 'देवमीढुष पुत्र', parent: 'devamidhusha_vrishni', yug: 'dwapar' , clusterName: 'वृष्णि वंश' },
    { id: 'marisha_shurasen_chandra', name: 'मारिषा', subtitle: 'शूरसेन पत्नी', parent: '', spouseOf: 'shurasen_chandra', yug: 'dwapar' , clusterName: 'वृष्णि वंश' },

    // शूरसेन के पुत्र-पुत्रियां
    { id: 'vasudev_chandra', name: 'वसुदेव (आनकदुन्दुभि)', subtitle: 'कृष्ण के पिता', parent: 'shurasen_chandra', mother: 'marisha_shurasen_chandra', yug: 'dwapar' , clusterName: 'वृष्णि वंश' },
    { id: 'kunti_chandra', name: 'पृथा (कुंती)', subtitle: 'शूरसेन पुत्री', parent: 'shurasen_chandra', mother: 'marisha_shurasen_chandra', spouseOf: 'pandu_chandra', yug: 'dwapar', parichay: 'इन्हें कुंतीभोज ने गोद लिया था। इनका विवाह पांडु से हुआ।' , clusterName: 'वृष्णि वंश' },
    { id: 'shrutasrava_chandra', name: 'श्रुतश्रवा', subtitle: 'शूरसेन पुत्री', parent: 'shurasen_chandra', mother: 'marisha_shurasen_chandra', spouseOf: 'damaghosha_chandra', yug: 'dwapar', parichay: 'चेदि नरेश दमघोष की पत्नी और शिशुपाल की माता।' , clusterName: 'वृष्णि वंश' },

    // नन्द बाबा (गोकुल)
    { id: 'parjanya_gopa_chandra', name: 'पर्जन्य', subtitle: 'गोप', parent: '', yug: 'dwapar', clusterName: 'नन्द परिवार' },
    { id: 'nanda_chandra', name: 'नंद बाबा', subtitle: 'कृष्ण के पालक पिता', parent: 'parjanya_gopa_chandra', yug: 'dwapar', clusterName: 'नन्द परिवार' },
    { id: 'yashoda_chandra', name: 'यशोदा', subtitle: 'कृष्ण की पालक माता', parent: '', spouseOf: 'nanda_chandra', yug: 'dwapar', clusterName: 'नन्द परिवार' },

    // वसुदेव की पत्नियां
    { id: 'rohini_vasudev_chandra', name: 'रोहिणी', subtitle: 'वसुदेव पत्नी', parent: '', spouseOf: 'vasudev_chandra', yug: 'dwapar', clusterName: 'वृष्णि वंश' },

    // वसुदेव के पुत्र
    { id: 'balram_chandra', name: 'बलराम (संकर्षण)', subtitle: 'शेषनाग अवतार', parent: 'vasudev_chandra', mother: 'rohini_vasudev_chandra', yug: 'dwapar' },
    { id: 'revati_balram_chandra', name: 'रेवती', subtitle: 'बलराम पत्नी', parent: '', spouseOf: 'balram_chandra', yug: 'dwapar' },

    { id: 'krishna_chandra', name: 'कृष्ण (वासुदेव)', subtitle: 'पूर्णावतार', parent: 'vasudev_chandra', mother: 'devaki_devaka_chandra', yug: 'dwapar', parichay: 'भगवान विष्णु के पूर्णावतार। नन्द बाबा और यशोदा ने गोकुल में इनका पालन किया।' , clusterName: 'वृष्णि वंश' },
    { id: 'subhadra_chandra', name: 'सुभद्रा', subtitle: 'कृष्ण की बहन', parent: 'vasudev_chandra', mother: 'rohini_vasudev_chandra', spouseOf: 'arjun_chandra', yug: 'dwapar' },

    // --- श्रीकृष्ण का परिवार ---
    // अष्टभार्या
    { id: 'rukmini_krishna_chandra', name: 'रुक्मिणी', subtitle: 'श्रीकृष्ण की प्रथम पत्नी (लक्ष्मी अवतार)', parent: 'bhishmaka_chandra', spouseOf: 'krishna_chandra', yug: 'dwapar', clusterName: 'वृष्णि वंश' },
    { id: 'satyabhama_krishna_chandra', name: 'सत्यभामा', subtitle: 'श्रीकृष्ण की पत्नी (भूदेवी)', parent: 'satrajit_nighna_chandra', spouseOf: 'krishna_chandra', yug: 'dwapar', clusterName: 'वृष्णि वंश' },
    { id: 'jambavati_chandra', name: 'जाम्बवती', subtitle: 'श्रीकृष्ण की पत्नी', parent: 'jambavan', spouseOf: 'krishna_chandra', yug: 'dwapar', clusterName: 'अष्टभार्या', parichay: 'जाम्बवान की पुत्री।' },
    { id: 'kalindi_krishna_chandra', name: 'कालिंदी', subtitle: 'श्रीकृष्ण की पत्नी', parent: 'surya', spouseOf: 'krishna_chandra', yug: 'dwapar', clusterName: 'वृष्णि वंश' },
    { id: 'mitravinda_krishna_chandra', name: 'मित्रविन्दा', subtitle: 'श्रीकृष्ण की पत्नी', parent: '', spouseOf: 'krishna_chandra', yug: 'dwapar', clusterName: 'वृष्णि वंश' },
    { id: 'nagnajiti_krishna_chandra', name: 'नग्नजिती (सत्या)', subtitle: 'श्रीकृष्ण की पत्नी', parent: '', spouseOf: 'krishna_chandra', yug: 'dwapar', clusterName: 'वृष्णि वंश' },
    { id: 'bhadra_krishna_chandra', name: 'भद्रा', subtitle: 'श्रीकृष्ण की पत्नी', parent: '', spouseOf: 'krishna_chandra', yug: 'dwapar', clusterName: 'वृष्णि वंश' },
    { id: 'lakshmana_krishna_chandra', name: 'लक्ष्मणा', subtitle: 'श्रीकृष्ण की पत्नी', parent: '', spouseOf: 'krishna_chandra', yug: 'dwapar', clusterName: 'वृष्णि वंश' },

    // श्रीकृष्ण के पुत्र (प्रद्युम्न, साम्ब आदि)
    { id: 'pradyumna_chandra', name: 'प्रद्युम्न', subtitle: 'कामदेव अवतार', parent: 'krishna_chandra', mother: 'rukmini_krishna_chandra', yug: 'dwapar' , clusterName: 'वृष्णि वंश' },
    { id: 'charudeshna_chandra', name: 'चारुदेष्ण', subtitle: 'कृष्ण पुत्र', parent: 'krishna_chandra', mother: 'rukmini_krishna_chandra', yug: 'dwapar' },
    { id: 'samba_krishna_chandra', name: 'साम्ब', subtitle: 'कृष्ण पुत्र', parent: 'krishna_chandra', mother: 'jambavati_chandra', yug: 'dwapar' },

    // प्रद्युम्न का वंश
    { id: 'rukmavati_pradyumna_chandra', name: 'रुक्मवती', subtitle: 'रुक्मी पुत्री', parent: 'rukmi_vidarbha_chandra', spouseOf: 'pradyumna_chandra', yug: 'dwapar' },
    { id: 'aniruddha_chandra', name: 'अनिरुद्ध', subtitle: 'प्रद्युम्न पुत्र', parent: 'pradyumna_chandra', mother: 'rukmavati_pradyumna_chandra', yug: 'dwapar' , clusterName: 'वृष्णि वंश' },
    { id: 'rochana_aniruddha_chandra', name: 'रोचना', subtitle: 'रुक्मी की पौत्री', parent: '', spouseOf: 'aniruddha_chandra', yug: 'dwapar' },

    // कलियुग के यादव (वज्रनाभ आदि)
    { id: 'vajranabha_chandra', name: 'वज्रनाभ', subtitle: 'मथुरा नरेश', parent: 'aniruddha_chandra', mother: 'rochana_aniruddha_chandra', yug: 'kali', parichay: 'यदुवंश के नाश के बाद अर्जुन ने इन्हें मथुरा (इन्द्रप्रस्थ मंडल) का राजा बनाया था।' },
    { id: 'pratibahu_vajranabha_chandra', name: 'प्रतिबाहु', subtitle: 'वज्रनाभ पुत्र', parent: 'vajranabha_chandra', yug: 'kali' },
    { id: 'subahu_pratibahu_chandra', name: 'सुबाहु', subtitle: 'प्रतिबाहु पुत्र', parent: 'pratibahu_vajranabha_chandra', yug: 'kali' },
    { id: 'shantasena_subahu_chandra', name: 'शान्तसेन', subtitle: 'सुबाहु पुत्र', parent: 'subahu_pratibahu_chandra', yug: 'kali' },
    { id: 'shatasena_shantasena_chandra', name: 'शतसेन', subtitle: 'शान्तसेन पुत्र', parent: 'shantasena_subahu_chandra', yug: 'kali' },

    // --- यदुवंश (कलियुग - मध्यकालीन और आधुनिक राजवंश) ---
    // ऐतिहासिक अंतराल (Historical Gap) के बाद के मुख्य राजवंश
    { id: 'yaduvansh_medieval_link_chandra', name: 'ऐतिहासिक अंतराल', subtitle: 'अज्ञात पीढ़ियाँ', parent: 'shatasena_shantasena_chandra', yug: 'kali', parichay: 'पुराणों में वर्णित शतसेन के बाद और मध्यकालीन राजवंशों के उदय के बीच कई शताब्दियों का अंतराल है।' },

    // --- जादौन (करौली) और भाटी (जैसलमेर) का मूल ---
    { id: 'dharmapala_yaduvanshi_chandra', name: 'धर्मपाल', subtitle: 'जादौन / भाटी मूल', parent: 'yaduvansh_medieval_link_chandra', yug: 'kali' },

    // --- भाटी राजवंश (जैसलमेर) ---
    { id: 'bhatti_rao_chandra', name: 'भट्टी (भाटी)', subtitle: 'भाटी वंश के संस्थापक', parent: 'dharmapala_yaduvanshi_chandra', yug: 'kali' },
    { id: 'bhati_dynasty_proxy', name: 'भाटी वंश', subtitle: 'जैसलमेर राजवंश', parent: 'bhatti_rao_chandra', yug: 'kali', clusterName: 'भाटी वंश', isProxy: true },
    { id: 'mangal_rao_bhati', name: 'मंगल राव', subtitle: 'भाटी नरेश', parent: 'bhatti_rao_chandra', yug: 'kali', clusterName: 'भाटी वंश' },
    { id: 'majam_rao_bhati', name: 'मजम राव', subtitle: 'भाटी नरेश', parent: 'mangal_rao_bhati', yug: 'kali', clusterName: 'भाटी वंश' },
    { id: 'kehar_1_bhati', name: 'केहर (प्रथम)', subtitle: 'भाटी नरेश', parent: 'majam_rao_bhati', yug: 'kali', clusterName: 'भाटी वंश' },
    { id: 'tano_bhati', name: 'तणू', subtitle: 'तणोट के संस्थापक', parent: 'kehar_1_bhati', yug: 'kali', clusterName: 'भाटी वंश' },
    { id: 'biji_ray_bhati', name: 'बिजी राय', subtitle: 'भाटी नरेश', parent: 'tano_bhati', yug: 'kali', clusterName: 'भाटी वंश' },
    { id: 'deoraj_bhati', name: 'देवराज (रावल)', subtitle: 'देरावर के संस्थापक', parent: 'biji_ray_bhati', yug: 'kali', clusterName: 'भाटी वंश' },
    { id: 'mund_bhati', name: 'मुंड', subtitle: 'भाटी नरेश', parent: 'deoraj_bhati', yug: 'kali', clusterName: 'भाटी वंश' },
    { id: 'bachera_bhati', name: 'बचेरा', subtitle: 'भाटी नरेश', parent: 'mund_bhati', yug: 'kali', clusterName: 'भाटी वंश' },
    { id: 'dusaj_bhati', name: 'दुसज', subtitle: 'भाटी नरेश', parent: 'bachera_bhati', yug: 'kali', clusterName: 'भाटी वंश' },
    { id: 'jaisal_bhati', name: 'रावल जैसल', subtitle: 'जैसलमेर के संस्थापक', parent: 'dusaj_bhati', yug: 'kali', parichay: '1156 ईस्वी में इन्होंने जैसलमेर शहर और किले की स्थापना की।', clusterName: 'भाटी वंश' },
    { id: 'salivahan_bhati', name: 'शालिवाहन', subtitle: 'जैसलमेर नरेश', parent: 'jaisal_bhati', yug: 'kali', clusterName: 'भाटी वंश' },
    { id: 'kelan_bhati', name: 'केलण', subtitle: 'जैसलमेर नरेश', parent: 'salivahan_bhati', yug: 'kali', clusterName: 'भाटी वंश' },
    { id: 'chachigdeo_bhati', name: 'चाचिगदेव', subtitle: 'जैसलमेर नरेश', parent: 'kelan_bhati', yug: 'kali', clusterName: 'भाटी वंश' },
    { id: 'karan_bhati', name: 'कर्ण', subtitle: 'जैसलमेर नरेश', parent: 'chachigdeo_bhati', yug: 'kali', clusterName: 'भाटी वंश' },
    { id: 'lakhsen_bhati', name: 'लाखसेन', subtitle: 'जैसलमेर नरेश', parent: 'karan_bhati', yug: 'kali', clusterName: 'भाटी वंश' },
    { id: 'punpal_bhati', name: 'पुनपाल', subtitle: 'जैसलमेर नरेश', parent: 'lakhsen_bhati', yug: 'kali', clusterName: 'भाटी वंश' },
    { id: 'jait_singh_bhati', name: 'जैत सिंह', subtitle: 'जैसलमेर नरेश', parent: 'punpal_bhati', yug: 'kali', clusterName: 'भाटी वंश' },
    { id: 'mularaja_bhati', name: 'मूलराज', subtitle: 'जैसलमेर नरेश', parent: 'jait_singh_bhati', yug: 'kali', clusterName: 'भाटी वंश' },
    { id: 'ratan_singh_bhati', name: 'रतन सिंह', subtitle: 'जैसलमेर नरेश', parent: 'mularaja_bhati', yug: 'kali', clusterName: 'भाटी वंश' },

    // जाडेजा (कच्छ/जामनगर) - भाटी/यदुवंश की शाखा
    { id: 'jadeja_dynasty_proxy', name: 'जाडेजा वंश', subtitle: 'कच्छ/जामनगर राजवंश', parent: 'mangal_rao_bhati', yug: 'kali', clusterName: 'जाडेजा वंश', isProxy: true },
    { id: 'lakho_jadani_chandra', name: 'लाखो जादाणी', subtitle: 'जाडेजा वंश के मूल', parent: 'mangal_rao_bhati', yug: 'kali', parichay: 'सिंध से कच्छ की ओर प्रवास किया। इन्हें जाडेजा (जादा के वंशज) कहा गया।', clusterName: 'जाडेजा वंश' },
    { id: 'jam_raval_jadeja_chandra', name: 'जाम रावल', subtitle: 'नवानगर के संस्थापक', parent: 'lakho_jadani_chandra', yug: 'kali', parichay: '1540 ईस्वी में इन्होंने नवानगर (वर्तमान जामनगर) की स्थापना की।', clusterName: 'जाडेजा वंश' },

    // --- जादौन राजवंश (बयाना / करौली) ---
    { id: 'jadon_dynasty_proxy', name: 'जादौन वंश', subtitle: 'बयाना/करौली राजवंश', parent: 'dharmapala_yaduvanshi_chandra', yug: 'kali', isProxy: true, clusterName: 'जादौन वंश' },
    { id: 'vijaypala_jadon', name: 'विजयपाल', subtitle: 'बयाना के संस्थापक', parent: 'jadon_dynasty_proxy', yug: 'kali', parichay: '1040 ईस्वी में बयाना (विजयमंदिरगढ़) पर राज किया। जादौन राजवंश के प्रमुख।', clusterName: 'जादौन वंश' },
    { id: 'tahanpala_jadon', name: 'तिहनपाल', subtitle: 'तिहनगढ़ के संस्थापक', parent: 'vijaypala_jadon', yug: 'kali', clusterName: 'जादौन वंश' },
    { id: 'dharmapala_2_jadon', name: 'धर्मपाल (द्वितीय)', subtitle: 'जादौन नरेश', parent: 'tahanpala_jadon', yug: 'kali', clusterName: 'जादौन वंश' },
    { id: 'kuntalpala_jadon', name: 'कुंतलपाल', subtitle: 'जादौन नरेश', parent: 'dharmapala_2_jadon', yug: 'kali', clusterName: 'जादौन वंश' },
    { id: 'asala_jadon', name: 'असाल', subtitle: 'जादौन नरेश', parent: 'kuntalpala_jadon', yug: 'kali', clusterName: 'जादौन वंश' },
    { id: 'gokul_deva_jadon', name: 'गोकुल देव', subtitle: 'जादौन नरेश', parent: 'asala_jadon', yug: 'kali', clusterName: 'जादौन वंश' },
    { id: 'arjunpala_jadon', name: 'अर्जुनपाल', subtitle: 'करौली के संस्थापक', parent: 'gokul_deva_jadon', yug: 'kali', parichay: '1348 ईस्वी में कल्याणपुरी (आधुनिक करौली) की स्थापना की।', clusterName: 'जादौन वंश' },
    { id: 'vikramaditya_jadon', name: 'विक्रमादित्य', subtitle: 'करौली नरेश', parent: 'arjunpala_jadon', yug: 'kali', clusterName: 'जादौन वंश' },
    { id: 'abhaychand_jadon', name: 'अभयचंद', subtitle: 'करौली नरेश', parent: 'vikramaditya_jadon', yug: 'kali', clusterName: 'जादौन वंश' },
    { id: 'prithvipala_jadon', name: 'पृथ्वीपाल', subtitle: 'करौली नरेश', parent: 'abhaychand_jadon', yug: 'kali', clusterName: 'जादौन वंश' },
    { id: 'pratap_singh_jadon', name: 'प्रताप सिंह', subtitle: 'करौली नरेश', parent: 'prithvipala_jadon', yug: 'kali', clusterName: 'जादौन वंश' },
    { id: 'gopal_singh_jadon', name: 'गोपाल सिंह', subtitle: 'करौली नरेश', parent: 'pratap_singh_jadon', yug: 'kali', clusterName: 'जादौन वंश' },
    { id: 'bhanwar_pal_jadon', name: 'भंवर पाल', subtitle: 'करौली नरेश', parent: 'gopal_singh_jadon', yug: 'kali', clusterName: 'जादौन वंश' },

    // --- सेउण (देवगिरि यादव राजवंश) ---
    { id: 'seuna_dynasty_proxy', name: 'सेउण (यादव) वंश', subtitle: 'देवगिरि राजवंश', parent: 'yaduvansh_medieval_link_chandra', yug: 'kali', clusterName: 'सेउण (देवगिरि यादव) वंश', isProxy: true },
    { id: 'dridhaprahara_seuna', name: 'दृढप्रहार', subtitle: 'देवगिरि यादव संस्थापक', parent: 'yaduvansh_medieval_link_chandra', yug: 'kali', parichay: '9वीं सदी में सेउण राजवंश की नींव रखी।', clusterName: 'सेउण (देवगिरि यादव) वंश' },
    { id: 'seunachandra_chandra', name: 'सेउणचन्द्र', subtitle: 'देवगिरि यादव नरेश', parent: 'dridhaprahara_seuna', yug: 'kali', clusterName: 'सेउण (देवगिरि यादव) वंश' },
    { id: 'dhadiyappa_chandra', name: 'धाडियप्प', subtitle: 'देवगिरि यादव नरेश', parent: 'seunachandra_chandra', yug: 'kali', clusterName: 'सेउण (देवगिरि यादव) वंश' },
    { id: 'bhilamma_1_chandra', name: 'भिल्लम (प्रथम)', subtitle: 'देवगिरि यादव नरेश', parent: 'dhadiyappa_chandra', yug: 'kali' },
    { id: 'rajagi_chandra', name: 'राजगी', subtitle: 'देवगिरि यादव नरेश', parent: 'bhilamma_1_chandra', yug: 'kali' },
    { id: 'vadugi_1_chandra', name: 'वदुगी (प्रथम)', subtitle: 'देवगिरि यादव नरेश', parent: 'rajagi_chandra', yug: 'kali' },
    { id: 'vesugi_1_chandra', name: 'वेसुगी (प्रथम)', subtitle: 'देवगिरि यादव नरेश', parent: 'vadugi_1_chandra', yug: 'kali' },
    { id: 'bhilamma_2_chandra', name: 'भिल्लम (द्वितीय)', subtitle: 'देवगिरि यादव नरेश', parent: 'vesugi_1_chandra', yug: 'kali' },
    { id: 'vesugi_2_chandra', name: 'वेसुगी (द्वितीय)', subtitle: 'देवगिरि यादव नरेश', parent: 'bhilamma_2_chandra', yug: 'kali' },
    { id: 'bhilamma_3_chandra', name: 'भिल्लम (तृतीय)', subtitle: 'देवगिरि यादव नरेश', parent: 'vesugi_2_chandra', yug: 'kali' },
    { id: 'vadugi_2_chandra', name: 'वदुगी (द्वितीय)', subtitle: 'देवगिरि यादव नरेश', parent: 'bhilamma_3_chandra', yug: 'kali' },
    { id: 'seunachandra_2_chandra', name: 'सेउणचन्द्र (द्वितीय)', subtitle: 'देवगिरि यादव नरेश', parent: 'vadugi_2_chandra', yug: 'kali', clusterName: 'सेउण (देवगिरि यादव) वंश' },
    { id: 'singhana_1_chandra', name: 'सिंघण (प्रथम)', subtitle: 'देवगिरि यादव नरेश', parent: 'seunachandra_2_chandra', yug: 'kali', clusterName: 'सेउण (देवगिरि यादव) वंश' },
    { id: 'mallugi_chandra', name: 'मल्लुगी', subtitle: 'देवगिरि यादव नरेश', parent: 'singhana_1_chandra', yug: 'kali' },
    { id: 'bhilamma_5_chandra', name: 'भिल्लम (पंचम)', subtitle: 'देवगिरि सम्राट', parent: 'mallugi_chandra', yug: 'kali', parichay: 'इन्होंने देवगिरि (दौलताबाद) को अपनी राजधानी बनाया और एक महान साम्राज्य स्थापित किया।' },
    { id: 'jaitugi_1_chandra', name: 'जैतुगी (प्रथम)', subtitle: 'देवगिरि सम्राट', parent: 'bhilamma_5_chandra', yug: 'kali' },
    { id: 'singhana_2_chandra', name: 'सिंघण (द्वितीय)', subtitle: 'देवगिरि सम्राट', parent: 'jaitugi_1_chandra', yug: 'kali' },
    { id: 'krishna_seuna', name: 'कृष्ण (कान्हण)', subtitle: 'देवगिरि सम्राट', parent: 'singhana_2_chandra', yug: 'kali', clusterName: 'सेउण (देवगिरि यादव) वंश' },
    { id: 'mahadeva_seuna', name: 'महादेव', subtitle: 'देवगिरि सम्राट', parent: 'krishna_seuna', yug: 'kali', clusterName: 'सेउण (देवगिरि यादव) वंश' },
    { id: 'ramachandra_seuna', name: 'रामचन्द्र', subtitle: 'देवगिरि सम्राट', parent: 'mahadeva_seuna', yug: 'kali', parichay: 'इनके शासनकाल में अलाउद्दीन खिलजी ने देवगिरि पर आक्रमण किया।', clusterName: 'सेउण (देवगिरि यादव) वंश' },
    { id: 'shankaradeva_seuna', name: 'शंकरदेव', subtitle: 'अंतिम देवगिरि नरेश', parent: 'ramachandra_seuna', yug: 'kali', clusterName: 'सेउण (देवगिरि यादव) वंश' },

    // --- अहीरवाल (रेवाड़ी) राजवंश ---
    { id: 'ahura_nandaram_chandra', name: 'राव नन्दराम', subtitle: 'रेवाड़ी रियासत (अहीरवाल)', parent: 'yaduvansh_medieval_link_chandra', yug: 'kali', parichay: 'रेवाड़ी (हरियाणा) में अहीरवाल रियासत के संस्थापक। स्वयं को यदुवंशी मानते हैं।' },
    { id: 'rao_balkishan_chandra', name: 'राव बालकिशन', subtitle: 'रेवाड़ी नरेश', parent: 'ahura_nandaram_chandra', yug: 'kali' },
    { id: 'rao_gujarmal_chandra', name: 'राव गूजरमल', subtitle: 'रेवाड़ी नरेश', parent: 'rao_balkishan_chandra', yug: 'kali' },
    { id: 'rao_bhavani_singh_chandra', name: 'राव भवानी सिंह', subtitle: 'रेवाड़ी नरेश', parent: 'rao_gujarmal_chandra', yug: 'kali' },
    { id: 'rao_ram_singh_chandra', name: 'राव राम सिंह', subtitle: 'रेवाड़ी नरेश', parent: 'rao_bhavani_singh_chandra', yug: 'kali' },
    { id: 'rao_puran_singh_chandra', name: 'राव पूरण सिंह', subtitle: 'रेवाड़ी नरेश', parent: 'rao_ram_singh_chandra', yug: 'kali' },
    { id: 'rao_tula_ram_chandra', name: 'राव तुला राम', subtitle: '1857 के स्वतंत्रता सेनानी', parent: 'rao_puran_singh_chandra', yug: 'kali', parichay: '1857 की क्रांति में अहीरवाल क्षेत्र का नेतृत्व किया और अंग्रेजों से लोहा लिया।' },


    // --- बाद के वंश (अस्थायी रूप से सुरक्षित रखे गए हैं) ---


    // --- पुरु वंश (पुरु के पुत्र) ---
    { id: 'paushti_puru', name: 'पौष्टी', subtitle: 'पुरु की पत्नी', parent: '', spouseOf: 'puru_chandra', yug: 'treta' },
    { id: 'janamejaya_1_chandra', name: 'जनमेजय (प्रथम)', subtitle: 'पुरु पुत्र', parent: 'puru_chandra', mother: 'paushti_puru', yug: 'treta' },
    { id: 'pravira_puru', name: 'प्रवीर', subtitle: 'पुरु पुत्र', parent: 'puru_chandra', mother: 'paushti_puru', yug: 'treta' },
    { id: 'ishvara_puru', name: 'ईश्वर', subtitle: 'पुरु पुत्र', parent: 'puru_chandra', mother: 'paushti_puru', yug: 'treta' },

    { id: 'ananta_janamejaya_chandra', name: 'अनन्ता', subtitle: 'जनमेजय पत्नी', parent: '', spouseOf: 'janamejaya_1_chandra', yug: 'treta' },
    { id: 'prachinvan_chandra', name: 'प्राचीन्वान', subtitle: 'जनमेजय पुत्र', parent: 'janamejaya_1_chandra', mother: 'ananta_janamejaya_chandra', yug: 'treta' },
    { id: 'ashmaki_prachinvan_chandra', name: 'अश्मकी', subtitle: 'प्राचीन्वान पत्नी', parent: '', spouseOf: 'prachinvan_chandra', yug: 'treta' },
    { id: 'sanyati_puru', name: 'संयाति', subtitle: 'प्राचीन्वान पुत्र', parent: 'prachinvan_chandra', mother: 'ashmaki_prachinvan_chandra', yug: 'treta' },
    { id: 'varangi_sanyati_chandra', name: 'वरांगी', subtitle: 'संयाति पत्नी', parent: '', spouseOf: 'sanyati_puru', yug: 'treta' },
    { id: 'ahayati_puru', name: 'अहयाति', subtitle: 'संयाति पुत्र', parent: 'sanyati_puru', mother: 'varangi_sanyati_chandra', yug: 'treta' },
    { id: 'bhanumati_ahayati_chandra', name: 'भानुमती', subtitle: 'अहयाति पत्नी', parent: '', spouseOf: 'ahayati_puru', yug: 'treta' },
    { id: 'sarvabhauma_puru', name: 'सार्वभौम', subtitle: 'अहयाति पुत्र', parent: 'ahayati_puru', mother: 'bhanumati_ahayati_chandra', yug: 'treta' },
    { id: 'sunanda_sarvabhauma_chandra', name: 'सुनंदा', subtitle: 'सार्वभौम पत्नी', parent: '', spouseOf: 'sarvabhauma_puru', yug: 'treta' },
    { id: 'jayatsena_puru', name: 'जयत्सेन', subtitle: 'सार्वभौम पुत्र', parent: 'sarvabhauma_puru', mother: 'sunanda_sarvabhauma_chandra', yug: 'treta' },
    { id: 'sushrava_jayatsena_chandra', name: 'सुश्रवा', subtitle: 'जयत्सेन पत्नी', parent: '', spouseOf: 'jayatsena_puru', yug: 'treta' },
    { id: 'arvachina_chandra', name: 'अर्वाचीन', subtitle: 'जयत्सेन पुत्र', parent: 'jayatsena_puru', mother: 'sushrava_jayatsena_chandra', yug: 'treta' },
    { id: 'maryada_arvachina_chandra', name: 'मर्यादा', subtitle: 'अर्वाचीन पत्नी', parent: '', spouseOf: 'arvachina_chandra', yug: 'treta' },
    { id: 'ariha_1_chandra', name: 'अरिह (प्रथम)', subtitle: 'अर्वाचीन पुत्र', parent: 'arvachina_chandra', mother: 'maryada_arvachina_chandra', yug: 'treta' },
    { id: 'angi_ariha_chandra', name: 'अंगी', subtitle: 'अरिह पत्नी', parent: '', spouseOf: 'ariha_1_chandra', yug: 'treta' },
    { id: 'mahabhauma_chandra', name: 'महाभौम', subtitle: 'अरिह पुत्र', parent: 'ariha_1_chandra', mother: 'angi_ariha_chandra', yug: 'treta' },
    { id: 'suyagya_mahabhauma_chandra', name: 'सुयज्ञा', subtitle: 'महाभौम पत्नी', parent: '', spouseOf: 'mahabhauma_chandra', yug: 'treta' },
    { id: 'ayutanayi_chandra', name: 'अयुतनायी', subtitle: 'महाभौम पुत्र', parent: 'mahabhauma_chandra', mother: 'suyagya_mahabhauma_chandra', yug: 'treta' },
    { id: 'kama_ayutanayi_chandra', name: 'कामा', subtitle: 'अयुतनायी पत्नी', parent: '', spouseOf: 'ayutanayi_chandra', yug: 'treta' },
    { id: 'akrodhana_chandra', name: 'अक्रोधन', subtitle: 'अयुतनायी पुत्र', parent: 'ayutanayi_chandra', mother: 'kama_ayutanayi_chandra', yug: 'treta' },
    { id: 'karambha_akrodhana_chandra', name: 'करम्भा', subtitle: 'अक्रोधन पत्नी', parent: '', spouseOf: 'akrodhana_chandra', yug: 'treta' },
    { id: 'devatithi_1_chandra', name: 'देवातिथि', subtitle: 'अक्रोधन पुत्र', parent: 'akrodhana_chandra', mother: 'karambha_akrodhana_chandra', yug: 'treta' },
    { id: 'maryada_devatithi_chandra', name: 'मर्यादा', subtitle: 'देवातिथि पत्नी', parent: '', spouseOf: 'devatithi_1_chandra', yug: 'treta' },
    { id: 'ariha_2_chandra', name: 'अरिह (द्वितीय)', subtitle: 'देवातिथि पुत्र', parent: 'devatithi_1_chandra', mother: 'maryada_devatithi_chandra', yug: 'treta' },
    { id: 'sudeva_ariha_chandra', name: 'सुदेवा', subtitle: 'अरिह पत्नी', parent: '', spouseOf: 'ariha_2_chandra', yug: 'treta' },
    { id: 'riksha_1_chandra', name: 'ऋक्ष (प्रथम)', subtitle: 'अरिह पुत्र', parent: 'ariha_2_chandra', mother: 'sudeva_ariha_chandra', yug: 'treta' },
    { id: 'jwala_riksha_chandra', name: 'ज्वाला', subtitle: 'ऋक्ष पत्नी', parent: '', spouseOf: 'riksha_1_chandra', yug: 'treta' },
    { id: 'matinara_chandra', name: 'मतिनार', subtitle: 'ऋक्ष पुत्र', parent: 'riksha_1_chandra', mother: 'jwala_riksha_chandra', yug: 'treta' },

    { id: 'saraswati_matinara_chandra', name: 'सरस्वती (नदी)', subtitle: 'मतिनार पत्नी', parent: '', spouseOf: 'matinara_chandra', yug: 'treta' },
    { id: 'tamsu_chandra', name: 'तंसु', subtitle: 'मतिनार पुत्र', parent: 'matinara_chandra', mother: 'saraswati_matinara_chandra', yug: 'treta' },
    { id: 'apratiratha_chandra', name: 'अप्रतिरथ', subtitle: 'मतिनार पुत्र', parent: 'matinara_chandra', mother: 'saraswati_matinara_chandra', yug: 'treta' },
    { id: 'dhruva_puru', name: 'ध्रुव', subtitle: 'मतिनार पुत्र', parent: 'matinara_chandra', mother: 'saraswati_matinara_chandra', yug: 'treta' },
    { id: 'gauri_matinara_chandra', name: 'गौरी', subtitle: 'मतिनार पुत्री', parent: 'matinara_chandra', mother: 'saraswati_matinara_chandra', spouseOf: 'yuvanashva', yug: 'treta', parichay: 'इनका विवाह सूर्यवंशी राजा युवनाश्व से हुआ, और ये मांधाता की माता बनीं।' },

    { id: 'ilin_tamsu_chandra', name: 'इलिन', subtitle: 'तंसु पत्नी', parent: '', spouseOf: 'tamsu_chandra', yug: 'treta' },
    { id: 'dushyant_chandra', name: 'दुष्यंत', subtitle: 'तंसु पुत्र', parent: 'tamsu_chandra', mother: 'ilin_tamsu_chandra', yug: 'treta', parichay: 'इन्हें तुर्वसु वंश के मरुत्त ने गोद लिया था, परन्तु ये पुनः पुरु वंश में लौट गए।' },

    // --- भरत और हस्ति ---
    { id: 'bharat_kuru', name: 'भरत', subtitle: 'चक्रवर्ती सम्राट (भारतवर्ष)', parent: 'dushyant_chandra', mother: 'shakuntala_vishwamitra_chandra', yug: 'treta' },
    { id: 'sunanda_bharat_chandra', name: 'सुनंदा', subtitle: 'भरत की पत्नी', parent: '', spouseOf: 'bharat_kuru', yug: 'treta' },
    { id: 'vidatha_bharadvaja_chandra', name: 'भरद्वाज (विदथ)', subtitle: 'भरत के दत्तक पुत्र', parent: 'bharat_kuru', yug: 'treta', parichay: 'भरत के अपने ९ पुत्र योग्य नहीं थे, अतः उन्होंने महर्षि बृहस्पति के पुत्र भरद्वाज को गोद लिया।' },
    { id: 'bhumanyu_chandra', name: 'भुमन्यु', subtitle: 'भरद्वाज पुत्र', parent: 'vidatha_bharadvaja_chandra', yug: 'treta' },
    { id: 'pushkarini_bhumanyu_chandra', name: 'पुष्करिणी', subtitle: 'भुमन्यु पत्नी', parent: '', spouseOf: 'bhumanyu_chandra', yug: 'treta' },
    { id: 'suhotra_puru', name: 'सुहोत्र', subtitle: 'भुमन्यु पुत्र', parent: 'bhumanyu_chandra', mother: 'pushkarini_bhumanyu_chandra', yug: 'treta' },
    { id: 'suhota_puru', name: 'सुहोता', subtitle: 'भुमन्यु पुत्र', parent: 'bhumanyu_chandra', mother: 'pushkarini_bhumanyu_chandra', yug: 'treta' },
    { id: 'suhavi_puru', name: 'सुहवि', subtitle: 'भुमन्यु पुत्र', parent: 'bhumanyu_chandra', mother: 'pushkarini_bhumanyu_chandra', yug: 'treta' },
    { id: 'suyaju_puru', name: 'सुयजु', subtitle: 'भुमन्यु पुत्र', parent: 'bhumanyu_chandra', mother: 'pushkarini_bhumanyu_chandra', yug: 'treta' },
    { id: 'diviratha_puru', name: 'दिविरथ', subtitle: 'भुमन्यु पुत्र', parent: 'bhumanyu_chandra', mother: 'pushkarini_bhumanyu_chandra', yug: 'treta' },

    { id: 'aikshvaki_suhotra_chandra', name: 'ऐक्ष्वाकी', subtitle: 'सुहोत्र पत्नी', parent: '', spouseOf: 'suhotra_puru', yug: 'treta' },
    { id: 'hasti_chandra', name: 'हस्ती', subtitle: 'हस्तिनापुर के संस्थापक', parent: 'suhotra_puru', mother: 'aikshvaki_suhotra_chandra', yug: 'treta' },
    { id: 'ajamidha_1_chandra', name: 'अजमीढ (प्रथम)', subtitle: 'सुहोत्र पुत्र', parent: 'suhotra_puru', mother: 'aikshvaki_suhotra_chandra', yug: 'treta' },
    { id: 'dvimidha_chandra', name: 'द्विमीढ', subtitle: 'सुहोत्र पुत्र', parent: 'suhotra_puru', mother: 'aikshvaki_suhotra_chandra', yug: 'treta' },
    { id: 'purumidha_chandra', name: 'पुरुमीढ', subtitle: 'सुहोत्र पुत्र', parent: 'suhotra_puru', mother: 'aikshvaki_suhotra_chandra', yug: 'treta' },

    { id: 'yashodhara_hasti_chandra', name: 'यशोधरा', subtitle: 'हस्ती पत्नी', parent: '', spouseOf: 'hasti_chandra', yug: 'treta' },
    { id: 'vikunthana_chandra', name: 'विकुण्ठन', subtitle: 'हस्ती पुत्र', parent: 'hasti_chandra', mother: 'yashodhara_hasti_chandra', yug: 'treta' },
    { id: 'sudeva_vikunthana_chandra', name: 'सुदेवा', subtitle: 'विकुण्ठन पत्नी', parent: '', spouseOf: 'vikunthana_chandra', yug: 'treta' },
    { id: 'ajamidha_2_chandra', name: 'अजमीढ (द्वितीय)', subtitle: 'विकुण्ठन पुत्र', parent: 'vikunthana_chandra', mother: 'sudeva_vikunthana_chandra', yug: 'treta' },

    // --- अजमीढ (द्वितीय) की पत्नियां ---
    { id: 'dhumini_ajamidha_chandra', name: 'धूमिनी', subtitle: 'अजमीढ पत्नी (कुरु वंश)', parent: '', spouseOf: 'ajamidha_2_chandra', yug: 'treta' },
    { id: 'nili_ajamidha_chandra', name: 'नीली (नलिनी)', subtitle: 'अजमीढ पत्नी (पांचाल वंश)', parent: '', spouseOf: 'ajamidha_2_chandra', yug: 'treta' },
    { id: 'keshini_ajamidha_chandra', name: 'केशिनी', subtitle: 'अजमीढ पत्नी', parent: '', spouseOf: 'ajamidha_2_chandra', yug: 'treta' },

    // केशिनी के पुत्र
    { id: 'jahnu_puru', name: 'जह्नु', subtitle: 'केशिनी पुत्र', parent: 'ajamidha_2_chandra', mother: 'keshini_ajamidha_chandra', yug: 'treta' , clusterName: 'अजमीढ़ के अन्य पुत्र' },
    { id: 'vraja_chandra', name: 'व्रज', subtitle: 'केशिनी पुत्र', parent: 'ajamidha_2_chandra', mother: 'keshini_ajamidha_chandra', yug: 'treta' , clusterName: 'अजमीढ़ के अन्य पुत्र' },
    { id: 'rupina_chandra', name: 'रुपिण', subtitle: 'केशिनी पुत्र', parent: 'ajamidha_2_chandra', mother: 'keshini_ajamidha_chandra', yug: 'treta' , clusterName: 'अजमीढ़ के अन्य पुत्र' },

    // --- पांचाल वंश (नीली से) ---
    { id: 'nila_panchal', name: 'नील', subtitle: 'नीली पुत्र', parent: 'ajamidha_2_chandra', mother: 'nili_ajamidha_chandra', yug: 'treta' },
    { id: 'dushyanta_panchal', name: 'दुष्यंत (पांचाल)', subtitle: 'नीली पुत्र', parent: 'ajamidha_2_chandra', mother: 'nili_ajamidha_chandra', yug: 'treta' , clusterName: 'अजमीढ़ के अन्य पुत्र' },
    { id: 'parameshthin_chandra', name: 'परमेष्ठिन्', subtitle: 'नीली पुत्र', parent: 'ajamidha_2_chandra', mother: 'nili_ajamidha_chandra', yug: 'treta' , clusterName: 'अजमीढ़ के अन्य पुत्र' },

    { id: 'shanti_panchal', name: 'शान्ति', subtitle: 'नील पुत्र', parent: 'nila_panchal', yug: 'treta' },
    { id: 'sushanti_panchal', name: 'सुशान्ति', subtitle: 'शान्ति पुत्र', parent: 'shanti_panchal', yug: 'treta' },
    { id: 'purujanu_chandra', name: 'पुरुजानु', subtitle: 'सुशान्ति पुत्र', parent: 'sushanti_panchal', yug: 'treta' },
    { id: 'riksha_panchal', name: 'ऋक्ष (पांचाल)', subtitle: 'पुरुजानु पुत्र', parent: 'purujanu_chandra', yug: 'treta' },
    { id: 'bharmyashva_chandra', name: 'भर्म्याश्व', subtitle: 'ऋक्ष पुत्र', parent: 'riksha_panchal', yug: 'treta' },

    // भर्म्याश्व के ५ पुत्र (पांचाल)
    { id: 'mudgala_panchal', name: 'मुद्गल', subtitle: 'पांचाल (मौद्गल्य गोत्र)', parent: 'bharmyashva_chandra', yug: 'treta' },
    { id: 'srinjaya_panchal', name: 'सृंजय', subtitle: 'पांचाल', parent: 'bharmyashva_chandra', yug: 'treta' },
    { id: 'brihadishu_panchal', name: 'बृहदिषु', subtitle: 'पांचाल', parent: 'bharmyashva_chandra', yug: 'treta' },
    { id: 'yavinara_panchal', name: 'यवीनर', subtitle: 'पांचाल', parent: 'bharmyashva_chandra', yug: 'treta' },
    { id: 'kampilya_panchal', name: 'काम्पिल्य', subtitle: 'पांचाल (काम्पिल्य नगर)', parent: 'bharmyashva_chandra', yug: 'treta' },

    { id: 'menaka_mudgala_chandra', name: 'मेनका (अप्सरा)', subtitle: 'मुद्गल पत्नी', parent: '', spouseOf: 'mudgala_panchal', yug: 'treta' },
    { id: 'vadhryashva_chandra', name: 'वध्र्यश्व', subtitle: 'मुद्गल पुत्र', parent: 'mudgala_panchal', mother: 'menaka_mudgala_chandra', yug: 'treta' },
    { id: 'divodasa_panchal', name: 'दिवोदास', subtitle: 'वध्र्यश्व पुत्र', parent: 'vadhryashva_chandra', yug: 'treta' },
    { id: 'ahalya_panchal', name: 'अहल्या', subtitle: 'गौतम ऋषि की पत्नी', parent: 'vadhryashva_chandra', spouseOf: 'gautam', yug: 'treta' },

    { id: 'mitrayu_chandra', name: 'मित्रायु', subtitle: 'दिवोदास पुत्र', parent: 'divodasa_panchal', yug: 'treta' },
    { id: 'chyavana_panchal', name: 'च्यवन (पांचाल)', subtitle: 'मित्रायु पुत्र', parent: 'mitrayu_chandra', yug: 'treta' },
    { id: 'sudasa_panchal', name: 'सुदास', subtitle: 'च्यवन पुत्र', parent: 'chyavana_panchal', yug: 'treta' },
    { id: 'sahadeva_panchal', name: 'सहदेव', subtitle: 'सुदास पुत्र', parent: 'sudasa_panchal', yug: 'dwapar' },
    { id: 'somaka_panchal', name: 'सोमक', subtitle: 'सहदेव पुत्र', parent: 'sahadeva_panchal', yug: 'dwapar' },
    { id: 'prishata_chandra', name: 'पृषत', subtitle: 'सोमक पुत्र', parent: 'somaka_panchal', yug: 'dwapar' },
    { id: 'drupada_chandra', name: 'द्रुपद (यज्ञसेन)', subtitle: 'पांचाल नरेश', parent: 'prishata_chandra', yug: 'dwapar' },

    { id: 'dhrishtadyumna_chandra', name: 'धृष्टद्युम्न', subtitle: 'द्रुपद पुत्र (यज्ञकुण्ड से)', parent: 'drupada_chandra', yug: 'dwapar' },
    { id: 'shikhandi_chandra', name: 'शिखंडी', subtitle: 'द्रुपद पुत्र/पुत्री', parent: 'drupada_chandra', yug: 'dwapar', parichay: 'पूर्वजन्म में अम्बा। भीष्म के वध का कारण बने।' },
    { id: 'draupadi_chandra', name: 'द्रौपदी (पांचाली)', subtitle: 'पांडवों की पत्नी (यज्ञकुण्ड से)', parent: 'drupada_chandra', spouseOf: 'yudhishthir_chandra', yug: 'dwapar', parichay: 'पांडवों की धर्मपत्नी। यज्ञकुण्ड से उत्पन्न हुईं।' },
    { id: 'satyajit_panchal', name: 'सत्यजित', subtitle: 'द्रुपद पुत्र', parent: 'drupada_chandra', yug: 'dwapar', clusterName: 'द्रुपद के अन्य पुत्र' },
    { id: 'yudhamanyu_chandra', name: 'युधामन्यु', subtitle: 'द्रुपद पुत्र', parent: 'drupada_chandra', yug: 'dwapar', clusterName: 'द्रुपद के अन्य पुत्र' },
    { id: 'uttamaujas_chandra', name: 'उत्तमौजस', subtitle: 'द्रुपद पुत्र', parent: 'drupada_chandra', yug: 'dwapar', clusterName: 'द्रुपद के अन्य पुत्र' },


    // --- कुरु वंश मुख्य धारा (धूमिनी से) ---

    { id: 'ajamidha_sons_proxy', name: 'अजमीढ़ के अन्य पुत्र', subtitle: 'ऋक्ष, नील आदि', isProxy: true, parent: 'ajamidha_2_chandra', clusterName: 'अजमीढ़ के अन्य पुत्र', yug: 'treta' },
    { id: 'riksha_2_chandra', name: 'ऋक्ष (कुरु वंश)', subtitle: 'धूमिनी पुत्र', parent: 'ajamidha_2_chandra', mother: 'dhumini_ajamidha_chandra', yug: 'treta' },
    { id: 'samvarana_chandra', name: 'संवरण', subtitle: 'ऋक्ष पुत्र', parent: 'riksha_2_chandra', yug: 'treta' },
    { id: 'tapati_chandra', name: 'तपती', subtitle: 'संवरण पत्नी (सूर्य पुत्री)', parent: 'surya', spouseOf: 'samvarana_chandra', yug: 'treta' , clusterName: 'सूर्य की अन्य संतति' },

    { id: 'kuru_chandra', name: 'कुरु', subtitle: 'कुरुक्षेत्र / कुरुवंश के संस्थापक', parent: 'samvarana_chandra', mother: 'tapati_chandra', yug: 'dwapar' },
    { id: 'shubhangi_kuru', name: 'शुभांगी', subtitle: 'कुरु पत्नी', parent: '', spouseOf: 'kuru_chandra', yug: 'dwapar' },

    // कुरु के भाई (मगध / चेदि वंश - वासु उपरिचर)
    { id: 'sudhanva_kuru', name: 'सुधन्वा', subtitle: 'संवरण पुत्र', parent: 'samvarana_chandra', mother: 'tapati_chandra', yug: 'dwapar' },
    { id: 'suhotra_sudhanva_chandra', name: 'सुहोत्र', subtitle: 'सुधन्वा पुत्र', parent: 'sudhanva_kuru', yug: 'dwapar' },
    { id: 'chyavana_magadh', name: 'च्यवन (मगध)', subtitle: 'सुहोत्र पुत्र', parent: 'suhotra_sudhanva_chandra', yug: 'dwapar' },
    { id: 'kriti_magadh', name: 'कृती', subtitle: 'च्यवन पुत्र', parent: 'chyavana_magadh', yug: 'dwapar' },
    { id: 'vasu_uparichara_chandra', name: 'वासु उपरिचर', subtitle: 'चेदि नरेश', parent: 'kriti_magadh', yug: 'dwapar', parichay: 'सत्यवती (मत्स्यगंधा) के पिता।' },
    { id: 'girika_vasu_chandra', name: 'गिरिका', subtitle: 'वासु पत्नी', parent: '', spouseOf: 'vasu_uparichara_chandra', yug: 'dwapar' },
    { id: 'satyavati_chandra', name: 'सत्यवती (मत्स्यगंधा)', subtitle: 'वासु की पुत्री', parent: 'vasu_uparichara_chandra', spouseOf: 'shantanu_chandra', yug: 'dwapar' },

    { id: 'brihadratha_magadh', name: 'बृहद्रथ', subtitle: 'मगध नरेश (संस्थापक)', parent: 'vasu_uparichara_chandra', yug: 'dwapar' },
    { id: 'pratyagra_vasu_chandra', name: 'प्रत्यग्र', subtitle: 'वासु पुत्र', parent: 'vasu_uparichara_chandra', yug: 'dwapar' },
    { id: 'kushamba_vasu_chandra', name: 'कुशाम्ब', subtitle: 'वासु पुत्र', parent: 'vasu_uparichara_chandra', yug: 'dwapar' },
    { id: 'mavella_vasu_chandra', name: 'मवेल्ल', subtitle: 'वासु पुत्र', parent: 'vasu_uparichara_chandra', yug: 'dwapar' },
    { id: 'yadu_vasu_chandra', name: 'यदु (चेदि)', subtitle: 'वासु पुत्र', parent: 'vasu_uparichara_chandra', yug: 'dwapar' },

    { id: 'jarasandha_chandra', name: 'जरासंध', subtitle: 'मगध सम्राट', parent: 'brihadratha_magadh', yug: 'dwapar', parichay: 'जरा नामक राक्षसी द्वारा संधान किये जाने के कारण जरासंध कहलाये। भीम द्वारा वध।' },
    { id: 'sahadeva_magadh', name: 'सहदेव (मगध)', subtitle: 'जरासंध पुत्र', parent: 'jarasandha_chandra', yug: 'dwapar' },
    { id: 'somapi_chandra', name: 'सोमापी', subtitle: 'सहदेव पुत्र', parent: 'sahadeva_magadh', yug: 'dwapar' },
    { id: 'shrutashravas_magadh', name: 'श्रुतश्रवस्', subtitle: 'सोमापी पुत्र', parent: 'somapi_chandra', yug: 'dwapar' },

    { id: 'asti_jarasandha_chandra', name: 'अस्ति', subtitle: 'जरासंध पुत्री', parent: 'jarasandha_chandra', spouseOf: 'kamsa_ugrasen_chandra', yug: 'dwapar' },
    { id: 'prapti_jarasandha_chandra', name: 'प्राप्ति', subtitle: 'जरासंध पुत्री', parent: 'jarasandha_chandra', spouseOf: 'kamsa_ugrasen_chandra', yug: 'dwapar' },

    // कुरु के पुत्र (कुरु वंश का आगे का भाग)
    { id: 'viduratha_kuru', name: 'विदूरथ', subtitle: 'कुरु पुत्र', parent: 'kuru_chandra', mother: 'shubhangi_kuru', yug: 'dwapar' },
    { id: 'jahnu_kuru', name: 'जह्नु (कुरु)', subtitle: 'कुरु पुत्र', parent: 'kuru_chandra', mother: 'shubhangi_kuru', yug: 'dwapar' },
    { id: 'parikshit_1_chandra', name: 'परीक्षित (प्रथम)', subtitle: 'कुरु पुत्र', parent: 'kuru_chandra', mother: 'shubhangi_kuru', yug: 'dwapar' },

    { id: 'sarvabhauma_kuru', name: 'सार्वभौम', subtitle: 'विदूरथ पुत्र', parent: 'viduratha_kuru', yug: 'dwapar' },
    { id: 'jayatsena_kuru', name: 'जयत्सेन', subtitle: 'सार्वभौम पुत्र', parent: 'sarvabhauma_kuru', yug: 'dwapar' },
    { id: 'ravyaya_chandra', name: 'रव्यय', subtitle: 'जयत्सेन पुत्र', parent: 'jayatsena_kuru', yug: 'dwapar' },
    { id: 'bhavuka_chandra', name: 'भावुक', subtitle: 'रव्यय पुत्र', parent: 'ravyaya_chandra', yug: 'dwapar' },
    { id: 'chakroddhata_chandra', name: 'चक्रोद्धत', subtitle: 'भावुक पुत्र', parent: 'bhavuka_chandra', yug: 'dwapar' },
    { id: 'devatithi_2_chandra', name: 'देवातिथि', subtitle: 'चक्रोद्धत पुत्र', parent: 'chakroddhata_chandra', yug: 'dwapar' },
    { id: 'riksha_3_chandra', name: 'ऋक्ष (तृतीय)', subtitle: 'देवातिथि पुत्र', parent: 'devatithi_2_chandra', yug: 'dwapar' },
    { id: 'bhimasena_kuru', name: 'भीमसेन', subtitle: 'ऋक्ष पुत्र', parent: 'riksha_3_chandra', yug: 'dwapar' },
    { id: 'dilipa_kuru', name: 'दिलीप', subtitle: 'भीमसेन पुत्र', parent: 'bhimasena_kuru', yug: 'dwapar' },

    // प्रतीप और शान्तनु
    { id: 'pratipa_chandra', name: 'प्रतीप', subtitle: 'हस्तिनापुर नरेश', parent: 'dilipa_kuru', yug: 'dwapar' },
    { id: 'sunanda_pratipa_chandra', name: 'सुनंदा', subtitle: 'प्रतीप पत्नी', parent: '', spouseOf: 'pratipa_chandra', yug: 'dwapar' },

    { id: 'devapi_chandra', name: 'देवापि', subtitle: 'प्रतीप पुत्र (संन्यासी)', parent: 'pratipa_chandra', mother: 'sunanda_pratipa_chandra', yug: 'dwapar' },
    { id: 'shantanu_chandra', name: 'शान्तनु', subtitle: 'हस्तिनापुर नरेश', parent: 'pratipa_chandra', mother: 'sunanda_pratipa_chandra', yug: 'dwapar' },
    { id: 'bahlika_chandra', name: 'बाल्हीक', subtitle: 'बाल्हीक नरेश', parent: 'pratipa_chandra', mother: 'sunanda_pratipa_chandra', yug: 'dwapar' },

    // बाल्हीक वंश
    { id: 'somadatta_chandra', name: 'सोमदत्त', subtitle: 'बाल्हीक पुत्र', parent: 'bahlika_chandra', yug: 'dwapar' },
    { id: 'bhurishrava_chandra', name: 'भूरिश्रवा', subtitle: 'सोमदत्त पुत्र', parent: 'somadatta_chandra', yug: 'dwapar' },
    { id: 'bhuri_chandra', name: 'भूरि', subtitle: 'सोमदत्त पुत्र', parent: 'somadatta_chandra', yug: 'dwapar' },
    { id: 'shala_chandra', name: 'शल', subtitle: 'सोमदत्त पुत्र', parent: 'somadatta_chandra', yug: 'dwapar' },

    // शान्तनु का परिवार
    { id: 'ganga_shantanu_chandra', name: 'गंगा (नदी)', subtitle: 'शान्तनु की प्रथम पत्नी', parent: 'himalaya', spouseOf: 'shantanu_chandra', yug: 'dwapar' },
    { id: 'bhishma_chandra', name: 'भीष्म (देवव्रत)', subtitle: 'गंगा पुत्र', parent: 'shantanu_chandra', mother: 'ganga_shantanu_chandra', yug: 'dwapar', parichay: 'इच्छा मृत्यु का वरदान। आजन्म ब्रह्मचारी रहने की भीषण प्रतिज्ञा की थी।' },

    { id: 'chitrangada_shantanu_chandra', name: 'चित्रांगद', subtitle: 'सत्यवती पुत्र', parent: 'shantanu_chandra', mother: 'satyavati_chandra', yug: 'dwapar' },
    { id: 'vichitravirya_chandra', name: 'विचित्रवीर्य', subtitle: 'सत्यवती पुत्र', parent: 'shantanu_chandra', mother: 'satyavati_chandra', yug: 'dwapar' },

    { id: 'ambika_chandra', name: 'अम्बिका', subtitle: 'काशी पुत्री / विचित्रवीर्य पत्नी', parent: 'kashya', spouseOf: 'vichitravirya_chandra', yug: 'dwapar' },
    { id: 'ambalika_chandra', name: 'अम्बालिका', subtitle: 'काशी पुत्री / विचित्रवीर्य पत्नी', parent: 'kashya', spouseOf: 'vichitravirya_chandra', yug: 'dwapar' },
    { id: 'parishrami_dasi_chandra', name: 'परिश्रमी (दासी)', subtitle: 'अम्बिका की दासी', parent: '', spouseOf: 'vichitravirya_chandra', yug: 'dwapar' },

    // व्यास द्वारा नियोग (ये विचित्रवीर्य के क्षेत्रज पुत्र माने जाते हैं, इसलिए ट्री में पिता विचित्रवीर्य/व्यास दोनों से जुड़ते हैं, हमने सरलता के लिए विचित्रवीर्य रखा है, पर जैविक पिता व्यास हैं)
    // जैविक पिता व्यास हैं, राजकीय पिता विचित्रवीर्य। Tree hierarchy ke liye biologically Vyasa rakha ja sakta hai, par conventionally ye Kuru vansh hain.
    { id: 'dhritarashtra_chandra', name: 'धृतराष्ट्र', subtitle: 'हस्तिनापुर नरेश', parent: 'vichitravirya_chandra', mother: 'ambika_chandra', yug: 'dwapar', parichay: 'जन्मान्ध होने के कारण पाण्डु को राजा बनाया गया। ये कौरवों के पिता हैं (राजकीय पिता विचित्रवीर्य)।' },
    { id: 'pandu_chandra', name: 'पाण्डु', subtitle: 'पांडवों के पिता', parent: 'vichitravirya_chandra', mother: 'ambalika_chandra', yug: 'dwapar' },
    { id: 'vidur_chandra', name: 'विदुर', subtitle: 'धर्मराज अवतार', parent: 'vichitravirya_chandra', mother: 'parishrami_dasi_chandra', yug: 'dwapar' },
    { id: 'sulabha_vidur_chandra', name: 'सुलभा', subtitle: 'विदुर पत्नी', parent: '', spouseOf: 'vidur_chandra', yug: 'dwapar' },


    { id: 'other_dynasties_proxy', name: 'अन्य राजवंश', subtitle: 'विवाह सम्बन्धित', parent: 'brahma', yug: 'dwapar', clusterName: 'अन्य राजवंश (इन-लॉ)', isProxy: true, timeScale: 'kalpa' },
    // --- अन्य राज्यों के मूल नरेश (इन-लॉ) ---
    { id: 'virata_matsya', name: 'विराट', subtitle: 'मत्स्य नरेश', parent: 'other_dynasties_proxy', clusterName: 'अन्य राजवंश (इन-लॉ)', yug: 'dwapar' },
    { id: 'shalya_madra_king', name: 'शल्य', subtitle: 'मद्र नरेश', parent: 'other_dynasties_proxy', clusterName: 'अन्य राजवंश (इन-लॉ)', yug: 'dwapar' },
    { id: 'subala_gandhara_king', name: 'सुबल', subtitle: 'गांधार नरेश', parent: 'other_dynasties_proxy', clusterName: 'अन्य राजवंश (इन-लॉ)', yug: 'dwapar' },
    { id: 'kauravya_naga_king', name: 'कौरव्य', subtitle: 'नाग नरेश', parent: 'other_dynasties_proxy', clusterName: 'अन्य राजवंश (इन-लॉ)', yug: 'dwapar' },
    { id: 'chitravahana_manipur', name: 'चित्रवाहन', subtitle: 'मणिपुर नरेश', parent: 'other_dynasties_proxy', clusterName: 'अन्य राजवंश (इन-लॉ)', yug: 'dwapar' },

    // --- धृतराष्ट्र का परिवार (कौरव) ---
    { id: 'gandhari_chandra', name: 'गांधारी', subtitle: 'धृतराष्ट्र की पत्नी', parent: 'subala_gandhara_king', spouseOf: 'dhritarashtra_chandra', yug: 'dwapar' },
    { id: 'vaishya_dasi_dhrita_chandra', name: 'वैश्या दासी', subtitle: 'धृतराष्ट्र की दासी', parent: '', spouseOf: 'dhritarashtra_chandra', yug: 'dwapar' },

    { id: 'duryodhan_chandra', name: 'दुर्योधन', subtitle: 'कौरव ज्येष्ठ', parent: 'dhritarashtra_chandra', mother: 'gandhari_chandra', yug: 'dwapar' },
    { id: 'bhanumati_duryodhan_chandra', name: 'भानुमती', subtitle: 'दुर्योधन की पत्नी', parent: '', spouseOf: 'duryodhan_chandra', yug: 'dwapar' },
    { id: 'laxman_kumara_chandra', name: 'लक्ष्मण कुमार', subtitle: 'दुर्योधन पुत्र', parent: 'duryodhan_chandra', mother: 'bhanumati_duryodhan_chandra', yug: 'dwapar' },
    { id: 'lakshmanaa_duryodhan_chandra', name: 'लक्ष्मणा', subtitle: 'दुर्योधन पुत्री', parent: 'duryodhan_chandra', mother: 'bhanumati_duryodhan_chandra', spouseOf: 'samba_krishna_chandra', yug: 'dwapar' },

    { id: 'dushasan_chandra', name: 'दुशासन', subtitle: 'कौरव', parent: 'dhritarashtra_chandra', mother: 'gandhari_chandra', yug: 'dwapar' },
    { id: 'vikarna_chandra', name: 'विकर्ण', subtitle: 'कौरव (धर्मात्मा)',parent: 'dhritarashtra_chandra', clusterName: 'कौरव (धृतराष्ट्र) वंश', mother: 'gandhari_chandra', yug: 'dwapar' },
    { id: 'yuyutsu_chandra', name: 'युयुत्सु', subtitle: 'धृतराष्ट्र पुत्र (दासी से)',parent: 'dhritarashtra_chandra', clusterName: 'कौरव (धृतराष्ट्र) वंश', mother: 'vaishya_dasi_dhrita_chandra', yug: 'dwapar' },
    { id: 'dushala_chandra', name: 'दुश्शला', subtitle: 'कौरवों की इकलौती बहन',parent: 'dhritarashtra_chandra', clusterName: 'कौरव (धृतराष्ट्र) वंश', mother: 'gandhari_chandra', spouseOf: 'jayadratha', yug: 'dwapar' },

{ id: 'kaurav_proxy', name: 'अन्य कौरव', subtitle: 'धृतराष्ट्र के 96 पुत्र', parent: 'dhritarashtra_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)', isProxy: true },
    { id: 'kaurava_bro_1_chandra', name: 'दुस्सह', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_2_chandra', name: 'जलसन्ध', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_3_chandra', name: 'सम', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_4_chandra', name: 'सह', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_5_chandra', name: 'विन्द', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_6_chandra', name: 'अनुविन्द', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_7_chandra', name: 'दुर्धर्ष', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_8_chandra', name: 'सुबाहु', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_9_chandra', name: 'दुष्प्रधर्षण', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_10_chandra', name: 'दुर्मर्षण', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_11_chandra', name: 'दुर्मुख', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_12_chandra', name: 'दुष्कर्म', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_13_chandra', name: 'कर्ण (कौरव)', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_14_chandra', name: 'विविंशति', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_15_chandra', name: 'सुलोचन', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_16_chandra', name: 'चित्र', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_17_chandra', name: 'उपचित्र', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_18_chandra', name: 'चित्राक्ष', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_19_chandra', name: 'चारुचित्र', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_20_chandra', name: 'शरासन', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_21_chandra', name: 'दुर्मद', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_22_chandra', name: 'दुष्प्रगाह', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_23_chandra', name: 'विवित्सु', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_24_chandra', name: 'विकट', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_25_chandra', name: 'ऊर्णनाभ', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_26_chandra', name: 'सुनाभ', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_27_chandra', name: 'नन्द', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_28_chandra', name: 'उपनन्दक', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_29_chandra', name: 'सेनापति', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_30_chandra', name: 'सुषेण (कौरव)', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_31_chandra', name: 'कुण्डोदर', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_32_chandra', name: 'महोदर', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_33_chandra', name: 'चित्रबाण', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_34_chandra', name: 'चित्रवर्मन', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_35_chandra', name: 'सुवर्मन', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_36_chandra', name: 'दुर्विमोचन', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_37_chandra', name: 'अयोबाहु', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_38_chandra', name: 'महाबाहु', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_39_chandra', name: 'चित्रांग', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_40_chandra', name: 'चित्रकुण्डल', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_41_chandra', name: 'भीमवेग', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_42_chandra', name: 'भीमबल', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_43_chandra', name: 'बलाकी', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_44_chandra', name: 'बलवर्धन', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_45_chandra', name: 'उग्रायुध', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_46_chandra', name: 'भीमकर्ण', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_47_chandra', name: 'कनकायु', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_48_chandra', name: 'दृढायुध', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_49_chandra', name: 'दृढवर्मन', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_50_chandra', name: 'दृढक्षत्र', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_51_chandra', name: 'सोमकीर्ति', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_52_chandra', name: 'अनूदर', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_53_chandra', name: 'दृढसन्ध', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_54_chandra', name: 'जरासन्ध (कौरव)', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_55_chandra', name: 'सत्यसन्ध', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_56_chandra', name: 'सद:सुवाक', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_57_chandra', name: 'उग्रश्रवा', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_58_chandra', name: 'अश्वसेन', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_59_chandra', name: 'सेनानी', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_60_chandra', name: 'दुष्पराजय', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_61_chandra', name: 'अपराजित', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_62_chandra', name: 'पण्डितक', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_63_chandra', name: 'विशालाक्ष', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_64_chandra', name: 'दुरावर', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_65_chandra', name: 'दृढहस्त', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_66_chandra', name: 'सुहस्त', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_67_chandra', name: 'वातवेग', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_68_chandra', name: 'सुवर्चा', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_69_chandra', name: 'आदित्यकेतु', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_70_chandra', name: 'बह्वाशी', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_71_chandra', name: 'नागदत्त', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_72_chandra', name: 'उग्रयायी', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_73_chandra', name: 'कवची', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_74_chandra', name: 'निषंगी', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_75_chandra', name: 'पाशी', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_76_chandra', name: 'दण्डधार', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_77_chandra', name: 'धनुर्ग्रह', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_78_chandra', name: 'उग्र', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_79_chandra', name: 'भीमरथ', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_80_chandra', name: 'वीर', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_81_chandra', name: 'वीरबाहु', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_82_chandra', name: 'अलोलुप', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_83_chandra', name: 'अभय', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_84_chandra', name: 'रौद्रकर्मा', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_85_chandra', name: 'दृढरथ', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_86_chandra', name: 'अनाधृष्य', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_87_chandra', name: 'कुण्डभेदी', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_88_chandra', name: 'विरावी', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_89_chandra', name: 'दीर्घलोचन', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_90_chandra', name: 'दीर्घबाहु', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_91_chandra', name: 'महाबाहु (द्वितीय)', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_92_chandra', name: 'व्यूढोरु', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_93_chandra', name: 'कनकध्वज', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_94_chandra', name: 'कुण्डाशी', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_95_chandra', name: 'विरजा', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },
    { id: 'kaurava_bro_96_chandra', name: 'वीर्यवान', subtitle: 'कौरव', parent: 'kaurav_proxy', mother: 'gandhari_chandra', yug: 'dwapar', clusterName: 'अन्य कौरव (96)' },

    { id: 'vridhakshetra_sindhu', name: 'वृद्धक्षत्र', subtitle: 'सिन्धु नरेश', parent: 'other_dynasties_proxy', clusterName: 'अन्य राजवंश (इन-लॉ)', yug: 'dwapar' },
    { id: 'jayadratha', name: 'जयद्रथ', subtitle: 'सिन्धु नरेश', parent: 'vridhakshetra_sindhu', yug: 'dwapar', parichay: 'कौरवों के बहनोई और सिन्धु नरेश। दुर्योधन की बहन दुश्शला के पति।' },
    { id: 'bharmaketu_chandra', name: 'भरमकेतु (दुर्मषण)', subtitle: 'दुशासन पुत्र', parent: 'dushasan_chandra', yug: 'dwapar' },

    // --- चच राजवंश - सिंध (मध्यकालीन सिन्धु नरेश) ---
    { id: 'chach_dynasty_proxy', name: 'चच राजवंश', subtitle: 'सिंध राजवंश', parent: 'jayadratha', yug: 'kali', clusterName: 'चच वंश (सिंध)', isProxy: true, parichay: 'सिंधु के प्राचीन शासकों (जयद्रथ) के बाद मध्यकाल में यह सिंध का अंतिम हिंदू राजवंश था।' },
    { id: 'chach_of_alor', name: 'चच', subtitle: 'चच वंश संस्थापक', parent: 'chach_dynasty_proxy', yug: 'kali', clusterName: 'चच वंश (सिंध)', parichay: 'इन्होंने बौद्ध राय राजवंश के बाद सिंध में हिंदू साम्राज्य स्थापित किया।' },
    { id: 'chandar_of_sindh', name: 'चंदर', subtitle: 'सिंध नरेश', parent: 'chach_of_alor', yug: 'kali', clusterName: 'चच वंश (सिंध)' },
    { id: 'dahir_of_sindh', name: 'राजा दाहीर', subtitle: 'सिंध के अंतिम हिंदू नरेश', parent: 'chach_of_alor', yug: 'kali', clusterName: 'चच वंश (सिंध)', parichay: 'सिंध के महान राजा जो 712 ईस्वी में मुहम्मद बिन कासिम के अरब आक्रमण से लड़ते हुए वीरगति को प्राप्त हुए।' },



    // --- पाण्डु का परिवार (पांडव) ---
    { id: 'madri_chandra', name: 'माद्री', subtitle: 'पाण्डु पत्नी', parent: '', spouseOf: 'pandu_chandra', yug: 'dwapar' },

    // युधिष्ठिर
        { id: 'pandu_dynasty_proxy', name: 'पाण्डव वंश', subtitle: 'पाण्डु के वंशज', parent: 'pandu_chandra', yug: 'dwapar', clusterName: 'पाण्डव (पाण्डु) वंश', isProxy: true },
    { id: 'yudhishthir_chandra', name: 'युधिष्ठिर', subtitle: 'धर्मराज / पांडव',parent: 'pandu_dynasty_proxy', clusterName: 'पाण्डव (पाण्डु) वंश', mother: 'kunti_chandra', yug: 'dwapar' },
    { id: 'devika_yudhishthir_chandra', name: 'देविका', subtitle: 'शिबि पुत्री', parent: 'sibi_anu', spouseOf: 'yudhishthir_chandra', yug: 'dwapar' },
        { id: 'upapandav_proxy', name: 'उपपांडव', subtitle: 'द्रौपदी के 5 पुत्र', parent: 'yudhishthir_chandra', yug: 'dwapar', clusterName: 'उपपांडव', isProxy: true },
    { id: 'prativindhya_chandra', name: 'प्रतिविन्ध्य', subtitle: 'द्रौपदी पुत्र (उपपांडव)', parent: 'upapandav_proxy', mother: 'draupadi_chandra', yug: 'dwapar', clusterName: 'उपपांडव' },
    { id: 'yaudheya_chandra', name: 'यौधेय', subtitle: 'युधिष्ठिर पुत्र', parent: 'yudhishthir_chandra', mother: 'devika_yudhishthir_chandra', yug: 'dwapar' },

    // भीम
    { id: 'bhim_chandra', name: 'भीम (वृकोदर)', subtitle: 'पवन पुत्र / पांडव',parent: 'pandu_dynasty_proxy', clusterName: 'पाण्डव (पाण्डु) वंश', mother: 'kunti_chandra', yug: 'dwapar' },
    { id: 'hidimba_wife_chandra', name: 'हिडिम्बा', subtitle: 'राक्षसी / भीम पत्नी', parent: '', spouseOf: 'bhim_chandra', yug: 'dwapar' },
    { id: 'valandhara_chandra', name: 'वलंधरा', subtitle: 'काशी पुत्री', parent: '', spouseOf: 'bhim_chandra', yug: 'dwapar' },
    { id: 'sutasoma_chandra', name: 'सुतसोम', subtitle: 'द्रौपदी पुत्र (उपपांडव)', parent: 'upapandav_proxy', mother: 'draupadi_chandra', yug: 'dwapar', clusterName: 'उपपांडव' },
    { id: 'ghatotkacha_chandra', name: 'घटोत्कच', subtitle: 'भीम-हिडिम्बा पुत्र', parent: 'bhim_chandra', mother: 'hidimba_wife_chandra', yug: 'dwapar' },
    { id: 'ahilawati_chandra', name: 'अहिलावती', subtitle: 'घटोत्कच पत्नी', parent: '', spouseOf: 'ghatotkacha_chandra', yug: 'dwapar' },
    { id: 'barbarik_chandra', name: 'बर्बरीक (खाटू श्याम)', subtitle: 'घटोत्कच पुत्र', parent: 'ghatotkacha_chandra', mother: 'ahilawati_chandra', yug: 'dwapar' },
    { id: 'anjanaparvan_chandra', name: 'अंजनपर्वा', subtitle: 'घटोत्कच पुत्र', parent: 'ghatotkacha_chandra', mother: 'ahilawati_chandra', yug: 'dwapar' },
    { id: 'meghavarna_chandra', name: 'मेघवर्ण', subtitle: 'घटोत्कच पुत्र', parent: 'ghatotkacha_chandra', mother: 'ahilawati_chandra', yug: 'dwapar' },
    { id: 'sarvaga_chandra', name: 'सर्वग', subtitle: 'भीम पुत्र', parent: 'bhim_chandra', mother: 'valandhara_chandra', yug: 'dwapar' },

    // अर्जुन
    { id: 'arjun_chandra', name: 'अर्जुन (पार्थ)', subtitle: 'इंद्र पुत्र / पांडव',parent: 'pandu_dynasty_proxy', clusterName: 'पाण्डव (पाण्डु) वंश', mother: 'kunti_chandra', yug: 'dwapar' },
    { id: 'ulupi_chandra', name: 'उलूपी', subtitle: 'नाग कन्या / अर्जुन पत्नी', parent: 'kauravya_naga_king', spouseOf: 'arjun_chandra', yug: 'dwapar' },
    { id: 'chitrangada_wife_chandra', name: 'चित्रांगदा', subtitle: 'मणिपुर पुत्री / अर्जुन पत्नी', parent: 'chitravahana_manipur', spouseOf: 'arjun_chandra', yug: 'dwapar' },
    { id: 'shrutakarma_chandra', name: 'श्रुतकर्मा', subtitle: 'द्रौपदी पुत्र (उपपांडव)', parent: 'upapandav_proxy', mother: 'draupadi_chandra', yug: 'dwapar', clusterName: 'उपपांडव' },
    { id: 'abhimanyu_chandra', name: 'अभिमन्यु', subtitle: 'अर्जुन-सुभद्रा पुत्र', parent: 'arjun_chandra', mother: 'subhadra_chandra', yug: 'dwapar' },
    { id: 'iravan_chandra', name: 'इरावन', subtitle: 'अर्जुन पुत्र', parent: 'arjun_chandra', mother: 'ulupi_chandra', yug: 'dwapar' },
    { id: 'babhruvahana_chandra', name: 'बभ्रुवाहन', subtitle: 'अर्जुन पुत्र', parent: 'arjun_chandra', mother: 'chitrangada_wife_chandra', yug: 'dwapar' },

    // नकुल
    { id: 'nakul_chandra', name: 'नकुल', subtitle: 'अश्विनी कुमार पुत्र',parent: 'pandu_dynasty_proxy', clusterName: 'पाण्डव (पाण्डु) वंश', mother: 'madri_chandra', yug: 'dwapar' },
    { id: 'karenumati_chandra', name: 'करेणुमती', subtitle: 'चेदि पुत्री / नकुल पत्नी', parent: 'shishupala_chandra', spouseOf: 'nakul_chandra', yug: 'dwapar' },
    { id: 'shatanika_upa_chandra', name: 'शतानीक', subtitle: 'द्रौपदी पुत्र (उपपांडव)', parent: 'upapandav_proxy', mother: 'draupadi_chandra', yug: 'dwapar', clusterName: 'उपपांडव' },
    { id: 'niramitra_chandra', name: 'निरमित्र', subtitle: 'नकुल पुत्र', parent: 'nakul_chandra', mother: 'karenumati_chandra', yug: 'dwapar' },

    // सहदेव
    { id: 'sahadev_chandra', name: 'सहदेव', subtitle: 'अश्विनी कुमार पुत्र',parent: 'pandu_dynasty_proxy', clusterName: 'पाण्डव (पाण्डु) वंश', mother: 'madri_chandra', yug: 'dwapar' },
    { id: 'vijaya_sahadev_chandra', name: 'विजया', subtitle: 'मद्र पुत्री / सहदेव पत्नी', parent: 'shalya_madra', spouseOf: 'sahadev_chandra', yug: 'dwapar' },
    { id: 'shrutasena_upa_chandra', name: 'श्रुतसेन', subtitle: 'द्रौपदी पुत्र (उपपांडव)', parent: 'upapandav_proxy', mother: 'draupadi_chandra', yug: 'dwapar', clusterName: 'उपपांडव' },
    { id: 'suhotra_sahadev_chandra', name: 'सुहोत्र', subtitle: 'सहदेव पुत्र', parent: 'sahadev_chandra', mother: 'vijaya_sahadev_chandra', yug: 'dwapar' },

    // --- कलियुग (परीक्षित से क्षेमक तक) ---
    { id: 'uttara_abhimanyu_chandra', name: 'उत्तरा', subtitle: 'विराट पुत्री / अभिमन्यु पत्नी', parent: 'virata', spouseOf: 'abhimanyu_chandra', yug: 'dwapar' },
    { id: 'parikshit_chandra', name: 'परीक्षित (द्वितीय)', subtitle: 'कलियुग के प्रथम कुरु राजा', parent: 'abhimanyu_chandra', mother: 'uttara_abhimanyu_chandra', yug: 'kali' },
    { id: 'madravati_parikshit_chandra', name: 'मद्रावती', subtitle: 'परीक्षित पत्नी', parent: '', spouseOf: 'parikshit_chandra', yug: 'kali' },

    { id: 'janamejaya_2_chandra', name: 'जनमेजय (द्वितीय)', subtitle: 'परीक्षित पुत्र (सर्पसत्र)', parent: 'parikshit_chandra', mother: 'madravati_parikshit_chandra', yug: 'kali' },
    { id: 'shrutasena_kali', name: 'श्रुतसेन', subtitle: 'परीक्षित पुत्र', parent: 'parikshit_chandra', mother: 'madravati_parikshit_chandra', yug: 'kali' },
    { id: 'ugrasena_kali', name: 'उग्रसेन', subtitle: 'परीक्षित पुत्र', parent: 'parikshit_chandra', mother: 'madravati_parikshit_chandra', yug: 'kali' },
    { id: 'bhimasena_kali', name: 'भीमसेन', subtitle: 'परीक्षित पुत्र', parent: 'parikshit_chandra', mother: 'madravati_parikshit_chandra', yug: 'kali' },

    { id: 'vapushtama_chandra', name: 'वपुष्टमा', subtitle: 'जनमेजय पत्नी', parent: '', spouseOf: 'janamejaya_2_chandra', yug: 'kali' },
    { id: 'shatanika_kali', name: 'शतानीक', subtitle: 'जनमेजय पुत्र', parent: 'janamejaya_2_chandra', mother: 'vapushtama_chandra', yug: 'kali' },
    { id: 'shankukarna_chandra', name: 'शंकुकर्ण', subtitle: 'जनमेजय पुत्र', parent: 'janamejaya_2_chandra', mother: 'vapushtama_chandra', yug: 'kali' },

    { id: 'ashvamedhadatta_chandra', name: 'अश्वमेधदत्त', subtitle: 'शतानीक पुत्र', parent: 'shatanika_kali', yug: 'kali' },
    { id: 'asimakrishna_chandra', name: 'असीमकृष्ण', subtitle: 'अश्वमेधदत्त पुत्र', parent: 'ashvamedhadatta_chandra', yug: 'kali' },
    { id: 'nichakshu_chandra', name: 'निचक्षु', subtitle: 'कौशाम्बी नरेश', parent: 'asimakrishna_chandra', yug: 'kali', parichay: 'इनके काल में हस्तिनापुर गंगा में बह गया, अतः इन्होंने कौशाम्बी को अपनी राजधानी बनाया।' },
    { id: 'ushna_kuru', name: 'उष्ण', subtitle: 'निचक्षु पुत्र', parent: 'nichakshu_chandra', yug: 'kali' },
    { id: 'chitraratha_kuru', name: 'चित्ररथ', subtitle: 'उष्ण पुत्र', parent: 'ushna_kuru', yug: 'kali' },
    { id: 'vrishniman_chandra', name: 'वृष्णिमान', subtitle: 'चित्ररथ पुत्र', parent: 'chitraratha_kuru', yug: 'kali' },
    { id: 'sushena_kuru', name: 'सुषेण', subtitle: 'वृष्णिमान पुत्र', parent: 'vrishniman_chandra', yug: 'kali' },
    { id: 'sunitha_kuru', name: 'सुनीथ', subtitle: 'सुषेण पुत्र', parent: 'sushena_kuru', yug: 'kali' },
    { id: 'rucha_kuru', name: 'रुच', subtitle: 'सुनीथ पुत्र', parent: 'sunitha_kuru', yug: 'kali' },
    { id: 'nrichakshu_chandra', name: 'नृचक्षु', subtitle: 'रुच पुत्र', parent: 'rucha_kuru', yug: 'kali' },
    { id: 'sukhibala_chandra', name: 'सुखिबल', subtitle: 'नृचक्षु पुत्र', parent: 'nrichakshu_chandra', yug: 'kali' },
    { id: 'pariplava_chandra', name: 'परिप्लव', subtitle: 'सुखिबल पुत्र', parent: 'sukhibala_chandra', yug: 'kali' },
    { id: 'sunaya_chandra', name: 'सुनय', subtitle: 'परिप्लव पुत्र', parent: 'pariplava_chandra', yug: 'kali' },
    { id: 'medhavi_chandra', name: 'मेधावी', subtitle: 'सुनय पुत्र', parent: 'sunaya_chandra', yug: 'kali' },
    { id: 'nripanjaya_chandra', name: 'नृपंजय', subtitle: 'मेधावी पुत्र', parent: 'medhavi_chandra', yug: 'kali' },
    { id: 'dhrva_kali', name: 'ध्रुव', subtitle: 'नृपंजय पुत्र', parent: 'nripanjaya_chandra', yug: 'kali' },
    { id: 'tigmajoti_chandra', name: 'तिग्मज्योति', subtitle: 'ध्रुव पुत्र', parent: 'dhrva_kali', yug: 'kali' },
    { id: 'brihadratha_kali', name: 'बृहद्रथ', subtitle: 'तिग्मज्योति पुत्र', parent: 'tigmajoti_chandra', yug: 'kali' },
    { id: 'vasudana_chandra', name: 'वसुदान', subtitle: 'बृहद्रथ पुत्र', parent: 'brihadratha_kali', yug: 'kali' },
    { id: 'shatanika_2_kali', name: 'शतानीक (द्वितीय)', subtitle: 'वसुदान पुत्र', parent: 'vasudana_chandra', yug: 'kali' },
    { id: 'udayana_chandra', name: 'उदयन', subtitle: 'शतानीक पुत्र', parent: 'shatanika_2_kali', yug: 'kali' },
    { id: 'ahinara_chandra', name: 'अहीनार', subtitle: 'उदयन पुत्र', parent: 'udayana_chandra', yug: 'kali' },
    { id: 'khandapani_chandra', name: 'खण्डपाणि', subtitle: 'अहीनार पुत्र', parent: 'ahinara_chandra', yug: 'kali' },
    { id: 'niramitra_kali', name: 'निरमित्र', subtitle: 'खण्डपाणि पुत्र', parent: 'khandapani_chandra', yug: 'kali' },
    { id: 'kshemaka_chandra', name: 'क्षेमक', subtitle: 'अंतिम कुरु राजा', parent: 'niramitra_kali', yug: 'kali', parichay: 'ये कुरु वंश के अंतिम राजा थे। इनके बाद कलियुग में यह राजवंश समाप्त हो गया।' },

    // --- तोमर / तंवर राजवंश (कलियुग - कुरु वंश की शाखा) ---
    // क्षेमक के बाद ऐतिहासिक अंतराल (Historical Gap) और दिल्ली/ग्वालियर के तोमर
    { id: 'tomar_medieval_link', name: 'ऐतिहासिक अंतराल (तोमर)', subtitle: 'अज्ञात पीढ़ियाँ', parent: 'kshemaka_chandra', yug: 'kali', parichay: 'क्षेमक (अंतिम कुरु राजा) के बाद उनके वंशज दक्षिण (गोदावरी क्षेत्र) चले गए थे, जो बाद में तोमर राजपूतों के रूप में दिल्ली लौटे।' },

    // दिल्ली के तोमर नरेश
    { id: 'tomar_dynasty_proxy', name: 'तोमर वंश', subtitle: 'दिल्ली/ग्वालियर राजवंश', parent: 'tomar_medieval_link', yug: 'kali', clusterName: 'तोमर वंश', isProxy: true },
    { id: 'tungpal_tomar', name: 'तुंगपाल (बिलनदेव)', subtitle: 'तोमर वंश मूल', parent: 'tomar_medieval_link', yug: 'kali', clusterName: 'तोमर वंश' },
    { id: 'anangpal_1_tomar', name: 'अनंगपाल तोमर (प्रथम)', subtitle: 'दिल्ली के संस्थापक', parent: 'tungpal_tomar', yug: 'kali', parichay: 'इन्होंने 736 ईस्वी में इंद्रप्रस्थ के प्राचीन खंडहरों पर फिर से ढिल्लिका (दिल्ली) शहर की स्थापना की।', clusterName: 'तोमर वंश' },
    { id: 'vasudeva_tomar', name: 'वासुदेव', subtitle: 'दिल्ली नरेश', parent: 'anangpal_1_tomar', yug: 'kali', clusterName: 'तोमर वंश' },
    { id: 'ganggeya_tomar', name: 'गांगेय', subtitle: 'दिल्ली नरेश', parent: 'vasudeva_tomar', yug: 'kali', clusterName: 'तोमर वंश' },
    { id: 'prithvimal_tomar', name: 'पृथ्वीमल', subtitle: 'दिल्ली नरेश', parent: 'ganggeya_tomar', yug: 'kali', clusterName: 'तोमर वंश' },
    { id: 'jayadeva_tomar', name: 'जयदेव', subtitle: 'दिल्ली नरेश', parent: 'prithvimal_tomar', yug: 'kali', clusterName: 'तोमर वंश' },
    { id: 'nirapal_tomar', name: 'नीरपाल', subtitle: 'दिल्ली नरेश', parent: 'jayadeva_tomar', yug: 'kali', clusterName: 'तोमर वंश' },
    { id: 'udayaraja_tomar', name: 'उदयराज', subtitle: 'दिल्ली नरेश', parent: 'nirapal_tomar', yug: 'kali', clusterName: 'तोमर वंश' },
    { id: 'vacharaja_tomar', name: 'वछराज', subtitle: 'दिल्ली नरेश', parent: 'udayaraja_tomar', yug: 'kali', clusterName: 'तोमर वंश' },
    { id: 'virapala_tomar', name: 'वीरपाल', subtitle: 'दिल्ली नरेश', parent: 'vacharaja_tomar', yug: 'kali', clusterName: 'तोमर वंश' },
    { id: 'anangpal_2_tomar', name: 'अनंगपाल तोमर (द्वितीय)', subtitle: 'महान दिल्ली सम्राट', parent: 'virapala_tomar', yug: 'kali', parichay: 'इन्होंने लाल कोट (Qutub Minar क्षेत्र) बनवाया और महरौली का लौह स्तंभ स्थापित किया। इन्होंने अजमेर के चौहान राजा सोमेश्वर को अपनी पुत्री ब्याही, जिससे पृथ्वीराज चौहान का जन्म हुआ।', clusterName: 'तोमर वंश' },

    // ग्वालियर के तोमर
    { id: 'veer_singh_dev_tomar', name: 'वीर सिंह देव', subtitle: 'ग्वालियर तोमर संस्थापक', parent: 'anangpal_2_tomar', yug: 'kali', parichay: 'दिल्ली छूटने के बाद 1394 ईस्वी में इन्होंने ग्वालियर पर तोमर साम्राज्य की नींव रखी।', clusterName: 'तोमर वंश' },
    { id: 'uddharan_dev_tomar', name: 'उद्धरण देव', subtitle: 'ग्वालियर नरेश', parent: 'veer_singh_dev_tomar', yug: 'kali', clusterName: 'तोमर वंश' },
    { id: 'viram_dev_tomar', name: 'वीरम देव', subtitle: 'ग्वालियर नरेश', parent: 'uddharan_dev_tomar', yug: 'kali', clusterName: 'तोमर वंश' },
    { id: 'ganpati_dev_tomar', name: 'गणपति देव', subtitle: 'ग्वालियर नरेश', parent: 'viram_dev_tomar', yug: 'kali', clusterName: 'तोमर वंश' },
    { id: 'dungar_singh_tomar', name: 'डूंगर सिंह', subtitle: 'ग्वालियर नरेश', parent: 'ganpati_dev_tomar', yug: 'kali', clusterName: 'तोमर वंश' },
    { id: 'kirti_singh_tomar', name: 'कीर्ति सिंह', subtitle: 'ग्वालियर नरेश', parent: 'dungar_singh_tomar', yug: 'kali', clusterName: 'तोमर वंश' },
    { id: 'kalyan_malla_tomar', name: 'कल्याण मल्ल', subtitle: 'ग्वालियर नरेश', parent: 'kirti_singh_tomar', yug: 'kali', clusterName: 'तोमर वंश' },
    { id: 'man_singh_tomar', name: 'राजा मान सिंह तोमर', subtitle: 'ग्वालियर के महान सम्राट', parent: 'kalyan_malla_tomar', yug: 'kali', parichay: 'इन्होंने ग्वालियर का प्रसिद्ध किला और गूजरी महल बनवाया। ये संगीत के महान संरक्षक थे (ध्रुपद)।', clusterName: 'तोमर वंश' },
    { id: 'vikramaditya_tomar', name: 'विक्रमादित्य तोमर', subtitle: 'ग्वालियर के अंतिम नरेश', parent: 'man_singh_tomar', yug: 'kali', parichay: 'ये पानीपत के प्रथम युद्ध (1526) में इब्राहिम लोदी की ओर से लड़ते हुए बाबर के खिलाफ मारे गए।', clusterName: 'तोमर वंश' },

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
    { id: 'kalchuri_medieval_link', name: 'ऐतिहासिक अंतराल (कलचुरी)', subtitle: 'अज्ञात पीढ़ियाँ', parent: 'vitihotra_haihaya', yug: 'kali', parichay: 'प्राचीन माहिष्मती के हैहय वंश के पतन के बाद 8वीं सदी में त्रिपुरी (मध्य प्रदेश) में कलचुरी वंश का उदय हुआ।' },

    { id: 'kalchuri_dynasty_proxy', name: 'कलचुरी वंश', subtitle: 'त्रिपुरी राजवंश', parent: 'kalchuri_medieval_link', yug: 'kali', clusterName: 'कलचुरी वंश', isProxy: true },
    { id: 'vamaraja_kalchuri', name: 'वामराज', subtitle: 'कलचुरी वंश मूल', parent: 'kalchuri_medieval_link', yug: 'kali', clusterName: 'कलचुरी वंश' },
    { id: 'shankaragana_1_kalchuri', name: 'शंकरगण (प्रथम)', subtitle: 'कलचुरी नरेश', parent: 'vamaraja_kalchuri', yug: 'kali', clusterName: 'कलचुरी वंश' },
    { id: 'kokalla_1_kalchuri', name: 'कोकल्ल (प्रथम)', subtitle: 'त्रिपुरी शाखा के संस्थापक', parent: 'shankaragana_1_kalchuri', yug: 'kali', parichay: '845 ईस्वी में इन्होंने त्रिपुरी (वर्तमान जबलपुर) को अपनी राजधानी बनाया और कलचुरी वंश की स्थापना की।', clusterName: 'कलचुरी वंश' },
    { id: 'shankaragana_2_kalchuri', name: 'शंकरगण (द्वितीय) मुग्धतुंग', subtitle: 'त्रिपुरी नरेश', parent: 'kokalla_1_kalchuri', yug: 'kali', clusterName: 'कलचुरी वंश' },
    { id: 'balaharsha_kalchuri', name: 'बालहर्ष', subtitle: 'त्रिपुरी नरेश', parent: 'shankaragana_2_kalchuri', yug: 'kali', clusterName: 'कलचुरी वंश' },
    { id: 'yuvarajadeva_1_kalchuri', name: 'युवराजदेव (प्रथम) केयूरवर्ष', subtitle: 'त्रिपुरी नरेश', parent: 'shankaragana_2_kalchuri', yug: 'kali', clusterName: 'कलचुरी वंश' },
    { id: 'lakshmanaraja_2_kalchuri', name: 'लक्ष्मणराज (द्वितीय)', subtitle: 'त्रिपुरी नरेश', parent: 'yuvarajadeva_1_kalchuri', yug: 'kali', clusterName: 'कलचुरी वंश' },
    { id: 'shankaragana_3_kalchuri', name: 'शंकरगण (तृतीय)', subtitle: 'त्रिपुरी नरेश', parent: 'lakshmanaraja_2_kalchuri', yug: 'kali', clusterName: 'कलचुरी वंश' },
    { id: 'yuvarajadeva_2_kalchuri', name: 'युवराजदेव (द्वितीय)', subtitle: 'त्रिपुरी नरेश', parent: 'lakshmanaraja_2_kalchuri', yug: 'kali', clusterName: 'कलचुरी वंश' },
    { id: 'kokalla_2_kalchuri', name: 'कोकल्ल (द्वितीय)', subtitle: 'त्रिपुरी नरेश', parent: 'yuvarajadeva_2_kalchuri', yug: 'kali', clusterName: 'कलचुरी वंश' },
    { id: 'gangeyadeva_kalchuri', name: 'गांगेयदेव (विक्रमादित्य)', subtitle: 'महान कलचुरी सम्राट', parent: 'kokalla_2_kalchuri', yug: 'kali', parichay: 'ये एक प्रतापी राजा थे जिन्होंने विक्रमादित्य की उपाधि धारण की और सोने, चांदी व तांबे के सिक्के चलवाए।', clusterName: 'कलचुरी वंश' },
    { id: 'lakshmikarna_kalchuri', name: 'लक्ष्मीकर्ण (कर्णदेव)', subtitle: 'चक्रवर्ती सम्राट', parent: 'gangeyadeva_kalchuri', yug: 'kali', parichay: 'इनके शासनकाल में कलचुरी साम्राज्य अपने चरम पर था। इन्होंने मालवा के राजा भोज को पराजित किया था।', clusterName: 'कलचुरी वंश' },
    { id: 'yashahkarna_kalchuri', name: 'यशःकर्ण', subtitle: 'त्रिपुरी नरेश', parent: 'lakshmikarna_kalchuri', yug: 'kali', clusterName: 'कलचुरी वंश' },
    { id: 'gayakarna_kalchuri', name: 'गयाकर्ण', subtitle: 'त्रिपुरी नरेश', parent: 'yashahkarna_kalchuri', yug: 'kali', clusterName: 'कलचुरी वंश' },
    { id: 'narasimha_kalchuri', name: 'नरसिंह', subtitle: 'त्रिपुरी नरेश', parent: 'gayakarna_kalchuri', yug: 'kali', clusterName: 'कलचुरी वंश' },
    { id: 'jayasimha_kalchuri', name: 'जयसिंह', subtitle: 'त्रिपुरी नरेश', parent: 'gayakarna_kalchuri', yug: 'kali', clusterName: 'कलचुरी वंश' },
    { id: 'vijayasimha_kalchuri', name: 'विजयसिंह', subtitle: 'अंतिम त्रिपुरी नरेश', parent: 'jayasimha_kalchuri', yug: 'kali', parichay: 'ये त्रिपुरी शाखा के अंतिम ज्ञात शासक थे, जिनके बाद कलचुरी साम्राज्य का पतन हो गया।', clusterName: 'कलचुरी वंश' },



    // --- संदर्भ के लिए अन्य राजवंश/पात्र (यदुवंश से जुड़े) ---
    { id: 'bhishmaka_chandra', name: 'भीष्मक', subtitle: 'विदर्भ नरेश', parent: '', yug: 'dwapar' },
    { id: 'rukmi_vidarbha_chandra', name: 'रुक्मी', subtitle: 'रुक्मिणी का भाई', parent: 'bhishmaka_chandra', yug: 'dwapar' },
    { id: 'damaghosha_chandra', name: 'दमघोष', subtitle: 'चेदि नरेश', parent: '', yug: 'dwapar' },
    { id: 'shishupala_chandra', name: 'शिशुपाल', subtitle: 'चेदि नरेश', parent: 'damaghosha_chandra', mother: 'shrutasrava_chandra', yug: 'dwapar' },

];
