function discount(name,price,dis_per)
{
    console.log("Product : "+name)
    console.log("Price : "+price)
    console.log("Discount : "+dis_per)
    var finalprice= price - (price*dis_per)/100
    console.log("Final Price : "+finalprice)
}
discount("Laptop",25000,10)
