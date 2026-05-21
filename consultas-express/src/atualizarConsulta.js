import { consultas } from '../data/dados.js';

function atualizarConsulta(idConsulta, novaData, novaDescricao) {
    if (consultas.length === 0) {
        return { error: 'Não há consultas' };
    }

    if (!novaData && !novaDescricao) {
        return {
            error: 'É necessário pelo menos uma nova data ou uma nova descrição',
        };
    }

    const index = consultas.findIndex((consulta) => consulta.id === idConsulta);
    if (index === -1) {
        return { error: 'Consulta não encontrada' };
    }
    if (novaData) {
        consultas[index].data = novaData;
    }
    if (novaDescricao) {
        consultas[index].descricao = novaDescricao;
    }
    return { data: consultas[index] };
}

export default atualizarConsulta;
