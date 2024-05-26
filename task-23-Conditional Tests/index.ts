let car:string = "supra";

console.log("\n ---------5 test to evaluate to True");

//Test 1
console.log("Is Car == 'supra'? I predict True");
console.log(car === 'supra');

//Test 2
console.log("Is Car != 'Toyota'? I predict True");
console.log(car != 'Toyota');

//test 3
console.log("Is the lenght of Car > 4? I predict True");
console.log(car.length > 4);

//Test 4
console.log("Is the lenght of car <= 6? I predict true");
console.log(car.length <= 6);

//Test 5 
console.log("Is car start with s? I predict True");
console.log(car.startsWith('s'));

console.log("\n ------5 false evaluate-------");


//test 1
console.log("Is car is == 'Honda'? I predict false");
console.log(car == "Honda");

//Test 2
console.log("Is car == 'Audi'? I predict false");
console.log(car == "Audi");

//test 3
console.log("Is car != 'supra'? I predict false");
console.log(car != 'supra');

//Test 4
console.log("is lenght of the Car is >7? I predict false");
console.log(car.length > 7);

//Test 5
console.log("Is Car == 'Mehran'? I can predict false");
console.log(car == 'Mehran');


