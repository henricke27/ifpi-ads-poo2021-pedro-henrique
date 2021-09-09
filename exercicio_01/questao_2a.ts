function main(){
    let x : number = 1;
    let y : number = 2;

    let somatorio = soma(x, y);

    console.log(somatorio); //Saída: 3
}
function soma(x: number, y?: any): number {
    return x + y;
}

main();