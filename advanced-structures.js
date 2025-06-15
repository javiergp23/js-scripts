//estructura avanzadas

//arrays_________________________

//métodos funcionales____

//forEach

let numbers = [1,2,3,4,5];

numbers.forEach(element  => console.log(element))

//map

let double = numbers.map(element => element * 2)

console.log(double)

//filter

let filtered = numbers.filter(element => element % 2 === 0)
console.log(filtered)

//reduce

let sum = numbers.reduce((previous, current) => previous + current, 0)
console.log(sum)

// manipulación
// flat

let nestedArray = [1, [2, [3, [4]]]];
let flatArray = nestedArray.flat(1);
console.log(flatArray);

// flatMap

let flatMapArray = ["Hola mundo", "chao todo"]
let restulMapArraay = flatMapArray.flatMap(element => element.split(" "))
console.log(restulMapArraay)

//ordenación
//Sort

let unsorted = ["b", "c", "a", "d"];
let sorted = unsorted.sort();
console.log(sorted);