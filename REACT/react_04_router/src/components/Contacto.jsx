import { Link } from "react-router-dom"

const Contacto = () => {
return (
<>
<div>
<h1>Esta es la página de Contacto</h1>

<Link to= "/">
Presiona aquí pra ir a la página inicio
</Link>
<br/>
<Link to="/nosotros">
Presiona aquí para ir a la página nosotros
</Link>
</div>
</>

)

}

export default Contacto