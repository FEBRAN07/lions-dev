const prompt = require('prompt-sync')();

let livraria = [
    { titulo: 'percy jackson', autor: 'rick riordan', disponivel: true },
    { titulo: 'senhor dos aneis', autor: 'tolkien', disponivel: true },
    { titulo: 'jujutsu kaisen', autor: 'gege akutami', disponivel: true },
];

function menu() {
    console.log('---------| Sistema Biblioteca |---------');
    console.log('1. Emprestar Livro\t2. Ver todos os livros\n3. Sair');

    let op = parseInt(prompt().trim());
    return op;
}

function operacoes(op, livraria) {
    switch (op) {
        case 1:
            let livro = prompt(
                'Digite o nome do livro a ser emprestado: '
            ).toLowerCase();
            console.log(emprestarLivro(livro, livraria));
            return false;
        case 2:
            verLivros(livraria);
            return false;
        case 3:
            return true;
    }
}

function emprestarLivro(livro, livraria) {
    let livroEncontrado = false;
    let livroDisponivel = false;
    livraria.forEach((elemento) => {
        if (elemento.titulo === livro) {
            livroEncontrado = true;
            if (elemento.disponivel) {
                elemento.disponivel = false;
                livroDisponivel = true;
            }
            return; 
        }
    });

    if (livroEncontrado && livroDisponivel) {
        return "Emprestimo realizado com sucesso!"
    } else if (livroEncontrado && !livroDisponivel) {
        return "ERRO: Livro nao esta disponivel";
    } else {
        return "ERRO: Livro nao encontrado";
    }
}

function verLivros(livraria) {
    console.log('Exibindo livros:');
    livraria.forEach((elemento) => {
        console.log(elemento);
    });
}

while (true) {
    let op = menu();
    let sair = operacoes(op, livraria);
    if (sair) {
        break;
    }
}
