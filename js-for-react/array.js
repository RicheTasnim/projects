const products = [
    {name: 'laptop', price: 56000, brand: 'hp'},
    {name: 'phone', price: 156000, brand: 'Apple'},
    {name: 'watch', price: 6000, brand: 'casio'},
    {name: 'sunglass', price: 5000, brand: 'ribon'},
];

const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices);

products.forEach(product => console.log(product))
products.forEach(product => console.log(product.brand))


const expensive = products.filter(product=>product.price>5000);
console.log(expensive);
const nameSpecial = products.filter(product => product.name.includes('n'));
console.log(nameSpecial);


const favourite = products.find(product=>product.price>5000);
console.log(favourite);
const special = products.find(p => p.name.includes('n'));
console.log(special);


