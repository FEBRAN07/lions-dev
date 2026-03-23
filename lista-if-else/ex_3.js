//3. Rendimento de Fundos Imobiliários

const prompt = require("prompt-sync")();

const cotas = parseInt(
    prompt("Digite a quantidade de cotas que possui: ").trim()
);
const dividendo = parseFloat(
    prompt("Digite o valor do dividendo pago por cota neste mês: ").trim()
);
const rendimento = cotas * dividendo;

if (rendimento >= 100.0) {
    console.log(
        "Você já tem saldo suficiente para comprar uma nova cota e reinvestir!"
    );
} else {
    console.log(
        `Rendimento recebido: R$${rendimento}. Acumule mais para reinvestir`
    );
}
