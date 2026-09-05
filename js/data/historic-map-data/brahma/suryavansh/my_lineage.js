export const my_lineageData = [
    // परदादा-परदादी (Great Grand Parents)
    {
        id: 'radha_krishna_agarwal',
        name: 'राधा कृष्ण अग्रवाल',
        subtitle: 'परदादा',
        parent: 'gendumal',
        yug: 'kali',
        clusterName: 'गोयल Vansh',
        parichay: 'गोत्र: गोयल'
    },

    // दादा-दादी के भाई (Grand Parents Brothers)
    {
        id: 'ram_nivahs_agarwal',
        name: 'राम निवास अग्रवाल',
        subtitle: 'परदादा के पुत्र (1)',
        parent: 'radha_krishna_agarwal',
        yug: 'kali',
        clusterName: 'अग्रवाल वंश (मेरा परिवार)'
    },
    {
        id: 'chandr_prakash_wife',
        name: 'कुसुम',
        subtitle: 'पत्नी',
        spouseOf: 'ram_nivahs_agarwal',
        parent: '',
        yug: 'kali',
        parichay: 'इनके बच्चे: दुर्गेश, रिंकू, शालू'
    },
    {
        id: 'ram_prakash_agarwal',
        name: 'राम प्रकाश अग्रवाल',
        subtitle: 'परदादा के पुत्र (2)',
        parent: 'radha_krishna_agarwal',
        yug: 'kali',
        clusterName: 'अग्रवाल वंश (मेरा परिवार)'
    },
    {
        id: 'sarvesh_agarwal_wife',
        name: 'सर्वेश अग्रवाल',
        subtitle: 'पत्नी',
        spouseOf: 'ram_prakash_agarwal',
        parent: '',
        yug: 'kali',
        parichay: 'इनके बच्चे: रेखा, बेटा (नाम अज्ञात)'
    },
    {
        id: 'om_prakash_agarwal',
        name: 'ओम प्रकाश अग्रवाल',
        subtitle: 'परदादा के पुत्र (3) - दादा',
        parent: 'radha_krishna_agarwal',
        yug: 'kali',
        clusterName: 'अग्रवाल वंश (मेरा परिवार)'
    },
    {
        id: 'suraj_devi',
        name: 'सूरज देवी',
        subtitle: 'दादी',
        parent: '',
        spouseOf: 'om_prakash_agarwal',
        yug: 'kali'
    },
    {
        id: 'prem_prakash_agarwal',
        name: 'प्रेम प्रकाश अग्रवाल',
        subtitle: 'परदादा के पुत्र (4)',
        parent: 'radha_krishna_agarwal',
        yug: 'kali',
        clusterName: 'अग्रवाल वंश (मेरा परिवार)',
        parichay: 'अविवाहित'
    },

    // पिता और पिता के भाई (Father and Brothers)
    {
        id: 'rajeev_agarwal',
        name: 'राजीव अग्रवाल',
        subtitle: 'ताऊजी (1)',
        parent: 'om_prakash_agarwal',
        mother: 'suraj_devi',
        yug: 'kali',
        clusterName: 'अग्रवाल वंश (मेरा परिवार)'
    },
    {
        id: 'sima_agarwal',
        name: 'सीमा अग्रवाल',
        subtitle: 'ताऊजी की पत्नी',
        parent: '',
        spouseOf: 'rajeev_agarwal',
        yug: 'kali',
        parichay: 'बेटा: आयुष'
    },
    {
        id: 'pankaj_agarwal',
        name: 'पंकज अग्रवाल',
        subtitle: 'चाचा (2)',
        parent: 'om_prakash_agarwal',
        mother: 'suraj_devi',
        yug: 'kali',
        clusterName: 'अग्रवाल वंश (मेरा परिवार)',
        parichay: 'अविवाहित, 1998 में स्वर्गवास।'
    },
    {
        id: 'neeraj_kumar_agarwal',
        name: 'नीरज कुमार अग्रवाल',
        subtitle: 'पिता (3)',
        parent: 'om_prakash_agarwal',
        mother: 'suraj_devi',
        yug: 'kali',
        clusterName: 'अग्रवाल वंश (मेरा परिवार)',
        parichay: 'गोत्र: गोयल'
    },
    {
        id: 'vineeta_agarwal',
        name: 'विनीता अग्रवाल',
        subtitle: 'माता',
        parent: '',
        spouseOf: 'neeraj_kumar_agarwal',
        yug: 'kali',
        parichay: 'गोत्र: सिंघल'
    },
    {
        id: 'vipin_agarwal_lalla',
        name: 'विपिन अग्रवाल (लल्ला)',
        subtitle: 'चाचा (4)',
        parent: 'om_prakash_agarwal',
        mother: 'suraj_devi',
        yug: 'kali',
        clusterName: 'अग्रवाल वंश (मेरा परिवार)',
        parichay: 'अविवाहित'
    },

    // माता का परिवार (Nani, Nana, Par-Nana)
    {
        id: 'ganga_sahay_agarwal',
        name: 'गंगा सहाय अग्रवाल',
        subtitle: 'परनाना',
        parent: 'maharaja_agrasen',
        yug: 'kali',
        clusterName: 'सिंघल अग्रवाल (माता का परिवार)'
    },
    {
        id: 'ram_bharose_lal_agarwal',
        name: 'राम भरोसे लाल अग्रवाल',
        subtitle: 'नाना',
        parent: 'ganga_sahay_agarwal',
        yug: 'kali',
        clusterName: 'सिंघल अग्रवाल (माता का परिवार)'
    },
    {
        id: 'munni_devi',
        name: 'मुन्नी देवी',
        subtitle: 'नानी',
        parent: '',
        spouseOf: 'ram_bharose_lal_agarwal',
        yug: 'kali',
        parichay: 'इनके माता-पिता: राम चरण (लाला हुंडी वाले) और पनवती देवी।'
    },
    {
        id: 'ramesh_kameshwer_agarwal',
        name: 'रमेश/कामेश्वर अग्रवाल',
        subtitle: 'नाना के भाई',
        parent: 'ganga_sahay_agarwal',
        yug: 'kali',
        clusterName: 'सिंघल अग्रवाल (माता का परिवार)'
    },

    // बच्चे (अनमोल और अनिकेत)
    {
        id: 'aniket_agarwal',
        name: 'अनिकेत अग्रवाल',
        subtitle: 'भाई',
        parent: 'neeraj_kumar_agarwal',
        mother: 'vineeta_agarwal',
        yug: 'kali',
        clusterName: 'अग्रवाल वंश (मेरा परिवार)',
        parichay: 'बचपन में इनका स्वर्गवास हो गया था।'
    },
    {
        id: 'anmol_agarwal',
        name: 'अनमोल अग्रवाल',
        subtitle: 'मैं (22-12-1999)',
        parent: 'neeraj_kumar_agarwal',
        mother: 'vineeta_agarwal',
        yug: 'kali',
        clusterName: 'अग्रवाल वंश (मेरा परिवार)',
        parichay: 'जन्म तिथि: 22 दिसंबर 1999, गोत्र: गोयल'
    }
];
