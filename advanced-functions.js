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