import { Link } from "react-router-dom"

const Inicio = () => {
return (
<>
<div>
<h1>Esta es la página de inicio</h1>
<Link to="nosotros">
Presiona aquí pra ir a la página nosotros
</Link>
<br/>
<Link to="contacto">
Presiona aquí para ir a la página Contacto
</Link>


</div>
</>

)

}

export default Inicio 