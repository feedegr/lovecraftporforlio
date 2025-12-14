// src/components/CthulhuEye.jsx
import React, { useState, useEffect, useRef } from 'react';

const CthulhuEye = () => {
  const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });
  const eyeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (eyeRef.current) {
        const eyeRect = eyeRef.current.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        // Calcular la distancia y ángulo del mouse al centro del ojo
        const deltaX = e.clientX - eyeCenterX;
        const deltaY = e.clientY - eyeCenterY;
        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        // Calcular la nueva posición de la pupila con más movimiento
        const maxMove = 35; // Movimiento máximo aumentado
        const moveDistance = Math.min(distance / 8, maxMove); // Más sensible (dividido por 8 en vez de 10)
        const x = Math.cos(angle) * moveDistance;
        const y = Math.sin(angle) * moveDistance;

        setPupilPosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="flex justify-center items-center py-20 relative">
      {/* Contenedor del ojo */}
      <div ref={eyeRef} className="relative w-64 h-64 animate-float-breathe">

        {/* Aura/Glow exterior */}
        <div
          className="absolute inset-0 rounded-full blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(109, 222, 188, 0.6), transparent 70%)',
            animation: 'pulse 3s ease-in-out infinite',
          }}
        />

        {/* El ojo - parte blanca/esclerótica */}
        <div
          className="absolute inset-0 rounded-full shadow-2xl overflow-hidden"
          style={{
            background: 'radial-gradient(circle at 45% 45%, rgba(200, 220, 200, 0.95), rgba(150, 170, 150, 0.8), rgba(100, 120, 100, 0.6))',
            boxShadow: '0 0 40px rgba(52, 211, 163, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.4)',
            animation: 'blink 6s ease-in-out infinite',
          }}
        >
         

          {/* Iris - parte verde éldritch */}
          <div
            className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full transition-all duration-150 ease-out"
            style={{
              background: 'radial-gradient(circle at 40% 40%, rgba(52, 211, 163, 0.9), rgba(29, 162, 100, 0.95), rgba(20, 100, 70, 1))',
              boxShadow: '0 0 30px rgba(52, 211, 163, 0.8), inset 0 0 20px rgba(0, 0, 0, 0.5)',
              transform: `translate(calc(-50% + ${pupilPosition.x * 0.9}px), calc(-50% + ${pupilPosition.y * 0.9}px))`,
            }}
          >
            {/* Pupila (vertical tipo felino) */}
            <div
              className="absolute top-1/2 left-1/2 transition-all duration-100 ease-out"
              style={{
                width: '100px',
                height: '60px',
                background: 'black',
                clipPath: 'polygon(50% 0%, 62% 10%, 62% 90%, 50% 100%, 38% 90%, 38% 10%)',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.9), 0 0 12px rgba(52, 211, 163, 0.5)',
                transform: `translate(calc(-50% + ${pupilPosition.x * 1.2}px), calc(-50% + ${pupilPosition.y * 1.2}px))`,
                willChange: 'transform',
              }}
            >
              {/* Reflejo de luz en la pupila (alargado) */}
              <div
                className="absolute"
                style={{
                  top: '6px',
                  left: '2px',
                  width: '3px',
                  height: '10px',
                  borderRadius: '6px',
                  background: 'rgba(255,255,255,0.55)',
                  filter: 'blur(0.5px)',
                }}
              />
            </div>
          </div>
        </div>

        
      </div>

      {/* Texto místico opcional */}
      <p
        className="absolute bottom-0 text-eldritch-red text-sm italic tracking-widest"
        style={{ textShadow: '1 4 20px rgba(21, 230, 164, 1)' }}
      >
        ∴ El Ojo que Todo lo Ve ∴
      </p>

      {/* Estilos de animación */}
      <style jsx>{`
        @keyframes blink {
          0%, 96%, 100% {
            clip-path: ellipse(100% 100% at 50% 50%);
          }
          97%, 99% {
            clip-path: ellipse(100% 5% at 50% 50%);
          }
        }

        @keyframes irisPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes tentacleWave {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(8deg);
          }
        }
      `}</style>
    </div>
  );
};

export default CthulhuEye;
