function make_car(manufacturer: string, model: string,...options:[string,any][]): object {
    let car = {manufacturer, model};
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Toyota","Carolla",["color","red"],["Year",2024]));
console.log(make_car("Ford","Fiesta",["color","black"],["sunroof",true]));
