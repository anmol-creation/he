export const sodhi_khatriData = [

    // Sodhi Khatri Lineage (from Luv - via Bachittar Natak)
    {
        id: 'kal_rai',
        name: 'कल राय',
        subtitle: 'लव के वंशज',
        parent: 'luv_descendants_proxy',
        yug: 'dwapar',
        clusterName: 'सोढी खत्री (लव वंश)',
        isProxy: true,
        parichay: 'दशम ग्रंथ के "बचित्तर नाटक" के अनुसार, लव के वंशजों में कल राय (Kal Rai) नामक राजा हुए। उनका कुश के वंशज कालकेतु (Kalket) से सत्ता के लिए युद्ध हुआ, जिसमें कल राय पराजित हुए और सनाउध (Sanaudh) चले गए।'
    },
    {
        id: 'sodhi_rao',
        name: 'सोढी राय (राव)',
        subtitle: 'सोढी वंश के प्रवर्तक',
        parent: 'kal_rai',
        yug: 'kali',
        clusterName: 'सोढी खत्री (लव वंश)',
        isProxy: true,
        parichay: 'कल राय ने सनाउध के राजा की पुत्री से विवाह किया, जिनसे सोढी राय का जन्म हुआ। इन्हीं के नाम पर लव के वंशजों की यह शाखा "सोढी खत्री" कहलाई।'
    },
    {
        id: 'sodhi_vansh_proxy',
        name: 'सोढी खत्री',
        subtitle: 'लव के वंशज',
        parent: 'sodhi_rao',
        yug: 'kali',
        clusterName: 'सोढी खत्री (लव वंश)',
        isProxy: true,
        parichay: 'चतुर्थ सिख गुरु, श्री गुरु रामदास जी से लेकर दशम गुरु, श्री गुरु गोबिंद सिंह जी तक, सभी सिख गुरु इसी सोढी वंश में जन्मे थे।'
    },

    // Sikh Gurus in Sodhi lineage
    {
        id: 'guru_ram_das',
        name: 'श्री गुरु रामदास जी',
        subtitle: 'चतुर्थ सिख गुरु',
        parent: 'sodhi_vansh_proxy',
        yug: 'kali',
        isProminent: true,
        clusterName: 'सोढी खत्री (लव वंश)'
    },
    {
        id: 'guru_arjan_dev',
        name: 'श्री गुरु अर्जन देव जी',
        subtitle: 'पंचम सिख गुरु',
        parent: 'guru_ram_das',
        yug: 'kali',
        isProminent: true,
        clusterName: 'सोढी खत्री (लव वंश)'
    },
    {
        id: 'guru_hargobind',
        name: 'श्री गुरु हरगोबिंद साहिब',
        subtitle: 'छठे सिख गुरु',
        parent: 'guru_arjan_dev',
        yug: 'kali',
        isProminent: true,
        clusterName: 'सोढी खत्री (लव वंश)'
    },
    {
        id: 'guru_har_rai',
        name: 'श्री गुरु हर राय जी',
        subtitle: 'सातवें सिख गुरु',
        parent: 'guru_hargobind',
        yug: 'kali',
        isProminent: true,
        clusterName: 'सोढी खत्री (लव वंश)'
    },
    {
        id: 'guru_har_krishan',
        name: 'श्री गुरु हरकृष्ण जी',
        subtitle: 'आठवें सिख गुरु',
        parent: 'guru_har_rai',
        yug: 'kali',
        isProminent: true,
        clusterName: 'सोढी खत्री (लव वंश)'
    },
    {
        id: 'guru_tegh_bahadur',
        name: 'श्री गुरु तेग बहादुर जी',
        subtitle: 'नौवें सिख गुरु',
        parent: 'guru_hargobind',
        yug: 'kali',
        isProminent: true,
        clusterName: 'सोढी खत्री (लव वंश)'
    },
    {
        id: 'guru_gobind_singh',
        name: 'श्री गुरु गोबिंद सिंह जी',
        subtitle: 'दशम सिख गुरु',
        parent: 'guru_tegh_bahadur',
        yug: 'kali',
        isProminent: true,
        clusterName: 'सोढी खत्री (लव वंश)'
    },
];
