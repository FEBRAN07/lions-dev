//4. Orçamento de Projetos

const prompt = require("prompt-sync")();

let filaProjetos = [];
let projeto = {
    cliente: prompt("Digite o nome de uma empresa cliente: ")
        .trim()
        .toLowerCase(),
    valorEstimado: parseFloat(
        prompt("Digite o valor estimado do projeto em reais: ").trim()
    ),
};
const prazo = prompt("O projeto possui prazo de entrega urgente? (sim/nao): ")
    .trim()
    .toLowerCase();
filaProjetos.push(projeto);

if (prazo == "sim" && projeto.valorEstimado > 3000) {
    filaProjetos[0].valorEstimado += filaProjetos[0].valorEstimado * 0.15;
}

console.log(filaProjetos);
