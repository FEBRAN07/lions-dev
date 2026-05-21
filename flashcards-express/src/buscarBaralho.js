import baralhos from '../data/baralhos.js';

function buscarBaralho(termo) {
    const resultados = baralhos.filter((baralho) =>
        baralho.titulo.toLowerCase().includes(termo)
    );

    if (resultados.length > 0) {
        return { data: resultados };
    } else {
        return { erro: 'Nenhum baralho encontrado com esse termo' };
    }
}

export default buscarBaralho;
