export const nagavanshData = [
    // ----------------------------------------------------
    // NAGAVANSH (Serpent Dynasty) & TAANK RAJPUTS
    // ----------------------------------------------------
    {
        id: 'kadru',
        name: 'कद्रू',
        subtitle: 'नागों की माता',
        parent: 'maharishi_kashyapa',
        yug: 'satyug',
        gender: 'female',
        clusterName: 'नागवंश (Nagavansh)',
        parichay: 'दक्ष प्रजापति की पुत्री और महर्षि कश्यप की पत्नी। इन्हें सभी नागों (सर्पों) की माता माना जाता है।'
    },
    {
        id: 'takshaka_naga',
        name: 'तक्षक (Takshaka)',
        subtitle: 'नागों के राजा',
        parent: 'kadru',
        yug: 'dwapar',
        gender: 'male',
        isProminent: true,
        clusterName: 'नागवंश (Nagavansh)',
        parichay: 'महर्षि कश्यप और कद्रू के पुत्र तथा वासुकी और शेषनाग के भाई। महाभारत में राजा परीक्षित को इन्होंने ही डसा था। यह टांक (तक्षक) क्षत्रिय वंश के आदि-पुरुष माने जाते हैं।'
    },
    {
        id: 'takshaka_wife',
        name: 'तक्षक की पत्नी',
        subtitle: 'अश्वसेन की माता',
        parent: '',
        yug: 'dwapar',
        gender: 'female',
        clusterName: 'नागवंश (Nagavansh)',
        parichay: 'खांडव वन दहन के समय अर्जुन के बाणों से इनकी मृत्यु हो गई थी, जिसका बदला लेने के लिए इनके पुत्र अश्वसेन ने महाभारत युद्ध में हिस्सा लिया।'
    },
    {
        id: 'ashvasena_naga',
        name: 'अश्वसेन (Ashvasena)',
        subtitle: 'तक्षक के महापराक्रमी पुत्र',
        parent: 'takshaka_naga',
        yug: 'dwapar',
        gender: 'male',
        clusterName: 'नागवंश (Nagavansh)',
        parichay: 'तक्षक के पुत्र। खांडव वन दहन के समय यह बच गए थे। बाद में कुरुक्षेत्र के युद्ध में इन्होंने कर्ण के बाण पर बैठकर अर्जुन से अपनी माता की मृत्यु का बदला लेने का प्रयास किया था।'
    },
    {
        id: 'jvala_naga',
        name: 'ज्वाला (Jvala)',
        subtitle: 'तक्षक की पुत्री',
        parent: 'takshaka_naga',
        yug: 'dwapar',
        gender: 'female',
        clusterName: 'नागवंश (Nagavansh)'
    },
    {
        id: 'srutasena_naga',
        name: 'श्रुतसेन (Srutasena)',
        subtitle: 'तक्षक के छोटे भाई',
        parent: 'kadru',
        yug: 'dwapar',
        gender: 'male',
        clusterName: 'नागवंश (Nagavansh)'
    },

    // ----------------------------------------------------
    // TAANK / TAK RAJPUTS (Historical descendants)
    // ----------------------------------------------------
    {
        id: 'taank_kingdom_punjab',
        name: 'टांक साम्राज्य (पंजाब)',
        subtitle: 'प्राचीन नागवंशी सत्ता (550-700 ई.)',
        parent: 'ashvasena_naga',
        yug: 'kaliyug',
        gender: 'male',
        clusterName: 'टांक (तक्षक) क्षत्रिय',
        parichay: 'तक्षशिला से विस्थापित होने के बाद इस नागवंशी क्षत्रिय कबीले ने 550 ई. से 700 ई. के बीच पश्चिमी पंजाब (सियालकोट क्षेत्र) पर शासन किया।'
    },
    {
        id: 'asirgarh_taank_rulers',
        name: 'असीरगढ़ के टांक शासक',
        subtitle: 'निमाड़ क्षेत्र के स्वामी',
        parent: 'taank_kingdom_punjab',
        yug: 'kaliyug',
        gender: 'male',
        clusterName: 'टांक (तक्षक) क्षत्रिय',
        parichay: '9वीं से 13वीं शताब्दी तक मध्य प्रदेश के निमाड़ क्षेत्र और प्रसिद्ध असीरगढ़ किले का निर्माण व शासन टांक (तक्षक) राजपूतों ने किया था। बाद में चौहानों और तोमरों ने इन्हें सामंत बना दिया।'
    },
    {
        id: 'zafar_khan_taank',
        name: 'ज़फ़र खान (मुज़फ्फर शाह)',
        subtitle: 'गुजरात सल्तनत का संस्थापक',
        parent: 'asirgarh_taank_rulers',
        yug: 'kaliyug',
        gender: 'male',
        clusterName: 'टांक (तक्षक) क्षत्रिय',
        parichay: 'मूल रूप से यह एक टांक क्षत्रिय (खत्री) परिवार से थे, जिन्होंने इस्लाम अपना लिया था। 1407 ई. में इन्होंने गुजरात में स्वतंत्र सल्तनत की स्थापना की।'
    },
    {
        id: 'ratnaji_taank',
        name: 'वीर रत्नाजी टांक',
        subtitle: '1857 के क्रांतिकारी',
        parent: 'asirgarh_taank_rulers',
        yug: 'kaliyug',
        gender: 'male',
        clusterName: 'टांक (तक्षक) क्षत्रिय',
        parichay: '1857 की महान क्रांति में इन्होंने तात्या टोपे के सहयोगी के रूप में अंग्रेज़ों के खिलाफ लड़ाई लड़ी थी।'
    },
    {
        id: 'nandaji_taank',
        name: 'वीर नंदाजी टांक',
        subtitle: 'किसान विद्रोह के नेता',
        parent: 'asirgarh_taank_rulers',
        yug: 'kaliyug',
        gender: 'male',
        clusterName: 'टांक (तक्षक) क्षत्रिय',
        parichay: '1857 के डेक्कन (Deccan Riots) किसान विद्रोह में इन्होंने टांक किसानों और मजदूरों का नेतृत्व किया था।'
    }
];
