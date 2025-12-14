import React, { useMemo } from 'react';

// Portada de fondo con texto cuyo relleno es una imagen (background-clip: text)
const BackgroundCover = () => {
  // Texto repetido para crear la textura (puedes reemplazar por tu propio texto/código)
  const filler = useMemo(() => {
    const base = `function void eldritch() { return React + Tailwind + Node + Spring + MongoDB + MySQL; } `;
    return Array.from({ length: 120 }).map(() => base).join('\n');
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center h-screen w-screen pointer-events-none z-0">
      {/* Desktop / tablets: imagen principal */}
      <p
        className="hidden md:block text-[7px] leading-[1.5] m-0 p-5 opacity-40"
        style={{
          color: 'rgba(251, 248, 248, 0.14)',
          backgroundImage: "url('public/assets/R.jpeg')",
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}
      >
        {filler}
      </p>

      {/* Smartphones: imagen alternativa + grayscale */}
      <p
        className="block md:hidden text-[8px] leading-[1.5] m-0 p-5 filter grayscale"
        style={{
          color: 'rgba(251, 248, 248, 0.14)',
          backgroundImage: "url('public/assets/R.jpeg')",
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}
      >
        {filler}
      </p>
    </div>
  );
};

export default BackgroundCover;