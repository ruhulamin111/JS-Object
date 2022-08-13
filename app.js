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

// object property method 
const details = {
    designation: 'Jr developer',
    skills: {
        javascript: 'midlevel',
        react: 'mid level',
        nodejs: 'mid level'
    },
    experience: 2,
    office: 'Dhaka',
    areacode: 1216
}

const keys = Object.keys(details);
const value = Object.values(details);
const entries = Object.entries(details);


console.log(entries);
