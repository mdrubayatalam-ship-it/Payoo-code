document.getElementById("addMoney-btn"). addEventListener("click", function(){
    // 1- bank account get
    const bankAccount = getValueFromInput("add-money-bank");
    if(bankAccount == "Select a Bank"){
        alert("Please Select a Bank");
        return;
    }

    // 2- get bank account number
    const accno = getValueFromInput("account-number");
    if (accno.length != 11){
         alert("Invalid acc no");
         return;
    }

    // 3- get amount
    const amount = getValueFromInput("amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);

    const pin = getValueFromInput("digit");
    if (pin == "1234"){
         alert(`Add Money Successfull BDT ${amount}tk from ${bankAccount} acc-no ${accno} at ${new Date()} balance: ${newBalance} tk`);
         setBalance(newBalance);
         
        //  History
        // 1--history container k sorai niye asbo
        const history = document.getElementById("history-container");
        // 2--new div create korbo
        const newHistory = document.createElement("div");
        // 3--new div innerHtml e add korbo
        newHistory.innerHTML = `
         
             <div class="transaction-card p-5 bg-base-100">
                           Add Money Successfull BDT ${amount}tk from ${bankAccount} acc-no ${accno} at ${new Date()} balance: ${newBalance} tk
             </div>
         
        `
        //4----- append korbo
              
         history.append(newHistory);
    }

    else
    {
         alert("Invalid Pin");
         return;
    }
})