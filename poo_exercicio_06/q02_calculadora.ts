class calculadora{
    private op1: number;
    private op2: number;

    constructor(x: number, y: number){
        this.op1 = x;
        this.op2 = y;
    }
    
    adicionar(): number{
        return this.op1 + this.op2;
    }

}

let calc: calculadora = new calculadora(4, 3);
console.log("Adicionar: " + calc.adicionar())