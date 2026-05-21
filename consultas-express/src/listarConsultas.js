import { medicos, pacientes, consultas } from '../data/dados.js';

function listarConsultas() {
    if (consultas.length === 0) {
        return { error: 'Não existem consultas' };
    }

    let consultasListadas = [];
    consultas.forEach((consulta) => {
        consultasListadas.push({
            id: consulta.id,
            data: consulta.data,
            medico: encontrarMedicoPorId(consulta.idMedico),
            paciente: encontrarPacientePorId(consulta.idPaciente),
            descricao: consulta.descricao,
        });
    });
    return { data: consultasListadas };
}

function encontrarMedicoPorId(id) {
    return medicos.find((m) => m.id === id).nome;
}

function encontrarPacientePorId(id) {
    return pacientes.find((p) => p.id === id).nome;
}

export default listarConsultas;