const prompt = require('prompt-sync')();

function main(){

    const segundos = prompt('Digite a quantidade de segundos: ');

    let tempo = calcular_tempo(segundos);

    console.log(tempo);
}

function calcular_tempo(seg) {
    let segundos = seg % 60;
    let minutos = parseInt((seg / 60) % 60);
    let horas = parseInt(seg / 3600);

    return String(`${horas}:${minutos}:${segundos}`);
}

main();