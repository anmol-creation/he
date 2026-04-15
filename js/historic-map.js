// historic-map.js
// This file now acts as the UI Orchestrator, tying Data and Engine together.
// Note: historicData is now provided globally by js/data/historic-data.js

// Canvas & Zoom State
const container = document.getElementById('map-container');
const canvas = document.getElementById('map-canvas');
const nodesContainer = document.getElementById('nodes-container');
const svg = document.getElementById('connection-lines');

let scale = 1;
let translateX = -4500; // Center around X:5000 (Brahma)
let translateY = -500; // Center around Top Y:1000 (Brahma)
let isDragging = false;
let startX, startY;

const MACRO_ZOOM_THRESHOLD = 0.5;
let isMacroMode = false;
let focusedNodeId = 'brahma';

// Initialize
function initMap() {
    renderNodes();
    drawConnections();
    setupEventListeners();

    // Focus on the top node initially
    focusOnNode('brahma');
}

function renderNodes() {
    nodesContainer.innerHTML = '';
    const dataList = window.HistoricDB ? window.HistoricDB.getAll() : historicData; // Fallback just in case

    dataList.forEach(data => {
        const node = document.createElement('div');
        node.className = 'map-node';
        node.id = `node-${data.id}`;
        node.style.left = `${data.x}px`;
        node.style.top = `${data.y}px`;
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

        node.addEventListener('click', (e) => {
            e.stopPropagation();
            // If in macro mode, clicking zooms in and focuses.
            if (isMacroMode) {
                scale = 1;
                isMacroMode = false;
            }
            openPanel(data);
            focusOnNode(data.id);
        });

        nodesContainer.appendChild(node);
    });
}

function drawConnections() {
    svg.innerHTML = '';
    const dataList = window.HistoricDB ? window.HistoricDB.getAll() : historicData;

    dataList.forEach(data => {
        if (data.parent) {
            const parent = dataList.find(d => d.id === data.parent);
            if (parent) {
                // Draw line from parent to child
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

                // SVG coordinates match virtual canvas coordinates
                const startX = parent.x;
                const startY = parent.y;
                const endX = data.x;
                const endY = data.y;

                // Bezier curve for metro-style curved lines
                const controlY = startY + (endY - startY) / 2;
                const d = `M ${startX} ${startY} C ${startX} ${controlY}, ${endX} ${controlY}, ${endX} ${endY}`;

                path.setAttribute('d', d);
                path.setAttribute('class', 'map-wire');
                // Color line based on child's color to show new branch, else parent
                path.setAttribute('stroke', data.color || '#999');

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
    let activeYug = 'satya';

    // If in focus mode, highlight the Yug of the currently focused node
    if (!isMacroMode && focusedNodeId) {
        const node = window.HistoricDB ? window.HistoricDB.getNode(focusedNodeId) : historicData.find(d => d.id === focusedNodeId);
        if (node && node.yug) {
            activeYug = node.yug;
        }
    } else {
        // If in macro mode (free panning), calculate based on screen center Y
        const containerRect = container.getBoundingClientRect();
        const screenCenterY = (containerRect.height / 2 - translateY) / scale;

        if (screenCenterY > 9500) activeYug = 'kali';
        else if (screenCenterY > 7000) activeYug = 'dwapar';
        else if (screenCenterY > 4000) activeYug = 'treta';
    }

    document.querySelectorAll('.time-marker').forEach(marker => {
        if (marker.dataset.yug === activeYug) {
            marker.classList.add('active');
        } else {
            marker.classList.remove('active');
        }
    });
}

function highlightRelatives(centerNodeId) {
    if (!centerNodeId || isMacroMode) {
        document.querySelectorAll('.map-node').forEach(n => n.style.opacity = '1');
        document.querySelectorAll('.map-wire').forEach(w => w.style.opacity = '0.6');
        return;
    }

    const dataList = window.HistoricDB ? window.HistoricDB.getAll() : historicData;
    const node = dataList.find(d => d.id === centerNodeId);
    if (!node) return;

    // Find parents, children, siblings
    const relatives = new Set([centerNodeId]);
    if (node.parent) relatives.add(node.parent);

    dataList.forEach(d => {
        if (d.parent === centerNodeId) relatives.add(d.id); // Child
        if (node.parent && d.parent === node.parent) relatives.add(d.id); // Sibling
    });

    document.querySelectorAll('.map-node').forEach(n => {
        const id = n.id.replace('node-', '');
        if (relatives.has(id)) {
            n.style.opacity = '1';
            n.style.transform = id === centerNodeId ? 'translate(-50%, -50%) scale(1.1)' : 'translate(-50%, -50%) scale(1)';
            n.style.zIndex = id === centerNodeId ? '10' : '5';
            n.style.boxShadow = id === centerNodeId ? '0 0 20px var(--primary-saffron)' : '';
        } else {
            n.style.opacity = '0.3';
            n.style.transform = 'translate(-50%, -50%) scale(1)';
            n.style.zIndex = '1';
            n.style.boxShadow = '';
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

        const zoomIntensity = 0.1;
        const delta = e.deltaY > 0 ? -zoomIntensity : zoomIntensity;
        const newScale = Math.min(Math.max(0.2, scale + delta), 2); // Limit zoom 0.2x to 2x

        // Calculate focal point to zoom towards mouse cursor
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Adjust translate to keep mouse position fixed
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

    // River of Time Navigation
    document.querySelectorAll('.time-marker').forEach(marker => {
        marker.addEventListener('click', (e) => {
            const yug = e.target.dataset.yug;
            // Define an entry/key node for each Yug to jump to
            const yugEntryNodes = {
                'satya': 'brahma',
                'treta': 'ram',
                'dwapar': 'krishna',
                'kali': 'parikshit'
            };

            const targetNodeId = yugEntryNodes[yug];
            if (targetNodeId) {
                // If in macro mode, we just want to pan there. If in focus, focus there.
                if (isMacroMode) {
                    scale = 1;
                    isMacroMode = false;
                }
                document.getElementById('focus-panel').classList.add('hidden');
                focusOnNode(targetNodeId);
            }
        });
    });

    // Panel Close
    document.getElementById('close-panel').addEventListener('click', () => {
        document.getElementById('focus-panel').classList.add('hidden');
    });

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
