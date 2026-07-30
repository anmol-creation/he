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

    // Descendants of Sharyati
    { id: 'sukanya', name: 'सुकन्या', subtitle: 'शर्याति पुत्री', parent: 'sharyati', yug: 'satya', parichay: 'इनका विवाह महर्षि च्यवन से हुआ था।' },
    { id: 'anarta', name: 'आनर्त', subtitle: 'शर्याति पुत्र', parent: 'sharyati', yug: 'satya', parichay: 'इनके नाम पर आनर्त देश (आधुनिक गुजरात का भाग) का नाम पड़ा।' },

    // Descendants of Nabhaga
    { id: 'ambarisha', name: 'अम्बरीष', subtitle: 'महान विष्णु भक्त', parent: 'nabhaga', yug: 'satya', parichay: 'दुर्वासा ऋषि के श्राप से सुदर्शन चक्र ने इनकी रक्षा की थी।' },

    { id: 'harishchandra', name: 'हरिश्चंद्र', subtitle: 'सत्यवादी', parent: 'vikukshi', yug: 'treta' },
    { id: 'bhagirath', name: 'भगीरथ', subtitle: 'गंगा को लाने वाले', parent: 'harishchandra', yug: 'treta' },
    { id: 'raghu', name: 'रघु', subtitle: 'रघुवंश के संस्थापक', parent: 'bhagirath', yug: 'treta' },
    { id: 'aja', name: 'अज', subtitle: 'रघु के पुत्र', parent: 'raghu', yug: 'treta' },
    { id: 'dasharath', name: 'दशरथ', subtitle: 'अयोध्या के चक्रवर्ती सम्राट', parent: 'aja', yug: 'treta' },
    { id: 'kaushalya', name: 'कौशल्या', subtitle: 'राम की माता', parent: '', spouseOf: 'dasharath', yug: 'treta', clusterName: 'दशरथ की 3 पत्नियाँ' },
    { id: 'kaikeyi', name: 'कैकेयी', subtitle: 'भरत की माता', parent: '', spouseOf: 'dasharath', yug: 'treta', clusterName: 'दशरथ की 3 पत्नियाँ' },
    { id: 'sumitra', name: 'सुमित्रा', subtitle: 'लक्ष्मण/शत्रुघ्न की माता', parent: '', spouseOf: 'dasharath', yug: 'treta', clusterName: 'दशरथ की 3 पत्नियाँ' },
    { id: 'ram', name: 'राम', subtitle: 'मर्यादा पुरुषोत्तम', parent: 'dasharath', mother: 'kaushalya', yug: 'treta' },
    { id: 'bharat', name: 'भरत', subtitle: 'आदर्श भ्राता', parent: 'dasharath', mother: 'kaikeyi', yug: 'treta' },
    { id: 'lakshman', name: 'लक्ष्मण', subtitle: 'शेषनाग अवतार', parent: 'dasharath', mother: 'sumitra', yug: 'treta' },
    { id: 'shatrughna', name: 'शत्रुघ्न', subtitle: 'राम के अनुज', parent: 'dasharath', mother: 'sumitra', yug: 'treta' },
    { id: 'sita', name: 'सीता', subtitle: 'जनक नंदिनी', parent: '', spouseOf: 'ram', yug: 'treta' },
    { id: 'luv', name: 'लव', subtitle: 'राम के पुत्र', parent: 'ram', mother: 'sita', yug: 'treta' },
    { id: 'kush', name: 'कुश', subtitle: 'राम के पुत्र', parent: 'ram', mother: 'sita', yug: 'treta' },
    { id: 'hanuman', name: 'हनुमान', subtitle: 'राम भक्त / शिव अंश', parent: 'vayu', yug: 'treta' },
    { id: 'sugriva', name: 'सुग्रीव', subtitle: 'वानरराज', parent: 'surya', yug: 'treta' },
    { id: 'ruma_wife', name: 'रूमा', subtitle: 'सुग्रीव की पत्नी', parent: '', spouseOf: 'sugriva', yug: 'treta', clusterName: 'सुग्रीव की पत्नियाँ' },
    { id: 'tara_wife', name: 'तारा', subtitle: 'सुग्रीव की पत्नी (बाली वध पश्चात्)', parent: '', spouseOf: 'sugriva', yug: 'treta', clusterName: 'सुग्रीव की पत्नियाँ' },
    { id: 'vali', name: 'बाली', subtitle: 'किष्किंधा नरेश', parent: 'indra', yug: 'treta' },
    { id: 'jatayu', name: 'जटायु', subtitle: 'गृध्रराज', parent: 'arun', yug: 'treta' }
];
