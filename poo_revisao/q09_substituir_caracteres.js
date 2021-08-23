const prompt = require("prompt-sync")();

function main(){

    let frase = prompt("Digite uma frase: ");
    const caractere_a = prompt("Informe um caractere da frase: ");
    const caractere_b = prompt("Informe um novo caractere: ");
    let nova_frase = '';

    for(let i = 0; i < frase.length; i++){
        if(frase[i] === caractere_a){
            nova_frase = nova_frase + caractere_b
        }else{
            nova_frase = nova_frase + frase[i]
        }
    }
    console.log(nova_frase);
}
main();