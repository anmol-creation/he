window.MapRenderer = {
    routePath: null, // Store active route

    renderAll() {
        const state = window.MapState;
        if (!state.ctx || !state.canvas) return;

        const ctx = state.ctx;
        const width = state.canvas.width;
        const height = state.canvas.height;
        const dpr = window.devicePixelRatio || 1;

        ctx.clearRect(0, 0, width / dpr, height / dpr);

        ctx.save();

        ctx.translate(state.translateX, state.translateY);
        ctx.scale(state.scale, state.scale);

        const dataList = (window.HistoricDB ? window.HistoricDB.getAll() : window.historicData) || [];

        try {
            this.drawTimeDividers(ctx, dataList);

            const relatives = this.getHighlightedRelatives(state.focusedNodeId, dataList);

            let highlightSet = relatives;
            let isRouting = false;
            if (this.routePath && this.routePath.length > 0) {
                highlightSet = new Set(this.routePath);
                isRouting = true;
            }

            ctx.lineWidth = 4;
            ctx.lineCap = 'round';
            this.drawConnections(ctx, dataList, highlightSet, isRouting);

            if (isRouting) {
                this.drawRouteConnections(ctx, dataList, this.routePath);
            }

            this.drawNodes(ctx, dataList, highlightSet, isRouting, state.isMacroMode, state.focusedNodeId);
        } finally {
            ctx.restore();
        }
    },

    getHighlightedRelatives(centerNodeId, dataList) {
        if (!centerNodeId || window.MapState.isMacroMode) return null;

        const node = dataList.find(d => d.id === centerNodeId);
        if (!node) return null;

        const relatives = new Set([centerNodeId]);
        if (node.parent) relatives.add(node.parent);
        if (node.spouseOf) relatives.add(node.spouseOf);

        dataList.forEach(d => {
            if (d.parent === centerNodeId) relatives.add(d.id);
            if (node.parent && d.parent === node.parent) relatives.add(d.id);
            if (d.spouseOf === centerNodeId) relatives.add(d.id);
        });
        return relatives;
    },

    drawConnections(ctx, dataList, highlightSet, isRouting) {
        const drawnHusbandToWives = new Set();

        dataList.forEach(data => {
            let opacity = 0.6;
            if (highlightSet) {
                 if (data.spouseOf && highlightSet.has(data.id) && highlightSet.has(data.spouseOf)) {
                     opacity = 1;
                 } else if (data.parent) {
                     let sourceId = data.mother || data.parent;
                     if (highlightSet.has(data.id) && highlightSet.has(sourceId)) {
                         opacity = 1;
                     } else {
                         opacity = 0.1;
                     }
                 } else {
                     opacity = 0.1;
                 }
                 if (isRouting) opacity = 0.1;
            }

            ctx.globalAlpha = opacity;

            if (data.spouseOf) {
                const husbandId = data.spouseOf;
                if (!drawnHusbandToWives.has(husbandId)) {
                    drawnHusbandToWives.add(husbandId);
                    const husband = dataList.find(d => d.id === husbandId);
                    if (husband) {
                        const wives = dataList.filter(d => d.spouseOf === husbandId);

                        ctx.strokeStyle = '#FF1493';

                        wives.forEach(wife => {
                            const startX = husband.x;
                            let startY = husband.y + 40;
                            const endX = wife.x;
                            let endY = wife.y - 40;

                            let controlY = startY + (endY - startY) / 2;

                            if (wives.length === 1 && husband.y === wife.y) {
                                startY = husband.y;
                                endY = wife.y;
                                controlY = startY;

                                ctx.beginPath();
                                ctx.moveTo(startX, startY);
                                ctx.lineTo(endX, endY);
                                ctx.stroke();
                            } else {
                                ctx.beginPath();
                                ctx.moveTo(startX, startY);
                                ctx.bezierCurveTo(startX, controlY, endX, controlY, endX, endY);
                                ctx.stroke();
                            }
                        });

                        if (wives.length > 1) {
                            const minX = Math.min(...wives.map(w => w.x));
                            const maxX = Math.max(...wives.map(w => w.x));
                            const siblingY = wives[0].y - 25;
                            ctx.strokeStyle = '#4169E1';
                            ctx.beginPath();
                            ctx.moveTo(minX, siblingY);
                            ctx.lineTo(maxX, siblingY);
                            ctx.stroke();
                        }
                    }
                }
            } else if (data.parent) {
                let sourceNodeId = data.parent;
                if (data.mother && dataList.find(d => d.id === data.mother)) {
                    sourceNodeId = data.mother;
                }
                const sourceNode = dataList.find(d => d.id === sourceNodeId);

                if (sourceNode) {
                    const startX = sourceNode.x;
                    const startY = sourceNode.y + 40;
                    const endX = data.x;
                    const endY = data.y - 40;
                    const controlY = startY + (endY - startY) / 2;

                    ctx.strokeStyle = data.inheritedColor || '#FF6B35';
                    ctx.beginPath();
                    ctx.moveTo(startX, startY);
                    ctx.bezierCurveTo(startX, controlY, endX, controlY, endX, endY);
                    ctx.stroke();
                }
            }
        });

        if (window.transitionWires) {
            ctx.setLineDash([10, 10]);
            ctx.strokeStyle = 'red';
            window.transitionWires.forEach(wire => {
                const fromNode = dataList.find(d => d.id === wire.from);
                const toNode = dataList.find(d => d.id === wire.to);
                if (fromNode && toNode) {
                    const startX = fromNode.x;
                    const startY = fromNode.y + 20;
                    const endX = toNode.x;
                    const endY = toNode.y - 20;
                    const midY = startY + (endY - startY) / 2;

                    ctx.beginPath();
                    ctx.moveTo(startX, startY);
                    ctx.bezierCurveTo(startX, midY, endX, midY, endX, endY);
                    ctx.stroke();
                }
            });
            ctx.setLineDash([]);
        }
    },

    drawNodes(ctx, dataList, highlightSet, isRouting, isMacroMode, focusedNodeId) {
        dataList.forEach((data) => {
            const isDaughter = data.id.endsWith('_daughter') || (data.gender === 'female' && !data.spouseOf);
            const isSpouse = !!data.spouseOf;

            const w = isSpouse ? 120 : 140;
            const h = isSpouse ? 40 : 60;
            const x = data.x - w / 2;
            const y = data.y - h / 2;

            let opacity = 1;
            let isFocused = data.id === focusedNodeId;
            let isPathNode = highlightSet && highlightSet.has(data.id);

            if (highlightSet && !isPathNode) {
                opacity = 0.1;
                isFocused = false;
            } else if (highlightSet && isPathNode && !isRouting) {
                opacity = 1;
            } else if (!highlightSet && !isMacroMode) {
                 opacity = 1;
            }

            ctx.globalAlpha = opacity;

            const nodeColor = data.inheritedColor || '#FF6B35';

            if (isMacroMode) {
                 ctx.beginPath();
                 ctx.arc(data.x, data.y, 10, 0, Math.PI * 2);
                 ctx.fillStyle = isSpouse || isDaughter ? '#2a2025' : '#222';
                 ctx.fill();
                 ctx.lineWidth = 2;
                 ctx.strokeStyle = isSpouse ? '#ff99cc' : isDaughter ? '#ffb6c1' : nodeColor;
                 ctx.stroke();

                 ctx.fillStyle = '#fff';
                 ctx.font = '12px Poppins';
                 ctx.textAlign = 'center';
                 ctx.textBaseline = 'top';
                 ctx.fillText(data.name, data.x, data.y + 15);
                 return;
            }

            if (isFocused && !isRouting) {
                ctx.shadowColor = '#FF6B35';
                ctx.shadowBlur = 20;
            } else if (isRouting && isPathNode) {
                const pathArray = Array.from(highlightSet);
                const pathIndex = pathArray.indexOf(data.id);
                if (pathIndex === 0) ctx.shadowColor = '#00FF00';
                else if (pathIndex === highlightSet.size - 1) ctx.shadowColor = '#FF0000';
                else ctx.shadowColor = '#00BFFF';
                ctx.shadowBlur = 30;
            } else {
                ctx.shadowColor = 'rgba(0,0,0,0.1)';
                ctx.shadowBlur = 15;
            }

            ctx.fillStyle = isSpouse || isDaughter ? '#2a2025' : '#222';
            this.roundRect(ctx, x, y, w, h, isSpouse ? 20 : 12);
            ctx.fill();

            ctx.shadowBlur = 0;
            ctx.lineWidth = isSpouse || isDaughter ? 3 : 4;
            ctx.strokeStyle = isSpouse ? '#ff99cc' : isDaughter ? '#ffb6c1' : nodeColor;

            ctx.beginPath();
            ctx.moveTo(x + (isSpouse ? 20 : 12), y);
            ctx.lineTo(x + w - (isSpouse ? 20 : 12), y);
            ctx.stroke();

            ctx.fillStyle = '#ffffff';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            if (isSpouse) {
                ctx.font = '14px Poppins';
                ctx.fillText(data.name, data.x, data.y);
            } else {
                ctx.font = 'bold 16px Poppins';
                ctx.fillText(data.name, data.x, data.y - 8);

                if (data.subtitle) {
                    ctx.fillStyle = '#aaaaaa';
                    ctx.font = '12px Poppins';
                    ctx.fillText(data.subtitle, data.x, data.y + 12);
                }
            }

            ctx.beginPath();
            ctx.arc(x + w, y, 5, 0, Math.PI * 2);
            ctx.fillStyle = nodeColor;
            ctx.fill();
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#fff';
            ctx.stroke();
        });

        ctx.globalAlpha = 1;
    },

    drawTimeDividers(ctx, dataList) {
        const dividers = [
            { label: 'Sanatan', y: 150 },
            { label: 'Maha-Kalpa', y: 450 },
            { label: 'Kalpa', y: 750 },
            { label: 'Manvantara', y: 1050 }
        ];

        ctx.globalAlpha = 0.5;
        ctx.strokeStyle = '#cccccc';
        ctx.lineWidth = 2;
        ctx.setLineDash([10, 10]);

        dividers.forEach(div => {
            ctx.beginPath();
            ctx.moveTo(-50000, div.y);
            ctx.lineTo(50000, div.y);
            ctx.stroke();

            ctx.fillStyle = 'rgba(0,0,0,0.8)';
            ctx.fillRect(-50, div.y - 25, 100, 20);
            ctx.fillStyle = '#999';
            ctx.font = 'bold 12px Poppins';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(div.label, 0, div.y - 15);
        });

        ctx.setLineDash([]);
        ctx.globalAlpha = 1;
    },

    drawRouteConnections(ctx, dataList, pathArray) {
        ctx.globalAlpha = 1;
        ctx.lineWidth = 6;
        ctx.strokeStyle = '#00BFFF';
        ctx.shadowColor = '#00BFFF';
        ctx.shadowBlur = 10;
        ctx.setLineDash([15, 15]);

        const time = Date.now();
        ctx.lineDashOffset = -((time / 20) % 30);

        for (let i = 0; i < pathArray.length - 1; i++) {
            const currentId = pathArray[i];
            const nextId = pathArray[i+1];
            const fromNode = dataList.find(d => d.id === currentId);
            const toNode = dataList.find(d => d.id === nextId);

            if (fromNode && toNode) {
                const startX = fromNode.x;
                const startY = fromNode.y;
                const endX = toNode.x;
                const endY = toNode.y;

                ctx.beginPath();
                if (startY === endY) {
                    ctx.moveTo(startX, startY);
                    ctx.lineTo(endX, endY);
                } else {
                    const controlY = startY + (endY - startY) / 2;
                    ctx.moveTo(startX, startY);
                    ctx.bezierCurveTo(startX, controlY, endX, controlY, endX, endY);
                }
                ctx.stroke();
            }
        }

        ctx.setLineDash([]);
        ctx.shadowBlur = 0;
    },

    highlightRelatives(centerNodeId) {
         if (window.MapState) {
              window.MapState.focusedNodeId = centerNodeId;
              window.MapState.requestRedraw();
         }
    },

    drawRoute(pathArray) {
        this.routePath = pathArray;

        if (this.routeAnimFrame) {
            cancelAnimationFrame(this.routeAnimFrame);
            this.routeAnimFrame = null;
        }

        if (window.MapState) {
             window.MapState.requestRedraw();
        }

        if (pathArray && pathArray.length > 0) {
            const animateRoute = () => {
                if (!this.routePath || this.routePath.length === 0) return;
                if (window.MapState) window.MapState.requestRedraw();
                this.routeAnimFrame = requestAnimationFrame(animateRoute);
            };
            this.routeAnimFrame = requestAnimationFrame(animateRoute);
        }
    },

    roundRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
    }
};
