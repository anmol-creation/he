import { supremeData } from './historic-map-data/supreme.js';
import { vishnuBaseData } from './historic-map-data/vishnu/vishnu-base.js';
import { maheshBaseData } from './historic-map-data/mahesh/mahesh-base.js';
import { brahmaBaseData } from './historic-map-data/brahma/brahma-base.js';
import { kashyapData } from './historic-map-data/brahma/kashyap.js';
import { chandravanshCoreData } from './historic-map-data/brahma/chandravansh/core.js';
import { kashiData } from './historic-map-data/brahma/chandravansh/kashi.js';
import { yaduData } from './historic-map-data/brahma/chandravansh/yadu.js';
import { puruData } from './historic-map-data/brahma/chandravansh/puru.js';
import { kuruData } from './historic-map-data/brahma/chandravansh/kuru.js';
import { anuDruhyuTurvasuData } from './historic-map-data/brahma/chandravansh/anu_druhyu_turvasu.js';
import { agnivanshData } from './historic-map-data/brahma/agnivansh.js';
import { jhansiNewalkarData } from './historic-map-data/brahma/jhansi-newalkar.js';
import { coreData } from './historic-map-data/brahma/suryavansh/core.js';
import { my_lineageData } from './historic-map-data/brahma/suryavansh/my_lineage.js';

// Combine all data into one master array
export const historicData = [
    ...supremeData,
    ...vishnuBaseData,
    ...maheshBaseData,
    ...brahmaBaseData,
    ...kashyapData,
    ...chandravanshCoreData,
    ...kashiData,
    ...yaduData,
    ...puruData,
    ...kuruData,
    ...anuDruhyuTurvasuData,
    ...agnivanshData,
    ...jhansiNewalkarData,
    ...coreData,
    ...my_lineageData
];

// Provide global access for backward compatibility with non-module scripts
if (typeof window !== "undefined") window.historicData = historicData;

if (typeof window !== "undefined") window.HistoricDB = {
    getAll: () => historicData,
    getNode: (id) => historicData.find(d => d.id === id),
    getChildren: (id) => historicData.filter(d => d.parent === id),
    getSiblings: (id) => {
        const node = historicData.find(d => d.id === id);
        if (!node || !node.parent) return [];
        return historicData.filter(d => d.parent === node.parent);
    }
};

// Dispatch an event to let the app know the data is ready (if needed)
if (typeof window !== 'undefined') window.dispatchEvent(new Event('HistoricDataLoaded'));
