//Rodrigo Macedo con Eveida Palos. 
//calificación: 5 de 5 


package Ejercicio4Paquete;

import java.util.Scanner;

public class EjercicioPaquete4 {
	public static void main (String[] agrs) { //se agrego el modo publico para que funcione el programa 
		
		 Scanner scanner = new Scanner(System.in); //  se acompleta la s con scanner, se agrega scanner el system.in
   
   System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
   String j1 = scanner.nextLine(); //se modifica s a scanner
   
   System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
   String j2 = scanner.nextLine(); //se modifica s a scanner, se quito el  "Scanner s2 = new Scanner();" porque no va 
   
   if (j1 .equals(j2)) { //se agrego .equals y se puso entre parentesis al jugador 2
     System.out.println("Empate");
   } else {
     int g = 2;
     
     switch(j1) {
       case "piedra":
         if (j2.equals ("tijeras")) { //agregamos .equals en todos los if
           g = 1;
         }
         break;//se agrega break
         
       case "papel":
         if (j2.equals ("piedra")) {
           g = 1;
         } //  se agrega el cierre de sentencia
         break;//se agrega break
         
       case "tijeras": //se cambio a tijeras en plural
         if (j2.equals("papel")) {
           g = 1;
         }
         break;
       default:
     }
     System.out.println("Gana el jugador " + g);
   }
 
   }
}