const prompt = require("prompt-sync")();

const custoUpgrade = 5000;

const viagem1 = {
    destino: "ESPANHA",
    milhas: 2000,
};

const viagem2 = {
    destino: "ALEMANHA",
    milhas: 1500,
};

let cliente = {
    nome: "Doll",
    historico: [viagem1, viagem2],
    somaMilhas: 0,

    adicionarViagem: function () {
        let viagem = {
            destino: prompt("Digite o destino da viagem: ")
                .trim()
                .toUpperCase(),
            milhas: parseInt(
                prompt(
                    "Digite a quantidade de milhas acumuladas na viagem: "
                ).trim()
            ),
        };
        this.historico.push(viagem);
    },

    somarMilhas: function () {
        this.historico.forEach(
            (elemento) => (this.somaMilhas += elemento.milhas)
        );
    },

    upgradeCliente: function () {
        if (this.somaMilhas > custoUpgrade) {
            this.somaMilhas -= custoUpgrade;
            this["categoria"] = "PLATINUM";
            console.log("Parabens! Voce atingiu a categoria Platinum!");
        } else {
            this["categoria"] = "GOLD";
            console.log(
                `Milhas faltando para upgrade: ${custoUpgrade - this.somaMilhas}`
            );
        }
    },
};

cliente.adicionarViagem();
cliente.somarMilhas();
cliente.upgradeCliente();
console.log(cliente);

cliente["categoria" ] = "platinum"