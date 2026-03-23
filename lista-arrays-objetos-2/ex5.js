const prompt = require("prompt-sync")();

const mentor1 = {
    nome: "GISA",
    area: "PEDAGOGIA",
};

const mentor2 = {
    nome: "DOLL",
    area: "TECNOLOGIA",
};

let projeto = {
    nomeCoordenador: "PACHECO",
    limiteVagas: 3,
    area: "TECNOLOGIA",
    mentores: [mentor1, mentor2],

    cadastrarVoluntario: function () {
        if (this.mentores.length >= this.limiteVagas) {
            this["status"] = "Bloqueado para inscricoes";
            return;
        }

        let voluntario = {
            nome: prompt("Digite o nome do voluntario: ").trim().toUpperCase(),
            area: prompt("Digite a area de atuacao do voluntario: ")
                .trim()
                .toUpperCase(),
        };

        if (voluntario.area != this.area) {
            this["status"] = "Bloqueado para inscricoes";
        } else {
            this.mentores.push(voluntario);
        }
    },
};

projeto.cadastrarVoluntario();

console.log(projeto);
