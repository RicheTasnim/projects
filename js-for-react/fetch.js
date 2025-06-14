//json
const student = {
    name: 'Shakib Khan',
    movies: ['a', 'b', 'c', 'd'],
    age : 32,
}

const studentJSON = JSON.stringify(student);
const studentObject = JSON.parse(studentJSON);
// console.log(student);
// console.log(studentJSON);
// console.log(studentObject);

//fetch
// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data)
// )

//keys, values
const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys, values);

// for
const number = [1,3,5];
number.forEach(num => console.log(num)
)
//for of array like object
//for in object

//add or remove from an array
const products = [
    {name: 'laptop', price: 56000, brand: 'hp'},
    {name: 'phone', price: 156000, brand: 'Apple'},
    {name: 'watch', price: 6000, brand: 'casio'},
    {name: 'sunglass', price: 5000, brand: 'ribon'},
];

const newProduct = {name: 'webcam', price: 700, brand: 'lal'};

const newProducts = [...products, newProduct];
console.log(products);
console.log(newProducts);

//create a new array without specific item
const remaining = newProducts.filter(product => product.name !== 'phone');
// const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);
