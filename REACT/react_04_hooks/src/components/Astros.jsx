import "./Astros.css"
import { useEffect, useState } from "react";
import Astro from "./Astro";

//mandar a llamar la API, utilizando hooks (usestate y use efect)
//componente para agregar la información de la API Astros dentro de las cards
const Astros = () => {

    const Astros_URL = "http://api.open-notify.org/astros.json";
    //implementando useState
    const [astros, setAstros] = useState([]);
    //implementando useEffect
    useEffect(() => {
        fetchAstros(); //Hoisting de una función que voy a definir
    }, []);

    //Crear función fetch para conectarse a la API 
    const fetchAstros = () => {
        fetch(Astros_URL)
            .then(response => response.json())
            .then(data => setAstros(data.people)) //Para que la información viva dentro del componente actualizado, traigo setAstros y le aso los datos de `people` de la API
            .catch(error => console.error(error))
    }
    console.log(astros); //Vive en consola del navegador 

    //Enviar la información del a API a las cards utilizando .map sobre el `Array`
    return (
        <>
            {
                //astro" funciona como los elementos quese recorren en el array `astros` y .map recibe dichos elementos, más un indez y una función 
                astros.map((astro, index) => (
                //exporto el componente Astro 
                //crear una llave única para cada elemento del array (key)
                //Desestructurar el array para que cada elemento reciba los props definidos dentro de Astro ({name.craft})
                <Astro key={index} {...astro} />

                ))
            }
        </>

    )

}
export default Astros