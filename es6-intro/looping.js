const numbers = [1,3,4,5];
for(const number of numbers){
    console.log(number);
}

const nobab = 'Siraj Ud Doula';
for(const char of nobab){
    console.log(char);
    
}

const glass = { 
    name: 'glass',
    color: 'golden', 
    price: 13, 
    isCleaned: true
};

for(const key in glass){
    const value = glass[key];
    // console.log(key, value);
}

const keys = Object.keys(glass);
console.log(keys);

for(const key of keys){
    console.log(key);
}