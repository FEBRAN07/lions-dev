const prompt = require("prompt-sync")();

let resposta;
let totalCompra = 0;

do {
    let compra = parseFloat(prompt("Digite o valor do item: ").trim());
    totalCompra += compra;

    resposta = prompt("Deseja adicionar mais algum item? (sim/nao): ")
        .trim()
        .toLowerCase();
} while (resposta == "sim");

console.log(`Valor total da compra: R$${totalCompra}`);
