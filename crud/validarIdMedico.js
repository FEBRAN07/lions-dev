import dados from './dados.js';

function validarIdMedico(id) {
    let flag = false;

    dados.medicos.forEach((medico) => {
        if (medico.id === id) {
            flag = true;
        }
    });

    return flag;
}

export default validarIdMedico;
