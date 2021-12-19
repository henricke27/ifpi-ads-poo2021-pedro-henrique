class Veiculo{
    placa: string;
    ano: number;
}

class Carro extends Veiculo{
    modelo: string;
}

class CarroEletrico extends Carro{
    autonomiaBateria: number;
}

class Garagem{
    espaco: Array<Carro> = []

    estacionar(carro: Carro): void{
        this.espaco.push(carro);
    }
}

let ce: CarroEletrico = new CarroEletrico(); 
let g: Garagem = new Garagem();

g.estacionar(ce); 
