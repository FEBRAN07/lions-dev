const prompt = require("prompt-sync")();

const carrinhos = [
    { cliente: "Felipe", produtos: [300, 20] },
    { cliente: "Dayane", produtos: [400, 600] },
    { cliente: "Thiago", produtos: [20, 500, 50] },
];

carrinhos.forEach((carrinho) => {
    let total = 0;
    carrinho.produtos.forEach((produto) => {
        total += produto;
    });

    let pagamento = 0;
    while (pagamento < total) {
        pagamento += parseFloat(
            prompt("Digite o valor em dinheiro recebido: ").trim()
        );
    }

    if (pagamento > total) {
        console.log(`Valor do troco: R$${pagamento - total}`);
    }

    console.log(
        `Pagamento do cliente ${carrinho.cliente} efetuado com sucesso`
    );
});
