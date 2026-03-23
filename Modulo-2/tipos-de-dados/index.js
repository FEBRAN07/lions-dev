const prompt = require("prompt-sync")();

function media(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

let nota1 = parseFloat(prompt("Entre a primeira nota: "));
let nota2 = parseFloat(prompt("Entre a segunda nota: "));

console.log(`Media das notas: ${media(nota1, nota2)}`);
