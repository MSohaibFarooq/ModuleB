const myName = ["Muhammad","Sohaib",["Farooq"]];
const [,,[value]] = myName;

console.log(value);

const data = {
    name: 'Sohaib',
    age: '21',
    profession: 'Front-ent developer'
};

console.log(Object.keys(data));
console.log(Object.values(data));