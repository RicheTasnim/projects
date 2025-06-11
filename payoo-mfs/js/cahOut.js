document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutInput = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOutInput);
    const pinNumberInput = document.getElementById('input-pin').value;
    const curBalance = document.getElementById('account-balance').innerText;
    const curBalanceNumber = parseFloat(curBalance);

    console.log(cashOutNumber, curBalanceNumber);
    

    if(pinNumberInput === '1234' && cashOutInput <= curBalanceNumber){
        console.log('Cash out successfull');
        newBalance = curBalance - cashOutNumber;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to cash out. Try again later');
    }
})