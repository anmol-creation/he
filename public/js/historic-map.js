// Core Init file tying all modules together
import './layout-engine/index.js';

function initMap() {
    console.log("initMap called");
    window.MapState.initElements();

    if (window.LayoutEngine && window.HistoricDB) {
        try {
            // Save raw data explicitly for re-processing
            if (!window.rawHistoricData) {
                window.rawHistoricData = [...window.HistoricDB.getAll()];
            }

            const engine = new window.LayoutEngine([...window.rawHistoricData]);
            const result = engine.process();
            const updatedData = result.nodes;

            window.transitionWires = result.transitionWires;
            window.historicData = updatedData;
            window.HistoricDB.getAll = () => updatedData;
            window.HistoricDB.getNode = (id) => updatedData.find(d => d.id === id);
        } catch (e) {
            console.error("LayoutEngine error:", e);
        }
    }

    try {
        window.MapControls.setupEventListeners();
        window.MapUI.setupUI();

        // Initial Focus (this will trigger the first requestRedraw)
        window.MapControls.focusOnNode('brahman');
    } catch(e) {
        console.error("Initialization error:", e);
    }
}

window.addEventListener('ClusterToggled', () => {
    if (window.LayoutEngine && window.rawHistoricData) {
        const engine = new window.LayoutEngine([...window.rawHistoricData]);
        const result = engine.process();
        window.transitionWires = result.transitionWires;
        window.historicData = result.nodes;
        window.HistoricDB.getAll = () => result.nodes;
        window.HistoricDB.getNode = (id) => result.nodes.find(d => d.id === id);

        window.MapState.requestRedraw();
    }
});

if (window.historicData || window.HistoricDB) {
    initMap();
} else {
    window.addEventListener('HistoricDataLoaded', initMap);
}
