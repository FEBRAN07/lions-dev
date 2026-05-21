import { filmes } from "../data/filmes.js";

export default function atualizarFilme(id: number, t?: string, d?: string, a?: number, g?: string): object {
    if (!t && !d && !a && !g) {
        return {error: "Pelo menos um campo é necessário para atualizar"};
    }

    const index: number = filmes.findIndex((f) => f.getId() === id);
    if (index === -1) {
        return {error: "Não foi possível encontrar filme"};
    }
    if (t) {
        filmes.at(index)?.setTitulo(t);
    }
    if (d) {
        filmes.at(index)?.setDiretor(d);
    }
    if (a) {
        filmes.at(index)?.setAno(a);
    }
    if (g) {
        filmes.at(index)?.setGenero(g);
    }
    return {filme: filmes.at(index)};
}