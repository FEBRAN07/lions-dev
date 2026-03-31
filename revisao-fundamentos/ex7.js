const prompt = require('prompt-sync')();

function librasParaQuilos(libras) {
    return libras / 2.2046;
}

let libras = parseFloat(prompt('Digite o valor em libras: ').trim());
if (libras <= 0) {
    console.log('Valor invalido');
} else {
    console.log(`Valor em quilos: ${librasParaQuilos(libras).toFixed(2)}`);
}
