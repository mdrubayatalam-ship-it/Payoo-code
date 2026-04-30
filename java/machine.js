console.log("Machine Added")


// Machine---> Input value

function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id,value);
    return value;    
}

// Machine --> Balance
 
function getBalance(){
     const balanceElement = document.getElementById("balance");
     const currentBalance = balanceElement.innerText;
     console.log("Current balance", Number(currentBalance));
     return Number(currentBalance);
}   


function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}


// Machine id --> hide all --> Show id

function showOnly(id){
     const addmoney = document.getElementById("Add-Money");
     const cashout = document.getElementById("Cashout");
     const history = document.getElementById("history")
     
     addmoney.classList.add("hidden");
     cashout.classList.add("hidden");
     history.classList.add("hidden"); 
     
     const selected = document.getElementById(id);
     selected.classList.remove("hidden")
}