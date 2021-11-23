//Primeira questão;
let numeros : Array<number> = [1, 2, 3, 4, 5];
let somatorio : number = 0;

numeros.forEach(number => somatorio += number);
console.log(somatorio);

/*Segunda questão: O código irá exibir todos os valores contidos no array de number. Também será exibido um valor
undefined no final, devido a condição "<=" do laço;*/

//Terceira questão;
let numbers : Array<number> = [7,1,9,3,4,8,6,2,10];
console.log("---------- Ordem crescente ----------");
numbers.sort((a, b) => a - b);
numbers.forEach(number => console.log(number));

console.log("---------- Ordem decrescente ----------");
numbers.sort((a, b) => b - a);
numbers.forEach(number => console.log(number));

//Quarta questão;
let texto : string = "Instituto Federal do Piauí";
let array : string[] = texto.split(" ");
console.log("A) Texto em maiúsculo: " + texto.toUpperCase());
console.log("B) Caractere da posição 10: " + texto.charAt(10));
console.log("C) Última posição da vogal o: " + texto.lastIndexOf("o"));
console.log("D) Array de strings: " + array);
