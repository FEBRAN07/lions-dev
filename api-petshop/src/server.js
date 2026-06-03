import express from 'express';
import dotenv from 'dotenv';
import conectarBanco from './db.js';
import Agendamento from './models/agendamento.js';
import {
    atualizarAgendamento,
    cadastrarAgendamento,
    listarAgendamentos,
    listarAgendamentosPorPet,
    removerAgendamento,
} from './routes/agendamento.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

conectarBanco(process.env.MONGO_URI);

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
});

app.post('/agendamentos', cadastrarAgendamento);

app.get('/agendamentos', listarAgendamentos);

app.get('/agendamentos/busca', listarAgendamentosPorPet);

app.patch('/agendamentos/:id', atualizarAgendamento);

app.delete('/agendamentos/:id', removerAgendamento);

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}...`);
});
