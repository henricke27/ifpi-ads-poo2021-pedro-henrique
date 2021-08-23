const prompt = require("prompt-sync")();

function main() {
    
    let soma = 0;
    let media = 0;
    let denominador = 0;

    do{
        str_numero = prompt("Número: ");
        let numero = '';
        for(let i = 0; i < str_numero.length; i++){
            if((str_numero[i] == '-' && str_numero[i+1] === '1') || (str_numero[i] == '1' && str_numero[i-1] === '-')){
                
            }else{
                numero = numero + str_numero[i];
            }
        }
        numero = Number(numero);
        denominador++;
        soma = soma + numero;
        media = soma / denominador;
        console.log(`Somatório: ${soma}`);
        console.log(`Média: ${media.toFixed(2)}`);
        console.log('');
        
    }while(str_numero !== "PARAR");

}
main();