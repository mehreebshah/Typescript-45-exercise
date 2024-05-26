function make_shirts(size:string = "large",printMessage:string = "I love typescript"){
    console.log(`Creating a ${size} shirt with the  ${printMessage} prints on shirt`);
}

//caling a function with  by default value
make_shirts();

//calling a function now with size and default message
make_shirts("Medium");

//calling a function with small size and differnet value
make_shirts("small","I love Javascript");