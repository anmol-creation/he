window.MapControls = {
    setupEventListeners() {
        const state = window.MapState;
        const container = state.container;
        let rafPending = false;

        const requestTransformUpdate = () => {
            if (!rafPending) {
                rafPending = true;
                requestAnimationFrame(() => {
                    state.updateTransform();
                    rafPending = false;
                });
            }
        };


        container.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                state.touchStartX = e.touches[0].clientX;
                state.touchStartY = e.touches[0].clientY;
                state.isDragging = true;
                state.startX = state.touchStartX - state.translateX;
                state.startY = state.touchStartY - state.translateY;
                state.touchStartTime = Date.now();
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
                    requestTransformUpdate();
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
                requestTransformUpdate();
            }
        }, {passive: false});

        container.addEventListener('touchend', (e) => {
            if (e.touches.length === 0) {
                state.isDragging = false;
                state.initialPinchDistance = null;

                // Fast Swipe Navigation (Parents/Children/Siblings only)
                if (state.touchStartTime && !state.isMacroMode && state.focusedNodeId) {
                    const touchDuration = Date.now() - state.touchStartTime;
                    const endTouch = e.changedTouches[0];
                    const deltaX = endTouch.clientX - state.touchStartX;
                    const deltaY = endTouch.clientY - state.touchStartY;

                    const absX = Math.abs(deltaX);
                    const absY = Math.abs(deltaY);

                    if (touchDuration < 300 && Math.max(absX, absY) > 30) {
                        const actualDir = absX > absY
                            ? (deltaX > 0 ? 'left' : 'right')
                            : (deltaY > 0 ? 'up' : 'down');

                        if (window.MapControls && window.MapControls.navigateDirection) {
                            window.MapControls.navigateDirection(actualDir);
                        }
                    }
                }
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
            requestTransformUpdate();
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
            requestTransformUpdate();
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





    navigateDirection(direction) {
        const state = window.MapState;
        if (!state.focusedNodeId || state.isMacroMode) return;

        const dataList = window.HistoricDB ? window.HistoricDB.getAll() : window.historicData;
        const current = dataList.find(d => d.id === state.focusedNodeId);
        if (!current) return;

        let bestCandidate = null;
        let minScore = Infinity;

        // Visual Line Based Navigation Logic (Strictly structural/visual connections only, agnostic of relationship ID names)
        const validCandidates = dataList.filter(n => {
            if (n.id === current.id) return false;

            // Check if there's a visual line connection (up/down/spouse)
            // A node is visually connected downwards if its source/parent draws a line down to it
            const connectedDown = (n.parent === current.id || n.mother === current.id || n.spouseOf === current.id);
            // A node is visually connected upwards if current draws a line up to it
            const connectedUp = (current.parent === n.id || current.mother === n.id || current.spouseOf === n.id);

            // A node is visually a lateral sibling if they share the EXACT same visual origin line
            const connectedLateral = (
                (n.parent && current.parent && n.parent === current.parent) ||
                (n.mother && current.mother && n.mother === current.mother) ||
                (n.spouseOf && current.spouseOf && n.spouseOf === current.spouseOf)
            );

            if (direction === 'up' && connectedUp) return true;
            if (direction === 'down' && connectedDown) return true;
            if ((direction === 'left' || direction === 'right') && (connectedLateral || connectedUp || connectedDown)) {
                // Lateral movement can hop across siblings, or adjacent spouses, or anything on a similar Y-level
                // that is structurally connected to the same cluster.
                return true;
            }

            return false;
        });

        for (const node of validCandidates) {
            const dx = node.x - current.x;
            const dy = node.y - current.y;

            let isValidDirection = false;

            // Extremely strict spatial check based on the swipe direction
            if (direction === 'left' && dx < -10) isValidDirection = true;
            else if (direction === 'right' && dx > 10) isValidDirection = true;
            else if (direction === 'up' && dy < -10) isValidDirection = true;
            else if (direction === 'down' && dy > 10) isValidDirection = true;

            // If they are on the exact same spot (like multiple proxy wives), allow it based on context
            if (Math.abs(dx) <= 10 && Math.abs(dy) <= 10) isValidDirection = true;

            if (isValidDirection) {
                // Penalize perpendicular distance heavily to ensure straight lines are preferred
                let primaryDist = direction === 'left' || direction === 'right' ? Math.abs(dx) : Math.abs(dy);
                let secondaryDist = direction === 'left' || direction === 'right' ? Math.abs(dy) : Math.abs(dx);

                let score = primaryDist + (secondaryDist * 5);

                if (score < minScore) {
                    minScore = score;
                    bestCandidate = node;
                }
            }
        }

        if (bestCandidate) {
            this.focusOnNode(bestCandidate.id);
        }
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
            progress += 0.15;
            if (progress > 1) progress = 1;

            const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
            const p = easeOutCubic(progress);

            state.translateX = startTx + (targetTranslateX - startTx) * p;
            state.translateY = startTy + (targetTranslateY - startTy) * p;
            state.updateTransform();

            if (progress < 1) requestAnimationFrame(animate);
        }
        animate();
    }
};
