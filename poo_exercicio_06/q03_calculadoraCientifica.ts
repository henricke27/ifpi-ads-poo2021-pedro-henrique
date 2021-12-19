class Calculadora{
    private op1: number;
    private op2: number;

    constructor(x: number, y: number){
        this.op1 = x;
        this.op2 = y;
    }

    getOp1(): number{
        return this.op1;
    }

    getOp2(): number{
        return this.op2;
    }

    adicionar(): number{
        return this.op1 + this.op2;
    }

}

class CalculadoraCientifica extends Calculadora{ 
    
    constructor(x: number, y: number){
        super(x, y);
    }

    exponenciar(): number{ //a;
        return Math.pow(super.getOp1(), super.getOp2());
    }

}

let cc: CalculadoraCientifica = new CalculadoraCientifica(5, 2); //b;
console.log("Exponenciação: " + cc.exponenciar());

//c; Foi necessário acrescentar os métodos getters para realizar a exponenciação;