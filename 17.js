function atmsystem(name,balance,withdraw,pin)
{
    var correct_pin = 2911
    if(correct_pin==pin)
    {
        if(withdraw>balance)
        {
            console.log("Insufficient Balance")
        }
        else if(withdraw<balance)
        {
            var min_bal = balance-withdraw
            if(min_bal<1000)
            {
                console.log("Minimum Balance Violated")
            }
            else
            {
                console.log("Withdraw sucess")
                balance = balance - withdraw
                console.log("Remaining Balance : "+balance)
            }
        }
    }
    else 
    {
        console.log("Incorrect Pin")
    }

}
atmsystem("Deepak",2500,1700,1129)
