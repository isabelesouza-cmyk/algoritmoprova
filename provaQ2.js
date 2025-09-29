const readlineSync = require('readline-sync');

function main() {
    let matriz = [];
    
    console.log("=== ARREY MULTIDIMENSIONAL 3x3 ===");
    
    // Preenchimento da matriz com validação
    for (let i = 0; i < 3; i++) {
        let linha = [];
        for (let j = 0; j < 3; j++) {
            let valorValido = false;
            let valor;
            
            while (!valorValido) {
                valor = readlineSync.question(`Digite um valor para [${i+1}][${j+1}]: `);
                
                // Verifica se é um número válido
                if (!isNaN(valor) && valor.trim() !== '') {
                    valorValido = true;
                } else {
                    console.log("Digite um numero valido!");
                }
            }
            
            linha.push(parseFloat(valor));
        }
        matriz.push(linha);
    }
    
    // Exibe a matriz formatada
    console.log("\n--- MATRIZ ---");
    for (let i = 0; i < 3; i++) {
        console.log(`[${matriz[i].map(val => val.toString().padStart(6)).join(' ')} ]`);
    }
    
    let opcao;
    
    // Loop pedido
    do {
        console.log("\n" + "-".repeat(40));
        console.log("--- OPÇÕES DO ARREY ---");
        console.log("-".repeat(40));
        console.log("1 - Informa o somatório de todos os elementos da linha 1");
        console.log("2 - Informa a multiplicação da diagonal da matriz");
        console.log("3 - Informa a quantidade total de números pares");
        console.log("4 - Encerra o programa");
        console.log("-".repeat(40));
        
        opcao = readlineSync.question("\nInforme sua opcao (1-4): ");
        
        switch (opcao) {
            case "1":
                const somaLinha1 = matriz[0].reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
                console.log(`\nSomatorio da linha 1: ${somaLinha1}`);
                break;
                
            case "2":
                let produtoDiagonal = 1;
                for (let i = 0; i < 3; i++) {
                    produtoDiagonal *= matriz[i][i];
                }
                console.log(`\nMultiplicacao da diagonal: ${produtoDiagonal}`);
                break;
                
            case "3":
                let contadorPares = 0;
                // Percorre toda a matriz
                for (let linha of matriz) {
                    for (let numero of linha) {
                        if (numero % 2 === 0) {
                            contadorPares++;
                        }
                    }
                }
                console.log(`\nQuantidade de numeros pares: ${contadorPares}`);
                break;
                
            case "4":
                console.log("\nPrograma encerrado.");
                break;
                
            default:
                console.log("\nOpcao invalida! Digite apenas 1, 2, 3 ou 4.");
        }
        
        // Aguarda confirmação antes de mostrar o menu novamente (exceto para sair)
        if (opcao !== "4") {
            readlineSync.question("\n Pressione 'Enter' para voltar ao menu.");
        }
        
    } while (opcao !== "4");
}

// Executa o programa
main();