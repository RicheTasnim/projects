document.getElementById('show-cash-out').addEventListener('click', function(event){
    document.getElementById('cash-uot-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
})

document.getElementById('show-add-money').addEventListener('click', function(event){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-uot-form').classList.add('hidden');
})
