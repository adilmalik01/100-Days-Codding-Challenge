////////////////////////////////////////////    QUESTION 10  //////////////////////////////////////////
// Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does
////////////////////////////////////////////    ANSWER 10   //////////////////////////////////////////
// Here I stored My Favourite Number in a varibale the name or favoutriteNumber And simply print 
//  console.log with templete litterls and another text .
var favoriteNumber = 5;
console.log("Hey guy's ".concat(favoriteNumber, " is my favorite number "));
////////////////////////////////////////////    QUESTION 11  //////////////////////////////////////////
// Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
////////////////////////////////////////////    ANSWER 11   //////////////////////////////////////////
var friendsName = ["Ali", "Azeem", "Feroz", "Talal", "Asif"];
for (var i = 0; i < friendsName.length; i++) {
    console.log(friendsName[i]);
}
// here I using For in loop
console.log(" \n with For of loop \n");
for (var _i = 0, friendsName_1 = friendsName; _i < friendsName_1.length; _i++) {
    var i = friendsName_1[_i];
    console.log(i);
}
////////////////////////////////////////////    QUESTION 12  //////////////////////////////////////////
// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
////////////////////////////////////////////    ANSWER 12   //////////////////////////////////////////
friendsName.forEach(function (name) {
    console.log("hello ".concat(name, " How are You brother"));
});
