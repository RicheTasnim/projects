function add(a,b){
    const result = a+b;
    return result
}
function add(a,b){
    return a+b;
}
const sum = add(5,90);
console.log(sum);

const add2 = function(a,b){
    return a+b;
}

const add3 = (a,b) => (a+b);
const mult = (n1, n2, n3) => n1*n2*n3;

const mul =mult (3,5,7);
console.log(mul);
