class Conta {
	private _numero: String;
	private _saldo: number;

    constructor(numero: String, saldoInicial: number) {
		this._numero = numero;
		this._saldo = saldoInicial;
	}
	
	get numero(): String {
		return this._numero;
	}

	get saldo(): number {
		return this._saldo;
	}
	
	sacar(valor: number): void {
		if (this._saldo >= valor) {
			this._saldo = this._saldo - valor;
		}
	}

	depositar(valor: number): void {
		this._saldo = this._saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}
}

class Poupanca extends Conta {
	private _taxaJuros: number;

	constructor(numero: String, saldo: number, taxaJuros: number ) {
		super(numero, saldo);
		this._taxaJuros = taxaJuros;
	}

	public renderJuros(): void {
		this.depositar(this.saldo * this._taxaJuros/100);
	}

	get taxaJuros(): number {
		return this._taxaJuros
	}
}

class Banco {
	private _contas: Conta[] = [];
	
	inserir(conta: Conta): void {
        let contaConsultada = this.consultar(conta.numero);

        if (contaConsultada == null) {
		    this._contas.push(conta);
        }
	}

	consultar(numero: String): Conta {
		let contaConsultada: Conta;
		for (let conta of this._contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				break;
			}
		}
		return contaConsultada;
	}

	private consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this._contas.length; i++) {
			if (this._contas[i].numero == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}

	alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.numero);
		if (indice != -1) {
			this._contas[indice] = conta;
		}
	}

	excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		
		if (indice != -1) {
			for (let i: number = indice; i < this._contas.length; i++) {
				this._contas[i] = this._contas[i+1];
			}

			this._contas.pop();
		} 
	}

	depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.depositar(valor);
		}
	}

    sacar(numero: String, valor: number): void {
        let contaConsultada = this.consultar(numero);

        if (contaConsultada != null) {
            contaConsultada.sacar(valor);
        }
    }

    transferir(numeroDebito: string, numeroCredito: string, valor: number){
        let contaCredito: Conta = this.consultar(numeroCredito);
        let contaDebito: Conta = this.consultar(numeroDebito);

        if (contaCredito != null && contaDebito != null) {
            contaDebito.transferir(contaCredito, valor);
        }
    }

    calcularQuantidadeContas(): number {
        return this._contas.length;
    }

    calcularTotalSaldos(): number {
        let totalSaldo: number = 0;
        for (let conta of this._contas) {
            totalSaldo += conta.saldo;
        }

        return totalSaldo;
    }

    calcularMediaSaldos() {
        return this.calcularTotalSaldos()/this.calcularQuantidadeContas();
    }

	renderJuros(numero: String) {
		let contaConsultada = this.consultar(numero);
		
		if (contaConsultada instanceof Poupanca) {
			let poupanca: Poupanca = <Poupanca> contaConsultada;
			poupanca.renderJuros();
		}
	}
}

let b: Banco = new Banco();

b.inserir(new Conta("111", 1000));
b.inserir(new Poupanca("222", 1000, 1));

b.renderJuros("111");
b.renderJuros("222");

console.log("Saldo da conta: " + b.consultar("111").saldo);
console.log("Saldo da poupança: " + b.consultar("222").saldo);
