// GeoJSON data for the 16 Mahajanapadas (approximate locations around 600 BCE)
const mahajanapadasData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Kamboja",
                "ruler": "Kshatriya Republics",
                "capital": "Rajapura",
                "color": "#9b59b6",
                "description": "Known for its excellent horses. Located in the Hindukush mountains."
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[70.0, 34.5], [72.0, 34.5], [72.0, 33.5], [70.0, 33.5], [70.0, 34.5]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Gandhara",
                "ruler": "King Pukkusati",
                "capital": "Taxila (Takshashila)",
                "color": "#3498db",
                "description": "A major center of learning. Founded by Taksha, son of Bharata."
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[72.0, 34.5], [74.0, 34.5], [74.0, 33.0], [72.0, 33.0], [72.0, 34.5]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Kuru",
                "ruler": "Kauravas (Chandravansh)",
                "capital": "Indraprastha / Hastinapur",
                "color": "#e67e22",
                "description": "The center of the epic Mahabharata."
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[76.0, 29.5], [78.5, 29.5], [78.5, 27.5], [76.0, 27.5], [76.0, 29.5]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Panchala",
                "ruler": "King Drupada",
                "capital": "Ahichchatra / Kampilya",
                "color": "#e74c3c",
                "description": "Divided into Northern and Southern Panchala."
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[78.5, 28.5], [80.5, 28.5], [80.5, 26.5], [78.5, 26.5], [78.5, 28.5]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Surasena",
                "ruler": "Yaduvanshis",
                "capital": "Mathura",
                "color": "#f1c40f",
                "description": "The birthplace of Lord Krishna. Ruled by Avantiputra later."
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[77.0, 27.5], [78.5, 27.5], [78.5, 26.5], [77.0, 26.5], [77.0, 27.5]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Matsya",
                "ruler": "King Virata",
                "capital": "Viratanagara",
                "color": "#2ecc71",
                "description": "Where the Pandavas spent their incognito exile."
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[75.0, 28.0], [77.0, 28.0], [77.0, 26.0], [75.0, 26.0], [75.0, 28.0]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Avanti",
                "ruler": "Pradyota Dynasty",
                "capital": "Ujjayini / Mahishmati",
                "color": "#1abc9c",
                "description": "A fierce rival to Magadha, founded over the ruins of Haihaya Kshatriyas."
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[74.0, 24.5], [77.0, 24.5], [77.0, 22.0], [74.0, 22.0], [74.0, 24.5]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Chedi",
                "ruler": "Shishupala (Chandravansh)",
                "capital": "Shuktimati",
                "color": "#8e44ad",
                "description": "Located in the Bundelkhand region."
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[79.0, 25.5], [81.0, 25.5], [81.0, 24.0], [79.0, 24.0], [79.0, 25.5]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Vatsa",
                "ruler": "King Udayana (Paurava)",
                "capital": "Kaushambi",
                "color": "#34495e",
                "description": "Formed when Kuru capital Hastinapur was washed away by floods."
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[81.0, 26.0], [82.5, 26.0], [82.5, 25.0], [81.0, 25.0], [81.0, 26.0]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Kosala",
                "ruler": "King Prasenajit (Suryavansh)",
                "capital": "Shravasti / Ayodhya",
                "color": "#d35400",
                "description": "The ancestral kingdom of Lord Rama."
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[81.5, 28.0], [83.5, 28.0], [83.5, 26.5], [81.5, 26.5], [81.5, 28.0]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Malla",
                "ruler": "Malla Republic",
                "capital": "Kushinagar / Pava",
                "color": "#c0392b",
                "description": "A republic where both Buddha and Mahavira attained Nirvana."
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[83.5, 27.5], [84.5, 27.5], [84.5, 26.5], [83.5, 26.5], [83.5, 27.5]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Kashi",
                "ruler": "King Brahmadatta",
                "capital": "Varanasi",
                "color": "#f39c12",
                "description": "Ancient holy city, frequently in conflict with Kosala."
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[82.5, 25.5], [83.5, 25.5], [83.5, 25.0], [82.5, 25.0], [82.5, 25.5]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Vajji (Vrijji)",
                "ruler": "Lichchhavi Confederacy",
                "capital": "Vaishali",
                "color": "#16a085",
                "description": "A powerful confederacy of 8 clans including the Lichchhavis and Jnatrikas."
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[84.5, 26.5], [86.0, 26.5], [86.0, 25.5], [84.5, 25.5], [84.5, 26.5]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Magadha",
                "ruler": "Haryanka / Shishunaga (Chandravansh roots)",
                "capital": "Rajgir (Girivraja)",
                "color": "#2980b9",
                "description": "The most powerful Mahajanapada which eventually formed India's first empire."
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[84.0, 25.5], [86.0, 25.5], [86.0, 24.5], [84.0, 24.5], [84.0, 25.5]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Anga",
                "ruler": "Karna (Earlier)",
                "capital": "Champa",
                "color": "#8e44ad",
                "description": "Annexed by Magadha's king Bimbisara."
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[86.0, 25.5], [87.5, 25.5], [87.5, 24.5], [86.0, 24.5], [86.0, 25.5]]]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Ashmaka (Assaka)",
                "ruler": "Ikshvaku rulers",
                "capital": "Paudanya (Potana)",
                "color": "#27ae60",
                "description": "The only Mahajanapada situated south of the Vindhyas (on Godavari river)."
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[77.0, 19.5], [79.0, 19.5], [79.0, 18.0], [77.0, 18.0], [77.0, 19.5]]]
            }
        }
    ]
};
