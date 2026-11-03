export const abrahamicLineage = [
  {
    id: "abrahamic_origin",
    label: "Unknown / Symbolic Origins",
    clusterName: "Abrahamic Myths",
    parichay: "The primordial source from which human lineages emerge in Middle-Eastern texts.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "adam",
    label: "Adam",
    clusterName: "Abrahamic Myths",
    parent: "abrahamic_origin",
    parichay: "The first man according to Abrahamic traditions (based on Sumerian Adapa). Formed from clay.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "eve",
    label: "Eve (Hawwa)",
    clusterName: "Abrahamic Myths",
    parent: "abrahamic_origin",
    spouseOf: ["adam"],
    parichay: "The first woman according to Abrahamic traditions (Sumerian Ninti). Meaning 'Mother of all living'.",
    gender: "female",
    yug: "pre-flood"
  },
  {
    id: "cain",
    label: "Cain (Qabil)",
    clusterName: "Abrahamic Myths",
    parent: "adam",
    parichay: "Eldest son of Adam. A farmer who committed the first murder by killing his brother.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "abel",
    label: "Abel (Habil)",
    clusterName: "Abrahamic Myths",
    parent: "adam",
    parichay: "Second son of Adam. A shepherd, murdered by his brother Cain.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "seth",
    label: "Seth (Sheeth)",
    clusterName: "Abrahamic Myths",
    parent: "adam",
    parichay: "Third son of Adam, born after Abel's death. The primary lineage of the prophets descends from him.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "awan",
    label: "Awan",
    clusterName: "Abrahamic Myths",
    parent: "adam",
    spouseOf: ["cain"],
    parichay: "Daughter of Adam, wife of Cain (according to Jubilee texts).",
    gender: "female",
    yug: "pre-flood"
  },
  {
    id: "azura",
    label: "Azura",
    clusterName: "Abrahamic Myths",
    parent: "adam",
    spouseOf: ["seth"],
    parichay: "Daughter of Adam, wife of Seth.",
    gender: "female",
    yug: "pre-flood"
  },
  {
    id: "enosh",
    label: "Enosh",
    clusterName: "Abrahamic Myths",
    parent: "seth",
    parichay: "Son of Seth. It was during his time that people began to invoke the name of the Lord.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "kenan",
    label: "Kenan",
    clusterName: "Abrahamic Myths",
    parent: "enosh",
    parichay: "Son of Enosh.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "mahalalel",
    label: "Mahalalel",
    clusterName: "Abrahamic Myths",
    parent: "kenan",
    parichay: "Son of Kenan.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "jared",
    label: "Jared",
    clusterName: "Abrahamic Myths",
    parent: "mahalalel",
    parichay: "Son of Mahalalel.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "enoch",
    label: "Enoch (Idris)",
    clusterName: "Abrahamic Myths",
    parent: "jared",
    parichay: "Son of Jared. A prophet known for wisdom, writing, and astronomy. Said to be taken to heaven without dying.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "methuselah",
    label: "Methuselah",
    clusterName: "Abrahamic Myths",
    parent: "enoch",
    parichay: "Son of Enoch. Renowned for being the oldest person mentioned in the Bible.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "lamech",
    label: "Lamech",
    clusterName: "Abrahamic Myths",
    parent: "methuselah",
    parichay: "Son of Methuselah and father of Noah.",
    gender: "male",
    yug: "pre-flood"
  },
  {
    id: "noah",
    label: "Noah (Nuh)",
    clusterName: "Abrahamic Myths",
    parent: "lamech",
    parichay: "The prophet who built the Ark to survive the Great Flood (analogous to Manu's flood).",
    gender: "male",
    yug: "flood"
  },
  {
    id: "shem",
    label: "Shem (Sam)",
    clusterName: "Abrahamic Myths",
    parent: "noah",
    parichay: "Eldest son of Noah. Ancestor of the Semitic peoples (Jews, Arabs, Arameans).",
    gender: "male",
    yug: "post-flood"
  },
  {
    id: "ham",
    label: "Ham",
    clusterName: "Abrahamic Myths",
    parent: "noah",
    parichay: "Second son of Noah. Ancestor of the Hamitic peoples (Egyptians, Canaanites, Cushites).",
    gender: "male",
    yug: "post-flood"
  },
  {
    id: "japheth",
    label: "Japheth (Yafith)",
    clusterName: "Abrahamic Myths",
    parent: "noah",
    parichay: "Third son of Noah. Ancestor of the Japhetic peoples (Indo-Europeans, Greeks).",
    gender: "male",
    yug: "post-flood"
  },
  {
    id: "cush",
    label: "Cush",
    clusterName: "Abrahamic Myths",
    parent: "ham",
    parichay: "Son of Ham. Ancestor of the Cushites.",
    gender: "male"
  },
  {
    id: "nimrod",
    label: "Nimrod (Namrud)",
    clusterName: "Abrahamic Myths",
    parent: "cush",
    parichay: "Son of Cush. Described as a mighty hunter and tyrant king who built Babel and confronted Ibrahim.",
    gender: "male"
  },
  {
    id: "arpachshad",
    label: "Arpachshad",
    clusterName: "Abrahamic Myths",
    parent: "shem",
    parichay: "Son of Shem in the direct line to Abraham.",
    gender: "male"
  },
  {
    id: "shelah",
    label: "Shelah",
    clusterName: "Abrahamic Myths",
    parent: "arpachshad",
    parichay: "Son of Arpachshad.",
    gender: "male"
  },
  {
    id: "eber",
    label: "Eber (Prophet Hud)",
    clusterName: "Abrahamic Myths",
    parent: "shelah",
    parichay: "Son of Shelah. Often identified with Prophet Hud, sent to the people of 'Aad.",
    gender: "male"
  },
  {
    id: "peleg",
    label: "Peleg",
    clusterName: "Abrahamic Myths",
    parent: "eber",
    parichay: "Son of Eber. His name means 'division', signifying the division of the earth/languages.",
    gender: "male"
  },
  {
    id: "reu",
    label: "Reu",
    clusterName: "Abrahamic Myths",
    parent: "peleg",
    parichay: "Son of Peleg.",
    gender: "male"
  },
  {
    id: "serug",
    label: "Serug",
    clusterName: "Abrahamic Myths",
    parent: "reu",
    parichay: "Son of Reu. During his time, idolatry became prominent in Mesopotamia.",
    gender: "male"
  },
  {
    id: "nahor_elder",
    label: "Nahor",
    clusterName: "Abrahamic Myths",
    parent: "serug",
    parichay: "Son of Serug and grandfather of Abraham.",
    gender: "male"
  },
  {
    id: "terah",
    label: "Terah (Azar)",
    clusterName: "Abrahamic Myths",
    parent: "nahor_elder",
    parichay: "Father of Abraham. A sculptor and merchant of idols in the city of Ur.",
    gender: "male"
  },
  {
    id: "abraham",
    label: "Abraham (Ibrahim)",
    clusterName: "Abrahamic Myths",
    parent: "terah",
    parichay: "The Patriarch. Founder of Monotheism (Tawhid), respected in Judaism, Christianity, and Islam.",
    gender: "male"
  },
  {
    id: "haran",
    label: "Haran",
    clusterName: "Abrahamic Myths",
    parent: "terah",
    parichay: "Brother of Abraham. Died early in Ur.",
    gender: "male"
  },
  {
    id: "nahor_younger",
    label: "Nahor (Brother of Abraham)",
    clusterName: "Abrahamic Myths",
    parent: "terah",
    parichay: "Brother of Abraham.",
    gender: "male"
  },
  {
    id: "sarah",
    label: "Sarah",
    clusterName: "Abrahamic Myths",
    parent: "haran",
    spouseOf: ["abraham"],
    parichay: "Wife (and according to Islamic scholars, cousin) of Abraham. Mother of Isaac.",
    gender: "female"
  },
  {
    id: "lot",
    label: "Lot (Lut)",
    clusterName: "Abrahamic Myths",
    parent: "haran",
    parichay: "Son of Haran, nephew of Abraham. Prophet sent to Sodom and Gomorrah.",
    gender: "male"
  },
  {
    id: "hagar",
    label: "Hagar (Hajar)",
    clusterName: "Abrahamic Myths",
    parent: "abrahamic_origin",
    spouseOf: ["abraham"],
    parichay: "Egyptian wife of Abraham. Mother of Ishmael.",
    gender: "female"
  },
  {
    id: "keturah",
    label: "Keturah (Qanturah)",
    clusterName: "Abrahamic Myths",
    parent: "abrahamic_origin",
    spouseOf: ["abraham"],
    parichay: "Wife of Abraham after Sarah's death. Mother of Midian.",
    gender: "female"
  },
  {
    id: "ishmael",
    label: "Ishmael (Ismail)",
    clusterName: "Abrahamic Myths",
    parent: "abraham",
    mother: "hagar",
    parichay: "Eldest son of Abraham. Ancestor of the Ishmaelites and the Arab tribes (including Prophet Muhammad).",
    gender: "male"
  },
  {
    id: "isaac",
    label: "Isaac (Ishaq)",
    clusterName: "Abrahamic Myths",
    parent: "abraham",
    mother: "sarah",
    parichay: "Second son of Abraham. Ancestor of the Israelites.",
    gender: "male"
  },
  {
    id: "midian",
    label: "Midian (Madyan)",
    clusterName: "Abrahamic Myths",
    parent: "abraham",
    mother: "keturah",
    parichay: "Son of Abraham and Keturah. Ancestor of the Midianites.",
    gender: "male"
  },
  {
    id: "jacob",
    label: "Jacob (Yaqub/Israel)",
    clusterName: "Abrahamic Myths",
    parent: "isaac",
    parichay: "Son of Isaac. Also known as Israel. Father of the 12 tribes.",
    gender: "male"
  },
  {
    id: "esau",
    label: "Esau",
    clusterName: "Abrahamic Myths",
    parent: "isaac",
    parichay: "Twin brother of Jacob. Ancestor of the Edomites.",
    gender: "male"
  },
  {
    id: "joseph",
    label: "Joseph (Yusuf)",
    clusterName: "Abrahamic Myths",
    parent: "jacob",
    parichay: "Son of Jacob. Sold into Egypt, later became a powerful vizier.",
    gender: "male"
  },
  {
    id: "judah",
    label: "Judah (Yehuda)",
    clusterName: "Abrahamic Myths",
    parent: "jacob",
    parichay: "Son of Jacob. The tribe from which King David and Jesus (Isa) descend.",
    gender: "male"
  },
  {
    id: "levi",
    label: "Levi",
    clusterName: "Abrahamic Myths",
    parent: "jacob",
    parichay: "Son of Jacob. The priestly tribe, from which Moses (Musa) and Aaron (Harun) descend.",
    gender: "male"
  }
];
