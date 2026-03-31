const prompt = require('prompt-sync')();

function painel() {
    console.log(
        '1 - Cafe Expresso\t2 - Cappuccino\n3 - Cha \t4 - Chocolate Quente\n0 - Sair'
    );
    let codigo = parseInt(
        prompt('Digite o codigo de sua bebida desejada: ').trim()
    );
    return codigo;
}

function prepararBebida(codigo) {
    switch (codigo) {
        case 1:
            console.log('Preparando seu Cafe Expresso...');
            break;
        case 2:
            console.log('Preparando seu Cappuccino...');
            break;
        case 3:
            console.log('Preparando seu Cha...');
            break;
        case 4:
            console.log('Preparando seu Chocolate Quente...');
            break;
        case 0:
            console.log('Volte sempre!');
            break;
        default:
            console.log('Codigo Invalido. Selecione uma opcao existente.');
    }
}

console.log('Bem vindo!\n');

while (true) {
    let codigo = painel();
    prepararBebida(codigo);
    if (!codigo) {
        break;
    }
}
