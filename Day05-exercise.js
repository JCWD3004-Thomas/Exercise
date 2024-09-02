//Day 05 Exercise

// Question 1: Lowest, Highest & Average Value in the Array
// get lowest, highest & average

let sortArray = [12, 5, 23, 18, 4, 45, 32];
let average = sortArray.reduce((acc, curr) => acc + curr) / sortArray.length;
sortArray.sort(function(a, b) {return a - b})

// console.log("Lowest Value: " + sortArray[0] + ", " + "Highest Value: " + sortArray[6] + ", " + "Average Value: " + average.toFixed(2));

// Question 2: Array -> String by concatening in the array, separated by commas 
let array = ["Apple", "Banana", "Cherry", "Date"];
function arrayConcat(array) {
    const lastWord = array.pop();
    return array.join(", ") + ", and " + lastWord;
}
// console.log(arrayConcat(array))

// Question 3: Function -> return the second smallest number
let numbers = [5, 3, 1, 7, 2, 6]; //Answer: 2
function secondSmallest(numbers){
    numbers.sort(function(a, b) {return a - b});
    return numbers[1];
}
// console.log(secondSmallest(numbers));

// Question 4: Function -> Calculate each element in the same position from 2 array of integer
let arrayPos1 = [1, 2, 3];
let arrayPos2 = [3, 2, 1];
let sumArray = [];
function calculatePos(arrayPos1, arrayPos2) {
    for (let i = 0; i < arrayPos1.length; i++) {
        sumArray.push(arrayPos1[i] + arrayPos2[i]);
    } 
    return sumArray;
}
// console.log(calculatePos(arrayPos1, arrayPos2));

// Question 5: Function -> add an element to an array, Howver only add if it is not in the array
let newArray = [1, 2, 3, 4];      // newElement 4 = [1, 2, 3, 4]
let newElementNum = 7;            // newElement 7 = [1, 2, 3, 4, 7]
function newElement(newArray){
    for(let i = 0; i < newArray.length; i++){
        if(newArray[i] === newElementNum){
            console.log("Number " + newElementNum + " is already in array.");
            break;
        }
    }
    newArray.push(newElementNum)
    // console.log(newElementNum);      //check if newElementNum is already in array
} 
// newElement(newArray);
// console.log(newArray);

// Question 6: Function -> Return the sum of mixed data types in an array
let mixedArray1 = ["3", 1, "string", null, false, undefined, 2] // answer is 3
// filter out the mixed data types and add only the number from the array
function filterArray(mixedArray1) {
    let sum = 0;
    for(let i = 0; i < mixedArray1.length; i++){
        if(typeof mixedArray1[i] === 'number'){
            sum += mixedArray1[i];
        } 
    }
    return sum;
}
// console.log(filterArray(mixedArray1));

// Question 7: Function ->  integer into array that have a maximum size input of 5
// let integer = 5,10,24,3,6,7,8; -> function return [5, 10, 24, 3, 6]

function insertToArray(maxSize, ...numbers){     
    const results = []

    for (let i = 0; i < numbers.length; i++) {
        if (results.length < maxSize) {
            results.push(numbers[i]);
        } else {
        break;
        }
    }
    return results;
}
const maxSize = 5
// console.log(insertToArray(maxSize, 5, 10, 24, 3, 6, 7, 8))


// Question 8: Function Combine 2 Given Array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
function combineArrays(array1, array2) {
    return array1.concat(array2);
}
// console.log(combineArrays(array1, array2));

// Question 9: Function to Find Duplicate in an Array
// let duplicateArr = [1, 2, 2, 2, 3, 3, 4, 5, 5] //answer = [2, 3, 5]
//loop through duplicateArr and find the duplicate in the array and remove non duplicate
// bikin array kosong buat hasilnya, looping > push ke duplicate

let duplicateArr = [1, 2, 2, 2, 3, 3, 4, 5, 5];
let duplicateArr2 = [1, 2, 2, 2, 3, 3, 4, 5, 5];
let duplicateValues = [];

function duplicateInArray(duplicateArr, duplicateArr2){
    for(let i = 0; i < duplicateArr.length; i++){
        for(let j = 0; j < duplicateArr2.length; j++)
        if (duplicateArr[i] == duplicateArr2[j])
            duplicateValues.push(duplicateArr[i]);
    } return duplicateValues;
}
console.log(duplicateInArray(duplicateArr, duplicateArr2));

// Question 10: Function -> Find difference in 2 given arrays
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
let diff = [];

function differenceInArray(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++)
        if (arr1[i] == arr2[j])
            diff.push(arr1[i]);
    } return diff;
}
console.log(differenceInArray(arr1, arr2));
