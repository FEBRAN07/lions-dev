const vogais = 'aeiou';

function verificarConsoante(string) {
    let consoantes = 0;
    string = string.trim();
    string = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (!vogais.includes(string[i]) && string[i] !== ' ') {
            consoantes++;
        }
    }
    return consoantes;
}

let s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(
    `Tamanho da string: ${s.length}\nQuantidade de consoantes na string: ${verificarConsoante(s)}`
);
