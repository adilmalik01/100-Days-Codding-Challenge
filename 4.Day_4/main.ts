////////////////////////////////////////////    QUESTION 10  //////////////////////////////////////////
// Question 10: Adding Comments:  If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does
////////////////////////////////////////////    ANSWER 10   //////////////////////////////////////////
// Here I stored My Favourite Number in a varibale the name or favoutriteNumber And simply print 
//  console.log with templete litterls and another text .
let favoriteNumber: number = 5
console.log(`Hey guy's ${favoriteNumber} is my favorite number `);
////////////////////////////////////////////    QUESTION 11  //////////////////////////////////////////
// Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
////////////////////////////////////////////    ANSWER 11   //////////////////////////////////////////
let friendsName: Array<string> = ["Ali", "Azeem", "Feroz", "Talal", "Asif"]
for (let i = 0; i < friendsName.length; i++) {
    console.log(friendsName[i]);
}
// here I using For in loop
console.log(" \n with For of loop \n");
for (const i of friendsName) {
    console.log(i);
}

////////////////////////////////////////////    QUESTION 12  //////////////////////////////////////////
// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
////////////////////////////////////////////    ANSWER 12   //////////////////////////////////////////
console.log("\n");
friendsName.forEach((name) => {
    console.log(`hello ${name} How are You brother`);
})



