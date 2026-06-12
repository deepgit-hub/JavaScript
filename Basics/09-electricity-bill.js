/*
❓ Question 09: Electricity Bill Calculator

👉 Create variables for:

Customer name
Units consumed
Cost per unit

Tasks:

Calculate total electricity bill
Add 5% tax to the bill
Find final amount

Formula:

Final Amount=(Units×Cost Per Unit)+5% Tax

Print all details clearly
*/
var name = "Deepak"
var units_used = 357
var cost_per_unit = 8
var amount = units_used * cost_per_unit
var total_amount = amount + (amount*5)/100
console.log("Units used "+units_used)
console.log("Cost per unit "+cost_per_unit)
console.log("Total Amount : "+total_amount)
