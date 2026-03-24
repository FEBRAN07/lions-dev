const prompt = require('prompt-sync')();

const cotaDolar = 5;
const cotaEuro = 6;
const cotaGBP = 7;

const casaCambio = (valorReais, moedaDestino) => {
    switch (moedaDestino) {
        case 'dolar':
            return valorReais / cotaDolar;
        case 'euro':
            return valorReais / cotaEuro;
        case 'libras':
            return valorReais / cotaGBP;
        default:
            return valorReais;
    }
};

const reais = parseFloat(
    prompt('Digite o valor em reais para ser convertido: ').trim()
);
const moeda = prompt('Digite a moeda para qual sera feita a conversao: ')
    .trim()
    .toLowerCase();
const conversao = casaCambio(reais, moeda);

console.log(`${reais} apos conversao para ${moeda}: ${conversao.toFixed(2)}`);
