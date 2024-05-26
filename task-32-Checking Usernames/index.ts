let current_users = ["Zain","Amna","Areeba","Rifat"];

let new_users = ["Mehak","Ali","Areeba","Rifat"];

new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`);
    }else{
        console.log(`This Username ${new_one_user} is available`);
        
    }
})