// historic-map.js
// This file now acts as the UI Orchestrator, tying Data and Engine together.
// Note: historicData is now provided globally by js/data/historic-data.js

// Canvas & Zoom State
const container = document.getElementById('map-container');
const canvas = document.getElementById('map-canvas');
const nodesContainer = document.getElementById('nodes-container');
const svg = document.getElementById('connection-lines');

// River of Time Hierarchy Definitions
// Using negative Y for entities existing before current Kalpa (e.g. Trimurti).
// Expanding Y bounds to give space for multiple Kalpas/Manvantaras.
const RIVER_OF_TIME_HIERARCHY = {
    'kalpa': [
        { id: 'pre-kalpa', name: 'पूर्व कल्प / अनादि', yStart: -10000, yEnd: -1, entryNode: 'vishnu' },
        { id: 'shveta-varaha', name: 'श्वेत वाराह कल्प', yStart: 0, yEnd: 100000, entryNode: 'brahma' }
    ],
    'manvantara': [
        { id: 'swayambhuva', name: '१. स्वायंभुव मन्वन्तर', yStart: 0, yEnd: 5000, entryNode: 'brahma' },
        { id: 'chakshusha', name: '६. चाक्षुष मन्वन्तर', yStart: 5000, yEnd: 10000, entryNode: 'brahma' },
        { id: 'vaivasvata', name: '७. वैवस्वत मन्वन्तर (वर्तमान)', yStart: 10000, yEnd: 50000, entryNode: 'brahma' }
    ],
    'mahayuga': [
        { id: '24th', name: '24वाँ महायुग', yStart: 10000, yEnd: 15000, entryNode: 'ram' },
        { id: '28th', name: '28वाँ महायुग (वर्तमान)', yStart: 20000, yEnd: 50000, entryNode: 'ram' }
    ],
    'yuga': [
        { id: 'satya', name: 'सत्य युग (28वाँ)', yStart: 20000, yEnd: 25000, entryNode: 'brahma' },
        { id: 'treta', name: 'त्रेता युग (28वाँ)', yStart: 25000, yEnd: 30000, entryNode: 'ram' },
        { id: 'dwapar', name: 'द्वापर युग (28वाँ)', yStart: 30000, yEnd: 35000, entryNode: 'krishna' },
        { id: 'kali', name: 'कलि युग (28वाँ)', yStart: 35000, yEnd: 50000, entryNode: 'parikshit' }
    ]
};

let scale = 1;
let translateX = -4500; // Center around X:5000 (Brahma)
let translateY = 1500;  // Center around Top Y:-1000 (Trimurti)
let isDragging = false;
let startX, startY;

const MACRO_ZOOM_THRESHOLD = 0.5;
let isMacroMode = false;
let focusedNodeId = 'brahman';

let isLineageMode = false;
let lineagePath = new Set();

// Initialize
function initMap() {
    renderNodes();
    drawConnections();
    setupEventListeners();
    setupSearchLogic();

    // Focus on the top node initially
    focusOnNode('brahman');
}

function setupSearchLogic() {
    const searchInput = document.getElementById('map-search-input');
    const suggestionsBox = document.getElementById('map-search-suggestions');
    if (!searchInput || !suggestionsBox) return;

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const firstSuggestion = suggestionsBox.querySelector('div');
            if (firstSuggestion) {
                firstSuggestion.click();
            }
        }
    });

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        suggestionsBox.innerHTML = '';

        if (query.length < 1) {
            suggestionsBox.style.display = 'none';
            return;
        }

        const dataList = window.HistoricDB ? window.HistoricDB.getAll() : historicData;
        const matches = dataList.filter(d => {
            const searchFields = [
                d.name,
                d.subtitle,
                d.id,
                d.color,
                d.mother,
                d.spouseOf
            ];

            // Check if any alias or alternative names exist
            if (d.aliases) searchFields.push(...d.aliases);

            return searchFields.some(field =>
                field && String(field).toLowerCase().includes(query)
            );
        }).slice(0, 8); // Top 8 results

        if (matches.length > 0) {
            matches.forEach(match => {
                const div = document.createElement('div');
                div.style.padding = '10px 15px';
                div.style.cursor = 'pointer';
                div.style.borderBottom = '1px solid #f0f0f0';
                div.style.fontFamily = 'Poppins';
                div.style.fontSize = '14px';
                div.innerHTML = `<strong>${match.name}</strong> <span style="color:#666; font-size:12px;">- ${match.subtitle || ''}</span>`;

                div.addEventListener('mouseenter', () => div.style.background = '#f9f9f9');
                div.addEventListener('mouseleave', () => div.style.background = 'white');

                div.addEventListener('click', () => {
                    searchInput.value = match.name;
                    suggestionsBox.style.display = 'none';
                    if (isLineageMode) {
                        isLineageMode = false;
                        lineagePath.clear();
                        const exitBtn = document.getElementById('exit-lineage-btn');
                        if (exitBtn) exitBtn.remove();
                        document.querySelectorAll('.map-wire').forEach(w => {
                            w.style.strokeWidth = '2';
                            w.style.stroke = 'url(#lineGradient)';
                        });
                    }
                    focusOnNode(match.id);
                    openPanel(match);
                });

                suggestionsBox.appendChild(div);
            });
            suggestionsBox.style.display = 'block';
        } else {
            suggestionsBox.style.display = 'none';
        }
    });

    // Close suggestions on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('#map-search-container')) {
            suggestionsBox.style.display = 'none';
        }
    });
}

function renderNodes() {
    nodesContainer.innerHTML = '';
    const dataList = window.HistoricDB ? window.HistoricDB.getAll() : historicData; // Fallback just in case

    dataList.forEach(data => {
        const node = document.createElement('div');
        node.className = 'map-node';
        if (data.spouseOf) node.classList.add('spouse-node');

        node.id = `node-${data.id}`;

        let finalX = data.x;
        let finalY = data.y;

        // If it's a spouse, distribute them symmetrically BELOW the husband
        if (data.spouseOf) {
            const husband = dataList.find(d => d.id === data.spouseOf);
            if (husband) {
                // Find all wives of this husband
                const allWives = dataList.filter(d => d.spouseOf === husband.id);
                const wifeIndex = allWives.findIndex(w => w.id === data.id);

                // Distribute horizontally based on how many wives there are
                const spacing = 180; // horizontal space between wife cards
                const totalWidth = (allWives.length - 1) * spacing;
                const startX = husband.x - (totalWidth / 2);

                finalX = startX + (wifeIndex * spacing);
                finalY = husband.y + 160; // Place below husband

                // Update object so wires know where they are
                data.x = finalX;
                data.y = finalY;
            }
        }

        node.style.left = `${finalX}px`;
        node.style.top = `${finalY}px`;
        node.style.borderTopColor = data.color;

        // Heritage Dots
        let dotsHtml = '';
        if (data.color) dotsHtml += `<div class="dot" style="background-color: ${data.color}"></div>`;
        if (data.motherColor) dotsHtml += `<div class="dot" style="background-color: ${data.motherColor}"></div>`;

        node.innerHTML = `
            <div class="heritage-dots">${dotsHtml}</div>
            <div class="node-title">${data.name}</div>
            <div class="node-details">${data.subtitle}</div>
        `;

        let touchTimer = null;
        node.addEventListener('click', (e) => {
            e.stopPropagation();
            if (isLineageMode) return; // Disable profile redirect while in lineage mode

            // Allow double-click to show lineage
            if (e.detail === 2) {
                if (touchTimer) clearTimeout(touchTimer);
                touchTimer = null;
                showLineageToRoot(data.id);
                return;
            }

            // Simple check for touch double tap
            if (touchTimer) {
                clearTimeout(touchTimer);
                touchTimer = null;
                showLineageToRoot(data.id);
                return;
            }

            touchTimer = setTimeout(() => {
                touchTimer = null;
                // Focus then open panel (overriding original redirect to profile as user wanted info card)
                focusOnNode(data.id);
                openPanel(data);
            }, 250); // 250ms delay for double tap check
        });

        nodesContainer.appendChild(node);
    });
}

function drawConnections() {
    svg.innerHTML = '';
    const dataList = window.HistoricDB ? window.HistoricDB.getAll() : historicData;

    // Universal Colors
    const COLOR_MARRIAGE = '#FF1493'; // Deep Pink for Husband-Wife
    const COLOR_SIBLING = '#4169E1';  // Royal Blue for Sisters/Siblings group line

    // Track drawn sibling groups so we don't draw overlapping lines
    const drawnWifeGroups = new Set();

    dataList.forEach(data => {
        // 1. Draw Marriage Connection (Husband to Wife)
        if (data.spouseOf) {
            const husband = dataList.find(d => d.id === data.spouseOf);
            if (husband) {
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                // Draw line from husband's bottom center to wife's top center
                path.setAttribute('d', `M ${husband.x} ${husband.y + 40} C ${husband.x} ${husband.y + 100}, ${data.x} ${data.y - 100}, ${data.x} ${data.y - 40}`);
                path.setAttribute('class', 'map-wire marriage-wire');
                path.setAttribute('stroke', COLOR_MARRIAGE);
                path.setAttribute('stroke-width', '3px');
                svg.appendChild(path);
            }

            // 2. Draw Sibling Line for Wives (e.g., Daksha's daughters)
            if (data.parent) {
                const husbandId = data.spouseOf;
                const parentId = data.parent;
                const groupKey = `${husbandId}-${parentId}`;

                // Draw the horizontal bar uniting the sisters only once per group
                if (!drawnWifeGroups.has(groupKey)) {
                    drawnWifeGroups.add(groupKey);

                    // Find all wives of this husband who share the same father
                    const sisterWives = dataList.filter(w => w.spouseOf === husbandId && w.parent === parentId);

                    if (sisterWives.length > 1) {
                        // Find min and max X
                        const minX = Math.min(...sisterWives.map(w => w.x));
                        const maxX = Math.max(...sisterWives.map(w => w.x));
                        const sharedY = data.y - 80; // Above the wives

                        // Horizontal line connecting sisters
                        const hPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                        hPath.setAttribute('d', `M ${minX} ${sharedY} L ${maxX} ${sharedY}`);
                        hPath.setAttribute('class', 'map-wire sibling-wire');
                        hPath.setAttribute('stroke', COLOR_SIBLING);
                        hPath.setAttribute('stroke-width', '2px');
                        svg.appendChild(hPath);

                        // Vertical drops to each sister
                        sisterWives.forEach(sw => {
                            const vPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                            vPath.setAttribute('d', `M ${sw.x} ${sharedY} L ${sw.x} ${sw.y - 40}`);
                            vPath.setAttribute('class', 'map-wire sibling-wire');
                            vPath.setAttribute('stroke', COLOR_SIBLING);
                            vPath.setAttribute('stroke-width', '2px');
                            svg.appendChild(vPath);
                        });

                        // Draw line back to father from the center of the horizontal bar
                        const father = dataList.find(d => d.id === parentId);
                        if (father) {
                            const centerX = minX + (maxX - minX) / 2;
                            const fPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                            // Long sweeping dashed line to father
                            const controlY = father.y + (sharedY - father.y) / 2;
                            fPath.setAttribute('d', `M ${father.x} ${father.y + 40} C ${father.x} ${controlY}, ${centerX} ${controlY}, ${centerX} ${sharedY}`);
                            fPath.setAttribute('class', 'map-wire');
                            fPath.setAttribute('stroke', COLOR_SIBLING);
                            fPath.setAttribute('stroke-dasharray', '5,5');
                            svg.appendChild(fPath);
                        }
                    } else {
                        // Single wife connecting back to father
                        const father = dataList.find(d => d.id === parentId);
                        if (father) {
                            const fPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                            const controlY = father.y + (data.y - father.y) / 2;
                            fPath.setAttribute('d', `M ${father.x} ${father.y + 40} C ${father.x} ${controlY}, ${data.x} ${controlY}, ${data.x} ${data.y - 40}`);
                            fPath.setAttribute('class', 'map-wire');
                            fPath.setAttribute('stroke', COLOR_SIBLING);
                            fPath.setAttribute('stroke-dasharray', '5,5');
                            svg.appendChild(fPath);
                        }
                    }
                }
            }
        } else if (data.parent) {
            // 3. Normal Parent to Child Line
            const parent = dataList.find(d => d.id === data.parent);
            if (parent) {
                // Determine if we should route from father or mother
                // By default route from father
                let sourceX = parent.x;
                let sourceY = parent.y;
                let sourceId = parent.id;

                if (data.mother) {
                    const mother = dataList.find(d => d.id === data.mother);
                    if (mother) {
                        sourceX = mother.x;
                        sourceY = mother.y;
                        sourceId = mother.id;
                    }
                }

                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                const startX = sourceX;
                const startY = sourceY + 40; // Bottom of parent card
                const endX = data.x;
                const endY = data.y - 40; // Top of child card

                const controlY = startY + (endY - startY) / 2;
                path.setAttribute('d', `M ${startX} ${startY} C ${startX} ${controlY}, ${endX} ${controlY}, ${endX} ${endY}`);
                path.setAttribute('class', 'map-wire');
                path.setAttribute('stroke', data.color || '#999');
                path.setAttribute('data-from', sourceId);
                path.setAttribute('data-to', data.id);

                svg.appendChild(path);
            }
        }
    });
}

function updateTransform() {
    canvas.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;

    // Toggle Macro vs Micro mode based on scale
    const nodes = document.querySelectorAll('.map-node');
    if (scale < MACRO_ZOOM_THRESHOLD) {
        if (!isMacroMode) {
            isMacroMode = true;
            nodes.forEach(n => n.classList.add('macro-mode'));
            document.getElementById('focus-panel').classList.add('hidden'); // Hide panel in macro mode
            highlightRelatives(null); // Remove dimming
        }
    } else {
        if (isMacroMode) {
            isMacroMode = false;
            nodes.forEach(n => n.classList.remove('macro-mode'));
            // Do NOT snap camera back to focusedNodeId. Just restore highlighting.
            if (focusedNodeId) {
                highlightRelatives(focusedNodeId);
            }
        }
    }

    updateRiverOfTime();
}

function updateRiverOfTime() {
    const aside = document.getElementById('river-of-time');

    // Determine the level of detail based on scale
    let hierarchyLevel = 'yuga';
    if (scale < 0.3) {
        hierarchyLevel = 'kalpa';
    } else if (scale < 0.6) {
        hierarchyLevel = 'manvantara';
    } else if (scale < 0.9) {
        hierarchyLevel = 'mahayuga';
    }

    // Check if we need to re-render the sidebar
    const currentRenderedLevel = aside.dataset.level;
    if (currentRenderedLevel !== hierarchyLevel) {
        aside.innerHTML = '';
        aside.dataset.level = hierarchyLevel;

        const periods = RIVER_OF_TIME_HIERARCHY[hierarchyLevel];
        periods.forEach((period, index) => {
            const marker = document.createElement('div');
            marker.className = 'time-marker';
            marker.dataset.id = period.id;
            marker.textContent = period.name;

            // Re-bind click event dynamically
            marker.addEventListener('click', () => {
                if (isMacroMode) {
                    scale = 1;
                    isMacroMode = false;
                }
                document.getElementById('focus-panel').classList.add('hidden');
                focusOnNode(period.entryNode);
            });

            aside.appendChild(marker);

            if (index < periods.length - 1) {
                const line = document.createElement('div');
                line.className = 'time-line';
                aside.appendChild(line);
            }
        });
    }

    // Determine the active period based on Y coordinate
    let activeId = null;
    const periods = RIVER_OF_TIME_HIERARCHY[hierarchyLevel];

    if (!isMacroMode && focusedNodeId) {
        const node = window.HistoricDB ? window.HistoricDB.getNode(focusedNodeId) : historicData.find(d => d.id === focusedNodeId);
        if (node) {
            // Find which period this node's Y falls into
            const matchedPeriod = periods.find(p => node.y >= p.yStart && node.y < p.yEnd);
            if (matchedPeriod) activeId = matchedPeriod.id;
        }
    } else {
        const containerRect = container.getBoundingClientRect();
        const screenCenterY = (containerRect.height / 2 - translateY) / scale;

        // Find which period the screen center Y falls into
        const matchedPeriod = periods.find(p => screenCenterY >= p.yStart && screenCenterY < p.yEnd);
        if (matchedPeriod) activeId = matchedPeriod.id;
    }

    // Highlight active
    document.querySelectorAll('.time-marker').forEach(marker => {
        if (marker.dataset.id === activeId) {
            marker.classList.add('active');
        } else {
            marker.classList.remove('active');
        }
    });
}

function highlightRelatives(centerNodeId) {
    if (isLineageMode) return; // Prevent highlighting relatives if lineage mode is active

    if (!centerNodeId || isMacroMode) {
        document.querySelectorAll('.map-node').forEach(n => n.style.opacity = '1');
        document.querySelectorAll('.map-wire').forEach(w => w.style.opacity = '0.6');
        return;
    }

    const dataList = window.HistoricDB ? window.HistoricDB.getAll() : historicData;
    const node = dataList.find(d => d.id === centerNodeId);
    if (!node) return;

    // Find parents, children, siblings, and spouses
    const relatives = new Set([centerNodeId]);
    if (node.parent) relatives.add(node.parent); // Father
    if (node.spouseOf) relatives.add(node.spouseOf); // Husband

    dataList.forEach(d => {
        if (d.parent === centerNodeId) relatives.add(d.id); // Child
        if (node.parent && d.parent === node.parent) relatives.add(d.id); // Sibling
        if (d.spouseOf === centerNodeId) relatives.add(d.id); // Wife
    });

    document.querySelectorAll('.map-node').forEach(n => {
        const id = n.id.replace('node-', '');
        if (relatives.has(id)) {
            n.style.opacity = '1';
            n.style.transform = id === centerNodeId ? 'translate(-50%, -50%) scale(1.1)' : 'translate(-50%, -50%) scale(1)';
            n.style.zIndex = id === centerNodeId ? '10' : '5';
            n.style.boxShadow = id === centerNodeId ? '0 0 20px var(--primary-saffron)' : '';
        } else {
            n.style.opacity = '0.15';
            n.style.transform = 'translate(-50%, -50%) scale(1)';
            n.style.zIndex = '1';
            n.style.boxShadow = '';
        }
    });

    // Handle wires opacity
    document.querySelectorAll('.map-wire').forEach(w => {
        const fromId = w.dataset.from;
        const toId = w.dataset.to;
        if (relatives.has(fromId) && relatives.has(toId)) {
            w.style.opacity = '0.8';
        } else {
            w.style.opacity = '0.1';
        }
    });
}

function navigateRelative(direction) {
    if (!focusedNodeId || isMacroMode) return;

    const dataList = window.HistoricDB ? window.HistoricDB.getAll() : historicData;
    const node = dataList.find(d => d.id === focusedNodeId);
    if (!node) return;

    let targetId = null;

    if (direction === 'up' && node.parent) {
        targetId = node.parent;
    } else if (direction === 'down') {
        const children = dataList.filter(d => d.parent === focusedNodeId);
        if (children.length > 0) targetId = children[0].id; // Default to first child
    } else if (direction === 'left' || direction === 'right') {
        if (node.parent) {
            const siblings = dataList.filter(d => d.parent === node.parent);
            const currentIndex = siblings.findIndex(d => d.id === focusedNodeId);
            if (direction === 'left' && currentIndex > 0) targetId = siblings[currentIndex - 1].id;
            if (direction === 'right' && currentIndex < siblings.length - 1) targetId = siblings[currentIndex + 1].id;
        }
    }

    if (targetId) {
        // Sirf focus change karo, panel hide kar do taaki map clear dikhe
        document.getElementById('focus-panel').classList.add('hidden');
        focusOnNode(targetId);
    }
}

function setupEventListeners() {
    // Mobile Touch & Swipe Handling
    let touchStartX = 0;
    let touchStartY = 0;
    let initialPinchDistance = null;
    let initialScale = 1;

    container.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            if (isMacroMode) {
                isDragging = true;
                startX = touchStartX - translateX;
                startY = touchStartY - translateY;
            }
        } else if (e.touches.length === 2) {
            isDragging = false;
            initialPinchDistance = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            initialScale = scale;
        }
    }, {passive: false});

    container.addEventListener('touchmove', (e) => {
        e.preventDefault(); // Prevent native scrolling

        if (e.touches.length === 1) {
            if (isMacroMode && isDragging) {
                translateX = e.touches[0].clientX - startX;
                translateY = e.touches[0].clientY - startY;
                updateTransform();
            }
        } else if (e.touches.length === 2 && initialPinchDistance) {
            const currentDistance = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            const newScale = Math.min(Math.max(0.1, initialScale * (currentDistance / initialPinchDistance)), 2);
            scale = newScale;
            updateTransform();
        }
    }, {passive: false});

    container.addEventListener('touchend', (e) => {
        if (e.touches.length === 0) {
            isDragging = false;
            initialPinchDistance = null;

            // Detect Swipe if not in macro mode
            if (!isMacroMode && e.changedTouches.length === 1) {
                const touchEndX = e.changedTouches[0].clientX;
                const touchEndY = e.changedTouches[0].clientY;
                const dx = touchEndX - touchStartX;
                const dy = touchEndY - touchStartY;

                if (Math.abs(dx) > Math.abs(dy)) {
                    // Horizontal swipe
                    if (dx > 50) navigateRelative('left');
                    else if (dx < -50) navigateRelative('right');
                } else {
                    // Vertical swipe
                    if (dy > 50) navigateRelative('up');
                    else if (dy < -50) navigateRelative('down');
                }
            }
        }
    });

    // Panning (Drag) - Desktop
    container.addEventListener('mousedown', (e) => {
        if (e.target.closest('.map-node') || e.target.closest('#focus-panel')) return;
        // Removed restriction: Allow dragging in BOTH macro and focus modes
        isDragging = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        updateTransform();
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Keyboard Navigation (Desktop fallback for swipe)
    window.addEventListener('keydown', (e) => {
        if (isMacroMode) return; // Only navigate relatives in focus mode
        switch (e.key) {
            case 'ArrowUp':
                navigateRelative('up');
                e.preventDefault();
                break;
            case 'ArrowDown':
                navigateRelative('down');
                e.preventDefault();
                break;
            case 'ArrowLeft':
                navigateRelative('left');
                e.preventDefault();
                break;
            case 'ArrowRight':
                navigateRelative('right');
                e.preventDefault();
                break;
        }
    });

    // Zooming (Wheel)
    container.addEventListener('wheel', (e) => {
        e.preventDefault();

        // Use exponential zoom for smooth trackpad and mouse wheel zooming
        const zoomFactor = Math.exp(e.deltaY * -0.002);
        const newScale = Math.min(Math.max(0.1, scale * zoomFactor), 2.5);

        // Calculate focal point to zoom towards mouse cursor
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Adjust translate to keep mouse position fixed under cursor
        translateX = mouseX - (mouseX - translateX) * (newScale / scale);
        translateY = mouseY - (mouseY - translateY) * (newScale / scale);

        scale = newScale;
        updateTransform();
    }, { passive: false });

    // Buttons
    document.getElementById('zoom-in-btn').addEventListener('click', () => {
        scale = Math.min(scale + 0.2, 2);
        updateTransform();
    });

    document.getElementById('zoom-out-btn').addEventListener('click', () => {
        scale = Math.max(scale - 0.2, 0.2);
        updateTransform();
    });

    // Initial River of Time render
    updateRiverOfTime();

    // Panel Close
    document.getElementById('close-panel').addEventListener('click', () => {
        document.getElementById('focus-panel').classList.add('hidden');
    });

    // Show Lineage Button
    const lineageBtn = document.getElementById('show-lineage-btn');
    if (lineageBtn) {
        lineageBtn.addEventListener('click', () => {
            if (focusedNodeId) {
                document.getElementById('focus-panel').classList.add('hidden');
                showLineageToRoot(focusedNodeId);
            }
        });
    }

    // Panel Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            // Mock content update
            const tab = e.target.dataset.tab;
            const contentArea = document.getElementById('panel-content-area');
            if(tab === 'parichay') contentArea.innerHTML = '<p>विस्तृत परिचय यहाँ आएगा।</p>';
            if(tab === 'jeevan') contentArea.innerHTML = '<p>जीवन की मुख्य घटनाएँ और टाइमलाइन।</p>';
            if(tab === 'kathayein') contentArea.innerHTML = '<p>प्रचलित कथाएँ और प्रसंग।</p>';
        });
    });
}

function focusOnNode(nodeId) {
    const dataList = window.HistoricDB ? window.HistoricDB.getAll() : historicData;
    const nodeData = dataList.find(d => d.id === nodeId);
    if (!nodeData) return;

    focusedNodeId = nodeId;

    // Force out of macro mode on focus
    if (isMacroMode) {
        scale = 1;
        isMacroMode = false;
    }

    highlightRelatives(nodeId);

    // Calculate translation to center the node
    const containerRect = container.getBoundingClientRect();

    // Offset Y slightly on mobile so the node isn't hidden behind the bottom panel
    const isMobile = window.innerWidth <= 768;
    const yOffset = isMobile ? (containerRect.height * 0.25) : 0;

    const targetTranslateX = (containerRect.width / 2) - (nodeData.x * scale);
    const targetTranslateY = (containerRect.height / 2) - (nodeData.y * scale) - yOffset;

    // Simple smooth animation loop for panning
    let progress = 0;
    const startTx = translateX;
    const startTy = translateY;

    function animate() {
        progress += 0.05;
        if (progress > 1) progress = 1;

        // Easing function
        const easeOutQuad = t => t * (2 - t);
        const p = easeOutQuad(progress);

        translateX = startTx + (targetTranslateX - startTx) * p;
        translateY = startTy + (targetTranslateY - startTy) * p;
        updateTransform();

        if (progress < 1) requestAnimationFrame(animate);
    }
    animate();
}

function showLineageToRoot(startNodeId) {
    const dataList = window.HistoricDB ? window.HistoricDB.getAll() : historicData;
    isLineageMode = true;
    lineagePath.clear();

    let currentNodeId = startNodeId;
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;

    // Trace path to root
    while (currentNodeId) {
        lineagePath.add(currentNodeId);
        const node = dataList.find(d => d.id === currentNodeId);
        if (!node) break;

        // Track bounds, ensure valid integers
        const nx = parseFloat(node.x);
        const ny = parseFloat(node.y);

        if (!isNaN(nx) && !isNaN(ny)) {
            if (nx < minX) minX = nx;
            if (nx > maxX) maxX = nx;
            if (ny < minY) minY = ny;
            if (ny > maxY) maxY = ny;
        }

        if (node.mother) lineagePath.add(node.mother);

        if (node.parents && node.parents.length > 0) {
             currentNodeId = node.parents[0];
        } else {
             currentNodeId = node.parent;
        }
    }

    if (minX === Infinity) return; // Fallback if no valid bounds were found

    // Highlight the path
    document.querySelectorAll('.map-node').forEach(n => {
        const id = n.id.replace('node-', '');
        if (lineagePath.has(id)) {
            n.style.opacity = '1';
            n.style.transform = 'translate(-50%, -50%) scale(1.2)';
            n.style.zIndex = '10';
            n.style.boxShadow = '0 0 20px var(--primary-saffron)';
        } else {
            n.style.opacity = '0.05';
            n.style.transform = 'translate(-50%, -50%) scale(1)';
            n.style.zIndex = '1';
            n.style.boxShadow = '';
        }
    });

    // Highlight wires
    document.querySelectorAll('.map-wire').forEach(w => {
        const fromId = w.dataset.from;
        const toId = w.dataset.to;

        // If the wire connects two nodes in our path, or connects a parent to an intermediate grouping line
        if ((lineagePath.has(fromId) && lineagePath.has(toId)) || (!fromId && !toId)) {
            // Check if both nodes are validly in lineage path
            if (fromId && toId) {
                w.style.opacity = '1';
                w.style.strokeWidth = '4';
                w.style.stroke = 'var(--primary-saffron)';
            } else {
                w.style.opacity = '0.05';
            }
        } else {
            w.style.opacity = '0.05';
            w.style.strokeWidth = '2';
            w.style.stroke = 'url(#lineGradient)'; // Revert to default
        }
    });

    // Animate map to fit bounds
    const padding = 500;
    const width = (maxX - minX) + padding * 2;
    const height = (maxY - minY) + padding * 2;

    const containerRect = container.getBoundingClientRect();
    const scaleX = containerRect.width / width;
    const scaleY = containerRect.height / height;

    // Zoom out just enough to fit, but not too small
    const targetScale = Math.max(0.1, Math.min(scaleX, scaleY, 0.8));

    const targetTx = (containerRect.width / 2) - ((minX + maxX) / 2 * targetScale);
    const targetTy = (containerRect.height / 2) - ((minY + maxY) / 2 * targetScale);

    let progress = 0;
    const startTx = translateX;
    const startTy = translateY;
    const startScale = scale;

    function animateBounds() {
        progress += 0.03;
        if (progress > 1) progress = 1;

        const easeOutQuad = t => t * (2 - t);
        const p = easeOutQuad(progress);

        translateX = startTx + (targetTx - startTx) * p;
        translateY = startTy + (targetTy - startTy) * p;
        scale = startScale + (targetScale - startScale) * p;

        updateTransform();

        if (progress < 1) {
            requestAnimationFrame(animateBounds);
        }
    }
    animateBounds();

    // Add a small button or UI hint to exit Lineage Mode
    showExitLineageUI();
}

function showExitLineageUI() {
    let exitBtn = document.getElementById('exit-lineage-btn');
    if (!exitBtn) {
        exitBtn = document.createElement('button');
        exitBtn.id = 'exit-lineage-btn';
        exitBtn.innerText = '✕ वंश दृश्य बंद करें';
        exitBtn.style.position = 'absolute';
        exitBtn.style.bottom = '30px';
        exitBtn.style.left = '50%';
        exitBtn.style.transform = 'translateX(-50%)';
        exitBtn.style.padding = '10px 20px';
        exitBtn.style.background = 'var(--text-dark)';
        exitBtn.style.color = 'white';
        exitBtn.style.border = 'none';
        exitBtn.style.borderRadius = '30px';
        exitBtn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
        exitBtn.style.zIndex = '1000';
        exitBtn.style.fontFamily = 'Poppins';
        exitBtn.style.cursor = 'pointer';

        exitBtn.addEventListener('click', () => {
            isLineageMode = false;
            lineagePath.clear();
            exitBtn.remove();

            // Restore wire styles
            document.querySelectorAll('.map-wire').forEach(w => {
                w.style.strokeWidth = '2';
                w.style.stroke = 'url(#lineGradient)';
            });

            // Re-focus original node
            focusOnNode(focusedNodeId);
        });
        document.body.appendChild(exitBtn);
    }
}

function openPanel(data) {
    const panel = document.getElementById('focus-panel');
    document.getElementById('panel-name').textContent = data.name;
    document.getElementById('panel-subtitle').textContent = data.subtitle;

    const dotsContainer = document.getElementById('panel-dots');
    dotsContainer.innerHTML = '';
    if (data.color) dotsContainer.innerHTML += `<div class="dot" style="background-color: ${data.color}"></div>`;
    if (data.motherColor) dotsContainer.innerHTML += `<div class="dot" style="background-color: ${data.motherColor}"></div>`;

    document.getElementById('panel-content-area').innerHTML = `
        <p><strong>वंश:</strong> ${data.color === '#FF9900' ? 'सूर्यवंश' : data.color === '#3399FF' ? 'चंद्रवंश' : 'अन्य'}</p>
        <p><strong>युग:</strong> ${data.yug === 'satya' ? 'सत्य' : data.yug === 'treta' ? 'त्रेता' : 'द्वापर'}</p>
        <p>यहाँ विस्तृत जानकारी प्रदर्शित होगी।</p>
    `;

    panel.classList.remove('hidden');
}

// Start
initMap();
