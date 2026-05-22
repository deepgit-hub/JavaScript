❓ Question 22: Online Course Access System

Create a JavaScript function named courseAccess() that takes:

student name
course purchased status (true or false)
course expiry status (true or false)
internet connection status (true or false)
device logged in status (true or false)

The system should follow these rules:

Student can access the course ONLY IF:
course is purchased
course is not expired
internet is available
device is logged in
If course is not purchased:
Print "Course Not Purchased"
If course is expired:
Print "Course Access Expired"
If internet is unavailable:
Print "No Internet Connection"
If device is not logged in:
Print "Please Login to Continue"
If everything is valid:
Print:
student name
"Access Granted to Course"
function courseaccess(name,couse_purchased,course_expiry,internet,login)
{
     if(couse_purchased && !course_expiry && internet && login)
     {
          console.log("Hello "+name)
          console.log("Course Accessed!!!")
     }
     else if(!login)
     {
          console.log("You have to login first!!!")
     }
     else if(!couse_purchased)
     {
          console.log("Purchase any course first!!!")
     }
     else if(course_expiry==true)
     {
          console.log("Your course has Expired!!!")
     }
     else if(!internet)
     {
          console.log("Check your internet connection!!!")
     }
     
}
courseaccess("Deepak",true,false,true,true)
