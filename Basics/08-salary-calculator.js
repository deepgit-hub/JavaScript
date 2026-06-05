/*
❓ Question 08: Salary Calculation System

👉 Create variables for:

Employee name
Basic salary

Tasks:

Calculate:
HRA = 20% of basic salary
Bonus = 10% of basic salary
Find total salary

Formula:

Total Salary=Basic Salary+HRA+Bonus

Print all values clearly
*/
var emp_name = "Deepak"
var basic_salary = 20000
var hra = (basic_salary*20)/100
var bonus = (basic_salary*10)/100
var total_salary = basic_salary+hra+bonus
console.log("Name "+emp_name)
console.log("Total Salary "+total_salary)
