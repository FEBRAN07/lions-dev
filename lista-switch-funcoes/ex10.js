const prompt = require('prompt-sync')();

let caixa = {
    nomeOperador: 'Marcelo',
    saldo: 100.0,
    historico: [],

    registrarVenda(valor) {
        this.saldo += valor;
    },

    registrarDespesa(valor) {
        this.saldo -= valor;
    },
};

function operacao(op) {
    let valor = 0;

    switch (op) {
        case 'v':
            valor = parseFloat(prompt('Digite o valor da venda: ').trim());
            caixa.registrarVenda(valor);
            caixa.historico.push('entrada');
            return 0;
        case 'd':
            valor = parseFloat(prompt('Digite o valor da despesa: ').trim());
            caixa.registrarDespesa(valor);
            caixa.historico.push('saida');
            return 0;
        case "s":
            return 1;
    }
}

while (true) {
    let op = prompt('Digite "V" para venda, "D" para despesa e "S" para sair: ')
        .trim()
        .toLowerCase();
}
