'use strict';

function loop() {

    for(let i = 0; i < 5; i++){
        console.log(`Estoy en la repetición ${i + 1} de "i". --> i = ${i}`);

        for (let k = 0; k < 5; k++){
            console.log(`Estoy en la repetición ${k + 1} de "k". --> k = ${k}`);
        }

        console.log('------------');
        console.log('------------');
    }

}

loop();