const prompt = require("prompt-sync")();

const limiteSupTemp = 90;
const limiteInfTemp = 20;
const limitePressao = 50;
const limiteCombustivel = 20;

let turbina = {
    lado: "MOTOR ESQUERDO",
    status: "DESLIGADO",
    sensores: [30, 55, 50],

    atualizarPainel: function () {
        this.sensores[0] = parseFloat(
            prompt("Digite a nova temperatura: ").trim()
        );
        this.sensores[1] = parseFloat(prompt("Digite a nova pressao: ").trim());
        this.sensores[2] = parseFloat(
            prompt("Digite a nova quantidade de combustivel: ").trim()
        );
    },

    verificarStatus: function () {
        if (
            this.sensores[0] > limiteInfTemp &&
            this.sensores[0] < limiteSupTemp &&
            this.sensores[1] > limitePressao &&
            this.sensores[2] > limiteCombustivel
        ) {
            console.log("STATUS DA TURBINA: LIGADO");
            this.status = "LIGADO";
        } else {
            console.log("STATUS DA TURBINA: FALHA CRITICA. BLOQUEIO ATIVADO");
            this.status = "FALHA CRITICA";
            this["bloqueioAtivado"] = true;
        }
    },
};

turbina.atualizarPainel();
turbina.verificarStatus();

console.log(turbina);
