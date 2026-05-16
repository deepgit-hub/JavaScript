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
