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