////////////////////////////////////////////    QUESTION 52  //////////////////////////////////////////
// Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
//////////////////////////////////////////    ANSWER  //////////////////////////////////////////
// Sets up details about a smartphone
var smartphone = {
    make: "Samsung",
    model: "Galaxy S21",
    other: {
        storage: "128GB",
        screenSize: "6.2 inches",
        batteryLife: "18 hours"
    }
};
// Shows what we've set up about the smartphone
console.log(smartphone);
////////////////////////////////////////////    QUESTION 53  //////////////////////////////////////////
// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
//////////////////////////////////////////    ANSWER  //////////////////////////////////////////
var developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};
var languages = developerSkills.languages, frameworks = developerSkills.frameworks, tools = developerSkills.tools;
// Showing a skill from each category
console.log("Language: ".concat(languages[0], ", Framework: ").concat(frameworks[2], ", Tool: ").concat(tools[1]));
////////////////////////////////////////////    QUESTION 54  //////////////////////////////////////////
// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
//////////////////////////////////////////    ANSWER  //////////////////////////////////////////
var dynamicObject = function (key, value) {
    console.log(key, value);
    var object = {};
    object[key] = value;
    return object;
};
console.log(dynamicObject("car", "sonata"));
