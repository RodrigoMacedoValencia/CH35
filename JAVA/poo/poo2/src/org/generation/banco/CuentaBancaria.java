package org.generation.banco;

/*
 * En esta clase se definen los métodos para disparar las excepciones , es decir, el try catch
 * Se definen otros métodos como depositar dinero, retirar dinero, 
 * 	requerimientos: 
 * - trabajar bajo POO
 * - eNCAPSULAR (Modificadores, getters y setters
 * -crear variables y métodos para instanciar objetos
 * */
public class CuentaBancaria {
	private double saldo;
	// Nombre del cliente, RFC, etc...
	private int idCuenta;

//constructor que recibe solamente el atributo idCuenta.
	public CuentaBancaria(int idCuenta) {
		this.idCuenta = idCuenta;
	}

	// Método que nos permita depositar dinero
	public void depositar(double monto) {
		saldo += monto; // Esto es lo mismo que saldo = saldo + monto

	}

	// Método para retirar dinero
	/*
	 * Verificar si el monto a retirar es menor o igual al saldo actual. -true Se
	 * puede retirar el monto solicitado - false No se puede retirar y calculamos
	 * cuánto dinero falta para completar la operación
	 */
	public void retirar(double monto) throws FondosInsuficientesException {
		if (monto <= saldo) {
			saldo -= monto;// Esto es lo mismo que saldo = saldo - monto
		} else {
			double faltante = monto - saldo;
			/*
			 * crear la instancia del a clase FondosInsuficientesException con las palabras
			 * reservadas throw, new e y le pasamos el parámetro correspondiente a la
			 * variable que disparar la excepción
			 */
			throw new FondosInsuficientesException(
					faltante);/* Esto nos va a marca un error al querer instanciar de manera local y no lo
								 * encuentra, para ello necesitamos "heredarlo"como parte del método. La palabra
								 * reervada throws y el nombre de la excepción*/
		}
	}

	// getters y setters
	public double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}

	public int getIdCuenta() {
		return idCuenta;
	}

	public void setIdCuenta(int idCuenta) {
		this.idCuenta = idCuenta;
	}

}
