package org.generation.letras;
/*Crear un programa que se solicite un mensaje al usuario y cuente cuántas vocales, consonantes,números y carácteres posee dicho mensaje
 * 		Letras: métodos para interactuar con el usuario
 * 		LetrasMain: Vamos a instanciar los objetos
 * 		Contador: métodos para contar vocales, consonantes,número y símbolos*/

/*Necesitamos establecer dos grupos de métodos:
 * Grupo1: métodos booleanos para determinarn si corresponde o no
 * Grupo2: Métodos que van a devolver el conteo de dichos caracteres*/
public class Contador {
	//Grupo 1
	public boolean esVocal(char caracter) {
		return(caracter =='a' || caracter =='e' || caracter =='i' || caracter =='o' || caracter =='u' || caracter =='A' || caracter =='E' || caracter =='I' || caracter =='O' || caracter =='U');
	}
	public boolean esNumero(char caracter) {
		//casting para poder utilizar la tabla ASCII (48 - 77)
		short codigoAscii= (short)caracter;
		return codigoAscii>= 48 && codigoAscii <= 57;
	}
	public boolean esConsonante(char caracter) {
		//casting para poder utilziar la tabla ASCII (65-90 Y 97 -122)
		short codigoAscii= (short)caracter;
		return (codigoAscii>= 65 && codigoAscii <= 90) || (codigoAscii>= 97 && codigoAscii <= 122) && !esVocal(caracter);
	}
	public boolean esSimbolo(char caracter) {
		return !(esVocal(caracter) || esNumero(caracter) || esConsonante(caracter));
		}
	//Grupo 2
	public int contarVocales(String palabra) {
		int vocales = 0;
		for (char caracter : palabra.toCharArray()) {
			if (esVocal(caracter)) {
				vocales++;
				
			}
			
		}
		return vocales; 
	}
	
	public int contarNumeros(String palabra) {
		int Numeros = 0;
		for (char caracter : palabra.toCharArray()) {
			if (esNumero(caracter)) {
				Numeros++;
				
			}
			
		}
		return Numeros; 
	}
	
	public int contarConsonantes(String palabra) {
		int Consonantes = 0;
		for (char caracter : palabra.toCharArray()) {
			if (esConsonante(caracter)) {
				Consonantes++;
				
			}
			
		}
		return Consonantes; 
	}
	
	public int contarSimbolos(String palabra) {
		int Simbolos = 0;
		for (char caracter : palabra.toCharArray()) {
			if (esSimbolo(caracter)) {
				Simbolos++;
				
			}
			
		}
		return Simbolos; 
	}
}
