import baralhos from '../data/baralhos.js';

function adicionarBaralho(titulo) {
    if (!titulo) {
        return { error: 'Título inválido' };
    }

    let novoId = 1;
    const len = baralhos.length;
    if (len > 0) {
        novoId = baralhos[len - 1].id + 1;
    }
    const novoBaralho = {
        id: novoId,
        titulo: titulo,
    };
    baralhos.push(novoBaralho);
    return { data: novoBaralho };
}

export default adicionarBaralho;
