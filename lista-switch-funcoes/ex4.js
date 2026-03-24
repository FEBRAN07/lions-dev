const prompt = require('prompt-sync')();

function calcularMedia(valores) {
    let media = 0;
    valores.forEach((valor) => {
        media += valor;
    });
    return (media /= valores.length);
}

const avaliarTemperatura = (valores) => {
    let media = calcularMedia(valores);

    switch (true) {
        case media > 30:
            return 'Alerta de Aquecimento';
        default:
            return 'Clima Estavel';
    }
};

let temperaturas = [];
for (let i = 0; i < 3; i++) {
    temperaturas.push(parseFloat(prompt('Digite uma temperatura: ').trim()));
}

console.log(avaliarTemperatura(temperaturas));
