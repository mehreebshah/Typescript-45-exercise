let str1:string = "Areeba";
let str2:string = "shah";
let num1:number = 2;
let num2:number = 3;
let Arr:number[] = [1,2,3,4,5]


//"Tests for equality and inequality with strings"
console.log("Tests for equality and inequality with strings");
console.log(str1 === 'Areeba');
console.log(str1 !== str1);

//Tests using the lower case function
console.log('\nTests using the lower case function');

console.log(str1.toLowerCase() === 'areeba');
console.log(str2.toLowerCase() !== str2);

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log('\nNumerical tests');
console.log(num1 === num2);
console.log(num2 !== 5);
console.log(num1 > num2);
console.log(num1 <= 2);

//Tests using "and" and "or" operators
console.log('\nTests using "and" and "or" operators');
console.log((num1 < 10 && num2 > 15));
console.log((num1 < 3 || num2 > 15));

//Test whether an item is in a array
console.log('\nTest whether an item is in a array');
console.log(Arr.includes(3));
console.log(Arr.includes(6));

//Test whether an item is not in a array
console.log('\nTest whether an item is not in a array');
console.log(!Arr.includes(3));
console.log(!Arr.includes(8));


