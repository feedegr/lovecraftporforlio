// src/components/ParallaxContainer.jsx
import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "./Footer";
import TomeCard from "./TomeCard";
import ArcaneAltar from "./ArcaneAltar";
import InvocationForm from "./InvocationForm";
import MystGif from "./MystGif";
import BackgroundCover from "./BackgroundCover";
import AboutSection from "./AboutSection";

const ParallaxContainer = () => {
  const parallaxRef = useRef(null);
  // Configuración fija solo para web (desktop)
  const pages = 5;

  const OFFSETS = {
    about: 1.0,
    gif: 1.4,
    projectsBg: 1.4,
    projects: 2.0,
    waterContactBg: 2.2,
    skills: 3.0,
    contact: 3.8,
    transition: 4.4,
    footer: 4.8,
  };
  const goToProjects = () => {
    if (parallaxRef.current) parallaxRef.current.scrollTo(OFFSETS.projects);
  };

  const goToContact = () => {
    if (parallaxRef.current) parallaxRef.current.scrollTo(OFFSETS.contact);
  };

  return (
    <Parallax pages={pages} ref={parallaxRef}>
      {/* --- CAPA 1: FONDO CÓSMICO (Estrellas) --- */}
      {/* Velocidad muy baja (0.1) para simular la lejanía. */}
      <ParallaxLayer
        offset={0}
        speed={0.2}
  factor={5}
        style={{
          // Usa la ruta relativa a la carpeta 'public'
          backgroundImage: `url('/assets/stars.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scale(1.2)", // Escala un poco para cubrir mejor
        }}
      />

      {/* --- CAPA 2: OVERLAY DE TENTÁCULOS (Sutil) --- */}
      {/* Se mueve a velocidad media (0.3) y tiene baja opacidad. */}
      <ParallaxLayer
        offset={0}
        speed={0.3}
        factor={pages}
        style={{
          backgroundImage: `url('/assets/tentacle-overlay.png')`,

          backgroundSize: "cover",
          opacity: 0.15, // Muy sutil
          pointerEvents: "none", // Para que no interfiera con el clic
        }}
      />

      {/* --- CAPA 3: NIEBLA DE PRIMER PLANO --- */}
      {/* Se mueve muy rápido (1.2) para dar la sensación de que la niebla pasa volando. */}
      <ParallaxLayer
        offset={0}
        speed={1.2}
        factor={pages}
        style={{
          backgroundImage: `url('/assets/fog.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          opacity: 0.3,
          pointerEvents: "none",
          // Fade the bottom of the fog using a mask so the foreground blends smoothly
          maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      />

      {/* --- NUEVA CAPA: NIEBLA FLOTANTE --- */}
      <ParallaxLayer
        offset={0} // Comienza junto al fondo
        speed={0.2} // Un poco más rápida que las estrellas para un efecto de profundidad
  factor={pages} // Se extiende a lo largo de todas las páginas
        className="animate-float-breathe" // Animación más notable con efecto respiración
        style={{
          backgroundImage: `url('/assets/fog.png')`, // <-- RUTA A TU IMAGEN DE NIEBLA
          backgroundSize: "120% 120%", // Escalamos un poco la imagen base para evitar bordes negros al hacer scale
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          transformOrigin: "center", // Mantener el scale centrado
          opacity: 0.3, // Hacerla semitransparente para que sea sutil
          pointerEvents: "none", // Asegura que no bloquee clics/interacciones en el contenido de abajo
        }}
      />

      {/* -------------------- SECCIÓN 1: HOME (La Revelación) -------------------- */}
      <ParallaxLayer offset={0} speed={0.8}>
        <div className="flex flex-col items-center justify-center h-screen bg-transparent p-10 text-center">
          {/* Portada de fondo (debajo del nombre y subtítulo) */}
          <BackgroundCover />
          {/* Titular Principal */}
          <h1
            className="text-8xl font-serif text-parchment leading-tight mb-4"
            style={{
              textShadow: "0 0 20px rgba(29, 162, 100, 0.9)",
              backgroundImage: `url('/assets/simbol.png')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              // Force the same font family/weight as the H3 headings so they render identically
              fontFamily: "Merienda, serif",
              fontWeight: 400,
              position: "relative",
              zIndex: 10,
            }}
          >
            Federico Martín <br />
            Grandinetti
          </h1>

          {/* Título/Rol Secundario */}
          <h2
            className="text-3xl font-serif text-parchment tracking-wide mb-6"
            style={{
              position: "relative",
              zIndex: 10,
              textShadow: "0 0 20px rgba(29, 162, 100, 0.9)",
            }}
          >
            Full-Stack Developer | El Anticuario Digital
          </h2>
        </div>
      </ParallaxLayer>
      {/* ---Gif --- */}
      <ParallaxLayer
  offset={OFFSETS.gif}
  speed={0.7}
        style={{ pointerEvents: "none", zIndex: 1 , opacity: 0.5}}
      >
        <MystGif />
      </ParallaxLayer>

      {/* --- SECCIÓN SOBRE MÍ: Hero + Timeline + Skills --- */}
  <ParallaxLayer offset={OFFSETS.about} speed={0.5}>
        <div className="px-6 md:px-10 pt-10 pb-20">
          <AboutSection onGoProjects={goToProjects} onGoContact={goToContact} />
        </div>
      </ParallaxLayer>

      {/* -------------------- SECCIÓN 2: PROYECTOS (Tomos Prohibidos) -------------------- */}
      {/* --- CAPA: AGUA (fondo medio) - se difumina de arriba hacia abajo para fusionarse --- */}
      <ParallaxLayer
        offset={OFFSETS.projectsBg}
        speed={0.5}
        factor={1.2}
        style={{
          backgroundImage: `url('/assets/water2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          opacity: 0.35,
          pointerEvents: "none",
          // Fade from top (transparent) to visible in middle, then fade out to black at bottom
          maskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 15%, rgba(0,0,0,0.8) 40%, black 60%, rgba(0,0,0,0.7) 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 15%, rgba(0,0,0,0.8) 40%, black 60%, rgba(0,0,0,0.7) 85%, transparent 100%)",
        }}
      />

      <ParallaxLayer offset={OFFSETS.projects} speed={0.5} style={{ zIndex: 10 }}>
        <div id="projects" className="pt-20 pb-24 px-6 md:px-10 text-center">
          <h3 className="text-5xl font-serif text-gray-300 mb-12 border-b border-gray-700 pb-2">
            📜 Los Tomos Prohibidos
          </h3>

          {/* Contenedor de Proyectos */}
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
            <TomeCard
              title="El Misterio de Innsmouth"
              header="Backend Tikinder"
              description="Backend para una app que mezcla la interacción tipo Tinder con un feed estilo TikTok (Feed,Post,Votes...)."
              stack="Spring Boot (MVC), Lombok, Bcrypt, JWT"
              link="https://github.com/feedegr/Backend-Tikinder-Sping"
            />

            <TomeCard
              title="Las Montañas de la Locura"
              header="Proyecto MVC SushiPop"
              description="Aplicación web ASP.NET Core + SQL para gestión y pedidos de productos (SushiPop)."
              stack="C#, ASP.NET Core, SQL Server"
              link="https://github.com/feedegr/SushiPop-c--Sql"
            />

            <TomeCard
              title="La sombra fuera del tiempo"
              header="Recursos Humanos App"
              description="Una aplicación web diseñada para gestionar empleados en una organización. 
              Permite realizar operaciones básicas como listar, editar y eliminar empleados."
              stack="ReactJS, HTML, CSS, Axios, React Router"
              link="https://github.com/feedegr/ServicioEmpleados-front-reactJs"
            />

            <TomeCard
              title="El color que cayó del cielo"
              header="Health‑mind"
              description="App web de bienestar mental: un santuario reactivo cuya UI actúa como códice consciente, mapeando el ánimo sin devorar la mente."
              stack="HTML, CSS Puro, JS, React"
              link="https://mentesindepresion.netlify.app/inicio"
            />

            <TomeCard
              title="El Caso de Charles Dexter Ward"
              header="Calendario Místico frontend"
              description="Frontend de un calendario web que gestiona usuarios y notas: 
              registro/login y operaciones CRUD. Evita caer en el oscuro caos de la vida."
              stack=" JavaScript, consumo de API/REST "
              link="https://github.com/feedegr/Calendar-FrontEnd"
            />

            <TomeCard
              title="El horror de Dunwich"
              header="Calendario Místico backend"
              description="Proyecto full‑stack de calendario con backend en Node.js conectado a MongoDB y frontend integrado."
              stack="JavaScript (Node.js, Express), MongoDB (Mongoose), APIs REST"
              link="https://github.com/feedegr/CalendarBackEnd-and-FrontEnd"
            />
          </div>
        </div>
      </ParallaxLayer>

      {/* --- CAPA: AGUA  - difuminado suave --- */}
      <ParallaxLayer
        offset={OFFSETS.waterContactBg}
        speed={0.5}
        factor={1.0}
        style={{
          backgroundImage: `url('/assets/water2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          height: "120%",
          opacity: 0.5,
          pointerEvents: "none",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.9) 45%, black 65%, rgba(0,0,0,0.6) 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.9) 45%, black 65%, rgba(0,0,0,0.6) 88%, transparent 100%)",
        }}
      />

      <ParallaxLayer offset={OFFSETS.skills} speed={0.5}>
        {/* 1. Altar Arcano (Habilidades) */}
        <div className="mt-10 mb-20 px-6 md:px-10">
          <ArcaneAltar />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={OFFSETS.contact} speed={0.5}>
        {/* 2. El Llamamiento (Contacto) - Justo debajo de las habilidades */}
        <div id="contact" className="pt-16 pb-24 px-6 md:px-10">
          <InvocationForm />
        </div>
      </ParallaxLayer>

      {/* --- CAPA: TRANSICIÓN A NEGRO ANTES DEL FOOTER --- */}
      <ParallaxLayer
        offset={OFFSETS.transition}
        speed={0.4}
        factor={0.6}
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.9) 60%, black 100%)",
          pointerEvents: "none",
        }}
      />

      {/* -------------------- FOOTER -------------------- */}
      <ParallaxLayer offset={OFFSETS.footer} speed={0.5}>
        <Footer />
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxContainer;
