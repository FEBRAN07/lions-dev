const l = [20, 30, 40, 50, 100];

function media(lista) {
    let soma = 0;
    lista.forEach((elemento) => {
        soma += elemento;
    });

    return soma / lista.length;
}

console.log(`Valor médio gasto por produto: R$${media(l)}`);
