package bucles;

public class forloops {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
/*El ciclo For, nos proporciona una forma compacta de terar sobre valores
 * for (inicialización; condición; contador)
 * (incremento/decremento){
 * bloque código
 * } 
 */
		/*//for con variable local
		for (int numero = 0; numero <=10; numero++)
		{ System.out.println ("número es igual a "+ numero);
	}

		//for con variable global
		int contador;
		for (contador=1; contador <=5; contador++) {System.out.println("La cuenta es "+contador);}*/
		
int filas = 5;
for(int i= 0; i < filas; i ++) {
	//bloque de código que va iterar con el bucle
	for (int j = 0; j <= i; j++){
		System.out.print ("*");
}System.out.println();

}
		
	}//método
	}//clase 
