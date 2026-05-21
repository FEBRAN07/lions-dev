import { livros } from '../data/livros.js';

export function atualizarLivro(id, novoTitulo, novoAutor, novoAno, novoGenero) {
    const index = livros.findIndex((l) => l.id === id);
    if (index === -1) {
        return { error: 'Livro não encontrado' };
    }
    if (novoTitulo) {
        livros[index].titulo = novoTitulo;
    }
    if (novoAutor) {
        livros[index].autor = novoAutor;
    }
    if (novoAno) {
        livros[index].ano = novoAno;
    }
    if (novoGenero) {
        livros[index].genero = novoGenero;
    }
    return { livroAtualizado: livros[index] };
}
