/*
❓ Question 18: College Login & Exam Hall Permission System

Create a JavaScript function named examHallPermission() that takes:

student name
register number
attendance percentage
exam fee paid status (true or false)
ID card availability (true or false)

The system should follow these rules:

First check attendance:

If attendance is below 75:
Print "Not Eligible Due to Low Attendance"

If attendance is valid:

Check exam fee status:
If fee not paid:

Print "Exam Fee Pending"

If fee is paid:

Check ID card:

If ID card not available:

Print "ID Card Required"

If all conditions are satisfied:
Print:
student details
"Allowed to Enter Exam Hall"
*/
function examhallpermission(name,roll_no,attendence,exam_fee,id)
{
    if(attendence>75)
    {
        if(exam_fee==true)
        {
            if(id==false)
            {
                console.log("I'd card is Mandatory for exam")
            }
            else{
                console.log("You are allowed to write the exam")
            }
        }
        else
        {
            console.log("Exam fee is not paid")
        }
    }
    else{
        console.log("You are not allowed to write the exam due to low attendence!!!")
    }
}
examhallpermission("Deepak",108,78,false,true)
