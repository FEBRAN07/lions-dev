const prompt = require('prompt-sync')();

const avaliarPontuacao = (pontos) => {
    let soma = 0;
    pontos.forEach((ponto) => {
        soma += ponto;
    });

    switch (true) {
        case soma > 200 || pontos[pontos.length - 1] > 90:
            return 'veterano';
        default:
            return 'iniciante';
    }
};

function ganharPontos() {
    let pontos = [];
    for (let i = 0; i < 3; i++) {
        pontos.push(
            parseInt(prompt('Digite a quantidade de pontos obtidos: ').trim())
        );
    }
    return pontos;
}

let pontosUsuario = ganharPontos();
console.log(avaliarPontuacao(pontosUsuario));
