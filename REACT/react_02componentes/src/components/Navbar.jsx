import './Navbar.css' //Importación de CSS

//Crear funcion que contiene el marcado para que vivan nuestro codigo
const Navbar = () => {
    return (
        <> {/*Fragmento, así se ponen comentarios,
        el comentario debe ser multilinea y estar 
        encerrado entre llaves*/}
            <div className='navbar--container'>
                <div className='navbar--title'>
                    <h1>GenMex-35</h1>
                </div>
                <div className='navbar--links'>
                    <div className='navbar--link'>
                        <a href='#'>Home</a>
                    </div>
                    <div className='navbar--link'>
                        <a href='#'>About</a>
                    </div>
                    <div className='navbar--link'>
                        <a href='#'>Astros API</a>
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
