function removerEspacos(string) {
    let resultado = '';

    string = string.trim();
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            resultado += string[i];
        }
    }
    return resultado;
}

let s = "Nah, I'd Win";
console.log(`String após remover espaços: ${removerEspacos(s)}`);
