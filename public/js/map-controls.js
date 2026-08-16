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

                if (state.touchStartTime && !state.isMacroMode && state.focusedNodeId) {
                    const touchDuration = Date.now() - state.touchStartTime;
                    const endTouch = e.changedTouches[0];
                    const deltaX = endTouch.clientX - state.touchStartX;
                    const deltaY = endTouch.clientY - state.touchStartY;

                    const absX = Math.abs(deltaX);
                    const absY = Math.abs(deltaY);

                    if (touchDuration < 300 && Math.max(absX, absY) > 30) {
                        const actualDir = absX > absY ? (deltaX > 0 ? 'left' : 'right') : (deltaY > 0 ? 'up' : 'down');

                        if (window.MapControls && window.MapControls.navigateDirection) {
                            window.MapControls.navigateDirection(actualDir);
                        }
                    }
                }
            }
        });

        container.addEventListener('click', (e) => {
            if (e.target.closest('#focus-panel') || e.target.closest('.floating-controls') || e.target.closest('.route-search-container')) return;
            if (Math.abs(e.clientX - state.startX - state.translateX) > 5 || Math.abs(e.clientY - state.startY - state.translateY) > 5) return;

            const rect = state.canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;

            const worldX = (clickX - state.translateX) / state.scale;
            const worldY = (clickY - state.translateY) / state.scale;

            // Check if cluster toggle hitboxes were clicked (+ / × icons)
            if (state.clusterHitBoxes && state.clusterHitBoxes.length > 0) {
                for (let i = state.clusterHitBoxes.length - 1; i >= 0; i--) {
                    const box = state.clusterHitBoxes[i];
                    if (worldX >= box.x && worldX <= box.x + box.w && worldY >= box.y && worldY <= box.y + box.h) {
                        if (box.action === 'expand') {
                            state.expandedClusters.add(box.clusterName);
                        } else {
                            state.expandedClusters.delete(box.clusterName);
                        }
                        if (window.LayoutEngine && window.HistoricDB) {
                            window.dispatchEvent(new Event('ClusterToggled'));
                        }
                        return; // Stop event processing
                    }
                }
            }

            // Check if switcher hitboxes were clicked
            if (state.switcherHitBoxes && state.switcherHitBoxes.length > 0) {
                for (const box of state.switcherHitBoxes) {
                    if (worldX >= box.x && worldX <= box.x + box.w && worldY >= box.y && worldY <= box.y + box.h) {
                        let changed = false;
                        if (box.type === 'kalpa') {
                            if (box.action === 'prev' && state.currentKalpaIndex > 0) {
                                state.currentKalpaIndex--;
                                changed = true;
                            } else if (box.action === 'next' && state.currentKalpaIndex < state.kalpas.length - 1) {
                                state.currentKalpaIndex++;
                                changed = true;
                            }
                        } else if (box.type === 'manvantara') {
                            if (box.action === 'prev' && state.currentManvIndex > 0) {
                                state.currentManvIndex--;
                                changed = true;
                            } else if (box.action === 'next' && state.currentManvIndex < state.manvantaras.length - 1) {
                                state.currentManvIndex++;
                                changed = true;
                            }
                        }

                        if (changed) {
                            state.updateKalpaManvState();
                        }
                        return; // Stop event processing
                    }
                }
            }

            const dataList = window.HistoricDB ? window.HistoricDB.getAll() : window.historicData;

            for (let i = dataList.length - 1; i >= 0; i--) {
                const node = dataList[i];
                const w = node.spouseOf ? 120 : 140;
                const h = node.spouseOf ? 40 : 60;
                const x = node.x - w/2;
                const y = node.y - h/2;

                if (worldX >= x && worldX <= x + w && worldY >= y && worldY <= y + h) {
                    // Main node body clicked - only open panel and focus
                    this.focusOnNode(node.id);
                    if (window.MapUI) window.MapUI.openPanel(node);
                    return;
                }
            }
        });

        container.addEventListener('mousedown', (e) => {
            if (e.target.closest('#focus-panel') || e.target.closest('.floating-controls') || e.target.closest('.route-search-container')) return;
            state.isDragging = true;
            state.startX = e.clientX - state.translateX;
            state.startY = e.clientY - state.translateY;
            container.style.cursor = 'grabbing';
        });

        window.addEventListener('mousemove', (e) => {
            if (!state.isDragging) return;
            state.translateX = e.clientX - state.startX;
            state.translateY = e.clientY - state.startY;
            requestTransformUpdate();
        });

        window.addEventListener('mouseup', () => {
            state.isDragging = false;
            container.style.cursor = 'grab';
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

        const validCandidates = dataList.filter(n => {
            if (n.id === current.id) return false;

            const connectedDown = (n.parent === current.id || n.mother === current.id || n.spouseOf === current.id);
            const connectedUp = (current.parent === n.id || current.mother === n.id || current.spouseOf === n.id);
            const connectedLateral = (
                (n.parent && current.parent && n.parent === current.parent) ||
                (n.mother && current.mother && n.mother === current.mother) ||
                (n.spouseOf && current.spouseOf && n.spouseOf === current.spouseOf)
            );

            if (direction === 'up' && connectedUp) return true;
            if (direction === 'down' && connectedDown) return true;
            if ((direction === 'left' || direction === 'right') && (connectedLateral || connectedUp || connectedDown)) {
                return true;
            }

            return false;
        });

        for (const node of validCandidates) {
            const dx = node.x - current.x;
            const dy = node.y - current.y;

            let isValidDirection = false;

            if (direction === 'left' && dx < -10) isValidDirection = true;
            else if (direction === 'right' && dx > 10) isValidDirection = true;
            else if (direction === 'up' && dy < -10) isValidDirection = true;
            else if (direction === 'down' && dy > 10) isValidDirection = true;

            if (Math.abs(dx) <= 10 && Math.abs(dy) <= 10) isValidDirection = true;

            if (isValidDirection) {
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

            // Dynamic Info Box update if panel is already open
            const panel = document.getElementById('focus-panel');
            if (panel && !panel.classList.contains('hidden')) {
                if (window.MapUI && window.MapUI.openPanel) {
                    window.MapUI.openPanel(bestCandidate);
                }
            }
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

        const animate = () => {
            progress += 0.15;
            if (progress > 1) progress = 1;

            const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
            const p = easeOutCubic(progress);

            state.translateX = startTx + (targetTranslateX - startTx) * p;
            state.translateY = startTy + (targetTranslateY - startTy) * p;
            state.updateTransform();

            if (progress < 1) requestAnimationFrame(animate);
        };
        animate();
    }
};
