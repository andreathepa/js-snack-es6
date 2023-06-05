// Snack 1

const guests = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

console.log(guests)

const invite = guests.map((guest, i) => {
    return { 'Table name': 'Vipo\'s Table', 'Guest name' : guest, 'Position': i}
});

console.log(invite)

// Snack 2

const students = [     {         'id': '213',         'name': 'Marco della Rovere',         'grades': '78'     },     {         'id': '110',         'name': 'Paola Cortellessa',         'grades': '96'     },     {         'id': '250',         'name': 'Andrea Mantegna',         'grades': '48'     },     {         'id': '145',         'name': 'Gaia Borromini',         'grades': '74'     },     {         'id': '196',         'name': 'Luigi Grimaldello',         'grades': '68'     },     {         'id': '102',         'name': 'Piero della Francesca',         'grades': '50'     },     {         'id': '120',         'name': 'Francesca da Polenta',         'grades': '84'     }, ]

console.log(students)

//Uppercase names

const plates = students.map((student) => student.name.toUpperCase());

console.log(plates)

//Grade Over 70

const best_student = students.filter((student) => {
    return student.grades > 70
})

console.log(best_student)

//Grade id over 70-120

const top_student = students.filter((student) => {
    return student.grades > 70 && student.id >120
})

console.log(top_student)