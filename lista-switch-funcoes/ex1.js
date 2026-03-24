const prompt = require('prompt-sync')();
const bonusEstagiario = 0.1;
const bonusJunior = 0.15;
const bonusPleno = 0.2;

const nome = prompt('Digite o nome do funcionario: ').trim().toLowerCase();
const nivel = prompt('Digite o nivel do cargo: ').trim().toLowerCase();
let salarioAtual = parseFloat(prompt('Digite o salario atual: ').trim());

const bonus = calcularBonus(nivel, salarioAtual);
console.log(
    `O novo salario do funcionario ${nome} sera ${salarioAtual + bonus}`
);

function calcularBonus(nivel, salario) {
    let bonus = 0;

    switch (nivel) {
        case 'estagiario':
            bonus += salario * bonusEstagiario;
            break;
        case 'junior':
            bonus += salario * bonusJunior;
            break;
        case 'pleno':
            bonus += salario * bonusPleno;
            break;
        default:
            break;
    }

    return bonus;
}
