/*
❓ Question 17: ATM Withdrawal System

Create a JavaScript function named atmSystem() that takes:

account holder name
account balance
withdrawal amount
PIN entered

The ATM system should follow these rules:

First check whether PIN is correct.
Correct PIN = 1234
If PIN is wrong:
Print "Incorrect PIN"
If PIN is correct:
Check account balance:
If withdrawal amount is greater than balance:
Print "Insufficient Balance"

Else:

Check minimum balance rule:
Account must maintain ₹1000 minimum balance after withdrawal.
If minimum balance rule breaks:
Print "Minimum Balance Rule Violated"

Else:

Deduct amount
Print:

withdrawal success
remaining balance
*/
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
