////////////////////////////////////////////    QUESTION 22  //////////////////////////////////////////
// Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
let guestList: string[] = ["Shoaib Sharih", "Talha", "Feroz Khan", "Okasha Aijaz", "Aneeq Khatri", "Ashrib Ali"]
console.log(guestList[8]) // undifiend error
console.log(guestList[4]) // Here right index 

////////////////////////////////////////////    QUESTION 23  //////////////////////////////////////////
// Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
let car: string = "Sonata"
console.log("\n", car === "Sonata"); // I predict True
console.log(car === "sonata"); // I predict false

////////////////////////////////////////////    QUESTION 24  //////////////////////////////////////////
// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////

console.log("\nString Conditions")// String Conditions
console.log(car == "Sonata"); // I predict True
console.log(car == "sonata"); // I predict false

console.log("\n Numaric Conditions");// Numaric Conditions
console.log(5 >= 5); // I predict Ture
console.log(6 <= 5); // I predict false

console.log("\nLowerCase And UppeCase Conditions"); // LowerCase And UppeCase Conditions
console.log(car.toLowerCase() == "sonata"); // I predict True
console.log(car.toLowerCase() == "Sonata"); // I predict false
console.log(car.toUpperCase() == "SONATA"); // I predict True
console.log(car.toLowerCase() == "Sonata"); // I predict false

console.log("\n &&  ||");// (&&)and  (||)or operators conditions
console.log(5 >= 5 && 5 !< 6); // I predict Ture       /// both side are true so this is give me true
console.log(5 >= 5  || 5 < 6); // I predict false     // one side are true so this is give me true


