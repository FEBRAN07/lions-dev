import adicionarConsulta from './adicionarConsulta.js';
import listarConsultas from './listarConsultas.js';
import atualizarConsulta from './atualizarConsulta.js';
import cancelarConsulta from './cancelarConsulta.js';

function operacoes(op) {
    switch (op) {
        case 0:
            console.log('Encerrando o programa...');
            return 'sair';
        case 1:
            adicionarConsulta();
            return 'sucesso';
        case 2:
            listarConsultas();
            return 'sucesso';
        case 3:
            atualizarConsulta();
            return 'sucesso';
        case 4:
            cancelarConsulta();
            return 'sucesso';
        default:
            console.log('Digite uma operação válida');
            return 'erro';
    }
}

export default operacoes;
