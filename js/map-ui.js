window.MapUI = {
    setupUI() {
        // Panel Close
        document.getElementById('close-panel').addEventListener('click', () => {
            document.getElementById('focus-panel').classList.add('hidden');
        });

        // Panel Tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                const tab = e.target.dataset.tab;
                const contentArea = document.getElementById('panel-content-area');
                if(tab === 'parichay') contentArea.innerHTML = '<p>विस्तृत परिचय यहाँ आएगा।</p>';
                if(tab === 'jeevan') contentArea.innerHTML = '<p>जीवन की मुख्य घटनाएँ और टाइमलाइन।</p>';
                if(tab === 'kathayein') contentArea.innerHTML = '<p>प्रचलित कथाएँ और प्रसंग।</p>';
            });
        });

        // Filter Dropdown UI Logic
        const mapViewBtn = document.getElementById('map-view-btn');
        const filterDropdown = document.getElementById('map-filter-dropdown');
        const filterTransitionWires = document.getElementById('filter-transition-wires');

        if (mapViewBtn && filterDropdown) {
            mapViewBtn.addEventListener('click', () => {
                const isVisible = filterDropdown.style.display === 'block';
                filterDropdown.style.display = isVisible ? 'none' : 'block';
            });
        }

        // Kalpa Switcher Logic (Injected inline safely within setupUI)
        const kalpas = [
            { id: 'padma', index: 50, title: 'Padma Kalpa' },
            { id: 'shveta_varaha', index: 51, title: 'Shveta Varaha (Current)' },
            { id: 'nilalohita', index: 52, title: 'Nilalohita Kalpa (Future)' }
        ];

        let currentKalpaIndex = 1; // Default to 51st

        const prevKalpaBtn = document.getElementById('prev-kalpa-btn');
        const nextKalpaBtn = document.getElementById('next-kalpa-btn');
        const kalpaDisplay = document.getElementById('current-kalpa-display');

        const updateKalpaUI = () => {
            const current = kalpas[currentKalpaIndex];
            window.MapState.activeKalpa = current.id;

            if (kalpaDisplay) {
                kalpaDisplay.innerHTML = `
                    <div style="font-size: 0.9rem; color: #999;">${current.index}${current.index === 50 ? 'th' : current.index === 51 ? 'st' : 'nd'} Kalpa</div>
                    <div style="font-size: 1.1rem; color: #FFD700;">${current.title}</div>
                `;
            }

            if (prevKalpaBtn) prevKalpaBtn.style.opacity = currentKalpaIndex === 0 ? '0.3' : '1';
            if (nextKalpaBtn) nextKalpaBtn.style.opacity = currentKalpaIndex === kalpas.length - 1 ? '0.3' : '1';

            // Trigger full recalculation & re-render by dispatching event, so TreeBuilder uses raw data
            window.dispatchEvent(new Event('ClusterToggled'));
        };

        if (prevKalpaBtn && nextKalpaBtn) {
            prevKalpaBtn.addEventListener('click', () => {
                if (currentKalpaIndex > 0) {
                    currentKalpaIndex--;
                    updateKalpaUI();
                }
            });

            nextKalpaBtn.addEventListener('click', () => {
                if (currentKalpaIndex < kalpas.length - 1) {
                    currentKalpaIndex++;
                    updateKalpaUI();
                }
            });

            prevKalpaBtn.style.opacity = '1';
            nextKalpaBtn.style.opacity = '1';
        }

        // Manvantara Switcher Logic
        const manvantaras = [
            { index: 1, title: 'Svayambhuva' },
            { index: 2, title: 'Svarochisha' },
            { index: 3, title: 'Uttama' },
            { index: 4, title: 'Tamasa' },
            { index: 5, title: 'Raivata' },
            { index: 6, title: 'Chakshusha' },
            { index: 7, title: 'Vaivasvata (Current)' },
            { index: 8, title: 'Savarni' },
            { index: 9, title: 'Daksha-savarni' },
            { index: 10, title: 'Brahma-savarni' },
            { index: 11, title: 'Dharma-savarni' },
            { index: 12, title: 'Rudra-savarni' },
            { index: 13, title: 'Raucya/Deva-savarni' },
            { index: 14, title: 'Indra-savarni' }
        ];

        let currentManvIndex = 6; // Default to 7th

        const prevManvBtn = document.getElementById('prev-manvantara-btn');
        const nextManvBtn = document.getElementById('next-manvantara-btn');
        const manvDisplay = document.getElementById('current-manvantara-display');

        const updateManvUI = () => {
            const current = manvantaras[currentManvIndex];
            window.MapState.activeManvantara = current.index;

            if (manvDisplay) {
                manvDisplay.innerHTML = `
                    <div style="font-size: 0.8rem; color: #999;">${current.index}${current.index === 1 ? 'st' : current.index === 2 ? 'nd' : current.index === 3 ? 'rd' : 'th'} Manvantara</div>
                    <div style="font-size: 1rem; color: #00BFFF;">${current.title}</div>
                `;
            }

            if (prevManvBtn) prevManvBtn.style.opacity = currentManvIndex === 0 ? '0.3' : '1';
            if (nextManvBtn) nextManvBtn.style.opacity = currentManvIndex === manvantaras.length - 1 ? '0.3' : '1';

            window.dispatchEvent(new Event('ClusterToggled'));
        };

        if (prevManvBtn && nextManvBtn) {
            prevManvBtn.addEventListener('click', () => {
                if (currentManvIndex > 0) {
                    currentManvIndex--;
                    updateManvUI();
                }
            });

            nextManvBtn.addEventListener('click', () => {
                if (currentManvIndex < manvantaras.length - 1) {
                    currentManvIndex++;
                    updateManvUI();
                }
            });

            prevManvBtn.style.opacity = '1';
            nextManvBtn.style.opacity = '1';
        }

        if (filterTransitionWires) {
            // Set initial state matching MapState
            filterTransitionWires.checked = window.MapState && window.MapState.showTransitionWires;

            filterTransitionWires.addEventListener('change', (e) => {
                if (window.MapState) {
                    window.MapState.showTransitionWires = e.target.checked;
                    window.MapState.requestRedraw();
                }
            });
        }

        const layoutRadios = document.querySelectorAll('input[name="layout-mode"]');
        layoutRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                if (window.MapState) {
                    window.MapState.layoutMode = e.target.value;
                    // Re-run the entire layout engine
                    window.dispatchEvent(new Event('ClusterToggled'));
                }
            });
        });


        // Route UI Logic
        const routeToggleBtn = document.getElementById('route-toggle-btn');
        const routeBox = document.getElementById('route-search-box');
        const findRouteBtn = document.getElementById('find-route-btn');
        const clearRouteBtn = document.getElementById('clear-route-btn');
        const startInput = document.getElementById('route-start-input');
        const endInput = document.getElementById('route-end-input');
        const errorMsg = document.getElementById('route-error-msg');

        if (routeToggleBtn) {
            routeToggleBtn.addEventListener('click', () => {
                routeBox.classList.toggle('active');
            });
        }

        if (clearRouteBtn) {
            clearRouteBtn.addEventListener('click', () => {
                startInput.value = '';
                endInput.value = '';
                errorMsg.style.display = 'none';
                if (window.MapRenderer) window.MapRenderer.drawRoute(null);
            });
        }

        if (findRouteBtn) {
            findRouteBtn.addEventListener('click', () => {
                const start = startInput.value.trim().toLowerCase();
                const end = endInput.value.trim().toLowerCase();
                errorMsg.style.display = 'none';

                if (start && end && window.PathFinder) {
                    const dataList = window.HistoricDB ? window.HistoricDB.getAll() : window.historicData;
                    const pf = new window.PathFinder(dataList);
                    const path = pf.findShortestPath(start, end);

                    if (path) {
                        if (window.MapRenderer) window.MapRenderer.drawRoute(path);
                        // Optional: close panel if open
                        document.getElementById('focus-panel').classList.add('hidden');
                    } else {
                        errorMsg.style.display = 'block';
                    }
                }
            });
        }

        // Panel Start Route from Here
        const panelStartBtn = document.getElementById('panel-start-route-btn');
        if (panelStartBtn) {
            panelStartBtn.addEventListener('click', () => {
                const state = window.MapState;
                if (state.focusedNodeId) {
                    startInput.value = state.focusedNodeId;
                    routeBox.classList.add('active');
                    endInput.focus();
                }
            });
        }

        // Search Toggle
        const searchToggleBtn = document.getElementById('search-toggle-btn');
        const searchInput = document.getElementById('map-search-input');
        if (searchToggleBtn && searchInput) {
            searchToggleBtn.addEventListener('click', () => {
                searchInput.classList.toggle('collapsed');
                if (!searchInput.classList.contains('collapsed')) {
                    searchInput.focus();
                } else {
                    const res = document.getElementById('map-search-results');
                    if (res) res.style.display = 'none';
                }
            });
        }

        // Search Logic
        document.getElementById('map-search-input')?.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const resultsContainer = document.getElementById('map-search-results');

            if (query.length < 2) {
                resultsContainer.style.display = 'none';
                return;
            }

            const dataList = window.HistoricDB ? window.HistoricDB.getAll() : window.historicData;
            const matches = dataList.filter(d =>
                (d.name && d.name.toLowerCase().includes(query)) ||
                (d.id && d.id.toLowerCase().includes(query)) ||
                (d.nameEn && d.nameEn.toLowerCase().includes(query)) ||
                (d.subtitle && d.subtitle.toLowerCase().includes(query))
            ).slice(0, 10);

            if (matches.length > 0) {
                resultsContainer.innerHTML = matches.map(m => `
                    <div class="search-result-item" style="padding: 10px; border-bottom: 1px solid #eee; cursor: pointer; text-align: left;" data-id="${m.id}">
                        <div style="font-weight: 600; color: var(--text-dark);">${m.name} ${m.nameEn ? `(${m.nameEn})` : ''}</div>
                        <div style="font-size: 0.8rem; color: #666;">${m.subtitle || ''}</div>
                    </div>
                `).join('');
                resultsContainer.style.display = 'block';

                document.querySelectorAll('.search-result-item').forEach(item => {
                    item.addEventListener('click', (ev) => {
                        const id = ev.currentTarget.dataset.id;
                        document.getElementById('map-search-input').value = ev.currentTarget.querySelector('div').innerText;
                        resultsContainer.style.display = 'none';

                        document.querySelectorAll('.map-node').forEach(n => n.style.opacity = '1');
                        document.querySelectorAll('.connection-line').forEach(l => l.style.opacity = '1');

                        if (window.MapControls) window.MapControls.focusOnNode(id);
                        const nodeData = dataList.find(d => d.id === id);
                        if (nodeData) this.openPanel(nodeData);
                    });
                });
            } else {
                resultsContainer.innerHTML = '<div style="padding: 10px; color: #666; text-align: left;">No results found</div>';
                resultsContainer.style.display = 'block';
            }
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                const resultsContainer = document.getElementById('map-search-results');
                if (resultsContainer) resultsContainer.style.display = 'none';
            }
            if (!e.target.closest('.filter-dropdown') && !e.target.closest('#map-view-btn')) {
                const filterDropdown = document.getElementById('map-filter-dropdown');
                if (filterDropdown) filterDropdown.style.display = 'none';
            }
        });

        // Legend Interaction
        const legendDots = document.querySelectorAll('.legend-dot');
        const legendPopup = document.getElementById('legend-popup');
        const legendText = document.getElementById('legend-text');

        if (legendDots && legendPopup) {
            legendDots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    legendText.textContent = dot.dataset.desc;
                    legendPopup.style.display = 'block';

                    setTimeout(() => {
                        legendPopup.style.display = 'none';
                    }, 3000);
                });
            });

            document.addEventListener('click', () => {
                legendPopup.style.display = 'none';
            });
        }
    },

    openPanel(data) {
        const panel = document.getElementById('focus-panel');
        document.getElementById('panel-name').textContent = data.name;
        document.getElementById('panel-subtitle').textContent = data.subtitle || '';

        const dotsContainer = document.getElementById('panel-dots');
        dotsContainer.innerHTML = '';
        const nodeColor = data.inheritedColor || '#FF6B35';
        dotsContainer.innerHTML += `<div class="dot" style="background-color: ${nodeColor}"></div>`;

        let parichayHtml = data.parichay ? `<p>${data.parichay}</p>` : '<p>विस्तृत परिचय उपलब्ध नहीं है।</p>';

        let vanshText = 'अन्य';
        if(nodeColor === '#FF9900') vanshText = 'सूर्यवंश (Suryavansh)';
        else if(nodeColor === '#4169E1') vanshText = 'चंद्रवंश (Chandravansh)';

        let yugText = 'अज्ञात';
        if(data.yug === 'satya') yugText = 'सत्य युग';
        else if(data.yug === 'treta') yugText = 'त्रेता युग';
        else if(data.yug === 'dwapar') yugText = 'द्वापर युग';

        document.getElementById('panel-content-area').innerHTML = `
            <div style="margin-bottom: 15px;">
                <span style="font-size:0.8rem; background:#333; padding:2px 8px; border-radius:10px; margin-right:5px;">${vanshText}</span>
                <span style="font-size:0.8rem; background:#333; padding:2px 8px; border-radius:10px;">${yugText}</span>
            </div>
            ${parichayHtml}

            <div style="margin-top: 20px; text-align: center;">
                <a href="itihas-book.html?entity=${data.id}" style="display:inline-block; background:#FF6B35; color:#fff; text-decoration:none; padding:10px 20px; border-radius:25px; font-weight:600; box-shadow:0 4px 10px rgba(255,107,53,0.3); transition:all 0.3s;">
                    📖 Read Full Info
                </a>
            </div>
        `;

        panel.classList.remove('hidden');
    }
};
