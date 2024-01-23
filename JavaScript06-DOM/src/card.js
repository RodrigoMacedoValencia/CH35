/* Para manipular la información de un usuario, necesito crear un perfil mediante un objeto de JS.
*/
const user = {
    username: 'Cindy17',
    age: 32,
    email: 'cindy_rejon@hotmail.com',
    favfilms: ['Big Fish', 'Amelie', 'Moulin Rouge']
}
//Crear una funcion que me permita ingresar el objeto del perfil en el nodo padre
const createUser = (user) => {
    document.getElementById("username").textContent = user.username;
    document.getElementById("age").textContent = user.age;
    document.getElementById("email").textContent = user.email;
    //Mostrando elementos de lista en forma de lista
    //Para mostrar  el array en forma de lista utilizaremos un ciclo forEach, 
    //para recorrer todo el array y traer cada elemento a la lista */
    const ul = document.getElementById("favfilms");
    user.favfilms.forEach(film => {
        const li = document.createElement("li");
        li.textContent = film;
        ul.appendChild(li);
    })
    //Modificando estilos de la ul para quitar viñetas
    ul.style.listStyleType = "none";
    ul.style.padding = 0;
    ul.style.color = "#BF8030";

    //Mostrando elementos de lista en forma de fila
    //document.getElementById("favfilms").textContent = user.favfilms;
}
//Invocando la función
createUser(user);
/* Events para actualizar el username mediante el input y el botón 
*/
const inputName = document.getElementById("name")
const profileBtn = document.getElementById("btn-main");
const userName = document.getElementById("username");

profileBtn.addEventListener("click", () => {
    userName.textContent = inputName.value;
})