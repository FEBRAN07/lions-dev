const prompt = require('prompt-sync')();

let servidor = {
    nome: 'ultra mega servidor de mine',
    espacoTotalGB: 1000,
    espacoOcupadoGB: 200,

    upload(tamanhoArquivo) {
        if (
            tamanhoArquivo + this.espacoOcupadoGB <=
            this.espacoTotalGB
        ) {
            this.espacoOcupadoGB += tamanhoArquivo;
            return true;
        } else {
            return false;
        }
    },
};

const novoArquivo = parseInt(
    prompt('Digite o tamanho do novo arquivo: ').trim()
);

if (servidor.upload(novoArquivo)) {
    console.log('Upload concluido com sucesso!');
} else {
    console.log('Upload falhou. Falta de espaco no servidor');
}
