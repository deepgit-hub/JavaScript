/*
❓ Question 15: BMI Calculator Function

Create a JavaScript function named bmiCalculator() that takes a person's name,
weight (in kg), 
and height (in meters) as parameters.
The function should calculate the BMI value, 
print all details using console.log(),
and return the BMI.

Formula:

BMI=
Height
2
Weight
	​

*/
function bmicalculator(name,w,h)
{
    console.log("Name      : "+name)
    console.log("Weight    : "+w+"kg")
    console.log("Height    : "+h+"m")
    var bmi = w/(h*h)
    console.log("BMI value : "+bmi)
}
bmicalculator("Chandra seker",92,1.5)
