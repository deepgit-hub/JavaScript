/**/
function movieticket(name,movie,price,count)
{
    console.log("----Your Booking Details----")
    console.log("Name                : "+name)
    console.log("Movie               : "+movie)
    console.log("Price               : "+price)
    console.log("Number of tickets   : "+count)
    console.log("Total amount to pay : "+(price*count))
}
movieticket("Deepak","Openheimer",1200,3)
