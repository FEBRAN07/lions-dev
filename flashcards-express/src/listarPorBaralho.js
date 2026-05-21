import baralhos from '../data/baralhos.js';
import flashcards from '../data/flashcards.js';

function listarPorBaralho(idBaralho) {
    let flag = false;
    baralhos.forEach((baralho) => {
        if (baralho.id === idBaralho) {
            flag = true;
        }
    });
    if (!flag) {
        return { error: 'Baralho não encontrado' };
    }
    let flashcardsSelecionados = [];
    flashcards.forEach((f) => {
        if (f.idBaralho === idBaralho) {
            flashcardsSelecionados.push(f);
        }
    });
    if (!flashcardsSelecionados) {
        return {
            error: `Nenhum flashcard do baralho com id ${idBaralho} encontrado`,
        };
    }
    return { data: flashcardsSelecionados };
}

export default listarPorBaralho;
