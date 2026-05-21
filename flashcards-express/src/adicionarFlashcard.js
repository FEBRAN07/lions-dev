import flashcards from '../data/flashcards.js';
import baralhos from '../data/baralhos.js';

function adicionarFlashcard(pergunta, resposta, idBaralho) {
    if (!pergunta) {
        return { error: 'Pergunta inválida' };
    } else if (!resposta) {
        return { error: 'Resposta inválida' };
    } else if (!idBaralho) {
        return { error: 'Id do baralho inválido' };
    }

    let flag = false;
    baralhos.forEach((b) => {
        if (b.id === idBaralho) {
            flag = true;
        }
    });
    if (!flag) {
        return { error: 'Id do baralho não encontrado' };
    }
    let id = 1;
    const len = flashcards.length;
    if (len > 0) {
        id = flashcards[len - 1].id + 1;
    }
    const novoFlashcard = {
        id: id,
        pergunta: pergunta,
        resposta: resposta,
        idBaralho: idBaralho,
    };
    flashcards.push(novoFlashcard);
    return { data: novoFlashcard };
}

export default adicionarFlashcard;
