//Comentarios de una sola línea

/*Comentarios 
multilinea*/


/*alert ("hola mundo");

console.log ("este es un mensaje para mi consola")*/


/*var nombre = prompt("ingresa tu nombre");
alert("Hola," + nombre + " Bienvenido a la ch35"); */

/*var numero1 = parseInt (prompt("ingresa el primer número:")); 
var numero2 = parseInt (prompt ("ingresa el segundo:"));

console.log ("suma:" + (numero1 + numero2));
console.log ("resta:" + (numero1 - numero2));
console.log ("multiplicación:" + (numero1 * numero2));
console.log ("división:" + (numero1 / numero2)); */

/*
var nombre = prompt("Ingresa tu nombre");
var edad = parseInt(prompt("¿Cual es tu edad?"));

if (edad>40) {
    alert("HOLA, " + nombre + " Ya tas viejo");
    } else if(edad>30) {
    alert("HOLA, " + nombre + " Eres un chavo ruco >.<");
  } else if(edad>=18) {
    alert("HOLA, " + nombre + " pásale:)");
  }else if(edad<18){
    alert("HOLA, " + nombre + " eres un chavo"); 
  }*/

//comentarios de una sola línea

/*comentarios
multilinea*/

/*alert ("Hola mundo");

console.log("Este es un mensaje para mi consola")*/

/*var nombre = prompt ("Ingresa tu nombre");
alert("Hola, " + nombre + " Bienvenido a la ch35"); */

/* var numero1 = parseInt (prompt("Ingresa el primer número:"));
var numero2 = parseInt (prompt("Ingresa el segundo número")); 

console.log("suma:" + (numero1 + numero2))
console.log("resta:" + (numero1 - numero2))
console.log("multiplicación:" + (numero1 * numero2))
console.log("división:" + (numero1 / numero2)) */

//TIPOS DE DATOS Y VARIABLES

//scope es el alcance de nuestras variables

/*var, let, const la diferencia es el alcance 
var tiene un alcance global
let tiene un alcnace local
const se mantiene sin ningún cambio*/

/*string:cadena de texto (lleva comillas)
number: numero
noolena: true/false
null:nulo
undefinied:no esta asigando o definido*/


let nombre = "Daniel";
let invitadxsExtras = 2;
let esMayorEdad = true;
let edad = 24;
let invitadxEspecial = null;
let horaDeSalida = undefined;

//document.write(nombre); 

  /*Encasillamiento o tipado
  nos es util para el mantenimiento del código
ya que lo hace más legible y fácil de entender.
prevención de errores para reducir la probabilidad de los mismos
mejora el rendimiento de nuestro programa*/

/*let numero=15;
let texto="hola";

// con encasillamiento

let numeroEncasillado= Number=5;
let textoEncasillado= String = "hola";

//typeof palabra reservar y para saber que tipo de dato tenemos

console.log(typeof(nombre));

let funcionNumber = console.log (typeof Number (nombre));
metodoParseint = Console.log (typeof (nombre));
metodoParsefloat = Console.log(typeof ParseFloat(nombre))

/* ParseInt y ParseFloat son funciones que se utilizan para convertir cadenas
de texto en números, ambas nos ayudan en ete cambio*/

/*Conversion de number a string

console.log(typeof String(edad));
console.log(typeof edad.toString());*/

/*conversión de boolean a number*/

/*let numero= Number (esMayorEdad);

console.log (typeof (numero));*/

/*let texto = String(esMayorEdad);

console.log(typeof(texto));
console.log (typeof esMayorEdad.toString());*/

/*let negacion = !esMayorEdad;

console.log (negacion);*/

//concatenar es básicamente unir strings 

/*saludo = "hola humane ";

let frase = "el futuro es hoy";

texto= saludo + frase;

console.log(texto);*/

/*let harina = "Harina";
let leche = "Leche";
let mantequilla = "Mantequilla";
let vainilla = "Vainilla";
let huevo = "Huevo";
let nutella = true;

let functionNumber = console.log (typeof Number(harina));
nutella= Number (nutella);
console.log (typeof (nutella));

hotcakes = "los ingredientes para la reseta son: " +" "+ harina +"+ "+ leche +"+ "+" "+ mantequilla +"+ "+ vainilla +"+ "+ huevo;
document.write(hotcakes);

let texto = String(nutella);

console.log(typeof(texto));
console.log (typeof nutella.toString());

let negacion = !nutella;*/


/*let texto = String (nutella);
console.log(typeof(nutella));
console.log(typeof nutella.toString());
let negacion = !nutella;
console.log(negacion);

texto de Diego para hacer más funciones 
*/

//console.log (); nos permite visualizar en consola del navevador el código de Java script

//console.warn(); Muestra un mensaje de advertencia

//console.error (); Muestra un mensaje de error

//console.table();

let firstname;
firstname= "Daniel";
let lastname = "Maldonado";
console.log(firstName +" "+ lastname);

console.log ("Mi nombre es " + firstname + " y mi apellido es" + lastname)

/*ECMAScript 6 (ES6). interpolacion de cadenas

backticks ``
Para variables de $ {}
Texto para string*/



 /*Array. se traduce como matriz o arregle. Es un tió de dato que pertenece a JS, EN EL CUAL SE ALMACENA UNA COLECCIÓN DE ELEMENTOS DE MANERA ORDENADA. 

los arrays se pueden manipular mediante métodos esécíficos.

Los elementos de una arrat se contabilizan como indices, por lo cual el primer elemento del array posee el indice 0. un array posee una cantidad de elementos-

se declaran como variables, seguido del signo igual y corcetes. Dentro de cada corchete vive un elemento con un tipo de dato.*/

let arreglo1= [ ]; // array vacio
console.log (`Array vacío ${arreglo1}`);
//Los elementos de un array se separan mediante comas 
let cars = ["Volkswagen", "BMW", "Mazda", "Kia"]; // array de string
console.log (cars);
//longitud e índice son diferentes. La longitud (lenght) es el número de elementos y el índice correspondiente a cada elemento a partir de 0.

console.log(typeof(cars)); //Output: object

//array de numbers
let salariesmxn = [ 15000, 12000, 18000, 25000, 28000, 10000, 18500, 10200, 20500,15300, 17000, 172000];
console.log (salariesmxn.length); //output: 12
console.log(salariesmxn);

/*
Objetos. Los objetos son tipos de datos en JS, con una estructura definida que nos permite almacenar información mediante llaves (claves) y valores.
Su sintaxis es la siguiente
    const object {
        clave1: valor1 (dato1),
        clave2: valor2 (dato2)
    }  
Los objetos pueden almacenar diferentes tipos de valores.
*/

const employee = {
firsName: "Rey David",
lastName: "Martinez",
age: 29,
country: "México"
}

console.log (employee);

//Mostrando mi array como table


