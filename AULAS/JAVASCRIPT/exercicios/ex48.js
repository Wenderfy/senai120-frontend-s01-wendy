let diaSemana = 1;
let mensagem = "Como se escreve Domingo em inglês?";

switch (diaSemana) {

    case 1:
        mensagem = "Sunday";
        break;
    case 2:
        mensagem = "Monday";
        break;
    case 3:
        mensagem = "Tuesday";
        break;
    case 4:
        mensagem = "Wednesday";
        break;
    case 5:
        mensagem = "Thursday";
        break;
    case 6:
        mensagem = "Friday";
        break;
    case 7:
        mensagem = "Saturday";
        break;
    default:
        mensagem = "Dia inválido";

}

console.log(mensagem);