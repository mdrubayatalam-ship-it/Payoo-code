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
