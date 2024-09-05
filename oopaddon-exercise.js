// Live Code Challenge - OOP Add on Exercise

// Question 1 - Hero Skill & Attribute Tracker

class Hero {
    constructor (name, type, hp) {
        this.name = name;
        this.type = type;
        this.hp = hp;
    }
}

class Mage extends Hero {
    constructor (name, type, hp, magicPower) {
        super(name, type, hp); {
            this.magicPower = magicPower;
        }
    }
    getInfo(){
        return "Mage Hero - Name: " + this.name + " Type: " + this.type + " HP: " + this.hp + " Magic Power: " + this.magicPower;
    }
}

class Warrior extends Hero {
    constructor (name, type, hp, physicalDef) {
        super(name, type, hp, physicalDef); {
            this.physicalDef = physicalDef;
        }
    }
    getInfo(){
        return "Warrior Hero - Name: " + this.name + " Type: " + this.type + " HP: " + this.hp + " Physical Defense: " + this.physicalDef;
    }
}

const mageVar = new Mage ("Eudora", "Electric Mage", 1500, 500);
const warriorVar = new Warrior ("Alucard", "Demon Hunter", 2500, 700);

console.log(mageVar.getInfo());
console.log(warriorVar.getInfo());

console.log("=========================================")

// Question 2 - Staff Organizer

class Employee {
    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}

class Manager extends Employee {
    constructor(name, age, salary, teamSize){
        super(name, age, salary)
            this.teamSize = teamSize;
            this.teamBonus = 1000
    }
    calculateBonus(){
    return this.teamBonus * this.teamSize;
    }
    getInfo(){
        return "Manager - Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary + " Team Size: " + this.teamSize;
    }
}

class Developer extends Employee {
    constructor(name, age, salary, programmingLang){
        super(name, age, salary)
            this.programmingLang = [];
    }
    addLanguage(newLanguage){
        this.programmingLang.push(newLanguage)
    }
    getInfo(){
        return "Developer - Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary + " Programming Languages: " + this.programmingLang;
    }
}

const managerVar = new Manager ("Alice", 35, 8000, 5);
const developerVar = new Developer ("Bob", 20, 6000);
developerVar.addLanguage ("JavaScript");
developerVar.addLanguage ("Python");
developerVar.addLanguage ("C++");

console.log(managerVar.getInfo());
console.log(developerVar.getInfo());
console.log("Bonus for " + managerVar.name + " : " + managerVar.calculateBonus());

console.log("=========================================")


// Question 3 = Patient Records & Appointment Manager
class Patient {
    constructor(name, age, patientID) {
        this.name = name;
        this.age = age;
        this.patientID = patientID;
    }
    getInfo(){
        return "Patient - Name:" + this.name + " Age : " + this.age + " Patient ID: " + this.patientID;
    }
}

class InPatient extends Patient {
    constructor(name, age, patientID, roomNumber) {
        super(name, age, patientID)
        this.roomNumber = roomNumber;
    }
    assignRoom(newRoomNumber){
        this.roomNumber = newRoomNumber;
    }
}

class OutPatient extends Patient {
    constructor(name, age, patientID, appointmentDate) {
        super(name, age, patientID)
        this.appointmentDate = appointmentDate;
    }
    rescheduleAppointment(newDate){
        this.appointmentDate = newDate;
    }
};

let inPatient = new InPatient("John Doe", 45, "P001");
inPatient.assignRoom("101A");
let outPatient = new OutPatient("Jane Smith", 30, "P002")
outPatient.rescheduleAppointment("2024-09-10");

console.log(inPatient);
console.log(outPatient);

console.log("=========================================")

// Question 4 - Movie Ticketing Asisstant

class Ticket {
    constructor(movieTitle, seatNumber, ticketID){
        this.movieTitle = movieTitle;
        this.seatNumber = seatNumber;
        this.ticketID = ticketID;
    }
    displayInfo(){
        return `Ticket - Movie Title: ${this.movieTitle}, Seat Number: ${this.seatNumber}, Ticket ID: ${this.ticketID}`;
    }
}

class StandardTicket extends Ticket {
    constructor(movieTitle, seatNumber, ticketID, snackPackage){
        super(movieTitle, seatNumber, ticketID);
        this.snackPackage = snackPackage;
    }
    chooseSnackPackage(snackPackage){
        this.snackPackage = snackPackage;
        console.log(`Snack Package for TicketID ${this.ticketID} is set to ${this.snackPackage}`);
    }
    displayInfo(){
        return `Ticket - Movie Title: ${this.movieTitle}, Seat Number: ${this.seatNumber}, Ticket ID: ${this.ticketID}`;
    }
}

class VIPTicket extends Ticket {
    constructor(movieTitle, seatNumber, ticketID, loungeAccess = false){
        super(movieTitle, seatNumber, ticketID);
        this.loungeAccess = loungeAccess;
    }
    grantLoungeAccess(hasAccess){
        this.loungeAccess = hasAccess;
        if (this.loungeAccess){
            console.log ("Lounge Access for " + this.ticketID + "is Granted");
        } else {
        console.log ("Lounge Access for " + this.ticketID + "is Denied");
        }
    }
    displayInfo(){
        return `Ticket - Movie Title: ${this.movieTitle}, Seat Number: ${this.seatNumber}, Ticket ID: ${this.ticketID}`;
    }
}

let standardTicket = new StandardTicket("Inception", "A12", "ST123");
console.log(standardTicket.displayInfo());
standardTicket.chooseSnackPackage("Popcorn & Soda");

let vipTicket = new VIPTicket("Interstellar", "B1", "VT456")
console.log(vipTicket.displayInfo());
vipTicket.grantLoungeAccess(true);


