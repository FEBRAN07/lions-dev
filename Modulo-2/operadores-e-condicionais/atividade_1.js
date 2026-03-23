const prompt = require("prompt-sync")()

const nome = prompt("Qual o seu nome? ")
const idade = parseInt(prompt("Qual sua idade? "))

if (idade < 18) {
    const anos = 18 - idade
    console.log(`${nome}, você vai ser maior de idade em ${anos} anos`)
} else {
    console.log(`${nome}, você já é maior de idade`)
}
