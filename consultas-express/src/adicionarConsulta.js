import { medicos, pacientes, consultas } from '../data/dados.js';

function adicionarConsulta(data, idMedico, idPaciente, descricao) {
    if (!data) {
        return { error: 'Data inválida' };
    }
    if (!idMedico) {
        return { error: 'Id médico inválido' };
    }
    if (!idPaciente) {
        return { error: 'Id paciente inválido' };
    }
    if (!descricao) {
        return { error: 'Descrição inválida' };
    }

    const medico = medicos.find((m) => m.id === idMedico);
    if (!medico) {
        return { error: 'Médico não encontrado' };
    }
    const paciente = pacientes.find((p) => p.id === idPaciente);
    if (!paciente) {
        return { error: 'Paciente não encontrado' };
    }
    let id = 1;
    if (consultas) {
        id = consultas[consultas.length - 1].id + 1;
    }
    let novaConsulta = {
        id: id,
        data: data,
        idMedico: idMedico,
        idPaciente: idPaciente,
        descricao: descricao,
    };
    consultas.push(novaConsulta);
    return { consulta: novaConsulta };
}

export default adicionarConsulta;
