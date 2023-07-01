let operacao = "divisao";
let calculo;
let n1 = 10;
let n2 = 5;

operacao = operacao.toLocaleLowerCase().trim()

switch (operacao) {
    case "soma":
        calculo = n1 + n2
        console.log(`${n1} + ${n2} + ${calculo}`);
        break;

    case "subtracao":
        calculo = n1 - n2
        console.log(`${n1} - ${n2} - ${calculo}`);
        break; 

    case "multiplicacao":
        calculo = n1 * n2
        console.log(`${n1} * ${n2} = ${calculo}`);
        break;

    case "divisao":
    calculo = n1 / n2
    console.log(`${n1} ÷ ${n2} ÷ ${calculo}`); //Alt + 0247 = sinal de divisao
    break;

}