import { livros } from '../data/livros.js';

export function listarLivros() {
    if (livros.length === 0) {
        return { info: 'Não há nenhum livro cadastrado', livros: livros };
    }
    return { livros: livros };
}
