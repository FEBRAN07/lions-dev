import menu from './menu.js';
import operacoes from './operacoes.js';

while (true) {
    let op = menu();
    let result = operacoes(op);

    if (result === 'sair') {
        break;
    }
}
