import React from 'react';

const TomeCard = ({ title, header, description, stack, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative group"
    >
      {/* Contenedor del pergamino con efecto de papel viejo */}
      <div className="relative p-8 transform transition-all duration-500 ease-out
                      hover:scale-[1.02] hover:-rotate-1 hover:z-10">

        {/* Fondo de papiro claro SIMPLIFICADO */}
        <div className="absolute inset-0 border-[3px]"
             style={{
               backgroundColor: '#9f7d5052',
               backgroundImage: `
                 repeating-linear-gradient(0deg,
                   rgba(180, 150, 110, 0.06) 0px,
                   rgba(180, 150, 110, 0.06) 1px,
                   transparent 1px,
                   transparent 4px
                 )
               `,
               borderColor: '#d4b896',
               boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
             }}>
        </div>

        {/* Sombra interior MUY SUTIL */}
        <div className="absolute inset-0 pointer-events-none"
             style={{
               boxShadow: 'inset 0 1px 3px rgba(139, 115, 85, 0.08)'
             }}>
        </div>

        {/* Contenido del tomo */}
        <div className="relative z-10">

          {/* Decoración superior */}
          <div className="text-center text-amber-900/30 text-xs mb-3 tracking-widest">
            ◆ ◇ ◆
          </div>

          {/* Título con efecto de tinta antigua */}
          <h4 className="text-3xl font-serif mb-3 text-center
                         text-red-950 tracking-wide
                         border-b-2 border-amber-900/40 pb-3"
              style={{
                textShadow: '1px 1px 2px rgba(139, 69, 19, 0.3)',
                fontVariant: 'small-caps'
              }}>
            {title}
          </h4>

          {/* Encabezado */}
          <h2 className="text-2xl font-sans mb-6 text-center
                          text-green-900/90 tracking-wide"
              style={{
                textShadow: '1px 1px 3px rgba(34, 64, 34, 0.4)',
                fontVariant: 'small-caps'
              }}>
            {header}
          </h2>

          {/* Descripción */}
          <p className="text-sm leading-relaxed mb-6 text-gray-800 text-center italic px-2"
             style={{
               fontFamily: 'Georgia, serif',
               textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.1)'
             }}>
            {description}
          </p>

        

          {/* Stack Tecnológico */}
          <div className="text-xs text-center mt-4 pt-4
                          border-t-2 border-amber-900/30">
            <p className="text-amber-950 font-serif tracking-wide">
              <span className="text-red-900 font-bold mb-6">⚡ Artes Arcanas:</span>
              <br />
              <br />
              <span className="text-gray-700">{stack}</span>
            </p>
          </div>

          {/* Decoración inferior */}
          <div className="text-center text-amber-900/30 text-xs mt-4 tracking-widest">
            ◆ ◇ ◆
          </div>
        </div>

        {/* Sello de cera en la esquina */}
        <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full
                        bg-red-950 opacity-70 flex items-center justify-center
                        border-2 border-red-900 shadow-lg
                        transition-transform duration-300
                        group-hover:scale-110">
          <span className="text-amber-200 text-lg">☠</span>
        </div>

        {/* Efecto hover - brillo eldritch */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                        transition-opacity duration-500 pointer-events-none"
             style={{
               boxShadow: '0 0 30px rgba(51, 101, 45, 0.9), inset 0 0 0px rgba(204, 51, 51, 0.1)'
             }}>
        </div>
      </div>
    </a>
  );
};

export default TomeCard;