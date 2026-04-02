import PromptSync from 'prompt-sync';

const prompt = PromptSync();

function porcentagem(resultado) {
    while (true) {
        let n2 = parseFloat(
            prompt('Digite a porcentagem do resultado: ').trim()
        );

        if (!isNaN(n2)) {
            return resultado * (n2 / 100);
        } else {
            console.log('Por favor, digite dois numeros');
        }
    }
}

export default porcentagem;
