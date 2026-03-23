const prompt = require("prompt-sync")();

const dia1 = {
    data: "06/03/25",
    paginasLidas: 30,
};

const dia2 = {
    data: "07/03/25",
    paginasLidas: 40,
};

let registro = {
    nome: "FELIPE",
    pontosDeLeitura: 10,
    historicoDias: [dia1, dia2],

    registrarLeitura: function () {
        console.log("Informe a data atual:");
        const dia = prompt("Digite o dia: ").trim();
        const mes = prompt("Digite o mes: ").trim();
        const ano = prompt("Digite o ano: ").trim();
        const paginas = parseInt(
            prompt("Digite o numero de paginas lidas: ").trim()
        );

        const leitura = {
            data: dia + "/" + mes + "/" + ano,
            paginasLidas: paginas,
        };

        this.historicoDias.push(leitura);
    },

    atualizarPontos: function () {
        const ultimo = this.historicoDias.length - 1;

        if (
            this.historicoDias[ultimo].paginasLidas > 50 &&
            this.pontosDeLeitura > 0
        ) {
            console.log("SUPER LEITOR!");
            this.historicoDias[ultimo].data += " - Super Leitor!";
            this.pontosDeLeitura *= 2;
        } else if (this.historicoDias[ultimo].paginasLidas < 10) {
            console.log("Pontos de Leitura divididos!");
            this.pontosDeLeitura /= 2;
        }
    },
};

registro.registrarLeitura();
registro.atualizarPontos();

console.log(registro);
