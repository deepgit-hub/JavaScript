/*
❓ Question 14: Movie Ticket Booking Function

Create a JavaScript function named ticketBooking() that takes customer name, movie name, ticket price, and number of tickets as parameters. The function should calculate the total ticket cost, print all booking details using console.log(), and return the final amount.

Formula:

Total Amount=Ticket Price×Number of Tickets
*/
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
