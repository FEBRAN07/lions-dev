const prompt = require("prompt-sync")();

const tabuada = parseInt(
    prompt("Digite o numero o qual voce quer a tabuada: ").trim()
);

let i = 1;
while (i * tabuada <= 100) {
    console.log(i * tabuada);
    i++;
}

const listaDeCompras = ["Arroz", "Feijao", "Macarrao", "Carne"];

for (let i = 0; i < listaDeCompras.length; i++) {
    console.log(`Item: ${listaDeCompras[i]}`);
}

let temperaturaAgua = 90;
while (temperaturaAgua < 100) {
    console.log(
        `A temperatuda da esta em ${temperaturaAgua} graus. Aquecendo...`
    );
    temperaturaAgua += 2;
}

let lotes = [50, 40, 60, 30, 70];
let totalIngressos = 0;

for (let i = 0; i < lotes.length; i++) {
    totalIngressos += lotes[i];
}

console.log(`O total de ingressos vendidos foi: ${totalIngressos}`);

let pares = 0;
let paresTotal = 0;
let impares = 0;
let imparesTotal = 0;

for (let i = 0; i < 1000; i++) {
    if (i % 2 == 0) {
        pares++;
        paresTotal += i;
    } else {
        impares++;
        imparesTotal += i;
    }
}

const mediaPares = paresTotal / pares;
const mediaImpares = imparesTotal / impares;

console.log(`Quantidade de pares: ${pares}. Quantidade de impares: ${impares}`);
console.log(`Soma dos pares: ${paresTotal}. Soma dos impares: ${imparesTotal}`);
console.log(
    `Media dos pares: ${mediaPares}. Media dos impares: ${mediaImpares}`
);
