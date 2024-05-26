"use strict";
// can not make it Dinner
let guestArray = ["Areeba", "Mehak", "Rifat"];
let canNotAttend = "Rifat";
console.log(`${canNotAttend} can not make it, for dinner`);
// Invite new guest
let newGuest = "Amna";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);
//send message
guestArray.map((item) => console.log(`hello,${item} you would invite for a dinner`));
