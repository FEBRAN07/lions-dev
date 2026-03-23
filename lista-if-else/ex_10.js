 //10. Multa por Atraso no Condomínio

const prompt = require("prompt-sync")();

const multa = 0.02;
const valorOriginal = parseFloat(
    prompt("Digite o valor original do condominio: ").trim()
);
const atraso = parseInt(
    prompt("Digite a quantidade de dias de atraso: ").trim()
);
const vencimento = prompt(
    "O vencimento original caiu em um feriado ou final de semana? (sim/nao): "
)
    .trim()
    .toLowerCase();
let valorFinal;

if (atraso > 0 && vencimento == "nao") {
    valorFinal = valorOriginal + valorOriginal * multa + atraso;
} else if (atraso == 0 || vencimento == "sim") {
    valorFinal = valorOriginal;
}

console.log(`Valor atualizado do boleto: R$${valorFinal}`);
