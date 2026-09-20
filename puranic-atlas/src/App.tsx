import { useState } from 'react';
import { Layers, Search, ChevronUp, BookOpen, Navigation } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import puranicData from './puranicData.json';

// Fix Leaflet Default Icon Issue in React
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

// Custom Saffron Glowing Icon for Kingdoms
const kingdomIcon = new L.DivIcon({
  className: 'custom-div-icon',
  html: `<div style="width: 16px; height: 16px; background-color: #f97316; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 15px rgba(249,115,22,0.8);"></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8]
});

type Entity = {
  id: string;
  name: string;
  dynasty: string;
  capital: string;
  rulers: string[];
  era: number[];
  coordinates: number[];
  rivers: string[];
  scriptures: { text: string; translation: string; source: string }[];
};

// Component to recenter map when clicking a kingdom
function RecenterMap({ coordinates }: { coordinates: number[] | null }) {
  const map = useMap();
  if (coordinates) {
    map.flyTo([coordinates[0], coordinates[1]] as L.LatLngExpression, 6, {
      duration: 1.5
    });
  }
  return null;
}

function App() {
  const [selectedYuga, setSelectedYuga] = useState(1);
  const [selectedEntity, setSelectedEntity] = useState<Entity | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [activeLayers, setActiveLayers] = useState({
    puranic: true,
    rivers: true,
    modern: true
  });

  const currentYugaData = puranicData.yugas.find(y => y.id === selectedYuga);

  // Filter kingdoms based on era
  const visibleKingdoms = puranicData.kingdoms.filter(k => k.era.includes(selectedYuga));

  const handleEntityClick = (entity: Entity) => {
    setSelectedEntity(entity);
    setIsBottomSheetOpen(true);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-dark text-slate-100 font-sans">
      {/* Top Bar */}
      <header className="h-16 bg-dark-100/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 z-[1000] shadow-lg relative">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-saffron to-saffron-dark flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.3)]">
            <span className="font-indic font-bold text-dark text-xl">ॐ</span>
          </div>
          <h1 className="text-xl tracking-wider hidden sm:block">
            <span className="font-indic font-semibold">इतिहास पुराण</span> <span className="font-light text-saffron tracking-[0.2em] text-sm ml-1">ATLAS</span>
          </h1>
        </div>

        <div className="flex-1 max-w-xl mx-4 lg:mx-12">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-saffron transition-colors" />
            <input
              type="text"
              placeholder="Search kingdoms, rivers, sages... (Ctrl+K)"
              className="w-full bg-dark-200/50 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-saffron/50 focus:bg-dark-200 focus:ring-1 focus:ring-saffron/30 transition-all shadow-inner"
            />
          </div>
        </div>

        <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-white/5 transition-colors lg:hidden">
              <Layers className="w-5 h-5 text-slate-300" />
            </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden bg-[#080b0f] z-0">

        {/* Leaflet Map Canvas */}
        <div className="absolute inset-0 z-0">
            <MapContainer
                center={[22.0, 78.0]}
                zoom={4}
                zoomControl={false}
                style={{ height: '100%', width: '100%', backgroundColor: '#0b0e13' }}
            >
                {/* Dark Base Map */}
                <TileLayer
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    opacity={activeLayers.modern ? 0.7 : 0.2}
                />

                {/* Dynamic Kingdoms */}
                {visibleKingdoms.map(kingdom => (
                    <Marker
                        key={kingdom.id}
                        position={[kingdom.coordinates[0], kingdom.coordinates[1]] as L.LatLngExpression}
                        icon={kingdomIcon}
                        eventHandlers={{
                            click: () => handleEntityClick(kingdom as Entity),
                        }}
                    >
                        <Popup className="puranic-popup">
                            <div className="font-indic font-bold text-lg mb-1">{kingdom.name}</div>
                            <div className="text-xs text-saffron">{kingdom.dynasty}</div>
                        </Popup>
                    </Marker>
                ))}

                <RecenterMap coordinates={isBottomSheetOpen && selectedEntity ? selectedEntity.coordinates : null} />
            </MapContainer>
        </div>

        {/* Coordinates HUD */}
        <div className="absolute bottom-6 left-6 font-mono text-[10px] text-saffron/70 tracking-widest bg-dark/60 px-3 py-1.5 rounded border border-saffron/20 backdrop-blur-sm flex items-center gap-2 z-[400] pointer-events-none">
            <Navigation className="w-3 h-3" />
            CENTER: 22°N, 78°E • {currentYugaData?.name}
        </div>

        {/* Floating Layers Panel (Desktop) */}
        <div className="hidden lg:block absolute top-6 right-6 w-64 bg-dark-100/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl z-[400]">
          <h3 className="font-bold text-sm mb-4 flex items-center gap-2 text-white">
            <Layers className="w-4 h-4 text-saffron" /> Map Layers
          </h3>
          <div className="space-y-3 text-sm text-slate-400">
            {Object.keys(activeLayers).map((layer) => (
                <label key={layer} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                    <input
                        type="checkbox"
                        checked={activeLayers[layer as keyof typeof activeLayers]}
                        onChange={() => setActiveLayers({...activeLayers, [layer]: !activeLayers[layer as keyof typeof activeLayers]})}
                        className="peer appearance-none w-4 h-4 border border-white/20 rounded bg-dark-200 checked:bg-saffron checked:border-saffron transition-all cursor-pointer"
                    />
                    <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="group-hover:text-slate-200 transition-colors capitalize">
                    {layer === 'puranic' ? 'Puranic Bharatavarsha' : layer === 'rivers' ? 'Sacred Rivers & Mts' : 'Modern Borders'}
                </span>
                </label>
            ))}
          </div>
        </div>

        {/* Kingdom Detail Drawer / Bottom Sheet */}
        <AnimatePresence>
            {isBottomSheetOpen && selectedEntity && (
                <motion.div
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '100%', opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="absolute bottom-0 left-0 right-0 lg:left-auto lg:top-6 lg:bottom-auto lg:right-[300px] w-full lg:w-[400px] bg-dark-100/95 backdrop-blur-2xl border-t lg:border border-white/10 rounded-t-3xl lg:rounded-3xl p-6 shadow-2xl z-[500] max-h-[80vh] overflow-y-auto"
                >
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <div className="text-[10px] font-bold tracking-widest text-antiqueGold mb-1">{selectedEntity.dynasty}</div>
                            <h2 className="text-2xl font-bold font-indic text-white">{selectedEntity.name}</h2>
                            <p className="text-sm text-slate-400 mt-1">Capital: <span className="text-slate-200">{selectedEntity.capital}</span></p>
                        </div>
                        <button onClick={() => setIsBottomSheetOpen(false)} className="p-2 rounded-full hover:bg-white/10 text-slate-400 transition-colors">
                            <ChevronUp className="w-5 h-5 lg:rotate-180" />
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Notable Rulers</h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedEntity.rulers.map(ruler => (
                                    <span key={ruler} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-300">{ruler}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Sacred Water Arteries</h4>
                            <p className="text-sm text-celestialBlue">{selectedEntity.rivers.join(', ')}</p>
                        </div>

                        {selectedEntity.scriptures.map((scripture, idx) => (
                            <div key={idx} className="bg-dark-200/50 p-4 rounded-xl border border-white/5 relative overflow-hidden group">
                                <BookOpen className="absolute -right-4 -bottom-4 w-16 h-16 text-white/5 group-hover:text-white/10 transition-colors" />
                                <h4 className="text-xs font-semibold text-saffron mb-2">{scripture.source}</h4>
                                <p className="font-indic text-lg text-white mb-2 leading-relaxed">{scripture.text}</p>
                                <p className="text-xs text-slate-400 italic">"{scripture.translation}"</p>
                            </div>
                        ))}

                        <div className="flex gap-3 pt-2">
                            <button className="flex-1 bg-saffron hover:bg-saffron-dark text-dark font-semibold py-2.5 rounded-xl text-sm transition-colors shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                                Enter Realm
                            </button>
                            <button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-2.5 rounded-xl text-sm transition-colors">
                                Purana Records
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

      </main>

      {/* Dynamic Yuga Scrubber */}
      <div className="h-28 bg-dark-100 border-t border-white/10 flex flex-col justify-center px-4 md:px-12 z-[1000] relative shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">

        {/* Yuga Info Hud */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-dark/80 backdrop-blur-md px-6 py-2 rounded-full border border-saffron/30 text-center shadow-lg">
            <h4 className="text-saffron font-bold text-sm tracking-widest uppercase">{currentYugaData?.name}</h4>
            <p className="text-[10px] text-slate-400 hidden sm:block">{currentYugaData?.duration} • {currentYugaData?.description}</p>
        </div>

        <div className="w-full max-w-5xl mx-auto relative mt-4">
          {/* Track Line */}
          <div className="absolute top-[9px] left-0 right-0 h-1 bg-white/10 rounded-full">
            <motion.div
                className="h-full bg-gradient-to-r from-saffron-dark to-saffron rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"
                initial={false}
                animate={{ width: `${(selectedYuga - 1) * (100 / 3)}%` }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          </div>

          <div className="flex justify-between relative z-10">
            {puranicData.yugas.map((yug) => {
              const isSelected = selectedYuga === yug.id;
              const isPast = selectedYuga > yug.id;

              return (
                <div
                    key={yug.id}
                    onClick={() => {
                        setSelectedYuga(yug.id);
                        setIsBottomSheetOpen(false); // Close sheet on era change
                    }}
                    className="flex flex-col items-center gap-3 cursor-pointer group"
                >
                    <div className="relative">
                        <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center
                            ${isSelected ? 'bg-dark border-saffron scale-150 shadow-[0_0_20px_rgba(249,115,22,0.6)]' :
                              isPast ? 'bg-saffron border-saffron' : 'bg-dark border-white/30 group-hover:border-saffron/50'}
                        `}>
                            {isSelected && <div className="w-2 h-2 bg-saffron rounded-full"></div>}
                        </div>
                    </div>
                    <span className={`text-[10px] md:text-xs font-medium tracking-wider uppercase transition-colors whitespace-nowrap
                        ${isSelected ? 'text-saffron font-bold' : isPast ? 'text-slate-300' : 'text-slate-500 group-hover:text-slate-300'}
                    `}>
                        {yug.name}
                    </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
