//3. Ficha Médica Veterinária

const prompt = require("prompt-sync")();

const paciente = {
    nome: prompt("Digite o nome do cachorro: ").trim(),
    raca: prompt("Digite a raca do cachorro: ").trim(),
    idade: parseInt(prompt("Digite a idade do cachorro: ").trim()),
};

if (paciente.idade >= 8) {
    console.log(
        `O paciente ${paciente.nome} ja e senior e precisa de exames de rotina`
    );
} else {
    console.log("Paciente na faixa de idade regular");
}

console.log(paciente);
