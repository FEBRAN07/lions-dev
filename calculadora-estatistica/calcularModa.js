function calcularModa(lista) {
    if (lista.length === 0) {
        console.log('ERRO: Lista vazia!');
        return;
    }

    let moda = 0;
    let maiorFrequencia = 1;
    let frequenciaAtual = 1;

    for (let i = 0; i < lista.length; i++) {
        if (i === 0) {
            continue;
        }

        if (lista[i] === lista[i - 1]) {
            frequenciaAtual++;
            if (frequenciaAtual >= maiorFrequencia) {
                maiorFrequencia = frequenciaAtual;
                moda = lista[i];
            }
        } else {
            frequenciaAtual = 1;
        }
    }

    if (maiorFrequencia === 1) {
        console.log('Todos os valores têm a mesma frequência');
    } else {
        console.log(`Valor da moda: ${moda.toFixed(2)}`);
    }
}

export default calcularModa;
