import './App.css'
import { Routes, Route } from "react-router-dom"
import Inicio from './components/Inicio'
import SobreNosotros from './components/SobreNosotros'
import Contacto from './components/Contacto'

// -Routes. Actua como contenedor padre de todas las rutas individuales que se crerán en la aplicación 
/* . Route. Es la ruta "hija" de cada componente. Route recibe 2 atributos
1.- path: especifica la ruta (URL) a seguir 
2.- element: especifica el componente que se renderiza 

*/
function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={ <Inicio /> } />
      <Route path="nosotros" element={ <SobreNosotros /> } />
      <Route path="contacto" element={ <Contacto /> } />
    </Routes>
    </>
  )
}

export default App

  

