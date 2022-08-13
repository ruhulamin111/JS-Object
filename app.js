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

// 3. nested object 
const info = {
    name: 'Abu Bakar ciddik',
    age: 20,
    location: {
        village: 'sukhnagar',
        zilla: 'shantinagar',
        country: {
            continent: 'asia',
            area: 150000
        }

    }
}
console.log(info.location.country.continent);

