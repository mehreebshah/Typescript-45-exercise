function creat_car(manufacturer,model,...options){
    //initialize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model : model
    };
    //add additional options object to the car object
    options.forEach(options => {
        let [key, value] = options.split(':');
        car [key.trim()] = value.trim();
    });
    return car;
}
//call the function to creat a car object;
let my_car = creat_car("Toyota","Carrolla","Color:Black","Sunroof:True","Year:20224");

//print the variable to ensure all the information is stored correctly in the car object

console.log(my_car);

