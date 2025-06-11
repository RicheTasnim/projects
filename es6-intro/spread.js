const max = Math.max(6,23, 44,84, 99, 45);
const numbers = [4,5,6,99,77];
const arrayMax = Math.max(...numbers);
console.log(...numbers);
console.log(arrayMax);

const friends = [1,2,3,5];
const bondhu = friends;
const dosto = [...friends];
bondhu.push(12);
console.log(friends);
console.log(bondhu);
console.log(dosto);

