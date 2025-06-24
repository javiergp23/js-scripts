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

let unsortedNum = [4,1,5,3,2]
console.log(unsortedNum.sort((a, b) => a - b))

//reverse 
console.log(sorted.reverse())

//Operaciones de busqueda

//includes
console.log(unsortedNum.includes(4))

//find
let arr2 = [2, 3, 4, 5, 6, 7]
console.log(arr2.find(element => element % 2 === 0))

//findIndex
let firstEvenIndex = arr2.findIndex(element => element % 2 === 0)
console.log(firstEvenIndex)

//Sets avanzados _______________________________________________________________________

const numbersArray = [1, 2, 3, 4, 5, 6, 6];
const numbersSet = [...new Set(numbersArray)]
console.log(numbersSet)
//Eliminacion de duplicados

const setA = new Set([1,2,3])
const setB = new Set([3, 4,5,6])
const union = new Set([...setA, ...setB])
console.log(union)

//Intersección
const nuevoSet = [...new Set(numbersArray)]
console.log(nuevoSet)

// - Iteración 

//Maps avanzados

let myMap = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
]);

myMap.forEach((value, key) => console.log(`${key}: ${value}`))