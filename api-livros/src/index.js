import express from 'express';
import { cadastrarLivro } from './cadastrarLivro.js';
import { listarLivros } from './listarLivros.js';
import { atualizarLivro } from './atualizarLivro.js';
import { deletarLivro } from './deletarLivro.js';
import { buscarLivro } from './buscarLivro.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

app.get('/livros', (req, res) => {
    const { info, livros } = listarLivros();
    if (info) {
        return res.status(200).send({ info: info, livros: livros });
    }
    res.status(200).send({ message: 'Listando livros', livros: livros });
});

app.get('/livros/busca', (req, res) => {
    const { titulo, autor, ano, genero } = req.query;
    //   console.log(titulo, autor, ano, genero);
    const { error, livros } = buscarLivro(titulo, autor, ano, genero);
    if (error) {
        return res.status(400).send({ error: error });
    }
    res.status(200).send({ message: 'Livros encontrados com base nos parâmetros de busca:', livros: livros });
});

app.post('/livros', (req, res) => {
    const { titulo, autor, ano, genero } = req.body;
    const { error, livroCadastrado } = cadastrarLivro(titulo, autor, ano, genero);
    if (error) {
        return res.status(400).send({ error: error });
    }
    res.status(201).send({
        message: 'Livro cadastrado com sucesso',
        livroCadastrado: livroCadastrado,
    });
});

app.put('/livros/:id', (req, res) => {
    let { id } = req.params;
    const { novoTitulo, novoAutor, novoAno, novoGenero } = req.body;
    id = parseInt(id);
    const { error, livroAtualizado } = atualizarLivro(id, novoTitulo, novoAutor, novoAno, novoGenero);
    if (error) {
        return res.status(404).send({ error: error });
    }
    res.status(200).send({
        message: 'Livro atualizado com sucesso',
        livroAtualizado: livroAtualizado,
    });
});

app.delete('/livros/:id', (req, res) => {
    let { id } = req.params;
    id = parseInt(id);
    const { error, livros } = deletarLivro(id);
    if (error) {
        return res.status(404).send({ error: error });
    }
    res.status(200).send({
        message: 'Livro deletado com sucesso',
        livros: livros,
    });
});

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}...`);
});
