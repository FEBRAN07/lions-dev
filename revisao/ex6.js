function somarImpares(lista) {
    let soma = 0;
    lista.forEach((n) => {
        if (n % 2) {
            soma += n;
        }
    });
    return soma;
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Soma dos números impares: ${somarImpares(nums)}`);
