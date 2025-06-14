const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// console.log(x,y);
const [x,y] = [42, 65];
const [a,b] = numbers;

function getValues(c,d){
    const sum = [c,d];
    return sum;
}

// const [first, second] = getValues[90, 36];

console.log(getValues(90,34));

const student = {
    name: 'Shakib Khan',
    movies: ['a', 'b', 'c', 'd'],
    age : 32,
}

const [firstMovie, secondMovie] = student.movies;
console.log(firstMovie, secondMovie, student.movies[3]);
