//Creating an Array
let Numbers:number[] = [1,2,3,4,5,6,7,8,9];

//Using for of Loop
for(let oneNumber of Numbers){
    let ordinalEnding: string
    if(oneNumber === 1){
        ordinalEnding = "st"
    }
    else if(oneNumber === 2){
        ordinalEnding = "nd"
    }
    else if(oneNumber === 3){
        ordinalEnding = "rd"
    }
    else {
        ordinalEnding = "th"
    }
    console.log(`${oneNumber}${ordinalEnding}`);
}