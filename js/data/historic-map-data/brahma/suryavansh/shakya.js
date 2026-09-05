export const shakyaData = [

    // Shakya Siblings (Children of King Shakya / Sihahanu)
    {
        id: 'shuddhodana',
        name: 'शुद्धोदन',
        subtitle: 'कपिलवस्तु के राजा',
        parent: 'shakya_king',
        yug: 'kali',
        parichay: 'गौतम बुद्ध के पिता।',
        clusterName: 'शाक्य वंश'
    },
    {
        id: 'shuklodana',
        name: 'शुक्लोदन',
        subtitle: 'शाक्य पुत्र',
        parent: 'shakya_king',
        yug: 'kali',
        clusterName: 'शाक्य वंश'
    },
    {
        id: 'amitodana',
        name: 'अमितोदन',
        subtitle: 'शाक्य पुत्र',
        parent: 'shakya_king',
        yug: 'kali',
        parichay: 'बुद्ध के चाचा और आनंद के पिता।',
        clusterName: 'शाक्य वंश'
    },
    {
        id: 'amita_shakya',
        name: 'पमिता (अमिता)',
        subtitle: 'शाक्य पुत्री',
        parent: 'shakya_king',
        yug: 'kali',
        parichay: 'बुद्ध की बुआ, जिनका विवाह कोलिय वंश के राजा सुप्पबुद्ध से हुआ था। यशोधरा और देवदत्त इन्हीं की संतान थे।',
        clusterName: 'शाक्य वंश'
    },

    {
        id: 'suppabuddha',
        name: 'सुप्पबुद्ध',
        subtitle: 'कोलिय राजा',
        parent: '',
        spouseOf: 'amita_shakya',
        yug: 'kali',
        parichay: 'कोलिय वंश के शासक। यशोधरा और देवदत्त के पिता।',
        clusterName: 'शाक्य वंश'
    },
    {
        id: 'devadatta',
        name: 'देवदत्त',
        subtitle: 'सुप्पबुद्ध पुत्र',
        parent: 'suppabuddha',
        mother: 'amita_shakya',
        yug: 'kali',
        parichay: 'बुद्ध के चचेरे भाई (बुआ के बेटे)। ये बाद में बुद्ध से ईर्ष्या करने लगे थे और उन्होंने बौद्ध संघ को तोड़ने का प्रयास किया था।',
        clusterName: 'शाक्य वंश'
    },

    {
        id: 'maya_devi',
        name: 'माया देवी',
        subtitle: 'शुद्धोदन पत्नी',
        parent: '',
        spouseOf: 'shuddhodana',
        yug: 'kali',
        parichay: 'गौतम बुद्ध की सगी माता, जिनका बुद्ध के जन्म के सात दिन बाद निधन हो गया था।',
        clusterName: 'शाक्य वंश'
    },
    {
        id: 'mahapajapati_gotami',
        name: 'महाप्रजापति गौतमी',
        subtitle: 'शुद्धोदन पत्नी',
        parent: '',
        spouseOf: 'shuddhodana',
        yug: 'kali',
        parichay: 'गौतम बुद्ध की मौसी और सौतेली माता। ये पहली महिला थीं जिन्होंने बौद्ध संघ में भिक्षुणी के रूप में प्रवेश लिया था।'
    },

    // Children of Shuddhodana
    {
        id: 'siddhartha_buddha',
        name: 'सिद्धार्थ (गौतम बुद्ध)',
        subtitle: 'बौद्ध धर्म के संस्थापक',
        parent: 'shuddhodana',
        mother: 'maya_devi',
        yug: 'kali',
        parichay: 'हालाँकि बौद्ध ग्रंथ इनका वंश इक्ष्वाकु (ओक्काक) से जोड़ते हैं, लेकिन पुराणों में इन्हें सीधे इसी अयोध्या वंशावली में लिखा गया है। ज्ञान प्राप्ति के बाद ये बुद्ध कहलाये।',
        clusterName: 'शाक्य वंश'
    },
    {
        id: 'nanda_shakya',
        name: 'नन्द',
        subtitle: 'शुद्धोदन पुत्र',
        parent: 'shuddhodana',
        mother: 'mahapajapati_gotami',
        yug: 'kali',
        parichay: 'गौतम बुद्ध के सौतेले भाई। बाद में इन्होंने भी बुद्ध से दीक्षा लेकर भिक्षु जीवन अपना लिया था।',
        clusterName: 'शाक्य वंश'
    },
    {
        id: 'sundari_nanda',
        name: 'सुंदरी नंदा',
        subtitle: 'शुद्धोदन पुत्री',
        parent: 'shuddhodana',
        mother: 'mahapajapati_gotami',
        yug: 'kali',
        parichay: 'बुद्ध की सौतेली बहन।',
        clusterName: 'शाक्य वंश'
    },

    // Family of Buddha
    {
        id: 'yashodhara',
        name: 'यशोधरा',
        subtitle: 'गौतम बुद्ध की पत्नी',
        parent: 'suppabuddha',
        mother: 'amita_shakya',
        spouseOf: 'siddhartha_buddha',
        yug: 'kali',
        parichay: 'सिद्धार्थ (बुद्ध) की पत्नी और कोलिय राजा सुप्पबुद्ध की पुत्री। ये देवदत्त की सगी बहन थीं।',
        clusterName: 'शाक्य वंश'
    },
    {
        id: 'rahula',
        name: 'राहुल',
        subtitle: 'सिद्धार्थ पुत्र',
        parent: 'siddhartha_buddha',
        mother: 'yashodhara',
        yug: 'kali',
        parichay: 'गौतम बुद्ध के इकलौते पुत्र, जो बाद में अपने पिता के शिष्य (भिक्षु) बन गए।',
        clusterName: 'शाक्य वंश'
    },

    // Children of Amitodana (Buddha's cousins)
    {
        id: 'ananda_shakya',
        name: 'आनंद',
        subtitle: 'अमितोदन पुत्र',
        parent: 'amitodana',
        yug: 'kali',
        parichay: 'गौतम बुद्ध के चचेरे भाई और उनके सबसे प्रिय व प्रमुख शिष्य। इन्होने ही बुद्ध के अधिकांश उपदेशों को कंठस्थ किया था।',
        clusterName: 'शाक्य वंश'
    },
    {
        id: 'anuruddha',
        name: 'अनुरुद्ध',
        subtitle: 'अमितोदन पुत्र',
        parent: 'amitodana',
        yug: 'kali',
        parichay: 'बुद्ध के चचेरे भाई और प्रमुख भिक्षु।',
        clusterName: 'शाक्य वंश'
    },

    {
        id: 'prasenajit',
        name: 'प्रसेनजित',
        subtitle: 'राहुल पुत्र',
        parent: 'rahula',
        yug: 'kali',
        parichay: 'पुराणों के अनुसार राहुल के पुत्र। (हालाँकि बौद्ध ग्रंथों में प्रसेनजित कोशल के एक समकालीन राजा थे)।',
        clusterName: 'शाक्य वंश'
    },

    // Maurya Dynasty (Branched from Shakya/Ikshvaku line)
    {
        id: 'moriya_clan',
        name: 'मोरिय (मौर्य) वंश',
        subtitle: 'शाक्य वंश की शाखा',
        parent: 'shakya_king',
        yug: 'kali',
        parichay: 'बौद्ध ग्रंथों (महावंश) के अनुसार, कोशल नरेश विडूडभ के आक्रमण से बचकर कुछ शाक्य हिमालय की तराई में पिप्पलीवन चले गए थे। मोरों (Peacocks) की अधिकता के कारण वे \"मोरिय\" या मौर्य कहलाये।',
        clusterName: 'मौर्य वंश'
    },
    {
        id: 'maurya_dynasty_proxy',
        name: 'मौर्य वंश',
        subtitle: 'चन्द्रगुप्त के वंशज',
        parent: 'moriya_clan',
        yug: 'kali',
        clusterName: 'मौर्य वंश',
        isProxy: true
    },
    {
        id: 'chandragupta_maurya',
        name: 'चन्द्रगुप्त मौर्य',
        subtitle: 'मौर्य साम्राज्य के संस्थापक',
        parent: 'maurya_dynasty_proxy',
        clusterName: 'मौर्य वंश',
        yug: 'kali',
        parichay: 'इन्होंने चाणक्य की सहायता से नंद वंश का नाश किया और भारत के सबसे विशाल मौर्य साम्राज्य की स्थापना की। वर्तमान में "कुशवाहा, कोइरी, काछी, सैनी और शाक्य/मौर्य" कृषक समाज गर्व से इसी वंश (कुश->शाक्य->मौर्य) से अपनी उत्पत्ति मानते हैं।'
    },
    {
        id: 'bindusara',
        name: 'बिन्दुसार',
        subtitle: 'चन्द्रगुप्त पुत्र',
        parent: 'chandragupta_maurya',
        yug: 'kali',
        clusterName: 'मौर्य वंश'
    },
    {
        id: 'ashoka_great',
        name: 'सम्राट अशोक',
        subtitle: 'महान मौर्य सम्राट',
        parent: 'bindusara',
        clusterName: 'मौर्य वंश',
        yug: 'kali',
        parichay: 'ये भारत के सबसे महान सम्राटों में से एक थे। कलिंग युद्ध के बाद इन्होंने बौद्ध धर्म अपना लिया और शांति व धम्म का प्रचार किया।'
    },
    {
        id: 'brihadratha_maurya',
        name: 'बृहद्रथ मौर्य',
        subtitle: 'अंतिम मौर्य सम्राट',
        parent: 'ashoka_great',
        clusterName: 'मौर्य वंश',
        yug: 'kali',
        parichay: 'ये अंतिम मौर्य सम्राट थे, जिनकी हत्या उनके सेनापति पुष्यमित्र शुंग ने की थी।'
    },
    {
        id: 'kshudraka',
        name: 'क्षुद्रक',
        subtitle: 'प्रसेनजित पुत्र',
        parent: 'prasenajit',
        yug: 'kali'
    },
    {
        id: 'kundaka',
        name: 'कुण्डक',
        subtitle: 'क्षुद्रक पुत्र',
        parent: 'kshudraka',
        yug: 'kali'
    },
    {
        id: 'suratha',
        name: 'सुरथ',
        subtitle: 'कुण्डक पुत्र',
        parent: 'kundaka',
        yug: 'kali'
    },
    {
        id: 'sumitra_king',
        name: 'सुमित्र',
        subtitle: 'इक्ष्वाकु वंश के अंतिम राजा',
        parent: 'suratha',
        yug: 'kali',
        parichay: 'पुराणों के अनुसार सुमित्र इक्ष्वाकु/सूर्यवंश के अंतिम प्रतापी राजा थे। नंद वंश के महापद्म नंद ने इन्हें पराजित कर कोशल को मगध साम्राज्य में मिला लिया था।'
    },
];
