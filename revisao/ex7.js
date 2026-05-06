function valoresUnicos(lista) {
    let vistos = [];
    lista.sort((a, b) => a - b);
    lista.forEach((n) => {
        if (vistos.includes(n)) {
            vistos.pop();
        } else {
            vistos.push(n);
        }
    });
    return vistos;
}

const nums = [10, 10, 20, 30, 30, 40, 50, 50];
console.log(`Valores únicos da lista: ${valoresUnicos(nums)}`);
