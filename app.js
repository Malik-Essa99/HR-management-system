'use strict'
let allEmployees = [];
let newuniqueId = 1000;
let idcont=1;
let uniqueIdArr = [];
let sectionCardEl = document.getElementById("card");
let formEl = document.getElementById("EmpInputForm");

/////////////////// Functions ///////////////////

function Employee(employeeFullName,employeeDepartment,employeeLevel,employeeImageUrl,employeeId,employeeSalary) {

    this.employeeId = employeeId;
    this.employeeFullName = employeeFullName;
    this.employeeDepartment = employeeDepartment;
    this.employeeLevel = employeeLevel;
    this.employeeImageUrl = employeeImageUrl;
    this.employeeSalary = employeeSalary;

    allEmployees.push(this);
}

Employee.prototype.UniqueId = function () {

    this.employeeId = (newuniqueId+idcont);
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

    let newEmployee = new Employee(name,dept,lvl,imgUrl);
    newEmployee.render();
}

/////////////////// Render function ///////////////////

Employee.prototype.render = function () {
    let divEl = document.createElement('div');
    divEl.className ='divInfo';
    sectionCardEl.appendChild(divEl);

    let imgEl = document.createElement('img');
    imgEl.src = this.employeeImageUrl;
    
    this.netSalary();
    this.UniqueId();
    
    divEl.textContent = `Name: ${this.employeeFullName} -- ID: ${this.employeeId} --  Department: ${this.employeeDepartment} -- Level: ${this.employeeLevel} -- Salary:${this.employeeSalary}`;
    divEl.appendChild(imgEl);
    
}

/////////////////// Old render function ///////////////////

// Employee.prototype.render = function () {
//     this.calculateSalary();
//     this.netSalary();
//     document.write(` ${this.employeeFullName} ${this.salary} <br>`);
// }

// function traverseArray() {
//     for (let i = 0; i < 7; i++) {
//   this.calculateSalary();
//     this.netSalary();
//         allEmployees[i].render();
//     }
// }

//traverseArray();