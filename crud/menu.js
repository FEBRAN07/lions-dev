import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function menu() {
    console.log('------| Sistema de Agendamento de Consultas |------');
    console.log(
        '1. Agendar nova consulta\n2. Listar todas as consultas\n3. Atualizar uma consulta\n4. Cancelar consulta\n0. Sair'
    );
    console.log('------| ----------------------------------- |------');

    return parseInt(prompt('Digite a operação desejada: ').trim());
}

export default menu;
