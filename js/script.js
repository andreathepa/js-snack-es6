// Snack 1

const guests = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

console.log(guests)

const invite = guests.map((guest, i) => {
    return { 'Table name': 'Vipo\'s Table', 'Guest name' : guest, 'Position': i}
});

console.log(invite)

// Snack 2