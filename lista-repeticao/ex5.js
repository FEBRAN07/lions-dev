const prompt = require("prompt-sync")();

const capacidadeMaxima = 1000;

let pesoAcumulado = 0;
let count = 0;

while (true) {
    const peso = parseFloat(prompt("Digite o peso da caixa: ").trim());

    if (pesoAcumulado + peso >= capacidadeMaxima) {
        console.log(
            "ALERTA: Carga maxima atingida. Interrompendo carregamento"
        );
        break;
    } else {
        pesoAcumulado += peso;
        count++;
    }
}

console.log(`Total de peso carregado: ${pesoAcumulado}`);
console.log(`Quantidade de caixas alocadas: ${count}`);
