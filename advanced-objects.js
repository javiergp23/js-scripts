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

//Singleton

class Session{
    constructor(name){
        if(Session.instance){
            return Session.instance;
        }
        Session.instance = this;
        this.name = name;
    }
}

const session1 = new Session("Eduardo");
const session2 = new Session();

console.log(session1)
console.log(session2)