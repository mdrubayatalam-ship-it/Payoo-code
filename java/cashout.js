// console.log('cashout segment is ready to launch')
// document.getElementById("Cashout-btn").addEventListener("click",function(){
//     // Get the agent number & verify
//     const getAgentNumberInput = document.getElementById("cashout-number");
//      const getAgentNumber = getAgentNumberInput.value
//      if(getAgentNumber.length != 11)
//      {
//          alert("Invalid Agent Number!");
//          return;
//      }
//      console.log(getAgentNumber);
 
//     // Get the Amount of withdrawal 

//     const getAmountInput = document.getElementById("cashout-amount")
//     const getAmount = getAmountInput.value;
//     console.log(getAmount);


//     // Get Current Balance

//     const getCurrentBalanceInput = document.getElementById("balance")
//     const getCurrentBalance = getCurrentBalanceInput.innerText;
//     console.log(getCurrentBalance); 
    
//     // Get New Balance
    
    
//     const getNewBalance =  Number(getCurrentBalance) - Number(getAmount) ;
//     if(getNewBalance < 0)
//         {
//             alert("Invalid Amount!")        
//             return;
//         }
        
    

     
//     // Get the pin no & Verify

//     const getPinInput = document.getElementById("cashout-digit")
//     const getPin = getPinInput.value;
//     if(getPin === "1234")
//     {
//          alert("Cashout Successfull!");
//          console.log(getPin);
//          getCurrentBalanceInput.innerText = getNewBalance;
//          console.log("New Balance:", getNewBalance);
//     }
//     else
//     {
//         alert("Invalid Pin");
//         return;
//     }




// });



// document.getElementById("Cashout-btn").addEventListener("click", function(){

//     // 1. get the agent no & verify.
//     const getAgentNumberInput = document.getElementById("cashout-number")
//     const getAgentNumber = getAgentNumberInput.value;
    
    
//     if(getAgentNumber.length != 11)
//     {
//         alert("Invalid Agent No!");
//         return;
//     }

//     else
//     {
//         console.log("Agent no: ",getAgentNumber);
//     }

//     //  2. Get the cash amount & Verify

//     const getAmountInput = document.getElementById("cashout-amount");
//     const getAmount = getAmountInput.value;
//     console.log("Amount: ", getAmount,"tk");


//     // 3. Get Current balance

//     const currentbalanceInput = document.getElementById("balance");
//     const currentBalance = currentbalanceInput.innerText;
//     console.log("Current Balacne: ", currentBalance);

//     // 4. Get New Balance

//     const newBalance = Number(currentBalance) - Number(getAmount);
//     console.log("New Balance: ", newBalance);


//     // 5. Get Pin Number & verify
   
//     const getPinInput = document.getElementById("cashout-digit");
//     const getPin = getPinInput.value;
    

//     if(getPin === "1234")
//     {
//         alert("Cashout Successful!");
//         console.log("Pin: ", getPin);
//         currentbalanceInput.innerText = newBalance;

//     }

//     else
//     {
//         alert("Invalid Pin No! Try Again")
//         return;
//     }
    


// });



document.getElementById("Cashout-btn").addEventListener("click", function(){

    // Get Cashout number

    const getCashoutNumber = getValueFromInput("cashout-number")
       
    // Get Cashout amount

    const getCashoutAmount = getValueFromInput("cashout-amount");


    //     // 3. Get Current balance

      const currentBalance = getBalance();

//     // 4. Get New Balance

    const newBalance = currentBalance - Number(getCashoutAmount);
    console.log("New Balance: ", newBalance);
    if(newBalance < 0)
    {
         alert("Invalid!!");
         return;
        
    }


//     // 5. Get Pin Number & verify
  const getPin  = getValueFromInput("cashout-digit")    

    if(getPin === "1234")
    {
        alert("Cashout Successful!");
        console.log("Pin: ", getPin);
        setBalance(newBalance);
    }

    else
    {
        alert("Invalid Pin No! Try Again")
        return;
    }

})