import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function removerValor(lista) {
    let len = lista.length;

    if (len === 0) {
        console.log('ERRO: Lista vazia!');
        return;
    }

    let valor = parseFloat(
        prompt('Digite o valor a ser removido da lista: ').trim()
    );

    let encontrado = lista.findIndex((elemento) => elemento === valor);

    if (encontrado === -1) {
        console.log('ERRO: Valor não encontrado na lista');
        return;
    } else if (encontrado !== len - 1) {
        let temp = lista[len - 1];
        lista[len - 1] = lista[encontrado];
        lista[encontrado] = temp;
    }
    lista.pop();
    lista.sort((a, b) => a - b);

    console.log('Valor removido com sucesso!');
}

export default removerValor;
