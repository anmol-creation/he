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
    svg: null,
    nodesContainer: null,
    aside: null,

    initElements() {
        this.container = document.getElementById('map-container');
        this.canvas = document.getElementById('map-canvas');
        this.svg = document.getElementById('connection-lines');
        this.nodesContainer = document.getElementById('nodes-container');
        this.aside = document.getElementById('river-of-time');
    },

    updateTransform() {
        if (!this.canvas) return;
        this.canvas.style.transform = `translate(${this.translateX}px, ${this.translateY}px) scale(${this.scale})`;

        // Toggle Macro vs Micro mode based on scale
        const nodes = document.querySelectorAll('.map-node');
        if (this.scale < this.MACRO_ZOOM_THRESHOLD) {
            if (!this.isMacroMode) {
                this.isMacroMode = true;
                nodes.forEach(n => n.classList.add('macro-mode'));
                document.getElementById('focus-panel').classList.add('hidden');
                if (window.MapRenderer) window.MapRenderer.highlightRelatives(null);
            }
        } else {
            if (this.isMacroMode) {
                this.isMacroMode = false;
                nodes.forEach(n => n.classList.remove('macro-mode'));
                if (this.focusedNodeId && window.MapRenderer) {
                    window.MapRenderer.highlightRelatives(this.focusedNodeId);
                }
            }
        }
    }
};
