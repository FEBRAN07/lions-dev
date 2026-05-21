import adicionarBaralho from './adicionarBaralho.js';
import adicionarFlashcard from './adicionarFlashcard.js';
import listarBaralhos from './listarBaralhos.js';
import listarFlashcards from './listarFlashcards.js';
import listarPorBaralho from './listarPorBaralho.js';
import atualizarBaralho from './atualizarBaralho.js';
import atualizarFlashcard from './atualizarFlashcards.js';
import deletarBaralho from './deletarBaralho.js';
import deletarFlashcard from './deletarFlashcard.js';
import buscarBaralho from './buscarBaralho.js';
import buscarFlashcard from './buscarFlashcard.js';
import express from 'express';

const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor está funcionando!');
});

app.get('/baralho', (req, res) => {
    const termo = req.query.termo;
    if (termo) {
        const { data, error } = buscarBaralho(termo);
        if (error) {
            return res.status(400).send({ error: error });
        }
        return res.status(200).send({
            message: `Baralhos encontrados que possuem o termo ${termo}: `,
            baralhos: data,
        });
    }
    const { data, error } = listarBaralhos();
    if (error) {
        return res.status(400).send({ error: error });
    }
    res.status(200).send({ message: 'Listando baralhos:', baralhos: data });
});

app.get('/flashcard', (req, res) => {
    const { idBaralho } = req.body;
    if (idBaralho) {
        const { data, error } = listarPorBaralho(idBaralho);
        if (error) {
            return res.status(400).send({ error: error });
        }
        return res.status(200).send({
            message: 'Listando flashcards por baralho:',
            flashcards: data,
        });
    }
    const termo = req.query.termo;
    if (termo) {
        const { data, error } = buscarFlashcard(termo);
        if (error) {
            return res.status(400).send({ error: error });
        }
        return res.status(200).send({
            message: `Flashcard que possuem o termo ${termo}: `,
            flashcards: data,
        });
    }
    const { data, error } = listarFlashcards();
    if (error) {
        return res.status(400).send({ error: error });
    }
    res.status(200).send({ message: 'Listando flashcards:', flashcards: data });
});

app.post('/baralho', (req, res) => {
    const { titulo } = req.body;
    const { data, error } = adicionarBaralho(titulo);

    if (error) {
        return res.status(400).send({ error: error });
    }
    res.status(201).send({ message: 'Baralho adicionado', baralho: data });
});

app.post('/flashcard', (req, res) => {
    const { pergunta, resposta, idBaralho } = req.body;
    const { data, error } = adicionarFlashcard(pergunta, resposta, idBaralho);
    if (error) {
        return res.status(400).send({ error: error });
    }
    res.status(201).send({ message: 'Flashcard adicionado', flashcard: data });
});

app.put('/baralho', (req, res) => {
    const { idBaralho, titulo } = req.body;
    const { data, error } = atualizarBaralho(idBaralho, titulo);
    if (error) {
        return res.status(400).send({ error: error });
    }
    res.status(200).send({
        message: 'Baralho atualizado',
        baralhoAtualizado: data,
    });
});

app.put('/flashcard', (req, res) => {
    const { idFlashcard, pergunta, resposta } = req.body;
    const { data, error } = atualizarFlashcard(idFlashcard, pergunta, resposta);
    if (error) {
        return res.status(400).send({ error: error });
    }
    res.status(200).send({
        message: 'Flashcard atualizado',
        flashcardAtualizado: data,
    });
});

app.delete('/baralho', (req, res) => {
    const { idBaralho } = req.body;
    const { data, error } = deletarBaralho(idBaralho);
    if (error) {
        return res.status(400).send({ error: error });
    }
    res.status(200).send({ message: 'Baralho removido', baralhos: data });
});

app.delete('/flashcard', (req, res) => {
    const { idFlashcard } = req.body;
    const { data, error } = deletarFlashcard(idFlashcard);
    if (error) {
        return res.status(400).send({ error: error });
    }
    res.status(200).send({ message: 'Flashcard removido', flashcards: data });
});

app.listen(port, () => {
    console.log('Servidor ouvindo na porta ' + port);
});
