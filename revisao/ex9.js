function anagrama(string_1, string_2) {
    if (string_1.length !== string_2.length) {
        return false;
    }
    string_1 = string_1.toLowerCase();
    string_2 = string_2.toLowerCase();
    let letras_1 = string_1.split('');
    let letras_2 = string_2.split('');
    letras_1.sort();
    letras_2.sort();
    console.log(letras_1, letras_2);

    for (let i = 0; i < letras_1.length; i++) {
        if (letras_1[i] !== letras_2[i]) {
            return false;
        }
    }
    return true;
}

const ana = 'ABCDEFGHI';
const grama = 'IHGFEDCBA';
console.log(anagrama(ana, grama));
