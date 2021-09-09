function main(){
    let x : number = 1;
    let y : String = "2";

    let somatorio = soma(x, y);

    console.log(somatorio); //Saída: 12
}
function soma(x: number, y?: any): number {
    return x + y;
}
main();