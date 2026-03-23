//2. Baixa no Estoque

const prompt = require("prompt-sync")();

let estoqueTamanhos = [15, 5, 10];
const PVendidas = parseInt(
    prompt(
        "Digite a quantidade de camisetas P que foram vendidas hoje: "
    ).trim()
);
estoqueTamanhos[0] -= PVendidas;

if (estoqueTamanhos[0] < 5) {
    console.log("Alerta: Estoque de luvas tamanho P esta critico!");
} else {
    console.log(
        `Estoque atualizado. Quantidade restante do tamanho P: ${estoqueTamanhos[0]}`
    );
}
