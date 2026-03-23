const prompt = require("prompt-sync")();

let fichaImigracao = {
    nome: "JUAN ITALIA",
    nacionalidade: "ITA",
    trabalho: false,
    documento: ["PASSAPORTE", "VISTO"],

    comprovacaoSaude: function () {
        this.documento.push(
            prompt("Qual a terceira comprovacao de saude?: ")
                .trim()
                .toUpperCase()
        );
    },

    liberacao: function () {
        if (this.nacionalidade != "BR") {
            if (this.documento[1] == "VISTO" && this.documento[2] != null) {
                this["entradaPermitida"] = true;
            } else {
                this["entradaPermitida"] = false;
            }
        } else if (this.documento[0] == "PASSAPORTE") {
            this["entradaPermitida"] = true;
        } else {
            this["entradaPermitida"] = false;
        }
    },
};

fichaImigracao.comprovacaoSaude();
fichaImigracao.liberacao();

console.log(fichaImigracao);
