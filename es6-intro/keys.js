const glass = { name: 'glass', color: 'golden', price: 13, isCleaned: true};
console.log(glass);

const keys = Object.keys(glass);
console.log(keys);
const values = Object.values(glass);
console.log(values);

const pair = Object.entries(glass);
console.log(pair);

// delete glass.isCleaned;
// console.log(glass);

const {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass);

// Object.freeze(glass);
Object.seal(glass);
glass.source = 'Bangladesh'
console.log(glass);

