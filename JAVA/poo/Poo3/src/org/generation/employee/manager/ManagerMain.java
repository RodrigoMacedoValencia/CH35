package org.generation.employee.manager;

public class ManagerMain {
public static void main (String[] args) {
	Manager Fernanda = new Manager ("Fernanda Ramos", 136, 45363.2, "Manager", 3);
	System.out.println(Fernanda);
	
	//Método calcular salario
	double salarioFer = Fernanda.getSalarioBase();Puesto () + " es de $" + salarioFer + " pero posee una antigüedad de " + Fernanda.getAntigüedad() +" años, por lo tanto su salario incrementa a "  );
}}
