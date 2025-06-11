document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    
    
    if(pinNumber === 1234){
        console.log("You are logged in!!");
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Faild to add money.');
    }
    
})