function calcularMedia(lista) {
    if (lista.length === 0) {
        console.log('ERRO: Lista vazia!');
        return;
    }

    let media = 0;
    lista.forEach((valor) => {
        media += valor;
    });

    media /= lista.length;

    console.log(`Valor da média: ${media.toFixed(2)}`);
}

export default calcularMedia;
