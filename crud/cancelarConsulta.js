import dados from './dados.js';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

let idCancelar = 0;

function compararId(consulta) {
    return consulta.id === idCancelar;
}

function cancelarConsulta() {
    idCancelar = parseInt(
        prompt('Digite o id da consulta que deseja cancelar: ').trim()
    );
    let indiceConsulta = dados.consultas.findIndex(compararId);

    if (indiceConsulta === -1) {
        console.log(
            `ERRO: Consulta com o id ${idCancelar} não existe no sistema`
        );
        return;
    }

    dados.consultas.splice(indiceConsulta, 1);
    console.log('Consulta cancelada!');
}

//cancelarConsulta();
export default cancelarConsulta;
