//estructura avanzadas

//arrays_________________________

//métodos funcionales

//forEach

let numbers = [1,2,3,4,5];

numbers.forEach(element  => console.log(element))

//map

let double = numbers.map(element => element * 2)

console.log(double)

//filter

let filtered = numbers.filter(element => element % 2 === 0)
console.log(filtered)