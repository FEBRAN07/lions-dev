import PromptSync from 'prompt-sync';

const prompt = PromptSync();

function multiplicacao(resultado) {
    while (true) {
        let n2 = parseFloat(
            prompt('Digite o numero para multiplicar o resultado: ').trim()
        );

        if (!isNaN(n2)) {
            return resultado * n2;
        } else {
            console.log('Por favor, digite dois numeros');
        }
    }
}

export default multiplicacao;
