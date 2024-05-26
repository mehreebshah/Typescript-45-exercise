function show_magicians(magician:string[]){
    magician.forEach(name => console.log(name));
}

function make_great(magician:string[]){
    return magician.map(name => `The Great ${name}`);
    
}

//define an array of magicians name
let magician_name = ["Harry Poter","Wednesday Adam","John"];

let copy_magicians_names = magician_name.slice();

let copy_great_magicians = make_great(copy_magicians_names);

//orignal array
console.log("Original Array\n");
show_magicians(magician_name);

//copied array
console.log("\nCopied Array");
show_magicians(copy_great_magicians);

