const prompt = require('prompt-sync')();

function menu() {
    console.log('-----------| Sistema de Gestao Financeira |-----------');
    console.log('1. Depositar\t2. Sacar\n3. Extrato\t4. Sair');
    let result = parseInt(prompt().trim());
    return result;
}

let contaEmpresarial = {
    titular: '',
    saldo: 0,
    historico: [],

    operacoes(opcao) {
        switch (opcao) {
            case 1:
                let deposito = parseFloat(
                    prompt('Digite o valor para depositar: ').trim()
                );
                this.saldo += deposito;
                this.historico.push({ tipo: 'deposito', valor: deposito });
                return false;
            case 2:
                let saque = parseFloat(
                    prompt('Digite o valor para sacar: ').trim()
                );
                if (this.saldo >= saque) {
                    this.saldo -= saque;
                    this.historico.push({ tipo: 'saque', valor: saque });
                } else {
                    console.log('Saldo insuficiente');
                }
                return false;
            case 3:
                console.log('Historico de operacoes: ');
                this.historico.forEach((elemento) => {
                    console.log(elemento);
                });
                return false;
            case 4:
                return true;
        }
    },
};

do {
    let resultMenu = menu();
    let resultOp = contaEmpresarial.operacoes(resultMenu);

    if (resultOp) {
        console.log('-----------| Encerrando o programa |-----------');
        break;
    }
} while (true);
