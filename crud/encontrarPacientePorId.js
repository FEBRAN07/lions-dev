import dados from './dados.js';

function encontrarPacientePorId(id) {
    let encontrado = false;
    let nomePaciente = '';

    dados.pacientes.forEach((paciente) => {
        if (paciente.id === id) {
            encontrado = true;
            nomePaciente = paciente.nome;
        }
    });

    if (encontrado) {
        return nomePaciente;
    } else {
        return encontrado;
    }
}

export default encontrarPacientePorId;
