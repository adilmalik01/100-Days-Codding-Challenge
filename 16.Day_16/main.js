////////////////////////////////////////////    QUESTION 46  //////////////////////////////////////////
// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
// Explain & TIP: Objects can also contain functions (methods) that can perform actions using the object's properties. This introduces method definition within objects.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var laptopConfig = {
    Company: "Dell",
    Model: "ThinkPad X1 Carbon",
    Year: 2022,
    Processor: "Intel Core i5",
    OperatingSystem: "window 10",
    RAM: "16 GB",
    describe: function () {
        console.log("This laptop is ".concat(this.Company, " ").concat(this.Model, " ").concat(this.Processor, " and ").concat(this.RAM, " ").concat(this.OperatingSystem, "      "));
    }
};
laptopConfig.describe();
////////////////////////////////////////////    QUESTION 47  //////////////////////////////////////////
// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
// Explain & TIP: Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
var arrayOfObject = [
    {
        Company: "Dell",
        Model: "ThinkPad X1 Carbon",
        Year: 2022,
    },
    {
        Company: "HP",
        Model: "",
        Year: 2021,
    },
    {
        Company: "Tosheeba",
        Model: "ThinkPad X2 Carbon",
        Year: 2023,
    },
    {
        Company: "lenovo",
        Model: "ThinkPad X1 Carbon",
        Year: 2024,
    }
];
var firstLaptop = arrayOfObject[0], secondLaptop = arrayOfObject[1], thirdLaptop = arrayOfObject[2], fourthLaptop = arrayOfObject[3];
console.log(firstLaptop);
console.log(fourthLaptop);
////////////////////////////////////////////    QUESTION 48  //////////////////////////////////////////
// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
// Explain & TIP: The spread operator can be used in conjunction with array methods like sort() to combine and manipulate arrays efficiently.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
var priceslist1 = [15000, 1200, 11000];
var pricesList2 = [40000, 35000, 26000];
var sumPrice = __spreadArray(__spreadArray([], pricesList2, true), pricesList2, true).sort(function (a, b) { return a - b; });
console.log(sumPrice);
