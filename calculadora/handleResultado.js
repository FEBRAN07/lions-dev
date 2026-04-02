function handleResultado(resultado) {
    if (resultado === 'sair') {
        console.log('Encerrando o programa...');
        return true;
    }

    if (resultado === 'erro') {
        console.log('Por favor, digite uma operacao valida');
    } else {
        console.log(`Resultado: ${resultado.toFixed(2)}`);
    }

    return false;
}

export default handleResultado;
