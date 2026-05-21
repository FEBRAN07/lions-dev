import { livros } from '../data/livros.js';

export function deletarLivro(id) {
    const index = livros.findIndex((l) => l.id === id);
    if (index === -1) {
        return { error: 'Livro não encontrado' };
    }
    livros.splice(index, 1);
    return { livros: livros };
}
