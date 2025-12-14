import React from 'react';

// Componente simple que muestra un GIF misterioso en reemplazo del ojo
const MystGif = () => {
  return (
    <div className="w-full flex justify-center items-center -mt-40 md:-mt-56 py-2">
      <div className="relative max-w-4xl w-full px-4 opacity-0 animate-fade-in">
        <img
          src="/assets/gifmisterioso.gif"
          alt="Visión misteriosa"
          className="w-full h-auto rounded-lg shadow-[0_0_35px_rgba(34,197,94,0.35)] opacity-60"
          style={{
            WebkitMaskImage: 'radial-gradient(closest-side, black 70%, transparent 100%)',
            maskImage: 'radial-gradient(closest-side, black 70%, transparent 100%)',
          }}
        />
      </div>
    </div>
  );
};

export default MystGif;