function frequenciaPalavras(string) {
    let frequencias = {};
    let palavras = string.split(' ');
    palavras.forEach((s) => {
        if (s in frequencias) {
            frequencias[s] += 1;
        } else {
            frequencias[s] = 1;
        }
    });
    return frequencias;
}

const frase = 'OLA OLA OLA';
console.log('Frequencia das palavras:', frequenciaPalavras(frase));
