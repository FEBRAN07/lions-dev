function menor(lista) {
    let menor = 0;
    for (let i = 0; i < lista.length; i++) {
        if (!i) {
            menor = lista[i];
        } else if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    return menor;
}

let nums = [1, 2, 3, 4, 5, -5, 7, 8, 9, 10, 0];
console.log(`Menor número na lista: ${menor(nums)}`);
