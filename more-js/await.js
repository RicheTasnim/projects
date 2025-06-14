const url = 'https://jsonplaceholder.typicode.com/users';
function loadUser(){
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

async function loadUserAsync(){
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}

const loadUserArrow = async() =>{
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}

const loadUserTry = async() =>{
    try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        
    }
    catch(e){
        console.error();
    }
}

