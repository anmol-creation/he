import React, { useState, useEffect, useCallback, useMemo } from "react";
import { createRoot } from "react-dom/client";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
  MarkerType,
} from "reactflow";
import dagre from "dagre";
import {
  Home,
  Search,
  Map as MapIcon,
  X,
  Maximize,
  User,
  BookOpen,
  ChevronRight,
  Layers,
  Users,
  Maximize2,
  History,
} from "lucide-react";

const nodeWidth = 220;
const nodeHeight = 100;

// --- Divine Loading Screen Overlay ---
const DivineLoader = ({ isLoading }) => {
  const [visible, setVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (!isLoading) {
      setOpacity(0);
      const timer = setTimeout(() => setVisible(false), 500); // Wait for fade out transition
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream transition-opacity duration-500"
      style={{ opacity: opacity }}
    >
      <div className="flex flex-col items-center max-w-lg w-full px-6">
        <div className="relative w-full h-32 flex items-center mb-8">
          {/* SVG Animation of Lord Rama Firing Arrow */}
          <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="arrowTrail" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fff9f0" stopOpacity="0" />
                <stop offset="50%" stopColor="#FF9933" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FFD700" stopOpacity="1" />
              </linearGradient>

              <style>
                {`
                                @keyframes drawBow {
                                    0% { d: path('M 50 20 Q 70 50 50 80 L 50 20'); }
                                    40% { d: path('M 50 20 Q 30 50 50 80 L 50 20'); }
                                    50% { d: path('M 50 20 Q 70 50 50 80 L 50 20'); }
                                    100% { d: path('M 50 20 Q 70 50 50 80 L 50 20'); }
                                }
                                @keyframes fireArrow {
                                    0% { transform: translateX(0); opacity: 0; }
                                    10% { transform: translateX(0); opacity: 1; }
                                    40% { transform: translateX(-20px); opacity: 1; } /* Draw back */
                                    50% { transform: translateX(350px); opacity: 1; } /* Fire */
                                    55% { transform: translateX(380px); opacity: 0; } /* Fade out */
                                    100% { transform: translateX(380px); opacity: 0; }
                                }
                                @keyframes progressGlow {
                                    0% { transform: scaleX(0); opacity: 0; }
                                    40% { transform: scaleX(0); opacity: 0; }
                                    50% { transform: scaleX(1); opacity: 1; }
                                    100% { transform: scaleX(1); opacity: 0; }
                                }
                                .bow-string { animation: drawBow 1.5s infinite; }
                                .golden-arrow { animation: fireArrow 1.5s infinite; }
                                .progress-trail { animation: progressGlow 1.5s infinite; transform-origin: left; }
                                `}
              </style>
            </defs>

            {/* Base Line */}
            <line
              x1="60"
              y1="50"
              x2="380"
              y2="50"
              stroke="#E2E8F0"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Progress Line Glow effect behind arrow */}
            <line
              x1="60"
              y1="50"
              x2="380"
              y2="50"
              stroke="url(#arrowTrail)"
              strokeWidth="3"
              className="progress-trail"
            />

            {/* Silhouette of Lord Rama (Minimalist) */}
            <g fill="#FF9933" transform="translate(15, 25)">
              <circle cx="20" cy="10" r="8" /> {/* Head */}
              <path d="M15 18 L25 18 L30 35 L35 55 L30 55 L25 40 L15 55 L10 55 L15 35 Z" />{" "}
              {/* Body/Legs */}
              <path d="M15 20 L5 35 L10 40 L20 25 Z" /> {/* Arm pulling bow */}
              <path d="M25 20 L40 25 L35 30 L25 25 Z" /> {/* Arm holding bow */}
            </g>

            {/* The Bow */}
            <path
              d="M 50 20 Q 70 50 50 80 L 50 20"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="3"
              className="bow-string"
            />

            {/* The Golden Arrow */}
            <g className="golden-arrow">
              <line
                x1="30"
                y1="50"
                x2="60"
                y2="50"
                stroke="#FFD700"
                strokeWidth="2"
              />
              <polygon points="60,47 65,50 60,53" fill="#FFD700" />
              <polygon points="30,48 35,50 30,52" fill="#FF9933" />
            </g>
          </svg>
        </div>

        <h1
          className="text-3xl font-bold text-saffron mb-2"
          style={{ fontFamily: "'Libre Caslon Text', serif" }}
        >
          Awakening Lineages
        </h1>
        <p
          className="text-maroon/70 text-sm italic text-center"
          style={{ fontFamily: "'Libre Caslon Text', serif" }}
        >
          "The string is drawn, the arrow of time flies... tracing the
          descendants of the Sun and the Moon."
        </p>
      </div>
    </div>
  );
};

// ==========================================
// CUSTOM COMPONENTS

// ==========================================

// --- Custom Node (Spiritual Modern Card) ---
const CharacterNode = ({ data, selected }) => {
  return (
    <div
      className={`relative px-4 py-3 shadow-lg rounded-xl bg-white border-2 transition-all duration-300 w-[220px] ${selected ? "border-saffron ring-4 ring-saffron/20 shadow-saffron/30 scale-105" : "border-gold/50"}`}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-gold border-2 border-white"
      />
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-saffron flex-shrink-0 bg-cream flex items-center justify-center">
          {data.imageUrl ? (
            <img
              src={data.imageUrl}
              alt={data.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="text-saffron opacity-50" size={24} />
          )}
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <div
            className="text-sm font-bold text-charcoal truncate"
            title={data.name}
          >
            {data.name}
          </div>
          <div className="text-xs text-maroon/80 truncate">
            {data.title || data.vansh || "Sanatan"}
          </div>
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
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-gold border-2 border-white"
      />
    </div>
  );
};

// --- Collapsed Cluster Node ---
const ClusterNode = ({ data, selected }) => {
  return (
    <div
      className={`relative px-4 py-3 shadow-xl rounded-xl bg-gradient-to-br from-cream to-gold/20 border-2 transition-all duration-300 w-[220px] flex flex-col items-center justify-center h-[100px] ${selected ? "border-saffron ring-4 ring-saffron/20 shadow-saffron/30 scale-105" : "border-gold"}`}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-gold border-2 border-white"
      />
      <Layers className="text-saffron mb-1" size={24} />
      <div className="text-sm font-bold text-charcoal truncate w-full text-center">
        {data.clusterName}
      </div>
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
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-gold border-2 border-white"
      />
    </div>
  );
};

const nodeTypes = {
  character: CharacterNode,
  cluster: ClusterNode,
};

// --- Header Navigation with Breadcrumbs ---

const Header = ({
  onHomeClick,
  breadcrumbs,
  onSearch,
  onFilterChange,
  onExpandAll,
}) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 min-h-[64px] bg-cream border-b border-gold/20 shadow-sm z-[100] flex flex-wrap items-center px-2 sm:px-4 py-3 justify-between gap-y-3"
      style={{
        background: "rgba(255, 249, 240, 0.95)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={onHomeClick}
          className="p-2 hover:bg-saffron/10 rounded-lg text-maroon transition-colors"
          title="Home"
        >
          <Home size={20} />
        </button>
        <div className="h-6 w-px bg-gold/30"></div>

        {/* Route Breadcrumbs */}
        <div className="hidden md:flex items-center gap-2 text-sm overflow-hidden whitespace-nowrap max-w-md">
          {breadcrumbs && breadcrumbs.length > 0 ? (
            breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={crumb.id}>
                <span
                  className={
                    idx === breadcrumbs.length - 1
                      ? "font-bold text-saffron"
                      : "text-maroon/60"
                  }
                >
                  {crumb.name}
                </span>
                {idx < breadcrumbs.length - 1 && (
                  <ChevronRight size={14} className="text-gold/50" />
                )}
              </React.Fragment>
            ))
          ) : (
            <span className="text-maroon/40 italic">
              Select a character to view lineage route
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:gap-4 w-full md:w-auto justify-between md:justify-end">
        {/* Mythology Filters */}
        <select
          onChange={(e) =>
            onFilterChange && onFilterChange("yuga", e.target.value)
          }
          className="bg-white/50 border border-gold/30 rounded-lg px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-maroon focus:outline-none focus:border-saffron"
        >
          <option value="">All Yugas</option>
          <option value="Satya Yug">Satya Yuga</option>
          <option value="Treta Yug">Treta Yuga</option>
          <option value="Dvapara Yug">Dvapara Yuga</option>
          <option value="Kali Yug">Kali Yuga</option>
        </select>

        <select
          onChange={(e) =>
            onFilterChange && onFilterChange("dynasty", e.target.value)
          }
          className="bg-white/50 border border-gold/30 rounded-lg px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-maroon focus:outline-none focus:border-saffron"
        >
          <option value="">All Dynasties</option>
          <option value="सूर्यवंश">Suryavansha</option>
          <option value="चंद्रवंश">Chandravansha</option>
        </select>

        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/60"
            size={16}
          />
          <input
            type="text"
            placeholder="Search character..."
            onChange={(e) => onSearch && onSearch(e.target.value)}
            className="pl-9 pr-4 py-1.5 bg-white/50 border border-gold/30 rounded-full text-sm text-maroon focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron w-full sm:w-64 transition-all"
          />
        </div>

        {/* Full Expand Map Toggle */}
        <button
          onClick={onExpandAll}
          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 bg-saffron/10 text-saffron border border-saffron/30 rounded-lg hover:bg-saffron hover:text-white transition-colors text-xs sm:text-sm font-medium"
        >
          <Maximize2 size={16} />{" "}
          <span className="hidden sm:inline">Expand Map</span>
        </button>

        <div className="h-6 w-px bg-gold/30 mx-1"></div>

        {/* Switch to Classic Map */}
        <button
          onClick={() => (window.location.href = "historic-map.html")}
          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 bg-charcoal/5 text-charcoal border border-charcoal/20 rounded-lg hover:bg-charcoal hover:text-white transition-colors text-xs sm:text-sm font-medium"
        >
          <History size={16} />{" "}
          <span className="hidden sm:inline">Classic Map</span>
        </button>
      </div>
    </div>
  );
};

// --- Side Drawer (Info Panel) ---
const InfoDrawer = ({ node, onClose }) => {
  if (!node) return null;
  const { data } = node;

  return (
    <div
      className="absolute top-16 right-0 w-96 h-[calc(100vh-64px)] glass-panel z-40 flex flex-col transform transition-transform duration-300 ease-in-out border-l border-gold/30"
      style={{
        background: "rgba(255, 249, 240, 0.85)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="relative h-48 bg-gradient-to-b from-saffron/20 to-cream flex items-center justify-center border-b border-gold/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded-full text-gray-600 transition-colors"
        >
          <X size={18} />
        </button>
        <div className="w-24 h-24 rounded-full bg-white shadow-lg border-4 border-gold flex items-center justify-center overflow-hidden">
          {data.imageUrl ? (
            <img
              src={data.imageUrl}
              alt={data.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="text-saffron/50" size={48} />
          )}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-maroon mb-1">
            {data.name || data.clusterName}
          </h2>
          {data.title && (
            <p className="text-sm font-medium text-saffron uppercase tracking-wider">
              {data.title}
            </p>
          )}
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {data.vansh && (
              <span className="text-xs px-2 py-1 bg-white border border-gold/50 rounded-full text-gray-600 shadow-sm">
                {data.vansh}
              </span>
            )}
            {data.yug && (
              <span className="text-xs px-2 py-1 bg-white border border-gold/50 rounded-full text-gray-600 shadow-sm">
                {data.yug}
              </span>
            )}
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
  const [clustersInitialized, setClustersInitialized] = useState(false);

  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({ yuga: "", dynasty: "" });

  const toggleCluster = useCallback((clusterName) => {
    setCollapsedClusters((prev) => {
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

        // Initialize all clusters as collapsed on first load
        if (!clustersInitialized) {
          const allClusters = new Set();
          rawData.forEach((d) => {
            if (d.clusterName) allClusters.add(d.clusterName);
          });
          setCollapsedClusters(allClusters);
          setClustersInitialized(true);
          return; // Return early, the state update will trigger re-render and run initData again with the correct clusters
        }

        // Filter data based on search and dropdowns
        let filteredData = rawData;
        if (searchQuery) {
          const lowerQ = searchQuery.toLowerCase();
          filteredData = rawData.filter((d) => {
            let textMatch =
              d.name?.toLowerCase().includes(lowerQ) ||
              d.id?.toLowerCase().includes(lowerQ) ||
              d.nameEn?.toLowerCase().includes(lowerQ) ||
              d.subtitle?.toLowerCase().includes(lowerQ) ||
              d.aliases?.some((a) => a.toLowerCase().includes(lowerQ)) ||
              d.tags?.some((t) => t.toLowerCase().includes(lowerQ));

            if (textMatch) return true;

            const qParts = lowerQ.split(/\s+/);
            if (qParts.length > 1) {
              let fatherName = d.parent
                ? (
                    rawData.find((r) => r.id === d.parent)?.name || ""
                  ).toLowerCase()
                : "";
              let motherName = d.mother
                ? (
                    rawData.find((r) => r.id === d.mother)?.name || ""
                  ).toLowerCase()
                : "";
              let spouseNames = "";
              if (d.spouse) {
                const spouses = Array.isArray(d.spouse) ? d.spouse : [d.spouse];
                spouseNames = spouses
                  .map((s) => rawData.find((r) => r.id === s)?.name || "")
                  .join(" ")
                  .toLowerCase();
              }

              const hasWifeKeyword =
                lowerQ.includes("patni") ||
                lowerQ.includes("पत्नी") ||
                lowerQ.includes("wife");
              const hasPitaKeyword =
                lowerQ.includes("pita") ||
                lowerQ.includes("पिता") ||
                lowerQ.includes("father") ||
                lowerQ.includes("putra") ||
                lowerQ.includes("पुत्र");
              const hasMataKeyword =
                lowerQ.includes("mata") ||
                lowerQ.includes("माता") ||
                lowerQ.includes("mother") ||
                lowerQ.includes("maa") ||
                lowerQ.includes("माँ");

              if (hasWifeKeyword && spouseNames) {
                if (
                  d.gender === "female" &&
                  qParts.some(
                    (p) =>
                      p.length > 2 &&
                      spouseNames.includes(p) &&
                      !["patni", "पत्नी", "wife"].includes(p),
                  )
                ) {
                  return true;
                }
              }

              if (hasPitaKeyword && fatherName) {
                if (
                  qParts.some(
                    (p) =>
                      p.length > 2 &&
                      fatherName.includes(p) &&
                      !["pita", "पिता", "father", "putra", "पुत्र"].includes(p),
                  )
                ) {
                  return true;
                }
              }

              if (hasMataKeyword && motherName) {
                if (
                  qParts.some(
                    (p) =>
                      p.length > 2 &&
                      motherName.includes(p) &&
                      !["mata", "माता", "mother", "maa", "माँ"].includes(p),
                  )
                ) {
                  return true;
                }
              }
            }

            return false;
          });

          // Sort so that exact matches and prominent figures get drawn properly or are more likely to be seen easily
          // But in React Flow, order in array mostly affects rendering order (z-index), but we can still sort.
          filteredData.sort((a, b) => {
            const aName = a.name ? a.name.toLowerCase() : "";
            const bName = b.name ? b.name.toLowerCase() : "";
            const aNameEn = a.nameEn ? a.nameEn.toLowerCase() : "";
            const bNameEn = b.nameEn ? b.nameEn.toLowerCase() : "";
            const aId = a.id ? a.id.toLowerCase() : "";
            const bId = b.id ? b.id.toLowerCase() : "";

            const isAExact =
              aName === lowerQ ||
              aNameEn === lowerQ ||
              aId === lowerQ ||
              (a.aliases &&
                a.aliases.some((al) => al.toLowerCase() === lowerQ));
            const isBExact =
              bName === lowerQ ||
              bNameEn === lowerQ ||
              bId === lowerQ ||
              (b.aliases &&
                b.aliases.some((al) => al.toLowerCase() === lowerQ));

            if (isAExact && !isBExact) return -1;
            if (!isAExact && isBExact) return 1;

            if (a.isProminent && !b.isProminent) return -1;
            if (!a.isProminent && b.isProminent) return 1;

            const isAStart =
              aName.startsWith(lowerQ) || aNameEn.startsWith(lowerQ);
            const isBStart =
              bName.startsWith(lowerQ) || bNameEn.startsWith(lowerQ);

            if (isAStart && !isBStart) return -1;
            if (!isAStart && isBStart) return 1;

            return 0;
          });

          // Always include parents of matched nodes so tree doesn't break entirely, simple approach
          const parentsToInclude = new Set();
          filteredData.forEach((d) => {
            let curr = d;
            while (curr && curr.parent) {
              parentsToInclude.add(String(curr.parent));
              curr = rawData.find((r) => String(r.id) === String(curr.parent));
            }
          });
          rawData.forEach((d) => {
            if (
              parentsToInclude.has(String(d.id)) &&
              !filteredData.find((fd) => fd.id === d.id)
            ) {
              filteredData.push(d);
            }
          });

          // Expand ONLY the clusters that are in the direct lineage of the matched nodes
          const clustersToKeepOpen = new Set();

          filteredData.forEach((d) => {
             // Find original node
             let curr = rawData.find(r => r.id === d.id);
             if (curr && curr.clusterName) {
                 clustersToKeepOpen.add(curr.clusterName);
             }

             // Traverse parents to root
             while (curr && curr.parent) {
                 const parentId = curr.parent;
                 curr = rawData.find(r => r.id === parentId);
                 if (curr && curr.clusterName) {
                     clustersToKeepOpen.add(curr.clusterName);
                 }
             }
          });

          // Collapse all clusters EXCEPT the ones in the direct lineage
          setCollapsedClusters(prev => {
              const allClusters = new Set();
              rawData.forEach(d => {
                  if (d.clusterName) allClusters.add(d.clusterName);
              });

              const newCollapsed = new Set();
              for (const cluster of allClusters) {
                  if (!clustersToKeepOpen.has(cluster)) {
                      newCollapsed.add(cluster);
                  }
              }
              return newCollapsed;
          });
        }


        if (filters.yuga) {
          filteredData = filteredData.filter(
            (d) => !d.yug || d.yug === filters.yuga,
          );
        }

        if (filters.dynasty) {
          filteredData = filteredData.filter(
            (d) => !d.vansh || d.vansh === filters.dynasty,
          );
        }

        const rfEdges = [];
        const activeNodes = new Map();
        const clusterMap = new Map();

        // Build cluster map
        filteredData.forEach((item) => {
          if (item.clusterName) {
            if (!clusterMap.has(item.clusterName)) {
              clusterMap.set(item.clusterName, []);
            }
            clusterMap.get(item.clusterName).push(item);
          }
        });

        // 2. Build nodes list
        filteredData.forEach((item) => {
          if (item.clusterName && collapsedClusters.has(item.clusterName)) {
            const cName = item.clusterName;
            if (!activeNodes.has(`cluster-${cName}`)) {
              activeNodes.set(`cluster-${cName}`, {
                id: `cluster-${cName}`,
                type: "cluster",
                data: {
                  clusterName: cName,
                  nodeCount: clusterMap.get(cName).length,
                  onToggleCluster: toggleCluster,
                },
              });
            }
          } else {
            // Normal node
            activeNodes.set(String(item.id), {
              id: String(item.id),
              type: "character",
              data: {
                ...item,
                onToggleCluster: toggleCluster,
              },
            });
          }
        });

        // 3. Build edges
        filteredData.forEach((item) => {
          if (item.parent) {
            const sourceId = String(item.parent);
            const targetId = String(item.id);

            const sourceItem = rawData.find((d) => String(d.id) === sourceId);
            const targetItem = item;

            const activeSourceId =
              sourceItem &&
              sourceItem.clusterName &&
              collapsedClusters.has(sourceItem.clusterName)
                ? `cluster-${sourceItem.clusterName}`
                : sourceId;

            const activeTargetId =
              targetItem.clusterName &&
              collapsedClusters.has(targetItem.clusterName)
                ? `cluster-${targetItem.clusterName}`
                : targetId;

            if (
              activeSourceId !== activeTargetId &&
              activeNodes.has(activeSourceId) &&
              activeNodes.has(activeTargetId)
            ) {
              const edgeId = `e-${activeSourceId}-${activeTargetId}`;
              if (!rfEdges.some((e) => e.id === edgeId)) {
                rfEdges.push({
                  id: edgeId,
                  source: activeSourceId,
                  target: activeTargetId,
                  type: "default",
                  animated: false,
                  className: "",
                  markerEnd: {
                    type: MarkerType.ArrowClosed,
                    color: "#A0A0A0",
                  },
                });
              }
            }
          }
        });
        // 4. Run Dagre Layout
        const dagreGraph = new dagre.graphlib.Graph();
        dagreGraph.setDefaultEdgeLabel(() => ({}));
        dagreGraph.setGraph({ rankdir: "TB", nodesep: 100, ranksep: 150 });

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
        layoutedNodes.forEach((n) => {
          if (
            n.type === "character" &&
            n.data.clusterName &&
            !collapsedClusters.has(n.data.clusterName)
          ) {
            const cName = n.data.clusterName;
            if (!expandedClustersMap.has(cName))
              expandedClustersMap.set(cName, []);
            expandedClustersMap.get(cName).push(n);
          }
        });

        // Add bounding box nodes for expanded clusters
        expandedClustersMap.forEach((cNodes, cName) => {
          let minX = Infinity,
            minY = Infinity,
            maxX = -Infinity,
            maxY = -Infinity;
          cNodes.forEach((n) => {
            if (n.position.x < minX) minX = n.position.x;
            if (n.position.y < minY) minY = n.position.y;
            if (n.position.x + nodeWidth > maxX)
              maxX = n.position.x + nodeWidth;
            if (n.position.y + nodeHeight > maxY)
              maxY = n.position.y + nodeHeight;
          });

          const padding = 50;
          layoutedNodes.unshift({
            id: `group-${cName}`,
            type: "default",
            position: { x: minX - padding, y: minY - padding - 40 },
            style: {
              width: maxX - minX + padding * 2,
              height: maxY - minY + padding * 2 + 40,
              backgroundColor: "rgba(255, 153, 51, 0.05)",
              border: "2px dashed rgba(212, 175, 55, 0.5)",
              borderRadius: "16px",
              zIndex: -1,
              pointerEvents: "none",
            },
            data: {
              label: (
                <div className="text-saffron font-bold text-xl uppercase tracking-widest">
                  {cName}
                </div>
              ),
            },
            draggable: false,
            selectable: false,
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
  }, [
    setNodes,
    setEdges,
    collapsedClusters,
    toggleCluster,
    searchQuery,
    filters,
    clustersInitialized,
  ]);

  // Calculate Breadcrumbs when a node is selected
  const calculateBreadcrumbs = useCallback((nodeId) => {
    if (!window.HistoricDB) return [];
    const rawData = window.HistoricDB.getAll();
    const path = [];
    let current = rawData.find((d) => String(d.id) === String(nodeId));

    while (current) {
      path.unshift({ id: current.id, name: current.name });
      if (!current.parent) break;
      current = rawData.find((d) => String(d.id) === String(current.parent));
    }
    return path;
  }, []);

  const handleSearch = useCallback((q) => {
    setSearchQuery(q);
  }, []);

  const handleFilterChange = useCallback((type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  }, []);

  const handleExpandAll = useCallback(() => {
    setCollapsedClusters(new Set()); // Clear all collapsed clusters
  }, []);

  const onNodeClick = useCallback(
    (event, node) => {
      if (node.id.startsWith("group-")) return;

      setSelectedNode(node);

      if (node.type === "character") {
        setBreadcrumbs(calculateBreadcrumbs(node.id));
      }

      setEdges((eds) =>
        eds.map((edge) => {
          const isConnected =
            edge.source === node.id || edge.target === node.id;
          edge.className = isConnected ? "glow" : "";
          edge.animated = isConnected;
          edge.markerEnd = {
            ...edge.markerEnd,
            color: isConnected ? "#D4AF37" : "#A0A0A0",
          };
          return edge;
        }),
      );
    },
    [setEdges, calculateBreadcrumbs],
  );

  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
    setBreadcrumbs([]);
    setEdges((eds) =>
      eds.map((e) => {
        e.className = "";
        e.animated = false;
        e.markerEnd = { ...e.markerEnd, color: "#A0A0A0" };
        return e;
      }),
    );
  }, [setEdges]);

  return (
    <div className="w-full h-full relative">
      <DivineLoader isLoading={!isLoaded} />
      <Header
        onHomeClick={() => (window.location.href = "../index.html")}
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
        <Controls
          className="mb-4 ml-4 shadow-lg border border-gold/20 rounded-md overflow-hidden bg-white"
          showInteractive={false}
        />
        <MiniMap
          nodeColor={(n) => {
            if (n.type === "cluster") return "#D4AF37";
            if (n.data?.vansh === "सूर्यवंश") return "#FF9933";
            if (n.data?.vansh === "चंद्रवंश") return "#4169E1";
            return "#D4AF37";
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

const container = document.getElementById("react-root");
const root = createRoot(container);
root.render(<MapApp />);
