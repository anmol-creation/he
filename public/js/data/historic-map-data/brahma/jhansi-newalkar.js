export const jhansiNewalkarData = [
    // --- नेवालकर राजवंश (झांसी) ---
    {
        id: 'newalkar_dynasty_proxy',
        name: 'नेवालकर राजवंश (झांसी)',
        subtitle: 'मराठा साम्राज्य के सूबेदार',
        parent: 'brahma',
        yug: 'kali',
        isProxy: true,
        clusterName: 'झांसी का नेवालकर वंश',
        isProminent: true,
        gotra: 'गौतम / वशिष्ठ',
        parichay: 'नेवालकर वंश महाराष्ट्र के रत्नागिरी जिले के कोट नामक गाँव के करहाड़े ब्राह्मण थे। इनका गोत्र मुख्यतः गौतम या वशिष्ठ है। पेशवाओं ने इन्हें बुंदेलखंड (झांसी) का सूबेदार नियुक्त किया था।'
    },
    {
        id: 'raghunath_rao_newalkar_i',
        name: 'रघुनाथ राव (प्रथम)',
        subtitle: 'झांसी के प्रथम सूबेदार',
        parent: 'newalkar_dynasty_proxy',
        yug: 'kali',
        clusterName: 'झांसी का नेवालकर वंश',
        parichay: 'इन्होंने 1769 में झांसी में नेवालकर वंश की नींव रखी। वे एक कुशल प्रशासक थे और इन्होंने झांसी के किले और शहर का विकास किया।'
    },
    {
        id: 'shiv_rao_bhau_newalkar',
        name: 'शिव राव भाऊ',
        subtitle: 'झांसी के सूबेदार',
        parent: 'raghunath_rao_newalkar_i',
        yug: 'kali',
        clusterName: 'झांसी का नेवालकर वंश',
        parichay: 'रघुनाथ राव प्रथम के भाई। 1804 में इन्होंने अंग्रेजों के साथ एक संधि की, जिससे झांसी पर नेवालकर वंश का शासन पक्का हो गया।'
    },

    // शिव राव भाऊ के वंशज
    {
        id: 'ramchandra_rao_newalkar',
        name: 'रामचंद्र राव',
        subtitle: 'झांसी के राजा',
        parent: 'shiv_rao_bhau_newalkar',
        yug: 'kali',
        clusterName: 'झांसी का नेवालकर वंश',
        parichay: 'शिव राव भाऊ के पौत्र। अंग्रेजों ने इन्हें 1832 में "महाराजाधिराज फिदवी बादशाह जमजाह इंगलिस्तान" की उपाधि दी थी।'
    },
    {
        id: 'raghunath_rao_newalkar_ii',
        name: 'रघुनाथ राव (द्वितीय)',
        subtitle: 'झांसी के राजा',
        parent: 'shiv_rao_bhau_newalkar',
        yug: 'kali',
        clusterName: 'झांसी का नेवालकर वंश',
        parichay: 'रामचंद्र राव के निधन के बाद वे राजा बने, लेकिन वे एक कमजोर शासक साबित हुए।'
    },
    {
        id: 'gangadhar_rao_newalkar',
        gotra: 'गौतम / वशिष्ठ',
        name: 'महाराजा गंगाधर राव',
        subtitle: 'झांसी के महाराजा',
        parent: 'shiv_rao_bhau_newalkar',
        yug: 'kali',
        clusterName: 'झांसी का नेवालकर वंश',
        parichay: 'शिव राव भाऊ के पुत्र। 1843 में राजा बने। ये कला और संस्कृति के संरक्षक थे। इन्होंने रानी लक्ष्मीबाई से विवाह किया।'
    },

    // --- ताम्बे परिवार (रानी लक्ष्मीबाई का मायका) ---
    {
        id: 'tambe_family_proxy',
        name: 'ताम्बे परिवार',
        subtitle: 'मोरोपंत ताम्बे का वंश',
        parent: 'brahma',
        yug: 'kali',
        isProxy: true,
        clusterName: 'ताम्बे परिवार (रानी लक्ष्मीबाई)',
        gotra: 'गार्ग्य / गौतम / मुद्गल / शांडिल्य',
        parichay: 'करहाड़े ब्राह्मणों में ताम्बे उपनाम मुख्य रूप से गार्ग्य, गौतम, मुद्गल और शांडिल्य गोत्रों से संबंधित होता है।'
    },
    {
        id: 'moropant_tambe',
        gotra: 'गार्ग्य / गौतम / मुद्गल / शांडिल्य',
        name: 'मोरोपंत ताम्बे',
        subtitle: 'रानी लक्ष्मीबाई के पिता',
        parent: 'tambe_family_proxy',
        yug: 'kali',
        clusterName: 'ताम्बे परिवार (रानी लक्ष्मीबाई)',
        parichay: 'वे बिठूर में पेशवा बाजीराव द्वितीय के दरबार में काम करते थे। छबीली (मनु) इन्हीं की पुत्री थीं।'
    },
    {
        id: 'bhagirathi_sapre',
        name: 'भागीरथी सप्रे',
        subtitle: 'रानी लक्ष्मीबाई की माता',
        parent: '',
        spouseOf: 'moropant_tambe',
        yug: 'kali',
        clusterName: 'ताम्बे परिवार (रानी लक्ष्मीबाई)'
    },

    // --- रानी लक्ष्मीबाई ---
    {
        id: 'rani_lakshmibai',
        gotra: 'गार्ग्य / गौतम / मुद्गल / शांडिल्य (जन्म) | गौतम / वशिष्ठ (विवाह उपरांत)',
        name: 'रानी लक्ष्मीबाई (मनिकर्णिका)',
        subtitle: 'झांसी की रानी',
        parent: 'moropant_tambe',
        mother: 'bhagirathi_sapre',
        spouseOf: 'gangadhar_rao_newalkar',
        yug: 'kali',
        isProminent: true,
        clusterName: 'झांसी का नेवालकर वंश',
        parichay: 'बचपन का नाम मनिकर्णिका (मनु/छबीली)। 1857 के प्रथम भारतीय स्वतंत्रता संग्राम की एक प्रमुख नायिका। 18 जून 1858 को ग्वालियर में अंग्रेजों से लड़ते हुए वीरगति को प्राप्त हुईं।'
    },

    // --- लक्ष्मीबाई और गंगाधर राव की संतानें ---
    {
        id: 'damodar_rao_newalkar_1',
        name: 'दामोदर राव (प्रथम)',
        subtitle: 'जन्मजात पुत्र',
        parent: 'gangadhar_rao_newalkar',
        mother: 'rani_lakshmibai',
        yug: 'kali',
        clusterName: 'झांसी का नेवालकर वंश',
        parichay: '1851 में जन्म, लेकिन दुर्भाग्यवश केवल चार महीने की आयु में इनका निधन हो गया।'
    },
    {
        id: 'anand_rao_newalkar',
        name: 'आनंद राव (दामोदर राव)',
        subtitle: 'दत्तक पुत्र',
        parent: 'gangadhar_rao_newalkar',
        mother: 'rani_lakshmibai',
        yug: 'kali',
        clusterName: 'झांसी का नेवालकर वंश',
        parichay: 'गंगाधर राव के चचेरे भाई का पुत्र जिसे गोद लिया गया था और इसका नाम बदलकर दामोदर राव रखा गया। अंग्रेजों ने "व्यपगत के सिद्धांत" (Doctrine of Lapse) के तहत इन्हें उत्तराधिकारी मानने से इंकार कर दिया, जो 1857 की क्रांति का एक प्रमुख कारण बना।'
    },

    // दत्तक पुत्र दामोदर राव के आगे का वंश
    {
        id: 'lakshman_rao_newalkar',
        name: 'लक्ष्मण राव',
        subtitle: 'दामोदर राव के पुत्र',
        parent: 'anand_rao_newalkar',
        yug: 'kali',
        clusterName: 'झांसी का नेवालकर वंश'
    },
    {
        id: 'krishna_rao_newalkar',
        name: 'कृष्ण राव',
        subtitle: 'लक्ष्मण राव के पुत्र',
        parent: 'lakshman_rao_newalkar',
        yug: 'kali',
        clusterName: 'झांसी का नेवालकर वंश'
    },
    {
        id: 'chandrakant_rao_newalkar',
        name: 'चंद्रकांत राव',
        subtitle: 'कृष्ण राव के पुत्र',
        parent: 'krishna_rao_newalkar',
        yug: 'kali',
        clusterName: 'झांसी का नेवालकर वंश'
    },
    {
        id: 'arun_rao_newalkar',
        name: 'अरुण राव',
        subtitle: 'चंद्रकांत राव के पुत्र',
        parent: 'chandrakant_rao_newalkar',
        yug: 'kali',
        clusterName: 'झांसी का नेवालकर वंश' }
];
