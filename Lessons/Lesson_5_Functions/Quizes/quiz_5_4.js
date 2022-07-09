/*
 * Programming Quiz: Laugh (5-4)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `laugh`
 * - Your code should include an anonymous function expression stored in the variable `laugh`
 * - Your anonymous function expression should take one argument
 * - Your anonymous function expression should return the correct number of `hahaha`\'s
 */


// var laugh = /* finish the function expression */

// console.log(laugh(10));

let sound = ""
let laugh = function(num) {
    n = "0"
    while (n < num ) {
        n++;
        sound += "ha";
    }
        sound = `${sound}!`; 
    return sound; 
};

console.log(laugh(10));

// Given Solution:

// Here is one of the possible solutions:

// // Declare an empty string
// var sound = "" ; 

// // An anonymous function expression stored in the variable `laugh`
// var laugh = function(num) {

//     //Iterate
//     for (var x = 0 ; x < num ; x++) {
//         sound = sound + "ha" ;  
//     }
//     sound = sound +"!"; 
//     return sound; 
// }

// // It is essential that the function must return a string
// console.log(laugh(3)) ;
