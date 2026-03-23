//9. Sistema de Comissão de Vendas

const prompt = require("prompt-sync")();

let comissao;
const valorTotal = parseFloat(
    prompt("Digite o valor total em vendas no mes: ").trim()
);

if (valorTotal >= 20000.0) {
    comissao = valorTotal * 0.05;
} else {
    comissao = valorTotal * 0.02;
}

console.log(`Valor da comissao: R$${comissao}`);
