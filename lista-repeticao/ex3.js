const prompt = require('prompt-sync')();

let totalCompra = 0;

function compra() {
    let compra = parseFloat(prompt('Digite o valor do item: ').trim());
    totalCompra += compra;

    let resposta = prompt('Deseja adicionar mais algum item? (sim/nao): ')
        .trim()
        .toLowerCase();

    return resposta;
}

do {} while (compra() == 'sim');

console.log(`Valor total da compra: R$${totalCompra}`);
