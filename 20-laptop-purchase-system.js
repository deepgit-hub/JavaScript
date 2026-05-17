/*
❓ Question 20: Laptop Purchase Eligibility System

Create a JavaScript function named laptopPurchase() that takes:

customer name
laptop price
customer budget
student status (true or false)
bank loan eligibility (true or false)

The system should follow these rules:

If customer budget is greater than or equal to laptop price:
Print "Laptop Purchase Successful"
Otherwise:
Check if customer is a student:
Students get 10% discount.
After discount:
Check whether budget is enough.
If still not enough:
Check bank loan eligibility:
If eligible:
Print "Laptop Can Be Purchased Using Loan"
Else:
Print "Purchase Failed"
If purchase succeeds:
Print:

customer name
final laptop price

remaining balance
*/
function laptopPurchase(name,price,budget,student,loan)
{
    if(student==true)
    {
        price -= price*(10/100)
    }
    if(price<=budget)
    {
        console.log("Purchased Successfully")
        budget = budget-price
        console.log("Remaining Budget : "+budget)
    }
    else
    {
        if(loan==true)
        {
            console.log("Laptop can be purchased through loan!!!")
        }
        else{
            console.log("Laptop purchase failed!!!")
        }
    }
}
laptopPurchase("Deepak",200000,150000,true,true)
