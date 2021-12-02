class Postagem{//4; a
    id: number = 0; 
    texto: string; 
    curtidas: number = 0; 

    constructor(texto: string, id: number){ 
        this.texto = texto;
        this.id = id;
    }
    curtir(): void{ //b
        this.curtidas++;
    }

    toString(): string{ //c
        return "Postagem: " + this.texto + "\nCurtidas: " + this.curtidas;
    }
}

class MicroBlog{ //4; b
    postagens: Array<Postagem> = []; //a

    postar(post: Postagem): void{ //b
        this.postagens.push(post);
    }

    buscar(id: number){
        let postagem: Postagem; 
        for(let post of this.postagens){
            if(post.id == id){
                postagem = post;
                break;
            }
        }
        return postagem
    }

    buscarPorIndice(id: number): number{
        let indice: number = -1
        for(let i: number = 0; i < this.postagens.length; i++){
            if(this.postagens[i].id == id){
                indice = i;
                break;
            }
        }
        return indice;
    }

    postMaisCurtido(): Array<Postagem>{ //d
        let maisCurtido: Postagem = this.postagens[0];
        for(let post of this.postagens){
            if(post.curtidas > maisCurtido.curtidas){
                maisCurtido = post;
            }
        }
        return [maisCurtido];
    }

    excluir(id: number): void{ //c
        let indice: number = this.buscarPorIndice(id);
        if(indice == -1){
            return;
        }
        for(let i: number = indice; i < this.postagens.length; i++){
            this.postagens[i] = this.postagens[i+1];
        }
        this.postagens.pop();
    }

    curtir(id: number){ //g
        let post: Postagem = this.buscar(id);
        if(post == null){
            return;
        }
        post.curtir();
    }

    toString(): string{ //f
        let status: string = "";
        for(let post of this.postagens){
            status += post.toString() + "\n"
        }
        return status
    }
} 

let mb: MicroBlog = new MicroBlog();

mb.postar(new Postagem("Indivíduos e interações, mais que processos e ferramentas", 111));
mb.postar(new Postagem("Software em funcionamento, mais que documentação abrangente", 222));
mb.postar(new Postagem("Colaboração com o cliente, mais que negociação de contratos",333));
mb.postar(new Postagem("Responder a mudanças, mais que seguir um plano",444));
mb.postar(new Postagem("Seguir um plano, mais que responder a mudanças",555));

mb.excluir(555);

for(let post of mb.postagens){
    for(let i: number = 0; i < Math.random() * 10000; i++){
        post.curtir();
    }
}

console.log(mb.toString());

console.log("-------------------------------------------------------------------------\n")

console.log("Publicação mais curtida: \n" + mb.postMaisCurtido()[0]);

mb.curtir(mb.postMaisCurtido()[0].id);
console.log("\nNúmero de curtidas atualizado: "  + mb.buscar(mb.postMaisCurtido()[0].id).curtidas);
