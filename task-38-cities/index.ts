function describe_cities(city:string,country:string = "Pakistan"){
    console.log(`${city} is in ${country}`);
}
//calling a function
describe_cities("Karachi");
describe_cities("Lahore");
describe_cities("Berlin","Germany")