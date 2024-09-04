//Day 06 - Exercise


// Exercise 1 
// Create Function calculate Array of Student Data
// Name -> String, Email -> String, Age -> Date, Score -> Number

// Question 1 : Calculate Array of Student (Score & Age)

function calculateStudentData (students) {
    let totalScore = 0;
    let highestScore = students[0].Score;   //Comparing highest & lowest using index 0 / /inisialisasi skor tertinggi
    let lowestScore = students[0].Score;    //inisialisasi skor terendah

    let totalAge = 0;
    let currentYear = new Date().getFullYear();
    let initialAge = currentYear - new Date(students[0].Age).getFullYear();
    let highestAge = initialAge; //inisialisasi umur tertinggi
    let lowestAge = initialAge; //inisialisasi umur terendah

    for(let i = 0; i < students.length; i++){
        let student = students[i];
        let score = student.Score;
        let age = currentYear - new Date(student.Age).getFullYear();
       
        //hitung total skor
        totalScore += score;
        if (score > highestScore) highestScore = score;
        if (score < lowestScore) lowestScore = score;

        //hitung total umur
        totalAge += age;
        if (age > highestAge) highestAge = age;
        if (age < lowestAge) lowestAge = age;
    }
    //hitung rata-rata skor dan umur
    let averageScore = totalScore / students.length;
    let averageAge = totalAge / students.length;

    return{
        Score:{
            Highest: highestScore.toFixed(2),
            Lowest: lowestScore.toFixed(2),
            Average: averageScore.toFixed(2),
        },
        Age:{
            Highest: highestAge,
            Lowest: lowestAge,
            Average: averageAge,
        },
    };
}

let students = [
    {name: "Bob", Email: "bob@example.com", Age: "2000-05-20", Score: 85},
    {name: "John", Email: "john@example.com", Age: "1999-12-15", Score: 90},
    {name: "Jane", Email: "jane@example.com", Age: "2001-03-05", Score: 88},
];

console.log(calculateStudentData(students));


// Question 2: Crate Program to Create Transactions

//Product Class
class Product {
    constructor(name, price){
        this.Name = name;
        this.Price = price;
    }
}
//Transaction Class
class Transaction {
    constructor(){
        this.products = [];
        this.qty = [];
        this.total = 0;  
    }
    addToCart(product, quantity) {
        this.products.push(product);
        this.qty.push(quantity);
        this.total += product.Price * quantity;
    }
    showTotal(){
        console.log("The total transaction is " + this.total);
    }
    checkout(){
        let transactionData = [];
        for(let i = 0; i < this.products.length; i++){
            transactionData.push({
                product: this.products[i].Name,
                quantity: this.qty[i],
                subtotal: this.products[i].Price * this.qty[i],
            })
        }
        transactionData.push({ total: this.total });
        this.products = [];
        this.qty = [];
        this.total = 0;
        return transactionData;
    }
}

let product1 = new Product ("Kopi", 5000);
let product2 = new Product ("Teh", 3000);
let transaction = new Transaction();

console.log("Product 1 : ", product1);
console.log("Product 2 : ", product2);

transaction.addToCart(product1, 2)
transaction.addToCart(product2, 3)
transaction.showTotal();

console.log(transaction.checkout());




