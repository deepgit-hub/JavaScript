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
