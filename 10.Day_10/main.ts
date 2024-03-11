////////////////////////////////////////////    QUESTION 28  //////////////////////////////////////////
// Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.
// Explain & TIP: Use age to check the life stage. This practice shows how to handle multiple conditions with an if-else chain.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
let age: number = 25
if (age < 2) {
    console.log("The person is a baby.");
} else if (age > 2 && age < 4) {
    console.log("The person is a toddler.")
} else if (age > 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age > 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age > 20 && age < 30) {
    console.log("The person is an adult.");
} else if (age > 30 && age < 35) {
    console.log("The person is too Men.");
} else {
    console.log("The person is an elder.");
}
////////////////////////////////////////////    QUESTION 29  //////////////////////////////////////////
// Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.
// Explain & TIP: Arrays can store multiple items like fruit names. Use if statements to check for specific fruits.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
console.log("\n START 29 \n");
let fruits: Array<string> = ["Apple", "Orange", "Pineapple", "Mango"]
if (fruits.includes("Pineapple")) {
    console.log(`You Really Like Pineapple`);
}
if (fruits.includes("Orange")) {
    console.log(`You Really Like Orange`);
}
if (fruits.includes("Mango")) {
    console.log(`You Really Like Mango`);
}
if (fruits.includes("Apple")) {
    console.log(`You Really Like Apple`);
}

////////////////////////////////////////////    QUESTION 30  //////////////////////////////////////////
// Question 30: Hello Admin: Greet users differently, especially 'admin'.
// Explain & TIP: Loop through usernames to personalize greetings. This introduces looping and conditional logic together.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
console.log("\n START 30 \n");
let usernames: Array<string> = ["Adil", "Aneeq khatri", "Asharaib Ali", "Okasha", "Admin"]
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
        continue;
    }

    console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
}