const prompt = require("prompt-sync")();

function main(){

    let vetor = Array(20);
    let num_pares = 0;

    for(let i = 0; i < 20; i++){
        vetor[i] = Number(prompt(`Numero para a posição ${i}: `));
        if(vetor[i] % 2 === 0){
            num_pares++;
        }
    }
    console.log(`Quantidade de números pares do vetor: ${num_pares}`);
}
main();