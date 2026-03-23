const prompt = require("prompt-sync")();

const teste = {
    dominio: "mycoolsite.com",
    tamanhoOcupadoGB: 450,
};

let servidor = {
    nome: "SERVIDOR PRINCIPAL",
    capacidadeMaximaGB: 500,
    sitesHospedados: [teste],

    upload: function () {
        const site = {
            dominio: prompt("Digite o dominio do site: ").trim().toLowerCase(),
            tamanhoOcupadoGB: parseFloat(
                prompt("Digite o tamanho do site em GB: ").trim()
            ),
        };
        let tamanhoTotal = 0;
        this.sitesHospedados.forEach(
            (elemento) => (tamanhoTotal += elemento.tamanhoOcupadoGB)
        );
        tamanhoTotal += site.tamanhoOcupadoGB;

        if (tamanhoTotal <= this.capacidadeMaximaGB) {
            this.sitesHospedados.push(site);
            console.log("Upload Concluido! Sistema Operacional");
        } else {
            this["alertaSobrecarga"] = true;
            console.log("Falha: Falta de Espaco Fisico. Cancele o Deploy");
        }
    },
};

servidor.upload();
console.log(servidor);
