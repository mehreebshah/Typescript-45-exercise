"use strict";
let userNames = ["admin", "ali", "areeba", "amna"];
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${userNames[i]}, thankyou for logging in again.`);
    }
}
