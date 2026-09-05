export const bedi_khatriData = [

    // Bedi Khatri Lineage (from Kush - via Bachittar Natak)
    {
        id: 'kush_descendants_proxy',
        name: 'कुश के वंशज',
        subtitle: 'कसूर शाखा',
        parent: 'kush',
        yug: 'dwapar',
        clusterName: 'बेदी खत्री (कुश वंश)',
        isProxy: true,
        parichay: 'कुश के जिन वंशजों ने अयोध्या की बजाय पंजाब (कसूर) में राज किया।'
    },
    {
        id: 'kalket',
        name: 'कालकेतु (कलकेत)',
        subtitle: 'कुश के वंशज',
        parent: 'kush_descendants_proxy',
        yug: 'dwapar',
        clusterName: 'बेदी खत्री (कुश वंश)',
        isProxy: true,
        parichay: '"बचित्तर नाटक" के अनुसार, इन्होंने लव के वंशज कल राय को पराजित कर लाहौर पर अधिकार किया। बाद में इनके वंशजों का राज छिन गया और वे काशी (वाराणसी) चले गए।'
    },
    {
        id: 'bedi_vansh_proxy',
        name: 'बेदी खत्री',
        subtitle: 'कुश के वंशज',
        parent: 'kalket',
        yug: 'kali',
        clusterName: 'बेदी खत्री (कुश वंश)',
        isProxy: true,
        parichay: 'काशी जाकर इन क्षत्रियों ने वेदों का गहन अध्ययन किया, जिसके कारण वे "वेदी" (Bedi/Baidy) कहलाए।'
    },

    // Guru Nanak Dev Ji Ancestors
    {
        id: 'baba_ram_narayan_bedi',
        name: 'बाबा राम नारायण बेदी',
        subtitle: 'गुरु नानक जी के परदादा',
        parent: 'bedi_vansh_proxy',
        yug: 'kali',
        clusterName: 'बेदी खत्री (कुश वंश)'
    },
    {
        id: 'baba_shiv_ram_bedi',
        name: 'बाबा शिव राम बेदी',
        subtitle: 'गुरु नानक जी के दादा',
        parent: 'baba_ram_narayan_bedi',
        yug: 'kali',
        clusterName: 'बेदी खत्री (कुश वंश)'
    },
    {
        id: 'mata_banarasi',
        name: 'माता बनारसी',
        subtitle: 'गुरु नानक जी की दादी',
        parent: '',
        spouseOf: 'baba_shiv_ram_bedi',
        yug: 'kali',
        clusterName: 'बेदी खत्री (कुश वंश)'
    },

    {
        id: 'kalyan_das_bedi',
        name: 'कल्याण दास (मेहता कालू)',
        subtitle: 'गुरु नानक जी के पिता',
        parent: 'baba_shiv_ram_bedi',
        mother: 'mata_banarasi',
        yug: 'kali',
        clusterName: 'बेदी खत्री (कुश वंश)'
    },
    {
        id: 'baba_lalu',
        name: 'बाबा लालू',
        subtitle: 'गुरु नानक जी के चाचा',
        parent: 'baba_shiv_ram_bedi',
        mother: 'mata_banarasi',
        yug: 'kali',
        clusterName: 'बेदी खत्री (कुश वंश)'
    },
    {
        id: 'mata_tripta',
        name: 'माता तृप्ता',
        subtitle: 'गुरु नानक जी की माता',
        parent: '',
        spouseOf: 'kalyan_das_bedi',
        yug: 'kali',
        clusterName: 'बेदी खत्री (कुश वंश)',
        parichay: 'माता तृप्ता जी रामा (माझा) और भाई कृष्ण जी की बहन थीं।'
    },

    // Guru Nanak Dev Ji & Siblings
    {
        id: 'bebe_nanaki',
        name: 'बेबे नानकी',
        subtitle: 'गुरु नानक जी की बहन',
        parent: 'kalyan_das_bedi',
        mother: 'mata_tripta',
        yug: 'kali',
        clusterName: 'बेदी खत्री (कुश वंश)'
    },
    {
        id: 'bhai_jai_ram',
        name: 'भाई जय राम',
        subtitle: 'बेबे नानकी के पति',
        parent: '',
        spouseOf: 'bebe_nanaki',
        yug: 'kali',
        clusterName: 'बेदी खत्री (कुश वंश)'
    },
    {
        id: 'guru_nanak_dev',
        name: 'श्री गुरु नानक देव जी',
        subtitle: 'प्रथम सिख गुरु',
        parent: 'kalyan_das_bedi',
        mother: 'mata_tripta',
        yug: 'kali',
        isProminent: true,
        clusterName: 'बेदी खत्री (कुश वंश)',
        parichay: 'सिख धर्म के संस्थापक और प्रथम गुरु। इनका जन्म तलवंडी (ननकाना साहिब) में इसी सूर्यवंशी बेदी खत्री कुल में हुआ था।'
    },

    // Guru Nanak Dev Ji In-laws & Wife
    {
        id: 'baba_mool_chand',
        name: 'बाबा मूल चंद',
        subtitle: 'गुरु नानक जी के ससुर',
        parent: '',
        yug: 'kali',
        clusterName: 'बेदी खत्री (कुश वंश)'
    },
    {
        id: 'mata_chando_rani',
        name: 'माता चंदो रानी',
        subtitle: 'गुरु नानक जी की सास',
        parent: '',
        spouseOf: 'baba_mool_chand',
        yug: 'kali',
        clusterName: 'बेदी खत्री (कुश वंश)'
    },
    {
        id: 'mata_sulakhni',
        name: 'माता सुलखनी',
        subtitle: 'गुरु नानक जी की पत्नी',
        parent: 'baba_mool_chand',
        mother: 'mata_chando_rani',
        spouseOf: 'guru_nanak_dev',
        yug: 'kali',
        clusterName: 'बेदी खत्री (कुश वंश)'
    },

    // Guru Nanak Dev Ji Descendants
    {
        id: 'baba_sri_chand',
        name: 'बाबा श्री चंद',
        subtitle: 'उदासी संप्रदाय के संस्थापक',
        parent: 'guru_nanak_dev',
        mother: 'mata_sulakhni',
        yug: 'kali',
        clusterName: 'बेदी खत्री (कुश वंश)',
        parichay: 'गुरु नानक देव जी के बड़े पुत्र। इन्होंने कभी विवाह नहीं किया और उदासी संप्रदाय की स्थापना की।'
    },
    {
        id: 'baba_lakhmi_das',
        name: 'बाबा लखमी दास',
        subtitle: 'गुरु नानक जी के छोटे पुत्र',
        parent: 'guru_nanak_dev',
        mother: 'mata_sulakhni',
        yug: 'kali',
        clusterName: 'बेदी खत्री (कुश वंश)',
        parichay: 'गुरु नानक देव जी के छोटे पुत्र। बेदी वंश इन्ही के द्वारा आगे बढ़ा।'
    },

    // Lineage from Baba Lakhmi Das
    {
        id: 'baba_dharam_chand',
        name: 'बाबा धरम चंद',
        subtitle: 'बाबा लखमी दास के पुत्र',
        parent: 'baba_lakhmi_das',
        yug: 'kali',
        clusterName: 'बेदी खत्री (कुश वंश)'
    },
    {
        id: 'baba_mehar_chand',
        name: 'बाबा मेहर चंद',
        subtitle: 'मेहरचंदिया बेदी शाखा',
        parent: 'baba_dharam_chand',
        yug: 'kali',
        clusterName: 'बेदी खत्री (कुश वंश)'
    },
    {
        id: 'baba_manik_chand',
        name: 'बाबा मानिक चंद',
        subtitle: 'मानिकचंदिया बेदी शाखा',
        parent: 'baba_dharam_chand',
        yug: 'kali',
        clusterName: 'बेदी खत्री (कुश वंश)'
    },
    {
        id: 'baba_dataar_chand',
        name: 'बाबा दातार चंद',
        subtitle: 'बाबा मानिक चंद के पुत्र',
        parent: 'baba_manik_chand',
        yug: 'kali',
        clusterName: 'बेदी खत्री (कुश वंश)'
    },
    {
        id: 'baba_pahar_chand',
        name: 'बाबा पहाड़ चंद',
        subtitle: 'बाबा दातार चंद के पुत्र',
        parent: 'baba_dataar_chand',
        yug: 'kali',
        clusterName: 'बेदी खत्री (कुश वंश)'
    },
    {
        id: 'baba_harkaran_chand',
        name: 'बाबा हरकरन चंद',
        subtitle: 'बाबा पहाड़ चंद के पुत्र',
        parent: 'baba_pahar_chand',
        yug: 'kali',
        clusterName: 'बेदी खत्री (कुश वंश)'
    },
    {
        id: 'baba_nihal_chand',
        name: 'बाबा निहाल चंद',
        subtitle: 'बाबा हरकरन चंद के पुत्र',
        parent: 'baba_harkaran_chand',
        yug: 'kali',
        clusterName: 'बेदी खत्री (कुश वंश)'
    },
    {
        id: 'baba_kaladhari',
        name: 'बाबा कलाधारी',
        subtitle: 'बाबा निहाल चंद के पुत्र',
        parent: 'baba_nihal_chand',
        yug: 'kali',
        clusterName: 'बेदी खत्री (कुश वंश)'
    },
    {
        id: 'baba_jit_singh',
        name: 'बाबा जीत सिंह',
        subtitle: 'बाबा कलाधारी के पुत्र',
        parent: 'baba_kaladhari',
        yug: 'kali',
        clusterName: 'बेदी खत्री (कुश वंश)'
    },
    {
        id: 'baba_sahib_singh_bedi',
        name: 'बाबा साहिब सिंह बेदी',
        subtitle: 'सिख इतिहास की सम्मानित हस्ती',
        parent: 'baba_jit_singh',
        yug: 'kali',
        isProminent: true,
        clusterName: 'बेदी खत्री (कुश वंश)',
        parichay: 'बाबा साहिब सिंह बेदी जी सिख इतिहास में एक अत्यंत सम्मानित हस्ती थे, जिन्होंने महाराजा रणजीत सिंह का राज्याभिषेक किया था।'
    },
];
