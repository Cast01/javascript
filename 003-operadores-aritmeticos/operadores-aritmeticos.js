// Operadores aritméticos: Nos permitem fazer qualquer tipo de calculo.

let n1 = 2;
let n2 = 3;
let n3 = 4;
let n4 = 5;
let n5 = 10;
let n6 = 10;

console.log("Soma: " + (n1 + n2));

console.log("Subtração: " + (n1 - n2));

console.log("Divisão: " + (n1 / n2));

console.log(`Multiplicação: ${n1 * n2}`);

console.log(`Resto da divisão: ${n1 % n2}`);

console.log(`Exponenciação: ${4 ** 2}`);

console.log(`Operador aritmético composto: ${4 ** 2 + 5 % 2}`) // (16 + 1) = 17

console.log('\n')

// Retorna o valor de seu operando antes da adição.
console.log("Mostra o valor de n1 e incremente 1: " + (n1++));

console.log("Mostra o valor de n2 e decremente 1: " + (n2--));

// Retorna o valor de seu operando após a adição.
console.log("Incremente 1 ai mostra o valor de n3 : " + (++n3));

console.log("Decremente 1 ai mostra o valor de n4 : " + (--n4));

// Incrementa de 2 em 2.
console.log("Incrementando/Decrementado de 2 em 2: " + (n5+=2)); // n6 = n6 + 2

// Incrementa de 3 em 3.

console.log("Incrementando/Decrementado de 3 em 3: " + (n6-=3)); // n6 = n6 - 3

console.log("Total da exponenciação atribua a n6: " + (n6**=3)); // n6 = n6 ** 3

// ......