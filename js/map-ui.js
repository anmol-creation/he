window.MapUI = {
    setupUI() {
        // Expand/Collapse All Clusters
        const expandCollapseBtn = document.getElementById('expand-collapse-all-btn');
        if (expandCollapseBtn) {
            expandCollapseBtn.addEventListener('click', () => {
                if (!window.rawHistoricData) return;

                const allClusters = new Set();
                window.rawHistoricData.forEach(d => {
                    if (d.clusterName) allClusters.add(d.clusterName);
                });

                // If any cluster is NOT expanded, we expand all. Otherwise, collapse all.
                let shouldExpandAll = false;
                for (let c of allClusters) {
                    if (!window.MapState.expandedClusters.has(c)) {
                        shouldExpandAll = true;
                        break;
                    }
                }

                if (shouldExpandAll) {
                    allClusters.forEach(c => window.MapState.expandedClusters.add(c));
                } else {
                    window.MapState.expandedClusters.clear();
                }

                window.dispatchEvent(new Event('ClusterToggled'));
            });
        }

        // Panel Close
        document.getElementById('close-panel').addEventListener('click', () => {
            document.getElementById('focus-panel').classList.add('hidden');
        });

        // Tooltip logic for tags
        document.addEventListener('click', (e) => {
            const tooltip = document.getElementById('tag-tooltip');
            if (e.target.classList.contains('info-tag')) {
                const tagText = e.target.textContent;
                const desc = (window.sanatanGlossary && window.sanatanGlossary[tagText]) ?
                    window.sanatanGlossary[tagText] :
                    "विस्तृत जानकारी उपलब्ध नहीं है।";

                document.getElementById('tooltip-title').textContent = tagText;
                document.getElementById('tooltip-desc').textContent = desc;

                const rect = e.target.getBoundingClientRect();
                tooltip.style.top = `${rect.bottom + 10}px`;
                tooltip.style.left = `${rect.left}px`;
                tooltip.classList.remove('hidden');
                e.stopPropagation(); // prevent immediate closing
            } else if (tooltip && !tooltip.classList.contains('hidden') && !e.target.closest('.tag-tooltip')) {
                tooltip.classList.add('hidden');
            }
        });

        // Panel Tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                const tab = e.target.dataset.tab;
                const contentArea = document.getElementById('panel-content-area');

                if (window.MapUI && window.MapUI.currentPanelData) {
                    window.MapUI.renderTabContent(tab, window.MapUI.currentPanelData, contentArea);
                } else {
                    if(tab === 'parichay') contentArea.innerHTML = '<p>विस्तृत परिचय यहाँ आएगा।</p>';
                    if(tab === 'jeevan') contentArea.innerHTML = '<p>जीवन की मुख्य घटनाएँ और टाइमलाइन।</p>';
                    if(tab === 'kathayein') contentArea.innerHTML = '<p>प्रचलित कथाएँ और प्रसंग।</p>';
                }
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
                    const dataList = window.rawHistoricData || (window.HistoricDB ? window.HistoricDB.getAll() : window.historicData) || [];
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

        // --- Full Screen Search UI (Google Maps Style) ---
        const searchToggleBtn = document.getElementById('search-toggle-btn');
        const searchOverlay = document.getElementById('full-screen-search-overlay');
        const closeSearchBtn = document.getElementById('close-search-btn');
        const searchInput = document.getElementById('map-search-input');
        const clearSearchBtn = document.getElementById('clear-search-btn');
        const recentSearchesContainer = document.getElementById('recent-searches-container');
        const recentSearchesList = document.getElementById('recent-searches-list');
        const searchResultsContainer = document.getElementById('map-search-results');

        let recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');

        function renderRecentSearches() {
            if (recentSearches.length === 0) {
                recentSearchesContainer.style.display = 'none';
                return;
            }
            recentSearchesContainer.style.display = 'block';
            recentSearchesList.innerHTML = recentSearches.map(item => `
                <div class="recent-search-item" data-id="${item.id}">
                    <span>🕒</span>
                    <div>
                        <div style="font-weight:600;">${item.name}</div>
                        <div style="font-size:0.8rem; color:rgba(255,255,255,0.5);">${item.subtitle || ''}</div>
                    </div>
                </div>
            `).join('');

            document.querySelectorAll('.recent-search-item').forEach(el => {
                el.addEventListener('click', (ev) => {
                    const id = ev.currentTarget.dataset.id;
                    handleSearchResultClick(id);
                });
            });
        }

        function saveRecentSearch(node) {
            const searchItem = { id: node.id, name: node.name, subtitle: node.subtitle };
            recentSearches = recentSearches.filter(s => s.id !== node.id);
            recentSearches.unshift(searchItem);
            if (recentSearches.length > 5) recentSearches.pop();
            localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
        }

        if (searchToggleBtn && searchOverlay) {
            searchToggleBtn.addEventListener('click', () => {
                searchOverlay.classList.remove('hidden');
                searchInput.focus();
                renderRecentSearches();
                if (searchInput.value.trim() === '') {
                    searchResultsContainer.style.display = 'none';
                }
            });
        }

        if (closeSearchBtn) {
            closeSearchBtn.addEventListener('click', () => {
                searchOverlay.classList.add('hidden');
            });
        }

        if (clearSearchBtn) {
            clearSearchBtn.addEventListener('click', () => {
                searchInput.value = '';
                clearSearchBtn.classList.add('hidden');
                searchResultsContainer.style.display = 'none';
                renderRecentSearches();
                searchInput.focus();
            });
        }

        function handleSearchResultClick(id) {
            const dataList = window.rawHistoricData || (window.HistoricDB ? window.HistoricDB.getAll() : window.historicData) || [];
            const rawNode = dataList.find(d => d.id === id);

            if (rawNode) {
                saveRecentSearch(rawNode);
                searchInput.value = rawNode.name;
                searchOverlay.classList.add('hidden');

                if (window.MapState) {
                    let didExpand = false;

                            // To ensure we ONLY open the specific lineage path for the searched node
                            // and collapse any OTHER clusters that were previously opened (if the user wants a clean view),
                            // we can optionally clear expandedClusters first, but usually users want to keep their existing map state.
                            // However, based on the user's feedback: "lekin uske ass pas wale ya wo cluster open nhi hone cahiye jo uski lineage m ho ya na ho leki agar wo direct unke ander se na nikle"
                            // This implies the user WANTS to close all other clusters that are NOT in the direct lineage of the searched node!

                            // Let's find all clusters in the direct lineage of the searched node.
                            const requiredClusters = new Set();

                            if (rawNode.clusterName) {
                                requiredClusters.add(rawNode.clusterName);
                            }

                            let currentNode = rawNode;
                            let maxDepth = 100;
                            while (currentNode && currentNode.parent && maxDepth > 0) {
                                maxDepth--;
                                let parentNode = null;
                                for (let i = 0; i < dataList.length; i++) {
                                    if (dataList[i].id === currentNode.parent) {
                                        parentNode = dataList[i];
                                        break;
                                    }
                                }
                                if (!parentNode) break;

                                if (parentNode.clusterName) {
                                    requiredClusters.add(parentNode.clusterName);
                                }
                                currentNode = parentNode;
                            }

                            // Collapse all currently expanded clusters that are NOT in the required lineage
                            for (const clusterName of window.MapState.expandedClusters) {
                                if (!requiredClusters.has(clusterName)) {
                                    window.MapState.expandedClusters.delete(clusterName);
                                    didExpand = true; // State changed, need redraw
                                }
                            }

                            // Expand the required clusters
                            for (const clusterName of requiredClusters) {
                                if (!window.MapState.expandedClusters.has(clusterName)) {
                                    window.MapState.expandedClusters.add(clusterName);
                                    didExpand = true; // State changed, need redraw
                                }
                            }

                            if (didExpand) {
                                window.dispatchEvent(new Event('ClusterToggled'));
                            }
                        }

                        // Need to give DOM/layout time to update if cluster was toggled,
                        // but focusOnNode can be called immediately as it looks for the new layout.
                        // Actually, focusOnNode relies on window.HistoricDB.getAll() being updated.
                        setTimeout(() => {
                            if (window.MapControls) window.MapControls.focusOnNode(id);

                            // Re-fetch from updated HistoricDB to get latest properties if needed for panel
                            const updatedDataList = window.HistoricDB ? window.HistoricDB.getAll() : window.historicData;
                            const nodeData = updatedDataList.find(d => d.id === id) || rawNode;
                            if (nodeData) this.openPanel(nodeData);
                        }, 50); // slight delay to ensure event is processed
            }
        }

        searchInput?.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();

            if (query.length > 0) {
                clearSearchBtn.classList.remove('hidden');
            } else {
                clearSearchBtn.classList.add('hidden');
            }

            if (query.length < 2) {
                searchResultsContainer.style.display = 'none';
                renderRecentSearches();
                return;
            }

            recentSearchesContainer.style.display = 'none';

            const dataList = window.rawHistoricData || (window.HistoricDB ? window.HistoricDB.getAll() : window.historicData) || [];
            const matches = dataList.filter(d =>
                (d.name && d.name.toLowerCase().includes(query)) ||
                (d.id && d.id.toLowerCase().includes(query)) ||
                (d.nameEn && d.nameEn.toLowerCase().includes(query)) ||
                (d.subtitle && d.subtitle.toLowerCase().includes(query))
            ).slice(0, 10);

            if (matches.length > 0) {
                searchResultsContainer.innerHTML = matches.map(m => `
                    <div class="search-result-item recent-search-item" data-id="${m.id}">
                        <span>🔍</span>
                        <div>
                            <div style="font-weight: 600;">${m.name} ${m.nameEn ? `(${m.nameEn})` : ''}</div>
                            <div style="font-size: 0.8rem; color: rgba(255,255,255,0.5);">${m.subtitle || ''}</div>
                        </div>
                    </div>
                `).join('');
                searchResultsContainer.style.display = 'flex';

                document.querySelectorAll('#map-search-results .search-result-item').forEach(item => {
                    item.addEventListener('click', (ev) => {
                        const id = ev.currentTarget.dataset.id;
                        handleSearchResultClick(id);
                    });
                });
            } else {
                searchResultsContainer.innerHTML = '<div style="padding: 10px; color: rgba(255,255,255,0.5);">No results found</div>';
                searchResultsContainer.style.display = 'block';
            }
        });


        document.addEventListener('click', (e) => {
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
        this.currentPanelData = data;
        const panel = document.getElementById('focus-panel');
        document.getElementById('panel-name').textContent = data.name;
        document.getElementById('panel-subtitle').textContent = data.subtitle || '';

        const dotsContainer = document.getElementById('panel-dots');
        dotsContainer.innerHTML = '';
        const nodeColor = data.inheritedColor || '#FF6B35';
        dotsContainer.innerHTML += `<div class="dot" style="background-color: ${nodeColor}"></div>`;

        // Render Tags
        const tagsContainer = document.getElementById('panel-tags');
        tagsContainer.innerHTML = '';

        let yugText = 'अज्ञात काल';
        if(data.yug === 'satya') yugText = 'सत्य युग';
        else if(data.yug === 'treta') yugText = 'त्रेता युग';
        else if(data.yug === 'dwapar') yugText = 'द्वापर युग';
        else if(data.yug === 'sanatan') yugText = 'सनातन';

        let vanshText = 'अन्य';
        if(nodeColor === '#FF9900') vanshText = 'सूर्यवंश';
        else if(nodeColor === '#4169E1') vanshText = 'चंद्रवंश';
        else if(data.clusterName) vanshText = data.clusterName;

        let tagsHTML = `<span class="info-tag clickable">${yugText}</span><span class="info-tag clickable">${vanshText}</span>`;
        if (data.tags && Array.isArray(data.tags)) {
            // Avoid duplicate tags
            data.tags.forEach(t => {
                if(t !== yugText && t !== vanshText) {
                    tagsHTML += `<span class="info-tag clickable">${t}</span>`;
                }
            });
        }
        tagsContainer.innerHTML = tagsHTML;

        // Reset Tabs to Parichay
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('.tab-btn[data-tab="parichay"]').classList.add('active');

        const contentArea = document.getElementById('panel-content-area');
        this.renderTabContent('parichay', data, contentArea);

        panel.classList.remove('hidden');
    },

    renderTabContent(tab, data, contentArea) {
        if (tab === 'parichay') {
            let detailsHtml = '<div class="info-details-grid">';

            // Aliases
            if (data.aliases && data.aliases.length > 0) {
                detailsHtml += `<div class="detail-row"><span class="detail-label">अन्य नाम:</span> <span class="detail-value">${data.aliases.join(', ')}</span></div>`;
            }

            // Family Links (Clickable if they exist in DB)
            const getLink = (idStr) => {
                const node = window.HistoricDB ? window.HistoricDB.getNode(idStr) : null;
                if(node) return `<a href="#" class="family-link" data-id="${idStr}">${node.name}</a>`;
                return `<span class="detail-value">${idStr}</span>`;
            };

            if (data.parent) {
                detailsHtml += `<div class="detail-row"><span class="detail-label">पिता:</span> ${getLink(data.parent)}</div>`;
            }
            if (data.mother) {
                // If mother is a string like "मानस पुत्र", it won't resolve to a node, which is fine
                detailsHtml += `<div class="detail-row"><span class="detail-label">माता:</span> ${getLink(data.mother)}</div>`;
            }
            if (data.spouse) {
                const spouses = Array.isArray(data.spouse) ? data.spouse : [data.spouse];
                const spouseLinks = spouses.map(s => getLink(s)).join(', ');
                detailsHtml += `<div class="detail-row"><span class="detail-label">जीवनसाथी:</span> ${spouseLinks}</div>`;
            }

            // Attributes
            if (data.weapons && data.weapons.length > 0) {
                detailsHtml += `<div class="detail-row"><span class="detail-label">अस्त्र/शस्त्र:</span> <span class="detail-value">${data.weapons.join(', ')}</span></div>`;
            }
            if (data.mount) {
                detailsHtml += `<div class="detail-row"><span class="detail-label">वाहन:</span> <span class="detail-value">${data.mount}</span></div>`;
            }
            if (data.abode) {
                detailsHtml += `<div class="detail-row"><span class="detail-label">निवास:</span> <span class="detail-value">${data.abode}</span></div>`;
            }

            detailsHtml += '</div>'; // End grid

            let parichayHtml = data.parichay ? `<p class="parichay-text">${data.parichay}</p>` : '<p class="parichay-text">विस्तृत परिचय उपलब्ध नहीं है।</p>';

            let sourceHtml = '';
            if (data.source_texts && data.source_texts.length > 0) {
                sourceHtml = `<div class="source-texts"><span class="detail-label">ग्रंथ संदर्भ:</span> ${data.source_texts.join(', ')}</div>`;
            }

            contentArea.innerHTML = `
                ${detailsHtml}
                ${parichayHtml}
                ${sourceHtml}
                <div style="margin-top: 20px; text-align: center;">
                    <a href="itihas-book.html?entity=${data.id}" class="read-full-btn">
                        📖 Read Full Info
                    </a>
                </div>
            `;

            // Add click listeners to family links
            contentArea.querySelectorAll('.family-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = e.target.dataset.id;
                    if(window.MapControls && targetId) {
                        window.MapControls.focusOnNode(targetId);
                        const node = window.HistoricDB.getNode(targetId);
                        if(node) this.openPanel(node);
                    }
                });
            });

        } else if (tab === 'jeevan') {
            let eventsHtml = '';
            if (data.events && data.events.length > 0) {
                eventsHtml = '<ul class="timeline-list">';
                data.events.forEach(ev => {
                    eventsHtml += `<li>${ev}</li>`;
                });
                eventsHtml += '</ul>';
            } else {
                eventsHtml = '<p>जीवन की घटनाएँ उपलब्ध नहीं हैं।</p>';
            }
            contentArea.innerHTML = eventsHtml;
        } else if (tab === 'kathayein') {
            contentArea.innerHTML = '<p>प्रचलित कथाएँ जल्द ही जोड़ी जाएँगी।</p>';
        }
    }
};

// QA Mark Toggle Function attached to window so inline onclick works
window.toggleQAMark = function(id) {
    let markedNodes = JSON.parse(localStorage.getItem('qaMarkedNodes') || '[]');
    if (markedNodes.includes(id)) {
        markedNodes = markedNodes.filter(n => n !== id);
    } else {
        markedNodes.push(id);
    }
    localStorage.setItem('qaMarkedNodes', JSON.stringify(markedNodes));

    // Refresh the mark button visually
    const btn = document.querySelector('.qa-mark-btn');
    if (btn) {
        if (markedNodes.includes(id)) {
            btn.classList.add('marked');
            btn.innerText = 'Unmark for Deletion';
        } else {
            btn.classList.remove('marked');
            btn.innerText = 'Mark Extra Node for Deletion';
        }
    }
};
