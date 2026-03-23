//8. Cálculo de Frete Logístico

const prompt = require("prompt-sync")();

let valorFinal;
const taxaFixa = 20.0;
const taxaEntrega = 15.0;
const distancia = parseInt(
    prompt("Digite a distancia em km ate o cliente: ").trim()
);
const entrega = prompt(
    "A entrega e considerada de risco ou urgente? (sim/nao): "
)
    .trim()
    .toLowerCase();
const frete = taxaFixa + distancia * 1.5;

if (distancia > 100 || entrega == "sim") {
    valorFinal = frete + taxaEntrega;
} else {
    valorFinal = frete;
}

console.log(`Custo total do frete: R$${valorFinal}`);
