const prompt = require("prompt-sync")()

const resposta = prompt("Você gosta de café? ")
let gostaDeCafe

if (resposta == "Sim" || resposta == "sim" || resposta == "s") {
    gostaDeCafe = true
} else if (
    resposta == "Nao" ||
    resposta == "nao" ||
    resposta == "Não" ||
    resposta == "não" ||
    resposta == "n"
) {
    gostaDeCafe = false
}

if (gostaDeCafe) {
    console.log("Que legal!")
} else {
    console.log("Eu também não gosto de café")
}

//const n = prompt("Digite um número: ")
//
//if (n == 0) {
//    console.log("0 é par")
//} else if (n % 2 == 0) {
//    console.log("É par")
//} else {
//    console.log("É ímpar")
//}
