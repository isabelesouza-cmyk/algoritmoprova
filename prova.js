const readline = require('readline-sync');

class Cinema {
    constructor() {
        // Matriz 4x4 representando as cadeiras do cinema
        // 'L' = Livre, 'X' = Ocupada
        this.cadeiras = [
            ['L', 'L', 'L', 'L'],
            ['L', 'L', 'L', 'L'],
            ['L', 'L', 'L', 'L'],
            ['L', 'L', 'L', 'L']
        ];
    }

    mostrarLayout() {
        //Exibe o layout atual das cadeiras (acima das informações) 
        console.log("\n" + "-".repeat(50));
        console.log("           TELA DO CINEMA");
        console.log("-".repeat(50));
        console.log("     Fileira 1  Fileira 2  Fileira 3  Fileira 4");
        
        // Mostra as cadeiras (acima)
        for (let i = 0; i < 4; i++) {
            let linhaStr = `Linha ${i+1}: `;
            for (let j = 0; j < 4; j++) {
                const status = this.cadeiras[i][j] === 'L' ? " [L] " : " [X] ";
                linhaStr += status;
            }
            console.log(linhaStr);
        }
        
        console.log("\nLegenda: [L] = Livre, [X] = Ocupada");
    }

    comprarIngresso() {
        // Processa a compra de um ingresso (abaixo do layout)
       console.log("-".repeat(50));
        while (true) {
            try {
                console.log("\nDigite a posição da cadeira desejada:");
                const linha = parseInt(readline.question("Linha (1-4): ")) - 1;
                const fileira = parseInt(readline.question("Fileira (1-4): ")) - 1;
                
                // Verifica se a posição é válida
                if (linha < 0 || linha > 3 || fileira < 0 || fileira > 3) {
                    console.log("Erro! Posição inválida. Use valores entre 1 e 4.");
                    continue;
                }
                
                // Verifica se a cadeira está livre
                if (this.cadeiras[linha][fileira] === 'X') {
                    console.log("Erro! Cadeira já ocupada. Escolha outra.");
                    continue;
                }
                
                // Reserva a cadeira pedida pela última pessoa (que pediu)
                this.cadeiras[linha][fileira] = 'X';
                console.log("\nCOMPRA CONFIRMADA!");
                console.log(`Cadeira reservada: Linha ${linha + 1}, Fileira ${fileira + 1}`);
                console.log("Tenha um bom filme!");
                
                readline.question("\nPressione 'Enter' para proximo cliente...");
                return true;
                
            } catch (error) {
                console.log("Erro: Digite apenas números válidos!");
            }
        }
    }

    executarSistema() {
        // Loop de todo processo
        while (true) {
            // Limpa a tela (pedido)
            console.clear();
            
            // Mostra o layout das cadeiras (ACIMA)
            this.mostrarLayout();
            
            // Processa a compra (ABAIXO)
            this.comprarIngresso();
        }
    }
}

// Inicializa o sistema
const cinema = new Cinema();
cinema.executarSistema();