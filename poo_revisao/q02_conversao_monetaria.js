const prompt = require('prompt-sync')();

function main() {
    
    const cot_dolar = Number(prompt("Informe o valor do dólar: R$"));
    const valor_dolar = Number(prompt("informe o valor em dólar: $"));

    let valor_real = cot_dolar * valor_dolar;

    console.log(`A conversão resulta em R$${valor_real.toFixed(2)}`);
}
main();