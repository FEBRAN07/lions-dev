let proximoId: number = 1;

export class Filme {
    private id: number;
    private titulo: string;
    private diretor: string;
    private ano: number;
    private genero: string;

    constructor(t: string, d: string, a: number, g: string) {
        this.id = proximoId;
        this.titulo = t;
        this.diretor = d;
        this.ano = a;
        this.genero = g;
        proximoId++;
    }

    public getId(): number {
        return this.id;
    }

    public setTitulo(t: string): void {
        this.titulo = t;
    }
    
    public setDiretor(d: string): void {
        this.diretor = d;
    }

    public setAno(a: number): void {
        this.ano = a;
    }

    public setGenero(g: string): void {
        this.genero = g;
    }
}

export const filmes: Filme[] = [new Filme("Cidade de Deus", "Fernando Meirelles", 2002, "Drama")];