const prompt = require("prompt-sync")();

let carrinho = {
    nomeCliente: prompt("Digite seu nome: ").trim().toUpperCase(),
    assinatura: prompt("Digite sua assinatura: ").trim().toUpperCase(),
    listaPrecos: [],
    valorTotal: 0,

    registrarPrecos: function () {
        for (let i = 0; i < 3; i++) {
            this.listaPrecos.push(
                parseFloat(prompt("Digite o preco do produto: ").trim())
            );
            this.valorTotal += this.listaPrecos[i];
        }
    },

    calcularFrete: function () {
        if (this.valorTotal > 200.0 || this.assinatura == "PRIME") {
            this["freteGratis"] = true;
            console.log("Voce ganhou frete gratis na sua compra!!");
        } else {
            this["freteGratis"] = false;
            this.valorTotal += 30.0;
        }
    },
};

carrinho.registrarPrecos();
carrinho.calcularFrete();

console.log(`Valor final a ser pago: R$${carrinho.valorTotal}`);
console.log(carrinho);
