const prompt = require('prompt-sync')();

function main() {
 
    const numero_1 = Number(prompt("Digite o primeiro número: "));
    const numero_2 = Number(prompt("Digite o segundo número: "));
    const numero_3 = Number(prompt("Digite o terceiro número: "));

    let menor_numero = 0;

    if(numero_1 <= numero_2 && numero_2 <= numero_3){
        menor_numero = numero_1;
    }
    if(numero_2 <= numero_1 && numero_2 <= numero_3){
        menor_numero = numero_2;
    }
    if(numero_3 <= numero_1 && numero_3 <= numero_2){
        menor_numero = numero_3;
    }

    console.log(`Menor número: ${menor_numero}`);
}
main();