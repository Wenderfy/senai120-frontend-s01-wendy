let nomAnimal = 5;
let mensagem = "Qual é o nome do animal conhecido como leão da montanha?";

switch (nomAnimal) {

    case 1:
        mensagem = "Onça-pintada - O maior felino das Américas.";
        break;
    case 2:
        mensagem = "Lince - Animal encontrado na América do Norte que possui ótima visão.";
        break;
    case 3:
        mensagem = "Leopardo - Animal encontrado na África e Índia que possui grande habilidade para escalar.";
        break;
    case 4:
        mensagem = "Guepardo - O Animal terrestre mais rápido do mundo.";
        break;
    case 5:
        mensagem = "Puma - Felino encontrado nas montanhas da Ámerica do Norte.";
        break;
    default:
    mensagem = "Animal inválido";

}

console.log(mensagem);