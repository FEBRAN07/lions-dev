import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function menu() {
    console.log('\n------| Calculadora Estatística |------');
    console.log(
        '1. Adicionar valor à lista\t2. Remover valor da lista\n3. Calcular média da lista\t4. Calcular mediana da lista\n5. Calcular moda da lista\t6. Imprimir lista\n0. Sair'
    );
    console.log('------|-------------------------|------');

    return parseInt(prompt('Digite a operação: ').trim());
}

export default menu;
