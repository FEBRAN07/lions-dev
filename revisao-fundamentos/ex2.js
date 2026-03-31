const prompt = require('prompt-sync')();

function getCredencial() {
    while (true) {
        let credencial = prompt('Possui credencial VIP? (sim/nao): ')
            .trim()
            .toLowerCase();

        if (credencial !== 'sim' && credencial !== 'nao') {
            console.log('ERRO: Entre sim ou nao');
        } else {
            return credencial;
        }
    }
}

function avaliarEntrada(idade, credencial) {
    if (idade < 18) {
        console.log('Acesso Negado: Menor de idade');
    } else if (credencial == 'sim') {
        console.log('Acesso liberado para a Area VIP');
    } else {
        console.log('Acesso liberado para a pista comum');
    }
}

let idadeUsuario = parseInt(prompt('Digite sua idade: ').trim());
let credencial = getCredencial();

avaliarEntrada(idadeUsuario, credencial);
