const data = [{id:1, name:'Tasnim', address: 'Kochu Khet'}];
console.log(data[0].address);

const products = {
    count : 5000,
    data : [
        {id:1, name: 'hp laptop', price: 6500},
        {id:2, name: 'macbook', price: 16500},
    ]
}

console.log(products.data[1].price);

const user = {
    id: 5001,
    name: 'Shoriful Raj',
    address: {
        street: {
            first: '53/1 uttor side',
            second: 'Poribag er goli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}
console.log(user.address.street.second);
