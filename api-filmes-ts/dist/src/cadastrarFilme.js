import { Filme, filmes } from "../data/filmes.js";
export default function cadastrarFilme(t, d, a, g) {
    if (!t || !d || !a || !g) {
        return { error: "Todos os campos são necessários" };
    }
    const novoFilme = new Filme(t, d, a, g);
    filmes.push(novoFilme);
    return { filme: novoFilme };
}
