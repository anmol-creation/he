// historic-map.js

// Mock Data Structure representing Graph/Tree
// Coordinates (x, y) are relative to the virtual 5000x5000 canvas.
// x: horizontal spacing (siblings/vanshas)
// y: vertical spacing (time/generations)
const historicData = [
    { id: 'brahma', name: 'ब्रह्मा', subtitle: 'सृष्टि रचयिता', x: 2500, y: 500, color: '#FFD700', type: 'root', yug: 'satya' },

    // Suryavansh (Orange)
    { id: 'manu', name: 'वैवस्वत मनु', subtitle: 'प्रथम पुरुष', x: 2000, y: 1000, color: '#FF9900', parent: 'brahma', yug: 'satya' },
    { id: 'ikshvaku', name: 'इक्ष्वाकु', subtitle: 'सूर्यवंश के संस्थापक', x: 2000, y: 1500, color: '#FF9900', parent: 'manu', yug: 'satya' },
    { id: 'dasharath', name: 'दशरथ', subtitle: 'अयोध्या के चक्रवर्ती सम्राट', x: 2000, y: 2500, color: '#FF9900', parent: 'ikshvaku', yug: 'treta' },
    { id: 'ram', name: 'राम', subtitle: 'मर्यादा पुरुषोत्तम', x: 1800, y: 3000, color: '#FF9900', parent: 'dasharath', yug: 'treta', motherColor: '#FFD700' },
    { id: 'bharat', name: 'भरत', subtitle: 'आदर्श भ्राता', x: 2000, y: 3000, color: '#FF9900', parent: 'dasharath', yug: 'treta' },
    { id: 'lakshman', name: 'लक्ष्मण', subtitle: 'शेषनाग अवतार', x: 2200, y: 3000, color: '#FF9900', parent: 'dasharath', yug: 'treta' },

    // Chandravansh (Blue)
    { id: 'pururava', name: 'पुरुरवा', subtitle: 'चंद्रवंश के प्रथम राजा', x: 3000, y: 1000, color: '#3399FF', parent: 'brahma', yug: 'satya' },
    { id: 'yayati', name: 'ययाति', subtitle: 'महान सम्राट', x: 3000, y: 1500, color: '#3399FF', parent: 'pururava', yug: 'satya' },

    // Branching: Yadu and Puru
    { id: 'yadu', name: 'यदु', subtitle: 'यदुवंश के संस्थापक', x: 2800, y: 2000, color: '#9933CC', parent: 'yayati', yug: 'treta' }, // Purple
    { id: 'puru', name: 'पुरु', subtitle: 'पौरव/कुरुवंश', x: 3200, y: 2000, color: '#3399FF', parent: 'yayati', yug: 'treta' }, // Keeps blue

    // Krishna in Yaduvansh
    { id: 'krishna', name: 'कृष्ण', subtitle: 'पूर्णावतार', x: 2800, y: 3800, color: '#9933CC', parent: 'yadu', yug: 'dwapar' },

    // Kuruvansh
    { id: 'kuru', name: 'कुरु', subtitle: 'कुरुवंश के संस्थापक', x: 3200, y: 2500, color: '#00CC66', parent: 'puru', yug: 'dwapar' }, // Green
    { id: 'shantanu', name: 'शांतनु', subtitle: 'कुरुवंश', x: 3200, y: 3000, color: '#00CC66', parent: 'kuru', yug: 'dwapar' },
    { id: 'dhritarashtra', name: 'धृतराष्ट्र', subtitle: 'हस्तिनापुर नरेश', x: 3100, y: 3500, color: '#00CC66', parent: 'shantanu', yug: 'dwapar' },
    { id: 'pandu', name: 'पांडु', subtitle: 'पांडवों के पिता', x: 3300, y: 3500, color: '#00CC66', parent: 'shantanu', yug: 'dwapar' },
    { id: 'yudhishthir', name: 'युधिष्ठिर', subtitle: 'धर्मराज', x: 3300, y: 3800, color: '#00CC66', parent: 'pandu', yug: 'dwapar' }
];

// Canvas & Zoom State
const container = document.getElementById('map-container');
const canvas = document.getElementById('map-canvas');
const nodesContainer = document.getElementById('nodes-container');
const svg = document.getElementById('connection-lines');

let scale = 1;
let translateX = -1500; // Initial offset to center around X:2000-3000
let translateY = -1500; // Initial offset
let isDragging = false;
let startX, startY;

const MACRO_ZOOM_THRESHOLD = 0.5;

// Initialize
function initMap() {
    renderNodes();
    drawConnections();
    updateTransform();
    setupEventListeners();

    // Focus on Ram initially for demo
    focusOnNode('ram');
}

function renderNodes() {
    nodesContainer.innerHTML = '';
    historicData.forEach(data => {
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
            openPanel(data);
            focusOnNode(data.id);
        });

        nodesContainer.appendChild(node);
    });
}

function drawConnections() {
    svg.innerHTML = '';
    historicData.forEach(data => {
        if (data.parent) {
            const parent = historicData.find(d => d.id === data.parent);
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
        nodes.forEach(n => n.classList.add('macro-mode'));
    } else {
        nodes.forEach(n => n.classList.remove('macro-mode'));
    }

    updateRiverOfTime();
}

function updateRiverOfTime() {
    // Determine which Yuga is visible based on translateY
    // Virtual Y coordinates: Satya < 2000, Treta 2000-3200, Dwapar 3200-4000
    // We calculate the center Y coordinate of the visible screen
    const containerRect = container.getBoundingClientRect();
    const screenCenterY = (containerRect.height / 2 - translateY) / scale;

    let activeYug = 'satya';
    if (screenCenterY > 3200) activeYug = 'dwapar';
    else if (screenCenterY > 2000) activeYug = 'treta';

    document.querySelectorAll('.time-marker').forEach(marker => {
        if (marker.dataset.yug === activeYug) {
            marker.classList.add('active');
        } else {
            marker.classList.remove('active');
        }
    });
}

function setupEventListeners() {
    // Panning (Drag)
    container.addEventListener('mousedown', (e) => {
        if (e.target.closest('.map-node')) return; // Don't drag if clicking a node
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
    const nodeData = historicData.find(d => d.id === nodeId);
    if (!nodeData) return;

    // Zoom in a bit if zoomed out
    if (scale < 0.8) scale = 1;

    // Calculate translation to center the node
    const containerRect = container.getBoundingClientRect();
    const targetTranslateX = (containerRect.width / 2) - (nodeData.x * scale);
    const targetTranslateY = (containerRect.height / 2) - (nodeData.y * scale);

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
