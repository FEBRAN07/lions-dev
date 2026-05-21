import { consultas } from '../data/dados.js';

function deletarConsulta(idConsulta) {
    if (consultas.length === 0) {
        return { error: 'Não existem consultas' };
    }

    const index = consultas.findIndex((c) => c.id === idConsulta);
    if (index === -1) {
        return { error: 'Consulta não encontrada' };
    }
    consultas.splice(index, 1);
    return { data: consultas };
}

export default deletarConsulta;
