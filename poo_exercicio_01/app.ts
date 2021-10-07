/* ########################## 1° Questâo ##########################

    O objeto está associado a concretização de uma classe (instaciação), e está alocado na memória durante a execução do programa.
Já uma classe apresenta um agrupamento de atributos e métodos, no qual uma classe poderá servir de modelo para criar (instanciar) objetos.
    Fazendo uma exemplificação: A classe seria um projeto conceitual de engenharia, e o objeto seria o projeto já implementado/materializado.

/* ########################## 2° Questâo ##########################

Um atributo é uma caracteristica que está associado a um objeto. Já um método é um comportamento que está atribuido a um objeto.

------------------------ Exemplo de objeto que possui atributos e métodos ------------------------ */

class Aluno{
    private nome : string;  
    private matricula : string;

    public getNome() : string{  
        return this.nome;
    }

    public setNome(nome : string) : void {
        this.nome = nome;
    }
    public getMatricula() : string{
        return this.matricula;
    }

    public setMatricula(matricula : string) : void {
        this.matricula = matricula;
    }
}

let a1 : Aluno = new Aluno(); //Objeto "Aluno" sendo criado, com seus métodos e atributos.
a1.setNome("Pedro Henrique Vieira"); 
a1.setMatricula("2021111TADS0162");

console.log("Aluno: ", a1.getNome());
console.log("Matrícula: ", a1.getMatricula());

/* ########################## 3° Questâo ##########################

                            Sistema Relevante               Sistema Irrelevante
Peso                        Categoria do UFC                DETRAN
Tipo de CNH                 DETRAN                          Time de Futebol
Tipo Sanguíneo              Laboratório médico              Categoria do UFC
Habilidade destra           Time de Futebol                 Controle nutricional
Percentual de gordura       Controle nutricional            Banco financeiro
Saldo em conta              Banco financeiro                IBGE
Etinia                      IBGE                            Laboratório médico

/* ########################## 4° Questâo ##########################

    A) Sim, pois é necessário que uma conta tenha um proprietário;
    
    B) Sim, nada impede que uma pessoa possa ter mais de uma conta. Nesse caso, considerando a linguagem C++, uma Struct de "Pessoa" poderá ser criada
para armazenar o conjunto de Contas de uma pessoa em um vetor de Conta.
 
    ------------------------ Exemplo de um conjunto de Contas em C++ ------------------------ 
        typedef struct Conta{
            string titular;
            double saldo;
        }Conta;

        typedef struct pessoa{
            string nome;
            Conta conta[10];
        }Pessoa; 

/* ########################## 5° Questâo ##########################

    Objetos de um sistema de controle acadêmico: Aluno, Professor, Disciplina, Turma e Grade.

*/

/* ########################## 6° Questâo ########################## 

Objeto: Jogador;
Atributos: nickname, vida, energia, ataque, defesa, velocidade, força, level;
Métodos: atacar(), defender(), correr(), pular(), rastejar(), recuperarHP(), pegarItem(), soltarItem(),
dialogarComNPC(), usarItem(), interagirComInventario();

Objeto: Inimigo;
Atributos: tipoInimigo, vida, energia, ataque, defesa, velocidade, força, level;
Métodos: atacar(), defender(); correr(), pular(), roubarItem(), danificarItem(), droparItem();

Objeto: Inventario;
Atributos: espaço, slotLixeira;
Métodos: organizarItens(), armazenarItem(), limparLixeira(), desbloquearSlot(), abrirInventario(),
fecharInventario();

Objeto: Npc;
Atributos: nome, vida, defesa;
Métodos: atualizarMissao(), fugirDoInimigo(), gerarItem(), recuperarHP();

Objeto: Fase;
Atributos: dificuldade, cenario, natureza;
Métodos: spawnInimigo(), dispararArmadilha(), precipitar(), gerarTremor(), spawnBoss();

Objeto: Arma;
Atributos: nome, dano, desgaste;
Métodos: desgastar(), quebrar(), aprimorar(); 

Objeto: Equipamento;
Atributos: nome, defesa, desgaste;
Métodos: desgastar(), quebrar(), aprimorar(); 

Objeto: Item;
Atributos: nome, funcao;
Métodos: spawnItem(), interagir();

/* ########################## 7° Questâo ########################## */

class Retangulo {  
    l1 : number = 0;
    l2 : number = 0;

    calcularArea() : number{
        return this.l1 * this.l2;
    }

    calcularPerimetro() : number{
        return (this.l1 * 2) + (this.l2 * 2); 
    }
}

let r : Retangulo = new Retangulo();
r.l1 = 10;
r.l2 = 5;
console.log("Área do retângulo: ", r.calcularArea());
console.log("Perímetro do retângulo: ", r.calcularPerimetro());

/* ########################## 8° Questâo ########################## */

class Circulo {  

    raio : number = 0;

    calcularArea() : number{
        return 3.14 * Math.pow(this.raio, 2);  
    }

    calcularPerimetro() : number{
        return 2 * 3.14 * this.raio; 
    }
}

let c : Circulo = new Circulo();
c.raio = 5;
console.log("Área do circulo: ", c.calcularArea().toFixed(2));
console.log("Perimetro do circulo: ", c.calcularPerimetro().toFixed(2));

/* ########################## 9° Questâo ########################## */

class SituacaoFinanceira{
    valorCreditos : number = 0;
    valorDebitos : number = 0;  

    saldo() : number{
        return this.valorCreditos - this.valorDebitos;
    }
}

let sf : SituacaoFinanceira = new SituacaoFinanceira();
sf.valorCreditos = 1500;
sf.valorDebitos = 500;
console.log("Saldo: ", sf.saldo());