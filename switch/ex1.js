const prompt = require('prompt-sync')();

const genero = prompt(
    'Digite o genero do filme: Acao, Animacao, Comedia, Terror: '
)
    .trim()
    .toLowerCase();

switch (genero) {
    case 'acao':
        console.log('O filme passara na sala 1');
        break;
    case 'comedia':
        console.log('O filme passara na sala 2');
        break;
    case 'terror':
        console.log('O filme passara na sala 3');
        break;
    case 'animacao':
        console.log('O filme passara na sala 4');
        break;
    default:
        console.log('Genero nao encontrado. Verifique as opcoes validas.');
}
