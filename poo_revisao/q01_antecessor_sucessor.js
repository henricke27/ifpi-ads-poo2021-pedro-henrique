const prompt = require("prompt-sync")();

function main(){

    let numero = Number(prompt("Digite um numero: "));
    let antecessor = numero - 1;
    let sucessor = numero + 1;

    console.log(`Antecessor: ${antecessor}`);
    console.log(`Sucessor: ${sucessor}`);

}
main();