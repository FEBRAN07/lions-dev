//2. Orçamento de Projetos

const prompt = require("prompt-sync")();

const valorHora = 45.0;
const desconto = 0.1;
const horas = parseInt(
    prompt("Digite a quantidade de horas estimadas de trabalho: ").trim()
);
const ong = prompt("O cliente é uma ONG? (sim/nao): ").trim().toLowerCase();
let valorSistema = horas * valorHora;

if (ong == "sim" && valorSistema > 5000.0) {
    valorSistema -= valorSistema * desconto;
} else if (ong != "nao" && ong != "sim") {
    console.log("Responda sim ou nao");
    return;
}

console.log(`Valor do sistema: R$${valorSistema}`);
