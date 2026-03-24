const prompt = require('prompt-sync')();

function criticidade(nivel) {
    switch (nivel) {
        case 1:
            return 'atendimento basico';
        case 2:
            return 'equipe especializada';
        case 3:
            return 'gestao de crise';
        default:
            return 'atendimento basico';
    }
}

function cadastrarProblema(fila) {
    const nivel = parseInt(
        prompt('Digite o nivel de criticidade do problema: ').trim()
    );
    fila.push(criticidade(nivel));
}

let filaAtendimento = [];

while (parseInt(prompt('Digite 1 para continuar e 0 para sair: ').trim())) {
    cadastrarProblema(filaAtendimento);
}

console.log(filaAtendimento);
