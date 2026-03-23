let salarios = [2500, 3200, 4100, 5000, 6200];

const reajuste = 0.1;

for (let i = 0; i < salarios.length; i++) {
    salarios[i] += salarios[i] * reajuste;
}

console.log(`Salarios apos reajuste: ${salarios}`);
