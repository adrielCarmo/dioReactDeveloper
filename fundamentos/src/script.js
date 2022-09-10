const idade = 25;

if (idade > 18) {
    console.log("Maior que 18!");
} else {
    console.log("Menor que 18!");
}

const media = 5.5;


// estrutura com if
if (media > 7) {
    console.log("Acima da Média!");
} else if (media > 5 && media <= 7) {
    console.log("Na Média!");
} else {
    console.log("Abaixo da Média!");
}

// estrutura com switch
switch(media) {
    case media > 7:
        console.log("Acima da Média!");
        break;
    case media > 5 && media <= 7:
        console.log("Na Média!");
        break;
    default:
        console.log("Abaixo da Média!");    
}

// estrutura com ternário:
// condicao ? "se verdadeiro" : "se falso";

media >= 7 ? console.log("Aprovado!") : console.log("Reprovado!");