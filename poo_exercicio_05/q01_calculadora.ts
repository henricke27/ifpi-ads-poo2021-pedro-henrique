class Calculadora{
    private operando1: number;
    private operando2: number;

    constructor (x: number, y: number){
        this.operando1 = x;
        this.operando2 = y;
    }

    public somar() : number{
        return this.operando1 + this.operando2;
    }

    public subtrair() : number{
        return this.operando1 - this.operando2;
    }
    public multiplicar() : number{
        return this.operando1 * this.operando2;
    }
    public dividir() : number{
        return this.operando1 / this.operando2;
    }

}

let calc: Calculadora = new Calculadora(10, 2);

console.log("Soma: ", calc.somar());
console.log("Subtração: ", calc.subtrair());
console.log("Multiplicação: ", calc.multiplicar());
console.log("Divisão: ", calc.dividir());

//let op1 = calc.operando1; //Mensagem: A propriedade 'operando1' é particular e somente é acessível na classe 'Calculadora'.

