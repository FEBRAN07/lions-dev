const prompt = require("prompt-sync")();

let pedido = {
    nomeCliente: "Bilo",
    valorBase: 33.0,
    quantidadeLanches: 0,
    listaExtras: [],
    valorExtras: 0,
    valorTotal: 0,

    cadastrarPedido: function () {
        for (let i = 0; i < 2; i++) {
            this.listaExtras.push(
                prompt("Digite um ingrediente extra: ").trim().toLowerCase()
            );
            this.valorExtras += parseFloat(
                prompt("Digite o valor do ingrediente extra: ").trim()
            );
        }
        this.quantidadeLanches = parseInt(
            prompt("Digite a quantidade de lanches: ").trim()
        );
    },
    calcularValor: function () {
        this.valorTotal =
            (this.valorBase + this.valorExtras) * this.quantidadeLanches;
        if (this.listaExtras.length >= 2 && this.quantidadeLanches > 2) {
            this.valorTotal -= this.valorTotal * 0.2;
        }
    },
};

pedido.cadastrarPedido();
pedido.calcularValor();

console.log(`Valor total: ${pedido.valorTotal.toFixed(2)}`);
console.log(`Valor dos ingredientes extras: ${pedido.valorExtras}`);
console.log(`Ingredientes extras: ${pedido.listaExtras}`);
