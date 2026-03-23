const prompt = require('prompt-sync')();

const nota = parseInt(prompt('Digite a nota a ser classificada: ').trim());

function classicarNota(nota) {
    switch (true) {
        case nota >= 90 && nota <= 100:
            return 'A';
        case nota >= 80 && nota <= 90:
            return 'B';
        case nota >= 70 && nota <= 80:
            return 'C';
        case nota >= 60 && nota <= 70:
            return 'D';
        case nota < 60:
            return 'F';
        default:
            console.log('Nota invalida');
            break;
    }
}

const classificada = classicarNota(nota);

if (classificada == 'A' || classificada == 'B' || classificada == 'C') {
    console.log(`Parabens! Aprovado com nota ${classificada}`);
} else {
    console.log('Nao foi aprovado');
}
