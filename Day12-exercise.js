// Day 12 - Exercise
// Wednesday 11 Sept 2024

// Question 1 - Return Majority Element
// input = nums [3,2,3]
// output = 3



// // Question 2 - Function Convert Roman to Numeral
// function romanToNumeral(n) {
// let romanNumber = {  
//     "I" : 1,
//     "V" : 5,
//     "X" : 10,
//     "L" : 50,
//     "C" : 100,
//     "D" : 500,
//     "M" : 1000,
// }
// let result = 0;
// for (let i = 0; i < n.length; i++) {
//     if (romanNumber [n[i]] < romanNumber[n[i + 1]])
//         result = result - romanNumber [n[i]]

//     else (result = result + romanNumber [n[i]]);
// }
// return result;
// };

// // console.log(romanToNumeral("III"));
// // console.log(romanToNumeral("LVII"));
// // console.log(romanToNumeral("MCMXCIV"));

// // Question 3 - Pascal Triangle




// // Question 4 - Check Stock Maximum Profit
// function maxProfit(prices) {
//     let result = 0;
//     for (let i = 0; i < prices.length; i++) {
//         for(let j = i; j < prices.length; j++) {
//             if (prices[j] - prices[i] > result) {
//                 result = prices[j] - prices[i];
//             }
//         }
//     }
//     return result;
// };

// let prices = [7, 1, 5, 3, 6, 4];
// let prices2 = [7, 6, 4, 3, 1];

// // console.log(maxProfit(prices));
// // console.log(maxProfit(prices2));


//Teacher Solution

// Question 1 - Majority Element
function majorityElement(nums) {
    let candidate = null;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
        }
        if (nums[i] === candidate) {
            count ++;
        } else {
            count --;
        }
    }
    return candidate;
}

// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));


// Question 2 - Roman to Integer
function romanToInt(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        // If the current number is smaller than the next one,
        // subtract it from the total to get the difference in value.
        if (i < s.length - 1 && romanMap[s[i]] < romanMap[s[i + 1]]) {
            total -= romanMap[s[i]];
        } else {
            total += romanMap[s[i]];
        }
    }
    return total;
}

// console.log(romanToInt("III"));
// console.log(romanToInt("MCMXCIV"));

// Question 3 - Pascal Triangle
function generate(numRows) {
    let pascalTriangle = [];
    for (let i = 0; i < numRows; i++) {
        let row = [];
        row.push(1);
        for (let j = 1; j < i; j++) {
            row.push(pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j]);
        }
        if (i > 0) {
            row.push(1);
        }
        pascalTriangle.push(row);
    }
    return pascalTriangle;
}

// console.log(generate(5));

// Question 4 - Maximize Profit
function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        else {
            const profit = prices[i] - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));