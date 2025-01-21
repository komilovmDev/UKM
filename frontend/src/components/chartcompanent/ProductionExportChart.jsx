import React from "react";

const ProductionExportChart: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Title */}
      <h2 className="text-white text-lg font-bold mb-4 text-center">
        Производственная мощность <br /> и экспорт продукции
      </h2>

      {/* SVG chart */}
      <svg width="500" height="500" viewBox="0 0 500 500">
        {/* Outer ring */}
        <circle cx="250" cy="250" r="180" stroke="#d4af37" strokeWidth="2" fill="none" />

        {/* Segments */}
        <path d="M250,80 A170,170 0 0,1 330,110" stroke="#ffffff" strokeWidth="20" strokeLinecap="round" fill="none"/>
        <path d="M330,110 A170,170 0 0,1 400,250" stroke="#f2cc57" strokeWidth="20" strokeLinecap="round" fill="none"/>
        <path d="M400,250 A170,170 0 0,1 360,340" stroke="#b6b6b6" strokeWidth="20" strokeLinecap="round" fill="none"/>
        <path d="M360,340 A170,170 0 0,1 250,390" stroke="#a5c956" strokeWidth="20" strokeLinecap="round" fill="none"/>
        <path d="M250,390 A170,170 0 0,1 140,340" stroke="#a5c956" strokeWidth="20" strokeLinecap="round" fill="none"/>
        <path d="M140,340 A170,170 0 0,1 100,250" stroke="#ffffff" strokeWidth="20" strokeLinecap="round" fill="none"/>

        {/* Outer connection points */}
        {[
          { x: 100, y: 250 },
          { x: 140, y: 340 },
          { x: 250, y: 390 },
          { x: 360, y: 340 },
          { x: 400, y: 250 },
          { x: 330, y: 110 }
        ].map((point, index) => (
          <circle key={index} cx={point.x} cy={point.y} r="5" fill="#d4af37" />
        ))}

        {/* Outer connection lines */}
        <line x1="100" y1="250" x2="40" y2="250" stroke="#d4af37" strokeWidth="2" strokeDasharray="3 3"/>
        <line x1="140" y1="340" x2="70" y2="390" stroke="#d4af37" strokeWidth="2" strokeDasharray="3 3"/>
        <line x1="250" y1="390" x2="250" y2="450" stroke="#d4af37" strokeWidth="2" strokeDasharray="3 3"/>
        <line x1="360" y1="340" x2="430" y2="390" stroke="#d4af37" strokeWidth="2" strokeDasharray="3 3"/>
        <line x1="400" y1="250" x2="460" y2="250" stroke="#d4af37" strokeWidth="2" strokeDasharray="3 3"/>
        <line x1="330" y1="110" x2="420" y2="70" stroke="#d4af37" strokeWidth="2" strokeDasharray="3 3"/>

        {/* Labels */}
        {[
          { x: 5, y: 255, text: "Россия" },
          { x: 40, y: 410, text: "Киргизия" },
          { x: 240, y: 485, text: "Монголия" },
          { x: 410, y: 410, text: "Таджикистан" },
          { x: 465, y: 255, text: "Казахстан" },
          { x: 430, y: 65, text: "Африка" }
        ].map((label, index) => (
          <text key={index} x={label.x} y={label.y} fill="white" fontSize="16" fontWeight="bold">
            {label.text}
          </text>
        ))}
      </svg>
    </div>
  );
};

export default ProductionExportChart;
