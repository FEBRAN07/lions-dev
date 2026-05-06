function segundoMaior(lista) {
    let len = lista.length;
    let maior = 0;
    lista.sort((a, b) => a - b);
    console.log(lista);
    for (let i = len - 1; i >= 0; i--) {
        if (i === len - 1) {
            maior = lista[i];
        } else if (lista[i] !== maior) {
            return lista[i];
        }
    }
}

let nums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(segundoMaior(nums));
