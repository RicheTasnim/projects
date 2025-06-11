document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    console.log('add Money');

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    console.log('add money and pin with parameter', addMoney, pinNumber);
    
})