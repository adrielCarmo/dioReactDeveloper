for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i}  = ${i * 5}`);
}

console.log("===========================");
let x = 1;
while (x <= 10) {
    console.log(`10 x ${x} = ${x * 10}`);
    x++;
}

console.log("===========================");
// foreach trabalha mais com arrays
const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
alfabeto.forEach((value) => {
    console.log(`${value} + 5 = ${value + "5"}`);
});

console.log("===========================");
/*
map é utilizado para manipular cálculos e 
retornar um novo valor para uma nova variável 
*/
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let resultado = valores.map((value) => {
    return value * 5;
});

console.log(resultado);