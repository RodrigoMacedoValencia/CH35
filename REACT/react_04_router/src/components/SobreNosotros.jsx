import { Link } from "react-router-dom"
const SobreNosotros = () => {
return (
<>
<div>
<h1>Esta es la página de Sobre Nosotros</h1>
<Link to= "/">
Presiona aquí pra ir a la página Inicio
</Link>
<br/>
<Link to="/contacto">
Presiona aquí para ir a la página Contacto
</Link>
</div>
</>

)

}

export default SobreNosotros 