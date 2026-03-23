const prompt = require("prompt-sync")()

const ano = 2026

const nome = prompt("Entre seu nome de usuário: ")
const nascimento = parseInt(prompt("Entre seu ano de nascimento: "))
const idade = ano - nascimento

console.log(`Idade de ${nome}, se já fez aniversário: ${idade} `)
console.log(`Idade de ${nome}, se ainda não fez aniversário: ${idade - 1}`)
