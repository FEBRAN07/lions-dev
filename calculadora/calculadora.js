import operacoes from './operacoes.js';
import menu from './menu.js';
import handleResultado from './handleResultado.js';

let resultado = 0;

while (true) {
    let op = menu();
    resultado = operacoes(op, resultado);

    if (handleResultado(resultado)) {
        break;
    }
}
