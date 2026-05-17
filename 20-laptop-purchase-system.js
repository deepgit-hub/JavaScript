/**/function laptopPurchase(name,price,budget,student,loan)
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
