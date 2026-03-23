// const prompt = require("prompt-sync")();

// let notas = [];
// const prova1 = parseFloat(prompt("Digite a nota da primeira prova: "));
// const prova2 = parseFloat(prompt("Digite a nota da segunda prova: "));
// notas.push(prova1);
// notas.push(prova2);

// const media = (notas[0] + notas[1]) / 2;
// console.log(`Media das notas: ${media}`);

const prompt = require("prompt-sync")();

let listaTarefas = [];
for (let i = 0; i < 3; i++) {
    listaTarefas.push(prompt("Digite uma tarefa que precisa fazer hoje: "));
}

console.log(`Voce tem ${listaTarefas.length} tarefas na sua lista!`);

listaTarefas.pop();
console.log("Voce concluiu uma tarefa!");
console.log(listaTarefas);
