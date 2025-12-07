import React from 'react';

const IslandMap: React.FC = () => {
  return (
    <div className="relative w-full aspect-video bg-ocean-100 rounded-xl overflow-hidden shadow-inner border border-ocean-200">
        <svg viewBox="0 0 800 500" className="w-full h-full">
            {/* Abstract Ocean Waves */}
            <path d="M0,100 C150,150 250,50 400,100 S650,50 800,100 V500 H0 Z" fill="#e0f2fe" opacity="0.5" />
            
            {/* Madagascar */}
            <g className="group cursor-pointer">
                <path d="M180,300 C150,250 160,150 200,120 C240,150 230,250 240,350 C250,400 200,420 180,300 Z" fill="#10b981" className="group-hover:fill-teal-700 transition-colors" />
                <text x="170" y="250" className="text-xs font-semibold fill-teal-900 opacity-70">Madagascar</text>
            </g>

            {/* Comoros & Mayotte */}
            <g className="group cursor-pointer">
                <circle cx="210" cy="100" r="6" fill="#10b981" className="group-hover:fill-teal-700 transition-colors" />
                <text x="180" y="90" className="text-xs font-semibold fill-teal-900 opacity-70">Comoros</text>
            </g>
            <g className="group cursor-pointer">
                <circle cx="230" cy="110" r="5" fill="#f59e0b" className="group-hover:fill-teal-700 transition-colors" />
                <text x="235" y="105" className="text-xs font-semibold fill-teal-900 opacity-100 font-bold">Mayotte</text>
            </g>

            {/* Seychelles */}
            <g className="group cursor-pointer">
                <circle cx="350" cy="60" r="4" fill="#10b981" />
                <circle cx="360" cy="55" r="3" fill="#10b981" />
                <circle cx="355" cy="65" r="3" fill="#10b981" />
                <text x="365" y="60" className="text-xs font-semibold fill-teal-900 opacity-70">Seychelles</text>
            </g>

            {/* Reunion & Mauritius */}
            <g className="group cursor-pointer">
                <circle cx="320" cy="320" r="7" fill="#10b981" className="group-hover:fill-teal-700 transition-colors" />
                <text x="290" y="340" className="text-xs font-semibold fill-teal-900 opacity-70">Réunion</text>
            </g>
            <g className="group cursor-pointer">
                <circle cx="360" cy="310" r="7" fill="#10b981" className="group-hover:fill-teal-700 transition-colors" />
                <text x="360" y="330" className="text-xs font-semibold fill-teal-900 opacity-70">Mauritius</text>
            </g>

             {/* Connection Lines (Abstract) */}
             <path d="M230,110 L210,100 L180,300 L320,320 L360,310 L350,60" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.6" />
        </svg>
        
        <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-lg shadow-sm text-xs">
            <div className="flex items-center gap-2 mb-1"><div className="w-3 h-3 rounded-full bg-emerald-500"></div> Producers</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-amber-500"></div> Hubs</div>
        </div>
    </div>
  );
};

export default IslandMap;