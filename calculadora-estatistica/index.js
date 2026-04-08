import menu from './menu.js';
import operacoes from './operacoes.js';

let lista = [];
let op = 0;
let result = 0;

while (result !== 'sair') {
    op = menu();
    result = operacoes(op, lista);
}
