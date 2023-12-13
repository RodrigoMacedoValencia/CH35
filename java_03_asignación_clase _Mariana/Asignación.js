/*Indica si una persona tiene edad para votar o no*/

let edad = 10;
if (edad >= 18) {
    console.log("puedes votar")
}
else {
    console.log("Todavía no puedes votar");
}

/*2.- Indica si un número puede dividirse entre 7 y 8*/
let num= "75";
if (num / 7 ===0 && num / 8 ===0){console.log(true)}
else{console.log(false);}

/*3.- Indica si un número puede dividirse entre 4 ó 9*/
let numDivisible=56;
if (numDivisible/9==0){console.log("verdadero");
}else if (numDivisible/4==0){console.log("verdadero");}else{console.log("falso");}

/*4.- Realizar un programa que reciba como parametro una categoria de peliculas
-accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror */

let pelicula ="pelea";
switch (pelicula) {
    case "drama":
        console.log("Amarte duele"); break;
    case "comedia":
        console.log("son como niños"); break;
    case "romance":
        console.log("Diario de una pasión"); break;
    case "suspenso":
        console.log("El aro"); break;
    case "terror":
        console.log("Viernes 13");break; 
        default:
            console.log("No hay ese género"); break;

}

/*5-Crear una interfaz de un cajero ATM. Utiliza cualquier parámetro de las siguientes
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios*/

let dinero=1;

if (dinero>30){
    console.log ("puedes retirar")
} else {console.log("no puedes retirar");}


/* 6.-Escribir un código de programa conversor de divisas*/
let cambio="yenes"
let mxn= 2
switch (cambio) {
    case "dolares estadounidenses":
        console.log(mxn*17.3); break;
    case "euros":
        console.log(mxn*18.68); break;
    case "yenes":
        console.log(mxn*.12); break;
    case "libras":
        console.log(mxn*21.74); break;
    case "franco":
        console.log(mxn*19.77);break; 
        default:
            console.log("No tenemos ese tipo de cambio"); break;}


