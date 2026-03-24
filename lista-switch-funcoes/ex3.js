const prompt = require('prompt-sync')();
const precoPS5 = 3300.0;
const precoXbox = 2000.0;
const precoSwitch = 1500.0;

let pedido = {
    cliente: 'Felipe',
};

let opcao = parseInt(
    prompt(
        'Digite seu produto: 1 para PS5, 2 para Xbox, 3 para Switch: '
    ).trim()
);

registrarProduto(pedido, opcao);
console.log(pedido);

function registrarProduto(registro, opcao) {
    switch (opcao) {
        case 1:
            registro.produto = 'ps5';
            registro.total = precoPS5;
            break;
        case 2:
            registro.produto = 'xbox';
            registro.total = precoXbox;
            break;
        case 3:
            registro.produto = 'switch';
            registro.total = precoSwitch;
            break;
        default:
            registro.produto = 'desconhecido';
            break;
    }
}
