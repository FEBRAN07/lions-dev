import dados from './dados.js';

function validarIdPaciente(id) {
    let flag = false;

    dados.pacientes.forEach((paciente) => {
        if (paciente.id === id) {
            flag = true;
        }
    });

    return flag;
}

export default validarIdPaciente;
