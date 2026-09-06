export const agarwalData = [

    // Pratapnagar / Agroha Branch (Splits from Shighra)
    {
        id: 'mohandas',
        name: 'मोहनदास',
        subtitle: 'शीघ्र पुत्र',
        parent: 'shighra',
        yug: 'dwapar',
        parichay: 'ये भगवान विष्णु (रंगनाथ) के परम भक्त थे। इन्होंने कावेरी नदी के तट पर भगवान रंगनाथ के कई भव्य मंदिर बनवाए थे।'
    },
    {
        id: 'neminath_suryavansh',
        name: 'नेमिनाथ',
        subtitle: 'मोहनदास पुत्र',
        parent: 'mohandas',
        yug: 'dwapar',
        parichay: 'इन्होंने प्राचीन काल में नेपाल में अपना राज्य स्थापित किया था और वहां शासन किया।'
    },
    {
        id: 'vrand',
        name: 'व्रंद',
        subtitle: 'नेमिनाथ पुत्र',
        parent: 'neminath_suryavansh',
        yug: 'dwapar',
        parichay: 'व्रंद महाराजा वल्लभ देव के पिता थे, जो कि प्रतापनगर के शासक बने।'
    },
    {
        id: 'raja_vallabh',
        name: 'महाराजा वल्लभ देव',
        subtitle: 'प्रतापनगर के राजा',
        parent: 'vrand',
        yug: 'dwapar',
        parichay: 'ये कुश की पीढ़ी में प्रतापनगर (राजस्थान) के सूर्यवंशी राजा थे। इन्होने अपने ज्येष्ठ पुत्र अग्रसेन को युद्ध से रोकना चाहा क्योंकि वह केवल 15 वर्ष के थे, लेकिन माता भगवती की आज्ञा पाकर दोनों युद्ध में गए। महाभारत युद्ध में पांडवों की ओर से लड़ते हुए ये भीष्म पितामह के बाणों से वीरगति को प्राप्त हुए। भगवान श्रीकृष्ण ने स्वयं इनके पुत्र अग्रसेन को सांत्वना दी थी और वल्लभ देव को धर्म और सत्य के लिए प्राण त्यागने वाला अमर शहीद बताया था।',
        kali_year: -111
    },
    {
        id: 'bhagwati_devi',
        name: 'भगवती देवी',
        subtitle: 'वल्लभ देव की पत्नी',
        parent: '',
        spouseOf: 'raja_vallabh',
        yug: 'dwapar',
        parichay: 'महारानी भगवती देवी (विदर्भनंदिनी) ने ही अपने युवा पुत्र अग्रसेन को धर्म-युद्ध (महाभारत) में भाग लेने की अनुमति दी थी।'
    },
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
    {
        id: 'shursen',
        name: 'शूरसेन',
        subtitle: 'महाराजा वल्लभ देव के पुत्र',
        parent: 'raja_vallabh',
        mother: 'bhagwati_devi',
        yug: 'dwapar',
        parichay: 'महाराजा अग्रसेन के छोटे भाई। कुछ ऐतिहासिक और सामाजिक मान्यताओं के अनुसार अग्रहरि (Agrahari) वैश्य समाज की उत्पत्ति शूरसेन या इनके वंशजों से मानी जाती है, हालाँकि कुछ अग्रहरि स्वयं को सीधे महाराजा अग्रसेन का वंशज भी मानते हैं।'
    },

    // Agrasen's Wives and 18 Sons
    {
        id: 'madhavi_agrasen',
        name: 'माधवी',
        subtitle: 'महाराजा अग्रसेन की पत्नी',
        parent: '',
        spouseOf: 'maharaja_agrasen',
        yug: 'dwapar',
        clusterName: 'अग्रसेन की पत्नी',
        parichay: 'ये नागराज कुमुद की पुत्री थीं (नागवंशी)। इनके स्वयंवर में देवराज इंद्र भी आए थे, लेकिन माधवी ने अग्रसेन को चुना। इसी कारण इंद्र क्रोधित हो गए और प्रतापनगर में वर्षा रोककर भयंकर अकाल ला दिया था।'
    },
    {
        id: 'nandini_agrasen',
        name: 'नंदिनी',
        subtitle: 'महाराजा अग्रसेन की पत्नी',
        parent: '',
        spouseOf: 'maharaja_agrasen',
        yug: 'dwapar',
        clusterName: 'अग्रसेन की पत्नी',
    },
    {
        id: 'pushpadev',
        name: 'पुष्पदेव',
        subtitle: 'गर्ग गोत्र',
        parent: 'agrawal_dynasty_proxy',
        mother: 'madhavi_agrasen',
        yug: 'dwapar',
        parichay: 'गर्ग गोत्र के प्रवर्तक। गुरु: गर्गाचार्य।',
        clusterName: 'अग्रवाल वंश'
    },
    {
        id: 'gendumal',
        name: 'गेंदुमल',
        subtitle: 'गोयल गोत्र',
        parent: 'agrawal_dynasty_proxy',
        mother: 'madhavi_agrasen',
        yug: 'dwapar',
        parichay: 'गोयल गोत्र के प्रवर्तक। गुरु: गोभिल।',
        clusterName: 'अग्रवाल वंश'
    },
    {
        id: 'godhar',
        name: 'गोधर',
        subtitle: 'गोयन गोत्र',
        parent: 'agrawal_dynasty_proxy',
        mother: 'madhavi_agrasen',
        yug: 'dwapar',
        parichay: 'गोयन गोत्र के प्रवर्तक। गुरु: गौतम।',
        clusterName: 'अग्रवाल वंश'
    },
    {
        id: 'virbhan',
        name: 'वीरभान',
        subtitle: 'बंसल गोत्र',
        parent: 'agrawal_dynasty_proxy',
        mother: 'madhavi_agrasen',
        yug: 'dwapar',
        parichay: 'बंसल गोत्र के प्रवर्तक। गुरु: वत्स।',
        clusterName: 'अग्रवाल वंश'
    },
    {
        id: 'manipal',
        name: 'मनिपाल',
        subtitle: 'कंसल गोत्र',
        parent: 'agrawal_dynasty_proxy',
        mother: 'madhavi_agrasen',
        yug: 'dwapar',
        parichay: 'कंसल गोत्र के प्रवर्तक। गुरु: कौशिक।',
        clusterName: 'अग्रवाल वंश'
    },
    {
        id: 'sindhupati',
        name: 'सिंधुपति',
        subtitle: 'सिंघल गोत्र',
        parent: 'agrawal_dynasty_proxy',
        mother: 'madhavi_agrasen',
        yug: 'dwapar',
        parichay: 'सिंघल गोत्र के प्रवर्तक। गुरु: शांडिल्य।',
        clusterName: 'अग्रवाल वंश'
    },
    {
        id: 'amritsen',
        name: 'अमृतसेन',
        subtitle: 'मंगल गोत्र',
        parent: 'agrawal_dynasty_proxy',
        mother: 'madhavi_agrasen',
        yug: 'dwapar',
        parichay: 'मंगल गोत्र के प्रवर्तक। गुरु: मांडव्य।',
        clusterName: 'अग्रवाल वंश'
    },
    {
        id: 'jaitrasangh',
        name: 'जैत्रसंघ',
        subtitle: 'जिंदल गोत्र',
        parent: 'agrawal_dynasty_proxy',
        mother: 'madhavi_agrasen',
        yug: 'dwapar',
        parichay: 'जिंदल गोत्र के प्रवर्तक। गुरु: जैमिनी।',
        clusterName: 'अग्रवाल वंश'
    },
    {
        id: 'tambolkarna',
        name: 'तंबोलकर्ण',
        subtitle: 'टिंगल गोत्र',
        parent: 'agrawal_dynasty_proxy',
        mother: 'madhavi_agrasen',
        yug: 'dwapar',
        parichay: 'टिंगल गोत्र के प्रवर्तक। गुरु: तांडव्य।',
        clusterName: 'अग्रवाल वंश'
    },
    {
        id: 'indramal',
        name: 'इंद्रमल',
        subtitle: 'ऐरन / एरन गोत्र',
        parent: 'agrawal_dynasty_proxy',
        mother: 'madhavi_agrasen',
        yug: 'dwapar',
        parichay: 'ऐरन गोत्र के प्रवर्तक। गुरु: और्व।',
        clusterName: 'अग्रवाल वंश'
    },
    {
        id: 'dhavandev',
        name: 'धवनदेव',
        subtitle: 'धारण गोत्र',
        parent: 'agrawal_dynasty_proxy',
        mother: 'madhavi_agrasen',
        yug: 'dwapar',
        parichay: 'धारण गोत्र के प्रवर्तक। गुरु: धौम्य।',
        clusterName: 'अग्रवाल वंश'
    },
    {
        id: 'madhavsen',
        name: 'माधवसेन',
        subtitle: 'मधुकुल गोत्र',
        parent: 'agrawal_dynasty_proxy',
        mother: 'madhavi_agrasen',
        yug: 'dwapar',
        parichay: 'मधुकुल गोत्र के प्रवर्तक। गुरु: मुद्गल।',
        clusterName: 'अग्रवाल वंश'
    },
    {
        id: 'vrinddev',
        name: 'वृंददेव',
        subtitle: 'बिंदल गोत्र',
        parent: 'agrawal_dynasty_proxy',
        mother: 'madhavi_agrasen',
        yug: 'dwapar',
        parichay: 'बिंदल गोत्र के प्रवर्तक। गुरु: वशिष्ठ।',
        clusterName: 'अग्रवाल वंश'
    },
    {
        id: 'mantrapati',
        name: 'मंत्रपति',
        subtitle: 'मित्तल गोत्र',
        parent: 'agrawal_dynasty_proxy',
        mother: 'madhavi_agrasen',
        yug: 'dwapar',
        parichay: 'मित्तल गोत्र के प्रवर्तक। गुरु: मैत्रेय।',
        clusterName: 'अग्रवाल वंश'
    },
    {
        id: 'tarachand',
        name: 'ताराचंद',
        subtitle: 'तायल गोत्र',
        parent: 'agrawal_dynasty_proxy',
        mother: 'madhavi_agrasen',
        yug: 'dwapar',
        parichay: 'तायल गोत्र के प्रवर्तक। गुरु: तैत्तिरेय।',
        clusterName: 'अग्रवाल वंश'
    },
    {
        id: 'vasudev_agrasen',
        name: 'वासुदेव',
        subtitle: 'भंदल गोत्र',
        parent: 'agrawal_dynasty_proxy',
        mother: 'madhavi_agrasen',
        yug: 'dwapar',
        parichay: 'भंदल गोत्र के प्रवर्तक। गुरु: भारद्वाज।',
        clusterName: 'अग्रवाल वंश'
    },
    {
        id: 'karanchand',
        name: 'करनचंद',
        subtitle: 'कुच्छल गोत्र',
        parent: 'agrawal_dynasty_proxy',
        mother: 'madhavi_agrasen',
        yug: 'dwapar',
        parichay: 'कुच्छल गोत्र के प्रवर्तक। गुरु: कश्यप।',
        clusterName: 'अग्रवाल वंश'
    },
    {
        id: 'narsev',
        name: 'नरसेव',
        subtitle: 'नांगल गोत्र',
        parent: 'agrawal_dynasty_proxy',
        mother: 'madhavi_agrasen',
        yug: 'dwapar',
        parichay: 'नांगल गोत्र के प्रवर्तक। गुरु: नागेंद्र।',
        clusterName: 'अग्रवाल वंश'
    },
];
