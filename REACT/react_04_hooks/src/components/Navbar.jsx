import './Navbar.css' //Importación de CSS
import IssLogo from "../assets/ISS_logo.svg"

//Crear funcion que contiene el marcado para que vivan nuestro codigo
const Navbar = () => {
    const url1 = 'https://www.nasa.gov/international-space-station/';
    const url2 = 'https://www.nasa.gov/mission/apollo-13/';
    const url3 = 'http://open-notify.org/Open-Notify-API/People-In-Space/';

    return (
        <> {/*Fragmento, así se ponen comentarios,
        el comentario debe ser multilinea y estar 
        encerrado entre llaves*/}
            <div className='navbar--container'>
                <div className='navbar--title'>
                   <a href={url1} target="_blank" id="link--logo">
                    <img src={IssLogo} alt='Logo de ISS'/>

                   </a>
                </div>
                <div className='navbar--links'>
                    <div className='navbar--link'>
                        <a href={url1} target="_blank">Home</a>
                    </div>
                    <div className='navbar--link'>
                        <a href={url2} target="_blank">Apollo 13</a>
                    </div>
                    <div className='navbar--link'>
                        <a href={url3} target="_blank">Astros API</a>
                    </div>
                </div>

            </div >
        </>
    )
}

/*Opcion 2 de funcion

function Navbar () {

}
*/
export default Navbar;
