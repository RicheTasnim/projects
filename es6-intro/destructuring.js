const actor = {
    name: 'Ananta',
    age: 40,
    phone: '0r8i8',
    money: 4894785934789
}

// const phone = actor.phone;
// const age = actor.age;

const {age:boyos, phone} = actor;

console.log(phone);
console.log(boyos);


const numbers = [45,56];
const [first, second] = numbers;
const [x,y] = [12, 45];

function double(a,b){
    return [a*2, b*2];
}

const [f,s] = double(4,8);
console.log(f,s);
