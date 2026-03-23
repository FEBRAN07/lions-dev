// 1. Margem de Lucro

const prompt = require("prompt-sync")();

const custo = parseFloat(
    prompt("Digite o custo de produção de um lote: ").trim()
);
const venda = parseFloat(
    prompt("Digite o valor de venda desse mesmo lote: ").trim()
);

const lucroBruto = venda - custo;

if (lucroBruto < 500.0) {
    console.log("Atenção: Margem de lucro perigosamente baixa!");
} else {
    console.log(`Margem de lucro saudável: R$ ${lucroBruto}`);
}
