import baralhos from '../data/baralhos.js';
import flashcards from '../data/flashcards.js';

function deletarFlashcard(idFlashcard) {
    if (!idFlashcard) {
        return { error: 'Id do flashcard inválida' };
    }
    const indice = flashcards.findIndex(
        (flashcard) => flashcard.id === idFlashcard
    );

    if (indice === -1) {
        return { error: 'Flashcard não encontrado' };
    }
    flashcards.splice(indice, 1);
    return { data: flashcards };
}

export default deletarFlashcard;
