const myLoader = () => {
    return new Promise((resolve, reject) => {
        const success = Math.random();
        if(success <= 0.5){
            resolve(success)
        }
        else{
            reject(success)
        }
    })
}

myLoader()
.then(data => console.log('Resolve data', data)
)
.catch(err => console.log('Rejected with value', err)
)

async function loadData() {
    const res = await fetch('');
    const data = await res.json();
    console.log(data);
}

loadData();

const taskLoader = async() =>{
    const res = await fatch('');
    
}