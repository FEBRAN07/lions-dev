import dados from './dados.js';

function encontrarMedicoPorId(id) {
    let nomeMedico = '';

    dados.medicos.forEach((medico) => {
        if (medico.id === id) {
            nomeMedico = medico.nome;
        }
    });

    return nomeMedico;
}

export default encontrarMedicoPorId;
