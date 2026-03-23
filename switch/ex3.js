const prompt = require('prompt-sync')();

const codigoProduto = prompt('Digite o codigo do produto: ')
    .trim()
    .toUpperCase();

switch (codigoProduto) {
    case 'A1':
        console.log('Voce escolheu: Batata Chips');
        break;
    case 'B2':
        console.log('Voce escolheu: Amendoim');
        break;
    case 'C3':
        console.log('Voce escolheu: Biscoito de Chocolate');
        break;
    default:
        console.log('Codigo invalido. Tente novamente');
}
