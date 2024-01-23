/*
Manipulación del DOM.
-Leer y traer nodos del árbol del DOM.
document. getElementById (trae elementos por Id)
document.getElementsByClassName (trae elementos por Class)
document.getElementsByTagName (trae elementos por Etiquetas)
*/
/*La variable vive en un nodo y no se puede cambiar, el nodo si cambia, por eso se 
//usa const


//get getElementById
*/ 
const titulo = document.getElementById("title1");
console.log(titulo);
console.log(titulo.innerText); 
/* traer un string (texto que vive en un id)*/

//getElementsByClassName
const titulos = document.getElementsByClassName("title");
console.log(titulos);
console.log(titulos.length);//Obtengo longitud de elementos, devuelve la longitud de elementos de la clase
//clase
console.log(typeof titulos); //Muestra que es un object porque es una colección de arrays

//getElementsByTagName
const tituloH3 = document.getElementsByTagName("h3");
console.log(tituloH3); //trae a todos los h3
console.log(tituloH3[0].innerText); //Trae el primero que es 0

/*Metodos para llamar elementos mediante selectores de CSS,
se usa para procesos más especificos y la sintaxis es querySelector
-document.querySelector("selector");//#,.,<>
-document.querySelectorAll().Seleccionar cualquier elemento que se especifiquem.
siempre van a traer el primer elemento con el selector indicado
//querySelector */
const query = document.querySelector ("#title4"); //usa lenguaje css,poner comillas para que funcione
console.log(query.innerText);

const queryClass = document.querySelector(".title"); //selecciona primer elemento de esa clase
console.log(queryClass);

//querySelectorAll
const querySelectorAll = document.querySelectorAll(".title"); //selecciona todos los elementos de la clase
console.log(querySelectorAll)

//Manipular elementos del DOM (styles) con Java Script
titulo.style.textAlign = "center";
titulo.style.color = "#5058f2";

//Manipular el texto de un elemento
const titulo2 = document.querySelector("#title2");
titulo2.innerText = "Sesion de Manipulacion del Dom-CH35"
titulo2.style.color = "#F23D3D";

/*Metodos para crear y agregar elementos en el DOM. Este proceso se divide
en dos: "crear el nodo y agregar el nodo"
-Crear nodos
*document.createElement("element,puede ser parrafo, lista") -->Crea elementos a partir de
etiquetas.
-document.createTextNode("text") -->Crea texto dentro de las etiquetas.*/
const nodo1 = document.createElement("h4"); //crear nodo con h4
const imgNodo = document.createElement("img"); //crear nodo con imagen

/* -Agregar nodos, mandamos a llamar el elemento padre y le pasamos la propiedad
con la constante que guarda el nodo creado
    *parentElement.appendChild(const);       //hace referencia nodo hijo
    *parentElement.append(const);
    *parentElement.insertBefore(const);
    *parentElement.insertAdjacentElement(const);
    Utilizaremos mayormente appendChild
    */
//Obtengo el elemento padre por tag, class o id
     const parentElement = document.getElementById("dif");
     //crear el texto que vivira en el nodo 1
     const textNodo1 = document.createTextNode ("Imagen agregada desde el Dom");
     //inserto texto en el nodo1
     nodo1.appendChild(textNodo1);
     //insertar nodos en el elemento padre
     parentElement.appendChild(nodo1);
     parentElement.style.fontFamily = "'Karla', sans-serif";
     parentElement.style.color = "#A62F03";
     /*Agregando imagen */
     //Inserto el imgNodo en el elemento padre para definirlo posteriormente
     parentElement.appendChild(imgNodo);
     //Accedo a las propiedades de la imagen
     imgNodo.src = "../JS06-DOM/src/assets/octocat.jpg";
     imgNodo.alt = "Octocat-gitHub";
     imgNodo.width = "300";

/*Otra forma de leer y modificar nodos
document.outerHTML (leer)
node.innerHTML (Escribir sobre el nodo)*/
const elementOuter = titulo2.outerHTML;
console.log(elementOuter);
titulo2.innerHTML = ("Manipulación del DOM-CH35");