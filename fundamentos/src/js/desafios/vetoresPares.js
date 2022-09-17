const array = [ 2, 3, 5, 7, 11, 13, 18, 34 ];
let newArray = [];
//TODO: Implemente um laço de repetição e complemente com uma condição que verifique os Ararys Pares:

array.forEach((value) => {
    if(parseInt(value) % 2 == 0) {
        newArray.push(value);
    }
});

//TODO: Agora imprima APENAS os números pares do Array:
console.log(newArray);