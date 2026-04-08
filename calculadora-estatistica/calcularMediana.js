function calcularMediana(lista) {
    let len = lista.length;
    let mediana = 0;

    if (len === 0) {
        console.log('ERRO: Lista não é grande suficiente para o cálculo!');
        return;
    }

    if (len % 2 === 0) {
        mediana = (lista[len / 2 - 1] + lista[len / 2]) / 2;
    } else {
        mediana = lista[Math.floor(len / 2)];
    }

    console.log(`Valor da mediana: ${mediana.toFixed(2)}`);
}

export default calcularMediana;
