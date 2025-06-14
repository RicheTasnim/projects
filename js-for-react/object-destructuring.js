const {name, age} = {name:'alu', age:14};
const {age1, name1} = {name:'alu', age:14, salary:4666};

const employee = {
    ide: 'VS code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 70,
        address: 'Kumarkhali',
        drink: 'water'
    }
}

const {machine, ide} = employee;
console.log(machine,ide);
const {weight} = employee.specification;
console.log(weight);
const [languages] = employee.languages;
console.log(languages);

