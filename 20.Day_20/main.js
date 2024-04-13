////////////////////////////////////////////    QUESTION 58  //////////////////////////////////////////
// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
//////////////////////////////////////////    ANSWER  //////////////////////////////////////////
function checkAverage() {
    var Score = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Score[_i] = arguments[_i];
    }
    var reduceMethod = Score.reduce(function (total, marks) { return total + marks; }, 0) / Score.length;
    return reduceMethod;
}
console.log(checkAverage(10, 3, 49, 49, 29));
console.log(checkAverage(10, 3, 49, 49, 29));
////////////////////////////////////////////    QUESTION 59  //////////////////////////////////////////
// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
//////////////////////////////////////////    ANSWER  //////////////////////////////////////////
function magicBox(specialNumber) {
    return function (inputNumber) {
        return inputNumber + specialNumber;
    };
}
var addFive = magicBox(5);
var result1 = addFive(3);
var result2 = addFive(10);
console.log(result1);
console.log(result2);
////////////////////////////////////////////    QUESTION 60 //////////////////////////////////////////
// /Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
//////////////////////////////////////////    ANSWER  //////////////////////////////////////////
var userProfile = (function () {
    var name = 'adil';
    var age = 17;
    return {
        displayProfile: function () {
            console.log("User name is ".concat(name, " and the user age is ").concat(age));
        }
    };
})();
userProfile.displayProfile();
