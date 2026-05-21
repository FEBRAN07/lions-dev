import { livros } from '../data/livros.js';

export function cadastrarLivro(titulo, autor, ano, genero) {
    if (!titulo) {
        return { error: 'Título inválido' };
    } else if (!autor) {
        return { error: 'Autor inválido' };
    } else if (!ano) {
        return { error: 'Ano inválido' };
    } else if (!genero) {
        return { error: 'Gênero inválido' };
    }

    let novoId = 1;
    if (livros.length > 0) {
        novoId = livros[livros.length - 1].id + 1;
    }
    const novoLivro = {
        id: novoId,
        titulo: titulo,
        autor: autor,
        ano: ano,
        genero: genero,
    };
    livros.push(novoLivro);
    return { livroCadastrado: novoLivro };
}
