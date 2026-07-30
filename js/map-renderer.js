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

        // Simple hash function to generate a stable pseudo-random offset based on an ID string
        // This ensures each parent gets their own dedicated horizontal "channel" (lane) to prevent overlapping lines
        const getChannelOffset = (idStr) => {
            let hash = 0;
            for (let i = 0; i < idStr.length; i++) {
                hash = idStr.charCodeAt(i) + ((hash << 5) - hash);
            }
            // Map hash to a value between -30 and +30 pixels
            return (Math.abs(hash) % 60) - 30;
        };

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

                            // Add channel offset to separate different husband-wife lines
                            let channelOffset = getChannelOffset(husbandId);
                            let controlY = startY + (endY - startY) / 2 + (channelOffset * 0.5);

                            if (wives.length === 1 && husband.y === wife.y) {
                                startY = husband.y;
                                endY = wife.y;
                                controlY = startY;

                                ctx.beginPath();
                                ctx.moveTo(startX, startY);
                                ctx.lineTo(endX, endY);
                                ctx.stroke();
                            } else {
                                // Orthogonal rendering for wives (down, over, down)
                                ctx.beginPath();
                                ctx.moveTo(startX, startY);
                                ctx.lineTo(startX, controlY);
                                ctx.lineTo(endX, controlY);
                                ctx.lineTo(endX, endY);
                                ctx.stroke();

                                // Draw Arrowhead pointing down to wife
                                ctx.beginPath();
                                ctx.moveTo(endX, endY);
                                ctx.lineTo(endX - 5, endY - 10);
                                ctx.lineTo(endX + 5, endY - 10);
                                ctx.closePath();
                                ctx.fillStyle = ctx.strokeStyle;
                                ctx.fill();
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

                    // Apply offset to horizontal channel based on parent ID
                    const channelOffset = getChannelOffset(sourceNodeId);
                    const controlY = startY + (endY - startY) / 2 + channelOffset;

                    ctx.strokeStyle = data.inheritedColor || '#FF6B35';

                    // Orthogonal routing for children (down, over, down)
                    ctx.beginPath();
                    ctx.moveTo(startX, startY);
                    ctx.lineTo(startX, controlY);
                    ctx.lineTo(endX, controlY);
                    ctx.lineTo(endX, endY);
                    ctx.stroke();

                    // Draw Arrowhead pointing down to child
                    ctx.beginPath();
                    ctx.moveTo(endX, endY);
                    ctx.lineTo(endX - 5, endY - 10);
                    ctx.lineTo(endX + 5, endY - 10);
                    ctx.closePath();
                    ctx.fillStyle = ctx.strokeStyle;
                    ctx.fill();
                }
            }
        });

        if (window.transitionWires && window.MapState && window.MapState.showTransitionWires) {
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
                    ctx.lineTo(startX, midY);
                    ctx.lineTo(endX, midY);
                    ctx.lineTo(endX, endY);
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
        // We now draw visual "Swimlanes" / Boundaries between the Y-depths, rather than just lines above them.
        let sanatanY = 0;
        let mahakalpY = 300;
        let kalpY = 1000;

        const nodes = Array.from(window.MapState.layoutEngine?.nodesMap?.values() || []);

        // Find Y of Parabrahman
        const brahman = nodes.find(n => n.id === 'brahman');
        if (brahman) sanatanY = brahman.y;

        // Find Y of Brahma/Vishnu/Shiva
        const mahakalpNodes = nodes.filter(n => n.timeScale === 'mahakalp');
        if (mahakalpNodes.length > 0) {
            mahakalpY = Math.min(...mahakalpNodes.map(n => n.y));
        }

        // Find start of normal Kalp
        const kalpNodes = nodes.filter(n => !['sanatan', 'mahakalp'].includes(n.timeScale));
        if (kalpNodes.length > 0) {
            kalpY = Math.min(...kalpNodes.map(n => n.y));
        }

        let manvantaraY = kalpY + 300; // default offset
        const manvNodes = nodes.filter(n => n.depth >= 3);
        if (manvNodes.length > 0) {
            manvantaraY = Math.min(...manvNodes.map(n => n.y));
        }

        // Calculate the exact midpoint between the layers to draw the separating boundary lines
        const sanatanBottomLine = sanatanY + ((mahakalpY - sanatanY) / 2);
        const mahakalpBottomLine = mahakalpY + ((kalpY - mahakalpY) / 2);
        const kalpBottomLine = kalpY + ((manvantaraY - kalpY) / 2);

        const dividers = [
            { label: 'Sanatan (Eternal) Zone ↑', y: sanatanBottomLine, color: '#FFD700' },
            { label: 'Maha-Kalpa Zone ↑', y: mahakalpBottomLine, color: '#FF8C00' },
            { label: 'Kalpa-spanning Entities ↑', y: kalpBottomLine, color: '#00BFFF' }
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

            ctx.globalAlpha = 1;
            ctx.fillStyle = 'rgba(17, 17, 17, 0.9)';
            ctx.strokeStyle = div.color;

            ctx.beginPath();
            if (ctx.roundRect) {
                ctx.roundRect(-100, div.y - 20, 200, 40, 8);
            } else {
                ctx.rect(-100, div.y - 20, 200, 40);
            }
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = div.color;
            ctx.font = 'bold 14px Poppins';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(div.label, 0, div.y - 15);
        });

        ctx.setLineDash([]);
        ctx.globalAlpha = 1;

        // Draw Switchers directly onto the canvas
        if (window.MapState) {
            window.MapState.switcherHitBoxes = []; // Reset hitboxes each render
            const state = window.MapState;

            // 1. Kalpa Switcher at Mahakalp Bottom Line
            const kY = mahakalpBottomLine + 45; // Below the line
            const kCurrent = state.kalpas[state.currentKalpaIndex];
            const kSubText = `${kCurrent.index}${kCurrent.index === 50 ? 'th' : kCurrent.index === 51 ? 'st' : 'nd'} Kalpa`;

            this.drawCanvasSwitcher(
                ctx,
                0, kY,
                'kalpa',
                kSubText,
                kCurrent.title,
                '#FFD700',
                state.currentKalpaIndex > 0,
                state.currentKalpaIndex < state.kalpas.length - 1
            );

            // 2. Manvantara Switcher at Kalpa Bottom Line
            const mY = kalpBottomLine + 45; // Below the line
            const mCurrent = state.manvantaras[state.currentManvIndex];
            const mSubText = `${mCurrent.index}${mCurrent.index === 1 ? 'st' : mCurrent.index === 2 ? 'nd' : mCurrent.index === 3 ? 'rd' : 'th'} Manvantara`;

            this.drawCanvasSwitcher(
                ctx,
                0, mY,
                'manvantara',
                mSubText,
                mCurrent.title,
                '#00BFFF',
                state.currentManvIndex > 0,
                state.currentManvIndex < state.manvantaras.length - 1
            );
        }
    },

    drawCanvasSwitcher(ctx, x, y, type, subText, mainText, color, hasPrev, hasNext) {
        ctx.save();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Background box for switcher
        const boxWidth = 260;
        const boxHeight = 50;
        ctx.fillStyle = 'rgba(17, 17, 17, 0.9)';
        ctx.strokeStyle = '#444';
        ctx.lineWidth = 1;
        ctx.beginPath();
        if (ctx.roundRect) {
            ctx.roundRect(x - boxWidth/2, y - boxHeight/2, boxWidth, boxHeight, 10);
        } else {
            ctx.rect(x - boxWidth/2, y - boxHeight/2, boxWidth, boxHeight);
        }
        ctx.fill();
        ctx.stroke();

        // Texts
        ctx.fillStyle = '#999';
        ctx.font = '12px Poppins';
        ctx.fillText(subText, x, y - 8);

        ctx.fillStyle = color;
        ctx.font = 'bold 16px Poppins';
        ctx.fillText(mainText, x, y + 10);

        // Arrows
        ctx.font = '18px Arial';

        // Prev Arrow
        const prevArrowX = x - boxWidth/2 + 20;
        ctx.fillStyle = hasPrev ? color : 'rgba(255,255,255,0.2)';
        ctx.fillText('◄', prevArrowX, y);

        // Next Arrow
        const nextArrowX = x + boxWidth/2 - 20;
        ctx.fillStyle = hasNext ? color : 'rgba(255,255,255,0.2)';
        ctx.fillText('►', nextArrowX, y);

        // Store Hitboxes in MapState (for Canvas clicks)
        if (window.MapState) {
            window.MapState.switcherHitBoxes.push({
                type: type,
                action: 'prev',
                x: prevArrowX - 15,
                y: y - 15,
                w: 30,
                h: 30
            });
            window.MapState.switcherHitBoxes.push({
                type: type,
                action: 'next',
                x: nextArrowX - 15,
                y: y - 15,
                w: 30,
                h: 30
            });
        }

        ctx.restore();
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
                    ctx.lineTo(startX, controlY);
                    ctx.lineTo(endX, controlY);
                    ctx.lineTo(endX, endY);
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
