class Triangulo {
    l1: number; 
    l2: number;
    l3: number;

    constructor(l1: number, l2: number, l3: number){
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    }

    ehTriangulo() : boolean{
        return (Math.abs(this.l2 - this.l3) < this.l1) && (this.l1 < (this.l2 + this.l3));
    }

    ehIsoceles() : boolean {
        if(!this.ehTriangulo()){
            return false;
        }
        return (((this.l1 == this.l2) && (this.l2 != this.l3)) || ((this.l1 == this.l3) && (this.l3 != this.l2)));
    }

    ehEquilatero() : boolean {
        if(!this.ehTriangulo()){
            return false;
        }
        return ((this.l1 == this.l2) && (this.l2 == this.l3));
    }

    ehEscaleno() : boolean {
        if(!this.ehTriangulo()){
            return false;
        }
        return ((this.l1 != this.l2) && (this.l2 != this.l3));
    }
}

let t : Triangulo = new Triangulo(10,7,5);

console.log("Condição de existência: " + t.ehTriangulo());
console.log("Equilátero: " + t.ehEquilatero());
console.log("Escaleno: " + t.ehEscaleno());
console.log("Isoceles: " + t.ehIsoceles());