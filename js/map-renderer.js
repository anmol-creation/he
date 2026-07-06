window.MapRenderer = {
    renderNodes(dataList) {
        const nodesContainer = window.MapState.nodesContainer;
        nodesContainer.innerHTML = '';

        dataList.forEach(data => {
            const node = document.createElement('div');
            node.className = 'map-node';

            const nodeColor = data.inheritedColor || '#FF6B35';
            const isDaughter = data.id.endsWith('_daughter') || (data.gender === 'female' && !data.spouseOf);

            if (data.spouseOf) {
                node.classList.add('spouse-node');
                node.style.border = '3px solid #ff99cc';
                node.style.background = '#2a2025';
            } else if (isDaughter) {
                node.style.border = '3px solid #ffb6c1';
                node.style.background = '#2a2025';
            } else {
                node.style.border = `3px solid ${nodeColor}`;
                node.style.background = '#222';
            }

            node.id = `node-${data.id}`;
            node.style.left = `${data.x}px`;
            node.style.top = `${data.y}px`;

            node.innerHTML = `
                <div class="heritage-dots"></div>
                <div class="node-title">${data.name}</div>
                <div class="node-details">${data.subtitle || ''}</div>
            `;

            node.addEventListener('click', (e) => {
                e.stopPropagation();
                if (window.MapControls) window.MapControls.focusOnNode(data.id);
                if (window.MapUI) window.MapUI.openPanel(data);
            });

            nodesContainer.appendChild(node);
        });
    },

    drawConnections(dataList) {
        const svg = window.MapState.svg;
        svg.innerHTML = '';

        const drawnHusbandToWives = new Set();

        dataList.forEach(data => {
            if (data.spouseOf) {
                const husbandId = data.spouseOf;
                if (!drawnHusbandToWives.has(husbandId)) {
                    drawnHusbandToWives.add(husbandId);
                    const husband = dataList.find(d => d.id === husbandId);
                    if (husband) {
                        const wives = dataList.filter(d => d.spouseOf === husbandId);
                        wives.forEach(wife => {
                            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                            const startX = husband.x;
                            let startY = husband.y + 40;
                            const endX = wife.x;
                            let endY = wife.y - 40;

                            let controlY = startY + (endY - startY) / 2;
                            let dAttribute = `M ${startX} ${startY} C ${startX} ${controlY}, ${endX} ${controlY}, ${endX} ${endY}`;

                            // Adjust wire for single wife on same Y axis
                            if (wives.length === 1 && husband.y === wife.y) {
                                startY = husband.y; // side of node conceptually
                                endY = wife.y;
                                controlY = startY;
                                dAttribute = `M ${startX} ${startY} L ${endX} ${endY}`;
                            }

                            path.setAttribute('d', dAttribute);
                            path.setAttribute('class', 'map-wire');
                            path.setAttribute('stroke', '#FF1493'); // Marriage color
                            svg.appendChild(path);
                        });

                        // Draw Sibling line among wives if more than 1
                        if (wives.length > 1) {
                            const minX = Math.min(...wives.map(w => w.x));
                            const maxX = Math.max(...wives.map(w => w.x));
                            const siblingY = wives[0].y - 25;
                            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                            line.setAttribute('x1', minX);
                            line.setAttribute('y1', siblingY);
                            line.setAttribute('x2', maxX);
                            line.setAttribute('y2', siblingY);
                            line.setAttribute('class', 'map-wire');
                            line.setAttribute('stroke', '#4169E1');
                            svg.appendChild(line);
                        }
                    }
                }
            } else if (data.parent) {
                // Determine connection source: Mother first, else Father
                let sourceNodeId = data.parent;
                if (data.mother && dataList.find(d => d.id === data.mother)) {
                    sourceNodeId = data.mother;
                }
                const sourceNode = dataList.find(d => d.id === sourceNodeId);

                if (sourceNode) {
                    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    const startX = sourceNode.x;
                    const startY = sourceNode.y + 40;
                    const endX = data.x;
                    const endY = data.y - 40;
                    const controlY = startY + (endY - startY) / 2;
                    path.setAttribute('d', `M ${startX} ${startY} C ${startX} ${controlY}, ${endX} ${controlY}, ${endX} ${endY}`);
                    path.setAttribute('class', 'map-wire');
                    path.setAttribute('stroke', data.inheritedColor || 'var(--primary-saffron)');
                    svg.appendChild(path);
                }
            }
        });

        // Transition Wires
        if (window.transitionWires) {
            window.transitionWires.forEach(wire => {
                const fromNode = dataList.find(d => d.id === wire.from);
                const toNode = dataList.find(d => d.id === wire.to);
                if (fromNode && toNode) {
                    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.classList.add('map-wire', 'transition-wire');
                    const startX = fromNode.x;
                    const startY = fromNode.y + 20;
                    const endX = toNode.x;
                    const endY = toNode.y - 20;
                    const midY = startY + (endY - startY) / 2;
                    path.setAttribute('d', `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`);
                    svg.appendChild(path);
                }
            });
        }
    },

    drawTimeDividers() {
        const dividers = [
            { label: 'Sanatan', y: 150 },
            { label: 'Maha-Kalpa', y: 450 },
            { label: 'Kalpa', y: 750 },
            { label: 'Manvantara', y: 1050 }
        ];

        dividers.forEach(div => {
            const line = document.createElement('div');
            line.className = 'time-band-divider';
            line.style.top = `${div.y}px`;
            const label = document.createElement('div');
            label.className = 'time-band-label';
            label.innerText = div.label;
            line.appendChild(label);
            window.MapState.nodesContainer.appendChild(line);
        });
    },

    highlightRelatives(centerNodeId) {
        if (!centerNodeId || window.MapState.isMacroMode) {
            document.querySelectorAll('.map-node').forEach(n => n.style.opacity = '1');
            document.querySelectorAll('.map-wire').forEach(w => w.style.opacity = '0.6');
            return;
        }

        const dataList = window.HistoricDB ? window.HistoricDB.getAll() : window.historicData;
        const node = dataList.find(d => d.id === centerNodeId);
        if (!node) return;

        const relatives = new Set([centerNodeId]);
        if (node.parent) relatives.add(node.parent);
        if (node.spouseOf) relatives.add(node.spouseOf);

        dataList.forEach(d => {
            if (d.parent === centerNodeId) relatives.add(d.id);
            if (node.parent && d.parent === node.parent) relatives.add(d.id);
            if (d.spouseOf === centerNodeId) relatives.add(d.id);
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
};
