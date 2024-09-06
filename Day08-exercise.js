//Exercise Day 08

// Question 1 - Employee Salary

class Employee {
    constructor(name, workingHour){
        this.name = name,
        this.workingHour = workingHour;
    }
}
//have to add addworkinghours function in parents as context from question

class FullTime extends Employee {
    constructor(name, workingHour){
        super(name, workingHour)
    }
    calculateTotalSalary(){
        if (this.workingHour > 6) {
            return 6 * 100000 + (this.workingHour - 6) * 75000;
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
            return 6 * 50000 + (this.workingHour - 6) * 30000;
        } else {
            return this.workingHour * 50000;
        }
    } 
}

const fullTimeEmployee = new FullTime("John Doe", 8);
const partTimeEmployee = new PartTime("Jane Smith", 8);

// const fullTimeEmployee = new FullTime();
// const partTimeEmployee = new PartTime();
// to be fixed >!!

console.log(fullTimeEmployee.name + " Total Salary: IDR " + fullTimeEmployee.calculateTotalSalary());
console.log(partTimeEmployee.name + " Total Salary: IDR " + partTimeEmployee.calculateTotalSalary());



//Question 2 - Shooting Game

// Solution Question 2
class Player {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.power = 10;
    }
    damage(power) {
        this.health -= power;
    }
    useItem(item) {
        this.health += item.health;
        this.power += item.power;
    }
    showStatus() {
        console.log(
            this.name + " (Health => " + 
            this.health + " , Power => " + 
            this.power + ")");
    }
}

class ShootingGame {
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = player1;
    }
    getRandomItem(){
        return {
            health: Math.floor(Math.random() * 2) + 10,
            power: Math.floor(Math.random() * 2) + 10,
        };
    }
    start(){
        while(this.player1.health > 0 && this.player2.health > 0) {
            console.log("Current player : " + this.currentPlayer.name);
            this.player1.showStatus();
            this.player2.showStatus();

            //-- get random item
            let item1 = this.getRandomItem();
            let item2 = this.getRandomItem();

            console.log(
                this.player1.name + " receives +" + 
                item1.health + " health and " + 
                item1.power + " power");
            
            console.log(
                this.player2.name + " receives +" + 
                item2.health + " health and " + 
                item2.power + " power");

            this.player1.useItem(item1);
            this.player2.useItem(item2);

            this.player1.showStatus();
            this.player2.showStatus();

            //-- Shooting
            if (this.currentPlayer === this.player1) {
                this.player2.damage(this.player1.power);
                this.currentPlayer = this.player2;
            } else {
                this.player1.damage(this.player2.power);
                this.currentPlayer = this.player1;
            }

            console.log(" After shooting : ");
            this.player1.showStatus();
            this.player2.showStatus();
        }
        //-- announce a winner
        let winner = this.player1.health > 0 ? this.player1.name : this.player2.name;
        console.log("===> " + winner  + " wins the game!");
    };
}

const player1 = new Player("Player 1")
const player2 = new Player("Player 2")
const game = new ShootingGame(player1, player2);

game.start();
