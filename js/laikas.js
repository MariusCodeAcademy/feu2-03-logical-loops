'use strict';
console.log('laikas.js');

/*   
6 - 12 = rytas 
13 - 18 = diena
19 - 23 = vakaras
24 - 5 = naktis

 
*/

let laikas = 24;

if (laikas >= 6 && laikas <= 12) {
  console.log('labas rytas');
} else if (laikas > 12 && laikas < 19) {
  console.log('laba diena');
} else if (laikas > 18 && laikas < 24) {
  console.log('labas vakaras');
} else if ((laikas >= 0 && laikas < 6) || laikas === 24) {
  console.log('labanakt');
}

// sukuriam kintamaji,  jei jis yra neigiamas, arba daugiau uz 7 tai yra netinkamas
let num1 = 50;

if (num1 < 0 || num1 > 7) {
  console.log('skaicius netinkamas');
} else {
  console.log('skaicius tinkamas');
}
