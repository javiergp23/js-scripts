// Clases 

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hola, soy: ${this.name}`)
    }    
}


const persona_1 = new Person("Eduardo", 30);
persona_1.greet()