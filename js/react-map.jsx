import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import ReactFlow, {
    Background,
    Controls,
    MiniMap,
    useNodesState,
    useEdgesState,
    Handle,
    Position,
    MarkerType
} from 'reactflow';
import dagre from 'dagre';
import { Home, Search, Map as MapIcon, X, Maximize, User, BookOpen, ChevronRight, Layers, Users, Maximize2 } from 'lucide-react';

const nodeWidth = 220;
const nodeHeight = 100;

// ==========================================
// CUSTOM COMPONENTS
// ==========================================

// --- Custom Node (Spiritual Modern Card) ---
const CharacterNode = ({ data, selected }) => {
    return (
        <div className={`relative px-4 py-3 shadow-lg rounded-xl bg-white border-2 transition-all duration-300 w-[220px] ${selected ? 'border-saffron ring-4 ring-saffron/20 shadow-saffron/30 scale-105' : 'border-gold/50'}`}>
            <Handle type="target" position={Position.Top} className="w-3 h-3 bg-gold border-2 border-white" />
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-saffron flex-shrink-0 bg-cream flex items-center justify-center">
                    {data.imageUrl ? (
                        <img src={data.imageUrl} alt={data.name} className="w-full h-full object-cover" />
                    ) : (
                        <User className="text-saffron opacity-50" size={24} />
                    )}
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                    <div className="text-sm font-bold text-charcoal truncate" title={data.name}>{data.name}</div>
                    <div className="text-xs text-maroon/80 truncate">{data.title || data.vansh || 'Sanatan'}</div>
                </div>
            </div>
            {data.clusterName && (
                <div
                    className="absolute -top-3 -right-2 bg-saffron text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm cursor-pointer hover:bg-orange-600 transition-colors"
                    onClick={(e) => {
                        e.stopPropagation();
                        data.onToggleCluster(data.clusterName);
                    }}
                    title="Collapse Dynasty"
                >
                    {data.clusterName} ▾
                </div>
            )}
            <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-gold border-2 border-white" />
        </div>
    );
};

// --- Collapsed Cluster Node ---
const ClusterNode = ({ data, selected }) => {
    return (
        <div className={`relative px-4 py-3 shadow-xl rounded-xl bg-gradient-to-br from-cream to-gold/20 border-2 transition-all duration-300 w-[220px] flex flex-col items-center justify-center h-[100px] ${selected ? 'border-saffron ring-4 ring-saffron/20 shadow-saffron/30 scale-105' : 'border-gold'}`}>
            <Handle type="target" position={Position.Top} className="w-3 h-3 bg-gold border-2 border-white" />
            <Layers className="text-saffron mb-1" size={24} />
            <div className="text-sm font-bold text-charcoal truncate w-full text-center">{data.clusterName}</div>
            <div className="text-xs text-maroon/80">{data.nodeCount} Characters</div>
            <button
                className="absolute -bottom-3 bg-white text-saffron border border-saffron text-[10px] px-3 py-0.5 rounded-full font-bold shadow-sm cursor-pointer hover:bg-saffron hover:text-white transition-colors"
                onClick={(e) => {
                    e.stopPropagation();
                    data.onToggleCluster(data.clusterName);
                }}
            >
                Expand ▴
            </button>
            <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-gold border-2 border-white" />
        </div>
    );
};

const nodeTypes = {
    character: CharacterNode,
    cluster: ClusterNode
};

// --- Header Navigation with Breadcrumbs ---
const Header = ({ onHomeClick, breadcrumbs }) => (
    <div className="absolute top-0 left-0 w-full h-16 bg-white/90 backdrop-blur-md shadow-sm border-b border-gold/20 flex items-center justify-between px-6 z-50">
        <div className="flex items-center gap-4">
            <button onClick={onHomeClick} className="p-2 text-charcoal hover:text-saffron transition-colors rounded-full hover:bg-cream">
                <Home size={20} />
            </button>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="font-bold text-lg text-maroon tracking-wide">ITIHAS<span className="text-saffron">PURAN</span></div>

            {/* Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 && (
                <div className="hidden md:flex items-center ml-4 gap-2 text-sm text-gray-500 bg-cream px-4 py-1.5 rounded-full border border-gold/30">
                    {breadcrumbs.map((b, i) => (
                        <React.Fragment key={b.id}>
                            <span className={i === breadcrumbs.length - 1 ? "font-semibold text-saffron" : "text-gray-500"}>
                                {b.name}
                            </span>
                            {i < breadcrumbs.length - 1 && <ChevronRight size={14} className="text-gray-400" />}
                        </React.Fragment>
                    ))}
                </div>
            )}
        </div>

        <div className="flex-1 max-w-md mx-8 justify-end flex">
            <div className="relative flex items-center w-full max-w-sm">
                <Search className="absolute left-3 text-gray-400" size={18} />
                <input
                    type="text"
                    placeholder="Search character, yuga..."
                    className="w-full pl-10 pr-4 py-2 rounded-full bg-cream border border-gold/30 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron text-sm transition-all"
                />
            </div>
        </div>
    </div>
);

// --- Side Drawer (Info Panel) ---
const InfoDrawer = ({ node, onClose }) => {
    if (!node) return null;
    const { data } = node;

    return (
        <div className="absolute top-16 right-0 w-96 h-[calc(100vh-64px)] glass-panel z-40 flex flex-col transform transition-transform duration-300 ease-in-out border-l border-gold/30" style={{ background: 'rgba(255, 249, 240, 0.85)', backdropFilter: 'blur(12px)' }}>
            <div className="relative h-48 bg-gradient-to-b from-saffron/20 to-cream flex items-center justify-center border-b border-gold/20">
                <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded-full text-gray-600 transition-colors">
                    <X size={18} />
                </button>
                <div className="w-24 h-24 rounded-full bg-white shadow-lg border-4 border-gold flex items-center justify-center overflow-hidden">
                     {data.imageUrl ? (
                        <img src={data.imageUrl} alt={data.name} className="w-full h-full object-cover" />
                    ) : (
                        <User className="text-saffron/50" size={48} />
                    )}
                </div>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
                <div className="mb-6 text-center">
                    <h2 className="text-2xl font-bold text-maroon mb-1">{data.name || data.clusterName}</h2>
                    {data.title && <p className="text-sm font-medium text-saffron uppercase tracking-wider">{data.title}</p>}
                    <div className="flex flex-wrap justify-center gap-2 mt-3">
                        {data.vansh && <span className="text-xs px-2 py-1 bg-white border border-gold/50 rounded-full text-gray-600 shadow-sm">{data.vansh}</span>}
                        {data.yug && <span className="text-xs px-2 py-1 bg-white border border-gold/50 rounded-full text-gray-600 shadow-sm">{data.yug}</span>}
                    </div>
                </div>
                {data.parichay && (
                    <div className="mb-6">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                            <BookOpen size={14} /> Description
                        </h3>
                        <p className="text-sm text-charcoal leading-relaxed">
                            {data.parichay}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

// ==========================================
// MAIN APPLICATION
// ==========================================
const MapApp = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [selectedNode, setSelectedNode] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [collapsedClusters, setCollapsedClusters] = useState(new Set());
    const [breadcrumbs, setBreadcrumbs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({ yuga: '', dynasty: '' });

    const toggleCluster = useCallback((clusterName) => {
        setCollapsedClusters(prev => {
            const next = new Set(prev);
            if (next.has(clusterName)) next.delete(clusterName);
            else next.add(clusterName);
            return next;
        });
        setSelectedNode(null);
    }, []);

    useEffect(() => {

        const initData = () => {
            if (window.HistoricDB) {
                const rawData = window.HistoricDB.getAll();

                // Filter data based on search and dropdowns
                let filteredData = rawData;
                if (searchQuery) {
                    const lowerQ = searchQuery.toLowerCase();
                    filteredData = rawData.filter(d =>
                        d.name?.toLowerCase().includes(lowerQ) ||
                        d.aliases?.some(a => a.toLowerCase().includes(lowerQ))
                    );

                    // Always include parents of matched nodes so tree doesn't break entirely, simple approach
                    const parentsToInclude = new Set();
                    filteredData.forEach(d => {
                        let curr = d;
                        while(curr && curr.parent) {
                            parentsToInclude.add(String(curr.parent));
                            curr = rawData.find(r => String(r.id) === String(curr.parent));
                        }
                    });
                    rawData.forEach(d => {
                        if (parentsToInclude.has(String(d.id)) && !filteredData.find(fd => fd.id === d.id)) {
                            filteredData.push(d);
                        }
                    });
                }

                if (filters.yuga) {
                    filteredData = filteredData.filter(d => !d.yug || d.yug === filters.yuga);
                }

                if (filters.dynasty) {
                    filteredData = filteredData.filter(d => !d.vansh || d.vansh === filters.dynasty);
                }

                const rfEdges = [];
                const activeNodes = new Map();
                const clusterMap = new Map();

                // Build cluster map
                filteredData.forEach(item => {
                    if (item.clusterName) {
                        if (!clusterMap.has(item.clusterName)) {
                            clusterMap.set(item.clusterName, []);
                        }
                        clusterMap.get(item.clusterName).push(item);
                    }
                });

                // 2. Build nodes list
                filteredData.forEach(item => {
                    if (item.clusterName && collapsedClusters.has(item.clusterName)) {
                        const cName = item.clusterName;
                        if (!activeNodes.has(`cluster-${cName}`)) {
                            activeNodes.set(`cluster-${cName}`, {
                                id: `cluster-${cName}`,
                                type: 'cluster',
                                data: {
                                    clusterName: cName,
                                    nodeCount: clusterMap.get(cName).length,
                                    onToggleCluster: toggleCluster
                                }
                            });
                        }
                    } else {
                        // Normal node
                        activeNodes.set(String(item.id), {
                            id: String(item.id),
                            type: 'character',
                            data: {
                                ...item,
                                onToggleCluster: toggleCluster
                            }
                        });
                    }
                });

                // 3. Build edges
                filteredData.forEach(item => {
                    if (item.parent) {
                        const sourceId = String(item.parent);
                        const targetId = String(item.id);

                        const sourceItem = rawData.find(d => String(d.id) === sourceId);
                        const targetItem = item;

                        const activeSourceId = (sourceItem && sourceItem.clusterName && collapsedClusters.has(sourceItem.clusterName))
                            ? `cluster-${sourceItem.clusterName}`
                            : sourceId;

                        const activeTargetId = (targetItem.clusterName && collapsedClusters.has(targetItem.clusterName))
                            ? `cluster-${targetItem.clusterName}`
                            : targetId;

                        if (activeSourceId !== activeTargetId && activeNodes.has(activeSourceId) && activeNodes.has(activeTargetId)) {
                            const edgeId = `e-${activeSourceId}-${activeTargetId}`;
                            if (!rfEdges.some(e => e.id === edgeId)) {
                                rfEdges.push({
                                    id: edgeId,
                                    source: activeSourceId,
                                    target: activeTargetId,
                                    type: 'default',
                                    animated: false,
                                    className: '',
                                    markerEnd: {
                                        type: MarkerType.ArrowClosed,
                                        color: '#A0A0A0',
                                    },
                                });
                            }
                        }
                    }
                });
// 4. Run Dagre Layout
                const dagreGraph = new dagre.graphlib.Graph();
                dagreGraph.setDefaultEdgeLabel(() => ({}));
                dagreGraph.setGraph({ rankdir: 'TB', nodesep: 100, ranksep: 150 });

                Array.from(activeNodes.values()).forEach((node) => {
                    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
                });

                rfEdges.forEach((edge) => {
                    dagreGraph.setEdge(edge.source, edge.target);
                });

                dagre.layout(dagreGraph);

                const layoutedNodes = Array.from(activeNodes.values()).map((node) => {
                    const nodeWithPosition = dagreGraph.node(node.id);
                    node.targetPosition = Position.Top;
                    node.sourcePosition = Position.Bottom;
                    node.position = {
                        x: nodeWithPosition.x - nodeWidth / 2,
                        y: nodeWithPosition.y - nodeHeight / 2,
                    };
                    return node;
                });

                // Calculate visual container boxes for expanded clusters
                const expandedClustersMap = new Map();
                layoutedNodes.forEach(n => {
                    if (n.type === 'character' && n.data.clusterName && !collapsedClusters.has(n.data.clusterName)) {
                        const cName = n.data.clusterName;
                        if (!expandedClustersMap.has(cName)) expandedClustersMap.set(cName, []);
                        expandedClustersMap.get(cName).push(n);
                    }
                });

                // Add bounding box nodes for expanded clusters
                expandedClustersMap.forEach((cNodes, cName) => {
                    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
                    cNodes.forEach(n => {
                        if (n.position.x < minX) minX = n.position.x;
                        if (n.position.y < minY) minY = n.position.y;
                        if (n.position.x + nodeWidth > maxX) maxX = n.position.x + nodeWidth;
                        if (n.position.y + nodeHeight > maxY) maxY = n.position.y + nodeHeight;
                    });

                    const padding = 50;
                    layoutedNodes.unshift({
                        id: `group-${cName}`,
                        type: 'default',
                        position: { x: minX - padding, y: minY - padding - 40 },
                        style: {
                            width: maxX - minX + padding * 2,
                            height: maxY - minY + padding * 2 + 40,
                            backgroundColor: 'rgba(255, 153, 51, 0.05)',
                            border: '2px dashed rgba(212, 175, 55, 0.5)',
                            borderRadius: '16px',
                            zIndex: -1,
                            pointerEvents: 'none'
                        },
                        data: { label: <div className="text-saffron font-bold text-xl uppercase tracking-widest">{cName}</div> },
                        draggable: false,
                        selectable: false
                    });
                });

                setNodes(layoutedNodes);
                setEdges(rfEdges);
                setIsLoaded(true);
            } else {
                setTimeout(initData, 100);
            }
        };

        initData();
    }, [setNodes, setEdges, collapsedClusters, toggleCluster, searchQuery, filters]);

    // Calculate Breadcrumbs when a node is selected
    const calculateBreadcrumbs = useCallback((nodeId) => {
        if (!window.HistoricDB) return [];
        const rawData = window.HistoricDB.getAll();
        const path = [];
        let current = rawData.find(d => String(d.id) === String(nodeId));

        while (current) {
            path.unshift({ id: current.id, name: current.name });
            if (!current.parent) break;
            current = rawData.find(d => String(d.id) === String(current.parent));
        }
        return path;
    }, []);


    const handleSearch = useCallback((q) => {
        setSearchQuery(q);
    }, []);

    const handleFilterChange = useCallback((type, value) => {
        setFilters(prev => ({ ...prev, [type]: value }));
    }, []);

    const handleExpandAll = useCallback(() => {
        setCollapsedClusters(new Set()); // Clear all collapsed clusters
    }, []);

    const onNodeClick = useCallback((event, node) => {
        if (node.id.startsWith('group-')) return;

        setSelectedNode(node);

        if (node.type === 'character') {
            setBreadcrumbs(calculateBreadcrumbs(node.id));
        }

        setEdges((eds) =>
            eds.map((edge) => {
                const isConnected = edge.source === node.id || edge.target === node.id;
                edge.className = isConnected ? 'glow' : '';
                edge.animated = isConnected;
                edge.markerEnd = { ...edge.markerEnd, color: isConnected ? '#D4AF37' : '#A0A0A0' };
                return edge;
            })
        );
    }, [setEdges, calculateBreadcrumbs]);

    const onPaneClick = useCallback(() => {
        setSelectedNode(null);
        setBreadcrumbs([]);
        setEdges((eds) => eds.map(e => {
            e.className = '';
            e.animated = false;
            e.markerEnd = { ...e.markerEnd, color: '#A0A0A0' };
            return e;
        }));
    }, [setEdges]);

    if (!isLoaded) return <div className="w-full h-full flex items-center justify-center text-saffron font-bold animate-pulse">Loading Sanatan Lineages...</div>;

    return (
        <div className="w-full h-full relative">
            <Header
                onHomeClick={() => window.location.href='../index.html'}
                breadcrumbs={breadcrumbs}
                onSearch={handleSearch}
                onFilterChange={handleFilterChange}
                onExpandAll={handleExpandAll}
            />
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onNodeClick={onNodeClick}
                onPaneClick={onPaneClick}
                nodeTypes={nodeTypes}
                fitView
                minZoom={0.05}
                maxZoom={2}
                className="pt-16"
            >
                <Background color="#D4AF37" gap={30} size={1} opacity={0.15} />
                <Controls className="mb-4 ml-4 shadow-lg border border-gold/20 rounded-md overflow-hidden bg-white" showInteractive={false} />
                <MiniMap
                    nodeColor={(n) => {
                        if (n.type === 'cluster') return '#D4AF37';
                        if (n.data?.vansh === 'सूर्यवंश') return '#FF9933';
                        if (n.data?.vansh === 'चंद्रवंश') return '#4169E1';
                        return '#D4AF37';
                    }}
                    nodeStrokeWidth={3}
                    maskColor="rgba(255, 249, 240, 0.7)"
                    className="border-2 border-gold/30 rounded-lg shadow-xl mb-4 mr-4 bg-white"
                />
            </ReactFlow>
            <InfoDrawer node={selectedNode} onClose={() => setSelectedNode(null)} />
        </div>
    );
};

const container = document.getElementById('react-root');
const root = createRoot(container);
root.render(<MapApp />);
