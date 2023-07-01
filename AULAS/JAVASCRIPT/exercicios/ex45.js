let Classificação = 1;
let mensagem = "Qual foi o 1º colocado no pódio?"

switch (Classificação) {

    case 1:
        mensagem = "Brasil";
        break;
    case 2:
        mensagem = "Argentina";
        break;
    case 3:
        mensagem = "França";
        break;
    default:
        mensagem = "Resposta inválida";
}

console.log(mensagem);