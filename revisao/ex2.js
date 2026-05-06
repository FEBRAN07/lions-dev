function contarImpares(lista) {
    let impares = 0;
    lista.forEach((n) => {
        if (n % 2) {
            impares++;
        }
    });
    return impares;
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Quantidade de ímpares na lista: ${contarImpares(nums)}`);
