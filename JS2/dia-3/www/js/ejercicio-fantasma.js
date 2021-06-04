'use strict';

//modificar position con element.style.top y element.style.left
//controlar que no salga del viewport 
//modificar aleatoriamente el color de fondo de document.body

const boo = document.querySelector("div.boo");

const dimensions = boo.getBoundingClientRect();

const 