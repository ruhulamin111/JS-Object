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

Object.seal(details);
details.office = 'Gulsan';
Object.freeze(details);
details.areacode = 1212;
delete details.areacode;

// for of or in object 
const about = {
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
for (const prop in about) {
    // console.log(prop);
}
const property = Object.keys(about);
for (const prop of property) {
    // console.log(prop);
}
const pairs = Object.entries(about);
for (const prop of pairs) {
    // console.log(prop)
}
for (const [key, values] of Object.entries(about)) {
    // console.log(key, values)
}

// compare object and object work by reference 
const object1 = { a: 1, b: 2, c: 3, d: 4 };
const object2 = { a: 1, b: 2, c: 3 };
function compareObject(object1, object2) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
    }
    for (const prop in object1) {
        if (object1[prop] !== object2[prop]) {
            return false
        }
    }
    return true;
}
const result = compareObject(object1, object2);
console.log(result);
