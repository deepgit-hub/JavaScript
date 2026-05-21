/* 
❓ Question 21: Website Login Verification System

Create a JavaScript function named loginSystem() that takes:

username
password
OTP verification status (true or false)
account blocked status (true or false)

The system should follow these rules:

Login should succeed ONLY IF:
username is "Deepak"
password is "12345"
OTP is verified
account is NOT blocked
If account is blocked:
Print "Account Blocked"
If username or password is wrong:
Print "Invalid Credentials"
If OTP is not verified:
Print "OTP Verification Failed"
If everything is correct:
Print "Login Successful"

*/

function loginsystem(u_name,password,otp_verification,account_status)
{
   let correct_username ="Deepak"
   let correct_password =2911
   let correct_otp = 7485
   let correct_account_status = true
   if(u_name == correct_username && password == correct_password && otp_verification == correct_otp && correct_account_status==account_status)
   {
        console.log("Login Successfully!!!")
   }
   else if(u_name != correct_username || password != correct_password)
   {
        console.log("Invalid Credentials entered!!!")
   }
   else if(!account_status)
   {
        console.log("Your account is Blocked!!!")
   }
   else if(otp_verification != correct_otp)
   {
        console.log("Otp is not verified!!!")
   }

}
loginsystem("Deepak",2911,7485,true)
