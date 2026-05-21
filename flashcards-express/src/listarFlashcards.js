import flashcards from '../data/flashcards.js';

function listarFlashcards() {
    if (flashcards.length == 0) {
        return { error: 'Não existem flashcards' };
    }
    return { data: flashcards };
}

export default listarFlashcards;
