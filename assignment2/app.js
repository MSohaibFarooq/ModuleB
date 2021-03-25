// QUESTION 1-----------------------------------------------------------------
let obj1 = {
    fname: "Sohaib"
}

let obj2 = {
    lname: "Farooq",
    obj3: {
        age: "21"
    }
}

let newObj = Object.assign({}, obj1, obj2);
newObj.obj3.age = "22";

console.log(newObj)
console.log(obj2)

// QUESTION 2-------------------------------------------------------------------
let C = 0;
const H = C == 0 ? null :
        V == r ? (g - b) / C :
            V == g ? (b - r) / C + 2 :
                (r - g) / C + 4;

console.log(H);