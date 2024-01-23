package bucles;
import java.util.Scanner;
public class DoWhile {
	public static void main(String[] args) {
		/*Ciclo Do While, evalua la expresión en la parte ingerior del ciclo.
		 * Por lo tanto, las declaraciones dentro del blo "do" siempre se ejecutan al menos una vez, 
		 * */
		//cuenta del 1 al 20
		int cuenta = 1;
		do {
			System.out.println(cuenta);cuenta++;
		}while (cuenta<0);//output 1 ya se ejecutó al menos 1 vez
	
		/*
		 * Crear un programa para un cajero bancario
		 * - El programa me mostrará 4 opciones:
		 * 1. Consultar saldo
		 * 2. Ingresar dineros
		 * 3. Retirar dineros
		 * 4. Salir
		 * - Mostrar mensaje de bienvenida al usuario, darle contexto y solicitar que elija una opción (número)
		 * - Mostrar al usuario la opción que eligió y permitir que elija otra opción
		 * - El usuario puede salir del programa escribiendo 4 (salir)
		 */
		
		System.out.println("Bienvenido al banco City Generation,elija algunas de nuestras opciones disponibles");
	
	System.out.println("1. Consultar saldo");
	System.out.println("2. Ingresar dinero");
	System.out.println("3. retirar dinero");
	System.out.println("4. salir");
	
	Scanner scr= new Scanner(System.in);
	int option;
	do {
		option = scr.nextInt();
		
		switch (option) {
		case 1: System.out.println("Consultar saldo");
			break;
		case 2: System.out.println("Ingresar dinero");
			break;
		case 3: System.out.println("Retirar dinero");
			break;
		case 4: System.out.println("Salir");
			break;
		default: System.out.println("Elija una opción válida");
			break;
		}
		
	
			}while (option !=4);
		
	scr.close();
		}}
	
	
	
