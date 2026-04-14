import dados from './dados.js';
import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function atualizarConsulta() {
    let idAtualizar = parseInt(
        prompt('Digite o id da consulta que deseja atualizar: ').trim()
    );
    let encontrado = false;

    dados.consultas.forEach((consulta) => {
        if (consulta.id === idAtualizar) {
            encontrado = true;
            let novaData = prompt(
                'Digite a nova data da consulta (ANO-MES-DIA): '
            ).trim();
            let novaDescrição = prompt(
                'Digite a nova descrição da consulta: '
            ).trim();

            if (!novaData == '') {
                consulta.data = novaData;
                console.log('Data atualizada!');
            }
            if (!novaDescrição == '') {
                consulta.descricao = novaDescrição;
                console.log('Descrição atualizada!');
            }
        }
    });
    if (!encontrado) {
        console.log(`ERRO: Consulta com o id ${idAtualizar} não encontrada!`);
    }
}

//atualizarConsulta();
export default atualizarConsulta;
