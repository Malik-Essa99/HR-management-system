'use strict'
let allEmployees = [];
let newuniqueId = 1000;
let idcont = 1;
let uniqueIdArr = [];
let sectionCardEl = document.getElementById("card");
let formEl = document.getElementById("EmpInputForm");

/////////////////// Functions ///////////////////

function Employee(employeeFullName, employeeDepartment, employeeLevel, employeeImageUrl, employeeId, employeeSalary) {
    this.employeeId = employeeId;
    this.employeeFullName = employeeFullName;
    this.employeeDepartment = employeeDepartment;
    this.employeeLevel = employeeLevel;
    this.employeeImageUrl = employeeImageUrl;
    this.employeeSalary = employeeSalary;
    allEmployees.push(this);
}
let GhaziSamer = new Employee("Ghazi Samer", "Administration", "Senior", "assets/Ghazi.jpg");
let LanaAli = new Employee("Lana Ali", "Finance", "Senior", "assets/Lana.jpg");
let TamaraAyoub = new Employee("Tamara Ayoub", "Marketing", "Senior", "assets/Tamara.jpg");
let SafiWalid = new Employee("Safi Walid", "Administration", "Mid-Senior", "assets/Safi.jpg");
let OmarZaid = new Employee("Omar Zaid", "Development", "Senior", "assets/Omar.jpg");
let RanaSaleh = new Employee("Rana Saleh", "Development", "Junior", "assets/Rana.jpg");
let HadiAhmad = new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "assets/Hadi.jpg");

Employee.prototype.UniqueId = function () {

    this.employeeId = (newuniqueId + idcont);
    idcont++;

}
Employee.prototype.netSalary = function () {
    this.calculateSalary();
    this.employeeSalary = this.employeeSalary - (this.employeeSalary * (0.075));
}
Employee.prototype.calculateSalary = function () {

    if (this.employeeLevel == "Senior") {
        this.employeeSalary = ((Math.floor(Math.random() * (2000 - 1500)) + 1500));
    } else if (this.employeeLevel == "Mid-Senior") {
        this.employeeSalary = ((Math.floor(Math.random() * (1500 - 1000)) + 1000));
    } else if (this.employeeLevel == "Junior") {
        this.employeeSalary = ((Math.floor(Math.random() * (1000 - 500)) + 500));
    } else {
        console.log("Invalid level");
    }
}
/////////////////// Event Listener ///////////////////

formEl.addEventListener("submit", submitHandler);
function submitHandler(event) {
    alert("form submitted!");
    event.preventDefault();
    let name = event.target.EmpName.value;
    let dept = event.target.EmpDepartment.value;
    let lvl = event.target.Emplvl.value;
    let imgUrl = event.target.EmpImgurl.value;
    let newEmployee = new Employee(name, dept, lvl, imgUrl);
    newEmployee.render();

    saveData(allEmployees);
}

/////////////////// Render function ///////////////////

Employee.prototype.render = function () {

    let divEl = document.createElement('div');
    divEl.className = 'divInfo';

    sectionCardEl.appendChild(divEl);
    let imgEl = document.createElement('img');
    imgEl.src = this.employeeImageUrl;

    this.netSalary();
    this.UniqueId();

    divEl.textContent = `Name: ${this.employeeFullName} -- ID: ${this.employeeId} --  Department: ${this.employeeDepartment} -- Level: ${this.employeeLevel} -- Salary:${this.employeeSalary}`;
    divEl.appendChild(imgEl);

}

function saveData(data) {
    let stringArr = JSON.stringify(data);
    localStorage.setItem('employees', stringArr);
}

function getData() {
    let retrieveArr = localStorage.getItem('employees');
    if (retrieveArr != null) {
        let objArray = JSON.parse(retrieveArr);
        allEmployees = [];
        for (let i = 0; i < objArray.length; i++) {
            new Employee(objArray[i].employeeFullName, objArray[i].employeeDepartment, objArray[i].employeeLevel, objArray[i].employeeImageUrl, objArray[i].employeeId, objArray[i].employeeSalary)
        }
        console.log(allEmployees);
    }

}
// function(){

// }
// getData();

function traverseArray() {

    for (let i = 0; i < allEmployees.length; i++) {
        allEmployees[i].render();
    }
}
// if (localStorage.getItem('employees')) {
getData();
// }
traverseArray();
