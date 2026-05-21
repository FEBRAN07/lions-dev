import baralhos from '../data/baralhos.js';
import flashcards from '../data/flashcards.js';

function deletarBaralho(idBaralho) {
    if (!idBaralho) {
        return { error: 'Id do baralho inválida' };
    }
    const indice = baralhos.findIndex((baralho) => baralho.id === idBaralho);
    if (indice === -1) {
        return { error: 'Baralho não encontrado' };
    }

    baralhos.splice(indice, 1);
    let len = flashcards.length;
    for (let i = 0; i < len; i++) {
        if (idBaralho == flashcards[i].idBaralho) {
            flashcards.splice(i, 1);
            len--;
        }
    }
    return { data: baralhos };
}

export default deletarBaralho;
