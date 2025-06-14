//falsy = '', 0, false, null, undefined

let myVar = 5;
if(myVar){
    myVar = myVar*100;
}
else{
    myVar = 0;
}

let myMoney = 50;
if(!myMoney){
    falsy;
}

let food;
const money = 80;
if(money>100){
    food = biriyani;
}
else{
    food = 'tea biscuit';
}
//ternary

let food1 = money>100 ? "biriyani" : "tea biscuit";
console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'water';
console.log(drink);

const num1 = 53;
console.log(num1);
const numstr = num1 + '';
console.log(numstr);


const input = '5000';
const inputNum = +input;
console.log(inputNum);

let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
(isActive === true ? showUser() : hideUser());
isActive && showUser();
isActive || hideUser();
isActive = !isActive;