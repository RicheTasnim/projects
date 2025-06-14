localStorage.setItem('userId', 875);
function store(){
    const keys = document.getElementById('storage-id').value;
    const values = JSON.stringify(document.getElementById('storage-value').value);
    localStorage.setItem(keys, values);
    keys.value = '';
    values.value = '';
}