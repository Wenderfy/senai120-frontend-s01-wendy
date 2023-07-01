let codFruta = 5;
let mensagem = "Qual é o códifo da fruta 3?";

switch (codFruta) {

    case 1:
        mensagem = "Maçã - Vermelha";
        break;
    case 2:
        mensagem = "Limão - Verde";
        break;
    case 3: 
        mensagem = "Uva - Roxa";
        break;
    case 4:
        mensagem = "Laranja - Laranja";
        break;
    case 5:
        mensagem = "Manga - Amarela";
        break;
    default:
        mensagem = "Código inválido";
}

console.log(mensagem);