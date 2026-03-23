const prompt = require("prompt-sync")();

let atleta = {
    nome: "Mike Tyson",
    pesoAtual: 100,
    meta: prompt("Digite a meta (emagrecimento ou performance): ")
        .trim()
        .toUpperCase(),
    distanciasPercorridas: [20, 30, 15],

    atualizarDistancias: function () {
        this.distanciasPercorridas.push(
            parseInt(prompt("Digite a corrida atualizada de hoje: ").trim())
        );
    },

    calcularMedia: function () {
        const len = this.distanciasPercorridas.length;
        let media = 0;
        for (let i = len - 3; i < len; i++) {
            media += this.distanciasPercorridas[i];
        }
        return (media /= 3);
    },

    atualizarAtleta: function (media) {
        const len = this.distanciasPercorridas.length
        if (media > 20 && this.meta == "EMAGRECIMENTO") {
            this.pesoAtual--;
            this["metaAtingida"] = true;
        } else if (
            this.distanciasPercorridas[len - 1] >
                this.distanciasPercorridas[len - 2] &&
            this.meta == "PERFORMANCE"
        ) {
            this["novoRecorde"] = true;
        }
    },
};

atleta.atualizarDistancias();

media = atleta.calcularMedia();

atleta.atualizarAtleta(media);

console.log(atleta);
