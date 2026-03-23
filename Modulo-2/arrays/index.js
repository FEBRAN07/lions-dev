const prompt = require("prompt-sync")();

let notas = [];

const prova1 = parseFloat(prompt(`Digite a nota da primeira prova: `));
const prova2 = parseFloat(prompt("Digite a nota da segunda prova: "));
notas.push(prova1, prova2);

console.log(`Média das notas: ${(notas[0] + notas[1]) / 2}`);
