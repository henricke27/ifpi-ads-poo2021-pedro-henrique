const prompt = require("prompt-sync")();

function main() {
    
    const inteiro_n = prompt("Valor do inteiro n: "); 
    const inteiro_d = prompt("Valor do inteiro d: ");

    let num_digitos = quantidade_digitos(inteiro_n, inteiro_d);

    console.log(`Ocorrências de ${inteiro_d} em ${inteiro_n}: ${num_digitos}`);
}
function quantidade_digitos(n, d) {
    let ocorrencias = 0;

    for(let i = 0; i < n.length; i++){
        if(n[i] === d){
            ocorrencias++;
        }
    }
    return Number(ocorrencias);
}
main();