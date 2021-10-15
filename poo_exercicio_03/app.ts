/*########################## 1° Questâo  ########################## 

O programa até compila, porém não será possível realizar manipulações com "quantReservas",
pois o valor default de um atributo não inicializado é undefined.
Quaisquer operações realizadas com esses tipos de atributos terá como retorno um NaN. 

class Hotel{
    quantReservas : number;

    adicionarReserva() : void {
        this.quantReservas++;
    }
}
let hotel : Hotel = new Hotel();
hotel.adicionarReserva(); // Incrementando uma reserva.
console.log(hotel.quantReservas); // Exibe NaN no console.

/*########################## 2° Questâo  ########################## */

class Hotel {
    quantReservas : number;
    
    constructor(reservas : number){
        this.quantReservas = reservas;
    }
    adicionarReserva() : void {
        this.quantReservas++;
    }
}

let hotel : Hotel = new Hotel(2);
console.log(hotel.quantReservas);

/*########################## 3° Questâo  ##########################

Não compila, pois o Objeto Radio está sendo instanciado sem passar o parâmetro do construtor.

Logo, o problema poderá ser solucionado fazendo a chamada do construtor, e passando um number como 
parâmetro(new Radio(0)). Como propõe a solução abaixo:

*/
class Radio {
    volume : number;

    constructor(volume : number) {
        this.volume = volume;
    }
}

let r : Radio = new Radio(0);
r.volume = 10;
console.log(r.volume);


/*########################## 4° Questâo  ########################## 

a) O resultado será 90 para ambos os consoles. Pois, o objeto que é referenciado por c1 se perde, e c1 passa a
apontar para o mesmo objeto de c2 (c1 = c2). Ao realizar a tranferência, o objeto que agora é referência
de c1 e c2 ao mesmo tempo, retira e adiciona saldo de sí mesmo.

b) O objeto que era referênciado por c1, será excluído por uma máquina virtual(Garbage Collection).

*/

/*########################## 5° Questâo  ########################## */

class Jogador {
    forca : number;
    nivel : number;
    pontos : number;

    constructor(forca : number, nivel : number, pontos : number){
        this.forca = forca;
        this.nivel = nivel;
        this.pontos = pontos;
    }
    pontosAtaque() : number{
        return this.forca * this.nivel;
    }
    atacar(jogador : Jogador) : void{
        jogador.pontos -= this.pontosAtaque();
    }
} 

let p1 : Jogador = new Jogador(6, 8, 200);
let p2 : Jogador = new Jogador(3, 4, 200);

p1.atacar(p2);
p2.atacar(p1);

let maisPontos : string = p1.pontos > p2.pontos ? "p1" : "p2";
console.log(`O jogador ${maisPontos} possui mais pontos.`);

/*########################## 6° Questâo  ########################## */

class Conta {
    numero: String;
    saldo: number;
    
    constructor(numero : String, saldo : number){
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): boolean { //letra a;
        if(this.saldo < valor){
           return false;
        }else{
            this.saldo = this.saldo - valor;
        }
        return true
    }
    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo(): number {
        return this.saldo;
    }
    transferir(contaDestino: Conta, valor: number): boolean { //letra b/c
        if(!(this.sacar(valor))){
            return false;
        }else{
            contaDestino.depositar(valor);
        }
        return true;
    }
    /*Em orientação a objetos, acessar atributos diretamente nâo é
uma boa prática, pois fere o princípio do encapsulamento; letra b*/
}

//verificação; letra d

let c1 : Conta = new Conta("222", 750);
c1.depositar(250);
c1.sacar(900); //True
console.log("Saldo c1: " + c1.consultarSaldo());

let c2 : Conta = new Conta("333", 250);
c2.depositar(750);
c2.sacar(1500); //False
console.log("Saldo c2: " + c2.consultarSaldo());

c1.transferir(c2, 150); //False; Tranferência inviável
console.log("Saldo c1: " + c1.consultarSaldo()); 
console.log("Saldo c2: " + c2.consultarSaldo()); 

/*########################## 7° Questâo  ########################## */

class Produto { //letra a

    codigo : string;
    descricao : string;
    valor : number;
    quantidade : number = 0;
    quantidadedMinima : number = 1; //letra c;

    constructor(codigo : string, descricao : string, valor : number){
        this.codigo = codigo;
        this.descricao = descricao;
        this.valor = valor;
    }

    baixar(quantidade : number) : boolean{ //letra b/c;
        if((this.quantidade - quantidade) < this.quantidadedMinima){
            return false;
        }else{
            this.quantidade -= quantidade;
        }
        return true;
    }
    repor(quantidade : number) : void{ //letra b;
        this.quantidade += quantidade;
    }

    reajuste(taxa : number) : void { //letra d;
        this.valor += this.valor * (taxa/100);
    }

    toString() : string{ //letra e;
        return "codigo: " + this.codigo + ", descrição: " + this.descricao + ", valor: " + this.valor + ", quantidade: " + 
            this.quantidade + ", quantidadeMinima: " + this.quantidadedMinima;
    }

    equals(p : Produto) : boolean{ //letra f;
        return this.codigo == p.codigo;
    }

}

//letra g; verificação

let px : Produto = new Produto("#0162", "ABC", 20);
let py : Produto = new Produto("#0162", "XYZ", 10);

px.repor(10); 
px.baixar(10); 
console.log(px.quantidade); //Mesma quantidade, pois a baixa iria ultrapassar o limite estabelecido pela quantidade mínima

px.reajuste(50); //Valor reajustado em 50%; novo valor: 30;
console.log(px.valor); 

console.log(px.toString()); //Representação textual do produto px;
console.log(px.equals(py)); //true; mesmo código
