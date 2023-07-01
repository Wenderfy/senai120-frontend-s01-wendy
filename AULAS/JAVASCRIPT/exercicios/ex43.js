let codProduto = 1;
let mensagem = "Qual é o código do Produto 1?";

switch (codProduto) {
    case 1:
        mensagem = "Xiaomi RedMi - R$ 1.500,00";
        break;
    case 2:
        mensagem = "Xiaomi PocoPhone - R$ 2.000,00";
        break;
    case 3:
        mensagem = "Iphone 14 - R$ 6.000,00";
        break;       
    case 4:
        mensagem = "Samsung Galaxy - R$ 3.000,00";
        break;     
    case 5:
        mensagem = "Moto G - R$ 1.200,00";
        break; 
    default:
        mensagem = "Produto inválido";

}

console.log(mensagem);