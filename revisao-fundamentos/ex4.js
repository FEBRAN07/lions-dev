const prompt = require('prompt-sync')();
const senhaPadrao = 'admin2024';

function getSenha(tentativa) {
    let senha = prompt('Digite a senha do sistema: ').trim();

    if (senha != senhaPadrao) {
        console.log(`Senha incorreta. Tentativas restantes: ${5 - tentativa}`);
        return false;
    } else {
        console.log('Acesso Autorizado!');
        return true;
    }
}

for (let i = 1; i <= 5; i++) {
    let result = getSenha(i);
    if (result) {
        break;
    }
    if (i == 5) {
        console.log('Conta Bloqueada: Numero maximo de tentativas excedido');
    }
}
