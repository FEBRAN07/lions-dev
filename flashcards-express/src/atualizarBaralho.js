import baralhos from '../data/baralhos.js';

function atualizarBaralho(baralhoId, titulo) {
    if (!titulo) {
        return { error: 'Título inválido' };
    }
    const indice = baralhos.findIndex((baralho) => baralho.id === baralhoId);

    if (indice === -1) {
        return { error: 'Baralho não encontrado' };
    }

    baralhos[indice].titulo = titulo;
    return { data: baralhos[indice] };
}

export default atualizarBaralho;
