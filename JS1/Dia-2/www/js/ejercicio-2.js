/* EJERCICIO 2

Crea un bucle "for" que recorra los números del 0 al 100 saltando de 10 en 10.

Posteriormente crea otro bucle "for" que recorra los números del 100 al 0 de 25 en 25.

*/

'use strict';


for (let i = 0; i <= 100; i+=10) {
    console.log(i);
}

for (let j = 100; j >= 0; j-=25) {
    console.log(j);
}








/* 










// con "let i = 0" indicamos la variable y donde empieza (en este caso, en 0)
// con "i <= 100" indicamos que, mientras i sea menor o igual a 100, se cumpla el bucle
// con "i += 10" indicamos que se sume 10 a i (hasta que llega a 100)
// "i += 10" es lo mismo que "i = i + 10"
for (let i = 0; i <= 100; i += 10) {
    console.log(i);
}

console.log('---------------------'); // Esto es solo para hacer una separación entre los dos casos.


for (let i = 100; i >= 0; i -= 25) {
    console.log(i);
}


 */