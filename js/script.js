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

//Snack 3

const bici_corsa = [
    {nome: 'Cube', peso: 10},
    {nome: 'Focus', peso: 12},
    {nome: 'Factor', peso: 9},
    {nome: 'Ghost', peso: 6},
    {nome: 'Gt', peso: 7},

];

console.log(bici_corsa);

let bici_leggera = bici_corsa[0];

for (let i = 1; i < bici_corsa.length; i++) {

  let { peso } = bici_corsa[i];

  if (peso < bici_leggera.peso) {
    bici_leggera = bici_corsa[i];
  }
};

console.log(`La bici più leggera è ${bici_leggera.nome} con un peso di ${bici_leggera.peso} kg.`);

//Snack 4

// Creare un array di oggetti di squadre di calcio.

const teams = [
    {nome: 'Perugia', punti: 0, falli: 0},
    {nome: 'Modena', punti: 0, falli: 0},
    {nome: 'Taranto', punti: 0, falli: 0},
    {nome: 'Pescara', punti: 0, falli: 0},
    {nome: 'Vercelli', punti: 0, falli: 0}
];

// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

function generate_number(min,max){
    for(let i=0; i<teams.length; i++){

        teams[i].punti = Math.floor(Math.random() * (max - min + 1) + min);

        teams[i].falli = Math.floor(Math.random() * (max - min + 1) + min);

    }
  
}

generate_number(0,100)

console.log(teams)

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


