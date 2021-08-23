const prompt = require("prompt-sync")();

function main(){

    let frase = prompt("Digite uma frase: ");
    let nova_frase = '';

    for(let i = 0; i < frase.length; i++){
        if(frase[i] === 'A' || frase[i] === 'E' || frase[i] === 'I' || frase[i] === 'O' || frase[i] === 'U'
        || frase[i] === 'a' || frase[i] === 'e' ||frase[i] === 'i' || frase[i] === 'o' || frase[i] === 'u'){
            
        }else{
            nova_frase = nova_frase + frase[i];
        }
    }
    console.log(nova_frase);
}
main();