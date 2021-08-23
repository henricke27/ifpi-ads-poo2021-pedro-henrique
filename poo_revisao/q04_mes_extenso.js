const prompt = require('prompt-sync')();

function main() {
    
    const numero_mes = Number(prompt("Digite um número pertencente ao mês: "));

    let mes;

    if(!(numero_mes > 0 && numero_mes <= 12)){
        console.log("Valor inválido");
    }else{
        if(numero_mes === 1){
            mes = "Janeiro";
        }
        if(numero_mes === 2){
            mes = "Fevereiro";
        }
        if(numero_mes === 3){
            mes = "Março";
        }
        if(numero_mes === 4){
            mes = "Abril";
        }
        if(numero_mes === 5){
            mes = "Maio";
        }
        if(numero_mes === 6){
            mes = "Junho";
        }
        if(numero_mes === 7){
            mes = "Julho";
        }
        if(numero_mes === 8){
            mes = "Agosto";
        }
        if(numero_mes === 9){
            mes = "Setembro";
        }
        if(numero_mes === 10){
            mes = "Outubro";
        }
        if(numero_mes === 11){
            mes = "Novembro";
        }
        if(numero_mes === 12){
            mes = "Dezembro";
        }
    }
    console.log(`Mês: ${mes}`);
}
main();