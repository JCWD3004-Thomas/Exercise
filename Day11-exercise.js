// Day 11 - Exercise
// Tuesday, 10 September 2024


// Question 1 - Function to convert Excel sheet to column to its corresponding column number
// A -> 1, B -> 2, C -> 3, ..., Z -> 26, AA -> 27, AB -> 28
// Input AB -> Output 28

// "abcdeghijklmnopqrstuvwxyz"

// for (let i = 0; i < alphabet.length; i++)
// let char = alphabet[i];
// let charValue = alphabet.indexof(char) + 1
// result = result * 26 + charValue

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let results = 0;

function alphabetToNumbers (alphabet) {
    for (let i = 0; i < alphabet.length; i++)
        let char = alphabet[i];
        let charValue = alphabet.indexOf(char) + 1;
        results = results * 26 + charValue;
};

alphabetToNumbers("AZY");
console.log(results);







// function convertExceltoColumn {
// };

// Question 2 - Find the exact column
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Input nums = [2,2,1] -> output = 1 

function findNonDuplicates {
    for (let i = 0; i < numbers.length; i++) {

    }
}

// loop through the array and find the duplicates
