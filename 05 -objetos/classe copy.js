class Pessoa { // definição do objeto
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome e ${this.nome} e minha idade e ${this.idade}`);
    }
}

const Paulo = new Pessoa('Paulo', 26); 


console.log(Paulo);