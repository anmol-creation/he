// Core Init file tying all modules together

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
        const dataList = window.HistoricDB ? window.HistoricDB.getAll() : window.historicData;

        window.MapRenderer.renderNodes(dataList);
        window.MapRenderer.drawConnections(dataList);
        window.MapRenderer.drawTimeDividers();

        window.MapControls.setupEventListeners();
        window.MapUI.setupUI();

        // Initial Focus
        window.MapControls.focusOnNode('brahman');
    } catch(e) {
        console.error("Rendering error:", e);
    }
}

if (window.historicData || window.HistoricDB) {
    initMap();
} else {
    window.addEventListener('HistoricDataLoaded', initMap);
}
