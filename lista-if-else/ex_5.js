//5. Análise de Risco de Crédito Bancário

const prompt = require("prompt-sync")();

const salario = parseFloat(prompt("Digite seu salario liquido: ").trim());
const parcela = parseFloat(prompt("Digite o valor da parcela: ").trim());
const restricao = prompt("O cliente possui restricao no nome? (sim/nao): ")
    .trim()
    .toLowerCase();
const limite = salario * 0.3;

if (parcela <= limite && restricao == "nao") {
    console.log("Credito aprovado!");
} else if (parcela > limite || restricao == "sim") {
    console.log("Credito negado: Parcela acima do limite ou restricao no CPF");
} else {
    console.log("Digite sim ou nao");
}
