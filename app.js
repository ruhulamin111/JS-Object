// 1. literal object 
const student = {
    name: 'Rafu',
    age: 13,
    class: 7,
    locatio: 'Netrokona'
}

// 2. constructor object 
class Profile {
    constructor(name, age) {
        this.name = name,
            this.age = age

    }
}
const profile = new Profile('Rafee', 15);
console.log(profile);