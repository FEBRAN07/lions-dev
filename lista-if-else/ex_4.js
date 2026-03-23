//4. Consumo de Automóvel

const prompt = require("prompt-sync")();

const distancia = parseFloat(
    prompt("Digite a distancia percorrida (em km): ").trim()
);
const combustivel = parseFloat(
    prompt("Digite a quantidade de combustivel consumido (em litros): ").trim()
);
const media = distancia / combustivel;

if (media < 10.0) {
    console.log(
        "Alerta: Veiculo consumindo muito combustivel.\nNecessario agendar revisao mecanica."
    );
} else {
    console.log("Consumo dentro do padrao operacional");
}
