const prompt = require('prompt-sync')();

const senhaCorreta = 4209;

function tentativaSenha() {
    const senha = parseInt(prompt('Digite a senha: ').trim());

    return senha;
}

while (tentativaSenha() != senhaCorreta) {
    console.log('Acesso negado: Senha incorreta. Digite a senha novamente');
}

console.log('Cofre liberado com sucesso');
