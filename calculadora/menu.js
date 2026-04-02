import PromptSync from 'prompt-sync';

const prompt = PromptSync();

function menu() {
    console.log(
        '---------| Calculadora |---------\n1. Adicao\t2. Subtracao\n3. Multiplicacao\t4. Divisao\n5. Porcentagem\t6. Sair\n---------|-------------|---------'
    );

    return parseInt(prompt('Digite a operacao: ').trim());
}

export default menu;
