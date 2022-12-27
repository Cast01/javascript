/**
 * Operadores lógicos são utilizados tipicamente com valores booleanos (lógicos); neste caso, retornam um valor booleano. Entretanto, os operadores && e || na  verdade retornam o valor de um dos operandos especificados, de forma que se esses operadores forem utilizados com valores não-booleanos, eles possam retornar um valor não-booleano.
 * 
 * Exemplos de expressões que podem ser convertidas para falso são aquelas que são avaliados como null, 0, string vazia ("") ou undefined.
 */

// Operador lógico '&&' retorna o ultimo valor da comparação se todos antes dele forem true/existir e o mesmo for true/existir também.
// Operador lógico '&&' retorna o primeiro valor false que encontrar.
console.log("Operador '&&' só retorna true se ambas as comparaçoes forem true: " + (true && true));
console.log("Operador '&&' só retorna true se ambas as comparaçoes forem true: " + (true && false));
console.log("Operador '&&' só retorna true se ambas as comparaçoes forem true: " + (0 && true));
console.log("Operador '&&' só retorna true se ambas as comparaçoes forem true: " + (4 && 44 && 3));

console.log('\n');

// Operador lógico '||' retorna o primeiro valor que for true/existir.
// Operador lógico '||' retorna o ultimo valor da comparação se todos antes dele forem false/inexistir e o mesmo for false/inexistir também.
console.log("Operador '||' só retorna false se ambas as comparaçoes forem false: " + (false || null));
console.log("Operador '||' só retorna false se ambas as comparaçoes forem false: " + ("opa" || false));
console.log("Operador '||' só retorna false se ambas as comparaçoes forem false: " + (0 || true));
console.log("Operador '||' só retorna false se ambas as comparaçoes forem false: " + (4 || 44 || 3));

console.log('\n');

// Operador lógico hibrido.
console.log('' && 'asd' || 'eba'); // eba
console.log('' && 'teste' || 0 && true); // 0

console.log('\n');

console.log(!true); // false

console.log(!false); // true

console.log(!!!true) // false. Basicamente inverta o valor de true 3 vezes.