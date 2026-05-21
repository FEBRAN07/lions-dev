import { filmes } from "../data/filmes.js";
export default function atualizarFilme(id, t, d, a, g) {
    if (!t && !d && !a && !g) {
        return { error: "Pelo menos um campo para atualizar é necessário" };
    }
    const index = filmes.findIndex((f) => f.getId() === id);
    if (index === -1) {
        return { error: "Não foi possível encontrar filme" };
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
    return { filme: filmes.at(index) };
}
