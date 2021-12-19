class Produto{
    id: string;
    descricao: string;
    quantidade: number;
    valor: number;

    constructor(id: string, desc: string, qnt: number, valor: number){
        this.id = id;
        this.descricao = desc;
        this.quantidade = qnt;
        this.valor = valor;
    }

    repor(quantidade: number): void{
        this.quantidade+=quantidade;
    }

    darBaixa(quantidade: number): void{
        this.quantidade-=quantidade;
    }

    toString(): string{
        return "[id: " + this.id + ", descricao: " + this.descricao + ", quantidade: " + this.quantidade + ", valor: " + this.valor + "]"
    }
}

class ProdutoPerecivel extends Produto{
    dataValidade: Date;

    constructor(id: string, desc: string, qnt: number, valor: number, date: Date){
        super(id,desc,qnt,valor);
        this.dataValidade = date;
    }

    ehValido(): boolean{
        return this.dataValidade > new Date(Date.now()); 
    }

    toString(): string{
        return "[id: " + this.id + ", descricao: " + this.descricao + ", quantidade: " + this.quantidade + ", valor: "
         + this.valor + ", data validade: " + this.dataValidade.toLocaleDateString("pt-BR") + "]";
    }

}

class Estoque{
    private produtos: Array<Produto> = [];

    getprodutos(): Array<Produto>{
        return this.produtos;
    }

    inserir(p: Produto): void{
        if(this.consultar(p.id, 0) != null){
            console.log("Não foi possível inserir")
        }else{
            this.produtos.push(p);
        }
        
    }

    consultar(id: string, repor: number): Produto{
        let produtoConsultado: Produto;
        for(let produto of this.produtos){
            if(produto.id == id){
                produtoConsultado = produto;
                produtoConsultado.repor(repor);
                break;
            }
        }
        return produtoConsultado;
    } 

    consultarPorIndice(id: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this.produtos.length; i++) {
			if (this.produtos[i].id == id) {
				indice = i;
				break;
			}
		}
		return indice;
	}

    excluir(id: string): void {
		let indice: number = this.consultarPorIndice(id);
		
		if (indice != -1) {
			for (let i: number = indice; i < this.produtos.length; i++) {
				this.produtos[i] = this.produtos[i+1];
			}

			this.produtos.pop();
		} 
	}

    listagemPereciveis(): void{
        for(let produto of this.produtos){
            if(produto instanceof ProdutoPerecivel){
                console.log(produto.toString());
            }
        }
    }
}

let p1: ProdutoPerecivel = new ProdutoPerecivel("111","AAA",10,10,new Date(2022,0,5)); //Mês começa em zero;
let p2: Produto = new Produto("222","BBB",5,20);
let p3: Produto = new Produto("333", "CCC",4,25);
let p4: ProdutoPerecivel = new ProdutoPerecivel("444","DDD",2,50,new Date(2021,6,15));
let p5: ProdutoPerecivel = new ProdutoPerecivel("555","EEE",-50,-2,new Date(2021,6,15));

let e: Estoque = new Estoque();
e.inserir(p1);
e.inserir(p2);
e.inserir(p3);
e.inserir(p4);
e.inserir(p4); //testando validação pelo id;

e.inserir(p5);
e.excluir("555")

console.log(e.consultar("222", 1).quantidade);
e.listagemPereciveis();


