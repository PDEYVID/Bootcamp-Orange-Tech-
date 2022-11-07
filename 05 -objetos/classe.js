class Pessoa { // definição do objeto
    nome;
    idade;
    altura;

    descrever() {
        console.log(`Meu nome e ${this.nome} e minha idade e ${this.idade}`);
    }
}

const Paulo = new Pessoa(); // ocorrecia do objeto
Paulo.nome = "Paulo Deyvid";
Paulo.idade = 26;
Paulo.altura = 1.60;


console.log(Paulo);
Paulo.descrever();