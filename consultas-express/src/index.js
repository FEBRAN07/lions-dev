import express from 'express';
import adicionarConsulta from './adicionarConsulta.js';
import listarConsultas from './listarConsultas.js';
import atualizarConsulta from './atualizarConsulta.js';
import deletarConsulta from './deletarConsulta.js';

const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
});

app.get('/consultas', (req, res) => {
    const { error, data } = listarConsultas();
    if (error) {
        return res.status(400).send({ error: error });
    }
    res.status(200).send({ message: 'Listando consultas:', consultas: data });
});

app.post('/consultas', (req, res) => {
    const { data, idMedico, idPaciente, descricao } = req.body;
    const { error, consulta } = adicionarConsulta(
        data,
        idMedico,
        idPaciente,
        descricao
    );
    if (error) {
        return res.status(400).send({ error: error });
    }
    res.status(201).send({
        message: 'Consulta adicionada!',
        consulta: consulta,
    });
});

app.put('/consultas', (req, res) => {
    const { idConsulta, novaData, novaDescricao } = req.body;
    const { error, data } = atualizarConsulta(
        idConsulta,
        novaData,
        novaDescricao
    );
    if (error) {
        return res.status(400).send({ error: error });
    }
    res.status(200).send({
        message: 'Atualizando consulta',
        consultaAtualizada: data,
    });
});

app.delete('/consultas', (req, res) => {
    const { idConsulta } = req.body;
    const { error, data } = deletarConsulta(idConsulta);
    if (error) {
        return res.status(400).send({ error: error });
    }
    res.status(200).send({
        message: 'Deletando consulta',
        consultas: data,
    });
});

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}...`);
});
