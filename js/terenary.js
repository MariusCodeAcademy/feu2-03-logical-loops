'use strict';
console.log('terenary.js');

let sentence = '';
let name = 'Mike';
let town = 'Kaunas';
let isStudent = true;
/*  
sukurti kintamji isStudent (boolean), sukurti kintamaji Name - irasom varda. sukurti town ir irasysim miesta. 

norim sugeneruoti sakini kintamajame sentence. 
<vardas> gyvena <miestas> ir studijuoja/ ir dirba
James gyvena London ir studijuoja
Mike gyvena Kaunas ir dirba
*/

let dirbaArStudijuoja;

if (isStudent === true) {
  dirbaArStudijuoja = 'studijuoja';
} else {
  dirbaArStudijuoja = 'dirba';
}

sentence = `${name} gyvena ${town} ir ${dirbaArStudijuoja}`;

console.log(sentence);

if (isStudent === true) {
  // true
} else {
  // false
}

// terenary

// isStudent === true ? /* true */ : /* false */;
