function main(){
    let x : number = 1;
    let y;

    let somatorio = soma(x);

    console.log(somatorio); //Saída: NaN
}
function soma(x: number, y?: any): number {
    return x + y;
}

main();