import './App.css'
import ParallaxContainer from './components/ParallaxContainer';

function App() {
  return (
    // Aplicamos el fondo negro general a la aplicación
    <div className="bg-gray-950 text-gray-200 antialiased font-sans min-h-screen">

      {/* El ParallaxContainer se encarga del scroll y el contenido (full-bleed) */}
      <ParallaxContainer />

    </div>
  )
}

export default App