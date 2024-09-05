// TOTAL DAYS EXERCISE
let totalDays = 400;
let years = (totalDays / 365) | 0;
let remainingDays = totalDays - years * 365;
let months = (remainingDays / 30) | 0;
let days = (remainingDays - months) * 30;

console.log(
    totalDays + " days --> " + 
    years + " years, " + 
    months + " months, " + 
    days + " days, " 
);

//Date difference

let date1 = new Date("2022-01-20")
let date2 = new Date("2022-01-22")

let differenceInDays = (date2 - date1) / (1000 * 60 * 60 * 24) | 0;

console.log("Day Difference --> ", differenceInDays);

//example Time
let currentDate = new Date();
console.log(String(currentDate));          //Make Date into string -> follow computer time format

