/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// your code goes here
tMinus = 60;

while(tMinus >= 0) {
    if(tMinus === 50){
        console.log(`Orbiter transfers from ground to internal power`);
    }
    else if(tMinus === 31){
        console.log(`Ground launch sequencer is go for auto sequence start`);
    }
    else if(tMinus === 16){
        console.log(`Activate launch pad sound suppression system`);
    }
    else if(tMinus === 10){
        console.log(`Activate main engine hydrogen burnoff system`);
    }
    else if(tMinus === 6){
        console.log(`Main engine start`);
    }
    else if(tMinus === 0){
        console.log(`Solid rocket booster ignition and liftoff!`);
    }
    else{
        console.log(`T-${tMinus} seconds`);
    }
    tMinus = tMinus - 1;
}

// NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. During the final minute, NASA has 6 tasks to complete:

// Orbiter transfers from ground to internal power (T-50 seconds)
// Ground launch sequencer is go for auto sequence start (T-31 seconds)
// Activate launch pad sound suppression system (T-16 seconds)
// Activate main engine hydrogen burnoff system (T-10 seconds)
// Main engine start (T-6 seconds)
// Solid rocket booster ignition and liftoff! (T-0 seconds)
// NOTE: "T-50 seconds" read as "T-minus 50 seconds".

// Directions:
// Write a while loop that counts down from 60 seconds and:

// If there's a task being completed, it prints out the task
// If there is no task being completed, it prints out the time as T-x seconds
// Use the task and time descriptions described above.

// Orbiter transfers from ground to internal power (T-50 seconds)
// Ground launch sequencer is go for auto sequence start (T-31 seconds)
// Activate launch pad sound suppression system (T-16 seconds)
// Activate main engine hydrogen burnoff system (T-10 seconds)
// Main engine start (T-6.6 seconds)


// Given Solution:
// // Let us take an iteration variable, that represent the remaining Time in seconds
// n = 60

// // While loop with a stop condition
// while (n >= 0) {
//     if (n === 50) {
//         console.log("Orbiter transfers from ground to internal power");
//     }
//     else if (n === 31) {
//         console.log("Ground launch sequencer is go for auto sequence start");
//     }
//     else if (n === 16) {
//         console.log("Activate launch pad sound suppression system");
//     }
//     else if (n === 10) {
//         console.log("Activate main engine hydrogen burnoff system");
//     }
//     else if (n === 6) {
//         console.log("Main engine start");
//     }
//     else if (n === 0) {
//         console.log("Solid rocket booster ignition and liftoff!");
//     }
//     else{
//         console.log("T-"+n+" seconds");
//     }

//     //Never forget to decrement/increment the iteration variable in a while loop
//     // Otherwise, you loop will run infinite iterations
//     n = n-1;
// }