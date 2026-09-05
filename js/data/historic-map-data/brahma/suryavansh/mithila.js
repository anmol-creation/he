export const mithilaData = [


    // Nimi's immediate
    {
        id: 'mithi',
        name: 'मिथि',
        subtitle: 'विदेह / जनक',
        parent: 'nimi',
        yug: 'treta',
        parichay: 'ऋषियों द्वारा निमि के मृत शरीर के मंथन से उत्पन्न। इन्हीं के नाम पर मिथिला नगरी बसी।'
    },
    // Nimi/Mithi to Seeradhwaja Janak (Videha/Mithila Lineage)
    {
        id: 'udavasu',
        name: 'उदावसु',
        subtitle: 'मिथि पुत्र',
        parent: 'mithi',
        yug: 'treta'
    },
    {
        id: 'nandivardhana',
        name: 'नन्दिवर्धन',
        subtitle: 'उदावसु पुत्र',
        parent: 'udavasu',
        yug: 'treta'
    },
    {
        id: 'suketu',
        name: 'सुकेतु',
        subtitle: 'नन्दिवर्धन पुत्र',
        parent: 'nandivardhana',
        yug: 'treta'
    },
    {
        id: 'devarata',
        name: 'देवरात',
        subtitle: 'सुकेतु पुत्र',
        parent: 'suketu',
        yug: 'treta',
        parichay: 'इन्हीं के पास देवराज इंद्र ने भगवान शिव का महान धनुष (पिनाक) धरोहर के रूप में रखा था।'
    },
    {
        id: 'brihadratha',
        name: 'बृहद्रथ',
        subtitle: 'देवरात पुत्र',
        parent: 'devarata',
        yug: 'treta'
    },
    {
        id: 'mahavirya',
        name: 'महावीर',
        subtitle: 'बृहद्रथ पुत्र',
        parent: 'brihadratha',
        yug: 'treta'
    },
    {
        id: 'sudhriti',
        name: 'सुधृति',
        subtitle: 'महावीर पुत्र',
        parent: 'mahavirya',
        yug: 'treta'
    },
    {
        id: 'dhrishtaketu',
        name: 'धृष्टकेतु',
        subtitle: 'सुधृति पुत्र',
        parent: 'sudhriti',
        yug: 'treta'
    },
    {
        id: 'haryashva_nimi',
        name: 'हर्यश्व',
        subtitle: 'धृष्टकेतु पुत्र',
        parent: 'dhrishtaketu',
        yug: 'treta'
    },
    {
        id: 'maru',
        name: 'मरु',
        subtitle: 'हर्यश्व पुत्र',
        parent: 'haryashva_nimi',
        yug: 'treta'
    },
    {
        id: 'pratindhaka',
        name: 'प्रतीन्धक',
        subtitle: 'मरु पुत्र',
        parent: 'maru',
        yug: 'treta'
    },
    {
        id: 'kirtiratha',
        name: 'कीर्तिरथ',
        subtitle: 'प्रतीन्धक पुत्र',
        parent: 'pratindhaka',
        yug: 'treta'
    },
    {
        id: 'devamidha',
        name: 'देवमीढ',
        subtitle: 'कीर्तिरथ पुत्र',
        parent: 'kirtiratha',
        yug: 'treta'
    },
    {
        id: 'vibudha',
        name: 'विबुध',
        subtitle: 'देवमीढ पुत्र',
        parent: 'devamidha',
        yug: 'treta'
    },
    {
        id: 'mahidhrak',
        name: 'महिध्रक',
        subtitle: 'विबुध पुत्र',
        parent: 'vibudha',
        yug: 'treta'
    },
    {
        id: 'kirtirata',
        name: 'कीर्तिरात',
        subtitle: 'महिध्रक पुत्र',
        parent: 'mahidhrak',
        yug: 'treta'
    },
    {
        id: 'maharoma',
        name: 'महारोमा',
        subtitle: 'कीर्तिरात पुत्र',
        parent: 'kirtirata',
        yug: 'treta'
    },
    {
        id: 'svarnaroma',
        name: 'स्वर्णरोमा',
        subtitle: 'महारोमा पुत्र',
        parent: 'maharoma',
        yug: 'treta'
    },
    {
        id: 'hrasvaroma',
        name: 'ह्रस्वरोमा',
        subtitle: 'स्वर्णरोमा पुत्र',
        parent: 'svarnaroma',
        yug: 'treta'
    },
    {
        id: 'seeradhwaja_janak',
        name: 'सीरध्वज जनक',
        subtitle: 'माता सीता के पिता',
        parent: 'hrasvaroma',
        yug: 'treta',
        parichay: 'विदेहराज सीरध्वज जनक। यज्ञ भूमि जोतते समय इन्हें सीता जी प्राप्त हुई थीं।'
    },
    {
        id: 'sunayana',
        name: 'सुनयना',
        subtitle: 'जनक पत्नी',
        parent: '',
        spouseOf: 'seeradhwaja_janak',
        yug: 'treta'
    },
    {
        id: 'urmila',
        name: 'उर्मिला',
        subtitle: 'लक्ष्मण पत्नी',
        parent: 'seeradhwaja_janak',
        mother: 'sunayana',
        spouseOf: 'lakshman',
        yug: 'treta'
    },
    {
        id: 'kushadhwaja',
        name: 'कुशध्वज',
        subtitle: 'जनक के भ्राता',
        parent: 'hrasvaroma',
        yug: 'treta'
    },
    {
        id: 'mandavi',
        name: 'मांडवी',
        subtitle: 'भरत पत्नी',
        parent: 'kushadhwaja',
        spouseOf: 'bharat',
        yug: 'treta'
    },
    {
        id: 'shrutakirti',
        name: 'श्रुतकीर्ति',
        subtitle: 'शत्रुघ्न पत्नी',
        parent: 'kushadhwaja',
        spouseOf: 'shatrughna',
        yug: 'treta'
    },
];
