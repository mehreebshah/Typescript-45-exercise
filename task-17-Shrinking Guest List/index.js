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
//dinner table won't arrive
console.log("we can invite only 2 guest for dinner");
while (guestArray.length > 2) {
    let removeGuest = guestArray.pop();
    console.log(`Sorry ${removeGuest} we can't invite you to dinner!`);
}
guestArray.map((item) => console.log(`${item} You are still invited to a dinner!`));
guestArray.pop();
guestArray.pop();
console.log(guestArray);
