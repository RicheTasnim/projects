const difference = (x, y) => x-y;
const multiply = (first, second, third) => first*second*third;
const getAge = (person) => person.age;
const student = {name:'Ananta', age: 45};
const age = getAge(student);
console.log(age);


const getThird = numbers => numbers[2];
const third = getThird([5, 1,3,5,6,8,11]);
console.log(third);


const getPI = () => Math.PI;
console.log(getPI());


const doMath = (x, y, z) => {
    const sum = x+y+z;
    const mult = x*y*z;
    const result = sum + mult;
    return result;
}