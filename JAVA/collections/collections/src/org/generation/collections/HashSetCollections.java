package org.generation.collections;

import java.util.Arrays;
import java.util.HashSet;

public class HashSetCollections {
		public static void main(String[] args) {
			
			//HasSet es una clase de Collections donde cada elemento es único,es decir, no se repiten los elementos.
			HashSet<String> animals = new HashSet<String>();
			
			animals.add("Buho");
			animals.add("Caballo");
			animals.add("Perro");
			animals.add("Gato");
			animals.add("Ornitorrinco");
			animals.add("Cebra");
			animals.add("Ornitorrinco");
			animals.add("Cebra");
			animals.add("Cebra");
			animals.add("mapache");
			animals.add("Capibara");
			animals.add("Capibara");
			
			//imprimir hashset
			
			System.out.println(animals);
			
			//Conocer si un elementose encuentra dentro del set: contains();
			System.out.println(animals.contains("Capibara"));
			//Eliminar un elemento:remove();
			animals.remove("Cebra"); //elimino
			System.out.println(animals); //imprimo el sey sin el elemento eliminado
			
			//Agregando elementos en una sola línea 
			animals.addAll(Arrays.asList("Perrito", "Gatito","Osito", "Nahual", "Tepezcuincle"));
			/*La clase Hashset no garantiza que los elementos estén en orden ya que busca eficientar la búsqueda y recuperación del os elementos .
			utiliza tablas hash para almacenar los elementos y mostrarlos al usuario*/
			
			System.out.println(animals);
			//Limpiar el HashSet: .clear();
			animals.clear();
			System.out.println(animals);
			
		}
}
