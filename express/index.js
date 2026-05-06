import express from "express";

let router = express();
const port = 3000;

router.use(express.json());

router.get(("/"), (req, res) => {
    res.send("Hello world!");
});

router.listen((port), () => {
    console.log(`Exemplo das funções rodando na porta: ${port}`);
})