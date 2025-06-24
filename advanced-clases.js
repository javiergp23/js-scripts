// Symbol

const Id = Symbol("Id");

class User{
    constructor(name){
        this.name = name;
        this[Id] = Math.random();
    }
}

const user = new User("Eduardo");
console.log(user.name)
console.log(user[Id])