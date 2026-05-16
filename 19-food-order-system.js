/*❓ Question 19: Online Food Order System

Create a JavaScript function named foodOrder() that takes:

customer name
food item
quantity
price per item
wallet balance
premium membership status (true or false)

The system should follow these rules:

First calculate total food cost.

Formula:

Total Cost=Quantity×Price Per Item

If customer is a premium member:
Give 20% discount.
Otherwise:
Give 5% discount.
After discount:
Check wallet balance.
If wallet balance is insufficient:
Print "Insufficient Wallet Balance"
Else:
Deduct amount from wallet
Print:
customer details
food item
final amount
remaining wallet balance
"Order Placed Successfully"
*/
function foodOrder(name,food,qauntity,price,wallet,membership)
{
    var total = qauntity * price
    if(wallet>=total)
    {
        if(membership==true)
        {
            total -= total*(20/100)
            wallet -=total
            console.log("---Customer Details---")
            console.log("Name      : "+name)
            console.log("Food      : "+food)
            console.log("Price     : "+price)
            console.log("Quantity  : "+qauntity)
            console.log("Total     : "+total)

        }
        else{
             total -= total*(5/100)
            wallet -=total
            console.log("---Customer Details---")
            console.log("Name      : "+name)
            console.log("Food      : "+food)
            console.log("Price     : "+price)
            console.log("Quantity  : "+qauntity)
            console.log("Total     : "+total)
            
        }
    }
    else{
        console.log("Isufficient Balance!!!")
    }
}
foodOrder("Deepak","Briyani",2,110,260,false)
