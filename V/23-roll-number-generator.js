/* ❓ Question 23: Student Roll Number Generator

Create a JavaScript function named rollNumberGenerator() that takes a starting roll number and ending roll number as parameters. The function should use a for loop to generate and print all student roll numbers one by one.

Each output should display:

student count
corresponding roll number

The student count should start from 1 and increase automatically for every iteration. */
function rollnumbergenerator(start,end)
{
     var a=1
     for(i=start;i<=end;i++)
     {
          
          console.log("Student "+a+" roll number is : "+i)
          a++;

     }
}
rollnumbergenerator(101,155)
