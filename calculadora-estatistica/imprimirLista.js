function imprimirLista(lista) {
    if (lista.length === 0) {
        console.log('ERRO: Lista vazia!');
        return;
    }

    console.log(lista);
}

export default imprimirLista;
