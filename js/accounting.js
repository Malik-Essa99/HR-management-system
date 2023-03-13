'use strict'

let trElAdm = document.getElementById('trAdministration');
let trElMar = document.getElementById('trMarketing');
let trElDev = document.getElementById('trDevelopment');
let trElFin = document.getElementById('trFinance');
let trFooterEl = document.getElementById("tFooter");
let administrationCount = 0;
let marketingCount = 0;
let developmentCount = 0;
let financeCount = 0;
let totalNumberOfEmployees = 0;
let administrationSum = 0;
let marketingSum = 0;
let developmentSum = 0;
let financeSum = 0;
let allDepartmentsSalariesSum =0;
let employeesInfo = [];

function getData() {

    let retrieveArr = localStorage.getItem('employees');
    employeesInfo = JSON.parse(retrieveArr);
    // console.log(employeesInfo);

}
function renderTable() {

    for (let i = 0; i < employeesInfo.length; i++) {

        // console.log(employeesInfo[i]["employeeSalary"]);

        if (employeesInfo[i]["employeeDepartment"] == "Administration") {
            administrationCount++;
            administrationSum += employeesInfo[i]["employeeSalary"];

        } else if (employeesInfo[i]["employeeDepartment"] == "Marketing") {
            marketingCount++;
            marketingSum += employeesInfo[i]["employeeSalary"];
        }
        else if (employeesInfo[i]["employeeDepartment"] == "Development") {
            developmentCount++;
            developmentSum += employeesInfo[i]["employeeSalary"];
        }
        else if (employeesInfo[i]["employeeDepartment"] == "Finance") {
            financeCount++;
            financeSum += employeesInfo[i]["employeeSalary"];
        }

        // console.log(administrationSum);
    }
    
    totalNumberOfEmployees = (administrationCount + marketingCount + developmentCount + financeCount);
    allDepartmentsSalariesSum =(administrationSum + marketingSum + developmentSum + financeSum);

    ////////////////////////////// Administration //////////////////////////////

    let tdElAdm = document.createElement('td');
    tdElAdm.textContent = administrationCount;
    trElAdm.appendChild(tdElAdm);

    let tdElAdmTotalSalary = document.createElement('td');
    tdElAdmTotalSalary.textContent = administrationSum;
    trElAdm.appendChild(tdElAdmTotalSalary);


    let tdElAdmAvg = document.createElement('td');
    tdElAdmAvg.textContent = administrationSum / administrationCount;
    trElAdm.appendChild(tdElAdmAvg);
    ////////////////////////////// Marketing //////////////////////////////

    let tdElMar = document.createElement('td');
    tdElMar.textContent = marketingCount;
    trElMar.appendChild(tdElMar);

    let tdElMarTotalSalary = document.createElement('td');
    tdElMarTotalSalary.textContent = marketingSum;
    trElMar.appendChild(tdElMarTotalSalary);

    let tdElMarAvg = document.createElement('td');
    tdElMarAvg.textContent = marketingSum / marketingCount;
    trElMar.appendChild(tdElMarAvg);

    ////////////////////////////// Development //////////////////////////////

    let tdElDev = document.createElement('td');
    tdElDev.textContent = developmentCount;
    trElDev.appendChild(tdElDev);

    let tdElDevTotalSalary = document.createElement('td');
    tdElDevTotalSalary.textContent = developmentSum;
    trElDev.appendChild(tdElDevTotalSalary);

    let tdElDevAvg = document.createElement('td');
    tdElDevAvg.textContent = developmentSum / developmentCount;
    trElDev.appendChild(tdElDevAvg);

    ////////////////////////////// Finance //////////////////////////////

    let tdElFin = document.createElement('td');
    tdElFin.textContent = financeCount;
    trElFin.appendChild(tdElFin);

    let tdElFinTotalSalary = document.createElement('td');
    tdElFinTotalSalary.textContent = financeSum;
    trElFin.appendChild(tdElFinTotalSalary);

    let tdElFinAvg = document.createElement('td');
    tdElFinAvg.textContent = financeSum / financeCount;
    trElFin.appendChild(tdElFinAvg);

    ////////////////////////////// Table Footer //////////////////////////////

    let tdElAllEmp = document.createElement('td');
    tdElAllEmp.textContent = totalNumberOfEmployees;
    trFooterEl.appendChild(tdElAllEmp)

    let tdElAllEmpTotalSalary = document.createElement('td');
    tdElAllEmpTotalSalary.textContent = allDepartmentsSalariesSum;
    trFooterEl.appendChild(tdElAllEmpTotalSalary)

    let tdElAllEmpAvg = document.createElement('td');
    tdElAllEmpAvg.textContent = (allDepartmentsSalariesSum) / (totalNumberOfEmployees);
    trFooterEl.appendChild(tdElAllEmpAvg)

}
getData();
renderTable();
