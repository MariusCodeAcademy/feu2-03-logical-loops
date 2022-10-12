'use strict';
console.log('car.js');

/*
Sukurk variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui. Sukurk if-else (arba switch), kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam.
VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
BMW group priklauso: BMW, Mini, Rolls-Royce.
*/

let car = 'BMW11';

if (
  car === 'VW' ||
  car === 'Audi' ||
  car === 'Bentley' ||
  car === 'Bugatti' ||
  car === 'Lamborghini' ||
  car === 'Porsche'
) {
  console.log('VW group priklauso');
} else if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce') {
  console.log('BMW group priklauso');
} else {
  console.log('Nepriklauso nei vienam');
}
