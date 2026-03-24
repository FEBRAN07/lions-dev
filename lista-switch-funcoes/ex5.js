const prompt = require('prompt-sync')();

function atualizarRastreio(codigo) {
    switch (codigo) {
        case 'p':
            return 'pendente de envio';
        case 'e':
            return 'em rota de entrega';
        case 'c':
            return 'cancelado';
        default:
            return 'status invalido';
    }
}

let registro = {
    id: parseInt(prompt('Digite o id da encomenda: ').trim()),
    codigo: prompt('Digite o codigo de status atual (p/e/c): ')
        .trim()
        .toLowerCase(),
};

registro.status = atualizarRastreio(registro.codigo);
console.log(registro);
