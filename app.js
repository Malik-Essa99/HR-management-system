'use strict'
let allEmployees = []

function Employee(employeeId, fullName, department, level, imageUrl, salary) {

    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = salary;
    this.netSalary();

    allEmployees.push(this);
}
Employee.prototype.netSalary = function () {
    this.calculateSalary();
    this.salary = this.salary - (this.salary * (0.075));

}
Employee.prototype.calculateSalary = function () {

    if (this.level == "Senior") {
        this.salary = ((Math.floor(Math.random() * (2000 - 1500)) + 1500));
    } else if (this.level == "Mid-Senior") {
        this.salary = ((Math.floor(Math.random() * (1500 - 1000)) + 1000));
    } else if (this.level == "Junior") {
        this.salary = ((Math.floor(Math.random() * (1000 - 500)) + 500));
    } else {
        console.log("Invalid level");
    }

}

Employee.prototype.render = function () {
    document.write(`${this.fullName} ${this.salary} <br>`);
}
function traverseArray() {
    for (let i = 0; i < 7; i++) {
        allEmployees[i].render();
    }
}

let ghaziSamer = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
let lanaAli = new Employee(1001, "Lana Ali", "Finance", "Senior");
let tamaraAyoub = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
let safiWalid = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
let omarZaid = new Employee(1004, "Omar Zaid", "Development", "Senior");
let ranaSaleh = new Employee(1005, "Rana Saleh", "Development", "Junior");
let HadiAhmad = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");

traverseArray();