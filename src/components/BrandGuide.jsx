import React from 'react';

export default function BrandGuide(){{
  const colors = [
    {{ name: 'Sage', hex: '#2E8B57' }},
    {{ name: 'Deep Green', hex: '#184E3A' }},
    {{ name: 'Cream', hex: '#FBFFFB' }},
    {{ name: 'Warm Beige', hex: '#F6FBF7' }},
    {{ name: 'Accent Gold', hex: '#C4A484' }}
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="font-playfair text-3xl font-bold text-[#2E8B57] mb-6">Brand Style Guide</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {colors.map(c => (
          <div key={c.name} className="text-center">
            <div className="w-full h-16 rounded-md" style={{ backgroundColor: c.hex }}></div>
            <p className="text-sm mt-1">{c.name}</p>
            <p className="text-xs text-gray-500">{c.hex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}}
