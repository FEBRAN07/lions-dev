import adicionarValor from './adicionarValor.js';
import calcularMedia from './calcularMedia.js';
import calcularMediana from './calcularMediana.js';
import calcularModa from './calcularModa.js';
import imprimirLista from './imprimirLista.js';
import removerValor from './removerValor.js';

function operacoes(op, lista) {
    switch (op) {
        case 1:
            adicionarValor(lista);
            return 'sucesso';
        case 2:
            removerValor(lista);
            return 'sucesso';
        case 3:
            calcularMedia(lista);
            return 'sucesso';
        case 4:
            calcularMediana(lista);
            return 'sucesso';
        case 5:
            calcularModa(lista);
            return 'sucesso';
        case 6:
            imprimirLista(lista);
            return 'sucesso';
        case 0:
            console.log('Encerrando o programa...');
            return 'sair';
        default:
            console.log('ERRO: Digite uma operação válida!');
            return 'erro';
    }
}

export default operacoes;
