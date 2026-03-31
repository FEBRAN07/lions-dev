const prompt = require('prompt-sync')();

let funcionario = {
    nome: prompt('Digite o nome do funcionario: ').trim().toLowerCase(),
    cargo: prompt('Digite o cargo do funcionario: ').trim().toLowerCase(),
    salarioAtual: parseFloat(
        prompt('Digite o salario atual do funcionario: ').trim()
    ),

    revisarSalario() {
        if (this.salarioAtual < 2500) {
            this.salarioAtual *= 1.15;
        } else {
            this.salarioAtual *= 1.05;
        }

        this.revisaoAplicada = true;
    },
};

funcionario.revisarSalario();

console.log(funcionario);
