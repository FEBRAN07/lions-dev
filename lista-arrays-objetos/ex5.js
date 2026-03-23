//5. Estação de Monitoramento

const prompt = require("prompt-sync")();

let estacao = {
    id: "Sensor-01",
    local: "Telhado",
    temperaturas: [],
};

for (let i = 0; i < 3; i++) {
    estacao.temperaturas.push(
        parseFloat(
            prompt("Digite a leitura da temperatura ao longo do dia: ").trim()
        )
    );
}

let media = 0;
estacao.temperaturas.forEach((element) => (media += element));
media /= 3;

if (media > 35) {
    estacao["alerta"] = true;
    console.log(
        `PERIGO: Media de temperatura extrema (${media.toFixed(2)} graus) detectada no local ${estacao.local}!`
    );
} else {
    estacao["alerta"] = false;
    console.log("Temperaturas dentro da normalidade");
}

console.log(estacao);
