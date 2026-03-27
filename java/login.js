console.log("Functionality is Comming")

document.getElementById('login-btn').addEventListener('click',function(){
    const inNumber = document.getElementById('input-number');
    const getNumber = inNumber.value;
    console.log(getNumber)

    const inDigit = document.getElementById('input-digit');
    const getDigit = inDigit.value;
    console.log(getDigit);
        
    if(getNumber == '01799909400' && getDigit == '1234')
       {
         alert('Login Successful');
         window.location.assign("/home.html")
         
       }
    else

       {
        alert('Login failed. Try Again')
        return
       } 

})