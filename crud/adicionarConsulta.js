import PromptSync from 'prompt-sync';
import validarIdPaciente from './validarIdPaciente.js';
import validarIdMedico from './validarIdMedico.js';
import dados from './dados.js';

const prompt = PromptSync();

function adicionarConsulta() {
    while (true) {
        let len = dados.consultas.length;

        let idMedico = parseInt(
            prompt('Digite o Id do médico para a nova consulta: ').trim()
        );
        if (!validarIdMedico(idMedico)) {
            console.log(
                'ERRO: Id do médico não encontrado no sistema. Digite novamente'
            );
            continue;
        }
        let idPaciente = parseInt(
            prompt('Digite o Id do paciente para a nova consulta: ').trim()
        );
        if (!validarIdPaciente(idPaciente)) {
            console.log(
                'ERRO: Id do paciente não encontrado no sistema. Digite novamente'
            );
            continue;
        }
        let dataConsulta = prompt(
            'Digite a data da consulta (ANO-MES-DIA): '
        ).trim();
        let descricaoConsulta = prompt(
            'Digite uma descrição para a consulta: '
        ).trim();

        let novaConsulta = {
            id: dados.consultas[len - 1].id + 1,
            data: dataConsulta,
            idMedico: idMedico,
            idPaciente: idPaciente,
            descricao: descricaoConsulta,
        };

        dados.consultas.push(novaConsulta);
        console.log('Nova consulta adicionada com sucesso!');
        break;
    }
}
//adicionarConsulta();
export default adicionarConsulta;
