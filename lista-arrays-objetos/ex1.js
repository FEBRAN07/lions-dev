//1. Lista de Presença

const prompt = require("prompt-sync")();

let listaAlunos = ["Matheus", "Isabela"];
listaAlunos.push(prompt("Digite o nome do aluno que acabou de chegar: ").trim());

if (listaAlunos.length == 3) {
    console.log("Turma formada com sucesso! Alunos: " + listaAlunos);
}
