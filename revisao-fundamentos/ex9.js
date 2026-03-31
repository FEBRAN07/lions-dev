const prompt = require('prompt-sync')();
const maxManutencao = 500;

let veiculo = {
    placa: 'ABC1D23',
    quilometragens: [],

    entrarQuilometragens() {
        for (let i = 0; i < 3; i++) {
            this.quilometragens.push(
                parseInt(
                    prompt(`Digite a distancia percorrida no dia ${i + 1}: `).trim()
                )
            );
        }
    },

    avaliarManutencao() {
        let total = 0;
        this.quilometragens.forEach((element) => {
            total += element;
        });

        if (total > maxManutencao) {
            this.manutencao = true;
        } else {
            this.manutencao = false;
        }

        return total;
    },
};

veiculo.entrarQuilometragens();
let totalKm = veiculo.avaliarManutencao();

console.log(veiculo);
console.log(`Total de Km percorridos: ${totalKm}`);
