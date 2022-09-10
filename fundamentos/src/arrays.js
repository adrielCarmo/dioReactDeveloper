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
];

// Adicionando novo obj. no Array
alunos.push({
    nome: "Maria",
    idade: 15
});

console.log(`O aluno ${alunos[0].nome} tem ${alunos[0].idade} anos de idade!`);