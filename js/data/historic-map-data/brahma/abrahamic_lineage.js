export const abrahamicLineage = [
  {
    id: "abrahamic_origin",
    name: "Unknown / Symbolic Origins",
    clusterName: "Abrahamic Myths",
    parichay: "The primordial source from which human lineages emerge in Middle-Eastern texts.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "adam",
    name: "Adam (Adapa)",
    clusterName: "Abrahamic Myths",
    parent: "abrahamic_origin",
    parichay: "The first man according to Abrahamic traditions (based on Sumerian Adapa). Formed from clay.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "eve",
    name: "Eve (Hawwa/Ninti)",
    clusterName: "Abrahamic Myths",
    parent: "abrahamic_origin",
    spouseOf: ["adam"],
    parichay: "The first woman according to Abrahamic traditions (Sumerian Ninti). Meaning 'Mother of all living'.",
    gender: "female",
    yug: "pre-flood"
  },
  {
    id: "cain",
    name: "Cain (Qabil)",
    clusterName: "Abrahamic Myths",
    parent: "adam",
    parichay: "Eldest son of Adam. A farmer who committed the first murder by killing his brother.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "abel",
    name: "Abel (Habil)",
    clusterName: "Abrahamic Myths",
    parent: "adam",
    parichay: "Second son of Adam. A shepherd, murdered by his brother Cain.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "seth",
    name: "Seth (Sheeth)",
    clusterName: "Abrahamic Myths",
    parent: "adam",
    parichay: "Third son of Adam, born after Abel's death. The primary lineage of the prophets descends from him.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "awan",
    name: "Awan",
    clusterName: "Abrahamic Myths",
    parent: "adam",
    spouseOf: ["cain"],
    parichay: "Daughter of Adam, wife of Cain (according to Jubilee texts).",
    gender: "female",
    yug: "pre-flood"
  },
  {
    id: "azura",
    name: "Azura",
    clusterName: "Abrahamic Myths",
    parent: "adam",
    spouseOf: ["seth"],
    parichay: "Daughter of Adam, wife of Seth.",
    gender: "female",
    yug: "pre-flood"
  },
  {
    id: "enosh",
    name: "Enosh",
    clusterName: "Abrahamic Myths",
    parent: "seth",
    parichay: "Son of Seth. It was during his time that people began to invoke the name of the Lord.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "kenan",
    name: "Kenan",
    clusterName: "Abrahamic Myths",
    parent: "enosh",
    parichay: "Son of Enosh.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "mahalalel",
    name: "Mahalalel",
    clusterName: "Abrahamic Myths",
    parent: "kenan",
    parichay: "Son of Kenan.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "jared",
    name: "Jared",
    clusterName: "Abrahamic Myths",
    parent: "mahalalel",
    parichay: "Son of Mahalalel.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "enoch",
    name: "Enoch (Idris)",
    clusterName: "Abrahamic Myths",
    parent: "jared",
    parichay: "Son of Jared. A prophet known for wisdom, writing, and astronomy. Said to be taken to heaven without dying.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "methuselah",
    name: "Methuselah",
    clusterName: "Abrahamic Myths",
    parent: "enoch",
    parichay: "Son of Enoch. Renowned for being the oldest person mentioned in the Bible.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "lamech",
    name: "Lamech",
    clusterName: "Abrahamic Myths",
    parent: "methuselah",
    parichay: "Son of Methuselah and father of Noah.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "noah",
    name: "Noah (Nuh)",
    clusterName: "Abrahamic Myths",
    parent: "lamech",
    parichay: "The prophet who built the Ark to survive the Great Flood (analogous to Manu's flood).",
    gender: "male",
    yug: "flood"
  },
  {
    id: "naamah",
    name: "Naamah",
    clusterName: "Abrahamic Myths",
    parent: "abrahamic_origin",
    spouseOf: ["noah"],
    parichay: "Wife of Noah (according to midrashic tradition).",
    gender: "female",
    yug: "flood"
  },
  {
    id: "shem",
    name: "Shem (Sam)",
    clusterName: "Abrahamic Myths",
    parent: "noah",
    parichay: "Eldest son of Noah. Ancestor of the Semitic peoples (Jews, Arabs, Arameans).",
    gender: "male",
    yug: "post-flood"
  },
  {
    id: "ham",
    name: "Ham",
    clusterName: "Abrahamic Myths",
    parent: "noah",
    parichay: "Second son of Noah. Ancestor of the Hamitic peoples (Egyptians, Canaanites, Cushites).",
    gender: "male",
    yug: "post-flood"
  },
  {
    id: "japheth",
    name: "Japheth (Yafith)",
    clusterName: "Abrahamic Myths",
    parent: "noah",
    parichay: "Third son of Noah. Ancestor of the Japhetic peoples (Indo-Europeans, Greeks).",
    gender: "male",
    yug: "post-flood"
  },
  {
    id: "cush",
    name: "Cush",
    clusterName: "Abrahamic Myths",
    parent: "ham",
    parichay: "Son of Ham. Ancestor of the Cushites.",
    gender: "male"
  },
  {
    id: "mizraim",
    name: "Mizraim",
    clusterName: "Abrahamic Myths",
    parent: "ham",
    parichay: "Son of Ham. Ancestor of the Egyptians.",
    gender: "male"
  },
  {
    id: "phut",
    name: "Phut",
    clusterName: "Abrahamic Myths",
    parent: "ham",
    parichay: "Son of Ham. Ancestor of ancient Libyans.",
    gender: "male"
  },
  {
    id: "canaan",
    name: "Canaan",
    clusterName: "Abrahamic Myths",
    parent: "ham",
    parichay: "Son of Ham. Ancestor of the Canaanites.",
    gender: "male"
  },
  {
    id: "nimrod",
    name: "Nimrod (Namrud)",
    clusterName: "Abrahamic Myths",
    parent: "cush",
    parichay: "Son of Cush. Described as a mighty hunter and tyrant king who built Babel and confronted Ibrahim.",
    gender: "male"
  },
  {
    id: "gomer",
    name: "Gomer",
    clusterName: "Abrahamic Myths",
    parent: "japheth",
    parichay: "Son of Japheth.",
    gender: "male"
  },
  {
    id: "magog",
    name: "Magog (Yajuj)",
    clusterName: "Abrahamic Myths",
    parent: "japheth",
    parichay: "Son of Japheth. Associated with apocalyptic tribes Gog and Magog.",
    gender: "male"
  },
  {
    id: "madai",
    name: "Madai",
    clusterName: "Abrahamic Myths",
    parent: "japheth",
    parichay: "Son of Japheth. Ancestor of the Medes.",
    gender: "male"
  },
  {
    id: "javan",
    name: "Javan",
    clusterName: "Abrahamic Myths",
    parent: "japheth",
    parichay: "Son of Japheth. Ancestor of the Greeks (Ionians).",
    gender: "male"
  },
  {
    id: "tubal",
    name: "Tubal",
    clusterName: "Abrahamic Myths",
    parent: "japheth",
    parichay: "Son of Japheth.",
    gender: "male"
  },
  {
    id: "meshech",
    name: "Meshech",
    clusterName: "Abrahamic Myths",
    parent: "japheth",
    parichay: "Son of Japheth.",
    gender: "male"
  },
  {
    id: "tiras",
    name: "Tiras",
    clusterName: "Abrahamic Myths",
    parent: "japheth",
    parichay: "Son of Japheth. Ancestor of the Thracians.",
    gender: "male"
  },
  {
    id: "elam",
    name: "Elam",
    clusterName: "Abrahamic Myths",
    parent: "shem",
    parichay: "Son of Shem. Ancestor of the Elamites.",
    gender: "male"
  },
  {
    id: "asshur",
    name: "Asshur",
    clusterName: "Abrahamic Myths",
    parent: "shem",
    parichay: "Son of Shem. Ancestor of the Assyrians.",
    gender: "male"
  },
  {
    id: "arpachshad",
    name: "Arpachshad",
    clusterName: "Abrahamic Myths",
    parent: "shem",
    parichay: "Son of Shem in the direct line to Abraham.",
    gender: "male"
  },
  {
    id: "lud",
    name: "Lud",
    clusterName: "Abrahamic Myths",
    parent: "shem",
    parichay: "Son of Shem. Ancestor of the Lydians.",
    gender: "male"
  },
  {
    id: "aram",
    name: "Aram",
    clusterName: "Abrahamic Myths",
    parent: "shem",
    parichay: "Son of Shem. Ancestor of the Arameans.",
    gender: "male"
  },
  {
    id: "shelah",
    name: "Shelah",
    clusterName: "Abrahamic Myths",
    parent: "arpachshad",
    parichay: "Son of Arpachshad.",
    gender: "male"
  },
  {
    id: "eber",
    name: "Eber (Prophet Hud)",
    clusterName: "Abrahamic Myths",
    parent: "shelah",
    parichay: "Son of Shelah. Often identified with Prophet Hud, sent to the people of 'Aad.",
    gender: "male"
  },
  {
    id: "peleg",
    name: "Peleg",
    clusterName: "Abrahamic Myths",
    parent: "eber",
    parichay: "Son of Eber. His name means 'division', signifying the division of the earth/languages.",
    gender: "male"
  },
  {
    id: "joktan",
    name: "Joktan (Qahtan)",
    clusterName: "Abrahamic Myths",
    parent: "eber",
    parichay: "Son of Eber. Ancestor of the Southern Arabs (Qahtanite).",
    gender: "male"
  },
  {
    id: "reu",
    name: "Reu",
    clusterName: "Abrahamic Myths",
    parent: "peleg",
    parichay: "Son of Peleg.",
    gender: "male"
  },
  {
    id: "serug",
    name: "Serug",
    clusterName: "Abrahamic Myths",
    parent: "reu",
    parichay: "Son of Reu. During his time, idolatry became prominent in Mesopotamia.",
    gender: "male"
  },
  {
    id: "nahor_elder",
    name: "Nahor",
    clusterName: "Abrahamic Myths",
    parent: "serug",
    parichay: "Son of Serug and grandfather of Abraham.",
    gender: "male"
  },
  {
    id: "terah",
    name: "Terah (Azar)",
    clusterName: "Abrahamic Myths",
    parent: "nahor_elder",
    parichay: "Father of Abraham. A sculptor and merchant of idols in the city of Ur.",
    gender: "male"
  },
  {
    id: "amathla",
    name: "Amathla",
    clusterName: "Abrahamic Myths",
    parent: "abrahamic_origin",
    spouseOf: ["terah"],
    parichay: "Mother of Abraham (according to some ancient traditions).",
    gender: "female"
  },
  {
    id: "abraham",
    name: "Abraham (Ibrahim)",
    clusterName: "Abrahamic Myths",
    parent: "terah",
    mother: "amathla",
    parichay: "The Patriarch. Founder of Monotheism (Tawhid), respected in Judaism, Christianity, and Islam.",
    gender: "male"
  },
  {
    id: "haran",
    name: "Haran",
    clusterName: "Abrahamic Myths",
    parent: "terah",
    parichay: "Brother of Abraham. Died early in Ur.",
    gender: "male"
  },
  {
    id: "nahor_younger",
    name: "Nahor",
    clusterName: "Abrahamic Myths",
    parent: "terah",
    parichay: "Brother of Abraham.",
    gender: "male"
  },
  {
    id: "sarah",
    name: "Sarah",
    clusterName: "Abrahamic Myths",
    parent: "haran",
    spouseOf: ["abraham"],
    parichay: "Wife (and according to Islamic scholars, cousin) of Abraham. Mother of Isaac.",
    gender: "female"
  },
  {
    id: "milcah",
    name: "Milcah",
    clusterName: "Abrahamic Myths",
    parent: "haran",
    spouseOf: ["nahor_younger"],
    parichay: "Daughter of Haran, wife of Nahor.",
    gender: "female"
  },
  {
    id: "iscah",
    name: "Iscah",
    clusterName: "Abrahamic Myths",
    parent: "haran",
    parichay: "Daughter of Haran.",
    gender: "female"
  },
  {
    id: "lot",
    name: "Lot (Lut)",
    clusterName: "Abrahamic Myths",
    parent: "haran",
    parichay: "Son of Haran, nephew of Abraham. Prophet sent to Sodom and Gomorrah.",
    gender: "male"
  },
  {
    id: "hagar",
    name: "Hagar (Hajar)",
    clusterName: "Abrahamic Myths",
    parent: "abrahamic_origin",
    spouseOf: ["abraham"],
    parichay: "Egyptian wife of Abraham. Mother of Ishmael.",
    gender: "female"
  },
  {
    id: "keturah",
    name: "Keturah (Qanturah)",
    clusterName: "Abrahamic Myths",
    parent: "abrahamic_origin",
    spouseOf: ["abraham"],
    parichay: "Wife of Abraham after Sarah's death. Mother of Midian and others.",
    gender: "female"
  },
  {
    id: "ishmael",
    name: "Ishmael (Ismail)",
    clusterName: "Abrahamic Myths",
    parent: "abraham",
    mother: "hagar",
    parichay: "Eldest son of Abraham. Ancestor of the Ishmaelites and the Arab tribes (including Prophet Muhammad).",
    gender: "male"
  },
  {
    id: "nebaioth",
    name: "Nebaioth",
    clusterName: "Abrahamic Myths",
    parent: "ishmael",
    parichay: "Eldest son of Ishmael. Ancestor of the Nabataeans.",
    gender: "male"
  },
  {
    id: "kedar",
    name: "Kedar",
    clusterName: "Abrahamic Myths",
    parent: "ishmael",
    parichay: "Second son of Ishmael. Ancestor of the Qedarites (and Prophet Muhammad's lineage).",
    gender: "male"
  },
  {
    id: "adbeel",
    name: "Adbeel",
    clusterName: "Abrahamic Myths",
    parent: "ishmael",
    parichay: "Son of Ishmael.",
    gender: "male"
  },
  {
    id: "mbsam",
    name: "Mibsam",
    clusterName: "Abrahamic Myths",
    parent: "ishmael",
    parichay: "Son of Ishmael.",
    gender: "male"
  },
  {
    id: "mishma",
    name: "Mishma",
    clusterName: "Abrahamic Myths",
    parent: "ishmael",
    parichay: "Son of Ishmael.",
    gender: "male"
  },
  {
    id: "dumah",
    name: "Dumah",
    clusterName: "Abrahamic Myths",
    parent: "ishmael",
    parichay: "Son of Ishmael.",
    gender: "male"
  },
  {
    id: "massa",
    name: "Massa",
    clusterName: "Abrahamic Myths",
    parent: "ishmael",
    parichay: "Son of Ishmael.",
    gender: "male"
  },
  {
    id: "hadad",
    name: "Hadad",
    clusterName: "Abrahamic Myths",
    parent: "ishmael",
    parichay: "Son of Ishmael.",
    gender: "male"
  },
  {
    id: "tema",
    name: "Tema",
    clusterName: "Abrahamic Myths",
    parent: "ishmael",
    parichay: "Son of Ishmael.",
    gender: "male"
  },
  {
    id: "jetur",
    name: "Jetur",
    clusterName: "Abrahamic Myths",
    parent: "ishmael",
    parichay: "Son of Ishmael.",
    gender: "male"
  },
  {
    id: "naphish",
    name: "Naphish",
    clusterName: "Abrahamic Myths",
    parent: "ishmael",
    parichay: "Son of Ishmael.",
    gender: "male"
  },
  {
    id: "kedemah",
    name: "Kedemah",
    clusterName: "Abrahamic Myths",
    parent: "ishmael",
    parichay: "Son of Ishmael.",
    gender: "male"
  },
  {
    id: "mahalath",
    name: "Mahalath",
    clusterName: "Abrahamic Myths",
    parent: "ishmael",
    parichay: "Daughter of Ishmael. Wife of Esau.",
    gender: "female"
  },
  {
    id: "isaac",
    name: "Isaac (Ishaq)",
    clusterName: "Abrahamic Myths",
    parent: "abraham",
    mother: "sarah",
    parichay: "Second son of Abraham. Ancestor of the Israelites.",
    gender: "male"
  },
  {
    id: "rebekah",
    name: "Rebekah",
    clusterName: "Abrahamic Myths",
    parent: "abrahamic_origin",
    spouseOf: ["isaac"],
    parichay: "Wife of Isaac. Mother of Esau and Jacob.",
    gender: "female"
  },
  {
    id: "zimran",
    name: "Zimran",
    clusterName: "Abrahamic Myths",
    parent: "abraham",
    mother: "keturah",
    parichay: "Son of Abraham and Keturah.",
    gender: "male"
  },
  {
    id: "jokshan",
    name: "Jokshan",
    clusterName: "Abrahamic Myths",
    parent: "abraham",
    mother: "keturah",
    parichay: "Son of Abraham and Keturah.",
    gender: "male"
  },
  {
    id: "medan",
    name: "Medan",
    clusterName: "Abrahamic Myths",
    parent: "abraham",
    mother: "keturah",
    parichay: "Son of Abraham and Keturah.",
    gender: "male"
  },
  {
    id: "midian",
    name: "Midian (Madyan)",
    clusterName: "Abrahamic Myths",
    parent: "abraham",
    mother: "keturah",
    parichay: "Son of Abraham and Keturah. Ancestor of the Midianites.",
    gender: "male"
  },
  {
    id: "ishbak",
    name: "Ishbak",
    clusterName: "Abrahamic Myths",
    parent: "abraham",
    mother: "keturah",
    parichay: "Son of Abraham and Keturah.",
    gender: "male"
  },
  {
    id: "shuah",
    name: "Shuah",
    clusterName: "Abrahamic Myths",
    parent: "abraham",
    mother: "keturah",
    parichay: "Son of Abraham and Keturah.",
    gender: "male"
  },
  {
    id: "jacob",
    name: "Jacob (Yaqub/Israel)",
    clusterName: "Abrahamic Myths",
    parent: "isaac",
    mother: "rebekah",
    parichay: "Son of Isaac. Also known as Israel. Father of the 12 tribes.",
    gender: "male"
  },
  {
    id: "esau",
    name: "Esau",
    clusterName: "Abrahamic Myths",
    parent: "isaac",
    mother: "rebekah",
    spouseOf: ["mahalath"],
    parichay: "Twin brother of Jacob. Ancestor of the Edomites.",
    gender: "male"
  },
  {
    id: "leah",
    name: "Leah",
    clusterName: "Abrahamic Myths",
    parent: "abrahamic_origin",
    spouseOf: ["jacob"],
    parichay: "First wife of Jacob.",
    gender: "female"
  },
  {
    id: "rachel",
    name: "Rachel",
    clusterName: "Abrahamic Myths",
    parent: "abrahamic_origin",
    spouseOf: ["jacob"],
    parichay: "Second and favored wife of Jacob.",
    gender: "female"
  },
  {
    id: "bilhah",
    name: "Bilhah",
    clusterName: "Abrahamic Myths",
    parent: "abrahamic_origin",
    spouseOf: ["jacob"],
    parichay: "Handmaid of Rachel, concubine of Jacob.",
    gender: "female"
  },
  {
    id: "zilpah",
    name: "Zilpah",
    clusterName: "Abrahamic Myths",
    parent: "abrahamic_origin",
    spouseOf: ["jacob"],
    parichay: "Handmaid of Leah, concubine of Jacob.",
    gender: "female"
  },
  {
    id: "reuben",
    name: "Reuben",
    clusterName: "Abrahamic Myths",
    parent: "jacob",
    mother: "leah",
    parichay: "Eldest son of Jacob.",
    gender: "male"
  },
  {
    id: "simeon",
    name: "Simeon",
    clusterName: "Abrahamic Myths",
    parent: "jacob",
    mother: "leah",
    parichay: "Second son of Jacob.",
    gender: "male"
  },
  {
    id: "levi",
    name: "Levi",
    clusterName: "Abrahamic Myths",
    parent: "jacob",
    mother: "leah",
    parichay: "Third son of Jacob. The priestly tribe, from which Moses (Musa) and Aaron (Harun) descend.",
    gender: "male"
  },
  {
    id: "judah",
    name: "Judah (Yehuda)",
    clusterName: "Abrahamic Myths",
    parent: "jacob",
    mother: "leah",
    parichay: "Fourth son of Jacob. The tribe from which King David and Jesus (Isa) descend.",
    gender: "male"
  },
  {
    id: "dan",
    name: "Dan",
    clusterName: "Abrahamic Myths",
    parent: "jacob",
    mother: "bilhah",
    parichay: "Fifth son of Jacob.",
    gender: "male"
  },
  {
    id: "naphtali",
    name: "Naphtali",
    clusterName: "Abrahamic Myths",
    parent: "jacob",
    mother: "bilhah",
    parichay: "Sixth son of Jacob.",
    gender: "male"
  },
  {
    id: "gad",
    name: "Gad",
    clusterName: "Abrahamic Myths",
    parent: "jacob",
    mother: "zilpah",
    parichay: "Seventh son of Jacob.",
    gender: "male"
  },
  {
    id: "asher",
    name: "Asher",
    clusterName: "Abrahamic Myths",
    parent: "jacob",
    mother: "zilpah",
    parichay: "Eighth son of Jacob.",
    gender: "male"
  },
  {
    id: "issachar",
    name: "Issachar",
    clusterName: "Abrahamic Myths",
    parent: "jacob",
    mother: "leah",
    parichay: "Ninth son of Jacob.",
    gender: "male"
  },
  {
    id: "zebulun",
    name: "Zebulun",
    clusterName: "Abrahamic Myths",
    parent: "jacob",
    mother: "leah",
    parichay: "Tenth son of Jacob.",
    gender: "male"
  },
  {
    id: "dinah",
    name: "Dinah",
    clusterName: "Abrahamic Myths",
    parent: "jacob",
    mother: "leah",
    parichay: "Daughter of Jacob.",
    gender: "female"
  },
  {
    id: "joseph",
    name: "Joseph (Yusuf)",
    clusterName: "Abrahamic Myths",
    parent: "jacob",
    mother: "rachel",
    parichay: "Eleventh son of Jacob. Sold into Egypt, later became a powerful vizier.",
    gender: "male"
  },
  {
    id: "benjamin",
    name: "Benjamin",
    clusterName: "Abrahamic Myths",
    parent: "jacob",
    mother: "rachel",
    parichay: "Twelfth son of Jacob. The youngest.",
    gender: "male"
  },
  {
    id: "manasseh",
    name: "Manasseh",
    clusterName: "Abrahamic Myths",
    parent: "joseph",
    parichay: "Eldest son of Joseph.",
    gender: "male"
  },
  {
    id: "ephraim",
    name: "Ephraim",
    clusterName: "Abrahamic Myths",
    parent: "joseph",
    parichay: "Second son of Joseph.",
    gender: "male"
  },
  {
    id: "amram",
    name: "Amram (Imran)",
    clusterName: "Abrahamic Myths",
    parent: "levi",
    parichay: "Descendant of Levi. Father of Moses and Aaron.",
    gender: "male"
  },
  {
    id: "jochebed",
    name: "Jochebed",
    clusterName: "Abrahamic Myths",
    parent: "levi",
    spouseOf: ["amram"],
    parichay: "Wife of Amram, mother of Moses.",
    gender: "female"
  },
  {
    id: "moses",
    name: "Moses (Musa)",
    clusterName: "Abrahamic Myths",
    parent: "amram",
    mother: "jochebed",
    parichay: "Great Prophet and Lawgiver. Led the Israelites out of Egypt.",
    gender: "male"
  },
  {
    id: "aaron",
    name: "Aaron (Harun)",
    clusterName: "Abrahamic Myths",
    parent: "amram",
    mother: "jochebed",
    parichay: "Brother of Moses, first High Priest of the Israelites.",
    gender: "male"
  },
  {
    id: "miriam",
    name: "Miriam",
    clusterName: "Abrahamic Myths",
    parent: "amram",
    mother: "jochebed",
    parichay: "Sister of Moses and Aaron. A prophetess.",
    gender: "female"
  },
  {
    id: "david",
    name: "David (Dawud)",
    clusterName: "Abrahamic Myths",
    parent: "judah",
    parichay: "Descendant of Judah. King of Israel and Prophet.",
    gender: "male"
  },
  {
    id: "solomon",
    name: "Solomon (Sulayman)",
    clusterName: "Abrahamic Myths",
    parent: "david",
    parichay: "Son of David. Wise King of Israel, built the First Temple.",
    gender: "male"
  },
  {
    id: "mary",
    name: "Mary (Maryam)",
    clusterName: "Abrahamic Myths",
    parent: "judah",
    parichay: "Descendant of Judah (or Levi in some traditions). Mother of Jesus.",
    gender: "female"
  },
  {
    id: "jesus",
    name: "Jesus (Isa)",
    clusterName: "Abrahamic Myths",
    parent: "mary",
    parichay: "The Messiah (Christ) in Christianity. A major Prophet in Islam.",
    gender: "male"
  },
  {
    id: "adnan",
    name: "Adnan",
    clusterName: "Abrahamic Myths",
    parent: "kedar",
    parichay: "Descendant of Kedar. The traditional ancestor of the Adnanite Arabs.",
    gender: "male"
  },
  {
    id: "abd_al_muttalib",
    name: "Abd al-Muttalib",
    clusterName: "Abrahamic Myths",
    parent: "adnan",
    parichay: "Descendant of Adnan. Grandfather of Prophet Muhammad.",
    gender: "male"
  },
  {
    id: "abdullah",
    name: "Abdullah",
    clusterName: "Abrahamic Myths",
    parent: "abd_al_muttalib",
    parichay: "Father of Prophet Muhammad.",
    gender: "male"
  },
  {
    id: "aminah",
    name: "Aminah",
    clusterName: "Abrahamic Myths",
    parent: "abrahamic_origin",
    spouseOf: ["abdullah"],
    parichay: "Mother of Prophet Muhammad.",
    gender: "female"
  },
  {
    id: "muhammad",
    name: "Prophet Muhammad (PBUH)",
    clusterName: "Abrahamic Myths",
    parent: "abdullah",
    mother: "aminah",
    parichay: "The final Prophet of Islam. Descendant of Ishmael.",
    gender: "male"
  },
  {
    id: "khadijah",
    name: "Khadijah",
    clusterName: "Abrahamic Myths",
    parent: "abrahamic_origin",
    spouseOf: ["muhammad"],
    parichay: "First wife of Prophet Muhammad.",
    gender: "female"
  },
  {
    id: "fatimah",
    name: "Fatimah",
    clusterName: "Abrahamic Myths",
    parent: "muhammad",
    mother: "khadijah",
    parichay: "Daughter of Prophet Muhammad. Wife of Ali.",
    gender: "female"
  },
  {
    id: "ali",
    name: "Ali ibn Abi Talib",
    clusterName: "Abrahamic Myths",
    parent: "abd_al_muttalib",
    spouseOf: ["fatimah"],
    parichay: "Cousin and son-in-law of Prophet Muhammad. The fourth Caliph.",
    gender: "male"
  },
  {
    id: "hasan",
    name: "Hasan ibn Ali",
    clusterName: "Abrahamic Myths",
    parent: "ali",
    mother: "fatimah",
    parichay: "Eldest son of Ali and Fatimah.",
    gender: "male"
  },
  {
    id: "husayn",
    name: "Husayn ibn Ali",
    clusterName: "Abrahamic Myths",
    parent: "ali",
    mother: "fatimah",
    parichay: "Second son of Ali and Fatimah. Martyred at Karbala.",
    gender: "male"
  }
];
