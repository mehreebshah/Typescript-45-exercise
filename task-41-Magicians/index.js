"use strict";
function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
//define an array containing magicians name
let magician_names = ["Harry Poter", "Wednesday Adam"];
//call the function to print each magicians name
show_magicians(magician_names);
