// src/components/ArcaneAltar.jsx
import React, { useState, useMemo } from 'react';

// Datos de tus habilidades: El Símbolo y el Título Arcano
const arcaneSkills = [
  // --- FRONTEND ---
  { name: 'React', symbol: '⎈', title: 'El Nudo de Fases' },
  { name: 'JavaScript', symbol: '⛤', title: 'El Lenguaje Prohibido' },
  { name: 'Tailwind CSS', symbol: '◬', title: 'Arquitectura Cíclope' },
  
  // --- BACKEND / LÓGICA DE SERVIDOR ---
  // 🜍 (Fuego Alquímico)
  { name: 'Java', symbol: '🜍', title: 'El Conjuro Primordial' }, 
  // ♁ (Símbolo de la Tierra)
  { name: 'Spring Boot', symbol: '♁', title: 'El Eje Estructural' }, 
  { name: 'Node.js', symbol: '⨁', title: 'El Corazón del Servidor' },
  { name: 'Express.js', symbol: '♅', title: 'El Viajero Astral' },
  
  // --- BASES DE DATOS ---
  { name: 'SQL/MySQL', symbol: '🜔', title: 'Las Tablillas Antiguas' },
  { name: 'PostgreSQL', symbol: '⍟', title: 'El Pozo Profundo' },
  { name: 'MongoDB', symbol: '◉', title: 'El Almacén Desestructurado' },
  
  // --- HERRAMIENTAS ---
  // ☧ (Chi Rho, sugiere vínculo)
  { name: 'Git', symbol: '☧', title: 'El Vínculo de Versiones' },
  { name: 'Figma', symbol: '⚇', title: 'Visión de Otros Planos' },
];

const ArcaneAltar = () => {
  // Estado: expandido (muestra todas) o contraído (muestra 1)
  const [expanded, setExpanded] = useState(false);

  // La carta destacada inicial (puedes cambiar el índice si quieres otra)
  const featured = useMemo(() => arcaneSkills[0], []);

  return (
  <div className="p-16 max-w-6xl mx-auto text-center">
      {/* Título de la Sección */}
      <h3 className="text-5xl font-serif text-gray-300 mb-12 border-b border-gray-700 pb-2">
       ⚡Conocimientos Arcanos
      </h3>

      {/* Vista contraída: una sola card grande */}
      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="group w-full max-w-3xl mx-auto block"
          aria-label="Abrir habilidades"
        >
          <div
            className="flex flex-col items-center justify-center p-8 
                       bg-neutral-900/80 border border-emerald-600/40 rounded-xl 
                       shadow-2xl transition-all duration-500 transform 
                       hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,197,94,0.35)] 
                       cursor-pointer"
          >
            <div className="text-7xl md:text-8xl mb-4 text-green-400 animate-breath">
              {featured.symbol}
            </div>
            <p className="text-2xl md:text-3xl font-serif text-gray-200 mb-2">
              {featured.title}
            </p>
            <p className="mt-6 text-sm text-gray-400">
              Clic para revelar el altar completo
            </p>
          </div>
        </button>
      )}

      {/* Vista expandida: grid completo */}
      {expanded && (
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-8 
                     transition-all duration-500"
        >
          {arcaneSkills.map((skill, i) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-4 
                         bg-neutral-900/80 border border-emerald-600/30 rounded-lg 
                         shadow-xl transition duration-300 transform 
                         hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.45)]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="text-6xl mb-3 text-green-400 hover:animate-pulse">
                {skill.symbol}
              </div>
              <p className="text-lg font-serif text-gray-200 mb-1">
                {skill.title}
              </p>
              <p className="text-sm text-gray-500 font-mono">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Botón para colapsar, visible solo expandido */}
      {expanded && (
        <div className="mt-8">
          <button
            onClick={() => setExpanded(false)}
            className="px-4 py-2 rounded-md border border-gray-700 text-gray-300 hover:text-green-400 hover:border-green-400 transition"
          >
            Volver a la carta 
          </button>
        </div>
      )}
    </div>
  );
};

export default ArcaneAltar;