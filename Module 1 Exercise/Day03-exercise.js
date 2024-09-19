//Day 03 - Exercise

// Question 1 : Display Multiplication Table of a Integer
let numInteger = 9;

for(let i = 0; i < numInteger; i++){
    console.log(numInteger + " x " + (i + 1) + " = " + numInteger * (i + 1))
};       // (i+1) = index + 1 to indicate +1 for next loop until condition met (< numinteger)

// Question 2 : Palindrome
let palindrome = "Madam";

let letter = palindrome.split("");          //Make String into Array
let reversed = letter.reverse();            //Make Array reversed to check
let reversedWord = reversed.join("");       //Change back to string

if(palindrome.toLowerCase == reversedWord.toLowerCase){     //.toLowerCase to make everything lowercase to easily check palindrome
    console.log (palindrome + " is a Palindrome");
} else{
    console.log(palindrome + " is Not a Palindrome");
};


// Question 3: cm to km
let cm = 100000;
console.log (cm * 0.00001 + " km");      //cm to km = *0.0001

// Question 4: number to currency - to be fixed
let number = 1000;
let n = 0;

// if(num < )


/*
1000 > Rp. 1.000,00 > 

1000 / 0.001
10000 / 0.0001
100000 / 0.00001


console.log ("Rp. " + n + " ,00")
*/

// Question 5:Remove Search String from String
let string = "Hello World";
let searchString = "ell";

string = string.replace(searchString, "");      //Using in-built string.replace to replace search string with "" (no value)

console.log(string);

// Question 6: Capitalize First Letter - to be fixed
// let noncapital = "hello world";                 //Hint: for loop on H and W

// let noncapital = "hello world";
// let capitalize = 

// noncapital.toUpperCase()



// Question 7: Swap Case for each Character from String - to be fixed
// e.g The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’


// Question 8: Find Largest of Two Given Integers
// Example : num1 = 42, num2 = 27 → 42
let num1 = 42;
let num2 = 27;
let largest;           //set a value to largest

if(num1 > num2){
    largest = num1;
} else {
    largest = num2;
} console.log("The larger number is = " + largest);


// Question 9: Conditional Statement to Sort Three Numbers - to be fixed
// Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42

let numVar1 = 42;
let numVar2 = 27;
let numVar3 = 18;

// if(numVar 1 > numVar2 && numVar3){
//     console.log
// }





// Question 10: 1 = input is string; 2 = input is a number; 3 = for other types

let input = "hello";
let string1 = "1";
let number1 = "2";
let other1 = "3";
let output1;

if(typeof input === "string"){
    console.log("value is = " + string1);
} else if (typeof input === "number"){
    console.log("value is = " + number1)
} else {
    console.log("value is = " + other1)
} console.log(output1);


// Question 11; Change every letter A to * from String - to be fixed
// Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`




//Solved 1,2,3,5,8,10
//To be fixed 4,6,7,9,11

//Teacher Solution//

//--Solution Question 3 = Check Palindrome
let targetStr = "madam"
let isPalindrome = true;            // Kalo true != kalo false == logicnya
let start = 0;                          
let end = targetStr.length - 1;     // Nentuin batas akhir index e.g 0,1,2,3,4 (- 1) = 4
                                    // -1 buat ngecek index terakhir
while (start < end){                            // [i] only index [start]/[end]  
    if(targetStr[start] !== targetStr[end]){    // m !== (negation/tidak sama dengan) m
        isPalindrome = false;                   // check if palindrome true/false
        break;
    }
    start++;                        //for the looping start ++ end--
    end--;                          //checks m, checks a, d, etc...
}
console.log(isPalindrome ? "Palindrome" : "Not a palindrome");


//--Solution Question 4 = Convert Number to Currency
let targetNumber = 1000;
let convertedtoRupiah = "Rp. " + (targetNumber / 1000).toFixed(3).replace(".",",") + ",00";
console.log(convertedtoRupiah);

//--Solution Question 6 = Capitalize First Word

let targetCapitalize = "hello world";
let resultCapitalize = "";

for(let i = 0; i < targetCapitalize.length; i++){
    if(i === 0 || targetCapitalize[i - 1] === " "){     // i or target
        resultCapitalize += targetCapitalize[i].toUpperCase();
    } else {
        resultCapitalize += targetCapitalize[i];
    }
}
console.log(resultCapitalize);

// if i === 0 or target capitalize [i-1]=== blank " "
// kalau bukan first index i === 0 atau target cap lanjut ke else
// pas sampai next word, targetCapitalize condition triggered which give space " ",
// terus lanjut next loop World ke trigger condition i = 0

//-- Solution Question 7 = convert uppercase to lowercase, lowercase to uppercase

// let targetConvert = "The QuiCk BrOwN Fox";
// let result = "";

// for(let i = 0; i < targetConvert.length; i++){
//     if(targetConvert[i] >= "a" && targetConvert[i] <= "z"){
//         result += targetConvert[i].toUpperCase();
//     } else if(targetConvert[i] >= "A" && targetConvert[i] <= "Z"){
//         result += targetConvert[i].toLowerCase();
//     } else(
//         result += targetConvert[i]);
// }
// console.log(result);

// if = this staetement search lowercase a until lowercase z and turn them to uppercase
// else if = this statement search uppercase A and uppercase Z and turn them to lowercase
// if elif else = have to include all block statement

