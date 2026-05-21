import baralhos from '../data/baralhos.js';

function listarBaralhos() {
    if (baralhos.length == 0) {
        return { error: 'Não existem baralhos' };
    }
    return { data: baralhos };
}

export default listarBaralhos;
