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
