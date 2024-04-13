////////////////////////////////////////////    QUESTION 58  //////////////////////////////////////////
// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
//////////////////////////////////////////    ANSWER  //////////////////////////////////////////

function checkAverage(...Score: number[]) {
    let reduceMethod = Score.reduce((total, marks) => total + marks, 0) / Score.length
    return reduceMethod
}

console.log(checkAverage(10, 3, 49, 49, 29));
console.log(checkAverage(10, 3, 49, 49, 29));

////////////////////////////////////////////    QUESTION 59  //////////////////////////////////////////
// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
//////////////////////////////////////////    ANSWER  //////////////////////////////////////////

function magicBox(specialNumber: number) {
    return function (inputNumber: number): number {
        return inputNumber + specialNumber;
    }
}


const addFive = magicBox(5);
const result1 = addFive(3);
const result2 = addFive(10);

console.log(result1);
console.log(result2);

////////////////////////////////////////////    QUESTION 60 //////////////////////////////////////////
// /Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
//////////////////////////////////////////    ANSWER  //////////////////////////////////////////

const userProfile = (function () {
    let name = 'adil';
    let age = 17
    return {
        displayProfile: function () {
            console.log(`User name is ${name} and the user age is ${age}`);
        }
    }
})();

userProfile.displayProfile()

