"use strict";
function describe_cities(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
//calling a function
describe_cities("Karachi");
describe_cities("Lahore");
describe_cities("Berlin", "Germany");
