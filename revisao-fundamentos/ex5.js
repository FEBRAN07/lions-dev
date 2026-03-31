const prompt = require('prompt-sync')();

function calcularFaturamento(vendas) {
    let total = 0;
    vendas.forEach((venda) => {
        total += venda;
    });
    return total;
}

function calcularMedia(total, vendas) {
    let media = total / vendas.length;
    return media;
}

let vendasDoDia = [];

for (let i = 0; i < 5; i++) {
    vendasDoDia.push(
        parseFloat(prompt('Digite o valor da venda do dia: ').trim())
    );
}

let faturamento = calcularFaturamento(vendasDoDia);
let media = calcularMedia(faturamento, vendasDoDia);

console.log(
    `Total faturado: R$${faturamento}\tMedia de valor por venda: R$${media}`
);
