/* 
//Programacion sincronica
function two(){
    console.log("dos"); //imprime esta que da inicio, pero no se invoca
}
function one (){
    console.log("uno"); //se invoca
    two(); //pero aquí se invoca
    console.log("tres"); //se invoca , de tal manera que queda 1,2,3
}
one ();
console.log ("*******************"); */

/*
//Modelo de asincrona que sigue siendo sincrona
const twoAsync = () => {
    console.log("dos Async");
}
const oneAsync = () => {
    console.log("uno Async");
    twoAsync();
    console.log("tres Async");
} oneAsync(); */

/*
//Programacion asincrona.
//setTimeout que recibe una funcion anonima y establece un tiempo(en milisegundos
//1000ms = 1s) de ejecucion para cumplir con la condicion de asincronismo

const twoAsync = () => {
    setTimeout( () => {
        console.log("dos Async");
    }, 5000);
}
const oneAsync = () => {
    setTimeout(function(){
    console.log("uno Async");
},2000)
    twoAsync();
    console.log("tres Async");
}
oneAsync(); */

// Trabajando con promesas mediante Fetch API 
const url = "https://jsonplaceholder.typicode.com/users";
//usando fetch
fetch(url)
    //si se cumple la promesa, vamos a traer los datos de la API y se convertira en tipo
    //json para poder mostrarlos en consola
    .then(response => response.json())
    .then(response => {
        console.log(response);//Mostrando en consola todos los usuarios de la API
        console.log(response[0].name); //mostrando en consola el usuario con el indice 0 y trayendo solamente el nombre 
    })
    .catch(error => console.error("¡Ups!Algo salió mal", error));//mensaje de error, catch muestra error

// > - Usando fetch para mostrar en navegador 
const botonInfo = document.querySelector("#btn-mensaje");
const info = document.querySelector("#mensaje");
//Variable para guardar la información que se va a traer desde la 
//API: Debe ser de tipo null(no tiene nada, pero luego puede llevar algo)
let post = null;

//Consumiendo API con fetch(Promesas)
botonInfo.addEventListener("click", () => {   //cada que haga click pasa evento
    fetch("https://jsonplaceholder.typicode.com/users/6")
        .then(response => response.json()) //respuesta
        .then(response => {
            post = response;//Guardo los datos de response en la variable de tipo null, para modificar el dato
            //Mandamos a llamar la variable desde la función (Pero, esa no la hemos
            //hecho, hay que hacerla)
            mostrarDatos(post);
        })
        .catch(error => console.error("¡Problemas!", error));
});
//Funcion que me permite manipular la variable de tipo null
//Quiero traer name, username, email y phone del user de la API
const mostrarDatos = (post) => {
    //Creando nodos (elementos) mediante DOM Manipulation
    const name = document.createElement("h2");
    const userName = document.createElement("h3");
    const email = document.createElement("p");
    const phone = document.createElement("p");

    //Ponerlos en el HTML (innetHTML)
    name.innerHTML = post.name;
    userName.innerHTML = post.username;
    email.innerHTML = post.email;
    phone.innerHTML = post.phone;

    //Hacer que aparezca en el navegador
    info.appendChild(name);
    info.appendChild(userName);
    info.appendChild(email);
    info.appendChild(phone);
}

//TIENDA
//Usando fetch para mostrar en navegador (mostrar productos)
const botonProductos = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");
let productos = null;

botonProductos.addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(response => {
            productos = response;
            //Funcion por definir
            mostrarProductos(productos);
        })
        .catch(error => console.error("¡Cuidao!", error))
});
//Funcion para crear, agregar y mostrar elementos desde el DOM
const mostrarProductos = (productos) => {
    //mando a llama las llaves de title, price, description, category, image desde la API
    productos.map((productos) => { //El método map toma el array (objeto en JS) y crea nuevos arreglos
        //que se pueden manipular de manera individual. Así, evitamos el uso de un ciclo forEach
        const imagen = document.createElement("img");
        const titulo = document.createElement("h2");
        const precio = document.createElement("h3");
        const descripcion = document.createElement("p");
        const categoria = document.createElement("p");
        const separador = document.createElement("hr");

        //Enviar a HTML con innerHTML
        imagen.src = productos.image;
        imagen.width = 200;
        titulo.innerHTML = productos.title;
        precio.innerHTML = productos.price;
        descripcion.innerHTML = productos.description;
        categoria.innerHTML = productos.category;

        //Mostrarlos en navegador al agregarlos a su padre, tienda es el papa , imagen es niño
        tienda.appendChild(imagen);
        tienda.appendChild(titulo);
        tienda.appendChild(precio);
        tienda.appendChild(descripcion);
        tienda.appendChild(categoria);
        tienda.appendChild(separador);
    })
}

//NUEVO
//Metodo POST utilizando fetch.Me permite crear recursos en la API. Desp. de fetch es diferente a los anteriores
fetch("https://jsonplaceholder.typicode.com/posts", {
    //Indicar que es un metodo de tipo POST
    method: "POST",
    //Creo el body de mi nuevo objeto, siguiendo las mismas llaves de la 
    //API existente (userId,title,body)
    //otra forma de hacerlo //
    body: JSON.stringify({ //books
        userId: 1986, //userid
        title:"El principito", //book
        body: "Autor: Antoine de Saint-Exupéry" //author. value
    }),

//Definir headers
headers: {"Content-type": "application/json; charset=UTF-8"}
})//fin de mi fetch
//inicio de mis promesas
.then(response => response.json())
.then(response => {
    console.log(response) //se muestra el json en consola
})

/*>>>>>>>>>>>>>>>>programacion asíncrona (promise)<<<<<<<*/
//Funcion flecha de tipo async-await
//Indico que es una funcion asincrona con la palabra reservada async
//antes de los parametros
const getUser = async () =>{
    //Para que se cumpla la promesa, no utiliza then, sino que usamos try.
    //para errores, se sigue utilizando catch
  try{ 
    //Poner retardo para que se ejecute de manera asincrona. Tengo que crear una nueva
    //promesa que recibe un setTimeout
    await new Promise(resolve => setTimeout (resolve,3000));
    //Mi promesa que se ejecuta
    const response = await fetch("https://jsonplaceholder.typicode.com/users/4");
     const data = await response.json(); //lo guarda en json
     console.log(data);
  } catch(error){
    console.error("Error inexplicable",error);  //despues de error inexplicable, va (,error) para mandar a llamar el error
  }
}
//Invocar función, por favor, que no se olvide
getUser();
/* >>>>>>LocalStorage<<<<<<<<<<<*/
//Nos permite crear, modificar, eliminar objetos de JavaScript de manera local(en equipo)
//Crear un objeto de JS con sus llaves y valores
const user = [
{
        id: 1,
        nombre: "Cindy",
        apellido: "Rejon",
        email: "cindy_rejon@hotmail.com",
        posicion: "alumna",
        empresa: "Generation"

    },

    {
    id: 2,
    nombre: "Diana",
    apellido: "Alvarez",
    email: "diana.alv@hotmail.com",
    posicion: "alumna",
    empresa: "Generation"
}];
//Convertir el objeto creado a notación JSON y almacenarlo en el localStorage
localStorage.setItem("usuario", JSON.stringify(user));

//Traer el objeto desde el localStorage
const users = JSON.parse(localStorage.getItem("usuario"));
console.log(users);
console.log(`${user[1].nombre} con posicion ${user[1].posicion}, trabaja en ${user[1].empresa}`);

//sessionStorage, solo vive cuando la sesion este activa, el otro vive en el catche del servidor