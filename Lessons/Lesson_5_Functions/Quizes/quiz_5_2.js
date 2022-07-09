/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should have one parameter named `num`
 * - Your `laugh()` function should return the correct number of laughs
 */
let sound = "";
function laugh(num) {
    n = 0;
    while (n < num ) {
        n++;
        sound += "ha";
    }
        sound = `${sound}!`; 
    return sound; 
}
console.log(laugh(3));

// Given Solution:

// Here is one of the possible solutions:
// var sound = "" ; 
// function laugh(num) {
//     for (var x = 0 ; x < num ; x++) {
//         sound = sound + "ha" ;  
//     }
//     sound = sound +"!"; 
//     return sound; 
// }

// console.log(laugh(3)) ;


// Given Solution:

// Here is one of the possible solutions:
// // creates a line of * for a given length
// function makeLine(length) {
//     var line = "";
//     for (var j = 1; j <= length; j++) {
//         line += "* ";
//     }
//     return line + "\n";
// }

// // your code goes here.  Make sure you call makeLine() in your own code.
// function buildTriangle(length) {
//     // Let's build a huge string equivalent to the triangle
//     var triangle = "";

//     //Let's start from the topmost line
//     var lineNumber = 1;

//     for(lineNumber=1; lineNumber<=length; lineNumber++){
//         // We will not print one line at a time.
//         // Rather, we will make a huge string that will comprise the whole triangle
//         triangle = triangle + makeLine(lineNumber);
//     }
//     return triangle;
// }

// // test your code by uncommenting the following line
// // Note that the function buildTriangle() must return a string 
// // because the console.log() accepts a string argument
// console.log(buildTriangle(10));