import flashcards from '../data/flashcards.js';

function buscarFlashcard(termo) {
    const resultadosPergunta = flashcards.filter((f) =>
        f.pergunta.toLowerCase().includes(termo)
    );
    const resultadosResposta = flashcards.filter((f) =>
        f.resposta.toLowerCase().includes(termo)
    );
    if (resultadosPergunta.length === 0 && resultadosResposta.length === 0) {
        return {
            error: 'Não foi encontrado flashcard com termo na resposta ou na pergunta',
        };
    }
    const juntos = resultadosPergunta.concat(resultadosResposta);
    const resultado = juntos.filter(
        (elemento, index) => juntos.indexOf(elemento) === index
    );
    return { data: resultado };
}

export default buscarFlashcard;
