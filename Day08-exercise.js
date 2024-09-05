//Exercise Day 08

// Question 1 - Employee Salary

class Employee {
    constructor(name, workingHour){
        this.name = name,
        this.workingHour = workingHour;
    }
}

class FullTime extends Employee {
    constructor(name, workingHour){
        super(name, workingHour)
    }
    calculateTotalSalary(){
        if (this.workingHour > 6) {
            return 6 * 100000 + (this.workingHour - 6) * 175000;
        } else {
            return this.workingHour * 100000;
        }
    }
}

class PartTime extends Employee {
    constructor(name, workingHour){
        super(name, workingHour)
    }
    calculateTotalSalary(){
        if (this.workingHour > 6) {
            return 6 * 50000 + (this.workingHour - 6) * 80000;
        } else {
            return this.workingHour * 50000;
        }
    } 
}

const fullTimeEmployee = new FullTime("John Doe", 6);
const partTimeEmployee = new PartTime("Jane Smith", 8);

console.log(fullTimeEmployee.name + " Total Salary: IDR " + fullTimeEmployee.calculateTotalSalary());
console.log(partTimeEmployee.name + " Total Salary: IDR " + partTimeEmployee.calculateTotalSalary());


// Question 2 - Shooting Game

// class Player {
//     constructor(name, health, power) {
//         this.name = name;
//         this.health = 100;
//         this.power = 10;
//     }
//     //nambahin function damage (setiap kena attack)
//     getInfo() {
//         return `Player - Name: ${this.name} (Health > ${this.health}, Power > ${this.power})`;
//     }
// }

// class ShootingGame {
//     constructor(player1, player2) {
//         this.player1 = player1;
//         this.player2 = player2;
//     }
//     randomItem(){
//         const randomHealth = ;
//         const randomPower = Math.floor(Math.random() * 11);
//         return {health: randomHealth, power: randomPower}
//     }
// };
