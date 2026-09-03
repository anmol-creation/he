export const kashiData = [
    {
  id: 'kshatravriddha_chandra',
  name: 'क्षत्रवृद्ध',
  subtitle: 'आयु के पुत्र',
  lineLabel: 'क्षत्रवृद्ध',
  gender: 'male',
  parent: 'ayu_chandra',
  mother: 'prabha_chandra',
  yug: 'satya',
  clusterName: 'आयु के पुत्र'
},
    {
  id: 'sunahotra_kashi_chandra',
  name: 'सुनहोत्र',
  subtitle: 'क्षत्रवृद्ध पुत्र',
  gender: 'male',
  parent: 'kshatravriddha_chandra',
  yug: 'satya',
  clusterName: 'क्षत्रवृद्ध वंशी'
},
    {
  id: 'kusha_chandra',
  name: 'कुश',
  subtitle: 'सुनहोत्र पुत्र',
  lineLabel: 'कुश',
  gender: 'male',
  parent: 'sunahotra_kashi_chandra',
  yug: 'satya'
},
    {
  id: 'prati_kusha_chandra',
  name: 'प्रति',
  subtitle: 'कुश पुत्र',
  gender: 'male',
  parent: 'kusha_chandra',
  yug: 'satya',
  clusterName: 'कुश चंद्रवंश'
},
    {
  id: 'sanjaya_kusha_chandra',
  name: 'सञ्जय',
  subtitle: 'प्रति पुत्र',
  gender: 'male',
  parent: 'prati_kusha_chandra',
  yug: 'satya',
  clusterName: 'कुश चंद्रवंश'
},
    {
  id: 'jaya_kusha_chandra',
  name: 'जय',
  subtitle: 'सञ्जय पुत्र',
  gender: 'male',
  parent: 'sanjaya_kusha_chandra',
  yug: 'satya',
  clusterName: 'कुश चंद्रवंश'
},
    {
  id: 'krita_kusha_chandra',
  name: 'कृत',
  subtitle: 'जय पुत्र',
  gender: 'male',
  parent: 'jaya_kusha_chandra',
  yug: 'satya',
  clusterName: 'कुश चंद्रवंश'
},
    {
  id: 'haryavana_chandra',
  name: 'हर्यवन (हर्यश्व)',
  subtitle: 'कृत पुत्र',
  gender: 'male',
  parent: 'krita_kusha_chandra',
  yug: 'treta',
  clusterName: 'कुश चंद्रवंश'
},
    {
  id: 'sahadeva_kusha_chandra',
  name: 'सहदेव',
  subtitle: 'हर्यवन पुत्र',
  gender: 'male',
  parent: 'haryavana_chandra',
  yug: 'treta',
  clusterName: 'कुश चंद्रवंश'
},
    {
  id: 'hina_chandra',
  name: 'हीन',
  subtitle: 'सहदेव पुत्र',
  gender: 'male',
  parent: 'sahadeva_kusha_chandra',
  yug: 'treta',
  clusterName: 'कुश चंद्रवंश'
},
    {
  id: 'jayasena_kusha_chandra',
  name: 'जयसेन',
  subtitle: 'हीन पुत्र',
  gender: 'male',
  parent: 'hina_chandra',
  yug: 'treta',
  clusterName: 'कुश चंद्रवंश'
},
    {
  id: 'sankriti_kusha_chandra',
  name: 'सङ्कृति',
  subtitle: 'जयसेन पुत्र',
  gender: 'male',
  parent: 'jayasena_kusha_chandra',
  yug: 'treta',
  clusterName: 'कुश चंद्रवंश'
},
    {
  id: 'jaya_sankriti_chandra',
  name: 'जय (क्षात्रधर्मा)',
  subtitle: 'सङ्कृति पुत्र',
  gender: 'male',
  parent: 'sankriti_kusha_chandra',
  yug: 'treta',
  parichay: 'यह महान महारथी थे, जिन्होंने क्षत्रियों के धर्म का पूरी निष्ठा से पालन किया।',
  clusterName: 'कुश चंद्रवंश'
},
    {
  id: 'kashya',
  name: 'काश्य',
  subtitle: 'काशी के संस्थापक',
  gender: 'male',
  parent: 'sunahotra_kashi_chandra',
  yug: 'satya',
  parichay: 'इन्हीं के नाम पर काशी (वाराणसी) नगर का नामकरण हुआ माना जाता है।'
},
    {
  id: 'rashtra_chandra',
  name: 'राष्ट्र',
  subtitle: 'काश्य पुत्र',
  gender: 'male',
  parent: 'kashya',
  yug: 'satya',
  clusterName: 'काशी राजवंश'
},
    {
  id: 'dirghatapa_chandra',
  name: 'दीर्घतपा',
  subtitle: 'राष्ट्र पुत्र',
  gender: 'male',
  parent: 'rashtra_chandra',
  yug: 'satya',
  clusterName: 'काशी राजवंश'
},
    {
  id: 'dhanvantari_chandra',
  name: 'धन्वंतरि',
  subtitle: 'आयुर्वेद प्रवर्तक / विष्णु अंशावतार',
  gender: 'male',
  parent: 'dirghatapa_chandra',
  yug: 'satya',
  parichay: 'समुद्र मंथन से अमृत कलश लेकर प्रकट हुए थे। काशी राजवंश में इनका जन्म हुआ था और ये महान वैद्य माने जाते हैं।',
  clusterName: 'काशी राजवंश'
},
    {
  id: 'ketuman_chandra',
  name: 'केतुमान',
  subtitle: 'धन्वंतरि पुत्र',
  gender: 'male',
  parent: 'dhanvantari_chandra',
  yug: 'satya',
  clusterName: 'काशी राजवंश'
},
    {
  id: 'bhimaratha_chandra',
  name: 'भीमरथ',
  subtitle: 'केतुमान पुत्र',
  gender: 'male',
  parent: 'ketuman_chandra',
  yug: 'treta',
  clusterName: 'काशी राजवंश'
},
    {
  id: 'divodasa_chandra',
  name: 'दिवोदास',
  subtitle: 'काशी नरेश',
  gender: 'male',
  parent: 'bhimaratha_chandra',
  yug: 'treta',
  parichay: 'काशी के महान राजा, जिन्होंने क्षेमक राक्षस से काशी को मुक्त कराया था।',
  clusterName: 'काशी राजवंश'
},
    {
  id: 'pratardana_chandra',
  name: 'प्रतर्दन',
  subtitle: 'दिवोदास पुत्र (ऋतध्वज)',
  gender: 'male',
  parent: 'divodasa_chandra',
  yug: 'treta',
  parichay: 'इन्हें ऋतध्वज भी कहा जाता है। इन्होंने पातालकेतु राक्षस का वध कर मदालसा से विवाह किया।',
  clusterName: 'काशी राजवंश'
},
    {
  id: 'madalasa_chandra',
  name: 'मदालसा',
  subtitle: 'प्रतर्दन (ऋतध्वज) पत्नी',
  gender: 'female',
  parent: '',
  spouseOf: 'pratardana_chandra',
  yug: 'treta',
  clusterName: 'काशी राजवंश',
  parichay: 'विश्वावसु गन्धर्वराज की पुत्री। यह महान विदुषी और ब्रह्मवादिनी थीं, जिन्होंने पालने में झुलाते हुए ही अपने पुत्रों को ब्रह्मज्ञान दे दिया था।'
},
    {
  id: 'vikranta_chandra',
  name: 'विक्रान्त',
  subtitle: 'प्रतर्दन-मदालसा पुत्र',
  gender: 'male',
  parent: 'pratardana_chandra',
  mother: 'madalasa_chandra',
  yug: 'treta',
  parichay: 'मदालसा के ज्ञान उपदेश से यह बचपन में ही ब्रह्मज्ञानी (संन्यासी) हो गए।',
  clusterName: 'प्रतर्दन अन्य के पुत्र'
},
    {
  id: 'subahu_kashi_chandra',
  name: 'सुबाहु',
  subtitle: 'प्रतर्दन-मदालसा पुत्र',
  gender: 'male',
  parent: 'pratardana_chandra',
  mother: 'madalasa_chandra',
  yug: 'treta',
  parichay: 'मदालसा के ज्ञान उपदेश से यह बचपन में ही ब्रह्मज्ञानी हो गए।',
  clusterName: 'प्रतर्दन अन्य के पुत्र'
},
    {
  id: 'arimardana_chandra',
  name: 'अरि मर्दन',
  subtitle: 'प्रतर्दन-मदालसा पुत्र',
  gender: 'male',
  parent: 'pratardana_chandra',
  mother: 'madalasa_chandra',
  yug: 'treta',
  parichay: 'मदालसा के ज्ञान उपदेश से यह बचपन में ही ब्रह्मज्ञानी हो गए।',
  clusterName: 'प्रतर्दन अन्य के पुत्र'
},
    {
  id: 'vatsa_kashi_chandra',
  name: 'वत्स',
  subtitle: 'प्रतर्दन पुत्र',
  gender: 'male',
  parent: 'pratardana_chandra',
  yug: 'treta',
  clusterName: 'प्रतर्दन अन्य के पुत्र'
},
    {
  id: 'alarka_chandra',
  name: 'अलर्क',
  subtitle: 'काशी नरेश',
  gender: 'male',
  parent: 'pratardana_chandra',
  mother: 'madalasa_chandra',
  yug: 'treta',
  parichay: 'महान तपस्वी राजा जिसने 66,000 वर्ष तक राज किया और फिर दत्तात्रेय से ज्ञान प्राप्त कर मोक्ष पाया। यह मदालसा के सबसे छोटे पुत्र थे, जिन्हें राजधर्म की शिक्षा मिली थी।'
},
    {
  id: 'sannati_kashi_chandra',
  name: 'सन्नति',
  subtitle: 'अलर्क पुत्र',
  gender: 'male',
  parent: 'alarka_chandra',
  yug: 'treta'
},
    {
  id: 'sunitha_kashi_chandra',
  name: 'सुनीथ',
  subtitle: 'सन्नति पुत्र',
  gender: 'male',
  parent: 'sannati_kashi_chandra',
  yug: 'treta'
},
    {
  id: 'suketu_kashi_chandra',
  name: 'सुकेतु',
  subtitle: 'सुनीथ पुत्र',
  gender: 'male',
  parent: 'sunitha_kashi_chandra',
  yug: 'treta'
},
    {
  id: 'satyaketu_kashi_chandra',
  name: 'सत्यकेतु',
  subtitle: 'सुकेतु पुत्र',
  gender: 'male',
  parent: 'suketu_kashi_chandra',
  yug: 'treta'
},
    {
  id: 'dhrishtaketu_kashi_chandra',
  name: 'धृष्टकेतु',
  subtitle: 'सत्यकेतु पुत्र',
  gender: 'male',
  parent: 'satyaketu_kashi_chandra',
  yug: 'treta'
},
    {
  id: 'sukumara_kashi_chandra',
  name: 'सुकुमार',
  subtitle: 'धृष्टकेतु पुत्र',
  gender: 'male',
  parent: 'dhrishtaketu_kashi_chandra',
  yug: 'treta'
},
    {
  id: 'vitihotra_kashi_chandra',
  name: 'वीतिहोत्र',
  subtitle: 'सुकुमार पुत्र',
  gender: 'male',
  parent: 'sukumara_kashi_chandra',
  yug: 'treta'
},
    {
  id: 'bharga_kashi_chandra',
  name: 'भर्ग',
  subtitle: 'वीतिहोत्र पुत्र',
  gender: 'male',
  parent: 'vitihotra_kashi_chandra',
  yug: 'treta'
},
    {
  id: 'bhargabhumi_chandra',
  name: 'भार्गभूमि',
  subtitle: 'भर्ग पुत्र',
  gender: 'male',
  parent: 'bharga_kashi_chandra',
  yug: 'treta',
  parichay: 'भर्ग से भार्गभूमि हुए। इन्हीं के वंशज आगे चलकर भार्गव (वत्स) कहलाए।'
},
    {
  id: 'amba_chandra',
  name: 'अम्बा',
  subtitle: 'काशी पुत्री',
  gender: 'female',
  parent: 'kashya',
  yug: 'dwapar',
  parichay: 'काशी नरेश की सबसे बड़ी पुत्री। भीष्म द्वारा अपहरण के बाद इन्होने भीष्म से विवाह का आग्रह किया, परंतु उनके ब्रह्मचर्य व्रत के कारण अस्वीकार कर दी गईं। बाद में इन्होने शिखंडी के रूप में जन्म लिया।',
  clusterName: 'आयु चंद्रवंशी'
}
];
