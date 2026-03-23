//7. Alerta de Reposição de Estoque

const prompt = require("prompt-sync")();

const qteAtual = parseInt(
    prompt("Digite a quantidade atual do produto no estoque: ").trim()
);
const qteMinima = parseInt(
    prompt("Digite a quantidade minima de seguranca do produto: ").trim()
);

if (qteAtual < qteMinima) {
    const diferenca = qteMinima - qteAtual;
    console.log(
        `Alerta: Estoque baixo! E necessario solicitar a compra de ${diferenca} unidades`
    );
} else {
    console.log("Estoque regularizado");
}
