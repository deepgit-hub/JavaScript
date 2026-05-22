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
