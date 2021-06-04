'use strict';

let fruits = ['manzana', 'pera', 'plátano', 'pera', 'naranja']; 

fruits.length; // 5

fruits.indexOf('pera'); // 1 

fruits.indexOf('uva'); // -1 

fruits.lastIndexOf('pera'); // 3 

fruits.lastIndexOf('uva'); // -1

// Este método devuelve la nueva longitud del array. Puedes
// comprobarlo haciendo un console.log().
fruits.push('uva'); // ['manzana', 'pera', 'plátano', 'pera', 'naranja', 'uva'];

// Elimina y devuelve el último elemento del array.
const lastElement = fruits.pop(); // "uva"

// Este método devuelve la nueva longitud del array. Puedes
// comprobarlo haciendo un console.log().
fruits.unshift('uva'); // ['uva', 'manzana', 'pera', 'plátano', 'pera', 'naranja']

const firstElement = fruits.shift(); // "uva"

fruits.reverse(); // ["naranja", "pera", "plátano", "pera", "manzana"]

const myFruit = ['m', 'a', 'n', 'z', 'a', 'n', 'a']; 

// Nos devuelve un nuevo string.
myFruit.join(''); // "manzana"

// Devuelve los elementos eliminados y elimina dichos elementos
// en el array original.
const deletedElements = fruits.splice(1, 2); // ["pera", "plátano"]

// Devuelve un array vacío porque no estamos eliminando nada,
// estamos introduciendo dos nuevos elementos en la posición 1.
fruits.splice(1, 0, 'limón', 'cereza')

const nums_1 = [1, 2, 3];

const nums_2 = [...nums_1, 4, 5, 6];

console.log(nums_2);
