const numbers = [1, 5, 6, 4, 15];
const players = [75, 67, 84, 45, 47, 56,77];
// const selected = players.filter(p=>p>70);
// const selected = players.filter(p=>p%2 === 1)
const selected = players.filter(p=>p%2 === 0)
console.log(selected);

const friends = ['Tom', 'Jhon', 'Micheal', 'Oliver', 'Tim', 'Joshna'];
const oddFriends = friends.filter(friend => friend.length > 4);
console.log(oddFriends);
