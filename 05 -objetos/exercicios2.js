/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);

    }

    classificaImc(){
        
    }
}

const paulo = new Pessoa('Paulo', 60, 1.75);
console.log(paulo.calcularImc());

const deyvid = new Pessoa('Deyvid', 70, 1.80);
console.log(deyvid.calcularImc());

const jose = new Pessoa('jose', 90, 1.80);
console.log(jose.calcularImc());