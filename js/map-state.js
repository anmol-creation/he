// Shared State for Historic Map
window.MapState = {
    scale: 0.4, // Initial 2nd zoom out level
    translateX: 0,
    translateY: 0,
    isDragging: false,
    startX: 0,
    startY: 0,
    initialPinchDistance: null,
    initialScale: 1,
    initialPinchCenterX: 0,
    initialPinchCenterY: 0,
    isMacroMode: false,
    focusedNodeId: 'brahman',
    MACRO_ZOOM_THRESHOLD: 0.3,
    container: null,
    canvas: null,
    ctx: null,
    aside: null,
    expandedClusters: new Set(),
    expandedBranches: new Set(), // Track which clusterNames are open
    showTransitionWires: false, // Filter: Hide Daughter->Wife lines by default
    layoutMode: 'autoslip', // Default layout mode
    activeKalpa: 'shveta_varaha', // Default Kalpa (51st)
    activeManvantara: 7, // Default 7th Vaivasvata

    // Canvas-based Kalpa/Manvantara Switcher State
    kalpas: [
        { id: 'padma', index: 50, title: 'Padma Kalpa' },
        { id: 'shveta_varaha', index: 51, title: 'Shveta Varaha (Current)' },
        { id: 'nilalohita', index: 52, title: 'Nilalohita Kalpa (Future)' }
    ],
    currentKalpaIndex: 1,

    manvantaras: [
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
    ],
    currentManvIndex: 6,
    switcherHitBoxes: [], // Store { type, action, x, y, w, h }

    initElements() {
        this.container = document.getElementById('map-container');
        this.canvas = document.getElementById('main-canvas');
        if (this.canvas) {
            this.ctx = this.canvas.getContext('2d');
            this.resizeCanvas();
            window.addEventListener('resize', () => this.resizeCanvas());
        }
        this.aside = document.getElementById('river-of-time');
    },

    resizeCanvas() {
        if (!this.canvas) return;
        const rect = this.container.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        this.canvas.style.width = `${rect.width}px`;
        this.canvas.style.height = `${rect.height}px`;
        this.ctx.scale(dpr, dpr);
        this.requestRedraw();
    },

    requestRedraw() {
        if (window.MapRenderer && window.MapRenderer.renderAll) {
            window.MapRenderer.renderAll();
        }
    },

    updateKalpaManvState() {
        this.activeKalpa = this.kalpas[this.currentKalpaIndex].id;
        this.activeManvantara = this.manvantaras[this.currentManvIndex].index;
        window.dispatchEvent(new Event('ClusterToggled'));
    },

    updateTransform() {
        if (this.scale < this.MACRO_ZOOM_THRESHOLD) {
            if (!this.isMacroMode) {
                this.isMacroMode = true;
                const panel = document.getElementById('focus-panel');
                if (panel) panel.classList.add('hidden');
                if (window.MapRenderer) window.MapRenderer.highlightRelatives(null);
            }
        } else {
            if (this.isMacroMode) {
                this.isMacroMode = false;
                if (this.focusedNodeId && window.MapRenderer) {
                    window.MapRenderer.highlightRelatives(this.focusedNodeId);
                }
            }
        }

        this.requestRedraw();
    }
};
