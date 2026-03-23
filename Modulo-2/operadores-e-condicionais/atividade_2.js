const prompt = require("prompt-sync")()

const ano = 2026
const nome = prompt("Qual o seu nome? ")
const idade = parseInt(prompt("Qual sua idade? "))
const aniversario = prompt("Você já fez aniversário esse ano? (s\\n): ")
let nascimento

if (aniversario == "s" || aniversario == "S") {
    nascimento = ano - idade
    console.log(`${nome}, você nasceu em ${nascimento}`)
} else if (aniversario == "n" || aniversario == "N") {
    nascimento = ano - idade - 1
    console.log(`${nome}, você nasceu em ${nascimento}`)
} else {
    console.log("Erro! responda s ou n")
}
