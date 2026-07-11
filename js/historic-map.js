// Core Init file tying all modules together
import './layout-engine/index.js';

function initMap() {
    console.log("initMap called");
    window.MapState.initElements();

    if (window.LayoutEngine && window.HistoricDB) {
        try {
            const engine = new window.LayoutEngine(window.HistoricDB.getAll());
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

if (window.historicData || window.HistoricDB) {
    initMap();
} else {
    window.addEventListener('HistoricDataLoaded', initMap);
}
