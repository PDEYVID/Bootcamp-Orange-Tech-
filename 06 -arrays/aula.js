/*const aluno = ['Paulo', 'Deyvid', 'Joao'];
aluno.push('renan') // adicionando no array
aluno.pop(); // server para tirar do array shift() para escolher
aluno[4] = 'Daniel' // assim tambem pode adicionar 
console.log(aluno);*/

/*const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(5);
notas.push(2);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
console.log(soma / 5);*/

/*const nome = 'Paulo Deyvid Barros do Nascimento';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}*/

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(5);
notas.push(2);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];

    soma = soma + nota;
}
const media = soma / notas.length;
console.log(media);