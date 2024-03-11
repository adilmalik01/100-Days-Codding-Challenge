////////////////////////////////////////////    QUESTION 13  //////////////////////////////////////////
// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
////////////////////////////////////////////    ANSWER 13  //////////////////////////////////////////
let transportation: string[] = ["Audi", "Honda Civic", "Sonata", "GT 500", "Porchse"]
for (let i = 0; i < transportation.length; i++) {
    console.log(`A ${transportation[i]} is My favourite Vechile`);
}

////////////////////////////////////////////    QUESTION 14  //////////////////////////////////////////
// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
    ////////////////////////////////////////////    ANSWER 14  //////////////////////////////////////////
console.log("\n Guests List ");
let guestList: string[] = ["Shoaib Sharih", "Talha", "Feroz", "Okasha", "Aneeq"]
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hey ${guestList[i]}  Your are Invited to dinner Kindly Come on the Time.`);
}

////////////////////////////////////////////    QUESTION 15  //////////////////////////////////////////
// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
////////////////////////////////////////////    ANSWER 15  //////////////////////////////////////////
console.log("\n with question number 15 attached \n");
let canNotCome = guestList.indexOf("Talha")
console.log(`${guestList[canNotCome]} Can't Join Dinner`);


let newGuest = "Sir Zia Khan"
guestList[canNotCome] = newGuest

guestList.map((guest) => {
    console.log(`${guest} would you like to join me for dinner ?`);
})


