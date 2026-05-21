import express from "express";
import cadastrarFilme from "./cadastrarFilme.js";
import listarFilmes from "./listarFilmes.js";
import atualizarFilme from "./atualizarFilme.js";

const app = express();
const port: number = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Servidor funcionando");
})

app.post("/filmes", (req, res) => {
    const {titulo, diretor, ano, genero} = req.body;
    const {error, filme}: any = cadastrarFilme(titulo, diretor, ano, genero);
    if (error) {
        return res.status(400).send({error: error});
    }
    res.status(201).send({message: "Filme cadastrado com sucesso", novoFilme: filme});
})

app.put("/filmes/:id", (req, res) => {
    const id: number = parseInt(req.params.id);
    const {titulo, diretor, ano, genero} = req.body;
    const {error, filme}: any = atualizarFilme(id, titulo, diretor, ano, genero) 
    if (error) {
        return res.status(400).send({error: error});
    }
    res.status(200).send({message: "Filme atualizado com sucesso", filmeAtualizado: filme});
}) 

app.get("/filmes", (req, res) => {
    res.status(200).send({message: "Listando filmes", filmes: listarFilmes()});
})

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}...`);
})