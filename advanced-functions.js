//higth order functions
const greet = function greet(name){
    console.log(`Hola, ${name}`)
}

greet('test')

function preocessGreeting(greetFunction, name){
    greetFunction(name)
}

function returnGreeting(name){
    return greet(name);
}

preocessGreeting(returnGreeting, 'testing')

//arrow functions

const arrow = () => 4 * 2;

// this lexico

const handler = {
    name:'Brais',
    greeting: function(){
        console.log(`hi, ${this.name}`)
    },
    arrowGreeting: () => console.log(`arrow, ${handler.name}`)
}

handler.greeting();
handler.arrowGreeting();

//IIFE inmediately invoked function expression

(function () {
    console.log('IIFE')
})();

(() => {
    console.log('IIFE with arrow')
})();

//Parametros rest (...)before

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number
    }
    return result;
}

console.log(sum(1,2,3,4,5))


// Spread operator (...)after
const numbers = [1,2,3,4,5];
function sumwithSpread(a, b, c){
    return a + b + c;
}

console.log(sumwithSpread(...numbers))


//Closures 

function makeArr(){
    let counter = 0;
    return function(){
        counter++;
        console.log(counter)
    }
}

const counter = makeArr();

counter();
counter();
counter();


// Recursividad

function factorial(n){
    if(n <= 1){
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(5))