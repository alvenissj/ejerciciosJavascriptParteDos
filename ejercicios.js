// Dado un entero positivo n (1 ≤ n ≤ 3999), implemente una función que convierta el número a su representación equivalente en números romanos.
// La solución debe cumplir los siguientes requisitos:

// 1.- Debe ser eficiente en tiempo y memoria, evitando operaciones innecesarias.
// 2.- Debe ser escalable: la lógica debe ser flexible para ajustar o extender nuevos valores romanos si la tabla cambia en el futuro.
// 3.- El código debe ser robusto, validando tipos de entradas.

// Debe estar escrito con buenas prácticas de ingeniería, evitando mutaciones innecesarias, minimizando complejidad y asegurando legibilidad.

// const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// const romans = [
//   "M",
//   "CM",
//   "D",
//   "CD",
//   "C",
//   "XC",
//   "L",
//   "XL",
//   "X",
//   "IX",
//   "V",
//   "IV",
//   "I",
// ];

// function integerToRoman(arrValues, arrRomans, target) {
//   if (!Array.isArray(arrValues) || !Array.isArray(arrRomans)) {
//     throw new TypeError(
//       `Los dos primero argumentos de la función deben ser dos arreglos...`
//     );
//   }

//   if (arrValues.length !== arrRomans.length) {
//     throw new Error(`Ambos arreglos deben tener el mismo tamaño.`);
//   }

//   if (!Number.isInteger(target) || target < 1 || target > 3999) {
//     throw new RangeError(
//       `El argumento target DEBE ser un entero entre 1 y 3999. Se recibió: "${target}"`
//     );
//   }

//   let results = "";
//   let numero = target;
//   let n = arrValues.length;
//   for (let i = 0; i < n; i++) {
//     let currentValue = arrValues[i];
//     let currentRomano = arrRomans[i];
//     while (numero >= currentValue) {
//       results += currentRomano;
//       numero -= currentValue;
//     }
//     if (numero === 0) break;
//   }

//   return results;
// }

// try {
//   const print = integerToRoman(values, romans, 120);
//   console.log("El número romano es: ", print);
// } catch (err) {
//   console.error(err.message);
// }

// *********************************************

// Diseña e implementa una función eficiente que convierta un número entero en su representación en números romanos.
// La función debe recibir:

// 1.- Un objeto que represente una tabla de conversión donde cada clave es un símbolo romano y cada valor es su equivalente entero.
// 2.- Un número entero entre 1 y 3999.

// La función debe:
// 1.- Validar rigurosamente los tipos de entrada.
// 2.- Manejar símbolos especiales de forma greedy (ej. "CM", "IV").
// 3.- Garantizar que la conversión cumpla con el sistema de numeración romano estándar.

// Mantener O(k) complejidad, donde k es la cantidad de símbolos romanos definidos.

// const tablaRomanos = {
//   M: 1000,
//   CM: 900,
//   D: 500,
//   CD: 400,
//   C: 100,
//   XC: 90,
//   L: 50,
//   XL: 40,
//   X: 10,
//   IX: 9,
//   V: 5,
//   IV: 4,
//   I: 1,
// };

// function integerToRomans(map, target) {
//   if (
//     typeof map !== "object" ||
//     map === null ||
//     Object.keys(map).length === 0 ||
//     Array.isArray(map)
//   ) {
//     throw new TypeError(
//       `El primer argumento de la función DEBE ser un objeto no vacío válido y no un arreglo. Se recibió: ${JSON.stringify(
//         map,
//       )}`,
//     );
//   }
//   if (!Number.isInteger(target) || target < 1 || target > 3999) {
//     throw new RangeError(
//       `El segundo argumento de la función DEBE ser un entero entre 1 y 3999. Se recibió: ${target}`,
//     );
//   }

//   const entries = Object.entries(map);
//   let results = "";
//   for (let [romano, value] of entries) {
//     while(target >= value) {
//       results += romano;
//       target -= value;
//     }
//   }

//   return results;

// }

// try {
//   const print = integerToRomans(tablaRomanos, 122);
//   console.log("El número romano es: ", print);
// } catch (err) {
//   console.error(err.message);
// }

//

//***********************************************

// Diseña e implementa una función eficiente que convierta un número romano en su representación en números enteros positivos.
// const tablaRomanos = {
//   M: 1000,
//   CM: 900,
//   D: 500,
//   CD: 400,
//   C: 100,
//   XC: 90,
//   L: 50,
//   XL: 40,
//   X: 10,
//   IX: 9,
//   V: 5,
//   IV: 4,
//   I: 1,
// };
// function romanoToInteger(map, caracteres) {
//   const upperRomano = caracteres.toUpperCase();
//   const n = upperRomano.length;
//   let results = 0;

//   for (let i = 0; i < n; i++) {
//     if (i === n - 1 || map[upperRomano[i + 1]] <= map[upperRomano[i]]) {
//       results += map[upperRomano[i]];
//     } else {
//       results -= map[upperRomano[i]]; // -10
//     }
//   }

//   return results;
// }

// const print = romanoToInteger(tablaRomanos, "MMMDCCCLXXXVIII");
// console.log(print); // 3888

//***********************************************
// Desarrollar una función llamada showNumberPrime que reciba como parámetro un número entero positivo (target) y determine si dicho número es primo o no.
// La función debe contar cuántos divisores exactos tiene el número y, si únicamente es divisible entre 1 y él mismo (es decir, tiene exactamente dos divisores), deberá retornar un mensaje indicando que el número es primo. En caso contrario, deberá retornar un mensaje indicando que el número no es primo.
// Finalmente, se debe mostrar el resultado en consola utilizando

// function showNumberPrime(target) {
//   let contador = 0;
//   const divisible = (numero, iteration) => !(numero % iteration);
//   for (let i = 1; i <= target; i++) {
//     if (divisible(target, i)) contador++;
//   }
//   return contador === 2
//     ? `El número: "${target}" es primo`
//     : `El número: "${target}" no es primo`;
// }
// const print = showNumberPrime(37);
// console.log(print);

// **********************************************

// Implementar en JavaScript una solución que, dado un número entero positivo target, evalúe todos los números comprendidos entre 2 y target para determinar si son números primos.
// La solución debe incluir una función de validación optimizada que verifique si es primo cada número y un procedimiento principal que recorra el rango, almacene los resultados en un arreglo y los muestre en consola

// function findNumbersPrime(n) {
//   if (n <= 1) return false;
//   if (n === 2) return true;
//   if (n % 2 === 0) return false;

//   for (let i = 3; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }
// function printNumberPrime(target) {
//   let results = [];
//   for (let i = 2; i <= target; i++) {
//     const resultado = findNumbersPrime(i)
//       ? `El número ${i} es primo`
//       : `El número ${i} no es primo`;
//     results.push(resultado);
//   }
//   return results;
// }
// const print = printNumberPrime(100);
//       print.forEach((value) => console.log(value))

// **********************************************

// Suma de dos números: Dado un arreglo de números enteros, se debe retornar los indices de los dos números de los cuales al sumarlos nos de como resultado el número buscado "target". (SOLUCIÓN COMPLEJA)
// ejemplo: Input: nums = [3,2,4,3]  |  target= 6
//         Output: [[0,3],[1,2]]

// const arrayNumeros = [22, 11, 7, 15, 8, 22, 18];
// function findPosNumbers(arrValues, target) {
//   let indiceValue = new Map(); // { 22 --> [0, 5], 11 --> [1], 7 --> [2], 15 --> [3], 8 --> [4] }
//   let n = arrValues.length; // 7
//   let results = [];

//   for (let i = 0; i < n; i++) {
//     let currentValue = arrValues[i]; 
//     let diffValues = target - currentValue; 
//     if (indiceValue.has(diffValues)) {
//       let indicePrevios = indiceValue.get(diffValues); 
//       for (let j of indicePrevios) {
//         results.push([j, i]); //[ [0, 1],  [1, 5], [3, 6] ]
//       }
//     }

//     if (!indiceValue.has(currentValue)) {
//       indiceValue.set(currentValue, []);
//     }

//     indiceValue.get(currentValue).push(i);
//   }

//   return results;
// }

// const print = findPosNumbers(arrayNumeros, 33);
// console.log(print);

// *******************************************

// Suma de dos números: Dado un arreglo de números enteros, se debe retornar el indice de los dos números de los cuales al sumarlos nos de como resultado el número buscado "target". (SOLUCIÓN SIMPLE)
// ejemplo: Input: nums = [3,2,4,3]  |  target= 6
//         Output: [[0,3],[1,2]]

// const arrayNumeros = [22, 11, 7, 15, 8, 22, 18];
// function findPosNumbers(arrValues, target) {
//   let indiceValues = new Map();
//   let n = arrValues.length;

//   for (let i = 0; i < n; i++) {
//     let currentValues = arrValues[i];
//     let diffValues = target - currentValues;
//     if (indiceValues.has(diffValues)) {
//       return [indiceValues.get(diffValues), i];
//     }
//     indiceValues.set(currentValues, i);
//   }
//   return null;
// }

// const print = findPosNumbers(arrayNumeros, 33);
// console.log(print);

// ************************************************************

// Dada una palabra, buscarla en una frase y devolver cuántas veces aparece. La frase y la palabra DEBEN ser parametros de una función. (SOLUCIÓN SIMPLE Y LARGA)

// const PUNCTUATION_REGEX = /[^\w\s]/g;

// const normalize = (str) => str.toLowerCase().replace(PUNCTUATION_REGEX, "");

// function searchWord(phrase, word) {
//   const cleanWord = normalize(word);
//   const tokens = normalize(phrase).split(/\s+/);
//   const count = tokens.filter((token) => token === cleanWord).length;

//   return { word: cleanWord, found: count > 0, count: count };
// }

// function formatResults({ word, found, count }) {
//   return found
//     ? `La palabra: "${word}" se encuentra: ${count} ve${count !== 1 ? "ces" : "z"}`
//     : `La palabra: "${word}" no se encuentra en la frase`;
// }

// const results = searchWord(
//   "hola- hola! HoLa. HOLa hoLA tal HOLA- como estas jajaja que tal tal",
//   "asdfrdsf!-",
// );

// console.log(results);
// console.log(formatResults(results))


// *******************************************

// A través de una función que recibe 2 parámetros, realizar una multiplicación sin usar el signo de multiplicar. (SOLUCIÓN SIMPLE)

// function multiply(a, b) {
//   const positive = Math.abs(b) === b;
//   let n = Math.abs(b);
//   let result = 0;

//   for (let i = 0; i < n; i++) {
//     // result = positive ? result + a : result - a;
//     results += positive ? a : -a;
//   }

//   return result;
// }

// const print = multiply(4, -2);
// console.log(print);

// ****************************************

// A través de una función que recibe 2 parámetros, realizar una multiplicación sin usar el signo de multiplicar. (SOLUCIÓN OPTIMIZADA)

// function multiply(a, b) {
//   const negative = a < 0 !== b < 0;
//   const times = Math.abs(b); // número de iterations
//   const value = Math.abs(a);
//   let result = 0;

//   for (let i = 0; i < times; i++) {
//     result += value;
//   }

//   return negative ? -result : result;
// }

// const print = multiply(-4, 2);
// console.log(print);

// **********************************************

// A través de una función que recibe 2 parámetros, realizar una multiplicación sin usar el signo de multiplicar. (SOLUCIÓN OPTIMIZADA DIFERENTE)

// function multiply(a, b) {
//   const times = Math.abs(b);
//   const sign = b > 0 ? 1 : -1;
//   let results = 0;

//   for (let i = 0; i < times; i++) {
//     results += a * sign;
//   }

//   return results;
// }

// const print = multiply(-2, -4);
// console.log(print);

// **********************************************

// Iterando un array de números SÓLO UNA VEZ, se debe limpiar del array aquellos valores de UNDEFINED, FALSE, NULL, CERO e imprimir ÚNICAMENTE los números.

// const values = [1, 2, 5, undefined, "Alvenis", false, 3, null, 0, 4];

// function cleanArray(arrValues) {
//   return arrValues.reduce((acc, ele) => {
//     if (typeof ele === "number" && ele !== 0) {
//       acc.push(ele);
//     }
//     return acc;
//   }, []);
// }

// const print = cleanArray(values);
// console.log(print);

// ******************************************

// Dado un array con valores de cualquier tipo, eliminar todos los valores falsy (false, 0, "", null, undefined, NaN) en una sola iteración y retornar los valores truthy.”

// const values = [1, 2, 5, "Alvenis", undefined, false, 3, null, 0, 4];

// function cleanArray(arrValues) {
//   return arrValues.filter(Boolean);
// }

// const print = cleanArray(values);
// console.log(print);

// **********************************************

// Dado un array de números; hacer una función que imprima el valor más grande; pero, iterando el arreglo sólo una vez.

// const isArray = [500, -1500, 35420, 4500, 1, 5455];

// function biggerNumber(value) {
//   if (value.length === 0 || !Array.isArray(value)) {
//     throw new TypeError("Array cannot be Empty");
//   }
//   return value.reduce((acc, ele) => (acc > ele ? acc : ele), value[0]);
// }

// try {
//   const print = biggerNumber(isArray);
//   console.log(print);
// } catch (err) {
//   console.error(err.message);
// }

// **********************************************

// Dado un array de elementos (ciudades); hacer una función que se encargue de imprimir las 5 ciudades que más se repiten.

// const citiesList = [
//   "nashville",
//   "nashville",
//   "los angeles",
//   "nashville",
//   "memphis",
//   "barcelona",
//   "los angeles",
//   "sevilla",
//   "madrid",
//   "canary islands",
//   "barcelona",
//   "madrid",
//   "nashville",
//   "barcelona",
//   "london",
//   "berlin",
//   "madrid",
//   "nashville",
//   "london",
//   "madrid",
// ];

// function citiesMostOccur(arrCities) {
// if (!Array.isArray(arrCities) || arrCities.length === 0) {
//   throw new TypeError(
//     "El parámetro de la función DEBE ser un array no vacío.",
//   );
// }

// const showCities = arrCities.reduce((acc, ele) => {
//   acc[ele] ??= 0;
//   acc[ele] += 1;
//   return acc;
// }, {});

// return Object.keys(showCities)
//   .map((city) => ({ ciudad: city, times: showCities[city] }))
//   .sort((a, b) => b.times - a.times)
//   .slice(0, 5)
//   .map((ciudad) => ciudad.ciudad);
// }

// try {
//   const print = citiesMostOccur(citiesList);
//   console.log(print);
// } catch (err) {
//   console.error(err.message);
// }

// **********************************************

// Dado un array de elementos (ciudades); hacer una función que se encargue de imprimir las 5 ciudades que más se repiten. (OTRA SOLUCIÓN)

// const citiesList = [
//   "nashville",
//   "nashville",
//   "los angeles",
//   "nashville",
//   "memphis",
//   "barcelona",
//   "los angeles",
//   "sevilla",
//   "madrid",
//   "canary islands",
//   "barcelona",
//   "madrid",
//   "nashville",
//   "barcelona",
//   "london",
//   "berlin",
//   "madrid",
//   "nashville",
//   "london",
//   "madrid",
// ];

// function citiesMostOccur(arrCities, limit = 5) {
//   if (!Array.isArray(arrCities) || arrCities.length === 0) {
//     throw new Error("El parámetro de la función DEBE ser un arreglo no vacio");
//   }

//   // CREAMOS UN OBJETO
//   const counts = Object.create(null);

//   for (let city of arrCities) {
//     counts[city] = (counts[city] ?? 0) + 1;
//   }

//   return Object.entries(counts)
//     .sort(([, a], [, b]) => b - a)
//     .slice(0, limit)
//     .map(([city]) => city);
// }

// try {
//   const print = citiesMostOccur(citiesList);
//   console.log(print);
// } catch (err) {
//   console.error(err.message);
// }

// **********************************************

// Hacer una función que reciba un STRING y pueda identificar si la frase es un palindromo.

// function isPalindromo(phrase) {
//   const cleanPhrase = phrase.replace(/[^a-z]/gi, "").toLowerCase();

//   const splittedCleanPhrase = cleanPhrase.split("").reverse().join("");

//   return cleanPhrase === splittedCleanPhrase;
// }

// // PRESENTACIÓN SEPARADA DE LA LÓGICA
// const phrase = "Anita! lAva la tina";
// const print = isPalindromo(phrase);
// console.log(
//   print
//     ? `La frase: "${phrase}" es un palíndromo`
//     : `La frase: "${phrase}" no es un palíndromo `,
// );

// **********************************************
// Crear una función que aplane un arreglo en un nivel, es decir, se tiene: arr = [ 1, 2, [3, 4], [ 5, [] ], 6 ] y debe devolver arr = [ 1, 2, 3, 4, 5, [], 6 ]

// const values = [1, 2, [3, 4], [5, []], 6];

// function flatten(arrValues) {
//   if (!Array.isArray(arrValues)) {
//     throw new Error("Expected an Array");
//   }

//   return arrValues.reduce((acc, ele) => acc.concat(ele), []);
// }

// try {
//   const print = flatten(values);
//   console.log(print);
// } catch (err) {
//   console.error(err.message);
// }

// **********************************************

// Crear una función que aplane TODO en un arreglo, es decir, se tiene: arr = [ 1, 2, [3, 4], [ 5, [] ], 6 ] y debe devolver arr = [ 1, 2, 3, 4, 5, 6 ]

// const values = [1, 2, [3, 4], [5, []], 6];

// function flattenCompleted(arrValues) {
//   let result = [];
//   for (let value of arrValues) {
//     if (Array.isArray(value)) {
//       result.push(...flattenCompleted(value));
//     } else {
//       result.push(value);
//     }
//   }
//   return result;
// }

// const print = flattenCompleted(values);
// console.log(print);

// *********************************************

// Crear una función a la cual se le pase un array de números y un número que será el resultado de la suma de dos valores del array, ejemplo: sumarDos([ 4, 5, 9, 1 ], 10) -- devuelve [ 9, 1 ] MOSTRAR TODAS LAS COINCIDENCIAS

// const values = [4, 5, 9, 1, 5, 6];

// function sumTwoNumbers(arrValues, target) {
//   const map = new Map();
//   const n = arrValues.length;
//   let results = [];

//   for (let i = 0; i < n; i++) {
//     let currentValue = arrValues[i]; // 1
//     let diffValue = target - currentValue; // 9
//     if (map.has(diffValue)) {
//       let valuePrevious = map.get(diffValue);
//       for (let j of valuePrevious) {
//         results.push([arrValues[j], arrValues[i]]); // [ [2, 3], [1, 4], [0, 5]]
//       }
//     }

//     if (!map.has(currentValue)) {
//       map.set(currentValue, []); // [ 4 --> [0], 5 --> [1], 9 --> [2] ]
//     }
//     map.get(currentValue).push(i);
//   }

//   return results;
// }

// const print = sumTwoNumbers(values, 10);
// console.log(print);

// *********************************************

// Dado un número, mostrar una serie de fibonacci. La serie de fibonacci es un orden de números donde cada número es la suma de los dos números anteriores.

// ejemplo: El resultado de fibonacci (8): es 21
//          La serie fibonacci es: 0,1,1,2,3,5,8,13,21

// function fibonacci(value) {
//   if (!Number.isInteger(value) || value <= 0) {
//     throw new Error(
//       "El parámetro de la función DEBE ser un entero positivo mayor a cero.",
//     );
//   }
//   let serie = [0, 1];

//   for (let i = 2; i <= value; i++) {
//     serie.push(serie[i - 2] + serie[i - 1]);
//   }

//   return `La serie fibonacci es: ${serie} y el resultado de fibonacci(${value}): es ${serie[value]}`;
// }

// try {
//   const print = fibonacci(8);
//   console.log(print);
// } catch (err) {
//   console.error(err.message);
// }

// ********************************************
// CONTAR ELEMENTOS REPETIDOS EN UN ARRAY e imprimir en un array de objetos el número y, las veces que se repite...

// Primera forma, usando el método "forEach", "keys"

// const values = [7, 33, 10, 9, 8, 7, 2, 5, 5, 33, 33, 33, 33, 7];

// function elementRepeated(arrValues) {
//   let elements = {};
//   arrValues.forEach((num) => {
//     elements[num] ??= 0;
//     elements[num] += 1;
//   });

//   return Object.keys(elements)
//     .map((numero) => ({ numero: numero, times: elements[numero] }))
//     .sort((a, b) => b.times - a.times);
// }
// const print = elementRepeated(values);
// console.log(print);

// Segunda forma, usando el Objeto "Set()";(NO RECOMENDADA POR EL USO DEL FILTER DENTRO DE CADA ITERACIÓN USA MUCHOS RECURSOS)
// const values = [7, 33, 10, 9, 8, 7, 2, 5, 5, 33, 33, 33, 33, 7];

// function elementRepeated(arrValues) {
//   let map = new Set(arrValues);

//   return [...map].map((value) => ({
//     numero: value,
//     times: arrValues.filter((n) => n === value).length,
//   })).sort((a, b) => b.times - a.times)
// }

// const print = elementRepeated(values);
// console.log(print);

// Tercera forma, si recomendada.

// const values = [7, 33, 10, 9, 8, 7, 2, 5, 5, 33, 33, 33, 33, 7];

// function elementsRepeated(arrValues) {
//   let uniques = new Set(arrValues);
//   let countElements = Object.create(null);

//   for (let num of arrValues) {
//     countElements[num] = (countElements[num] ?? 0) + 1;
//   }

//   return [...uniques]
//     .map((value) => ({
//       numero: value,
//       times: countElements[value],
//     }))
//     .sort((a, b) => b.times - a.times);
// }

// const print = elementsRepeated(values);
// console.log(print);

// Cuarta forma, usando ÚNICAMENTE estructuras de control "A PIE, SIN MÉTODOS".

// const values = [7, 33, 10, 9, 8, 7, 2, 5, 5, 33, 33, 33, 33, 7];

// function elementsRepeated(arrValues) {
//   let results = [];

//   for (let num of arrValues) {
//     let newValue = true;
//     for (let numero of results) {
//       if (numero.numero === num) {
//         numero.times++;
//         newValue = false;
//       }
//     }
//     if (newValue) {
//       results[results.length] = {
//         numero: num,
//         times: 1,
//       };
//     }
//   }

//   return results.sort((a, b) => b.times - a.times);
// }

// const print = elementsRepeated(values);
// console.log(print);

// ********************************************

// Crear una funcion que reciba un STRING (cadena de caracteres), y limpie los espacios, dejando ÚNICAMENTE un espacio entre palabras; luego convierta el string en un ARRAY; Ejemplo:
// const strg = 'Hola    soy  Alvenis José';
// const strg = 'Hola soy Alvenis José' --> sin espacios...
// array = [ 'Hola', 'soy', 'Alvenis', 'José' ] --> convertido en array

// Primera forma usando métodos conocidos

// const caracteres = "Hola    soy  Alvenis José";

// function cleanSpaces(frase) {
//   const cleanFrase = frase.replace(/\s+/gi, " ").split(" ");

//   return cleanFrase;
// }

// const print = cleanSpaces(caracteres);
// console.log(print);

// Segunda forma a Pie con estructura de datos

// const caracteres = "Hola    soy  Alvenis José";

// function cleanSpaces(frase) {
//   let result = [];
//   let lyrics = ""; // Hola
//   for (let char of frase) {
//     if (char !== " ") {
//       lyrics += char;
//     } else if (lyrics.length > 0) {
//       result.push(lyrics);
//       lyrics = "";
//     }
//   }
//   if (lyrics.length > 0) {
//     result.push(lyrics);
//     lyrics = "";
//   }

//   return result;
// }

// const print = cleanSpaces(caracteres);
// console.log(print);

// ********************************************

// Dada url: https://pokeapi.co/api/v2/pokemon/
// 1.- Crear una llamada a la Api, utilizando fetch(); con el objetivo de utilizar esos datos con cualquier librería o framework de Js. La función debe ser a prueba de errores, es decir, si es correcta debería de regresar los resultados, de lo contrario, debería de regresar un error.

// OBTENEMOS LOS DATOS DE LA API

// const getPokemon = async (n) => {
//   try {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`);
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.log("Upss Error getPokemon: ", err);
//   }
// };

// const showPokemon = async () => {
//   try {
//     let n = 4;
//     for (let i = 1; i <= n; i++) {
//       console.log("---------------------");
//       const pokemon = await getPokemon(i);
//       console.log("ID: ", pokemon.id);
//       console.log("Nombre: ", pokemon.name);
//       console.log("Altura: ", pokemon.height);
//       console.log("Peso: ", pokemon.weight);
//       console.log("Tipo de Pokemon: ");
//       pokemon.types.forEach((tipo) => {
//         console.log("--->", tipo.type.name);
//       });
//       console.log("Habilidades: ");
//       pokemon.abilities.forEach((habilidad) => {
//         console.log("--->", habilidad.ability.name);
//       });
//       console.log("\n");
//     }
//   } catch (err) {
//     console.error("Upss Error: ", err);
//   }
// };

// showPokemon();

// ********************************************

// Dada url: 'https://jsonplaceholder.typicode.com/todos/1'
// Crear una llamada a la Api usando memoization para optimizar el rendimiento de las peticiones, utilizando fetch(); con el objetivo de utilizar esos datos con cualquier librería o framework de Js. La función debe ser a prueba de errores, es decir, si es correcta debería de regresar los resultados, de lo contrario, debería de regresar un error.

// const memoization = (fn) => {
//   const cache = Object.create(null);

//   return async (arg) => {
//     if (!(arg in cache)) {
//       console.log(`Petición no cacheada: ${arg}`);
//       cache[arg] = await fn(arg);
//     } else {
//       console.log(`Respuesta obtenida desde caché: ${arg}`);
//     }

//     return cache[arg];
//   };
// };

// const getDatosApi = async (id) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${id}`,
//   );

//   if (!response.ok) {
//     throw new Error("Error en la petición HTTP");
//   }

//   return response.json();
// };

// Instanciamos la función que optimiza el rendimiento de cada petición realizada el servidor
// const request = memoization(getDatosApi);

// const showDatosApi = async () => {
//   const consulta1 = await request(5);
//   const consulta2 = await request(5);

//   console.log("Consulta Uno:", consulta1);
//   console.log("Consulta Dos:", consulta2);
// };

// showDatosApi();

// ********************************************

// Dado un array de enteros positivos, todos los elementos se repiten dos veces, excepto uno. Encuentra ese único elemento que no se repite.
// Ejemplo de uso: isArray = [ 2, 3, 4, 2, 3 ];
//                  output: 4

// const value = [2, 3, 4, 2, 3];

// function elementsNotRepeated(arrValue) {
//   if (!Array.isArray(arrValue)) {
//     throw new Error(
//       "El parámetro de la función DEBE ser un arreglo no vacío con enteros positivos",
//     );
//   }

//   let arrValores = [...arrValue];
//   let n = arrValores.length; // XOR
//   let unique = 0;
//   for (let i = 0; i < n; i++) {
//     unique ^= arrValores[i];
//   }
//   return unique;
// }

// try {
//   const print = elementsNotRepeated(value);
//   console.log(print);
// } catch (err) {
//   console.error("Error: ", err.message);
// }

// ********************************************

// Este algoritmo encuentra todos los subconjuntos de un conjunto dado.
// Ejemplo de uso

// const values = [1, 2, 3, 4];
// function findSubconjuntos(arrValues) {
//   let n = arrValues.length;
//   let results = [[]];

//   for (let i = 0; i < n; i++) {
//     let longResults = results.length;
//     for (let j = 0; j < longResults; j++) {
//       const subconjuntos = [...results[j], arrValues[i]];
//       results.push(subconjuntos);
//     }
//   }
//   return results;
// }
// const print = findSubconjuntos(values);
// console.log(print);

// Diseñar e implementar un gestor de descargas que simule la descarga concurrente de múltiples archivos, permitiendo registrar tareas asíncronas, ejecutar las descargas en bloque y gestionar el estado individual de cada archivo. La solución debe manejar correctamente escenarios de éxito y fallo sin interrumpir la ejecución global, garantizando encapsulación del estado, control del ciclo de vida de las tareas y una ejecución segura mediante promesas.

function createFileDownload() {
  let downloads = [];

  class FileDownload {
    constructor() {
      this.statusMap = Object.create(null);
    }

    simulatedFileDownload(fileName) {
      this.statusMap[fileName] = "File-In-Progress";
      return new Promise((resolve, reject) => {
        const time = Math.floor(Math.random() * 3000) + 1000;
        setTimeout(() => {
          const success = Math.random() > 0.2;
          if (success) {
            this.statusMap[fileName] = "File-Downloaded-Successfully";
            resolve(`Archivo: ${fileName} descargado exitosamente`);
          } else {
            this.statusMap[fileName] = "File-Failed-Download";
            reject(`Archivo: ${fileName} falló la descarga`);
          }
        }, time);
      });
    }

    addFileDownload(fileName) {
      const task = this.simulatedFileDownload(fileName);
      downloads.push(task);
    }

    async executedFileDownload() {
      try {
        const tasks = [...downloads];
        downloads = [];
        let task = await Promise.allSettled(tasks);
        console.table(this.statusMap);
        task.forEach((tarea) => {
          if (tarea.status === "fulfilled") {
            console.log("✔ ", tarea.value);
          } else {
            console.log("✖ ", tarea.reason);
          }
        });
      } catch (err) {
        console.error(err.message);
      }
    }
  }

  return new FileDownload();
}

const manager = createFileDownload();

// Archivos simulados
[
  "file1.zip",
  "file2.zip",
  "file3.pdf",
  "video1.mp4",
  "video2.mp4",
  "video3.mp4",
  "photo.png",
  "update.pkg",
].forEach((file) => manager.addFileDownload(file));

manager.executedFileDownload();
