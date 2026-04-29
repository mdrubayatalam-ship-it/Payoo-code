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
         alert(`Add Money Successfull from ${bankAccount} at ${new Date()}`);
         setBalance(newBalance);
    }
})