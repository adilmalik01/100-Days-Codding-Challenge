////////////////////////////////////////////    QUESTION 34  //////////////////////////////////////////
// Question 34: Pizzas: Share your favorite pizzas and express your love for them.
// Explain & TIP: Use a for loop to iterate over your pizza list, allowing you to express your preference for each type. This demonstrates looping through an array and appending custom messages to each item.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
var favorite_pizza = ["Fatija", "Tikka", "Crown", "Creamy Stach", "pepperoni"];
for (var i = 0; i < favorite_pizza.length; i++) {
    var iteration = "\nI Like ".concat(favorite_pizza[i], " Pizza Soo Much");
    console.log(iteration);
}
console.log("\nI really Love Pizza!");
////////////////////////////////////////////    QUESTION 35  //////////////////////////////////////////
// Question 35: Animals: Highlight animals with a common trait.
// Explain & TIP: Looping through an array of animals allows you to comment on each one individually. This teaches you how to personalize messages within a loop based on array items.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
console.log("\n>>>>>>>>>ANSWER NO 35 <<<<<<<<<\n");
var Animals = ["Loin", "Cheetah", "Cat"];
var clutter;
Animals.forEach(function (data) {
    if (data === "Loin") {
        clutter = "Known as the king of the jungle, it's a skilled hunter and commands respect.";
    }
    else if (data === "Cheetah") {
        clutter = " The fastest land animal, reaching speeds up to 100 km/h while running.";
    }
    else if (data === "Cat") {
        clutter = "Quiet and serene, yet playful and mischievous, embodying independence and grace.";
    }
    else {
        console.log("No More Pet");
    }
    console.log("\n".concat(data, " is ").concat(clutter));
});
////////////////////////////////////////////    QUESTION 36  //////////////////////////////////////////
// Question 36: T-Shirt: Create a function for customizing t-shirts.
// Explain & TIP: Writing a function that accepts parameters allows you to reuse code efficiently. This introduces you to function parameters and printing dynamic content based on those parameters.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
console.log("\n>>>>>>>>>ANSWER NO 36 <<<<<<<<<\n");
var create_Shirt = function (size, messages) {
    var print_Message = "\nMaking a \"".concat(size, "\" size t-shirt with the message ").concat(messages, " printed on it.");
    return print_Message;
};
var $1stShirt = create_Shirt("S", "keep it Up");
console.log($1stShirt);
var $2ndShirt = create_Shirt("M", "Keep Calm");
console.log($2ndShirt);
var $3rdShirt = create_Shirt("L", "Code is Life");
console.log($1stShirt);
