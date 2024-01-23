package operadoresLógicos;

public class ejerciciosOperadores {

	public static void main(String[] args) {
		

		
		int anios = 5;
		
		boolean esInfante = true;
		
		boolean costoInfante = anios <= 12 && esInfante;
		
		System.out.println ("Es peque"+ costoInfante);
		
		//|| or 
		
		String cliente = "cliente123";
		String credenciales = "rodrigo123";
		
		boolean credencialCorrecta = cliente.equals("cliente123") && credenciales.equals("rodrigo123");
		
		System.out.println ("Las credenciales sí son válidas" + credencialCorrecta);
	//|| or
		double costoPasaje = 380.5;
		int edad = 58;
		boolean credenInapam = false;
		
		boolean descuentoAdultoMayor = edad >= 60 || credenInapam;
		
		System.out.println("Tiene descuento"+ costoPasaje);
		
		//! not
		boolean asientosDisponibles = true;
		boolean libres = true;
		boolean asientosConDescuento = !libres;
		
		System.out.println("Tenemos asientos con descuento"+ asientosConDescuento);
		
	/*
	 Autobús a oaxaca
costo boleo 350
boleto*
62 asientos
4 destinados a adultxs mayores
6 a estudiantes
	  */	
		
		int costoBoleto = 350;
		int totalAsientos = 62;
		
		int asientosAdultosMayores= 4;
		int asientosEstudiantes= 6;
		
		double descuentoInapam = 0.35;
		double descuentoEstudiante = 0.30;
		
		if (totalAsientos > asientosAdultosMayores) {
			System.out.println("Asientos Disponibles para Adultos Mayores");}
		
		
		int edad1 = 60;
        boolean credenInapam1 = false;
		boolean descuentoAdultoMayor1 = edad >= 60 || credenInapam;
		
		if (descuentoAdultoMayor) {
            System.out.println("Tiene descuento. El costo con descuento es: $" + (costoBoleto * (1 - descuentoInapam)));
        } else {
            System.out.println("No tiene descuento. El costo es: $" + costoBoleto);
        }
		
	} 

}


