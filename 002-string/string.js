// MDN javascript String: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String
// Javascript conceitos básicos:  https://www.youtube.com/watch?v=vrSEt5J4q2Y&list=PLbA-jMwv0cuWbas947cygrzfzHIc7esmp

// String: tudo que estiver dentro de aspas(duplas/simples) será visto como uma string e o que seria uma string, basicamente uma string é uma sequencia de caracteres(letras, simbolos e até números). Se colocarmos numeros entre aspas esses numeros serão vistos como uma string(letra, caractere).

console.log('\n');

const myName = "Gabriel Castilho Floriano";

console.log("Valor de myName: " + myName);

console.log("typeof -> Tipo de myName: " + typeof myName);

console.log('\n');

// Juntar variáveis com strings:
    console.log("Concatenação de string e valores:");

console.log('\n');

    console.log("Olhar no código. ")

    // TemplateString:
    const idade = 22;
    console.log(`Meu nome é ${myName} e tenho ${idade} anos. Usando TemplateString. (acento Crase)`);

    // Aspas:
    console.log('Meu nome é ' + myName + ' e tenho ' + idade + ' anos. Usando Aspas. ("" ou (aspas simples))');

console.log('\n');

    console.log("Mostrar as aspas dentro de uma string:");
    console.log('"Gabriel"');
    console.log("'Gabriel'");

console.log('\n');

    // Quebrar linha:
    console.log(`Quebrar linha dentro de uma string: ${"\\n"}`)

console.log('\n');

// Exemplo de alguns métodos de string:

console.log("const myName = 'Gabriel Castilho Floriano';");

console.log("\n");

console.log("1 - charAt(number): string -> Caractere que está na posição informada:" + myName.charAt(0));

console.log("\n");
// Fazem a mesma coisa, mas o retorno é diferente

console.log("Fazem a mesma coisa, mas o retorno é diferente.");

console.log("2 - charCodeAt(number): number -> Código unicode do caractere na posição informada se não existir = NaN: " + myName.charCodeAt(50));

console.log("3 - codePointAt(numver): number | undefined -> Código unicode do caractere na posição informada se não existir = undefined: " + myName.codePointAt(50));

console.log("\n");

// =================================================

console.log("4 - concat('','','',...): string -> Juntar strings: " + myName.concat("   AAAAA", "      BBBBB"));

// Sem o segundo parametro 
console.log("5 - endsWith('', number?): boolean -> Verifica se a string que foi passada é a ultima parte da mesma. O segundo parametro verifica se a string\n passada termina na posição informada(Começe a contar apartir do 1): " + myName.endsWith("ri", 22));