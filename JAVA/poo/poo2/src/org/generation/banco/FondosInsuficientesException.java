package org.generation.banco;
// En esta clase se definen los métodos que arrojan Excepcioes, siempre que en la clase cajero se dispare el chat excepción

/*Requerimientos:
 * 1. Trabajar bajo el paradigma POO
 * 2. Indicar que la clase es una Exception
 * 3. Crear Variables y métodos para instanciar objetos
 * 4. Encapsular
 * */
public class FondosInsuficientesException extends Exception{
	/**
	 * 
	 */
	
	private static final long serialVersionUID = 1L;
	
	//atributos
	private double monto;
//Constructor
	public FondosInsuficientesException(double monto) {
		super();
		this.monto = monto;
	}
	//Getter y setter
	public double getMonto() {
		return monto;
	}
	public void setMonto(double monto) {
		this.monto = monto;
	}
	

}
