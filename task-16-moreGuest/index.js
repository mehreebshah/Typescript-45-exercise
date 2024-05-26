"use strict";
// can not make it Dinner
let guestArray = ["Areeba", "Mehak", "Rifat"];
let canNotAttend = "Rifat";
// Invite new guest
let newGuest = "Amna";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
//send message
guestArray.map((item) => console.log(`hello,${item} you would invite for a dinner`));
//add Anoucement
console.log("\nWellcome all We found a bigger dinner table!");
//Add new guest
guestArray.unshift("zain");
//add guest at middle
guestArray.splice(2, 0, "Rifat");
//add guest at end
guestArray.push("fatima");
//print a message
guestArray.map((item) => console.log(`\nDear ${item} you are invited for dinner`));
