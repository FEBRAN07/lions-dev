function capitalizarPrimeira(string) {
    let palavras = string.split(' ');
    for (let i = 0; i < palavras.length; i++) {
        palavras[i] = palavras[i][0].toUpperCase() + palavras[i].slice(1);
    }
    return palavras.join(' ');
}

const s = 'ola mundo hello';
console.log(capitalizarPrimeira(s));
