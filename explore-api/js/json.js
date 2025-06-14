const user = {id: 1, name: 'Gorib Amir', job: 'actor'};
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    owner: 'Alia',
    address: {
        street: 'Kochu Khet Vuuter goli',
        city: 'Sylhet',
        country: 'Banglades'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
console.log(shop);
const stringShop = JSON.stringify(shop);
console.log(stringShop);
const shopObj = JSON.parse(stringShop);
console.log(shopObj);
