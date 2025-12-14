// src/components/InvocationForm.jsx
import React, { useState } from 'react';

const InvocationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'success' | 'error'
  const [detail, setDetail] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'El nombre es obligatorio.';
    // Email RFC básico
    const emailRegex = /^[\w.!#$%&'*+/=?`{|}~^-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!email.trim()) newErrors.email = 'El email es obligatorio.';
    else if (!emailRegex.test(email)) newErrors.email = 'Formato de email inválido.';
    if (!message.trim()) newErrors.message = 'El mensaje no puede estar vacío.';
    if (message.length > 3000) newErrors.message = 'El mensaje excede el límite de 3000 caracteres.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);
    setDetail(null);
    const vErrors = validate();
    setErrors(vErrors);
    if (Object.keys(vErrors).length) return;
    // Construir mailto: abre el cliente de correo del usuario
    const subject = `Nuevo Llamamiento de ${name}`;
    const body = `Nombre: ${name}\nEmail remitente: ${email}\n\nMensaje:\n${message}`;
    const mailtoLink = `mailto:feedecs@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    try {
      window.location.href = mailtoLink;
      setStatus('success');
      setDetail('Se abrió tu cliente de correo para enviar el mensaje.');
    } catch (err) {
      setStatus('error');
      setDetail('No se pudo abrir el cliente de correo: ' + err.message);
    }
  };

  return (
  <div className="p-16 max-w-4xl mx-auto text-center relative z-50">
      
      <h3 className="text-5xl font-serif mb-4">
          💀 El Llamamiento
      </h3>
      
    <p className="text-3xl max-w-3xl mx-auto text-green-400 mb-8 font-serif">
          Para sellar el pacto, ingresa tu información. No hay vuelta atrás.
      </p>

      {/* Formulario Estilo Pacto */}
      <form
  onSubmit={handleSubmit}
        className=" p-8 rounded-lg border-2 shadow-2xl transform transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(34,197,94,0.25)]"
        style={{
          backgroundImage: "url('/assets/tentaclesdraw.png')",
          backgroundSize: 'auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'overlay',
          borderColor: 'rgba(255, 255, 255, 1)'
        }}
      >
        
        {/* Campo: Nombre del Solicitante */}
        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-serif mb-2 text-left" htmlFor="name">
            Nombre del Solicitante (Tu Nombre)
          </label>
          <input 
            className={`w-full px-4 py-3 bg-cosmic-black text-green-400 border ${errors.name ? 'border-eldritch-red' : 'border-red-900'} 
                       focus:border-eldritch-red focus:ring-1 focus:ring-eldritch-red outline-none`} 
            id="name" 
            type="text" 
            placeholder="Ej. Randolph Carter"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={false}
          />
          {errors.name && <p className="text-left text-xs text-eldritch-red mt-1">{errors.name}</p>}
        </div>

        {/* Campo: Email del Mensajero */}
        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-serif mb-2 text-left" htmlFor="email">
            Sello del Mensajero (Tu Email)
          </label>
          <input 
            className={`w-full px-4 py-3 bg-cosmic-black text-green-400 border ${errors.email ? 'border-eldritch-red' : 'border-red-900'} 
                       focus:border-eldritch-red focus:ring-1 focus:ring-eldritch-red outline-none`} 
            id="email" 
            type="email" 
            placeholder="sello@dominio-prohibido.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={false}
          />
          {errors.email && <p className="text-left text-xs text-eldritch-red mt-1">{errors.email}</p>}
        </div>

        {/* Campo: El Mensaje Secreto */}
        <div className="mb-8">
          <label className="block text-gray-300 text-sm font-serif mb-2 text-left" htmlFor="message">
            El Mensaje Secreto (Detalles de la Oferta)
          </label>
          <textarea 
            className={`w-full px-4 py-3 bg-cosmic-black text-gray-200 border ${errors.message ? 'border-eldritch-red' : 'border-red-900'} 
                       focus:border-eldritch-red focus:ring-1 focus:ring-eldritch-red outline-none h-32 resize-none`} 
            id="message" 
            placeholder="Describe la naturaleza de tu llamado..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={false}
          />
          {errors.message && <p className="text-left text-xs text-eldritch-red mt-1">{errors.message}</p>}
        </div>
        
        {/* Botón: Sellar el Pacto */}
        <button 
          type="submit" 
          disabled={false}
          className="w-full px-4 py-3 bg-cosmic-black text-parchment-white font-bold uppercase tracking-widest 
                     rounded-sm shadow-xl transition duration-300 hover:bg-red-900 hover:text-cosmic-black hover:scale-[1.01] 
                     border-4 border-red-900 transform hover:rotate-1 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Sellar el Pacto
        </button>
        {status === 'success' && (
          <p className="mt-4 text-green-400 text-sm" style={{ textShadow: '0 0 6px rgba(52,211,163,0.6)' }}>{detail}</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-eldritch-red text-sm" style={{ textShadow: '0 0 6px rgba(180,0,0,0.6)' }}>{detail}</p>
        )}
      </form>
      
      {/* Aviso Legal Lovecraftiano */}
      <p
        className="mt-6 text-xs italic"
        style={{ color: 'rgba(248, 4, 4, 0.69)' }}
      >
        Advertencia: Toda información enviada es propiedad de las Entidades Exteriores.
      </p>

    </div>
  );
};

export default InvocationForm;