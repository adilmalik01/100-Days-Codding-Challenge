////////////////////////////////////////////    QUESTION 49  //////////////////////////////////////////
// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
// Explain & TIP: Rest parameters allow a function to accept an indefinite number of arguments as an array, providing a way to handle multiple inputs gracefull
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////

const setRestParameter = (...hobbies: string[]) => {
    // console.log(hobbies);
    for (const iterator of hobbies) {
        console.log(`I am Enjoy ${iterator}`);
    }
}
setRestParameter("coding", "playing game", "football", "problem solving", "travel")


////////////////////////////////////////////    QUESTION 50  //////////////////////////////////////////
// Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.
// Explain & TIP: Template literals support multiline strings, making it easier to create readable text blocks that incorporate variables and expressions.
// ANSWER  //////////////////////////////////////////


let myIdealDay = `My ideal day would involve:
1. Waking up early and going for a jog.
2. Spending a few hours coding on a personal project.
3. Ending the day by reading a good book.`;

console.log(myIdealDay);


////////////////////////////////////////////    QUESTION 51  //////////////////////////////////////////
// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
// Explain & TIP: Arrow functions provide a concise syntax for writing functions in JavaScript and TypeScript, making your code cleaner and more readable.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////


