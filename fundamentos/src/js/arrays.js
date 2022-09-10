// Estrutura de Array de Objetos
const alunos = [
    {
        nome: 'Adriel',
        idade: 19
    },
    {
        nome: 'Cleiton',
        idade: 27
    },
    {
        nome: 'João',
        idade: 14
    },
    {
        nome: 'Valdir',
        idade: 72
    }
];

// Adicionando novo obj. no Array
alunos.push({
    nome: "Maria",
    idade: 15
});

console.log(`O aluno ${alunos[0].nome} tem ${alunos[0].idade} anos de idade!`);

console.log("===================");
const alunosFiltrados = alunos.filter((aluno) => aluno.idade >= 18);
console.table(alunosFiltrados);

console.log("===================");
const alunoProcurado = alunos.find((aluno) => aluno.nome === 'Adriel');
console.log(alunoProcurado);

console.log("===================");
const alunoProcuradoIndice = alunos.findIndex((aluno) => aluno.idade > 10);
console.log(alunoProcuradoIndice);

console.log("===================");
const idades = alunos.reduce((acc, aluno) => {
    return acc + aluno.idade;
}, 0); // o "0" é o valor inicial
console.log(idades);

const menorDeNove = alunos.some(alunos => alunos.idade < 10);
const menorQueCem = alunos.every(alunos => alunos.idade < 100);

console.log(menorDeNove);
console.log(menorQueCem);