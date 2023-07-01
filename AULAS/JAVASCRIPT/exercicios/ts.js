const numeros = [1, 2, 3, 4, 5];
const nomes = ['Brasil', 'Suíça', 'França', 'Itália'];

console.log(numeros[0]);
console.log(nomes[2]);

numeros[1] = 10;
console.log(numeros); 



const numero = 7;

let divisores = 0;

let i = 1;

while (i <= numero) {
 
  if (numero % i === 0) {
    
    divisores++;
  }
  i++;
}
if (divisores === 2) {
  console.log(numero + " é um número primo.");
} else {
  console.log(numero + " não é um número primo.");
  }