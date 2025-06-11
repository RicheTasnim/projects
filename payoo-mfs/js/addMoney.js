document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoneyInput = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoneyInput);
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(addMoneyInput, pinNumberInput);

    if(pinNumberInput === '1234'){
        console.log("you'r logged in!!");
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber+addMoneyNumber;
        console.log(newBalance);
        
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert("Failed to add money. Try again later.")
    }
    
})