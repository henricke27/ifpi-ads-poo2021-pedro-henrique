const prompt = require("prompt-sync")();

function main(){

    const valor_p = Number(prompt("Informe o valor de p: "));
    const valor_x = Number(prompt("Informe o valor de x: "));

    let novo_valor = calcular_percentual(valor_p, valor_x);

    console.log(`${valor_p}% de ${valor_x} equivale à: ${novo_valor}`)
}

function calcular_percentual(p, x) {
    return novo_valor = (p * x) / 100;
}
main();