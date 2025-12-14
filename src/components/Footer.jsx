// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    // Usamos 'cosmic-black' (si lo definiste) o un gris muy oscuro.
    // Aplicamos padding, texto centrado y un borde sutil para separarlo del vacío.
    <footer className="bg-cosmic-black p-8 text-center border-t border-gray-800">
      
      {/* Información de Copyright/Año */}
      <p className="text-gray-500 text-sm tracking-wider">
        © {new Date().getFullYear()} El Anticuario. Todos los derechos reservados... o algo así.
        <br/>
        Diseñado y desarrollado por Federico Martín Grandinetti.
        Tomarlo con Humor Cósmico.
      </p>

      {/* Enlaces y Redes Sociales */}
      <div className="mt-4 flex justify-center space-x-6">
        <a 
          href="https://github.com/feedegr" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-parchment-white hover:text-eldritch-red transition duration-300"
        >
          GitHub (Manuscritos)
        </a>
       
        <a 
          href="https://www.linkedin.com/in/federico-martin-grandinetti/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-parchment-white hover:text-eldritch-red transition duration-300"
        >
          LinkedIn (El Culto)
        </a>
        {/* Agrega más enlaces según necesites */}
      </div>

      {/* Un pequeño detalle Lovecraftiano */}
      <p className="mt-20 text-xs opacity-70 font-bold"
        style={{ color: 'rgba(248, 4, 4, 0.69)' }}>
        Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.
      </p>

    </footer>
  );
};

export default Footer;