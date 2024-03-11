////////////////////////////////////////////    QUESTION 19  //////////////////////////////////////////
// Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.
////////////////////////////////////////////   ANSWER  //////////////////////////////////////////
let guestList: string[] = ["Shoaib Sharih", "Talha", "Feroz Khan", "Okasha Aijaz", "Aneeq Khatri", "Ashrib Ali"]
console.log(`Ooops' I am ${guestList.length} Invited On Dinner.`); // Check How many guests invited On dinner

////////////////////////////////////////////    QUESTION 20  //////////////////////////////////////////
// Question 20: Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
////////////////////////////////////////////   ANSWER  //////////////////////////////////////////

let listItem: string[] = ["Audi", "Porchse", "Thar", "Sonata", "Lamborghini", "Bentli"]
console.log(` \nI like Drive THis Cars: ${listItem}`);

////////////////////////////////////////////    QUESTION 21  //////////////////////////////////////////
// Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
////////////////////////////////////////////   ANSWER  //////////////////////////////////////////
interface OBj {
    carName: string,
    carModel: number,
    carColor: string
}

let carObject: OBj = {
    carName: "Sonata",
    carModel: 2022,
    carColor: "White"
}
console.log("\n OBJECT ANSWER \N");
console.log(` \nThe Car Name is ${carObject.carName} car color is ${carObject.carColor} and model is ${carObject.carModel}`);

