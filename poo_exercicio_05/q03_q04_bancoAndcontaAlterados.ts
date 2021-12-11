class Conta {
	private numero: String; //4.a
	private saldo: number;

	constructor(numero: String, saldoInicial: number) {
		this.numero = numero;
		this.saldo = saldoInicial;
	}

	public getNumero(): String{
		return this.numero;
	}

	public getSaldo(): number{
		return this.saldo;
	}

	public sacar(valor: number): void {
		this.saldo = this.saldo - valor;
	}

	public depositar(valor: number): void {
		this.saldo = this.saldo + valor;
	}

	public transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}

}

class Banco {
	private contas: Conta[] = []; //3.a
	
	public mediaSaldo(): number{ 
		return this.totalSaldo() / this.totalContas();
	}

	public totalSaldo(): number{ 
		let valor: number = 0;
		this.contas.map(conta => conta.getSaldo()).forEach(saldo => valor+=saldo);
		return valor;
	}

	public totalContas(): number{ 
		return this.contas.length;
	}

	public transferir(numeroDebito: string, numeroCredito: string, valor: number): void { 
		let credito: Conta = this.consultar(numeroDebito);
		let debito: Conta = this.consultar(numeroCredito);
		if(debito == null || credito == null){
			return;
		}
		credito.transferir(debito, valor);
	}

    public sacar(numero: string, valor: number): void{  
        let c: Conta = this.consultar(numero)
        if(c == null){
            return;
        }
        c.sacar(valor);
    }

	public inserir(conta: Conta): void { 
        let c: Conta = this.consultar(conta.getNumero());
        if(c != null){
            console.log(`A conta de número ${conta.getNumero()} já existe!`);
            return;
        }
        this.contas.push(conta);
	}

	public consultar(numero: String): Conta {
		let contaConsultada: Conta;
		for (let conta of this.contas) {
			if (conta.getNumero() == numero) {
				contaConsultada = conta;
				break;
			}
		}
		return contaConsultada;
	}

	private consultarPorIndice(numero: String): number { //3.b
		let indice: number = -1;
		for (let i: number = 0; i < this.contas.length; i++) {
			if (this.contas[i].getNumero() == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}

	public alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.getNumero());
		if (indice != -1) {
			this.contas[indice] = conta;
		}
	}

	public excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		
		if (indice != -1) {
			for (let i: number = indice; i < this.contas.length; i++) {
				this.contas[i] = this.contas[i+1];
			}

			this.contas.pop();
		} 
	}

	public depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.depositar(valor);
		}
	}
}

//4.b

let b: Banco = new Banco();

b.inserir(new Conta("111", 800));
b.inserir(new Conta("222", 1600));
b.inserir(new Conta("333", 2400));
b.inserir(new Conta("333", 3200)); 

console.log("Saldo antes do saque: " + b.consultar("333").getSaldo());
b.sacar("333", 1200);
console.log("Saldo após o saque: " + b.consultar("333").getSaldo());
b.transferir("222", "333", 600);
console.log("Saldo após a transferência: " + b.consultar("333").getSaldo());

console.log("\nQuantidade de contas do banco: " + b.totalContas());
console.log("Quantidade de saldo do banco: " + b.totalSaldo());
console.log("Média de saldo do banco: " + b.mediaSaldo());