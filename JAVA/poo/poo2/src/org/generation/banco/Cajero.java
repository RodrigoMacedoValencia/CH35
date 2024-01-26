package org.generation.banco;

/*
 * En cajero se instancia el objeto de tipo CuentaBancaria y se invocan los métodos definidos
 * Aquí si se pueden establecer los try-catch de la excepción que se definió en el método retirar
 * Los resultados se muestran en consola
 * 
 * */
public class Cajero {
	public static void main(String[] args) {
		CuentaBancaria cuentaDaniel = new CuentaBancaria(6969);// Cuenta bancaria con su idCuenta
		// simulamos que tenemos un Scanner y el cliente introduce dinero
		System.out.println("Depositando $500");
		cuentaDaniel.depositar(500);

		// revisar si se actualiza el saldo(debe haber 500 pesos
		System.out.println("El nuevo saldo es de $" + cuentaDaniel.getSaldo());
		//Retirando dineritos
				try {
					//Simulamos nuevamente el Scanner para retirar
					System.out.println("Retirando $300");
					cuentaDaniel.retirar(300);
					System.out.println("El nuevo saldo es de $" + cuentaDaniel.getSaldo()); //Output: $200
					
					System.out.println("Retirando $200");
					cuentaDaniel.retirar(200);
					System.out.println("El nuevo saldo es de $" + cuentaDaniel.getSaldo()); //Output: $0
					
					System.out.println("Retirando $300");
					cuentaDaniel.retirar(300);
					System.out.println("El nuevo saldo es de $" + cuentaDaniel.getSaldo()); //Output: Exception
				} catch (FondosInsuficientesException e) {
					System.out.println("\u001B[31mLo siento, te faltan $\u001B[31m" + e.getMonto());	
				
			e.printStackTrace(); //Método de excepciones que imprime el seguimiento del flujo de la excepción
		}
	}
}