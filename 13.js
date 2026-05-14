❓ Question 13: Product Discount Calculator

Create a JavaScript function named discount() that takes a product name, product price, and discount percentage as parameters. The function should calculate the discount amount and final product price after discount, print all details using console.log(), and return the final price.

Formula:

Final Price=Price−(
100
Price×Discount
	​

)
function discount(name,price,dis_per)
{
    console.log("Product : "+name)
    console.log("Price : "+price)
    console.log("Discount : "+dis_per)
    var finalprice= price - (price*dis_per)/100
    console.log("Final Price : "+finalprice)
}
discount("Laptop",25000,10)
