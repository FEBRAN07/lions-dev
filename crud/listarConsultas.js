import dados from './dados.js';
import encontrarMedicoPorId from './encontrarMedicoPorId.js';
import encontrarPacientePorId from './encontrarPacientePorId.js';

function listarConsultas() {
    dados.consultas.forEach((consulta) => {
        console.log('=================================');
        console.log(`Id da consulta: ${consulta.id}`);
        console.log(
            `Nome do médico: ${encontrarMedicoPorId(consulta.idMedico)}`
        );
        console.log(
            `Nome do paciente: ${encontrarPacientePorId(consulta.idPaciente)}`
        );
        console.log(`Data da consulta: ${consulta.data}`);
        console.log(`Descrição da consulta: ${consulta.descricao}`);
    });

    console.log('=================================');
}

//listarConsultas();
export default listarConsultas;
