function calcularAmplitude(lista) {
    let len = lista.length;
    if (len <= 1) {
        return false;
    }
    lista.sort((a, b) => a - b);
    let segundoMenor = lista[len - (len - 1)];
    let maior = lista[len - 1];
    return maior - segundoMenor;
}

const nums = [10, 9, 5, 3, 4, 8, 1];
console.log(calcularAmplitude(nums));
