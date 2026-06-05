/*
❓ Question 12: Employee Salary Calculator Function

Create a JavaScript function named salary() that takes an employee's name,
basic salary, and
bonus as parameters. 
The function should calculate the total salary by adding the salary and bonus together,
print the employee name and total salary using console.log(),
and finally return the total salary.

Formula:

Total Salary=Salary+Bonus
*/
function salary(name,salary,bonus)
{
    console.log("Name of the Employee : "+name)

    return salary+bonus
}
console.log("Total Salary : "+salary("Deepak",10000,100))
