const prompt = require('prompt-sync')(); 

function main() {
    
    let fluxo = (prompt("Deseja imprimir os números inteiros de 1 a 100? ")).toLowerCase();
    
    if(fluxo === "sim"){
        for(let i = 1; i <= 100; i++){
            console.log(i);
        }
    }else{
        console.log("Encerrando atividade.")
    }
}
main();