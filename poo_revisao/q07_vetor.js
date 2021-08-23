const prompt = require("prompt-sync")();

function main(){

    let vetor = Array(5);

    for(let i = 0; i < 5; i++){
        vetor[i] = prompt(`Valor para a posição ${i}: `);
    }
    
    console.log(vetor);
}
main();