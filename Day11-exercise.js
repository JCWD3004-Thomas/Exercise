// // Day 11 - Exercise
// // Tuesday, 10 September 2024


// // Question 1 - Function to convert Excel sheet to column to its corresponding column number
// // A -> 1, B -> 2, C -> 3, ..., Z -> 26, AA -> 27, AB -> 28
// // Input AB -> Output 28

// // "abcdeghijklmnopqrstuvwxyz"

// // for (let i = 0; i < alphabet.length; i++)
// // let char = alphabet[i];
// // let charValue = alphabet.indexof(char) + 1
// // result = result * 26 + charValue

// let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let results = 0;

// function alphabetToNumbers (alphabet) {
//     for (let i = 0; i < alphabet.length; i++)
//         let char = alphabet[i];
//         let charValue = alphabet.indexOf(char) + 1;
//         results = results * 26 + charValue;
// };

// alphabetToNumbers("AZY");
// console.log(results);







// // function convertExceltoColumn {
// // };

// // Question 2 - Find the exact column
// // Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// // Input nums = [2,2,1] -> output = 1 

// function findNonDuplicates {
//     for (let i = 0; i < numbers.length; i++) {

//     }
// }

// loop through the array and find the duplicates


// Question 3 - Anagram
// s and t 

// Question 4 - Staircase case


// Teacher Solution

// Question 1 - Convert Excel to Number
function excelColumnToNumber(columnTitle) {
    let result = 0;
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < columnTitle.length; i++) {
        let currentValue = alphabet.indexOf(columnTitle[i]) + 1;
        result = result * 26 + currentValue;
    }
    return result;
}
// console.log(excelColumnToNumber("A"));
// console.log(excelColumnToNumber("Z"));
// console.log(excelColumnToNumber("AA"));
// console.log(excelColumnToNumber("AB"));


// Question 2 = Find Non-Duplicate
function findUniqueElement(nums) {
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
        if (count === 1) {
            return nums[i];
        }
    }
};

// console.log(findUniqueElement([2,2,1]));
// console.log(findUniqueElement([4,1,2,1,2]));
// console.log(findUniqueElement([1]));

// Question 3 - Anagram
function checkAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let countS = {}
    let countT = {}

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        //menghitung karakter pada string S
        if (countS[charS]) {
            countS[charS]++;
        } else {
            countS[charS] = 1;
        }
        //menghitung karakter pada string T
        if (countT[charT]) {
            countT[charT]++;
        } else {
            countT[charT] = 1;
        }
    }
    //membandingkan jumlah kemunculan setiap karakter di kedua object
    for (let key in countS) {
        if(countS[key] !== countT[key]) {
            return false;
        }
    }
    return true;
};

const source1 = "anagram";
const target1 = "nagaram";

const source2 = "car";
const target2 = "rat";

// console.log(checkAnagram(source1, target1));
// console.log(checkAnagram(source2, target2));

// Question 4 - Staircase Case
// Similar to fibonacci
function climbStairs(n) {
    if (n === 1) {
        return 1;
    }
    else if (n === 2) {
        return 2;
    }

    let oneStepBefore = 2; // ways to reach n-1
    let twoStepBefore = 1; // ways to reach n-2
    let totalStep = 0;

    for(let i = 3; i <= n; i++) {
        totalStep = oneStepBefore + twoStepBefore;
        twoStepBefore = oneStepBefore;
        oneStepBefore = totalStep;
    }
    return totalStep;
}

// console.log(climbStairs(2));
// console.log(climbStairs(3));
// console.log(climbStairs(4));
// console.log(climbStairs(5));


