let diaSemana = 5;
let mensagem = "Selecione o dia útil";

switch (diaSemana) {
    case 1:
        mensagem = "Segunda-feira";
        break;
    case 2:
        mensagem = "Terça-feira";
        break;
    case 3:
        mensagem = "Quarta-feira";
        break;
    case 4:
        mensagem = "Quinta-feira";
        break;
    case 5:
        mensagem = "Sexta-feira";
        break;
    default:
        mensagem = "Dia Inválido";

}

console.log(mensagem);
