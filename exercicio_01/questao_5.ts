function main(){
    
    exibir("a");
    exibir("a", "b");
    exibir("a", "b", "c");
    exibir("a", "b", "c", "d");

}
function exibir(...elementos: string[]){
    for(let elemento of elementos){
        console.log(elemento);
    }
}
main();