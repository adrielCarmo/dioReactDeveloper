function findMaximumPieces(n) { 
    n = parseInt(n);
    return (Math.pow(n,2) + n + 2) / 2;
}

let valor = '2'; // valor a ser inserido pelo usuário, por exemplo...

//TODO: Imprima o valor usando a função (utilizando -> função(valor)) alterando, enquanto transforma o valor em um inteiro.
console.log(findMaximumPieces(valor));