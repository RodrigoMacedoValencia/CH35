package MangosNaranjas;

import java.util.Scanner;

public class MangosNaranjas {
    private int mangos;
    private int naranjas;

    public MangosNaranjas(int mangos, int naranjas) {
        this.mangos = mangos;
        this.naranjas = naranjas;
    }

    public void imprimir() {
        int cajas = calcularCajas();
        int mangosPorCaja = mangos / cajas;
        int naranjasPorCaja = naranjas / cajas;

        System.out.println("Entradas: " + mangos + " " + naranjas);
        System.out.println("Salida: El número de cajas es: " + cajas +
                " El número de mangos en una caja es: " + mangosPorCaja +
                " El número de naranjas en una caja es: " + naranjasPorCaja);
    }

    private int calcularCajas() {
        int maxCajas = Math.min(mangos, naranjas);
        for (int cajas = maxCajas; cajas > 0; cajas--) {
            if (mangos % cajas == 0 && naranjas % cajas == 0) {
                return cajas;
            }
        }
        return 1; // Si no hay coincidencia, al menos una caja
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese el número de mangos: ");
        int mangos = scanner.nextInt();

        System.out.print("Ingrese el número de naranjas: ");
        int naranjas = scanner.nextInt();

        MangosNaranjas mn = new MangosNaranjas(mangos, naranjas);
        mn.imprimir();
    }
}