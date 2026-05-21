let proximoId = 1;
export class Filme {
    id;
    titulo;
    diretor;
    ano;
    genero;
    constructor(t, d, a, g) {
        this.id = proximoId;
        this.titulo = t;
        this.diretor = d;
        this.ano = a;
        this.genero = g;
        proximoId++;
    }
    getId() {
        return this.id;
    }
    setTitulo(t) {
        this.titulo = t;
    }
    setDiretor(d) {
        this.diretor = d;
    }
    setAno(a) {
        this.ano = a;
    }
    setGenero(g) {
        this.genero = g;
    }
}
export const filmes = [new Filme("Cidade de Deus", "Fernando Meirelles", 2002, "Drama")];
