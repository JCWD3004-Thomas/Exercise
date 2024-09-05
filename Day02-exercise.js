
// // 1. Even or Odd
// let number = 20;

// if (number % 2 == 0) {
//     console.log(number + " is Even")
// } else{
//     console.log(number + " is Odd")
// };

// // // 2. Prime Numbers 
// let primeNumber = 7;
// let isPrime = true;

// if (primeNumber <= 1){
//     isPrime = false;
// } else {
//     for(let i = 2; i < primeNumber; i++) {
//         if (primeNumber % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// } if(isPrime) {
//     console.log(primeNumber + " is a Prime Number");
// } else {
//     console.log(primeNumber + " is not a Prime Number");
// }

// // 3. Sum Numbers 1 to N
// let num = 5;
// let sum = 0;

// for(i = 1; i <= num; i++){
//     sum += i;
//     if (i != num) {
//         process.stdout.write(i + " + ");
//     } else {
//         process.stdout.write(i + " = ");
//     }
// } console.log(sum);

// // 4. Factorial of Number
// let factorial = 6;
// let sumVar = 1;

// for(i = 1; i <= factorial; i++) {
//     sumVar *= i;
//     if(i != factorial) {
//         process.stdout.write(i + " * ");
//     } else {
//         process.stdout.write(i + " = ");
//     }
// } console.log(sumVar);

// // 5. N Fibonacci Numbers
// let Fibonacci = 15;
// let first = 0;
// let second = 1;

// console.log(first);
// console.log(second);

// for(let i = 3; i <= Fibonacci; i++) {
//     let nextNum = first + second;
//     console.log(nextNum);
//     first = second;
//     second = nextNum;
// };


// Solution --

// 1 Odd or Even
let num1 = 20;
if (num1 % 2 == 0){
    console.log(num1 + " is Even");
} else {
    console.log(num1 + " is Odd");
};

// 2 Solution Prime Number
let targetnumber = 20;
let isPrime1 = true;

if(targetnumber < 2) {
    isPrime1 = false;
} else {
    for (let i = 2; i < targetnumber; i++) {
        if (targetnumber % i == 0) {
            isPrime1 = false;
            break;
        }
    }
}
if(isPrime1) {
    console.log(targetnumber + " is a prime number");
} else {
    console.log(targetnumber + " is not a prime number");
};

// 3 Solution sum of num 1 to n
let n = 5;
let sumVar1 = 0;

for(let i = 0; i <= n; i++) {
    sumVar1 += i;
    console.log(sumVar1);
}
console.log(n + " sum = " + sumVar1);

// 4 Solution factorial
let inputFact = 4;
let sumFactorial = 1;

for (let i = inputFact; i > 0; i--){
    console.log(i);
    sumFactorial *= i;
    // factorial = factorial * i
}
console.log(inputFact + ' ! -> ' + sumFactorial);

// 5 Fibonacci Number -- penambahan bilangan sebelumnya
let fibonacciLimit = 15;
let a = 0, 
    b = 1;
let fibonacciSquare = [];

for(let i = 0; i <= fibonacciLimit; i++){
    fibonacciSquare.push(a);                //a pushed into fibonacci square
    let temp = a;                           //unshift
    a = b;
    b = temp + b;
}
console.log(fibonacciLimit + " -> " + fibonacciSquare.join(", "));
//console.log(fibonacciSquare.length);

