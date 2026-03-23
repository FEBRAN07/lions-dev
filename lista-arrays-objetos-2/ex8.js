const prompt = require("prompt-sync")();

let pacote = {
    nomeEmpresa: "MESTRE BEER STORE",
    orcamentoTotal: 2000,
    openBarFechado: false,
    consumoExtras: [],

    lancarBebidas: function () {
        this.consumoExtras.push(
            prompt("Digite o nome da primeira bebida importada: ")
                .trim()
                .toUpperCase()
        );
        this.consumoExtras.push(
            prompt("Digite o nome da segunda bebida importada: ")
                .trim()
                .toUpperCase()
        );
        let custo = parseFloat(
            prompt("Digite o valor total das duas bebidas: ").trim()
        );
        return custo;
    },

    atualizarOrcamento: function (custo) {
        this.orcamentoTotal -= custo;

        if (this.orcamentoTotal < 0) {
            console.log("OPEN BAR FECHADO");
            this.openBarFechado = true;
            this["multaExcedente"] = 500.0;
        }
    },
};

let custo = pacote.lancarBebidas();
pacote.atualizarOrcamento(custo);

console.log(pacote);
