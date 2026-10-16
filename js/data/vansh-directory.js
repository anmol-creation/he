const vanshDirectory = [
    // Level 1: Mahavansh (Pillars)
    { id: "v_surya", name: "सूर्यवंश (Suryavansh)", type: "mahavansh", parentId: null, searchTags: ["suryavanshi", "ikshvaku", "sun dynasty"] },
    { id: "v_chandra", name: "चंद्रवंश (Chandravansh)", type: "mahavansh", parentId: null, searchTags: ["chandravanshi", "lunar dynasty", "yadu", "puru"] },
    { id: "v_agni", name: "अग्निवंश (Agnivansh)", type: "mahavansh", parentId: null, searchTags: ["agnivanshi", "fire born", "rajput"] },
    { id: "v_rishi", name: "ऋषि परम्परा (Brahmin Lineages)", type: "mahavansh", parentId: null, searchTags: ["brahmin", "saptarishi", "gotra"] },
    { id: "v_naga", name: "नागवंश (Nagavansh)", type: "mahavansh", parentId: null, searchTags: ["nagavanshi", "serpent"] },

    // Level 2: Ethnicity / Major Branch (Under Suryavansh)
    { id: "e_surya_rajput", name: "Suryavanshi Rajputs", type: "ethnicity", parentId: "v_surya", searchTags: ["rajput", "kshatriya"] },
    { id: "e_kushwaha", name: "Kushwaha / Kachhwaha (Descendants of Kusha)", type: "ethnicity", parentId: "v_surya", searchTags: ["kusha", "kushwaha", "kachhwaha", "koeri", "murao"] },
    { id: "e_raghuvanshi", name: "Raghuvanshi (Descendants of Raghu/Rama)", type: "ethnicity", parentId: "v_surya", searchTags: ["raghu", "rama"] },

    // Level 2: Ethnicity / Major Branch (Under Chandravansh)
    { id: "e_yadav", name: "Yaduvanshi (Descendants of Yadu)", type: "ethnicity", parentId: "v_chandra", searchTags: ["yadav", "krishna", "ahir"] },
    { id: "e_puru", name: "Paurav / Puruvanshi (Descendants of Puru)", type: "ethnicity", parentId: "v_chandra", searchTags: ["puru", "kaurav", "pandav"] },

    // Level 2: Ethnicity / Major Branch (Under Agnivansh)
    { id: "e_chauhan", name: "Chauhan (Chahamana)", type: "ethnicity", parentId: "v_agni", searchTags: ["chauhan", "chahamana", "prithviraj"] },
    { id: "e_paramara", name: "Paramara (Parmar)", type: "ethnicity", parentId: "v_agni", searchTags: ["parmar", "panwar", "ponwar", "bhoja"] },
    { id: "e_solanki", name: "Solanki (Chalukya)", type: "ethnicity", parentId: "v_agni", searchTags: ["solanki", "chalukya"] },
    { id: "e_pratihara", name: "Parihar (Pratihara)", type: "ethnicity", parentId: "v_agni", searchTags: ["parihar", "pratihara", "gurjara"] },

    // Level 2: Ethnicity / Major Branch (Under Rishi Parampara)
    { id: "e_bhrigu", name: "Bhargava (Descendants of Bhrigu)", type: "ethnicity", parentId: "v_rishi", searchTags: ["bhrigu", "bhargava", "parashurama"] },
    { id: "e_kashyapa", name: "Kashyapa Gotra (Descendants of Kashyapa)", type: "ethnicity", parentId: "v_rishi", searchTags: ["kashyapa"] },
    { id: "e_bharadwaja", name: "Bharadwaja Gotra", type: "ethnicity", parentId: "v_rishi", searchTags: ["bharadwaja"] },
    { id: "e_vashistha", name: "Vashistha Gotra", type: "ethnicity", parentId: "v_rishi", searchTags: ["vashistha"] },

    // Level 3: Community / Samaj / Khap (Under Chauhan)
    { id: "c_hada", name: "Hada Chauhan", type: "community", parentId: "e_chauhan", searchTags: ["hada", "bundi", "kota", "rajput"] },
    { id: "c_deora", name: "Deora Chauhan", type: "community", parentId: "e_chauhan", searchTags: ["deora", "sirohi", "rajput"] },
    { id: "c_songara", name: "Songara Chauhan", type: "community", parentId: "e_chauhan", searchTags: ["songara", "jalore", "rajput"] },
    { id: "c_khinchi", name: "Khinchi Chauhan", type: "community", parentId: "e_chauhan", searchTags: ["khinchi", "gagron", "rajput"] },
    { id: "c_maheshwari", name: "Maheshwari (Khandela Origin)", type: "community", parentId: "e_chauhan", searchTags: ["maheshwari", "bania", "marwari", "sujansen"] },
    { id: "c_khandelwal", name: "Khandelwal (Khadgalsen Lineage)", type: "community", parentId: "e_chauhan", searchTags: ["khandelwal", "bania", "marwari", "khadgalsen"] },

    // Level 3: Community / Samaj / Khap (Under Paramara)
    { id: "c_ujjainiya", name: "Ujjainiya Rajput", type: "community", parentId: "e_paramara", searchTags: ["ujjainiya", "bhojpur", "bihar", "veer kunwar singh"] },

    // Level 3: Community / Samaj / Khap (Under Solanki)
    { id: "c_vaghela", name: "Vaghela (Baghel)", type: "community", parentId: "e_solanki", searchTags: ["vaghela", "baghel", "gujarat"] },

    // Level 3: Community / Samaj / Khap (Under Kushwaha)
    { id: "c_kachhwaha_rajput", name: "Kachhwaha Rajput", type: "community", parentId: "e_kushwaha", searchTags: ["kachhwaha", "jaipur", "amer"] },
    { id: "c_koeri", name: "Koeri / Maurya", type: "community", parentId: "e_kushwaha", searchTags: ["koeri", "maurya", "kushwaha", "obc"] },

    // Level 3: Community / Samaj / Khap (Under Yadav)
    { id: "c_varni", name: "Vrishni", type: "community", parentId: "e_yadav", searchTags: ["vrishni", "krishna"] },
    { id: "c_ahir", name: "Ahir / Gwala", type: "community", parentId: "e_yadav", searchTags: ["ahir", "gwala", "rao"] },
    { id: "c_jadeja", name: "Jadeja Rajput", type: "community", parentId: "e_yadav", searchTags: ["jadeja", "kutch", "rajput"] },
    { id: "c_bhati", name: "Bhati Rajput", type: "community", parentId: "e_yadav", searchTags: ["bhati", "jaisalmer", "rajput"] },

    // Level 4: Surnames / Gotras (Under Maheshwari)
    { id: "s_biyani", name: "Biyani", type: "surname", parentId: "c_maheshwari", searchTags: ["biyani", "gaja"] },
    { id: "s_birla", name: "Birla", type: "surname", parentId: "c_maheshwari", searchTags: ["birla", "balkrishna"] },
    { id: "s_baheti", name: "Baheti", type: "surname", parentId: "c_maheshwari", searchTags: ["baheti"] },
    { id: "s_bhandari", name: "Bhandari", type: "surname", parentId: "c_maheshwari", searchTags: ["bhandari", "maheshwari"] },

    // Level 4: Surnames / Gotras (Under Khandelwal)
    { id: "s_khandelwal_gupta", name: "Gupta (Khandelwal)", type: "surname", parentId: "c_khandelwal", searchTags: ["gupta"] },
    { id: "s_khandelwal_garg", name: "Garg (Khandelwal Gotra)", type: "surname", parentId: "c_khandelwal", searchTags: ["garg"] },

    // Level 4: Surnames / Gotras (Under Ujjainiya)
    { id: "s_singh_bhojpur", name: "Singh (Bhojpur Ujjainiya)", type: "surname", parentId: "c_ujjainiya", searchTags: ["singh", "babu", "sahi"] },

    // Level 4: Surnames / Gotras (Under Vaghela)
    { id: "s_vaghela_raj", name: "Vaghela", type: "surname", parentId: "c_vaghela", searchTags: ["vaghela"] },
    { id: "s_baghel_rew", name: "Baghel", type: "surname", parentId: "c_vaghela", searchTags: ["baghel", "rewa"] },

    // Level 4: Surnames / Gotras (Under Kachhwaha)
    { id: "s_shekhawat", name: "Shekhawat", type: "surname", parentId: "c_kachhwaha_rajput", searchTags: ["shekhawat"] },
    { id: "s_rajawat", name: "Rajawat", type: "surname", parentId: "c_kachhwaha_rajput", searchTags: ["rajawat"] },
    { id: "s_nathawat", name: "Nathawat", type: "surname", parentId: "c_kachhwaha_rajput", searchTags: ["nathawat"] }

];

window.vanshDirectoryData = vanshDirectory;
