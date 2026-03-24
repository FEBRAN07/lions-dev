const prompt = require('prompt-sync')();

function upload(servidor, tamanhoArquivo) {
    if (tamanhoArquivo + servidor.espacoOcupadoGB <= servidor.espacoTotalGB) {
        servidor.espacoOcupadoGB += tamanhoArquivo;
        return true;
    } else {
        return false;
    }
}

let servidor = {
    nome: 'ultra mega servidor de mine',
    espacoTotalGB: 1000,
    espacoOcupadoGB: 200,
};

const novoArquivo = parseInt(
    prompt('Digite o tamanho do novo arquivo: ').trim()
);

if (upload(servidor, novoArquivo)) {
    console.log('Upload concluido com sucesso!');
} else {
    console.log('Upload falhou. Falta de espaco no servidor');
}
