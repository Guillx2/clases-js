'use strict';

let correctAnswer = false;

while (!correctAnswer) {
    const userAnswer = prompt ('¿De qué color es el caballo blanco de Santiago?');

    if (userAnswer === 'blanco') {
        correctAnswer = true; 
    } else {
        alert('Va a ser que no. Vuelve a intentarlo.')
    }
}