//6. Gestão de Ponto e Horas Extras

const prompt = require("prompt-sync")();

const valorHoraNormal = parseFloat(
    prompt("Digite seu valor ganho por hora normal: ").trim()
);
const horasExtras = parseInt(
    prompt("Digite a quantidade de horas extras trabalhadas no mes: ").trim()
);
const valorHoraExtra = valorHoraNormal * 1.5;
const valorTotal = valorHoraExtra * horasExtras;

console.log(`O valor a receber de horas extras este mes e: R$${valorTotal}`);
