const number = [1,2,3,4,5,6];
const student = {
    name: 'Shakib Khan',
    movies: [1,3,4],
    age : 32,
}
// template string
const about = `My name is ${student.movies[0]}`;
console.log(about);

// arrow function

const getFive = () => 5;

const isEven = x => x%2==0;
const addThree = (a,b,c) => a+b+c;
const doMath = (n, m) => {
    const add = n+m;
    return add;
}

//spread operator
const newNumbers = [...number];
number.push(99);
number.push(99);
number.push(99);
console.log(number);
console.log(newNumbers);

const curNum = [...newNumbers, 55];
console.log(curNum);
