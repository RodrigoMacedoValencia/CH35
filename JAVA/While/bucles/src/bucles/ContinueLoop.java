package bucles;

public class ContinueLoop {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		/*
		 * Instrucciones de salto:
		 * continue -- Interrumpe la iteracion de bucle, sis se procede una condición epecífica y continua con la siguiente.
		 * */
		//con continue, ejecutando la sentencia conficional, pero cumpliendo la confición del bucle for.
		for (int cliente =1; cliente <= 100; cliente++) {
			if (cliente ==5) {
				System.out.println("Cliente n"+ cliente +"? Ganaste!!!");
			
		continue;}
		
		 System.out.println ("Eres el cliente número " + cliente);}
	
	

}

}