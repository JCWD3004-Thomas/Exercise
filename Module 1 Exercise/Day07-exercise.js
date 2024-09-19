//Day 07 - Exercise

// Question 1 = Create a Function to check if two objects are equal
//input 1 = {2} & {1} = false
//input 2 = {"Hello"} & {1} = false
//input 3 = {1} & {1} = true

function comparing (x, y) {
    if (x === y)
    return true;
    else {
        return false;
    }
};

let x = {
    a: 1
}

let y = {
    a: 1
}

// console.log(comparing(x, y));

// Question 2 = Function -> to get the intersection of two objects
// Output: {a : 1}

let inputA = {
    a : 1,
    b : 2,
}

let inputB = {
    a : 1,
    c : 3,
}

function intersection (inputA, inputB) {
    let output = {};



}

// Question 5 = Function -> Factorial Number using Recursion
// Output: 5! = 5 x 4 x 3 x 2 x 1 = 120
function factorial(n){
    if(n === 0) {
        return {result: 1, steps: "1"}
    } else {
        return n * factorial (n - 1) ;
    }
} 

// console.log(factorial(5));


// Solution Practice:

//-- Question 1: check two objects are equal or not
function areObjectsEqual(obj1, obj2){
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);

    if(key1.length !== key2.length) {
        return false;

    } for (let key of key1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
console.log(areObjectsEqual({a : 2}, {a : 1}));
console.log(areObjectsEqual({a : "Hello"}, {a : 1}));
console.log(areObjectsEqual({a : 1}, {a : 1}));

//-- Question 2: Function -> Intersection of two objects
function getObjectIntersection(obj1, obj2) {
    const result = {}

    for(let key in obj1) {
        if(obj1[key] === obj2[key]) {
            result[key] = obj1[key]
        }
    }
    return result;
}
let obj1 = {a: 1, b: 2};
let obj2 = {a: 1, c: 3};        //yang di compare 2-2nya both A and 1
                                //if both a and 1 match = print 
console.log(getObjectIntersection(obj1, obj2));

// e.g use of let key in
let animal = {
    type: "mammal",
    colors: "brown",
    age: 3,
};

for (let key in animal) {
    console.log(key + " has a value : " + animal[key])    //type, colors, age
}
// key aja = properties OR object+key = isinya

//-- Question 3: Merge two arrays and remove duplicate
//Student Data Name & Email
function mergeStudentData (array1, array2) {
    let result = [];
//LOOPING ARRAY 1
    for (let i = 0; i < array1.length; i++) {
        let exists = false;
        for(let j = 0; j < result.length; j++) {
            if(array1[i].name === result[j].name && array1[i].email === result[j].email) {
                exists = true;
                break;
        }
    }
    if(!exists) {
        result.push(array1[i]);
    }
  }
//LOOPING ARRAY 2
  for (let i = 0; i < array2.length; i++) {
    let exists = false;
    for(let j = 0; j < result.length; j++) {
        if(array2[i].name === result[j].name && array2[i].email === result[j].email) {
            exists = true;
            break;
        }
    }
    if(!exists) {
        result.push(array2[i]);
    }
  }
  return result;
}

let array1 = [
    {name: "Student 1", email: "student1@gmail.com"}, 
    {name: "Student 2", email: "student2@gmail.com"}, 
    ]
let array2 = [
    {name: "Student 1", email: "student1@gmail.com"}, 
    {name: "Student 3", email: "student3@gmail.com"},
    ]

console.log(mergeStudentData(array1, array2));

//-- Question 4: Switch Property & Value
function switchPropertyandValue(array) {
    let result = [];

    for(let i = 0; i < array.length; i++) {
        const obj = array[i];
        const newObj = {};
        for(let key in obj) {
            newObj[obj[key]] = key;
        }
        result.push(newObj);
    }
    return result;
}
console.log(switchPropertyandValue([{ name: "David", age: 20}]));

//-- Question 5: Function -> Factorial Number using Recursion
function factorial(n){
    if(n === 0) {
        return 1;
    } else{
        return n * factorial (n - 1) ;
    }
} console.log(factorial(5));



