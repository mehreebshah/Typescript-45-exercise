function show_magicians(magician:string[]){
    magician.forEach(name => console.log(name));
}

function make_great(magician:string[]){
    return magician.map(name => `The Great ${name}`);
    
}

//define an array of magicians name
let magician_name = ["Harry Poter","Wednesday Adam","John"];

let great_magicians = make_great(magician_name);

show_magicians(great_magicians);