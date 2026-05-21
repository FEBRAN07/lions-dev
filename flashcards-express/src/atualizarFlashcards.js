import flashcards from '../data/flashcards.js';

function atualizarFlashcard(idFlashcard, pergunta, resposta) {
    if (!pergunta) {
        return { error: 'Pergunta inválida' };
    } else if (!resposta) {
        return { error: 'Resposta inválida' };
    }

    const indice = flashcards.findIndex(
        (flashcard) => flashcard.id === idFlashcard
    );

    if (indice === -1) {
        return { error: 'Flashcard não encontrado' };
    }

    flashcards[indice].pergunta = pergunta;
    flashcards[indice].resposta = resposta;
    return { data: flashcards[indice] };
}
export default atualizarFlashcard;
