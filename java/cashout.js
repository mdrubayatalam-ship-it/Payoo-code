console.log('cashout segment is ready to launch')
document.getElementById("Cashout-btn").addEventListener("click",function(){
    // Get the agent number & verify
    const getAgentNumberInput = document.getElementById("cashout-number");
     const getAgentNumber = getAgentNumberInput.value
     if(getAgentNumber.length != 11)
     {
         alert("Invalid Agent Number!");
         return;
     }
     console.log(getAgentNumber);
 
    // Get the Amount of withdrawal 

    const getAmountInput = document.getElementById("cashout-amount")
    const getAmount = getAmountInput.value;
    console.log(getAmount);


    // Get Current Balance

    const getCurrentBalanceInput = document.getElementById("balance")
    const getCurrentBalance = getCurrentBalanceInput.innerText;
    console.log(getCurrentBalance); 
    
    // Get New Balance
    
    
    const getNewBalance =  Number(getCurrentBalance) - Number(getAmount) ;
    if(getNewBalance < 0)
        {
            alert("Invalid Amount!")        
            return;
        }
        
    

     
    // Get the pin no & Verify

    const getPinInput = document.getElementById("cashout-digit")
    const getPin = getPinInput.value;
    if(getPin === "1234")
    {
         alert("Cashout Successfull!");
         console.log(getPin);
         getCurrentBalanceInput.innerText = getNewBalance;
         console.log("New Balance:", getNewBalance);
    }
    else
    {
        alert("Invalid Pin");
        return;
    }




});
