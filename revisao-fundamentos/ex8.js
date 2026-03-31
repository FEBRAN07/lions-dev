const prompt = require('prompt-sync')();

const avaliarPeca = (peca) => {
    if (peca >= 48 && peca <= 52) {
        return true;
    } else {
        return false;
    }
};

function entrarPecas(pecas) {
    for (let i = 0; i < 5; i++) {
        let peca = parseInt(prompt('Digite o tamanho da peca: ').trim());
        if (avaliarPeca(peca)) {
            pecas.push(peca);
        }
    }
}

let pecasAprovadas = [];
entrarPecas(pecasAprovadas);

console.log(
    `Lista de pecas aprovadas:\n${pecasAprovadas}\nQuantidade de pecas que passaram o teste: ${pecasAprovadas.length}`
);
