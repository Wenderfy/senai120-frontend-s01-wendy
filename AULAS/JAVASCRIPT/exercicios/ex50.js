let codFilme = 4;
let mensagem = "Qual é o nome do filme dirigido por James Cameron que possui seres azuis?";

switch (codFilme) {

    case 1:
        mensagem = "Interestelar";
        break;
    case 2:
        mensagem = "Eu sou a lenda";
        break;
    case 3:
        mensagem = "A mumia";
        break;
    case 4:
        mensagem = "Avatar";
        break;
    case 5:
        mensagem = "Star-Wars";
        break;
    default:
        mensagem = "Alternativa errada";

}

console.log(mensagem);
