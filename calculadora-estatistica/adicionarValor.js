import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function adicionarValor(lista) {
    let valor = 0;

    while (true) {
        valor = parseFloat(
            prompt('Digite o valor a ser adicionado à lista: ').trim()
        );
        if (isNaN(valor)) {
            console.log('Digite um valor válido!');
        } else {
            lista.push(valor);
            lista.sort((a, b) => a - b);
            console.log('Valor adicionado à lista!');
            break;
        }
    }
}

export default adicionarValor;
