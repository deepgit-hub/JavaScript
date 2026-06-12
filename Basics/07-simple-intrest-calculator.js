/*
❓ Question 07: Simple Interest Calculator

👉 Create variables for:

Principal amount
Rate of interest
Time

Formula:

SI=
100
P×R×T
	​


Tasks:

Calculate simple interest
Calculate total amount after interest
Print all values clearly
*/
var principle_amount = 20000
var intrest = 5
var years =5
var simple_intrest = (principle_amount*intrest*years)/100
console.log("Principle Amount : "+principle_amount)
console.log("Intrest : "+intrest)
console.log("Total Years : "+years)
console.log("Simple Intrest Amount "+simple_intrest)
console.log("Total Amount : "+(principle_amount+simple_intrest))
