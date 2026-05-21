import { livros } from '../data/livros.js';

export function buscarLivro(titulo, autor, ano, genero) {
    let livrosBuscados = [];
    if (!titulo && !autor && !ano && !genero) {
        return { error: 'Necessário pelo menos um termo de busca' };
    }
    if (titulo) {
        const livrosEncontrados = livros.filter((l) => l.titulo.toLowerCase().includes(titulo.toLowerCase()));
        if (livrosEncontrados.length !== 0) {
            livrosEncontrados.forEach((l) => {
                livrosBuscados.push(l);
            });
        }
    }
    if (autor) {
        const livrosEncontrados = livros.filter((l) => l.autor.toLowerCase().includes(autor.toLowerCase()));
        if (livrosEncontrados.length !== 0) {
            livrosEncontrados.forEach((l) => {
                livrosBuscados.push(l);
            });
        }
    }
    if (ano) {
        ano = parseInt(ano);
        const livrosEncontrados = livros.filter((l) => l.ano === ano);
        if (livrosEncontrados.length !== 0) {
            livrosEncontrados.forEach((l) => {
                livrosBuscados.push(l);
            });
        }
    }
    if (genero) {
        const livrosEncontrados = livros.filter((l) => l.genero.toLowerCase().includes(genero.toLowerCase()));
        if (livrosEncontrados.length !== 0) {
            livrosEncontrados.forEach((l) => {
                livrosBuscados.push(l);
            });
        }
    }
    livrosBuscados = livrosBuscados.filter((obj, index, self) => index === self.findIndex((l) => l.id === obj.id));
    if (livrosBuscados.length === 0) {
        return { error: 'Nenhum livro encontrado' };
    }
    return { livros: livrosBuscados };
}
