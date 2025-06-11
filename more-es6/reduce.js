const numbers = [1, 4, 7, 8, 9, 3, 2];
const total = numbers.reduce((previous, current) => previous+current, 0);
console.log(total);

const sum = numbers.reduce((p, c) => p+c, 0)
console.log(sum);
