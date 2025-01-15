import java.util.Random;
import java.util.Scanner;

public class JogoDeCorrida {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        // Configuração inicial
        int numCarros = 3; // Número de carros
        int comprimentoPista = 30; // Comprimento da pista
        int[] posicoes = new int[numCarros]; // Posições dos carros

        System.out.println("Bem-vindo ao Jogo de Corrida!");
        System.out.println("Pressione Enter para iniciar a corrida...");
        scanner.nextLine();

        boolean corridaTerminada = false;
        while (!corridaTerminada) {
            // Atualiza posições dos carros
            for (int i = 0; i < numCarros; i++) {
                posicoes[i] += random.nextInt(3); // Avança 0, 1 ou 2 posições
                if (posicoes[i] >= comprimentoPista) {
                    corridaTerminada = true;
                }
            }

            // Mostra o estado atual da corrida
            exibirPista(posicoes, comprimentoPista);

            // Pausa antes da próxima rodada
            if (!corridaTerminada) {
                System.out.println("Pressione Enter para continuar...");
                scanner.nextLine();
            }
        }

        // Declara o vencedor
        for (int i = 0; i < numCarros; i++) {
            if (posicoes[i] >= comprimentoPista) {
                System.out.println("Carro " + (i + 1) + " venceu a corrida!");
            }
        }

        scanner.close();
    }

    // Exibe o estado atual da pista
    public static void exibirPista(int[] posicoes, int comprimentoPista) {
        for (int i = 0; i < posicoes.length; i++) {
            for (int j = 0; j < comprimentoPista; j++) {
                if (j == posicoes[i]) {
                    System.out.print(i + 1); // Representa o carro com seu número
                } else {
                    System.out.print("-");
                }
            }
            System.out.println(); // Nova linha para cada carro
        }
    }
}
