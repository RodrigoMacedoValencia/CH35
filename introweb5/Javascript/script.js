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
  }

