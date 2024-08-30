//Day 04 Exercise

// Question 1: Create Function Triangle Pattern - to be fixed

// function trianglePattern (n) {


// Question 2: Funciion that can loop number of times according to input
// Will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz"
function loopNumber (n) {
    for (let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i);
        }
    }
}; 
loopNumber(30);

// Question 3: Create BMI Index
function createBmiIndex (weight, height){
    let bmiIndex = (weight / (height * height))
    if(bmiIndex < 18.5){
        return "Less Weight";    
    } else if (bmiIndex >= 18.5 && bmiIndex <= 24.9){
        return "Ideal";
    } else if (bmiIndex >= 25.0 && bmiIndex <= 29.9){
        return "Overweight";
    } else if (bmiIndex >= 30.0 && bmiIndex <= 39.9){
        return "Very Overweight"
    } else {
        return "Obesity";
    }
}
console.log(createBmiIndex(67.5, (180 / 100)));

// Question 4: Function remove all odd number and return Even number

let arrayVar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayEvenNum = [];
function selectEvenNumber (i){
    for (let index of i) {
        if (index % 2 == 0){
            arrayEvenNum.push(index);
        }
    } 
    return arrayEvenNum;
} console.log(selectEvenNumber (arrayVar));

// Question 5: Function to split string and convert to array of words

let stringVar = "Hello World"
let arrayStringVar = [];
function splitString (str) {
    arrayStringVar = str.split(" ");
    return arrayStringVar;
} console.log(splitString (stringVar));