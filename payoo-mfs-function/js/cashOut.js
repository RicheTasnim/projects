document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutMoney = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-pin');

    if(pinNumber === 1234){
        console.log('You are logged in!!');
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance - cashOutMoney;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to Cash Out.');
    }
})