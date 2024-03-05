// Question 2: Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
var studentName = "Muhammad Adil";
console.log("\u201CHello ".concat(studentName, ",would you like to learn some TypeScript today?\u201D"));
//Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// change in lower Case
var lowerCaseName = "ABDULLAH";
console.log(lowerCaseName.toLowerCase());
// change in upper Case
var upperCaseName = "abdullah";
console.log("", upperCaseName.toUpperCase());
// change in Title Case
var titleCaseName = "abDulLah";
console.log(lowerCaseName.charAt(0).toUpperCase() + titleCaseName.slice(1, titleCaseName.length).toLowerCase());
