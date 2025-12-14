import React from "react";

const skills = [
  { label: "Java", level: 5 },
  { label: "Spring Boot", level: 4 },
  { label: "Node.js / Express", level: 4 },
  { label: "Auth / JWT / bcrypt", level: 5 },
  { label: "REST APIs", level: 4 },
  { label: "MongoDB / SQL", level: 4 },
  { label: "React", level: 3 },
  { label: "Git / CI", level: 4 },
  { label: "Scrum / Kanban", level: 5 },
  { label: "Comunicación / Teamwork", level: 5 },
  { label: "Buenas prácticas", level: 5 },
  { label: "IA / Novedades", level: 5 },
];

const timeline = [
  {
    date: "2021-2022",
    title: "El Llamado del Código",
    text:
      "Entré al mundo de la programación con el lenguaje Java, aprendiendo conceptos fundamentales de programación orientada a objetos y estructuras de datos.",
  },
  {
    date: "2022-2023",
    title: "El Backend Profundo",
    text:"Me especialicé en Java/Spring para continuar avanzando con este primer lenguaje. Comencé también a conocer otros lenguajes misteriosos como Node/Express. Diseñé APIs REST seguras (JWT, bcrypt) y empecé a liderar tareas en equipo. Comencé el estudio de estos lenguajes misteriosos en O.R.T. como Analista en Sistemas.",
      
  },
  {
    date: "2023-2024",
    title: "La Sincronía Invisible",
    text: "Trabajé en equipos ágiles (Kanban/Scrum), mejorando la comunicación, la división de tareas y el despliegue continuo.",
  },
  {
    date: "2024-2025",
    title: "La Invocación Creativa",
    text:   "Exploré soluciones innovadoras, integré IA en procesos y enfoqué mi desarrollo en productividad y experiencia de usuario.",
  }

];

const SkillBadge = ({ label, level }) => (
  <div className="flex items-center gap-3 px-4 py-2 rounded-lg border border-emerald-700/40 bg-black/30 text-gray-200">
    <span className="font-semibold text-parchment">{label}</span>
    <div className="flex-1 h-2 bg-emerald-900/40 rounded">
      <div
        className="h-2 bg-emerald-400 rounded"
        style={{ width: `${Math.min(level, 5) * 20}%` }}
      />
    </div>
  </div>
);

const AboutSection = ({ onGoProjects, onGoContact }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">
      {/* Hero pitch */}
  <div className="bg-neutral-900 rounded-xl border border-emerald-600/40 shadow-lg p-8 md:p-10 mb-10">
        <h3 className="text-4xl md:text-5xl font-serif text-parchment mb-4">
          Programador Full‑Stack orientado a Backend
        </h3>
        <p className="text-gray-300 leading-relaxed mb-6">
          Diseño y desarrollo APIs robustas y frontends claros, siempre con foco en rendimiento, 
          escalabilidad y código limpio. Trabajo principalmente con Java/Spring y Node/Express, 
          aplicando autenticación segura y buenas prácticas que hacen que los sistemas funcionen como deben.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Comprendo el puente completo entre backend y frontend, 
          lo que me permite integrar soluciones sin fricción y colaborar con 
          equipos de forma organizada y efectiva. Me mantengo en constante aprendizaje, 
          explorando cómo la IA puede transformar procesos y potenciar productos reales.
        </p>
        <div className="flex flex-wrap gap-3">
          <button onClick={onGoProjects} className="px-5 py-2 rounded bg-emerald-600/80 hover:bg-emerald-500 text-black font-semibold">
            Ver proyectos
          </button>
          <button onClick={onGoContact} className="px-5 py-2 rounded border border-emerald-600/70 text-emerald-300 hover:bg-emerald-600/10">
            Contacto
          </button>
        </div>
      </div>

      {/* Timeline */}
      <div className="grid md:grid-cols-3 gap-8 items-start">
  <div className="md:col-span-2 bg-neutral-900 rounded-xl border border-emerald-600/30 p-6">
          <h4 className="text-2xl font-serif text-parchment mb-4">Línea de tiempo</h4>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-emerald-700/40" />
            <ul className="space-y-6">
              {timeline.map((item, idx) => (
                <li key={idx} className="pl-10">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.7)]" />
                    <span className="text-emerald-300 text-sm">{item.date}</span>
                  </div>
                  <h5 className="text-xl text-parchment font-semibold">{item.title}</h5>
                  <p className="text-gray-300">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Skills */}
  <div className="bg-neutral-900 rounded-xl border border-emerald-600/30 p-6">
          <h4 className="text-2xl font-serif text-parchment mb-4">Skills</h4>
          <div className="grid grid-cols-1 gap-3">
            {skills.map((s, i) => (
              <SkillBadge key={i} label={s.label} level={s.level} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
