const prompt = require('prompt-sync')();

function menu() {
    console.log('---------| Calculadora |---------');

    console.log(
        '1. Adicao\t2. Subtracao\n3. Multiplicacao\t4. Divisao\n5. Porcentagem\t6. Sair'
    );

    return parseInt(prompt('Digite a operacao: ').trim());
}

function adicao(resultado) {
    while (true) {
        let n2 = parseFloat(
            prompt('Digite o numero a ser somado ao resultado: ').trim()
        );

        if (!isNaN(n2)) {
            return resultado + n2;
        } else {
            console.log('Por favor, digite dois numeros');
        }
    }
}

function subtracao(resultado) {
    while (true) {
        let n2 = parseFloat(
            prompt('Digite o numero a ser subtraido do resultado: ').trim()
        );

        if (!isNaN(n2)) {
            return resultado - n2;
        } else {
            console.log('Por favor, digite dois numeros');
        }
    }
}

function multiplicacao(resultado) {
    while (true) {
        let n2 = parseFloat(
            prompt('Digite o numero para multiplicar o resultado: ').trim()
        );

        if (!isNaN(n2)) {
            return resultado * n2;
        } else {
            console.log('Por favor, digite dois numeros');
        }
    }
}

function divisao(resultado) {
    while (true) {
        let n2 = parseFloat(
            prompt('Digite o numero para dividir o resultado: ').trim()
        );

        if (!isNaN(n2)) {
            if (n2 === 0) {
                console.log('Nao e possivel dividir por 0');
            } else {
                return resultado / n2;
            }
        } else {
            console.log('Por favor, digite dois numeros');
        }
    }
}

function porcentagem(resultado) {
    while (true) {
        let n2 = parseFloat(
            prompt('Digite a porcentagem do resultado: ').trim()
        );

        if (!isNaN(n2)) {
            return resultado * (n2 / 100);
        } else {
            console.log('Por favor, digite dois numeros');
        }
    }
}

function operacoes(op) {
    switch (op) {
        case 1:
            resultado = adicao(resultado);
            return 'sucesso';
        case 2:
            resultado = subtracao(resultado);
            return 'sucesso';
        case 3:
            resultado = multiplicacao(resultado);
            return 'sucesso';
        case 4:
            resultado = divisao(resultado);
            return 'sucesso';
        case 5:
            resultado = porcentagem(resultado);
            return 'sucesso';
        case 6:
            return 'sair';
        default:
            return 'erro';
    }
}

let resultado = 0;

while (true) {
    let op = menu();
    let resposta = operacoes(op);

    if (resposta === 'sair') {
        console.log('Encerrando o programa...');
        break;
    }
    if (resposta === 'sucesso') {
        console.log(`Resultado: ${resultado.toFixed(2)}`);
    } else {
        console.log('Por favor, digite uma operacao valida');
    }
}
