class Conta {
	numero: String;
	saldo: number;

	constructor(numero: String, saldoInicial: number) {
		this.numero = numero;
		this.saldo = saldoInicial;
	}

	sacar(valor: number): void {
		this.saldo = this.saldo - valor;
	}

	depositar(valor: number): void {
		this.saldo = this.saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}

}

class Banco {
	contas: Conta[] = [];
	
	mediaSaldo(): number{ //Letra D;
		return this.totalSaldo() / this.totalContas();
	}

	totalSaldo(): number{ //Letra D;
		let valor: number = 0;
		this.contas.map(conta => conta.saldo).forEach(saldo => valor+=saldo);
		return valor;
	}

	totalContas(): number{ //Letra D;
		return this.contas.length;
	}

	transferir(numeroDebito: string, numeroCredito: string, valor: number): void { //Letra C; método transferir
		let credito: Conta = this.consultar(numeroDebito);
		let debito: Conta = this.consultar(numeroCredito);
		if(debito == null || credito == null){
			return;
		}
		credito.transferir(debito, valor);
	}

    sacar(numero: string, valor: number): void{  //Letra B; método sacar;
        let c: Conta = this.consultar(numero)
        if(c == null){
            return;
        }
        c.sacar(valor);
    }

	inserir(conta: Conta): void { //Letra A; método inserir alterado;
        let c: Conta = this.consultar(conta.numero);
        if(c != null){
            console.log(`A conta de número ${conta.numero} já existe!`);
            return;
        }
        this.contas.push(conta);
	}

	consultar(numero: String): Conta {
		let contaConsultada: Conta;
		for (let conta of this.contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				break;
			}
		}
		return contaConsultada;
	}

	consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this.contas.length; i++) {
			if (this.contas[i].numero == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}

	alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.numero);
		if (indice != -1) {
			this.contas[indice] = conta;
		}
	}

	excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		
		if (indice != -1) {
			for (let i: number = indice; i < this.contas.length; i++) {
				this.contas[i] = this.contas[i+1];
			}

			this.contas.pop();
		} 
	}

	depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.depositar(valor);
		}
	}
}

let b: Banco = new Banco();

b.inserir(new Conta("111", 800));
b.inserir(new Conta("222", 1600));
b.inserir(new Conta("333", 2400));
b.inserir(new Conta("333", 3200)); 

console.log("Saldo antes do saque: " + b.consultar("333").saldo);
b.sacar("333", 1200);
console.log("Saldo após o saque: " + b.consultar("333").saldo);
b.transferir("222", "333", 600);
console.log("Saldo após a transferência: " + b.consultar("333").saldo);

console.log("\nQuantidade de contas do banco: " + b.totalContas());
console.log("Quantidade de saldo do banco: " + b.totalSaldo());
console.log("Média de saldo do banco: " + b.mediaSaldo());