window.MapControls = {
    setupEventListeners() {
        const state = window.MapState;
        const container = state.container;

        container.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                state.touchStartX = e.touches[0].clientX;
                state.touchStartY = e.touches[0].clientY;
                state.isDragging = true;
                state.startX = state.touchStartX - state.translateX;
                state.startY = state.touchStartY - state.translateY;
            } else if (e.touches.length === 2) {
                state.isDragging = false;
                state.initialPinchDistance = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
                state.initialScale = state.scale;

                const rect = container.getBoundingClientRect();
                state.initialPinchCenterX = ((e.touches[0].clientX + e.touches[1].clientX) / 2) - rect.left;
                state.initialPinchCenterY = ((e.touches[0].clientY + e.touches[1].clientY) / 2) - rect.top;
            }
        }, {passive: false});

        container.addEventListener('touchmove', (e) => {
            e.preventDefault();
            if (e.touches.length === 1) {
                if (state.isDragging) {
                    state.translateX = e.touches[0].clientX - state.startX;
                    state.translateY = e.touches[0].clientY - state.startY;
                    state.updateTransform();
                }
            } else if (e.touches.length === 2 && state.initialPinchDistance) {
                const currentDistance = Math.hypot(
                    e.touches[0].clientX - e.touches[1].clientX,
                    e.touches[0].clientY - e.touches[1].clientY
                );
                const newScale = Math.min(Math.max(0.1, state.initialScale * (currentDistance / state.initialPinchDistance)), 2);

                state.translateX = state.initialPinchCenterX - (state.initialPinchCenterX - state.translateX) * (newScale / state.scale);
                state.translateY = state.initialPinchCenterY - (state.initialPinchCenterY - state.translateY) * (newScale / state.scale);

                state.scale = newScale;
                state.updateTransform();
            }
        }, {passive: false});

        container.addEventListener('touchend', (e) => {
            if (e.touches.length === 0) {
                state.isDragging = false;
                state.initialPinchDistance = null;
            }
        });

        container.addEventListener('mousedown', (e) => {
            if (e.target.closest('.map-node') || e.target.closest('#focus-panel')) return;
            state.isDragging = true;
            state.startX = e.clientX - state.translateX;
            state.startY = e.clientY - state.translateY;
        });

        window.addEventListener('mousemove', (e) => {
            if (!state.isDragging) return;
            state.translateX = e.clientX - state.startX;
            state.translateY = e.clientY - state.startY;
            state.updateTransform();
        });

        window.addEventListener('mouseup', () => {
            state.isDragging = false;
        });

        container.addEventListener('wheel', (e) => {
            e.preventDefault();
            const zoomFactor = Math.exp(e.deltaY * -0.002);
            const newScale = Math.min(Math.max(0.1, state.scale * zoomFactor), 2.5);

            const rect = container.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            state.translateX = mouseX - (mouseX - state.translateX) * (newScale / state.scale);
            state.translateY = mouseY - (mouseY - state.translateY) * (newScale / state.scale);

            state.scale = newScale;
            state.updateTransform();
        }, { passive: false });

        const zoomLevels = [0.15, 0.4, 0.8, 1.2];

        document.getElementById('zoom-in-btn').addEventListener('click', () => {
            let currentLevelIdx = zoomLevels.findIndex(l => l >= state.scale) || 0;
            if (currentLevelIdx === -1) currentLevelIdx = zoomLevels.length - 1;
            if (currentLevelIdx < zoomLevels.length - 1) {
                this.zoomToLevel(zoomLevels[currentLevelIdx + 1]);
            }
        });

        document.getElementById('zoom-out-btn').addEventListener('click', () => {
            let currentLevelIdx = zoomLevels.findIndex(l => l >= Math.abs(state.scale - 0.01));
            if (currentLevelIdx === -1) currentLevelIdx = zoomLevels.length;
            if (currentLevelIdx > 0) {
                this.zoomToLevel(zoomLevels[currentLevelIdx - 1]);
            }
        });
    },

    zoomToLevel(newScale) {
        const state = window.MapState;
        if (!state.focusedNodeId) return;

        const dataList = window.HistoricDB ? window.HistoricDB.getAll() : window.historicData;
        const nodeData = dataList.find(d => d.id === state.focusedNodeId);
        if (!nodeData) return;

        state.scale = newScale;

        const containerRect = state.container.getBoundingClientRect();
        const isMobile = window.innerWidth <= 768;
        const yOffset = isMobile ? (containerRect.height * 0.25) : 0;

        state.translateX = (containerRect.width / 2) - (nodeData.x * state.scale);
        state.translateY = (containerRect.height / 2) - (nodeData.y * state.scale) - yOffset;

        state.updateTransform();
    },

    focusOnNode(nodeId) {
        const state = window.MapState;
        const dataList = window.HistoricDB ? window.HistoricDB.getAll() : window.historicData;
        const nodeData = dataList.find(d => d.id === nodeId);
        if (!nodeData) return;

        state.focusedNodeId = nodeId;

        if (state.isMacroMode) {
            state.scale = 0.4;
            state.isMacroMode = false;
        }

        if (window.MapRenderer) window.MapRenderer.highlightRelatives(nodeId);

        const containerRect = state.container.getBoundingClientRect();
        const isMobile = window.innerWidth <= 768;
        const yOffset = isMobile ? (containerRect.height * 0.25) : 0;

        const targetTranslateX = (containerRect.width / 2) - (nodeData.x * state.scale);
        const targetTranslateY = (containerRect.height / 2) - (nodeData.y * state.scale) - yOffset;

        let progress = 0;
        const startTx = state.translateX;
        const startTy = state.translateY;

        function animate() {
            progress += 0.05;
            if (progress > 1) progress = 1;

            const easeOutQuad = t => t * (2 - t);
            const p = easeOutQuad(progress);

            state.translateX = startTx + (targetTranslateX - startTx) * p;
            state.translateY = startTy + (targetTranslateY - startTy) * p;
            state.updateTransform();

            if (progress < 1) requestAnimationFrame(animate);
        }
        animate();
    }
};
