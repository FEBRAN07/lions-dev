const prompt = require('prompt-sync')();

function menu() {
    console.log('---------| Calculadora |---------');

    console.log(
        '1. Adicao\t2. Subtracao\n3. Multiplicacao\t4. Divisao\n5. Porcentagem\t6. Sair'
    );

    return parseInt(prompt('Digite a operacao: ').trim());
}

function adicao() {
    while (true) {
        let n1 = parseFloat(prompt('Digite o primeiro numero: ').trim());
        let n2 = parseFloat(prompt('Digite o numero a ser somado: ').trim());

        if (!isNaN(n1) && !isNaN(n2)) {
            return n1 + n2;
        } else {
            console.log('Por favor, digite dois numeros');
        }
    }
}

function subtracao() {
    while (true) {
        let n1 = parseFloat(prompt('Digite o primeiro numero: ').trim());
        let n2 = parseFloat(prompt('Digite o numero a ser subtraido: ').trim());

        if (!isNaN(n1) && !isNaN(n2)) {
            return n1 - n2;
        } else {
            console.log('Por favor, digite dois numeros');
        }
    }
}

function multiplicacao() {
    while (true) {
        let n1 = parseFloat(prompt('Digite o primeiro numero: ').trim());
        let n2 = parseFloat(
            prompt('Digite o numero pelo qual sera multiplicado: ').trim()
        );

        if (!isNaN(n1) && !isNaN(n2)) {
            return n1 * n2;
        } else {
            console.log('Por favor, digite dois numeros');
        }
    }
}

function divisao() {
    while (true) {
        let n1 = parseFloat(prompt('Digite o primeiro numero: ').trim());
        let n2 = parseFloat(
            prompt('Digite numero pelo qual sera dividido: ').trim()
        );

        if (!isNaN(n1) && !isNaN(n2)) {
            if (n2 === 0) {
                console.log('Nao e possivel dividir por 0');
            } else {
                return n1 / n2;
            }
        } else {
            console.log('Por favor, digite dois numeros');
        }
    }
}

function porcentagem() {
    while (true) {
        let n1 = parseFloat(prompt('Digite o primeiro numero: ').trim());
        let n2 = parseFloat(
            prompt('Digite a porcentagem do primeiro: ').trim()
        );

        if (!isNaN(n1) && !isNaN(n2)) {
            return n1 * (n2 / 100);
        } else {
            console.log('Por favor, digite dois numeros');
        }
    }
}

function operacoes(op) {
    switch (op) {
        case 1:
            return adicao();
        case 2:
            return subtracao();
        case 3:
            return multiplicacao();
        case 4:
            return divisao();
        case 5:
            return porcentagem();
        case 6:
            return 'sair';
        default:
            return 'erro';
    }
}

while (true) {
    let op = menu();
    let result = operacoes(op);

    if (result === 'sair') {
        console.log('Encerrando o programa...');
        break;
    }
    if (result !== 'erro') {
        console.log(`Resultado: ${result.toFixed(2)}`);
    } else {
        console.log('Por favor, digite uma operacao valida');
    }
}
