import PromptSync from 'prompt-sync';

const prompt = PromptSync();

function subtracao(resultado) {
    while (true) {
        let n2 = parseFloat(
            prompt('Digite o numero a ser subtraido do resultado: ').trim()
        );

        if (!isNaN(n2)) {
            return resultado - n2;
        } else {
            console.log('Por favor, digite dois numeros');
        }
    }
}

export default subtracao;
