const prompt = require('prompt-sync')();
const taxaServico = 1.1;

let valorTotal = parseFloat(
    prompt('Registre o valor total consumido na mesa: ').trim()
);
let quantidadePessoas = parseInt(
    prompt('Digite a quantidade de pessoas que irao dividir a conta: ').trim()
);

if (quantidadePessoas <= 0) {
    console.log('ERRO: A quantidade de pessoas deve ser maior que zero');
    return;
}

valorTotal *= taxaServico;
let valorPessoa = valorTotal / quantidadePessoas;

console.log(
    `Valor da taxa de servico: ${taxaServico}\nValor total com a taxa: R$${valorTotal}\nValor que cada pessoa devera pagar: R$${valorPessoa}`
);
