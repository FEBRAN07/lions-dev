import PromptSync from 'prompt-sync';

const prompt = PromptSync();

function divisao(resultado) {
    while (true) {
        let n2 = parseFloat(
            prompt('Digite o numero para dividir o resultado: ').trim()
        );

        if (!isNaN(n2)) {
            if (n2 === 0) {
                console.log('Nao e possivel dividir por 0');
            } else {
                return resultado / n2;
            }
        } else {
            console.log('Por favor, digite dois numeros');
        }
    }
}

export default divisao;
