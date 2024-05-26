function makeSandwich(...items:string[]){
    console.log("\nMaking a Sandwich with the following items:");
    
    items.forEach(singleItem => console.log("-" + singleItem));

    console.log("\nNow Enjoy Sandwich");
    
}

//call the function 3 time with different of arguments
makeSandwich("bread","Chicken","Cheese","Mayo","Tomato","Egg");

makeSandwich("bread","Chicken","Cheese");

makeSandwich("Bread","Butter","Mayo","Ketchup","Tomato","Egg","Chicken","Cheese","Lettuce");