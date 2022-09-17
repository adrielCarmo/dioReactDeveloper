let aux = prompt("Insira os números: ");
let pimentoes = aux.split(" ");
let X = 0;

//TODO: Faça a soma do número de pimentões e imprima o resultado
pimentoes.forEach((valor) => {
  X += parseInt(valor);
});

console.log("X = " + X);