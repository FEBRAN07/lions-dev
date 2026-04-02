import adicao from './adicao.js';
import subtracao from './subtracao.js';
import multiplicacao from './multiplicacao.js';
import divisao from './divisao.js';
import porcentagem from './porcentagem.js';

function operacoes(op, resultado) {
    switch (op) {
        case 1:
            resultado = adicao(resultado);
            return resultado;
        case 2:
            resultado = subtracao(resultado);
            return resultado;
        case 3:
            resultado = multiplicacao(resultado);
            return resultado;
        case 4:
            resultado = divisao(resultado);
            return resultado;
        case 5:
            resultado = porcentagem(resultado);
            return resultado;
        case 6:
            return 'sair';
        default:
            return 'erro';
    }
}

export default operacoes;
