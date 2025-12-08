import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-950 text-purple-200 py-12 border-t border-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="font-bold text-2xl tracking-tight text-white font-['Space_Grotesk']">BINDELEDD</span>
          <p className="mt-2 text-sm text-purple-400">Konsept av Iver Finne | Design for deltaking</p>
        </div>
        
        <div className="text-sm text-right">
          <p>Samarbeidspartnar:</p>
          <p className="font-semibold text-white">Bydel Østensjø & Oppsal Frivilligsentral</p>
        </div>
      </div>
    </footer>
  );
};