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
    MACRO_ZOOM_THRESHOLD: 0.5,
    container: null,
    canvas: null,
    ctx: null,

    expandedClusters: new Set(), // Track which clusterNames are open
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
        this.updateCosmicScale();
    },

    updateCosmicScale() {
        const overlay = document.getElementById('cosmic-time-scale');
        const eraLabel = document.getElementById('current-era-label');
        const yearLabel = document.getElementById('current-year-label');
        if (!overlay || !eraLabel || !yearLabel) return;

        // In position-calculator, KALIYUG_ZERO_Y is set to 10000. PIXELS_PER_YEAR is 2.
        const KALIYUG_ZERO_Y = 10000;
        const PIXELS_PER_YEAR = 2;

        // Depth is effectively the Y coordinate we are currently looking at on screen
        const centerY = (-this.translateY / this.scale) + (window.innerHeight / (2 * this.scale));

        if (centerY < KALIYUG_ZERO_Y) {
            eraLabel.textContent = "Pre-Kaliyug";
            yearLabel.textContent = "K.Y. < 0";
        } else {
            // Calculate current Kali Year based on scroll depth
            const kaliYear = Math.floor((centerY - KALIYUG_ZERO_Y) / PIXELS_PER_YEAR);

            // Determine macro scale text (1000 year blocks)
            let macroText = "Kaliyuga";
            if (kaliYear < 1000) macroText = "Kaliyuga (Charan 1)";
            else if (kaliYear < 2000) macroText = "Kaliyuga (Charan 1-2)";
            else if (kaliYear < 3000) macroText = "Kaliyuga (Charan 2)";
            else if (kaliYear < 4000) macroText = "Kaliyuga (Charan 3)";
            else macroText = "Kaliyuga (Modern)";

            eraLabel.textContent = macroText;
            yearLabel.textContent = `K.Y. ${kaliYear}`;
        }

        // Build the ruler visually once if empty
        const ruler = overlay.querySelector('.scale-ruler');
        if (ruler && ruler.children.length === 0) {
            ruler.innerHTML = ''; // clear
            // Create 6 major blocks, each with 10 minor blocks
            for (let major = 0; major <= 6; major++) {
                const majorTick = document.createElement('div');
                majorTick.className = 'scale-tick-major';
                // percentage down the 400px ruler (0 to 6000 years -> 6 major blocks)
                majorTick.style.top = `${(major / 6) * 100}%`;
                ruler.appendChild(majorTick);

                if (major < 6) {
                    for(let minor = 1; minor < 10; minor++) {
                        const minorTick = document.createElement('div');
                        minorTick.className = 'scale-tick-minor';
                        const percent = ((major * 10) + minor) / 60;
                        minorTick.style.top = `${percent * 100}%`;
                        ruler.appendChild(minorTick);
                    }
                }
            }

            // Add a dynamic active marker
            const marker = document.createElement('div');
            marker.id = 'ruler-active-marker';
            marker.style.position = 'absolute';
            marker.style.right = '0';
            marker.style.width = '30px';
            marker.style.height = '4px';
            marker.style.background = '#ff0000';
            marker.style.boxShadow = '0 0 8px #ff0000';
            marker.style.transition = 'top 0.1s ease-out';
            ruler.appendChild(marker);
        }

        // Move the marker based on scroll (max 6000 years represented on the ruler)
        if (ruler) {
            const marker = document.getElementById('ruler-active-marker');
            if (marker) {
                const kaliYear = Math.max(0, Math.floor((centerY - KALIYUG_ZERO_Y) / PIXELS_PER_YEAR));
                let rulerPercent = (kaliYear / 6000) * 100;
                if (rulerPercent > 100) rulerPercent = 100;
                marker.style.top = `${rulerPercent}%`;
            }
        }
    }
};
