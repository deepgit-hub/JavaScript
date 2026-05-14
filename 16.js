/*
❓ Question 16: College Scholarship Eligibility System

Create a JavaScript function named scholarshipEligibility() that takes a student name, 
attendance percentage, 
and exam mark as parameters.

The system should follow these rules:

If attendance is below 75:
Student is not eligible for scholarship.
If attendance is 75 or above:
Check marks:
90 and above → Full Scholarship
75 to 89 → Half Scholarship
50 to 74 → Minimal Scholarship
Below 50 → No Scholarship

The function should print all student details and scholarship result using console.log().
*/
function scholarship(name,attendence,mark)
{
    var result
    if(attendence<75)
    {
        result="Not Eligible"
    }
    else
    {
        if(mark>90)
        {
            result="Full Scholarship"
        }
        else if(mark>75 && mark<90)
        {
            result="Half Scholarship"
        }
        else if(mark>50 && mark<75)
        {
            result = "Minimal Scholarship"
        }
        else
        {
            result = "No Scholarship"
        }
    }
    console.log("Name               : "+name)
    console.log("Mark               : "+mark)
    console.log("Attendence         : "+attendence)
    console.log("Scholarship Status : "+result)
}
scholarship("Deepak",68,100)
