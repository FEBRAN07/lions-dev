const prompt = require("prompt-sync")();

let tempInicial = parseFloat(
    prompt("Digite um valor de temperatura inicial: ").trim()
);

for (let i = 1; i < 6; i++) {
    console.log(`Valor da temperatura: ${tempInicial + i * 2}`);
}
