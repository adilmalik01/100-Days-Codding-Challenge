////////////////////////////////////////////    QUESTION 25  //////////////////////////////////////////
// Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
let alien_color: string = "red"
if (alien_color === "red") {
    console.log(`Good Shoot! Congrats You Win 10 point`);
} else {
    console.log("Sorry You are Missing the Shot");
}

////////////////////////////////////////////    QUESTION 26  //////////////////////////////////////////
//Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.
// Explain & TIP: Expanding on the previous exercise, if-else chains allow you to handle multiple conditions.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////

let alien_color_green: string = "green"
if (alien_color_green === "green") {
    console.log(`Good Shoot green alien! Congrats You Win 5 point`);
} else {
    console.log("Sorry You are Missing the Shot");
}

////////////////////////////////////////////    QUESTION 27  //////////////////////////////////////////
// Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
// Explain & TIP: This exercise introduces you to handling multiple specific conditions in an if-else chain.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
let alien: string = "Orange"
if (alien === "Orange") {
    console.log(`Good Shoot ${alien} alien! Congrats You Win 10 point`);
} else if (alien === "red") {
    console.log(`Normal Shoot ${alien} alien! Congrats You Win 5 point`);
} else if (alien === "blue") {
    console.log(`Exellent Shoot ${alien} alien! You Win 15 point`);
} else {
    console.log(`Your shoot is miss`);
}


























