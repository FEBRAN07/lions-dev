const prompt = require('prompt-sync')();

const validar = (nome, codigo) => {
    if (nome.length > 5 && codigo > 1000) {
        return true;
    } else {
        return false;
    }
};

const nome = prompt('Digite o nome do usuario: ').trim().toLowerCase();
const codigo = parseInt(prompt('Digite o codigo do usuario: ').trim());

switch (validar(nome, codigo)) {
    case true:
        console.log('Acesso concedido');
        break;
    case false:
        console.log('Acesso negado');
        break;
}
