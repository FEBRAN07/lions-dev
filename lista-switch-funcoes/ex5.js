const prompt = require('prompt-sync')();

let registro = {
    id: parseInt(prompt('Digite o id da encomenda: ').trim()),
    codigo: prompt('Digite o codigo de status atual (p/e/c): ')
        .trim()
        .toLowerCase(),

    atualizarRastreio(codigo) {
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
    },
};

registro.status = registro.atualizarRastreio(registro.codigo);
console.log(registro);
