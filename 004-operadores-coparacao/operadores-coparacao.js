// Operadores de comparação nos permitem comparar valores e nos retorna valores booleanos(true/false).

const n1 = 1;
const n2 = '1';

console.log("Operador '==' verifica se os valores são iguais(sem considerar o tipo): " + (n1 == n2)); // true
console.log("Operador '===' verifica se os valores são iguais(considerando o tipo): " + (n1 === n2)); // false

console.log('\n');

console.log("Operador '!=' verifica se os valores são diferentes(sem considerar o tipo): " + (n1 != n2)); // false
console.log("Operador '!==' verifica se os valores são diferentes(considerando o tipo): " + (n1 !== n2)); // true

console.log('\n');

console.log("Operador '>' verifica se o primeiro valor é maior que: " + (n1 > n2)); // false
console.log("Operador '>=' verifica se o primeiro valor é maior ou igual a: " + (n1 >= n2)); // true

console.log('\n');

console.log("Operador '<' verifica se o primeiro valor é maior que: " + (n1 < n2)); // false
console.log("Operador '<=' verifica se o primeiro valor é maior ou igual a: " + (n1 <= n2)); // true